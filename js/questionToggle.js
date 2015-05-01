$( document ).ready(function() {
  $('.button--faq').click(function(e){
    e.preventDefault();
    $('.questions').removeClass('selected');
    switch(e.target.id) {
      case 'general-button':
        $('#general-questions').addClass('selected');
        break;
      case 'before-button':
        $('#before-questions').addClass('selected');
        break;
      case 'during-button':
        $('#during-questions').addClass('selected');
        break;
      case 'after-button':
        $('#after-questions').addClass('selected');
        break;
      default:
        alert('unsupported id '+e.target.id);
    }
  })
});
