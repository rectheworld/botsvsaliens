# Bots vs Aliens: A Lesson on IF Statements 

This game was made as part of the TAG Lesson (Session 3 for Javascript After School Lesson). 

Learning Objectives:

-   Students will learn about String and boolean Variables
    
-   Students will learn how an basic if statement works

This game also contributes to the goal of building a collection of working demo games that will encourage students to start hacking/breaking/ and making these games their own. 

### Game Objective 
This a pretty straight rip off of Plants Vs Aliens with the exception that the Plants (or Bots in this case) are movable. 

The object of the game is to use the bots to shoot down aliens before they pass the left side of the screen and 'enter the base'.  There are three waves of aliens. 

### Lesson Objectives 
The game starts with three active bots. Each bot has a unique weapon. As part of the lesson, student will equip two additional bots by changing their 
equip status from **true** to **false**

Furthermore, students can rename their bots with better names. 

Bot equipment and name section
```
    //--------- Bot 1 ----------//
    bot1_equip = true;
    bot1_name = "None Bot1";
    //--------- Bot 2 ----------//
    bot2_equip = true;
    bot2_name = "Null Bot2";
    //--------- Bot 3 ----------//
    bot3_equip = true;
    bot3_name = "Zilth Bot3";
    //--------- Bot 4 ----------//
    bot4_equip = false;
    bot4_name = "Nada Bot4";
    //--------- Bot 5 ----------//
    bot5_equip = false;
    bot5_name = "Nope Bot5";
```
### Controls
When the instructor first boots the game there are three equipped bots (Bot 1, Bot 2, and Bot 3).

Bot 1 controls are 
S Key = Shoot 
W Key = Up
X Key = Down 

Bot 2 Controls are the same, but one key over, so 
E Key = Shoot
W Key = Up
X Key = Down 

The controls (even for the unequipped bots) continue in the pattern down the keyboard. 

Pro Tip: Have the students reset the controls how ever they like by changing the movement function for each bot. For example the update function for bot2 are:

```
    // -- Update Functions --
    /// bot2_shoot()
    /// bot2_up()
    /// bot2_down()
```

## Playing / Modifying the Game
The code is designed to be manipulated in the Fiddler.js editor.  This web based editor is available on DCPS computers. 

If not in the classroom or on DCPS computers, It is suggested to Brackets IDE for development or any local server for testing and development.

To play the base game, you can find it here: https://rectheworld.github.io/botsvsaliens/


## Built With
* [Phaser.js 2.6.2 ]([https://phaser.io/](https://phaser.io/)) 

## Contributing
Alien sprites are done by TAG artist Charlotte 
Lesson and code contributions from @Notserk 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
