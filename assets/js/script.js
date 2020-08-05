//This is where we are pasting our content
var content = $('#container');

$("#submit").click(function (e) {
    var uri = "https://itunes.apple.com/search?";
    //variables that store search parameters inputs
    var entity = $("#entity").val();
    var term = $("#inputSearch").val();
    var country = $("#country").val();
    var explicit = $("#explicit").val();
    var limit = $("#limit").val();
    content.html("");

    //Using finder class to search an entity with the parameters
    var finder = new Search(entity, term, country, explicit, limit);
    var finalUrl = uri + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit;

    console.log(finalUrl);
    e.preventDefault();

    //Using ajax to get information from the API
    $.ajax({
        url: finalUrl,
        dataType: "jsonp",
        success: function (response) {
            content.html("<div id='rowResults' class='row'></div>");
            var rowResults = $("#rowResults");

            //Switching between "cases" based on entity parameter
            switch (entity) {
                case "musicTrack":
                    var musicTrackList = [];
                    //Using OOP to store Data received from the Ajax petition
                    $.each(response.results, function (i, todo) {
                        var musicTrack = new Song(todo.artworkUrl100, todo.trackName, todo.artistName, todo.collectionName, todo.trackPrice, todo.releaseDate, todo.trackTimeMillis, todo.primaryGenreName, todo.previewUrl, todo.trackViewUrl)
                        musicTrackList.push(musicTrack);
                    });
                    addMusicTrackToHTML(musicTrackList);
                    break;

                case "musicArtist":
                    var musicArtistList = [];
                    //Using OOP to store Data received from the Ajax petition
                    $.each(response.results, function (i, todo) {
                        var musicArtist = new Artist(todo.artistName, todo.primaryGenreName, todo.artistLinkUrl);
                        musicArtistList.push(musicArtist);
                    })

                    addArtistToHTML(musicArtistList);
                    break;

                case "album":
                    var musicAlbumList = [];
                    //Using OOP to store Data received from the Ajax petition
                    $.each(response.results, function (i, todo) {
                        var musicAlbum = new Album(todo.artworkUrl100, todo.collectionName, todo.artistName, todo.collectionPrice, todo.trackCount, todo.releaseDate, todo.primaryGenreName)
                        musicAlbumList.push(musicAlbum);
                    })

                    addAlbumToHTML(musicAlbumList);
                    break;

                case "musicVideo":
                    var musicVideoList = [];
                    //Using OOP to store Data received from the Ajax petition
                    $.each(response.results, function (i, todo) {
                        var musicVideo = new Video(todo.artworkUrl100, todo.trackName, todo.artistName, todo.collectionName, todo.trackPrice, todo.releaseDate, todo.trackTimeMillis, todo.primaryGenreName, todo.previewUrl, todo.trackViewUrl)
                        musicVideoList.push(musicVideo);
                    });

                    addVideoToHTML(musicVideoList);
                    break;

                default:
                    break;
            }
            console.log(response);
        },
        fail: function (errorThrown) {
            console.log(errorThrown);
        }
    });
});


var countries = $('#country');  //variable for when using Countries API
var pasteFavorites = $("#favorites"); //Variable used for storing favorites chosen

//Using Ajax to get data response results from the countries API
$.ajax({
    url: "https://www.liferay.com/api/jsonws/country/get-countries/",
    dataType: "json",
    success: function (response) {
        for (let i = 0; i < response.length; i++) {
            countries.append(
                `<option value="${response[i].a2}">${response[i].name}</option>`
            );
        }
    }
});

function addMusicTrackToHTML(list) {
    var rowResults = $("#rowResults");
    for (let i = 0; i < list.length; i++) {
        var songId = "saveSongs" + i;

        //Using .append and the for loop to paste all the contents requested dynamically
        rowResults.append(
            `<br>
                <br>
                <div class="offset-lg-2 col-lg-4 col-md-8 card-styles borders center results">
                    <img src="${list[i].cover}"></img>
                    <p>Song Name: ${list[i].songName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Name: ${list[i].collectionName}</p>
                    <p>Price: ${list[i].songPrice} $</p>
                    <p>Release Date: ${list[i].releaseDate}</p>
                    <p>Song Length: ${Math.floor((list[i].songLength) / 60000)} Minutes</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <audio controls class="audiocontrols">
                    <source src="${list[i].audioSamples}" type="audio/mpeg">
                    </audio>
                    <p class="songlink">Itunes Song Link: ${list[i].songLink}</p>
                    <button class="${list[i].songName} blue"  id="${songId}" type="button">Save to Favorites</button>
                    <br>
                    <br>
                </div>`
        )

        //Saving to Local Storage
        $("#" + songId).click(function () {
            var songList = [];
            songList.push(list[i].songName);
            localStorage.setItem("Song: " + i, songList);
            var getFavoriteSong = localStorage.getItem("Song: " + i);
            console.log("get", getFavoriteSong);
            var removeSongList = [];
            removeSongList.push(getFavoriteSong);
            console.log()

            pasteFavorites.append(
                `<div id="favorites-container${i}" class="card mb-5 justify-content-center">
                        <p>${getFavoriteSong}</p>
                        <button attributes="favorites-container${i}" class="blue removeSong">Remove</button>
                </div>`
            )
            //Removing favorites
            $(".removeSong").click(function (e) {
                var selectedSong = e.target.attributes[0].nodeValue;
                $("#" + selectedSong).remove();
                localStorage.removeItem("Song: " + i);
            })
        });
    }

};

function addArtistToHTML(list) {
    var rowResults = $("#rowResults");
    for (let i = 0; i < list.length; i++) {
        var artistId = "saveArtists" + i;
        //Using .append and the for loop to paste all the contents requested dynamically
        rowResults.append(
            `<br>
                <br>
                <div class="offset-lg-2 col-lg-4 col-md-8 card-styles borders center results">
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <p>Artist Link: ${list[i].artistLink}</p>
                    <button class="${list[i].artistName} blue"  id="${artistId}" type="button">Save to Favorites</button>
                    <br>
                    <br>
                </div>`
        )
        //Saving to Local Storage
        $("#" + artistId).click(function () {
            var artistList = []
            artistList.push(list[i].artistName);
            localStorage.setItem("Artist: " + i, artistList);
            var getFavoriteArtist = localStorage.getItem("Artist: " + i);
            // removeArtistList = [];
            // removeArtistList.push(getFavoriteArtist);
            pasteFavorites.append(
                `<div id="artist-container${i}" class="card mb-5 justify-content-center">
                        <p>${getFavoriteArtist}</p>
                        <button attributes="artist-container${i}" class="blue removeArtist">Remove</button>
                        </div>`
            )

            //Removing favorites
            $(".removeArtist").click(function (e) {
                var selectedArtist = e.target.attributes[0].nodeValue;
                $("#" + selectedArtist).remove();
                localStorage.removeItem("Artist: " + i);
            })
        });
    }
};

function addAlbumToHTML(list) {
    var rowResults = $("#rowResults");
    for (let i = 0; i < list.length; i++) {
        var albumId = "saveAlbums" + i;
        //Using .append and the for loop to paste all the contents requested dynamically
        rowResults.append(
            `<br>
                <br>
                <div class="offset-lg-2 col-lg-4 col-md-8 borders card-styles center results">
                    <img src="${list[i].cover}"></img>
                    <p>Album Name: ${list[i].albumName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Price: ${list[i].albumPrice} $</p>
                    <p>Number of Songs: ${list[i].songNumber}</p>
                    <p>Release Date: ${list[i].songLength}</p>
                    <p>Musical Genre: ${list[i].musicalGenre}</p>
                    <button class="${list[i].albumName} blue" id="${albumId}" type="button">Save to Favorites</button>
                </div>`)

        //Saving to Local Storage
        $("#" + albumId).click(function () {
            var albumList = [];
            albumList.push(list[i].albumName)
            localStorage.setItem("Albums: " + i, albumList)
            var getFavoriteAlbums = localStorage.getItem("Albums: " + i)
            pasteFavorites.append(
                `<div id="albums-container${i}">
                    <p>${getFavoriteAlbums}</p>
                    <button attributes="albums-container${i}" class="blue removeAlbum"> Remove </button>                    
                </div>`
            )
            //Removing favorites
            $(".removeAlbum").click(function (e) {
                var selectedAlbum = e.target.attributes[0].nodeValue;
                $("#" + selectedAlbum).remove();
                localStorage.removeItem("Albums: " + i);
            })
        });
    }
};

function addVideoToHTML(list) {
    var rowResults = $("#rowResults");
    for (let i = 0; i < list.length; i++) {
        var btnId = "saveToFavorites" + i;
        var videoRemoveId = "removeFavorites" + i;
        //Using .append and the for loop to paste all the contents requested dynamically
        rowResults.append(
            `<br>
                <br>
                <div class="offset-lg-2 col-lg-4 col-md-8 borders card-styles center results">
                    <img src="${list[i].cover}"></img>
                    <p>Song Name: ${list[i].songName}</p>
                    <p>Artist Name: ${list[i].artistName}</p>
                    <p>Album Name: ${list[i].collectionName}</p>
                    <p>Song Price: ${list[i].songPrice} $</p>
                    <p>Release Date: ${list[i].releaseDate} </p>
                    <p>Song Length: ${Math.floor((list[i].songLength) / 60000)} Minutes</p>
                    <p>Genre: ${list[i].musicalGenre}</p>
                    <iframe src="${list[i].videoSample}"></iframe>
                    <p>Itunes Video Link: ${list[i].videoLink}</p>
                    <button class="${list[i].artistName} blue" id="${btnId}" type="button">Save to Favorites</button>
                </div>
            `
        );

        //Saving to Local Storage
        $("#" + btnId).click(function () {
            var videoartistList = [];
            videoartistList.push(list[i].artistName)
            localStorage.setItem("Favorites: " + i, videoartistList);
            var getFavoriteVideoArtist = localStorage.getItem("Favorites: " + i);
            pasteFavorites.append(
                `<div id="video-container${i}" class="card mb-5 justify-content-center">
                    <p>${getFavoriteVideoArtist}</p>
                    <button attributes="video-container${i}" class="blue removeVideo">Remove</button>
                </div>`
            )
            //Removing favorites
            $(".removeVideo").click(function (e) {
                var selectedVideo = e.target.attributes[0].nodeValue;
                $("#" + selectedVideo).remove();
                localStorage.removeItem("Favorites: " + i);
            })
        });
    }
}

