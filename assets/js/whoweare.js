$(".orglist li").each( function(index) {

	thisLi = this

	$(this).hover(function() {
		$(this).addClass('selected');
	}, function() {
		$(this).removeClass('selected');
	})

	var thisClass = this.className.split(' ')[0];
	//console.log(thisClass);
	$((".topiclist li")).each(function(index) {
		if($(this).hasClass(thisClass)) {

			var thisTopic = this;

			$(thisLi).hover(function() {

				$(thisTopic).addClass('selected');

			}, function() {

				$(thisTopic).removeClass('selected');

			});

		}
	});

});

$(".topiclist li").each( function(index) {

	thisLi = this

	$(this).hover(function() {
		$(this).addClass('selected');
	}, function() {
		$(this).removeClass('selected');
	})

	var thisClass = this.className.split(' ')[0];
	//console.log(thisClass);
	$((".orglist li")).each(function(index) {
		if($(this).hasClass(thisClass)) {

			var thisTopic = this;

			$(thisLi).hover(function() {

				$(thisTopic).addClass('selected');

			}, function() {

				$(thisTopic).removeClass('selected');

			});

		}
	});

});
