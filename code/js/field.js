// Hello There!
var Field = [];
var GoalField = [];

var FieldSizeX = 3;
var FieldSizeY = 3;

function Init(preSetPar) {
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

    back_button.addEventListener("mousedown", function () {
        location.reload();
    })

}

function BuildField(wrapper, isPlayable, fieldArray, BaseClassNameBoxDiv, goalField) {
    for (y = 0; y < FieldSizeY; y ++) {
        fieldArray[y] = [];
        for (x = 0; x < FieldSizeX; x ++) {
            var box = new Box(x, y, isPlayable, fieldArray, BaseClassNameBoxDiv, goalField);
            wrapper.appendChild(box.divElement);
            fieldArray[y][x] = box;
        }
        wrapper.appendChild(document.createElement('br'));
    }
}

function Box(posX, posY, isPlayable, field, BaseClassNameBoxDiv, goalField) {
    this.x = posX;
    this.y = posY;
    this.field = field;
    this.goalField = goalField;
    this.isPlayable = isPlayable;
    this.baseClassNameBoxDiv = BaseClassNameBoxDiv;

    this.active = false;

    this.divElement = document.createElement('div');
    this.divElement.className = BaseClassNameBoxDiv + " boxOff";

    this.toggle = function (toggleNeighbour) {
        this.active = !this.active;
        if (this.active) {
            this.divElement.className = BaseClassNameBoxDiv + " boxOn";
        } else {
            this.divElement.className = BaseClassNameBoxDiv + " boxOff";
        }
        if (toggleNeighbour) {
            if ((this.field[this.y - 1] !== undefined) && (this.field[this.y - 1][this.x] !== undefined)) {
                this.field[this.y - 1][this.x].toggle(false);
            }
            if ((this.field[this.y + 1] !== undefined) && (this.field[this.y + 1][this.x] !== undefined)) {
                this.field[this.y + 1][this.x].toggle(false);
            }
            if (this.field[this.y][this.x - 1] !== undefined) {
                this.field[this.y][this.x - 1].toggle(false);
            }
            if (this.field[this.y][this.x + 1] !== undefined) {
                this.field[this.y][this.x + 1].toggle(false);
            }
            if ((this.isPlayable) && (CheckWin(this.field, this.goalField))) {
                ProcessWinning(this);

            }
        }
    }
    if (this.isPlayable) {
        this.divElement.addEventListener("click", (function (box) {
            return function () {
                if (box.isPlayable) {
                    box.toggle(true);
                }
            }
        }(this)));
    }
}

function CalcGoal(field, preSet) {
    if (preSet == levels.endless) {
        var p = document.createElement("p");
        p.innerHTML = `Score: ${score}`;
        document.getElementById("goalPGWrapper").appendChild(p);
        ShuffleField(field);
    } else {
        for (i = 0; i < preSet.fields.length; i ++) {
            console.log(preSet.fields[i]);
            field[preSet.fields[i].y][preSet.fields[i].x].toggle(true);
        }
    }
}
