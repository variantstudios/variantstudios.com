$(document).ready(function(){function e(){1==s()&&$(".sendButton").removeAttr("disabled")}function s(){var e=$("#mce-EMAIL").val(),s=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return s.test(e)?(t.removeClass("error"),t.addClass("sucess"),a.removeClass("error"),a.addClass("sucess"),d.text(""),d.removeClass("error"),d.addClass("sucess"),!0):(t.removeClass("sucess"),t.addClass("error"),a.addClass("error"),a.removeClass("sucess"),d.text("Please enter a valid e-mail address."),d.addClass("error"),!1)}var r=$("#mc-embedded-subscribe-form"),a=$("#mce-EMAIL"),d=$("#emailInfo"),t=$("#emailInfo + i");$(".sendButton").attr("disabled",!0),a.blur(s),a.keyup(e),r.submit(function(){return s()?!0:!1})});