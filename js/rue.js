var sceneRueFemme = {
};

sceneRueFemme.rue = function (game) {

};


//var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;



sceneRueFemme.rue.prototype = {

	preload: function(){
		this.game.load.image("background", "assets/rue.png");
		this.game.load.spritesheet("woman", "assets/walkingwomangg_720.png", 100, 135);
		this.game.load.spritesheet('trump', '../assets/Trump.png', 143, 140);
		this.game.load.image('hollande', '../assets/hollande2.png');
		this.game.load.image('zone2', '../assets/plaque.png');
		this.game.load.audio('whistle', ['assets/Whistle 3 (Free Sound Effect).mp3']);
		this.game.load.audio('surprise', ['../assets/Surprise Motherfcker Sound Effect (ORIGINAL).mp3']);
		this.game.load.image('dsk', '../assets/dsk.png');
		this.game.load.image('pot', '../assets/pot.png');




	},
	
	create: function(){

		background = this.game.add.sprite(0, 0, "background");
		player = this.game.add.sprite(30, 300, "woman");
		trump=this.game.add.sprite(500, 340, "trump");
		trump.frame=5;
		hollande = this.game.add.sprite(653, 120, 'hollande');
		dsk = this.game.add.sprite(540, 120, 'dsk');
		pot = this.game.add.sprite(500, 230, 'pot');
		zone2 = this.game.add.sprite(450, 400, 'zone2');
		zone2.scale.setTo(0.1, 0.1);
		dsk.scale.setTo(0.6, 0.6);
		pot.scale.setTo(0.2, 0.2);
		whistle=this.game.add.audio('whistle');
		surprise= this.game.add.audio('surprise')


		player.animations.add('left', [9, 12, 11, 10, 13], 10, true, true);
		player.animations.add('right', [0, 1, 2, 3, 4], 10, true, true);
		trump.animations.add('chute',[21], true, true);

		zone2.enableBody=true;
		pot.enableBody=true;
		this.game.physics.arcade.enable(pot);
		this.game.physics.arcade.enable(zone2);
		this.game.physics.arcade.collide(player, zone2);
		this.game.physics.arcade.enable(player);
		scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

		this.game.physics.arcade.collide(player,trump);
		pot.inputEnabled = true;

		pot.events.onInputDown.add(this.fall, this);


		keys = this.game.input.keyboard.createCursorKeys();

	},

	update: function(){

		this.game.physics.arcade.overlap(player, zone2, this.siffle, null, this);

		player.body.velocity.x = 0;
		player.body.gravity.y = 0;

		if (keys.left.isDown) {
			player.body.velocity.x = -200;
			player.animations.play('left');


		}
		else if (keys.right.isDown) {
			player.body.velocity.x = 200;
			player.animations.play('right');


		}

		else
		{
			player.animations.stop();

			player.frame = 19;
		}
		

	},

 siffle: function(player, zone2){

			whistle.play();


		},

		fall: function(){

			surprise.play();

			setTimeout(function(){

				pot.body.gravity.y = 300;


			},1000)

			setTimeout(function(){
				trump.animations.play('chute');


			},1750)


			score += 250;
			scoreText.text = 'Score: ' + score;


		}

}

