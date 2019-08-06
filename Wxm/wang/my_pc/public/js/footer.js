
$(function(){
    $.ajax({
      url:"footer.html",
      type:"get",
      success(result){
        $(result).replaceAll("footer");
        //动态创建link元素，引入footer.css,自动添加到<head>元素中
     $(`<link rel="stylesheet" href="./css/footer.css">`).appendTo("head");
      }
    })
  })


