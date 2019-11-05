$(document).on("click",".devourButton", function(){
    axios.put("/api/burgers/" + $(this).attr('data-id'),{devoured:true}).then(function(res){
        console.log(res);
        window.location.reload();
    })
    ;
});

$(document).on("click",".deleteButton", function(){
    axios.delete("/api/burgers/" + $(this).attr('data-id')).then(function(res){
        console.log(res);
        window.location.reload();
    })
    ;
});

$(document).on("click","#createBurger", function(evt){
    evt.preventDefault();
    const newBurger = $('#burgerInput').val();
    const devouredVal = $('#devoured-buttons > input:checked').val();
    if(newBurger !== undefined && newBurger.length > 0) {
    axios.post("/api/burgers/",{burger_name: newBurger,devoured:devouredVal})
    .then(function(res){
        console.log(res);
        window.location.reload();
    })
    .catch(err => {
        console.log(err);
    });
}
})