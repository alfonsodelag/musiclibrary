$("#submit").click(function(e){
    var finder = new Search($("#entity").val(), $("#inputSearch").val(), $("#country").val(), $("#explicit").val(), $("#limit").val());
    e.preventDefault();
    $.ajax({
    url: "https://itunes.apple.com/search?" + "entity=" + finder.entity + "&" + "term=" + finder.term + "&" + "country=" + finder.country + "&" + "explicit=" + finder.explicit + "&" + "limit=" + finder.limit,        
    dataType: "jsonp",
        success: function(response){
            console.log(response);
        },
        fail: function(errorThrown){
        console.log(errorThrown);
        }
    });
});





        

