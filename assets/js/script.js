$("#submit").click(function(e){

    var finder = new Search($("#entity").val(), $("#inputSearch").val(), $("#country").val(), $("#explicit").val(), $("#limit").val());

    e.preventDefault();
    $.ajax({
        url: "https://itunes.apple.com/search?term=" + finder.term,
        dataType: "jsonp",
        success: function(response){
            console.log(response);
        },
        fail: function(xhr, textStatus, errorThrown){
        console.log(xhr);
        }
    });
});



// });





