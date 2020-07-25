function LevelSelect() {
    function buttons() {
        for(let i = 1; i <= 8; i++){
            var lev_text = "level" + i + "_button";
            wrapper.removeChild(document.getElementById(lev_text));
        }
    }

    //TODO: automatisiert Zahl hochzählen und eintragen
    newButton(level1_button = "level1_button", level1_text = "Level 1", "level");
    document.getElementById(level1_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl1);
        console.log(this.button);
    })

    newButton(level2_button = "level2_button", level2_text = "Level 2", "level");
    document.getElementById(level2_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl2);
    })

    newButton(level3_button = "level3_button", level3_text = "Level 3", "level");
    document.getElementById(level3_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl3);
    })
    
    newButton(level4_button = "level4_button", level4_text = "Level 4", "level");
    document.getElementById(level4_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl4);
    })

    newButton(level5_button = "level5_button", level5_text = "Level 5", "level");
    document.getElementById(level5_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl5);
    })

    newButton(level6_button = "level6_button", level6_text = "Level 6", "level");
    document.getElementById(level6_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl6);
    })

    newButton(level7_button = "level7_button", level7_text = "Level 7", "level");
    document.getElementById(level7_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl7);
    })

    newButton(level8_button = "level8_button", level8_text = "Level 8", "level");
    document.getElementById(level8_button).addEventListener("mousedown", function () {
        buttons();
        Init(levels.lvl8);
    })
}

function RandomClick(randomPos) {
    randomPos.x = Math.floor(Math.random() * FieldSizeX);
    randomPos.y = Math.floor(Math.random() * FieldSizeY);
    console.log(randomPos.y, randomPos.x);
}

function ShuffleField(field) {
    var randomPos = {
        "x": 0,
        "y": 0
    };

    for (randomClicks = Math.floor((Math.random() + 1) * 3); randomClicks > 0; randomClicks--) {
        RandomClick(randomPos);
        field[randomPos.y][randomPos.x].toggle(true);
    }
}

function ProcessWinning(BoxPar) {
    setTimeout((me) => {
        for (y = 0; y < FieldSizeY; y++) {
            for (x = 0; x < FieldSizeX; x++) {
                if (me.goalField[y][x].active) {
                    me.goalField[y][x].divElement.className = me.baseClassNameBoxDiv + " boxGoalClear";
                }
            }
        }

        for (y = 0; y < FieldSizeY; y++) {
            for (x = 0; x < FieldSizeX; x++) {
                me.isPlayable = false;
                me.field[y][x].isPlayable = false;
                if (me.field[y][x].active) {
                    me.field[y][x].divElement.className = me.baseClassNameBoxDiv + " boxGameClear";
                }
            }
        }
    }, 200, BoxPar);

    if (preSet == levels.endless) {
        setTimeout(function () {
            wrapper.removeChild(goalPGWrapper);
            wrapper.removeChild(playgroundWrapper);
            score++;
            console.clear();
            if (score > highest_score) {
                highest_score = score;
            }
            Init(preSet);
        }, 900);
    } else {
        setTimeout(function () {
            sideMenu(preSet);
        }, 900);
    };
}

function CheckWin(field, goalField) {
    if (goalField === undefined) return true;
    for (y = 0; y < FieldSizeY; y++) {
        for (x = 0; x < FieldSizeX; x++) {
            if (field[y][x].active !== goalField[y][x].active) {
                return false;
            }
        }
    }
    return true;
}