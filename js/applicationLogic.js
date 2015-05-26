$( document ).ready(function() {
  attachEvents();
});

function attachEvents() {
  $('#apply').click(revealApplication);
  $('#save-application').click(saveApplication);
}

function revealApplication(){
  $('#application').slideDown();
  scrollTo("#application", 1000);
}

function scrollTo(selector, animationTime) {
  $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, animationTime);
}

function saveApplication() {
  var formData = $('#application-form').serializeArray()

  validateName(formData['name']);
  validateEmail();
  validateGenderId();
  validateSchool();
}

function validateName(name) {
  if(!name){
    //Example of altering the DOM to show user where the error is
    //In practice we'll probably use .addClass() to add an 'error' class
    //which we'd then define and style in scss
    $('#name').append('*');
    //Creates a pop-up notifying the user of the error
    alert('name is not valid');
  }
}

function validateEmail() {

}

function validateGenderId() {

}

function validateSchool() {

}
