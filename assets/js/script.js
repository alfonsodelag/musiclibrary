


// // $("#submit").click(function(e){
// //     var finder = new Search($("#entity").val(), $("#inputSearch").val(), $("#country").val(), $("#explicit").val(), $("#limit").val());
// //     e.preventDefault();
// //     $.ajax({
// //     url: "https://itunes.apple.com/search?" + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit,        
// //     dataType: "jsonp",
// //         success: function(response){
// //             $.each(response.results, function(i, todo) {
//             var artistName= todo.artistName;
//             var albumName= todo.collectionName;
//             var country= todo.country;
//             var price= todo.collectionPrice;
//             var coverImage= todo.artworkUrl100;
//                 content.append(
//                     `<div class="row">
//                     <div class="col-3">
//                     <img src="${coverImage}"></img>
//                     <p>Artist Name: ${artistName}</p>
//                     <p>Album Name: ${albumName}</p>
//                     <p>Country: ${country}</p>
//                     <p>Price: ${price}</p>
//                     </div>
//                 </div>`)
//             });
//             console.log(response);
//         },
//         fail: function(errorThrown){
//         console.log(errorThrown);
//         }
// });
// });

var content = $('#container');


$("#submit").click(function(e){
    var uri = "https://itunes.apple.com/search?";
    var entity = $("#entity").val();
    var term= $("#inputSearch").val();
    var country= $("#country").val();
    var explicit= $("#explicit").val();
    var limit= $("#limit").val();
    console.log("entity: "+ entity);
    console.log("term: "+ term);
    console.log("country: "+ country);
    console.log("explicit: "+ explicit);
    console.log("limit: "+ limit);

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
            rowResults.append(
                `<div class="col-3">
                    <img src="${list[i].cover}"></img>
                    <p>Song Name: ${list[i].songName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Name: ${list[i].collectionName}</p>
                    <p>Country: ${list[i].country}</p>
                    <p>Price: ${list[i].trackPrice}</p>
                    <p>Release Date: ${list[i].releaseDate}</p>
                    <p>Song Length: ${Math.floor((list[i].songLength)/60000)} Minutes</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <audio> 
                    <source src="${list[i].audioSamples}" type="audio/mpeg"></source>
                    </audio>
                    <p>Itunes Song Link: ${list[i].songLink}</p>
                </div>`)
        }
    }

    function addArtistToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) { 
            rowResults.append(
                `<div class="col-3">
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <p>Artist Link: ${list[i].artistLink}</p>
                </div>`)
        }
    };

    function addAlbumToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) { 
            rowResults.append(
                `<div class="col-3">
                    <img src="${list[i].cover}"></img>
                    <p>Album Name: ${list[i].albumName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Price: ${list[i].albumPrice}</p>
                    <p>Number of Songs: ${list[i].songNumber}</p>
                    <p>Release Date: ${list[i].songLength}</p>
                    <p>Musical Genre: ${list[i].musicalGenre}</p>
                </div>`)
        }
    };

    function addVideoToHTML(list){
        var rowResults= $("#rowResults");
        for (let i = 0; i < list.length; i++) {
            console.log(list[i].cover);
            rowResults.append(
                `<div class="col-3">
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
                </div>`)
        }
    }



