var sceneRueHomme = {
};

sceneRueHomme.ruehomme = function (game) {

};

//var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;

sceneRueHomme.ruehomme.prototype = {


	preload: function(){
		this.game.load.image("background", "assets/rue.png");
		this.game.load.spritesheet('trump', '../assets/Trump.png', 143, 140);
		this.game.load.audio('whistle', ['assets/Whistle 3 (Free Sound Effect).mp3']);
		this.game.load.spritesheet('fille1', '../assets/fille.png',64,128 );
		this.game.load.image('pot', '../assets/pot.png');
		this.game.load.spritesheet('woman', '../assets/walkingwomangg_720.png', 102.85, 135 );
		this.game.load.spritesheet('fille2', '../assets/fille.png',64,128 );




	},
	
	create: function(){

		background = this.game.add.sprite(0, 0, "background");
		trump=this.game.add.sprite(300, 230, "trump");
		trump.frame=5;
		fille1 = this.game.add.sprite(50, 250, "fille1");
		fille1.enableBody=true;
		fille1.scale.setTo(1.5, 1.5),
		this.game.physics.arcade.enable(fille1);
		pot = this.game.add.sprite(320, 130, 'pot');
		pot.scale.setTo(0.15, 0.15),
		whistle=this.game.add.audio('whistle');
		fille1.animations.add('right', [1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true, true);
		trump.animations.add('chute',[21], true, true);
		pot.enableBody=true;
		this.game.physics.arcade.enable(pot);
		fille2 = this.game.add.sprite(750, 260, "fille2");
		fille2.animations.add('left', [12, 13, 14, 15, 16, 17, 18, 19], 10, true, true);
		fille2.scale.setTo(1.5, 1.5),
		this.game.physics.arcade.enable(fille2);
		fille2.enableBody=true;
		fille2.body.gravity.x = -3000;
		scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
		Text = this.game.add.text(10, 450, 'Appuyez sur la barre d espace pour siffler',{fontSize:'15px', fill: '#000' });
		cursors = this.input.keyboard.createCursorKeys();
		siffle = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
		score = 100;
		scoreText.text = 'Score: ' + score;


	},

	update: function(){

		fille1.body.velocity.x = 0;
		fille2.body.velocity.x= 0;


		fille2.animations.play('left');

		if(siffle.isDown){


			whistle.play();

			setTimeout(function(){

				woman = game.add.sprite(260, 230, "woman");
				woman.frame=5;
				woman.scale.setTo(1.2, 1.2);


			},4000)

			setTimeout(function(){
				pot.body.gravity.y = 150;


			},5000)
			setTimeout(function(){
				trump.animations.play('chute');
				scoreText.text = 'Score: 0'
				this.game.state.start('rue');

			},6000)



		} 

		fille1.body.gravity.x = 3000;
		fille1.animations.play('right');
	}

}


