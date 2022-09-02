$(function (){

//jquery--code

let navbar= $(`.navs`)

$(window).scroll(function(){
  let scrtop= $(window).scrollTop()

  if (scrtop>180) 
  {navbar.addClass(`menuFixed`)}

  else {navbar.removeClass(`menuFixed`)}


})


$(window).ready(function(){

let preloader= $(`.preloader`)
preloader.fadeOut(1500)

})


})