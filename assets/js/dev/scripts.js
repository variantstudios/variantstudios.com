$(window).load(function() {
  if(Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  };

  $('input, textarea').each(function() {
    $(this).on('focus', function() {
      $(this).parents('.webform-component').addClass('active');
    });
    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parents('.webform-component').removeClass('active');
      }
    });
    if ($(this).val() != '') $(this).parents('.webform-component').addClass('active');
  });
});