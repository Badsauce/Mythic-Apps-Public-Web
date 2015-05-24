$( document ).ready(function() {
  //if we add more events escape them into a function "attachEvents"
  $('#apply').click(revealApplication);
});

function revealApplication(){
  $('#application').slideDown();
  scrollTo("#application", 1000);
}

function scrollTo(selector, animationTime) {
  $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, animationTime);
}
