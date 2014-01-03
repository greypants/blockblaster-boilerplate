Game.Rectangle = klass({
	initialize: function(properties) {
		properties && this.set(properties);
	},

	drawType: function() {
		Game.ctx.fillStyle = this.color;
		Game.ctx.fillRect(0,0,this.width, this.height);
		Game.ctx.fill();
	}
});
