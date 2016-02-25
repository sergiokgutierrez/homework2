var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    // game.load.image('ilkke', 'assets/atari800xl.png');
    // game.load.image('ilkke', 'assets/basketball.png');

    game.load.spritesheet('ball', 'assets/basketball.png', 200, 200);
    game.load.spritesheet('net', 'assets/net.png', 200, 200);


}

var sprite;
var slide;
var ball;//create a local variable ball
var net;//this is the net

function create() {

    game.stage.backgroundColor = '#2d2d2d';

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  Set the world (global) gravity
    game.physics.arcade.gravity.y = 100;

    //  Sprite 1 will use the World (global) gravity
    ball = game.add.sprite(100, 100, 'ball');

    ball.animations.add('bounce',[0,1,2,3,5,6,7], 20,  true);

    net  = game.add.sprite(600, 100, 'net');

    // net.body.collideWorldBounds = true;

    // game.physics.arcade.enable(net);//not sure what this does


    // ball = game.add.sprite(32, game.world.height - 150, 'ball');
    // ball.animations.add('bounce', [0, 1, 2, 3], 10, true);

    game.physics.arcade.enable(ball);//not sure what this does

    ball.body.collideWorldBounds = true;
    ball.body.velocity.x = 150;
    ball.body.bounce.set(0.9);

    // //  Also enable sprite for drag
    ball.inputEnabled = true;
    ball.input.enableDrag();

    // ball.events.onDragStart.add(startDrag, this);
    // ball.events.onDragStop.add(stopDrag, this);

    // game.add.text(32, 32, 'Drag and release the sprite', { font: '16px Arial', fill: '#ffffff' });
    //  Click for a new background color
    game.input.onDown.add(changeColor, this);

}
var test = 'no';
function update(){
    game.physics.arcade.collide(player, effect, collisionHandler, null, this);
     
    ball.animations.play('bounce');
    
           
}

function startDrag() {

    //  You can't have a sprite being moved by physics AND input, so we disable the physics while being dragged
    sprite.body.moves = false;

}

function stopDrag() {

    //  And re-enable it upon release
    sprite.body.moves = true;

}
function changeColor() {

    var c = Phaser.Color.getRandomColor(50, 255, 255);

    game.stage.backgroundColor = c;

    game.fd.record(4);

}

    function render() {

        // game.debug.text(game.time.suggestedFps, 32, 32);
        // game.debug.text(game.time.physicsElapsed, 32, 32);
        // game.debug.body(player);
        // game.debug.bodyInfo(player, 16, 24);
        // game.debug.text('test: ' + test, 500, 500);

        // game.debug.text("lNumber: "+lNumber, 500, 50);

        // game.debug.text("arr[number]: "+arr[lNumber], 300, 150);

    }
