$.ajax({
  url: "http://localhost:1111/fragments/1000-pitches.html",
  dataType: "html",
  success: function(response) {

    $('#event-container').html(response);
    // Load fragment into event page div and get container height
    var event_page = $('#event-page');
    var height = $('.event-info').height();

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
