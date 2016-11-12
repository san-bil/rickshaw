Rickshaw.namespace('Rickshaw.Fixtures.RandomData');

Rickshaw.Fixtures.RandomData = function(timeInterval,mean,variance) {

	var addData;
	timeInterval = timeInterval || 1;

	var lastRandomValue = 0;

	var timeBase = Math.floor(new Date().getTime() / 1000);

	this.addData = function(data) {

		// var randomValue = Math.random() * 100 + 15 + lastRandomValue;
		var randomValue = (0.8*(Math.random()-0.3) + 0.2*lastRandomValue);
		var index = data[0].length;

		var counter = 1;

		data.forEach( function(series) {
			// var randomVariance = Math.random() * 20;
			// var v = randomValue / 25  + counter++ +
			// 	(Math.cos((index * counter * 11) / 960) + 2) * 15 +
			// 	(Math.cos(index / 7) + 2) * 7 +
			// 	(Math.cos(index / 17) + 2) * 1;

			var randomVariance = (Math.random()-0.5) * variance;
			var v = randomValue ;
			var v_val = Math.max(Math.min(v + randomVariance,1),-1)
			series.push( { x: (index * timeInterval) + timeBase, y: v_val } );
		} );

		lastRandomValue = randomValue;
	};

	this.removeData = function(data) {
		data.forEach( function(series) {
			series.shift();
		} );
		timeBase += timeInterval;
	};
};

