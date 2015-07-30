$.ajax({
  url: "http://localhost:1111/fragments/1000-pitches.html",
  dataType: "html",
  success: function(response) {
    $('.event-info').css("display", "block");

    // Load fragment into event page div and get container height
    var event_page = $('#event-page').html(response);
    var height = $('.container').height();

    // Move event page to bottom of page
    event_page.offset({
        top: height
    });

    // Animate the event page back to the top
    event_page.delay(2000).animate({
        top: 0
    }, 1200);
  }
});