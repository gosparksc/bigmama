$(".event").each(function() {
    $(this).click(function() {
        var event_name = $(this).attr('id').split("/")[2];
        $.ajax({
            url: "http://localhost:1111/fragments/"+event_name,
            dataType: "html",
            success: function(response) {
                // Load fragment into event page div and get container height
                var event_page = $('#event-page').append(response);
                var height = $('.container').height();

               // Move event page to bottom of page
                event_page.offset({
                    top: height
                });

                // Animate the event page back to the top
                event_page.delay(700).animate({
                    top: 0
                }, 1200);
            }
        });
    });
});
