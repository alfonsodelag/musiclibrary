// var content = $('#container');
       
// $("#submit").click(function(e){
//     var finder = new Search($("#entity").val(), $("#inputSearch").val(), $("#country").val(), $("#explicit").val(), $("#limit").val());
//     e.preventDefault();
//     $.ajax({
//     url: "https://itunes.apple.com/search?" + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit,        
//     dataType: "jsonp",
//         success: function(response){
//             $.each(response.results, function(i, todo) {
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



        $.ajax({
            url: "https://www.liferay.com/api/jsonws/country/get-countries/",
            // Tell jQuery we're expecting JSONP
            dataType: "json",
            // Work with the response
            success: function( response ) {
                console.log( response ); // server response
            }
        });

// function saludar(nombre){
//     console.log('Hola' + Alfonso)
// }
// saludar(Alfonso);
    





