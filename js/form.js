class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
        this.gameState= database.ref("gameState");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.gameState.on("value",(data)=>{ 
            
        if(data.val() === 0){ 
            this.input.show();this.button.show();this.greeting.hide();this.title.show();   
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(500, jungle.height / 2);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(500, 500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 650);
        this.reset.style('width', '120px');
        this.reset.style('height', '40px');
        this.reset.style('background', '#1A3B08');
        this.reset.style('color', "#f2f1f1")

        this.button.mousePressed(() => {
            this.greeting.show();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.playerIndexInt = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400, 250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });
        }
 if(data.val() === 1){
       
        this.reset.mousePressed(() => {
            database.ref("/").set({
                gameState: 0,
                playerCount: 0
            });
            database.ref("players").set();
           this.input.show();this.button.show();
           player.score =0 
             });
}
    });
    }
    
    submit() {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(400, 250);
        this.greeting.style('color', 'white');
        this.greeting.style('font-size', '100px');


    }
}