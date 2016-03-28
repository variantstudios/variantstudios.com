/***************************/
// @Author: Brent Robbins
// @website: http://www.variantstudios.com
// @email: brent@variantstudios.com
// @info: Validate email webform
/***************************/

$(document).ready(function(){
  //global vars  
  var form = $("#contactForm");
  var name = $("#name");
  var nameInfo = $("#nameInfo");
  var nameIcon = $("#nameInfo + i");
  var email = $("#email");
  var emailInfo = $("#emailInfo");
  var emailIcon = $("#emailInfo + i");
  var message = $("#message");
  var messageInfo = $("#messageInfo");
  var messageIcon = $("#messageInfo + i");

  $('.sendButton').attr("disabled", true);
  
  //On blur
  //name.blur(validateName);
  email.blur(validateEmail);
  message.blur(validateMessage);
  //On key press
  name.keyup(validateName);
  message.keyup(validateMessage);

  email.keyup(validateButton);
  name.keyup(validateButton);
  message.keyup(validateButton);

  //On Submitting
  form.submit(function(){
    if(validateName() & validateEmail() & validateMessage())
      return true;
    else
      return false;
  });
  
  // Disable the form button until all required fields filled properly
  function validateButton(){
      if(validateEmail() == true && validateName() == true && validateMessage() == true){
        $('.sendButton').removeAttr('disabled');
      }
  }

  //validation functions
  function validateEmail(){
    //testing regular expression
    var a = $("#email").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //if it's valid email and not empty
    if(filter.test(a)){
      emailIcon.removeClass("error");
      emailIcon.addClass("sucess");
      email.removeClass("error");
      email.addClass("sucess");
      emailInfo.text("");
      emailInfo.removeClass("error");
      emailInfo.addClass("sucess");
      return true;
    }
    //if it's NOT valid
    else{
      if(a.length>0) {
        emailIcon.removeClass("sucess");
        emailIcon.addClass("error");
        email.addClass("error");
        email.removeClass("sucess");
        emailInfo.text("Please enter a valid e-mail address.");
        emailInfo.addClass("error");
        return false;
      }
    }
  }; 
  function validateName(){
    //if it's NOT valid
    if(name.val().length < 2 && name.val().length > 0){
      name.removeClass("sucess");
      nameIcon.removeClass("sucess");
      nameIcon.addClass("error");
      name.addClass("error");
      nameInfo.text("Please enter your full name.");
      nameInfo.addClass("error");
      return false;
    }
    //if it's valid
    else{
      nameIcon.removeClass("error");
      nameIcon.addClass("sucess");
      name.removeClass("error");
      name.addClass("sucess");
      nameInfo.text("");
      nameInfo.removeClass("error");
      nameInfo.addClass("sucess");
      return true;
    }
  };
  function validateMessage(){
    //it's NOT valid
    if(message.val().length < 10){
      message.removeClass("sucess");
      messageIcon.removeClass("sucess");
      messageIcon.addClass("error");
      message.addClass("error");
      messageInfo.text("Please add a message.");
      messageInfo.addClass("error");
      return false;
    }
    //it's valid
    else{   
      messageIcon.removeClass("error");
      messageIcon.addClass("sucess"); 
      message.removeClass("error");
      message.addClass("sucess");
      messageInfo.text("");
      messageInfo.removeClass("error");
      messageInfo.addClass("sucess");
      return true;
    }
  }
});