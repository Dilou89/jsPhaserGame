var sceneCuisine = {
};

sceneCuisine.CuisineF = function (game) {

};

// var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors, player, background, facing = 'left', music;

sceneCuisine.CuisineF.prototype = {




    preload : function(){
        this.game.load.image("background", "assets/cuisine.png");
        this.game.load.spritesheet("woman", "assets/walkingwomangg_720.png", 100, 135);
        this.game.load.image('pepper', '../assets/pepper.png');
        this.game.load.image("repas", "/assets/repas_360.png");
        this.game.load.image("atable", "assets/atable_360.png");
        this.game.load.image("zone1", "assets/zone1_360.png");
        this.game.load.image("tele", "assets/tele_360.png");
        this.game.load.image("couteau", "assets/couteau.png");
        this.game.load.image("robinet", "assets/robinet_360.png");
        this.game.load.image("casserole", "assets/casserole_360.png");
        this.game.load.image("textVais", "assets/textvais_360.png");

    },


    create: function(){

        background = this.game.add.sprite(0, 0, "background");
        player = this.game.add.sprite(70, 200, "woman");
        peppers= this.game.add.sprite(300, 200, "pepper");

        player.scale.setTo(2, 2);
        peppers.scale.set(0.2, 0.2);


        player.animations.add('left', [9, 12, 11, 10, 13], 10, true, true);
        player.animations.add('turn', [6], 24, true, true);
        player.animations.add('right', [0, 1, 2, 3, 4], 10, true, true);


        this.game.physics.arcade.enable(player);

        peppers.enableBody = true;
        this.game.physics.arcade.enable(peppers);
        this.game.physics.arcade.collide(player,peppers);

        player.body.collideWorldBounds = true;

        zone1=this.game.add.sprite(620, 450, "zone1"); 
        zone1.enenableBody=true;
        this.game.physics.arcade.enable(zone1);
        this.game.physics.arcade.collide(player, zone1);

        casserole=this.game.add.sprite(150,150, "casserole");
        casserole.kill();


        couteau=this.game.add.sprite(50,100, "couteau");
        couteau.kill();
        this.game.physics.arcade.enable(couteau);

        couteau.enenableBody=true;
        couteau.inputEnabled=true;

        couteau.events.onInputDown.add(this.lancer, this);

        robinet=this.game.add.sprite(500,150, "robinet");

        this.game.physics.arcade.enable(robinet);

        robinet.enenableBody=true;
        robinet.inputEnabled=true;
        robinet.events.onInputDown.add(this.vaisselle, this);

        repas=this.game.add.image(650, 250, "repas");
        repas.kill();
        aTable=this.game.add.image(650, 200, "atable");
        aTable.kill();
        tele=this.game.add.image(20, 350, "tele"); 
        tele.kill();


        scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        keys = this.game.input.keyboard.createCursorKeys();

    },
    update : function(){

        this.game.physics.arcade.overlap(player, peppers, this.collectPeppers, null, this);
        this.game.physics.arcade.overlap(player,zone1, this.table, null, this);
        this.game.physics.arcade.overlap(player,couteau,this.lancer, null, this);
        this.game.physics.arcade.overlap(player,robinet,this.vaisselle, null, this);

        var onTheGround = player.body.touching.down;


        player.body.velocity.x = 0;
        player.body.gravity.y = 100;

        if (keys.left.isDown) {
            player.body.velocity.x = -200;
            player.animations.play('left');


        }
        else if (keys.right.isDown) {
            player.body.velocity.x = 200;
            player.animations.play('right');


        }

        else if (keys.up.isDown) {
        // Jump when the player is touching the ground and the up arrow is pressed
        player.body.velocity.y = -200;
    }

    else
    {
        player.animations.stop();

        player.frame = 19;
    }



    

    },

    collectPeppers : function(player, peppers) {

        peppers.kill();

        this.score += 50;
        //this.scoreText.text = 'Score: ' + this.score;

    },
    table : function(player,zone1){
      repas.revive();
      aTable.revive();
      casserole.kill();

      this.score+=50;
      //this.scoreText.text="score :" + this.score;

    },

    lancer : function() {

      couteau.body.gravity.x=-300;
        // score+=50;
        // scoreText.text="score :" +score;
        tele.kill();
        this.game.state.start('salon2');

    },

    vaisselle : function(player,robinet){
        textVais=this.game.add.sprite(400,200, "textVais");
        tele=this.game.add.sprite(20, 350, "tele");
        couteau.revive(); 
        repas.kill();
        aTable.kill();
        tele.revive();


        // score+=50;
        // scoreText.text="score :" +score;

    }

}
