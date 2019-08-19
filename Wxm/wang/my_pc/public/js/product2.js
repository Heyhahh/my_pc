$(function(){
     var uid=1;
     $.ajax({
        // data:{},
        url:"http://127.0.0.1:8080/product2",
         data:{uid},
        type:"get",
        dataType:"json",
        success:function(result){
        // console.log(result);
   
            var p1=result[0];
            // console.log(p1);
            var html=`   <div class="block_product left" >
            <a href="#">
             <img src="${p1.img_url}" alt="" title="" width="300" height="303">
             <span>${p1.title}</span>
             <span>${p1.subtitle}</span>
             <span></span>
             <span>￥${p1.price.toFixed(2)}</span>
           </a>
            <h2>
             <a href="" ></a>
           </h2>
         </div>`;
         document.getElementById("p1").innerHTML=html;  
       
        var p2=result[1];
        var html=`   <div class="block_product left" >
        <a href="#">
         <img src="${p2.img_url}" alt="" title="" width="300" height="303">
         <span>${p2.title}</span>
         <span>${p2.subtitle}</span>
         <span></span>
         <span>￥${p2.price.toFixed(2)}</span>
       </a>
        <h2>
         <a href="" ></a>
       </h2>
     </div>`;
     document.getElementById("p2").innerHTML=html;  
    
     var p3=result[2];
     var html=`   <div class="block_product left" >
     <a href="#">
      <img src="${p3.img_url}" alt="" title="" width="300" height="303">
      <span>${p3.title}</span>
      <span>${p3.subtitle}</span>
      <span></span>
      <span>￥${p3.price.toFixed(2)}</span>
    </a>
     <h2>
      <a href="" ></a>
    </h2>
  </div>`;
  document.getElementById("p3").innerHTML=html;  

  var p4=result[3];
  var html=`   <div class="block_product left" >
  <a href="#">
   <img src="${p4.img_url}" alt="" title="" width="300" height="303">
   <span>${p4.title}</span>
   <span>${p4.subtitle}</span>
   <span></span>
   <span>￥${p4.price.toFixed(2)}</span>
 </a>
  <h2>
   <a href="" ></a>
 </h2>
</div>`;
document.getElementById("p4").innerHTML=html;  

var p5=result[4];
var html=`   <div class="block_product left" >
<a href="#">
 <img src="${p5.img_url}" alt="" title="" width="300" height="303">
 <span>${p5.title}</span>
 <span>${p5.subtitle}</span>
 <span></span>
 <span>￥${p5.price.toFixed(2)}</span>
</a>
<h2>
 <a href="" ></a>
</h2>
</div>`;
document.getElementById("p5").innerHTML=html;  

var p6=result[5];
var html=`   <div class="block_product left" >
<a href="#">
 <img src="${p6.img_url}" alt="" title="" width="300" height="303">
 <span>${p6.title}</span>
 <span>${p6.subtitle}</span>
 <span></span>
 <span>￥${p6.price.toFixed(2)}</span>
</a>
<h2>
 <a href="" ></a>
</h2>
</div>`;
document.getElementById("p6").innerHTML=html;  

    }
    })
})
$("#ames").click(function(){
    $(function(){
        var uid=2;
       $.ajax({
            url:"http://127.0.0.1:8080/ames",
            type:"get",
            dataType:"json",
            data:{uid},
            success:function(result){
           console.log(result);
 // location.href="http://127.0.0.1:8080/ames";
$("block_product left").innerHTML='';
 var p1=result[0];
 var html=`   <div class="block_product left" >
          <a href="#">
           <img src="${p1.img_url}" alt="" title="" width="300" height="303">
           <span>${p1.title}</span>
           <span>${p1.subtitle}</span>
           <span></span>
           <span>￥${p1.price}</span>
         </a>
          <h2>
           <a href="http://127.0.0.1:8080/details.html" ></a>
         </h2>
       </div>`;
       document.getElementById("p1").innerHTML=html;


     var p2=result[1];
       var html=`   <div class="block_product left" >
       <a href="#">
        <img src="${p2.img_url}" alt="" title="" width="300" height="303">
        <span>${p2.title}</span>
        <span>${p2.subtitle}</span>
        <span></span>
        <span>￥${p2.price.toFixed(2)}</span>
      </a>
       <h2>
        <a href="http://127.0.0.1:8080/details.html" ></a>
      </h2>
    </div>`;
    document.getElementById("p2").innerHTML=html;

    var p3=result[2];

       var html=`   <div class="block_product left" >
       <a href="#">
        <img src="${p3.img_url}" alt="" title="" width="300" height="303">
        <span>${p3.title}</span>
        <span>${p3.subtitle}</span>
        <span></span>
        <span>￥${p3.price.toFixed(2)}</span>
      </a>
       <h2>
        <a href="http://127.0.0.1:8080/details.html" ></a>
      </h2>
    </div>`;
    document.getElementById("p3").innerHTML=html;

    var p4=result[3];
      var html=`   <div class="block_product left" >
      <a href="#">
       <img src="${p4.img_url}" alt="" title="" width="300" height="303">
       <span>${p4.title}</span>
       <span>${p4.subtitle}</span>
       <span></span>
       <span>￥${p4.price.toFixed(2)}</span>
     </a>
      <h2>
       <a href="http://127.0.0.1:8080/details.html" ></a>
     </h2>
   </div>`;
   document.getElementById("p4").innerHTML=html

   var p5=result[4];
     var html=`   <div class="block_product left" >
     <a href="#">
      <img src="${p5.img_url}" alt="" title="" width="300" height="303">
      <span>${p5.title}</span>
      <span>${p5.subtitle}</span>
      <span></span>
      <span>￥${p5.price.toFixed(2)}</span>
    </a>
     <h2>
      <a href="http://127.0.0.1:8080/details.html" ></a>
    </h2>
  </div>`;
  document.getElementById("p5").innerHTML=html

  var p6=result[5];
    var html=`   <div class="block_product left" >
    <a href="#">
     <img src="${p6.img_url}" alt="" title="" width="300" height="303">
     <span>${p6.title}</span>
     <span>${p6.subtitle}</span>
     <span></span>
     <span>￥${p6.price.toFixed(2)}</span>
   </a>
    <h2>
     <a href="http://127.0.0.1:8080/details.html" ></a>
   </h2>
 </div>`;
 document.getElementById("p6").innerHTML=html
           }
       })
    })
   
})