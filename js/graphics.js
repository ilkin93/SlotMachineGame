'use strict';
define(function(){
	var graphics = {
		list: ['threeBars','cherry','bar','twoBars','seven'],
		threeBars : new Image(),
		cherry : new Image(),
		twoBars : new Image(),
		bar : new Image(),
		seven : new Image()
	};

	graphics.threeBars.src = 'img/3xBAR.png';
	graphics.cherry.src = 'img/Cherry.png';
	graphics.twoBars.src = 'img/2xBAR.png';
	graphics.seven.src = 'img/7.png';
	graphics.bar.src = 'img/BAR.png';

	return graphics;
});
