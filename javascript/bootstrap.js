function Bootstrap() {
	this.init = function() {
		$('ul').gallery({
			itemsVisible:1, 
			clickable: false
			});
		$('ul').data('gallery').moveTo(1, false);
	}()
}