$(function(){
    $.ajax({
      url:"header.html",
      type:"get",
      success:function(result){
        $(result).replaceAll("header");
        //动态创建link元素，引入header.css,自动添加到<head>元素中
       $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head");
      }
    })
  })
//登录
  $(".login-button").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    // 发送给后端的请求
    var uname=$("#uname").val();
    var upwd =$("#upwd").val();
    $.ajax({
      url:"http://127.0.0.1:8080/login",
      type:"post",
      data:{uname,upwd},
      dataType:"json",
      success:function(result){
       if(result.code==1){
        $("#errpage").text("登录成功!");
        sessionStorage.setItem("name",uname);
        location.href="http://127.0.1:8080/index.html";
       }else if(result.code==-1){
        $("#errpage").text("用户名不能为空！")
       }else if(result.code==-2){
        $("#errpage").text("密码不能为空！")
       }else if(result.code==-3){
        $("#errpage").text("用户名和密码不正确！")
       }
      }  
    })
    if(sessionStorage.getItem("name")!=null){
      $("#login").text("您已登录！")
    }  
  })
