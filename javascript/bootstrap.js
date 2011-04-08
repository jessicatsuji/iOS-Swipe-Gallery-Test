function Bootstrap() {
	this.init = function() {
		$('ul').gallery({itemsVisible:1});
		$('ul').data('gallery').moveTo(1);
	}()
}