


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
                    $.each(response.results, function(i,todo){
                        
                    });
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
                    
                    $.each(response.results, function(i,todo){
                       
                    })
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


