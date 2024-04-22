class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        // Define locations of components relative to main body location
        this.armLeftX = this.bodyX - 100;
        this.armLeftY = this.bodyY + 20;
        this.armRightX = this.bodyX + 100;
        this.armRightY = this.bodyY + 20;
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 50;
        this.eyeLeftX = this.bodyX - 30;
        this.eyeLeftY = this.bodyY - 35;
        this.eyeRightX = this.bodyX + 30;
        this.eyeRightY = this.bodyY - 35;
        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 15;
        this.legLeftX = this.bodyX - 50;
        this.legLeftY = this.bodyY + 150;
        this.legRightX = this.bodyX + 50;
        this.legRightY = this.bodyY + 150;

        // Smile polling input
        this.sKey = null;
        this.fKey = null;

        // Movement polling input
        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenC.png");
        my.sprite.armLeft = this.add.sprite(this.armLeftX, this.armLeftY, "monsterParts", "arm_darkD.png");
        my.sprite.armLeft.flipX = true;
        my.sprite.armRight = this.add.sprite(this.armRightX, this.armRightY, "monsterParts", "arm_darkD.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");
        my.sprite.mouthFang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFang.visible = false;
        my.sprite.eyeLeft = this.add.sprite(this.eyeLeftX, this.eyeLeftY, "monsterParts", "eye_cute_dark.png");
        my.sprite.eyeRight = this.add.sprite(this.eyeRightX, this.eyeRightY, "monsterParts", "eye_cute_dark.png");
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_green.png");
        my.sprite.legLeft = this.add.sprite(this.legLeftX, this.legLeftY, "monsterParts", "leg_darkB.png");
        my.sprite.legLeft.flipX = true;
        my.sprite.legRight = this.add.sprite(this.legRightX, this.legRightY, "monsterParts", "leg_darkB.png");

        // Key objects
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // Smile
        if (Phaser.Input.Keyboard.JustDown(this.sKey)){
            my.sprite.mouthFang.visible = false;
            my.sprite.mouth.visible = true;
        }
        if (Phaser.Input.Keyboard.JustDown(this.fKey)){
            my.sprite.mouth.visible = false;
            my.sprite.mouthFang.visible = true;
        }
        // Movement
        if (this.aKey.isDown) {
            my.sprite.body.x = my.sprite.body.x - 1;
            my.sprite.armLeft.x = my.sprite.armLeft.x - 1;
            my.sprite.armRight.x = my.sprite.armRight.x - 1;
            my.sprite.mouth.x = my.sprite.mouth.x - 1;
            my.sprite.mouthFang.x = my.sprite.mouthFang.x - 1;
            my.sprite.eyeLeft.x = my.sprite.eyeLeft.x - 1;
            my.sprite.eyeRight.x = my.sprite.eyeRight.x - 1;
            my.sprite.nose.x = my.sprite.nose.x - 1;
            my.sprite.legLeft.x = my.sprite.legLeft.x - 1;
            my.sprite.legRight.x = my.sprite.legRight.x - 1;
            // move monster left (-X)
        }
        if (this.dKey.isDown) {
            my.sprite.body.x = my.sprite.body.x + 1;
            my.sprite.armLeft.x = my.sprite.armLeft.x + 1;
            my.sprite.armRight.x = my.sprite.armRight.x + 1;
            my.sprite.mouth.x = my.sprite.mouth.x + 1;
            my.sprite.mouthFang.x = my.sprite.mouthFang.x + 1;
            my.sprite.eyeLeft.x = my.sprite.eyeLeft.x + 1;
            my.sprite.eyeRight.x = my.sprite.eyeRight.x + 1;
            my.sprite.nose.x = my.sprite.nose.x + 1;
            my.sprite.legLeft.x = my.sprite.legLeft.x + 1;
            my.sprite.legRight.x = my.sprite.legRight.x + 1;
            // move monster right (+X)
        }
    }

}