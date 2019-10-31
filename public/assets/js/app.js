$(document).on("click",".devourButton", function(){
    axios.put("/api/burgers/" + $(this).attr('data-id'),{devoured:true}).then(function(res){
        console.log(res);
        window.location.reload();
    })
    ;
})