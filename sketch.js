var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player, form, game;
var player1, player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var jungle;
var s;

function preload() {
    back_img = loadImage("images/jungle.jpg");
    player_img = loadImage("images/basket2.png");
    fruit1_img = loadImage("images/apple2.png");
    fruit2_img = loadImage("images/banana2.png");
    fruit3_img = loadImage("images/melon2.png");
    fruit4_img = loadImage("images/orange2.png");
    fruit5_img = loadImage("images/pineapple2.png");
    fruitGroup = new Group();
}

function setup() {
    jungle = createCanvas(1000, 700);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw() {
    background(back_img);
    if (playerCount === 2) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
        for (plr in allPlayers) {
            if (allPlayers[plr].playerIndexInt === 1) {
                textSize(30);
                fill(247, 248, 247);
                text(allPlayers[plr].name + " : " + allPlayers[plr].score, 100, 30);
            } else {
                textSize(30);
                fill(247, 248, 247);
                text(allPlayers[plr].name + " : " + allPlayers[plr].score, 100, 70)
            }
        }
    }
    if (gameState === 2) {

        game.end();
    }
}