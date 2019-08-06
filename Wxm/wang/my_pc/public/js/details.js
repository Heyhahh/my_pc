$(function(){
    var lid=location.search.split("=")[1];
    // console.log(lid);
    $.ajax({
        data:{lid},
        dataType:"json",
        type:"get",
        url:"http://127.0.0.1:8080/details",
        success:function(result){
        console.log(result);
        }
    })
})



