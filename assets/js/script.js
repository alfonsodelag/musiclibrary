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
                </div>`)
            });
            console.log(response);
        },
        fail: function(errorThrown){
        console.log(errorThrown);
        }
});
});


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
            var price= todo.collectionPrice;
            var coverImage= todo.artworkUrl100;
            var releaseDate= todo.releaseDate;
            var songLength= todo.trackMillis;
            var primaryGenreName= todo.primaryGenreName;
            var audioSamples= todo.previewUrl;
            var songLink= todo.trackViewUrl;
                content.append(
                    `<div class="row">
                    <div class="col-3">
                    <img src="${coverImage}"></img>
                    <p>Artist Name: ${artistName}</p>
                    <p>Album Name: ${albumName}</p>
                    <p>Price: ${price}</p>
                    <p>Release Date: ${releaseDate}</p>
                    <p>Song Length: ${songLength}</p>
                    <p>Genre: ${primaryGenreName}</p>
                    <p>audioSample: ${audioSamples}</p>
                    <p>songLink: ${songLink}</p>
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



 









