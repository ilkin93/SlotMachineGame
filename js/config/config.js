'use strict';
define(function(){
	var configuration = {
        reelsLength: 20,
        renderResolution: 1000,
        openingCapital: 5000,
        probabilities: {
            threeBars : 50,
            cherry : 50,
            twoBars : 50,
            bar : 25,
            seven : 6
        }
    };

    return configuration;
});
