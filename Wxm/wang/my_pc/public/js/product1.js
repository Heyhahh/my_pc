
$(function(){
  // var uid=1;
 //向localhost:8080/product发送请求，获得数据
 $.ajax({
   url:"http://127.0.0.1:8080/product1",
   type:"get",//请求类型
   //请求参数
  //  data:{},
   dataType:"json",//返回值类型
   success:function(result){
    // console.log(result);
    var p1=result;
    var html="";
    for(var p of result){
    // console.log(p);
   var $html =$(`<div class="block_product left" id="p1">
    <a href="http://127.0.0.1:8080/details.html?lid=1"">
    <img src="${p.img_url}" alt="" title="" width="300" height="303">
    <span>${p.title}</span>
    <span>${p.subtitle}</span>
    <span></span>
    <span>￥${p.price.toFixed(2)}</span>
    </a>
    <h2>
    <a href="http://127.0.0.1:8080/details.html ></a>
    </h2>
   </div>`);
   $("#product_list").append($html);
}


// var p2=result[1];
// var html=`   <div class="block_product left" id="p2">
// <a href="#">
//  <img src="${p2.img_url}" alt="" title="" width="300" height="303">
//  <span>${p2.title}</span>
//  <span>${p2.subtitle}</span>
//  <span></span>
//  <span>￥${p2.price.toFixed(2)}</span>
// </a>
// <h2>
//  <a href="" ></a>
// </h2>
// </div>`;
// document.getElementById("p2")
// .innerHTML=html;


// var p3=result[2];
// var html=`   <div class="block_product left" id="p3">
// <a href="#">
//  <img src="${p3.img_url}" alt="" title="" width="300" height="303">
//  <span>${p3.title}</span>
//  <span>${p3.subtitle}</span>
//  <span></span>
//  <span>￥${p3.price.toFixed(2)}</span>
// </a>
// <h2>
//  <a href="" ></a>
// </h2>
// </div>`;
// document.getElementById("p3")
// .innerHTML=html;


// var p4=result[3];
// var html=`   <div class="block_product left" id="p4">
// <a href="#">
//  <img src="${p4.img_url}" alt="" title="" width="300" height="303">
//  <span>${p4.title}</span>
//  <span>${p4.subtitle}</span>
//  <span></span>
//  <span>￥${p4.price.toFixed(2)}</span>
// </a>
// <h2>
//  <a href="" ></a>
// </h2>
// </div>`;
// document.getElementById("p4")
// .innerHTML=html;

// var p5=result[4];
// var html=`   <div class="block_product left" id="p3">
// <a href="#">
//  <img src="${p5.img_url}" alt="" title="" width="300" height="303">
//  <span>${p5.title}</span>
//  <span>${p5.subtitle}</span>
//  <span></span>
//  <span>￥${p5.price.toFixed(2)}</span>
// </a>
// <h2>
//  <a href="" ></a>
// </h2>
// </div>`;
// document.getElementById("p5")
// .innerHTML=html;

// var p6=result[5];
// var html=`   <div class="block_product left" id="p6">
// <a href="#">
//  <img src="${p6.img_url}" alt="" title="" width="300" height="303">
//  <span>${p6.title}</span>
//  <span>${p6.subtitle}</span>
//  <span style="color:#b4b4b4"></span>
//  <span>￥${p6.price.toFixed(2)}</span>
// </a>
// <h2>
//  <a href="" ></a>
// </h2>
// </div>`;
// document.getElementById("p6")
// .innerHTML=html;
  
   } 
 })            
})