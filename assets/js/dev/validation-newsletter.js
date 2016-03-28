/***************************/
// @Author: Brent Robbins
// @website: http://www.variantstudios.com
// @email: brent@variantstudios.com
// @info: Validate email webform
/***************************/

$(document).ready(function(){
  //global vars  
  var form = $("#mc-embedded-subscribe-form");
 
  // var fname = $("#mce-FNAME");
  // var fnameInfo = $("#fnameInfo");
  // var fnameIcon = $("#fnameInfo + i");
  
  // var lname = $("#mce-LNAME");
  // var lnameInfo = $("#lnameInfo");
  // var lnameIcon = $("#lnameInfo + i");

  var email = $("#mce-EMAIL");
  var emailInfo = $("#emailInfo");
  var emailIcon = $("#emailInfo + i");

  $('.sendButton').attr("disabled", true);
  
  //On blur
  //name.blur(validateName);
  email.blur(validateEmail);

  //On key press
  // fname.keyup(validateFName);
  // lname.keyup(validateLName);
 
  email.keyup(validateButton);
  // fname.keyup(validateButton);
  // lname.keyup(validateButton);
 
  //On Submitting
  form.submit(function(){
    if(/*validateFName()  & validateLName() & */validateEmail())
      return true;
    else
      return false;
  });
  
  // Disable the form button until all required fields filled properly
  function validateButton(){
      if(validateEmail() == true /*&& validateFName() == true && validateLName() == true*/){
        $('.sendButton').removeAttr('disabled');
      }
  }


  //validation functions
  function validateEmail(){
    //testing regular expression
    var a = $("#mce-EMAIL").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //if it's valid email
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
      emailIcon.removeClass("sucess");
      emailIcon.addClass("error");
      email.addClass("error");
      email.removeClass("sucess");
      emailInfo.text("Please enter a valid e-mail address.");
      emailInfo.addClass("error");
      return false;
    }
  }; 
  // function validateFName(){
  //   //if it's NOT valid
  //   if(fname.val().length < 2){
  //     fnameIcon.removeClass("sucess");
  //     fnameIcon.addClass("error");
  //     fname.addClass("error");
  //     fnameInfo.text("Please enter your First name.");
  //     fnameInfo.addClass("error");
  //     return false;
  //   }
  //   //if it's valid
  //   else{
  //     fnameIcon.removeClass("error");
  //     fnameIcon.addClass("sucess");
  //     fname.removeClass("error");
  //     fname.addClass("sucess");
  //     fnameInfo.text("");
  //     fnameInfo.removeClass("error");
  //     fnameInfo.addClass("sucess");
  //     return true;
  //   }
  // };
  //   function validateLName(){
  //   //if it's NOT valid
  //   if(lname.val().length < 2){
  //     lnameIcon.removeClass("sucess");
  //     lnameIcon.addClass("error");
  //     lname.addClass("error");
  //     lnameInfo.text("Please enter your last name.");
  //     lnameInfo.addClass("error");
  //     return false;
  //   }
  //   //if it's valid
  //   else{
  //     lnameIcon.removeClass("error");
  //     lnameIcon.addClass("sucess");
  //     lname.removeClass("error");
  //     lname.addClass("sucess");
  //     lnameInfo.text("");
  //     lnameInfo.removeClass("error");
  //     lnameInfo.addClass("sucess");
  //     return true;
  //   }
  // };

});



