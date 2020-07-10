var Field = [];
var GoalField = [];

var FieldSizeX = 3;
var FieldSizeY = 3;

var score = 1;
var levels ={
    "level1": {
        "GoalPreSet": 1,
    },
    "level2":{
        "GoalPreSet": 2
    },
    "level3":{
        "GoalPreSet": 3
    },
    "level4":{
        "GoalPreSet": 4
    },
    "level5":{
        "GoalPreSet": 5
    },
    "level6":{
        "GoalPreSet": 6
    },
    "level7":{
        "GoalPreSet": 7
    },
    "level8":{
        "GoalPreSet": 8
    },
    "level999":{
        "GoalPreSet": 999
    }
}

function StartGame(){
    var title = document.createElement("h1");
        title.innerHTML= "Change the Box!";
    wrapper.appendChild(title);

    newButton(endless_button = "endless_button", endless_text = "Endless Run");
    newButton(start_button = "start_button", levelText = "Level Select");

    

   /* endless_button.addEventListener("mousedown", function(){
        wrapper.removeChild(start_button);
        wrapper.removeChild(endless_button);
        Init(levels.level999.GoalPreSet);
    })
    
    */
    document.getElementById(start_button).addEventListener("click", function(){
        wrapper.removeChild(document.getElementById(start_button));
        wrapper.removeChild(document.getElementById(endless_button));
        hasBeenClicked();
        LevelSelect();
    });
    
    
    document.getElementById(endless_button).addEventListener("mousedown", function(){
        wrapper.removeChild(document.getElementById(start_button));
        wrapper.removeChild(document.getElementById(endless_button));
        hasBeenClicked();
        Init(999);
    })


   
}

function hasBeenClicked(){
    console.log("Nope");
}

function newButton(buttonTitlePar, buttonTextPar){
    this.title = buttonTitlePar;
    this.elementID = buttonTitlePar;
    this.text;
    this.title = document.createElement("div");
    this.title.className = "button";
    this.title.id = this.elementID;
    this.text = document.createElement("div");
    this.text.textContent = buttonTextPar;
    this.title.appendChild(this.text);
    wrapper.appendChild(this.title);
}

function LevelSelect(){

    var level1_button = document.createElement("div");
        level1_button.className = "button" + " level";
    var level1_text = document.createElement("div");
        level1_text.textContent = "Level 1";
    level1_button.appendChild(level1_text);
    wrapper.appendChild(level1_button);
    level1_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level1.GoalPreSet);
    })

    var level2_button = document.createElement("div");
        level2_button.className = "button" + " level";
    var level2_text = document.createElement("div");
        level2_text.textContent = "Level 2";
    level2_button.appendChild(level2_text);
    wrapper.appendChild(level2_button);
    level2_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level2.GoalPreSet);
    })

    var level3_button = document.createElement("div");
        level3_button.className = "button" + " level";
    var level3_text = document.createElement("div");
        level3_text.textContent = "Level 3";
    level3_button.appendChild(level3_text);
    wrapper.appendChild(level3_button);
    level3_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level3.GoalPreSet);
    })

    var level4_button = document.createElement("div");
        level4_button.className = "button" + " level";
    var level4_text = document.createElement("div");
        level4_text.textContent = "Level 4";
    level4_button.appendChild(level4_text);
    wrapper.appendChild(level4_button);
    level4_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level4.GoalPreSet);
    })

    var level5_button = document.createElement("div");
        level5_button.className = "button" + " level";
    var level5_text = document.createElement("div");
        level5_text.textContent = "Level 5";
    level5_button.appendChild(level5_text);
    wrapper.appendChild(level5_button);
    level5_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level5.GoalPreSet);
    })

    var level6_button = document.createElement("div");
        level6_button.className = "button" + " level";
    var level6_text = document.createElement("div");
        level6_text.textContent = "Level 6";
    level6_button.appendChild(level6_text);
    wrapper.appendChild(level6_button);
    level6_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level6.GoalPreSet);
    })

    var level7_button = document.createElement("div");
        level7_button.className = "button" + " level";
    var level7_text = document.createElement("div");
        level7_text.textContent = "Level 7";
    level7_button.appendChild(level7_text);
    wrapper.appendChild(level7_button);
    level7_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level7.GoalPreSet);
    })

    var level8_button = document.createElement("div");
        level8_button.className = "button" + " level";
    var level8_text = document.createElement("div");
        level8_text.textContent = "Level 8";
    level8_button.appendChild(level8_text);
    wrapper.appendChild(level8_button);
    level8_button.addEventListener("mousedown", function(){
        wrapper.removeChild(level1_button);
        wrapper.removeChild(level2_button);
        wrapper.removeChild(level3_button);
        wrapper.removeChild(level4_button);
        wrapper.removeChild(level5_button);
        wrapper.removeChild(level6_button);
        wrapper.removeChild(level7_button);
        wrapper.removeChild(level8_button);
        Init(levels.level8.GoalPreSet);
    })

}

function Init(preSetPar){
    preSet = preSetPar;
    var wrapper = document.getElementById("wrapper");
    var playgroundWrapper = document.createElement("div");
        playgroundWrapper.id = "playgroundWrapper";
    wrapper.appendChild(playgroundWrapper);
    BuildField(playgroundWrapper, true, Field, "boxes", GoalField);

    var goalPGWrapper = document.createElement("div");
        goalPGWrapper.id = "goalPGWrapper";
    var back_button = document.createElement("div");
        back_button.className = "button";
        back_button.style.height = "25px";
        back_button.style.width = "100px";
        back_button.style.fontSize = "170%";
    var back_text = document.createElement("div");
        back_text.textContent = "Back";
    back_button.appendChild(back_text);
    playgroundWrapper.appendChild(document.createElement('br'));
    playgroundWrapper.appendChild(back_button);
    wrapper.appendChild(goalPGWrapper);

    BuildField(goalPGWrapper, false, GoalField, "boxGoal", undefined);
    CalcGoal(GoalField, preSet);
    
    back_button.addEventListener("mousedown", function(){
        location.reload();
    })

}

function sideMenu(preSet){
  //  wrapper.removeChild(goalPGWrapper);
  //  wrapper.removeChild(playgroundWrapper);
    var layer = document.createElement("div");
    
    var mainmenu_button = document.createElement("div");
        mainmenu_button.className = "button" + " sideMenu";
    var mainmenu_text = document.createElement("div");
        mainmenu_text.textContent = "Main Menu";
    mainmenu_button.appendChild(mainmenu_text);
    wrapper.appendChild(mainmenu_button);

    mainmenu_button.addEventListener("mousedown", function(){
        location.reload();
    });

    var nextlevel_button = document.createElement("div");
        nextlevel_button.className = "button" + " sideMenu";
    var nextlevel_text = document.createElement("div");
    nextlevel_button.appendChild(nextlevel_text);
        wrapper.appendChild(nextlevel_button);

    if(preSet == 9){
        nextlevel_button.disabled = true;
        nextlevel_button.disabled;
        nextlevel_text.textContent = "No level remaining";
    }else{
        nextlevel_text.textContent = "Next Level";
        nextlevel_button.addEventListener("mousedown", function(){
        wrapper.removeChild(mainmenu_button);
        wrapper.removeChild(nextlevel_button);
        Init(preSet);
    })};
}

function BuildField(wrapper, isPlayable, fieldArray, BaseClassNameBoxDiv, goalField){
    for(y = 0; y < FieldSizeY; y++){
        fieldArray[y] = [];
        for(x = 0; x < FieldSizeX; x++){
            var box = new Box(x, y, isPlayable, fieldArray, BaseClassNameBoxDiv, goalField);
            wrapper.appendChild(box.divElement);
            fieldArray[y][x] = box;
        }
        wrapper.appendChild(document.createElement('br'));
    }
}

function Box(posX, posY, isPlayable, field, BaseClassNameBoxDiv, goalField){
    this.x = posX;
    this.y = posY;
    this.field = field;
    this.goalField = goalField;
    this.isPlayable = isPlayable;
    this.baseClassNameBoxDiv = BaseClassNameBoxDiv;

    this.active = false;
    
    this.divElement = document.createElement('div');
    this.divElement.className = BaseClassNameBoxDiv + " boxOff";

    this.toggle = function(toggleNeighbour){
        this.active = !this.active;
        if (this.active){
            this.divElement.className = BaseClassNameBoxDiv + " boxOn";
        }else{
            this.divElement.className = BaseClassNameBoxDiv + " boxOff";
        }
        if (toggleNeighbour){
            if((this.field[this.y-1] !== undefined) && (this.field[this.y-1][this.x] !== undefined)){
                this.field[this.y-1][this.x].toggle(false);
            }
            if((this.field[this.y+1] !== undefined) && (this.field[this.y+1][this.x] !== undefined)){
                this.field[this.y+1][this.x].toggle(false);
            }
            if(this.field[this.y][this.x-1] !== undefined){
                this.field[this.y][this.x-1].toggle(false);
            }
            if(this.field[this.y][this.x+1] !== undefined){
                this.field[this.y][this.x+1].toggle(false);
            }
            if((this.isPlayable) && (CheckWin(this.field, this.goalField))){
                ProcessWinning(this);
                
            }
        }
   }
   if(this.isPlayable){
    this.divElement.addEventListener("click", (function(box){
        return function(){ 
                if(box.isPlayable){
                    box.toggle(true);
                }
        }
    }(this)));
   }
}

function CheckWin(field, goalField){
    if (goalField === undefined) return true;
    for(y = 0; y < FieldSizeY; y++){
        for(x = 0; x < FieldSizeX; x++){
            if (field[y][x].active !== goalField[y][x].active){
                return false;
            }
        }
    }
    return true;
}

function ProcessWinning(BoxPar){
    setTimeout((me) => {
        for(y = 0; y < FieldSizeY; y++){
            for(x = 0; x < FieldSizeX; x++){
                if(me.goalField[y][x].active){
                    me.goalField[y][x].divElement.className = me.baseClassNameBoxDiv + " boxGoalClear";
                }
            }
        }

        for(y = 0; y < FieldSizeY; y++){
            for(x = 0; x < FieldSizeX; x++){
                me.isPlayable = false;
                me.field[y][x].isPlayable = false;
                if(me.field[y][x].active){
                    me.field[y][x].divElement.className = me.baseClassNameBoxDiv + " boxGameClear";
                }
            }
        }
    }, 200, BoxPar);

    if(preSet !== 999){
        setTimeout(function(){                
            sideMenu(preSet + 1);
        }, 900);
    }else{
        setTimeout(function(){
            sideMenu(preSet);
        }, 900);
    };
    console.log(score++);
}

function CalcGoal(field, preSet){
    switch(preSet){
        case 1:{
            field[0][0].toggle(true);
            field[0][2].toggle(true);
            break;
        }
        case 2:{
            field[2][0].toggle(true);
            field[2][2].toggle(true);
            break;
        }
        case 3:{
            field[0][0].toggle(true);
            field[1][1].toggle(true);
            field[2][2].toggle(true);
            break;
        }
        case 4:{
            field[1][1].toggle(true);
            field[0][1].toggle(true);
            field[1][0].toggle(true);
            break;
        }
        case 5:{
            field[0][0].toggle(true);
            field[1][1].toggle(true);
            field[1][2].toggle(true);
            break;
        }
        case 6:{
            field[0][1].toggle(true);
            field[2][2].toggle(true);
            field[1][1].toggle(true);
            break;
        }
        case 7:{
            field[2][1].toggle(true);
            field[0][2].toggle(true);
            field[0][0].toggle(true);
            break;
        }
        case 8:{
            field[0][1].toggle(true);
            field[1][2].toggle(true);
            field[2][2].toggle(true);
            break;
        }
        case 999:{
            ShuffleField(field);
        }
    }
}

function ShuffleField(field){
    var randomPos = {
        "x": 0,
        "y": 0
    };
    
    for (randomClicks = Math.floor((Math.random()+1) * 2); randomClicks>0; randomClicks--) {
        RandomClick(randomPos);
        field[randomPos.y][randomPos.x].toggle(true);
    }
}

function RandomClick(randomPos){ 
    randomPos.x = Math.floor(Math.random() * FieldSizeX);
    randomPos.y = Math.floor(Math.random() * FieldSizeY);
    console.log(randomPos.y, randomPos.x);
}
