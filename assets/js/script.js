


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

            switch(entity) {
                case "musicTrack":
                    $.each(response.results, function(i,todo){
                        content.append(
                            `<div class="row">
                                <div class="col-3">
                                    <img src="${todo.artworkUrl100}"></img>
                                    <p>Song Name: ${todo.trackName}</p>
                                    <p>Artist Name: ${todo.artistName}</p>
                                    <p>Album Name: ${todo.collectionName}</p>
                                    <p>Country: ${todo.country}</p>
                                    <p>Price: ${todo.trackPrice}</p>
                                    <p>Release Date: ${todo.releaseDate}</p>
                                    <p>Song Length: ${todo.trackTimeMillis}</p>
                                    <p>Genre: ${todo.primaryGenreName}</p>
                                    <p>Audio Sample: ${todo.previewUrl}</p>
                                    <p>Itunes Song Link: ${todo.trackViewUrl}</p>
                                </div>
                            </div>`)
                    });
                break;
                case "musicArtist":
                    $.each(response.results, function(i, todo){
                        content.append(
                            `<div class="row">
                                <div class="col-3">
                                    <p>Artist Name:${todo.artistName}</p>
                                    <p>Genre: ${todo.primaryGenreName}</p>
                                    <p>Link: ${todo.artistviewUrl}</p>
                                </div>
                            </div>`)
                    })
               
                break;

                case "album":
                    $.each(response.results, function(i, todo) {
                        content.append(
                            `<div class="row">
                                <div class="col-3">
                                    <img src="${todo.artworkUrl100}"></img>
                                    <p>Album Name: ${todo.collectionName}</p>
                                    <p>Artist Name: ${todo.artistName}</p>
                                    <p>Album Price: ${todo.collectionPrice}</p>
                                    <p>Number of Songs: ${todo.trackCount}</p>
                                    <p>Release Date: ${todo.releaseDate}</p>
                                    <p>Musical Genre: ${todo.primaryGenreName}</p>
                                </div>
                            </div>`)
                    });
                break;
                case "musicVideo":
                    $.each(response.results, function(i,todo){
                        content.append(
                        `<div class="row">
                            <div class="col-3">
                            <img src="${todo.artworkUrl100}"></img>
                                <p>Song Name: ${todo.trackName}</p>
                                <p>Artist Name: ${todo.artistName}</p>
                                <p>Track Price: ${todo.trackPrice}</p>
                                <p>Release Date: ${todo.releaseDate} </p>
                                <p>Song Length: ${todo.trackTimeMillis}</p>
                                <p>Genre: ${todo.primaryGenreName}</p>
                                <p>Video Sample: ${todo.trackViewUrl}</p>
                                <p>Itunes Video Link: ${todo.previewUrl}</p>
                            </div>
                        </div>`)
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



 









