'use strict';
define(['config/config', 'graphics', 'canvas'], function(config, graphics, view){
	var items = {
		list: ['threeBars','cherry','twoBars','bar','seven'],
		cost: {
			threeBars: 40,
			cherry: 40,
			twoBars: 40,
			bar:40,
			seven: 750,
		},
		x2: {
			threeBars: true,
			cherry: false,
			twoBars: true,
			bar:true,
			seven: false,
		},
		render: function(item, reel, y){
			var factor = config.renderResolution/1000;
			view.layer0.drawImage(graphics[item], 100 * factor + (reel - 1) * 250 * factor + (reel - 1) * 25 * factor, y * factor, 250 * factor, 200 * factor); // y: 165 - 1; 375 - 2; 565 - 3
		},
		getProbability: function(item, upper){
			var limit = config.probabilities[item];
			for (var i = 0; i < items.list.indexOf(item); i++){
				limit+=config.probabilities[items.list[i]];
			}
			if (upper === false){
				limit-=config.probabilities[item];
			}
			return limit;
		}
	};

	return items;
});
