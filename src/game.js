var game = new Phaser.Game(700, 500, Phaser.AUTO, "gamebox", {preload: preload, create: create, update:update});




function equipe_bots(){
    
    //--------- Bot 1 ----------//
    bot1_equip = true;
    bot1_name = "None Bot1";
    // -- Create Function --
    /// bot1_create()
    // -- Update Functions --
    /// bot1_shoot()
    /// bot1_up()
    /// bot1_down()
    
    //--------- Bot 2 ----------//
    bot2_equip = true;
    bot2_name = "Null Bot2";
    // -- Create Function --
    /// bot2_create()
    // -- Update Functions --
    /// bot2_shoot()
    /// bot2_up()
    /// bot2_down()
    
    //--------- Bot 3 ----------//
    bot3_equip = true;
    bot3_name = "Zilth Bot3";

    //--------- Bot 4 ----------//
    bot4_equip = false;
    bot4_name = "Nada Bot4";
    
    //--------- Bot 5 ----------//
    bot5_equip = false;
    bot5_name = "Nope Bot5";
    
    
    

    // --------- Equipe the Bots Here  -----------------/// 
    // ---- You can equipe up to 3 Bots for the Mission
    // STEP 1. Pick which bot you like to use.
    // STEP 2. Change bot#_equip to true
    // STEP 3. Change the If statment to include the bot#_equip variable 
    // and the bot#_create() function.
    if(bot1_equip === true){
        bot1_create();    
    }
    
    if(bot2_equip === true){
        bot2_create();    
    }
    
    if(bot3_equip === true){
        bot3_create();
    }
    
    if(bot4_equip === true){
        bot4_create();
    }
    
//    if(________ === true){
//        ________();
//    }
    
    
} // End equipe bots 


// --------- Design Controls Here-----------------/// 
// ---- What keys do you want to use to control your bots?
// STEP 1. Make sure bot#_equip is set to true
// STEP 2. Change the If statment to include the bot#_equip variable 
// STEP 3. Pick a key to use as the shoot button, add the bot#_shoot() command inside the if statment 
// STEP 4. Repete with the Up and Down commands 

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
    
    
    if(bot2_equip === true){
        
        if(D_key.isDown){
            bot2_shoot();
        }
        
        if(E_key.isDown){
            bot2_up()
        }else if(C_key.isDown){
            bot2_down()
        }
        
    }
    
    
        
    if(bot3_equip === true){
        
        if(F_key.isDown){
            bot3_shoot();
        }
        
        if(R_key.isDown){
            bot3_up()
        }else if(V_key.isDown){
            bot3_down()
        }
        
    }
    
    if(bot4_equip === true){
        
        if(G_key.isDown){
            bot4_shoot();
        }
        
        if(T_key.isDown){
            bot4_up()
        }else if(B_key.isDown){
            bot4_down()
        }
        
    }
    
    if(bot5_equip === true){
        
        if(H_key.isDown){
            bot5_shoot();
        }
        
        if(Y_key.isDown){
            bot5_up()
        }else if(N_key.isDown){
            bot5_down()
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
var bot4_timeDelay = 3000;
var bot4_bullet_time;
var bot4_bomb_timer;
var bot4_current_bomb = null;

var bot5_equip;
var bot5;
var bot5_name;
var bot5_bullets;
var bot5_create;
var bot5_shoot;
var bot5_down;
var bot5_up;
var bot5_timeDelay = 10000;
var bot5_bullet_time;
var bot5_slime_time;

var slimeHandler;

var map_keys;
//var pooled_easy_num = 20;
//var pooled_medium_num = 20;
//var pooled_hard_num = 20;

var alive = true; 

var aliens_passed = 0;

var phase_index;
var phase_list;
var current_phase;
var phase1_complete = false;
var phase2_complete = false;
var phase3_complete = false;

var commentText;

/// Phase Paramters 
var phase1_config = {
    num: 10,
    num_dead: 0,
    finished: false,
    name: "Phase 1",
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
    num_dead: 0,
    finished: false,
    name: "Phase 2",
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
    num_dead: 0,
    finished: false,
    name: "Phase 3",
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
                    spritesheet: "texture",
                    frame: 'alien2_part1.jpg',
                    animation: ['alien2_part1.jpg','alien2_part2.jpg', 'alien2_part3.jpg'],
                    boom_frames: ['alien2_part4.jpg','alien2_part5.jpg', 'alien2_part6.jpg'],
                    health: 10,
                    speed: 1
                    };


var medium_aliens_config = {
            spritesheet: "texture",
            frame: 'alien_part1.jpg',
            animation: ['alien_part1.jpg','alien_part2.jpg', 'alien_part3.jpg'],
            boom_frames: ['alien_part5.jpg','alien_part6.jpg', 'alien_part7.jpg','alien_part8.jpg'],
            health: 15,
            speed: 1
            };

var hard_aliens_config = {
            spritesheet: "texture",
            frame: 'alien3_part1.jpg',
            animation: ['alien3_part1.jpg','alien3_part2.jpg', 'alien3_part3.jpg'],
            boom_frames: ['alien3_part5.jpg','alien3_part6.jpg', 'alien3_part7.jpg', 'alien3_part8.jpg'],
            health: 20,
            speed: 1
            };



//var now;
//var next_alien;

    
function preload() {
        /// stand in graphcis for the game 
        game.load.spritesheet("spritesheet", "./assets/spritesheet_updated.png", 100, 100, 20)
        game.load.atlas('texture', 'assets/spritesheet_final.png', 'assets/alien6_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        //game.load.atlas('texture', 'assets/alien_practice1.png', 'assets/alien_practice1.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    
        game.load.image("test_bullet", "./assets/bulletTest.png")
        game.load.image("needleBullet", "./assets/needleBullet.png")
        game.load.image("flame", "./assets/flame.png")
        

    }

function create(){
//        game.stage.backgroundColor = "#a8a8a8";
        game.stage.backgroundColor = "#fff";

        
        game.physics.startSystem(Phaser.Physics.ARCADE);
    
        /// Create background 
        var graphics = game.add.graphics(0, 0);
        //graphics.lineStyle(2, "#000000", 1);
//        graphics.beginFill(0x7e7e7e, 1);
        graphics.beginFill(0xe1eaf0, 1);
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
        
        
        phase_list = [
            phase1_config,
            phase2_config,
            phase3_config
        ]
        

        
        phase_index = 0;
    
        
        
        current_phase = phase_list[phase_index]
        current_phase.group.forEachAlive(function(alien){
                alien.play('bonce');
            })
        
        // map keys 
        map_keys()
        /// test bot
        equipe_bots();
        
    
            //  Text
        commentText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '32px Arial', fill: '#2d8457', align: 'center' });
        commentText.anchor.setTo(0.5, 0.5);
        commentText.visible = false;
        
        if(current_phase.name === "Phase 1"){
            commentText.visible = true;
            commentText.setText("The Aliens Are Comming! \n Defend The Base!")
            game.time.events.add(Phaser.Timer.SECOND * 2, fadeText, this);
        }
        
    } /// End of create function 

function update(game){
    
    use_bots();
    
    
    /// Text display 

    if(aliens_passed == 5){
        commentText.visible = true;
        commentText.setText("Five Aliens Have Gotten Through!")
        game.add.tween(commentText).to( { alpha: 1 }, 50, "Linear", true);
        
        game.time.events.add(Phaser.Timer.SECOND * 2, fadeText, this);
    }
    else if(aliens_passed == 8){
        commentText.visible = true;
        commentText.setText("Eight Aliens Have Psssed You! \n Are you even trying?")
        game.add.tween(commentText).to( { alpha: 1 }, 50, "Linear", true);
        game.time.events.add(Phaser.Timer.SECOND * 2, fadeText, this);
    }else if(aliens_passed == 12){
        commentText.visible = true;
        commentText.setText("Are You On The Aliens Side? \n 12 Aliens have Went By!")
        game.add.tween(commentText).to( { alpha: 1 }, 50, "Linear", true);
        game.time.events.add(Phaser.Timer.SECOND * 2, fadeText, this);
    }
    else if(aliens_passed == 16){
        commentText.visible = true;
        commentText.setText("Just a hint,\n the aliens are the bad guys.")
        game.add.tween(commentText).to( { alpha: 1 }, 50, "Linear", true);
        game.time.events.add(Phaser.Timer.SECOND * 2, fadeText, this);
    }

    if(current_phase.finished == false){

        num_alive = 0;


        current_phase.group.forEachAlive(function(alien){
            alien.body.x -= alien.speed;

            if(alien.body.x < 10){
                alien.kill()
                aliens_passed += 1;

            }

        })

        current_phase.group.forEachAlive(function(alien){

            num_alive += 1;

        })

        if(num_alive === 0 ){
            current_phase.finished = true;
            phase_index++;
            
            if(phase_index < phase_list.length){
                current_phase = phase_list[phase_index]
                current_phase.group.forEachAlive(function(alien){
                    alien.play('bonce');
                    })
                
                commentText.visible = true;
                commentText.setText(current_phase.name + "!")
                game.add.tween(commentText).to( { alpha: 1 }, 50, "Linear", true);
                game.time.events.add(Phaser.Timer.SECOND * 2, fadeText, this);
                
            }else{
                /// show game over
                commentText.visible = true
                commentText.setText("ALL PHASES COMPLETE \n CONGRATS!")
                game.add.tween(commentText).to( { alpha: 1 }, 50, "Linear", true);
                
            }
            

        }


    } /// End of is current phase finished 




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

        

    
} // End of Update function 

/// fade text 
function fadeText() {

    game.add.tween(commentText).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true);

}

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
            alien.speed = sorted_props[0][0].speed
            alien.animations.add("bonce", sorted_props[0][0].animation, 5, true);
            alien.animations.add('boom', sorted_props[0][0].boom_frames, 10, false)
            
        }else if(num <= sorted_props[1][1]){
             var alien = this_group.create(x_space, y_row, sorted_props[1][0].spritesheet, sorted_props[1][0].frame)
             alien.health = sorted_props[1][0].health
             alien.speed = sorted_props[1][0].speed
             alien.animations.add("bonce", sorted_props[1][0].animation, 5, true);
            alien.animations.add('boom', sorted_props[1][0].boom_frames, 10, false)
        }else{ /// the remaining precentage is the remainder 
             var alien = this_group.create(x_space, y_row, sorted_props[2][0].spritesheet, sorted_props[2][0].frame)
             alien.health = sorted_props[2][0].health
             alien.speed = sorted_props[2][0].speed
             alien.animations.add("bonce", sorted_props[2][0].animation, 5, true);
            alien.animations.add('boom', sorted_props[2][0].boom_frames, 10, false)
             
        }
        
            

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
    
    if (bot1_equip != true) return;
    
    /// Create the test bot 
    bot1 = game.add.sprite(0,300, "spritesheet",7)
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
    bot1_bullets.createMultiple(20, "spritesheet", 1);
    bot1_bullets.setAll('outOfBoundsKill', true);
    bot1_bullets.setAll('checkWorldBounds', true);
    bot1_bullets.setAll('anchor.x', 0.5);
    bot1_bullets.setAll('anchor.y', 0.5);
    
    bot1_bullets.setAll('damage', 5); /// each bullet will do 5 damage
    
    bot1_bullet_time = game.time.now;

    
}; /// End of test create 

function bot1_shoot(){
    
    if (bot1_equip != true) return;
    
    if(game.time.now > bot1_bullet_time){
        // change name text to white
        bot1.children[0].fill = "#FFFFFF"

        //// Get first existing bullet from the bot's pool
        bullet = bot1_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot1.x + bot1.width + 30, bot1.y + (bot1.width/2));
            bullet.body.velocity.x =+ 400;
            bot1_bullet_time = game.time.now + bot1_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot1_up(){
    if (bot1_equip != true) return;
    
    bot1.y -= 3;
};


function bot1_down(){
    if (bot1_equip != true) return;
    bot1.y += 3;
};

function bot1_update(){
    if (bot1_equip != true) return;
    
    game.physics.arcade.overlap(bot1_bullets, current_phase.group, collisionHandler, null, this);
    
    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot1_bullet_time){
        bot1.children[0].fill = "#6fC000";
        }

}/// End bot1_update

/// ----------------------------------------------------
////// Bot 2 Code 
/// ----------------------------------------------------
function bot2_create(){
    
    if (bot2_equip != true) return;
    
    /// Create the test bot 
    bot2 = game.add.sprite(0,100, "spritesheet",6)
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
    bot2_bullets.createMultiple(5, "spritesheet", 2);
    bot2_bullets.setAll('outOfBoundsKill', true);
    bot2_bullets.setAll('checkWorldBounds', true);
    bot2_bullets.setAll('anchor.x', 0.5);
    bot2_bullets.setAll('anchor.y', 0.5);
    
    bot2_bullets.setAll('damage', 10); /// each bullet will do 5 damage
    
    bot2_bullet_time = game.time.now;

    
}; /// End of test create 

function bot2_shoot(){
    if (bot2_equip != true) return;
    /// kill bullets thats are more than 150 pixals away 
    bot2_bullets.forEachAlive(function(bullet){
        

    })
        
    
    
    if(game.time.now > bot2_bullet_time){
        // change name text to white
        bot2.children[0].fill = "#FFFFFF"
        
    
    
        //// Get first existing bullet from the bot's pool
        bullet = bot2_bullets.getFirstExists(false);

        if(bullet){
            bullet.reset(bot2.x + bot2.width, bot2.y + (bot2.height/2));
            bullet.body.velocity.x =+ 100;
            bot2_bullet_time = game.time.now + bot2_timeDelay;

        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot2_up(){
    if (bot2_equip != true) return;
    bot2.y -= 1;
};


function bot2_down(){
    if (bot2_equip != true) return;
    bot2.y += 1;
};

function bot2_update(){
    if (bot2_equip != true) return;
    
    game.physics.arcade.overlap(bot2_bullets, current_phase.group, collisionHandler, null, this);
    
    /// Kill bullets that are more than 150 pixals away
    bot2_bullets.forEachAlive(function(bullet){
        if(bullet.x > bot2.x + 200){
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
    
    if (bot3_equip != true) return;
    
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
    bot3_bullets.createMultiple(20, "needleBullet");
    bot3_bullets.setAll('outOfBoundsKill', true);
    bot3_bullets.setAll('checkWorldBounds', true);
    
    bot3_bullets.setAll('damage', 2); /// each bullet will do 5 damage
    
    bot3_bullet_time = game.time.now;

    
}; /// End of test create 

function bot3_shoot(){
    
    if (bot3_equip != true) return;
    
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
    if (bot3_equip != true) return;
    bot3.y -= 5;
};


function bot3_down(){
    if (bot3_equip != true) return;
    bot3.y += 5;
};

function bot3_update(){
    
    if (bot3_equip != true) return;
    game.physics.arcade.overlap(bot3_bullets, current_phase.group, collisionHandler, null, this);

    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot3_bullet_time){
        bot3.children[0].fill = "#6fC000";
        }

}/// End bot3_update


/// ----------------------------------------------------
////// Bot 4 Code 
/// ----------------------------------------------------
function bot4_create(){
    if (bot4_equip != true) return;
    
    /// Create the test bot 
    bot4 = game.add.sprite(0,0, "spritesheet",16)
    game.physics.arcade.enable(bot4);
    bot4.body.collideWorldBounds = true;
    bot4.body.bounce.x = 0.05;
    bot4.body.bounce.y = 0.05;
    
    bot4_name = game.add.text(0, 0 + bot4.height, bot4_name, style_names)
    
    bot4.addChild(bot4_name);
    
    
    //// Bot4 is a bomber, make his bombs  
    bot4_bullets = game.add.group();
    bot4_bullets.enableBody = true;
    bot4_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot4_bullets.createMultiple(1, "spritesheet", 18);
    bot4_bullets.setAll('outOfBoundsKill', true);
    bot4_bullets.setAll('checkWorldBounds', true);
    
    bot4_bullets.setAll('damage', 20); /// each bomb will do 20 damage
    
        
    bot4_bullets.callAll('animations.add', 'animations', 'boom', [9,10,11,12,13], 5, false);
    bot4_bullets.callAll('animations.add', 'animations', 'wait', [18], 5, false);
    
    bot4_bullet_time = game.time.now;

    
}; /// End of test create 

function bot4_shoot(){
    if (bot4_equip != true) return;
    
    if(game.time.now > bot4_bullet_time){
        // change name text to white
        bot4.children[0].fill = "#FFFFFF"
        
        //// Get first existing bullet from the bot's pool
        bullet = bot4_bullets.getFirstDead(false);

        if(bullet){

            bullet.reset(bot4.x + bot4.width, bot4.y + (bot4.height/2));
            bullet.body.velocity.x =+ 500;
            bot4_bullet_time = game.time.now + bot4_timeDelay;
            bot4_bomb_timer = game.time.now + 1000;
            bot4_current_bomb = bullet;
            bot4_current_bomb.scale.setTo(1, 1);
            bot4_current_bomb.animations.play('wait')



        }
    }/// end game.time.now > 

}; /// end of test shoot 


function bot4_up(){
    if (bot4_equip != true) return;
    bot4.y -= 5;
};


function bot4_down(){
    if (bot4_equip != true) return;
    bot4.y += 5;
};

function bot4_update(){
    if (bot4_equip != true) return;
    game.physics.arcade.overlap(bot4_bullets, current_phase.group, collisionHandler, null, this);

    
    

    /// Kill bullets that are more than 150 pixals away
    bot4_bullets.forEachAlive(function(bullet){
        if(bullet.x > bot4.x + 200){
            bullet.body.velocity.x = 0;
        }
    })


    
    // detionate bombs that have their timers expire

    if (game.time.now > bot4_bomb_timer){
        
        bot4_current_bomb.scale.setTo(2, 2);
        
        
        bot4_current_bomb.animations.play('boom');


        bot4_current_bomb.animations.currentAnim.onComplete.add(function () {	

            bot4_current_bomb.kill();
//                bot4_current_bomb = null;
//                bot4_bomb_timer = 0;
        }, this);


        
        
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
    if (bot5_equip != true) return;
    
    /// Create the test bot 
    bot5 = game.add.sprite(0,500, "spritesheet",17)
    game.physics.arcade.enable(bot5);
    bot5.body.collideWorldBounds = true;
    bot5.body.bounce.x = 0.05;
    bot5.body.bounce.y = 0.05;
    
    bot5_name = game.add.text(0, 0 + bot5.height, bot5_name, style_names)
    
    bot5.addChild(bot5_name);
    
    /// bot5 makes slime, these are slime squares 
    bot5_bullets = game.add.group();
    bot5_bullets.enableBody = true;
    bot5_bullets.physicsBodyType = Phaser.Physics.ARACADE;
    bot5_bullets.createMultiple(3, "spritesheet", 19);
    bot5_bullets.setAll('outOfBoundsKill', true);
    bot5_bullets.setAll('checkWorldBounds', true);
    
    bot5_bullets.setAll('damage', 0); /// each bullet will do 5 damage
    
    bot5_bullet_time = game.time.now;

    
}; /// End of test create 

function bot5_shoot(){
    
    if (bot5_equip != true) return;
    
    if(game.time.now > bot5_bullet_time){
        // change name text to white
        bot5.children[0].fill = "#FFFFFF"
        

        slime_x = 100;
        slime_y = bot5.y;
        //// slime the area
        bot5_bullets.forEach(function(slime){
            slime.reset(slime_x, slime_y);
            slime.z = 0;
            slime_x += 100;
            
        })
        bot5_bullet_time = game.time.now + bot5_timeDelay
        ///bot5_slime_time = game.time.now + bot5_timeDelay;
    }/// end game.time.now > 

}; /// end of test shoot 


function bot5_up(){
    if (bot5_equip != true) return;
    bot5.y -= 5;
};


function bot5_down(){
    if (bot5_equip != true) return;
    bot5.y += 5;
};

function bot5_update(){
    if (bot5_equip != true) return;
    game.physics.arcade.overlap(bot5_bullets, current_phase.group, slimeHandler, null, this);
    
    /// Change the Text to green when ready to fire 
    if(game.time.now > bot5_bullet_time){
        bot5.children[0].fill = "#6fC000";
        
        /// remove slime 
        bot5_bullets.forEach(function (slime) { slime.kill(); });
        current_phase.group.forEach(function (alien) { alien.speed = 1; });

        }

}/// End bot5_update

function slimeHandler(slime, alien){
  game.world.bringToTop(current_phase.group);
    
    /// yeah i'm not proud of my choice either...
        if(bot1_equip){
            game.world.bringToTop(bot1_bullets);
   
        }
        if(bot2_equip){
            game.world.bringToTop(bot2_bullets);
        }
        if(bot3_equip){
            game.world.bringToTop(bot3_bullets);
        }

        if(bot4_equip){
            game.world.bringToTop(bot4_bullets);
        }




    alien.speed = .33;

    
};