$( document ).ready(function() {
  $('.button--faq').click(function(e){
    e.preventDefault();
    switch(e.target.id) {
      case 'general-button':
        $('.questions').removeClass('selected');
        $('.button--faq').removeClass('selected');
        $(e.target).addClass('selected');
        $('#general-questions').addClass('selected');
        break;
      case 'before-button':
        $('.questions').removeClass('selected');
        $('.button--faq').removeClass('selected');
        $(e.target).addClass('selected');
        $('#before-questions').addClass('selected');
        break;
      case 'during-button':
        $('.questions').removeClass('selected');
        $('.button--faq').removeClass('selected');
        $(e.target).addClass('selected');
        $('#during-questions').addClass('selected');
        break;
      case 'after-button':
        $('.questions').removeClass('selected');
        $('.button--faq').removeClass('selected');
        $(e.target).addClass('selected');
        $('#after-questions').addClass('selected');
        break;
    }
  })
});
