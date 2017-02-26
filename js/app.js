

window.onload = function () {
	var game = new Phaser.Game(800, 500, Phaser.AUTO, "gameContainer");
	
	game.state.add('cuisineF', sceneCuisine.CuisineF);
	game.state.add('salon2', sceneSalon.salon2);
	game.state.add('rue', sceneRueFemme.rue);
	game.state.add('ruehomme', sceneRueHomme.ruehomme);

	game.state.start('cuisineF');
}