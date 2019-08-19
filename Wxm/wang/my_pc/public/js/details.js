$(function(){
    var lid=location.search.split("=")[1];
    $.ajax({
        url:"http://127.0.0.1:8080/details",
        data:{lid},
        dataType:"json",
        type:"get",  
        success:function(result){
        var $html=$(`
        <img src="${result[0].img_url1}" alt="">
        <img src="${result[0].img_url2}" alt="">
        <img src="${result[0].img_url3}" alt="">
        <img src="${result[0].img_url4}" alt="">
        <img src="${result[0].img_url5}" alt="">
        <img src="${result[0].img_url6}" alt="">
        <img src="${result[0].img_url6}" alt="">
        <img src="${result[0].img_url5}" alt="">
        `
        )
        $(".pro-detail-watermark").append($html);
    var $html_title=$(`
     <div class="product_name">
      ${result[0].title}
     </div>
     <div class="product_name_en">${result[0].subtitle}</div>
     <div class="price-label clearfix " id="showPrice"> 
        <span>￥${result[0].price.toFixed(2)}</span>
     </div> 
   `)
      $("#title1").append($html_title);
    var $html1=$(` <div class="block">
        <h3>
            
                 推荐理由
             
         <span class="clear">style notes</span>
        </h3>
        <p>${result[0].notes1}</p>
    </div>`)
    $(".share-links").append($html1)

    var $html1=$(` <div class="block">
    <h3>
        
             推荐理由
         
     <span class="clear">style notes</span>
    </h3>
    <p>${result[0].notes1}</p>
</div>`)
$(".share-links").append($html1)

var $html1=$(` <div class="block">
<h3>
    
         推荐理由
     
 <span class="clear">style notes</span>
</h3>
<p>${result[0].notes1}</p>
</div>`)
$(".share-links").append($html1)


var $html1=$(` <div class="block">
<h3>
    
         推荐理由
     
 <span class="clear">style notes</span>
</h3>
<p>${result[0].notes1}</p>
</div>`)
$(".share-links").append($html1)


var $html1=$(` <div class="block">
<h3>
    
         推荐理由
     
 <span class="clear">style notes</span>
</h3>
<p>${result[0].notes1}</p>
</div>`)
$(".share-links").append($html1)



var $html1=$(` <div class="block">
<h3>
    
         推荐理由
     
 <span class="clear">style notes</span>
</h3>
<p>${result[0].notes1}</p>
</div>`)
$(".share-links").append($html1)


var $html1=$(` <div class="block">
<h3>
    
         推荐理由
     
 <span class="clear">style notes</span>
</h3>
<p>${result[0].notes1}</p>
</div>`)
$(".share-links").append($html1);
        }

    })
})



