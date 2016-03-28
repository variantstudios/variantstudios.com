// JavaScript Document
(function($){

  //Random rotator for the testimonials section
    $.fn.quotator = function(options){
    var container = this;
        defaults = 
          {
            speed : 9000,
            json : "/testimonials.json"
          },
        options = $.extend(defaults, options),
        quotes_json = options.json,
        quotes;
      
    $.getJSON(quotes_json, function(data){
      var quotesobject = eval(data.quotes);
      var index = 0;
      console.log("quotes" . quotesobject);
      
      setInterval(changeQuote, options.speed);
      
      container.html(
        "<img src=\"" + quotesobject[index].image + "\" alt=\"" + quotesobject[index].author + "\" />" +
        "<h5>" + quotesobject[index].tag + "</h5>" +
        "<span>" + quotesobject[index].author + quotesobject[index].position + "</span>" +
        "<p>" + quotesobject[index].quote + "</p>");
      
      function changeQuote(){
        container.fadeOut(function(){
          container.html(
        "<img src=\"" + quotesobject[index].image + "\" alt=\"" + quotesobject[index].author + "\" />" +
        "<h5>" + quotesobject[index].tag + "</h5>" +
        "<span>" + quotesobject[index].author + quotesobject[index].position + "</span>" +
        "<p>" + quotesobject[index].quote + "</p>").fadeIn();
        });
        if(index == quotesobject.length - 1){ index = 0; }
        else{ index++; }
      }
    });
    return container;
  }
})(jQuery);