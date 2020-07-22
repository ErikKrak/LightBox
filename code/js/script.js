var score = 0;
var highest_score = 0;
if (document.cookie !== '0') {
    highest_score = document.cookie;
}
var levels = {
    "lvl1": {
        "fields": [{
            "x": 0,
            "y": 0
        }, {
            "x": 2,
            "y": 0
        }],
        "unlocked": true,
        "unlocks": ["lvl2"]
    },
    "lvl2": {
        "fields": [{
            "x": 0,
            "y": 2
        }, {
            "x": 2,
            "y": 2
        }],
        "unlocked": false,
        "unlocks": ["lvl3"]
    },
    "lvl3": {
        "fields": [{
            "x": 0,
            "y": 0
        }, {
            "x": 1,
            "y": 1
        }, {
            "x": 2,
            "y": 2
        }],
        "unlocked": false,
        "unlocks": ["lvl4"]
    },
    "lvl4": {
        "fields": [{
            "x": 1,
            "y": 1
        }, {
            "x": 0,
            "y": 1
        }, {
            "x": 1,
            "y": 0
        }],
        "unlocked": false,
        "unlocks": ["lvl5"]
    },
    "lvl5": {
        "fields": [{
            "x": 0,
            "y": 0
        }, {
            "x": 1,
            "y": 1
        }, {
            "x": 1,
            "y": 2
        }],
        "unlocked": false,
        "unlocks": ["lvl6"]
    },
    "lvl6": {
        "fields": [{
            "x": 1,
            "y": 0
        }, {
            "x": 2,
            "y": 2
        }, {
            "x": 1,
            "y": 1
        }],
        "unlocked": false,
        "unlocks": ["lvl7"]
    },
    "lvl7": {
        "fields": [{
            "x": 1,
            "y": 2
        }, {
            "x": 2,
            "y": 0
        }, {
            "x": 0,
            "y": 0
        }],
        "unlocked": false,
        "unlocks": ["lvl8"]
    },
    "lvl8": {
        "fields": [{
            "x": 1,
            "y": 0
        }, {
            "x": 2,
            "y": 1
        }, {
            "x": 2,
            "y": 2
        }],
        "unlocked": false,
        "unlocks": undefined
    },
    "endless": true
}

function StartGame() {
    var title = document.createElement("h1");
    title.innerHTML = "Change the Box!";
    wrapper.appendChild(title);

    newButton(endless_button = "endless_button", endless_text = "Endless Run", undefined);
    newButton(start_button = "start_button", levelText = "Level Select", undefined);
    newButton(clear_button = "clear_button", levelText = "Clear High Score", undefined);

    document.getElementById(start_button).addEventListener("click", function () {
        wrapper.removeChild(document.getElementById(start_button));
        wrapper.removeChild(document.getElementById(endless_button));
        wrapper.removeChild(document.getElementById(clear_button));
        LevelSelect();
    });

    document.getElementById(endless_button).addEventListener("mousedown", function () {
        wrapper.removeChild(document.getElementById(start_button));
        wrapper.removeChild(document.getElementById(endless_button));
        wrapper.removeChild(document.getElementById(clear_button));
        Init(JSON.parse(levels.endless));
    });

    document.getElementById(clear_button).addEventListener("click", function () {
        document.cookie = '0';
        highest_score = 0;
        window.alert("Cookies are cleared!");
    })
}

function newButton(buttonTitlePar, buttonTextPar, buttonClassPar) {
    this.title = buttonTitlePar;
    this.elementID = buttonTitlePar;
    this.text;
    this.buttonClass = buttonClassPar;
    this.title = document.createElement("div");
    this.title.className = "button " + this.buttonClass;
    this.title.id = this.elementID;
    this.text = document.createElement("div");
    this.text.textContent = buttonTextPar;
    this.title.appendChild(this.text);
    wrapper.appendChild(this.title);
}

function sideMenu(preSet) {
    wrapper.removeChild(goalPGWrapper);
    wrapper.removeChild(playgroundWrapper);
    var layer = document.createElement("div");

    newButton(mainmenu_button = "mainmenu_button", mainmenu_text = "Main Menu", "sideMenu");
    document.getElementById(mainmenu_button).addEventListener("mousedown", function () {
        location.reload();
    });

    newButton(nextlevel_button = "nextlevel_button", nextlevel_text = "Next Level", "sideMenu");

    document.getElementById(nextlevel_button).addEventListener("mousedown", function () {
        wrapper.removeChild(document.getElementById(mainmenu_button));
        wrapper.removeChild(document.getElementById(nextlevel_button));
        LevelSelect();
    });
}