


class artist {
    "first name"
    "musical genre"
    "artist link on iTunes"
}

class song {
    "song cover"
    "name of the song"
    "artist name"
    "album name"
    "song price"
    "release date"
    "song length"
    "musical genre"
    "audio sample of the song"
    "song link in iTunes"

    getsongname

}

class album {
    "album cover"
    "album name"
    "artist name"
    "album price"
    "number of songs"
    "release date"
    "musical genre"
}

class video {
    "video cover"
    "name of the song"
    "artist name"
    "song Price"
    "release date"
    "song length"
    "musical genre"
    "clip video sample"
    "link of the music video on iTunes"
}

class library{

}

// Using JSONP
$.ajax({
    url: "https://itunes.apple.com/search?term=michael+jackson",
 
   
 
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
 
    // Work with the response
    success: function( response ) {
        console.log( response ); // server response
    }
});