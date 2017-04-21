var game = new Phaser.Game(700, 500, Phaser.AUTO, "gamebox", {preload: preload, create: create, update:update});




function equipe_bots(){
    
    
    bot1_equip = true;
    bot1_name = "None";
    
    bot2_equip = false;
    bot2_name = "Null";
    
    bot3_equip = false;
    bot3_name = "Zilth";
    
    bot4_equip = true;
    bot4_name = "Nada";
    
    bot5_equip = true;
    bot5_name = "Nope";

    ///// Equipe the Bots Here 
    ///// You can qupip up to 3 Bots for the Mission
    if(bot1_equip === true){
        bot1_create();    
    }
    

    if(bot5_equip === true){
        bot5_create();    
    }
    
    if(bot4_equip === true){
        bot4_create();
    }
    
    
} // End equipe bots 






function use_bots(){
    
    if(bot1_equip === true){
        
        if(S_key.isDown){
            bot1_shoot();
        }
        
        if(W_key.isDown){
            bot1_up()
        }else if(X_key.isDown){
            bot1_down()
        }
        
    }
    
    
    if(bot5_equip === true){
        
        if(D_key.isDown){
            bot5_shoot();
        }
        
        if(E_key.isDown){
            bot5_up()
        }else if(C_key.isDown){
            bot5_down()
        }
        
    }
    
    
        
    if(bot4_equip === true){
        
        if(F_key.isDown){
            bot4_shoot();
        }
        
        if(R_key.isDown){
            bot4_up()
        }else if(V_key.isDown){
            bot4_down()
        }
        
    }
    
    
} /// End use bots 






























var style_names = { font: "20px Arial", fill: "#FFFFFF"};

var bot1_equip;
var bot1;
var bot1_name;
var bot1_bullets;
var bot1_create;
var bot1_shoot;
var bot1_down;
var bot1_up;
var bot1_timeDelay = 500;
var bot1_bullet_time;


var bot2_equip;
var bot2;
var bot2_name;
var bot2_bullets;
var bot2_create;
var bot2_shoot;
var bot2_down;
var bot2_up;
var bot2_timeDelay = 1000;
var bot2_bullet_time;

var bot3_equip;
var bot3;
var bot3_name;
var bot3_bullets;
var bot3_create;
var bot3_shoot;
var bot3_down;
var bot3_up;
var bot3_timeDelay = 200;
var bot3_bullet_time;

var bot4_equip;
var bot4;
var bot4_name;
var bot4_bullets;
var bot4_create;
var bot4_shoot;
var bot4_down;
var bot4_up;
var bot4_timeDelay = 200;
var bot4_bullet_time;

var bot5_equip;
var bot5;
var bot5_name;
var bot5_bullets;
var bot5_create;
var bot5_shoot;
var bot5_down;
var bot5_up;
var bot5_timeDelay = 200;
var bot5_bullet_time;

var map_keys;
//var pooled_easy_num = 20;
//var pooled_medium_num = 20;
//var pooled_hard_num = 20;

var alive = true; 

var phases;
var current_phase;
var phase1_complete = false;
var phase2_complete = false;
var phase3_complete = false;

/// Phase Paramters 
var phase1_config = {
    num: 10,
    start_delay: 2000, // in miliseconds 
    easy: .75,
    medium: .20,
    hard: .05,
    spaceing: [0,
               300,
               200,
               200,
               150,
               150,
               150,
               100,
               100,
               50]
}

var phase2_config = {
    num: 15,
    start_delay: 2000, // in miliseconds 
    easy: .50,
    medium: .30,
    hard: .20,
    spaceing: [0,
               300,
               200,
               200,
               150,
               150,
               150,
               100,
               100,
               50,
               50,
               50,
               50,
               25,
               25]
}


var phase3_config = {
    num: 20,
    start_delay: 2000, // in miliseconds 
    easy: .30,
    medium: .30,
    hard: .40,
    spaceing: [0,
               300,
               250,
               225,
               200,
               200,
               150,
               150,
               150,
               100,
               100,
               50,
               50,
               50,
               50,
               25,
               25,
               25,
               10,
               10,
               10]
}


 var easy_aliens_config = {
                    spritesheet: "spritesheet",
                    frame: 0,
                    animation: [0,1],
                    health: 10,
                    };


var medium_aliens_config = {
            spritesheet: "spritesheet",
            frame: 2,
            animation: [2,3],
            health: 15,
            };

var hard_aliens_config = {
            spritesheet: "spritesheet",
            frame: 4,
            animation: [4,5],
            health: 20
            };

var phase_index = 0;

var now;
var next_alien;

    
function preload() {
        /// stand in graphcis for the game 
        game.load.spritesheet("spritesheet", "./assets/spritesheet.png", 100, 100, 18)
        game.load.image("test_bullet", "./assets/bulletTest.png")
        game.load.image("flame", "./assets/flame.png")

    }

function create(){
        game.stage.backgroundColor = "#a8a8a8";

        
        game.physics.startSystem(Phaser.Physics.ARCADE);
    
        /// Create background 
        var graphics = game.add.graphics(0, 0);
        //graphics.lineStyle(2, "#000000", 1);
        graphics.beginFill(0x7e7e7e, 1);
        /// dark gray stripe
        graphics.drawRect(0,0, game.width, game.height / 5);
        graphics.drawRect(0,(game.height / 5) * 2, game.width, game.height / 5);
        graphics.drawRect(0, (game.height / 5) * 4, game.width, game.height / 5);
        graphics.endFill();
    
                /// cReate barb wire safe zone
        safe_zone = game.add.group();

        for(i =0; i <5; i ++){
            safe_zone.add(game.add.sprite(0,100 * i, "spritesheet",14))
        }
        
        /// test alien 
//        test = game.add.sprite(game.width, 100, 'spritesheet', 0)
//        test.animations.add("bounce",[0,1], 2, true);
//        test.animations.play("bounce")
        
 
        
        phase1_aliens = game.add.group();
        phase1_aliens.enableBody = true;
    
        phase1_config.group = phase1_aliens;
        create_aliens(phase1_config)
        
        phase2_aliens = game.add.group();
        phase2_aliens.enableBody = true;
    
        phase2_config.group = phase2_aliens;
        create_aliens(phase2_config)
        
        phase3_aliens = game.add.group();
        phase3_aliens.enableBody = true;
    
        phase3_config.group = phase3_aliens;
        create_aliens(phase3_config)
        
        
        current_phase = 'phase1';
        phase1_aliens.forEachAlive(function(alien){
                alien.play('bonce');
            })
        
        // map keys 
        map_keys()
        /// test bot
        equipe_bots();
        
        
        
    } /// End of create function 

function update(game){
    
    use_bots();
    
    if(alive == true){
        
        //// Check what phase we are in
        if (phase1_complete == false){
            
            num_alive = 0;
            
            phase1_aliens.forEachAlive(function(alien){
                alien.body.x -= 1;
                num_alive += 1;
            })
            
            if(num_alive === 0 ){
                phase1_complete = true;
                current_phase = 'phase2'
            }
            

        }else if (phase2_complete === false){
            num_alive = 0;
            
            phase2_aliens.forEachAlive(function(alien){
                alien.body.x -= 1;
                num_alive += 1;
                
            })
            
            if(num_alive === 0 ){
                phase1_complete = true;
                current_phase = 'phase3'
            }
            
        }else if(phase3_complete === false){
            num_alive = 0;
            
            phase3_aliens.forEachAlive(function(alien){
                alien.body.x -= 1;
                num_alive += 1;
                
            })
            
            if(num_alive === 0 ){
                phase1_complete = true;
                current_phase = 'game_over'
            }
            
        }
        
        
        
        
        /// This really needs to be cleaned up but hey its working 
        if(bot1_equip){
            bot1_update()
   
        }
        if(bot2_equip){
            bot2_update()
        }
        if(bot3_equip){
            bot3_update()
        }

        if(bot4_equip){
            bot4_update()
        }

        if(bot5_equip){
            bot5_update()
        }

        
    }/// End if alive 
    
    
    
} // End of Update function 

function create_aliens(config){
    
    var this_group = config.group;
    

    /// Sort the array to be smalled to largest    
    var sorted_props = [[easy_aliens_config, config.easy], [medium_aliens_config, config.medium], [hard_aliens_config, config.hard]].sort(function(a,b){return a[1] - b[1]});

    x_space = game.width + config.spaceing[0]; 
    
    
    /// create 10 aliens off the screen //// REN UPDATE SO NOT CREATING POOLS ON SCREEN
    for(i = 1; i <= config.num; i++){
        /// Create a random number
        var num = Math.random();

        /// We want to pace out the aliens 
        /// Each of these sprties is 100 pixals wide.
        x_space = x_space + config.spaceing[i - 1]; 
        /// for y pick a random number between 0 and 4 inclusive 
        y_row = Math.floor((Math.random() * 5)) * 100;
        
        
        
        if(num <= sorted_props[0][1]){ /// if less thant the smallest prob in the sorted list
            /// set location off screen
            var alien = this_group.create(x_space, y_row, sorted_props[0][0].spritesheet, sorted_props[0][0].frame)
            alien.health = sorted_props[0][0].health
            alien.animations.add("bonce", sorted_props[0][0].animation, 2, true);
            
        }else if(num <= sorted_props[1][1]){
             var alien = this_group.create(x_space, y_row, sorted_props[1][0].spritesheet, sorted_props[1][0].frame)
             alien.health = sorted_props[1][0].health
             alien.animations.add("bonce", sorted_props[1][0].animation, 2, true);
        }else{ /// the remaining precentage is the remainder 
             var alien = this_group.create(x_space, y_row, sorted_props[2][0].spritesheet, sorted_props[2][0].frame)
             alien.health = sorted_props[2][0].health
             alien.animations.add("bonce", sorted_props[2][0].animation, 2, true);
             
        }
        
            
        alien.animations.add('boom', [9,10,11,12,13], 5, false)
        
    }
    
    
    
}/// End Create Aliens 


function collisionHandler (bullet, alien) {
    

    alien.health -= bullet.damage;
    
    
    //  When a bullet hits an alien we kill them both
    if(alien.health <= 0){
        
        alien.animations.play("boom")
        alien.animations.currentAnim.onComplete.add(function () {	
            alien.kill();}, this);
        
    };
    bullet.kill();
    
} /// End of Collision Handler 


function map_keys(){

    A_key = game.input.keyboard.addKey(Phaser.Keyboard.A);
    B_key = game.input.keyboard.addKey(Phaser.Keyboard.B);
    C_key = game.input.keyboard.addKey(Phaser.Keyboard.C);
    D_key = game.input.keyboard.addKey(Phaser.Keyboard.D);
    E_key = game.input.keyboard.addKey(Phaser.Keyboard.E);
    F_key = game.input.keyboard.addKey(Phaser.Keyboard.F);
    G_key = game.input.keyboard.addKey(Phaser.Keyboard.G);
    H_key = game.input.keyboard.addKey(Phaser.Keyboard.H);
    I_key = game.input.keyboard.addKey(Phaser.Keyboard.I);
    J_key = game.input.keyboard.addKey(Phaser.Keyboard.J);
    K_key = game.input.keyboard.addKey(Phaser.Keyboard.K);
    L_key = game.input.keyboard.addKey(Phaser.Keyboard.L);
    M_key = game.input.keyboard.addKey(Phaser.Keyboard.M);
    N_key = game.input.keyboard.addKey(Phaser.Keyboard.N);
    O_key = game.input.keyboard.addKey(Phaser.Keyboard.O);
    P_key = game.input.keyboard.addKey(Phaser.Keyboard.P);
    Q_key = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    R_key = game.input.keyboard.addKey(Phaser.Keyboard.R);
    S_key = game.input.keyboard.addKey(Phaser.Keyboard.S);
    T_key = game.input.keyboard.addKey(Phaser.Keyboard.T);
    U_key = game.input.keyboard.addKey(Phaser.Keyboard.U);
    V_key = game.input.keyboard.addKey(Phaser.Keyboard.V);
    W_key = game.input.keyboard.addKey(Phaser.Keyboard.W);
    X_key = game.input.keyboard.addKey(Phaser.Keyboard.X);
    Y_key = game.input.keyboard.addKey(Phaser.Keyboard.Y);
    Z_key = game.input.keyboard.addKey(Phaser.Keyboard.Z);

//    game.input.keyboard.onDownCallback = function(e) {   
//        //for demonstration, next line prints the keyCode to console
//        console.log(e.keyCode); 
//    }
}


/// ----------------------------------------------------
////// Bot 1 Code 
/// ----------------------------------------------------
function bot1_create(){
    /// Create the test bot 
    bot1 = game.add.sprite(0,100, "spritesheet",6)
    game.physics.arcade.enable(bot1);
    bot1.body.collideWorldBounds = true;
    bot1.body.bounce.x = 0.05;
    bot1.body.bounce.y = 0.05;
    
    bot1_name = game.add.text(0, 0 + bot1.height, bot1_name, style_names)
    
    bot1.addChild(bot1_name);
    
    /// Create test bots bullets 
    bot1_bullets = game.add.group();
    bot1_bullets.enableBody = true;
    bot1_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot1_bullets.createMultiple(20, "test_bullet");
    bot1_bullets.setAll('outOfBoundsKill', true);
    bot1_bullets.setAll('checkWorldBounds', true);
    
    bot1_bullets.setAll('damage', 5); /// each bullet will do 5 damage
    
    bot1_bullet_time = game.time.now;

    
}; /// End of test create 

function bot1_shoot(){
    
    
    if(game.time.now > bot1_bullet_time){
        // change name text to white
        bot1.children[0].fill = "#FFFFFF"

        //// Get first existing bullet from the bot's pool
        bullet = bot1_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot1.x + 100, bot1.y + 50);
            bullet.body.velocity.x =+ 400;
            bot1_bullet_time = game.time.now + bot1_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot1_up(){
    bot1.y -= 3;
};


function bot1_down(){
    bot1.y += 3;
};

function bot1_update(){
    
    
    /// sooo needs to be cleaned 
    if (current_phase == 'phase1'){
        game.physics.arcade.overlap(bot1_bullets, phase1_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot1_bullets, phase2_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot1_bullets, phase3_aliens, collisionHandler, null, this);
    }
    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot1_bullet_time){
        bot1.children[0].fill = "#6fC000";
        }

}/// End bot1_update

/// ----------------------------------------------------
////// Bot 2 Code 
/// ----------------------------------------------------
function bot2_create(){
    /// Create the test bot 
    bot2 = game.add.sprite(0,300, "spritesheet",7)
    game.physics.arcade.enable(bot2);
    bot2.body.collideWorldBounds = true;
    bot2.body.bounce.x = 0.05;
    bot2.body.bounce.y = 0.05;
    
    bot2_name = game.add.text(0, 0 + bot2.height, bot2_name, style_names)
    
    bot2.addChild(bot2_name);
    
    /// Create test bots bullets 
    bot2_bullets = game.add.group();
    bot2_bullets.enableBody = true;
    bot2_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot2_bullets.createMultiple(5, "flame");
    bot2_bullets.setAll('outOfBoundsKill', true);
    bot2_bullets.setAll('checkWorldBounds', true);
    
    bot2_bullets.setAll('damage', 10); /// each bullet will do 5 damage
    
    bot2_bullet_time = game.time.now;

    
}; /// End of test create 

function bot2_shoot(){
    
    /// kill bullets thats are more than 150 pixals away 
    bot2_bullets.forEachAlive(function(bullet){
        

    })
        
    
    
    if(game.time.now > bot2_bullet_time){
        // change name text to white
        bot2.children[0].fill = "#FFFFFF"
        
    
    
        //// Get first existing bullet from the bot's pool
        bullet = bot2_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot2.x + 100, bot2.y);
            bullet.body.velocity.x =+ 100;
            bot2_bullet_time = game.time.now + bot2_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot2_up(){
    bot2.y -= 1;
};


function bot2_down(){
    bot2.y += 1;
};

function bot2_update(){
    
    
    /// sooo needs to be cleaned 
    if (current_phase == 'phase1'){
        game.physics.arcade.overlap(bot2_bullets, phase1_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot2_bullets, phase2_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot2_bullets, phase3_aliens, collisionHandler, null, this);
    }
    
    /// Kill bullets that are more than 150 pixals away
    bot2_bullets.forEachAlive(function(bullet){
        if(bullet.x > bot2.x + 150){
            bullet.kill();
        }
    })
        
    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot2_bullet_time){
        bot2.children[0].fill = "#6fC000";
        }

}/// End bot2_update


/// ----------------------------------------------------
////// Bot 3 Code 
/// ----------------------------------------------------
function bot3_create(){
    
    /// Create the test bot 
    bot3 = game.add.sprite(0,0, "spritesheet",15)
    game.physics.arcade.enable(bot3);
    bot3.body.collideWorldBounds = true;
    bot3.body.bounce.x = 0.05;
    bot3.body.bounce.y = 0.05;
    
    bot3_name = game.add.text(0, 0 + bot3.height, bot3_name, style_names)
    
    bot3.addChild(bot3_name);
    
    /// Create test bots bullets 
    bot3_bullets = game.add.group();
    bot3_bullets.enableBody = true;
    bot3_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot3_bullets.createMultiple(20, "test_bullet");
    bot3_bullets.setAll('outOfBoundsKill', true);
    bot3_bullets.setAll('checkWorldBounds', true);
    
    bot3_bullets.setAll('damage', 1); /// each bullet will do 5 damage
    
    bot3_bullet_time = game.time.now;

    
}; /// End of test create 

function bot3_shoot(){
    
    /// kill bullets thats are more than 150 pixals away 
    bot3_bullets.forEachAlive(function(bullet){
        
        
    })
        
    
    if(game.time.now > bot3_bullet_time){
        // change name text to white
        bot3.children[0].fill = "#FFFFFF"
        
    
    
        //// Get first existing bullet from the bot's pool
        bullet = bot3_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot3.x + bot3.width, bot3.y + + (bot3.height/2));
            bullet.body.velocity.x =+ 300;
            bot3_bullet_time = game.time.now + bot3_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot3_up(){
    bot3.y -= 5;
};


function bot3_down(){
    bot3.y += 5;
};

function bot3_update(){
    
    
    /// sooo needs to be cleaned 
    if (current_phase == 'phase1'){
        game.physics.arcade.overlap(bot3_bullets, phase1_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot3_bullets, phase2_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot3_bullets, phase3_aliens, collisionHandler, null, this);
    }
    

    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot3_bullet_time){
        bot3.children[0].fill = "#6fC000";
        }

}/// End bot3_update


/// ----------------------------------------------------
////// Bot 4 Code 
/// ----------------------------------------------------
function bot4_create(){
    
    /// Create the test bot 
    bot4 = game.add.sprite(0,0, "spritesheet",16)
    game.physics.arcade.enable(bot4);
    bot4.body.collideWorldBounds = true;
    bot4.body.bounce.x = 0.05;
    bot4.body.bounce.y = 0.05;
    
    bot4_name = game.add.text(0, 0 + bot4.height, bot4_name, style_names)
    
    bot4.addChild(bot4_name);
    
    /// Create test bots bullets 
    bot4_bullets = game.add.group();
    bot4_bullets.enableBody = true;
    bot4_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot4_bullets.createMultiple(20, "test_bullet");
    bot4_bullets.setAll('outOfBoundsKill', true);
    bot4_bullets.setAll('checkWorldBounds', true);
    
    bot4_bullets.setAll('damage', 1); /// each bullet will do 5 damage
    
    bot4_bullet_time = game.time.now;

    
}; /// End of test create 

function bot4_shoot(){
    
    /// kill bullets thats are more than 150 pixals away 
    bot4_bullets.forEachAlive(function(bullet){
        
        
    })
        
    
    if(game.time.now > bot4_bullet_time){
        // change name text to white
        bot4.children[0].fill = "#FFFFFF"
        
    
    
        //// Get first existing bullet from the bot's pool
        bullet = bot4_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot4.x + bot4.width, bot4.y + + (bot4.height/2));
            bullet.body.velocity.x =+ 300;
            bot4_bullet_time = game.time.now + bot4_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot4_up(){
    bot4.y -= 5;
};


function bot4_down(){
    bot4.y += 5;
};

function bot4_update(){
    
    
    /// sooo needs to be cleaned 
    if (current_phase == 'phase1'){
        game.physics.arcade.overlap(bot4_bullets, phase1_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot4_bullets, phase2_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot4_bullets, phase3_aliens, collisionHandler, null, this);
    }
    

    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot4_bullet_time){
        bot4.children[0].fill = "#6fC000";
        }

}/// End bot4_update


/// ----------------------------------------------------
////// Bot 5 Code 
/// ----------------------------------------------------
function bot5_create(){
    
    /// Create the test bot 
    bot5 = game.add.sprite(0,500, "spritesheet",17)
    game.physics.arcade.enable(bot5);
    bot5.body.collideWorldBounds = true;
    bot5.body.bounce.x = 0.05;
    bot5.body.bounce.y = 0.05;
    
    bot5_name = game.add.text(0, 0 + bot5.height, bot5_name, style_names)
    
    bot5.addChild(bot5_name);
    
    /// Create test bots bullets 
    bot5_bullets = game.add.group();
    bot5_bullets.enableBody = true;
    bot5_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot5_bullets.createMultiple(20, "test_bullet");
    bot5_bullets.setAll('outOfBoundsKill', true);
    bot5_bullets.setAll('checkWorldBounds', true);
    
    bot5_bullets.setAll('damage', 1); /// each bullet will do 5 damage
    
    bot5_bullet_time = game.time.now;

    
}; /// End of test create 

function bot5_shoot(){
    
    /// kill bullets thats are more than 150 pixals away 
    bot5_bullets.forEachAlive(function(bullet){
        
        
    })
        
    
    if(game.time.now > bot5_bullet_time){
        // change name text to white
        bot5.children[0].fill = "#FFFFFF"
        
    
    
        //// Get first existing bullet from the bot's pool
        bullet = bot5_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot5.x + bot5.width, bot5.y + + (bot5.height/2));
            bullet.body.velocity.x =+ 300;
            bot5_bullet_time = game.time.now + bot5_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot5_up(){
    bot5.y -= 5;
};


function bot5_down(){
    bot5.y += 5;
};

function bot5_update(){
    
    
    /// sooo needs to be cleaned 
    if (current_phase == 'phase1'){
        game.physics.arcade.overlap(bot5_bullets, phase1_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot5_bullets, phase2_aliens, collisionHandler, null, this);
    }else if(current_phase == 'phase3'){
        game.physics.arcade.overlap(bot5_bullets, phase3_aliens, collisionHandler, null, this);
    }
    

    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot5_bullet_time){
        bot5.children[0].fill = "#6fC000";
        }

}/// End bot5_update
