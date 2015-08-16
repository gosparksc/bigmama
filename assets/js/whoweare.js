var orglist = ".orglist";
var topiclist = ".topiclist";
connectLists(orglist, topiclist);

function connectLists(first, second) {

	// For each list item in the first set
	$(first + " li").each(function(index) {

		// Light up firstTag on-hover, revert off-hover
		var firstTag = this;
		addRemoveOnHover(this, this, 'selected');		

		var firstClassID = this.className.split(' ')[0];
		// For each list item in second set
		$((second + " li")).each(function(index) {

			// Light up secondTag on-hover, revert off-hover
			addRemoveOnHover(this, this, 'selected');
			
			// If list item from second set contains class of firstTag, 
			// set bipartide hover behavior, for both
			if($(this).hasClass(firstClassID)) {
				var secondTag = this;
				addRemoveOnHover(firstTag, secondTag, 'selected');
				addRemoveOnHover(secondTag, firstTag, 'selected');
			}
		});

	});

}

function addRemoveOnHover(first, second, className) {
	$(first).hover(function() {
		$(second).addClass(className);
	}, function() {
		$(second).removeClass(className);
	});
}