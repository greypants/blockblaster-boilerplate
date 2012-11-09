window.GAME = window.GAME || {};

(function(game) {

	game.init = function() {
		game.core.createCanvas(800, 450);
		game.core.initGlobalVariables();
		game.core.addListeners();
		game.core.loadScene('level_1');
		game.frames.init();
		game.frames.play();
	};

})(window.GAME);