



// $("#submit").click(function(e){
//     var finder = new Search($("#entity").val(), $("#inputSearch").val(), $("#country").val(), $("#explicit").val(), $("#limit").val());
//     e.preventDefault();
//     $.ajax({
//     url: "https://itunes.apple.com/search?" + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit,        
//     dataType: "jsonp",
//         success: function(response){
//             console.log(response);
//         },
//         fail: function(errorThrown){
//         console.log(errorThrown);
//         }
//     });
// });

{/* <p>${todo.albumName}</p>
<p>${todo.country}</p>
<p>${todo.collectionPrice}</p>     */}



var content = $('#container');
       
$("#submit").click(function(e){
    var finder = new Search($("#entity").val(), $("#inputSearch").val(), $("#country").val(), $("#explicit").val(), $("#limit").val());
    e.preventDefault();
    $.ajax({
    url: "https://itunes.apple.com/search?" + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit,        
    dataType: "jsonp",
        success: function(response){
            $.each(response.results, function(i, todo) {
            var artistName= todo.artistName;
            var albumName= todo.collectionName;
            var country= todo.country;
            var price= todo.collectionPrice;
            var coverImage= todo.artworkUrl100;
                content.append(
                    `<div class="row">
                    <div class="col-3">
                    <img src="${coverImage}"></img>
                    <p>Artist Name: ${artistName}</p>
                    <p>Album Name: ${albumName}</p>
                    <p>Country: ${country}</p>
                    <p>Price: ${price}</p>
                    </div>
                    <div class="row">
                    <div class="col-3">
                    <img src="${coverImage}"></img>
                    <p>Artist Name: ${artistName}</p>
                    <p>Album Name: ${albumName}</p>
                    <p>Country: ${country}</p>
                    <p>Price: ${price}</p>
                    </div>
                    <div class="row">
                    <div class="col-3">
                    <img src="${coverImage}"></img>
                    <p>Artist Name: ${artistName}</p>
                    <p>Album Name: ${albumName}</p>
                    <p>Country: ${country}</p>
                    <p>Price: ${price}</p>
                    </div>
                    <div class="row">
                    <div class="col-3">
                    <img src="${coverImage}"></img>
                    <p>Artist Name: ${artistName}</p>
                    <p>Album Name: ${albumName}</p>
                    <p>Country: ${country}</p>
                    <p>Price: ${price}</p>
                    </div>
                </div>`)
            });
            console.log(response);
        },
        fail: function(errorThrown){
        console.log(errorThrown);
        }
});
});



// class song extends (artist, album) {
//     constructor(cover, songName, artistName, albumName, songPrice, releaseDate, songLength, musicalGenre, audioSamples, songLink){
//         super(artistName, albumName);
//             this.cover= cover;
//             this.songName= songName;
//             this.artistName= artistName;
//             this.albumName= albumName;
//             this.songPrice= songPrice;
//             this.releaseDate= releaseDate;
//             this.songLength= songLength;
//             this.musicalGenre= musicalGenre;
//             this.audioSamples= audioSamples;
//             this.songLink= songLink;
//     }
// }


// function pasteData(){
//     var paragraph= 
//     $("#artistName").append(paragraph);
//     array.forEach(element => {
        
//     });

// }


// function saludar(nombre){
//     console.log('Hola' + Alfonso)
// }
// saludar(Alfonso);
    





        

