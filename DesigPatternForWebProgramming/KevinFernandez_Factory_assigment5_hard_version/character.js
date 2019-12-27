
//factory pattern class
class CharacterFactory {
// static class that will instatiate depending of the user selection
    static characters(job){

        switch(job){
            case 'wizard': return new Wizard(); break;
            case 'warrior': return new Warrior(); break;
            case 'swordmen': return new Swordmen(); break;
            default: throw 'there is no ' + job + ' here';
        }
    }
}
//list for holding the created characters
CharacterFactory.listOfCharacters = [];

// wizard class
class Wizard {
    constructor() {
        console.log('wizard created');
        this.name = '';
        this.birthPlace = '';
        this.attack = Math.floor(Math.random() * 150) + 88;
        this.defense = Math.floor(Math.random() * 150) + 60;
        this.magic = Math.floor(Math.random() * 350) + 100;
        this.job = this.constructor.name;
        this.image = 'noun_Wizard_657180.svg';
    }

}
//warrior class
class Warrior {
    constructor() {
        console.log('warrior created');
        this.name = '';
        this.birthPlace = '';
        this.attack = Math.floor(Math.random() * 300) + 150;
        this.defense = Math.floor(Math.random() * 300) + 60;
        this.magic = Math.floor(Math.random() * 300) + 100;
        this.job = this.constructor.name;
        this.image = 'noun_Soldier with Spear_657185.svg';
    }

}
// swordmen class
class Swordmen {
    constructor() {
        console.log('swordmen created');
        this.name = '';
        this.birthPlace = '';
        this.attack = Math.floor(Math.random() * 350) + 100;
        this.defense = Math.floor(Math.random() * 350) + 100;
        this.magic = Math.floor(Math.random() * 150) + 20;
        this.job = this.constructor.name;
        this.image = 'noun_Knight_657195.svg';
    }

}