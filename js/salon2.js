var sceneSalon = {
};

sceneSalon.salon2 = function (game) {

};


//var game = new Phaser.Game(800, 500, Phaser.auto, "content", {preload: preload, create: create, update: update});
var music, mrTrump, table, repas, telecommande, balade, coupe, keys;

sceneSalon.salon2.prototype = {

	choc : function(Trump, Couteau){
		mal.body.x
		mal.body.y
//mrTrump.kill();


},

preload: function(){
	this.game.load.image ("Salon", "assets/salon.png");
	console.log("Bonjour");
	this.game.load.spritesheet ("Trump", "assets/trump_720.png", 100, 110);
	console.log("Salut");
	this.game.load.spritesheet ("Couteau", "assets/couteau.png", 100, 200);
	console.log("Hi");
	this.game.load.image ("table", "assets/atable_360.png");
	this.game.load.image ("repas", "assets/repas_360.png");
	this.game.load.image ("telecommande", "assets/commande.png");
	this.game.load.image ("bulle", "assets/tele_360.png");
	this.game.load.image ("balade", "assets/textvais_360.png");
	this.game.load.image ("gisant", "assets/TrumpMort.png");
	this.game.load.audio("foot", "assets/zic.m4a");
},

create: function(){
	this.background = this.game.add.sprite(0,0, "Salon");
	this.background.width = this.game.width;
	this.background.height = this.game.height;
	console.log("semaine 11");

	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//mrTrump.boby.collideWorldBounds = true;
	mrTrump = this.game.add.sprite(250, 240, "Trump");
	console.log("jeudi");
	this.game.physics.arcade.enable(mrTrump);
	mrTrump.enableBody= true;
	this.game.physics.arcade.enable(mrTrump);

	//mrTrump.anchor.setTo(0.5, 0.5);
	//mrTrump.angle = 0;
	//mrTrump.x= 300;
	//mrTrump.y= 260;
	//this.game.physics.enable(mrTrump, Phaser.Physics.ARCADE);
	//mrTrump.body.velocity.x =10;
	//mrTrump.body.velocity.y =10;
	mrTrump.animations.add("right", [1, 2, 3, 4 ], 10, true, true);
	mrTrump.animations.add("left", [ 1, 2, 3, 4 ], 10, true, true);
	mrTrump.animations.add("up", [0, 1, 2, 3, 4 ], 10, true,true);
	mrTrump.animations.add("down", [0, 1, 2, 3, 4 ], 10, true,true);
	gisant=this.game.add.image(250, 340, "gisant");	
	gisant.kill();


	console.log("Ã§a marche");
	this.game.physics.arcade.enable(mrTrump);
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	mrTrump.body.collideWorldBounds = true;
	
	coupe = this.game.add.sprite(710, 420, "Couteau");
	coupe.kill();
	coupe.scale.setTo(-1, 1);
	coupe.anchor.setTo(0.5, 0.5);
	console.log("c'est bien");
	coupe.angle = 30;
	//coupe.x= 710;
	//coupe.y= 320;
	this.game.physics.enable(coupe, Phaser.Physics.ARCADE);
	coupe.enableBody= true;
	coupe.body.velocity.x =-300;
	coupe.body.velocity.y = -100;
	//coupe.body.velocity.y =10;
	//coupe.animations.add("left", [0],10, true);
	//coupe.animations.add("run");
	//coupe.animations.play("run", 10, true);
	keys = this.game.input.keyboard.createCursorKeys();

	table = this.game.add.sprite(300, 450, "table");
	this.game.physics.arcade.enable(table);
	table.enableTable = true;
	this.game.physics.arcade.collide(mrTrump, table);

	repas = this.game.add.sprite(485, 396, "repas");
	repas.angle = -5;
	this.game.physics.arcade.enable(repas);
	repas.enableRepas = true;
	this.game.physics.arcade.collide(mrTrump, repas);
	repas.kill();

	telecommande= this.game.add.sprite (200, 250, "telecommande");
	this.game.physics.arcade.enable(telecommande);
	telecommande.enableTelecommande = true;
	this.game.physics.arcade.collide(mrTrump, telecommande);
	telecommande.kill();


	balade= this.game.add.sprite(300,400, "balade");
//this.game.physics.arcade.enable(balade);
//balade.enablebalade = true;
//this.game.physics.arcade.collide(mrTrump, balade);
balade.kill();

bulle = this.game.add.sprite(200, 200, "bulle");
bulle.kill();

//mal = this.game.add.sprite(mrTrump);
this.game.physics.arcade.collide(mrTrump, coupe);

music = this.game.add.audio("foot");
music.play();
music.volume= 0;

},

update: function(){
	this.game.physics.arcade.overlap(mrTrump, table, servi, null, this);
	this.game.physics.arcade.overlap(mrTrump, repas, manger, null, this);
	this.game.physics.arcade.overlap(mrTrump, telecommande, voir, null, this);
	this.game.physics.arcade.overlap(mrTrump, balade, air, null, this);
	this.game.physics.arcade.overlap(mrTrump, coupe, mort, null, this);
	mrTrump.body.velocity.x =0;
	mrTrump.body.velocity.y =0;
	mrTrump.body.gravity.y =0;

	console.log("je sais");

	
	if (keys.left.isDown) {

		mrTrump.body.velocity.x= -100;
		mrTrump.animations.play("left");
	}

	else if (keys.right.isDown) {

		mrTrump.body.velocity.x= 100;
		mrTrump.animations.play("right");
	}

	else if (keys.up.isDown){

		mrTrump.body.velocity.y= -100;
		mrTrump.animations.play("up");
	}

	else if (keys.down.isDown) {

		mrTrump.body.velocity.y= 100;
		mrTrump.animations.play("down");
	}

	else{

		mrTrump.animations.stop();
		mrTrump.frame = 2
	}

	function servi(mrTrump, table){
		table.kill();
		console.log("table");
		repas.revive();

	}

	function manger(mrTrump){
		repas.kill();
		telecommande.revive();
	//coupe.revive();

}

function voir(mrTrump){
	telecommande.kill();
	music.volume = 1;
	;    balade.revive();
	bulle.revive();
	setTimeout(function(){             
		coupe.revive(); 
		music.destroy();                   
	},4000)

}

function air(mrTrump){
	//repas.kill();
	//balade.revive();
}

function mort(){
	//mal.body.x=mrTrump.body.x;
    //mal.body.y=mrTrump.body.y;




	//mrTrump.animations.add("chute_left", [21], 10, false);
	mrTrump.frame=22;
	coupe.kill();
	gisant.revive();

	mrTrump.kill();
	this.game.state.start('ruehomme');

}




}


}