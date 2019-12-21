var content = $('#container');

$("#submit").click(function(e){
    var uri = "https://itunes.apple.com/search?";
    var entity = $("#entity").val();
    var term= $("#inputSearch").val();
    var country= $("#country").val();
    var explicit= $("#explicit").val();
    var limit= $("#limit").val();
    content.html("");
    
    
    var finder = new Search(entity, term, country, explicit, limit);
    var finalUrl= uri + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit;        
    
    console.log(finalUrl);
    e.preventDefault();
    $.ajax({
    url: finalUrl,        
    dataType: "jsonp",
        success: function(response){
            content.html("<div id='rowResults' class='row'></div>");
            var rowResults= $("#rowResults");
            switch(entity) {
            
                case "musicTrack":
                    var musicTrackList= [];
                    $.each(response.results, function(i,todo){
                       var musicTrack= new Song(todo.artworkUrl100, todo.trackName, todo.artistName, todo.collectionName, todo.trackPrice, todo.releaseDate, todo.trackTimeMillis, todo.primaryGenreName, todo.previewUrl, todo.trackViewUrl)
                        musicTrackList.push(musicTrack);
                    });
        addMusicTrackToHTML(musicTrackList);
                break;

                
                case "musicArtist":
                    var musicArtistList= [];

                    $.each(response.results, function(i, todo){
                       var musicArtist = new Artist(todo.artistName, todo.primaryGenreName, todo.artistLinkUrl);
                        musicArtistList.push(musicArtist);
                    })

        addArtistToHTML(musicArtistList);
                break;

                case "album":
                    var musicAlbumList= [];
                    $.each(response.results, function(i, todo) {
                        var musicAlbum= new Album(todo.artworkUrl100, todo.collectionName, todo.artistName, todo.collectionPrice, todo.trackCount, todo.releaseDate, todo.primaryGenreName)
                        musicAlbumList.push(musicAlbum);
                    })

        addAlbumToHTML(musicAlbumList);
                break;

                case "musicVideo":
                var musicVideoList= [];
                    $.each(response.results, function(i,todo){
                       var musicVideo= new Video(todo.artworkUrl100, todo.trackName, todo.artistName, todo.collectionName, todo.trackPrice, todo.releaseDate, todo.trackTimeMillis, todo.primaryGenreName, todo.previewUrl, todo.trackViewUrl)
                        musicVideoList.push(musicVideo);
                    });

        addVideoToHTML(musicVideoList);
                break;

                default: 
                break;
}
            console.log(response);
        },
        fail: function(errorThrown){
        console.log(errorThrown);
        }
});
});


var countries=  $('#country');
var pasteFavorites= $("#favorites");
    $.ajax({
        url: "https://www.liferay.com/api/jsonws/country/get-countries/",
        dataType: "json",
        success: function( response ) {
                for (let i = 0; i < response.length; i++) {
                    countries.append(
                        `<option value="${response[i].a2}">${response[i].name}</option>`
                    );
                }
             }
    });

    function addMusicTrackToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) {
            var songId= "saveSongs"+i;
            rowResults.append(
                `<br>
                <br>
                <div class="col-lg-4 col-sm-6 borders">
                    <img src="${list[i].cover}"></img>
                    <p>Song Name: ${list[i].songName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Name: ${list[i].collectionName}</p>
                    <p>Country: ${list[i].country}</p>
                    <p>Price: ${list[i].trackPrice}</p>
                    <p>Release Date: ${list[i].releaseDate}</p>
                    <p>Song Length: ${Math.floor((list[i].songLength)/60000)} Minutes</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <audio controls class="audiocontrols">
                    <source src="${list[i].audioSamples}" type="audio/mpeg">
                    </audio>
                    <p class="songlink">Itunes Song Link: ${list[i].songLink}</p>
                    <button class="${list[i].songName} blue"  id="${songId}" type="button">Save to Favorites</button>
                    <br>
                    <br>
                </div>`)

                $("#"+songId).click(function(){
                    var songList= [];
                    songList.push(list[i].songName);
                    localStorage.setItem("Song: "+i, songList);
                    var getFavoriteSong= localStorage.getItem("Song: "+i);
                    pasteFavorites.append(
                        `<div >
                        <p>${getFavoriteSong}</p>
                        </div>`
                    )
                });
        }
        
    };

    function addArtistToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) { 
            var artistId= "saveArtists"+i;
            console.log("artist Id: " + artistId);
            rowResults.append(
                `<br>
                <br>
                <div class="col-lg-4 col-sm-6 borders">
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <div class="artistLink>
                    <p>Artist Link: ${list[i].artistLink}</p>
                    </div>
                    <button class="${list[i].artistName} blue" id=${artistId} type="button">Save to Favorites</button>
                    <br>
                    <br>
                </div>`)
                $("#"+artistId).click(function(){
                    var artistList= []
                    artistList.push(list[i].artistName);
                    localStorage.setItem("Artist: "+i, artistList);
                    var getFavoriteArtist= localStorage.getItem("Artist: "+i);
                    console.log("get favorite artist: " + getFavoriteArtist);
                    pasteFavorites.append(
                        `<div >
                        <p>${getFavoriteArtist}</p>
                        </div>`
                    )
                });
        }
    };

    function addAlbumToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) { 
            var albumId= "saveAlbums"+i;

            rowResults.append(
                `<br>
                <br>
                <div class="col-lg-4 col-sm-6 borders">
                    <img src="${list[i].cover}"></img>
                    <p>Album Name: ${list[i].albumName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Price: ${list[i].albumPrice}</p>
                    <p>Number of Songs: ${list[i].songNumber}</p>
                    <p>Release Date: ${list[i].songLength}</p>
                    <p>Musical Genre: ${list[i].musicalGenre}</p>
                    <button name="${list[i].albumName} blue" id="${albumId}" type="button">Save to Favorites</button>
                    <br>
                    <br>
                </div>`)
             
              
            $("#"+albumId).click(function(){
                var albumList= [];
                albumList.push(list[i].albumName)
                localStorage.setItem("Albums: "+i, albumList)
                var getFavoriteAlbums= localStorage.getItem("Albums: "+i)
                console.log(getFavoriteAlbums);
                pasteFavorites.append(
                    `<div >
                    <p>${getFavoriteAlbums}</p>
                    </div>`
                )
            });
        }
    };

    function addVideoToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) {
            var btnId = "saveToFavorites"+i;
            rowResults.append(
                `<br>
                <br>
                <div class="col-lg-4 col-sm-6 borders">
                    <img src="${list[i].cover}"></img>
                    <p>Song Name: ${list[i].songName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Name: ${list[i].albumName}</p>
                    <p>Song Price: ${list[i].songPrice}</p>
                    <p>Release Date: ${list[i].releaseDate} </p>
                    <p>Song Length: ${Math.floor((list[i].songLength)/60000)} Minutes</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <iframe src="${list[i].videoSample}"></iframe>
                    <p>Itunes Video Link: ${list[i].videoLink}</p>
                    <button name="${list[i].artistName} blue" id="${btnId}" type="button">Save to Favorites</button>
                    <br>
                    <br>
                </div>`);

                $("#"+btnId).click(function(){
                    
                    var videoartistList= [];
                    videoartistList.push(list[i].artistName)
                    // var num = $("#artistName").html();
                    localStorage.setItem("Favorites: "+i, videoartistList);    
                var getFavoriteVideoArtist= localStorage.getItem("Favorites: "+i);

                pasteFavorites.append(
                    `<div >
                    <p>${getFavoriteVideoArtist}</p>
                    </div>`
                )
            });
        }
    }




