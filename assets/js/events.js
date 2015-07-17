$.ajax({
  url: "events/1000-pitches.html",
  dataType: "html",
  success: function(response) {
    $('#event-page').html(response);
  }
});
