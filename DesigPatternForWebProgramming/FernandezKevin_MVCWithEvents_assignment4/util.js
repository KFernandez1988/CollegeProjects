class Util {
    //util class with one static method
    constructor(){

    }
   // static method that return the tax return of a salary from florida
    static petAge(pet) {
        switch(pet.species.toLowerCase()){
            case 'dog':
                return Util.dogYearsToHuman(pet);
                break;
            case 'cat'  :
                return Util.catYearsToHuman(pet);
                break;
            default: throw "we dont have that species in our selection";break;
        }
        
    }

    static dogYearsToHuman(pet){
        return pet.age * 7;
    }

    static catYearsToHuman(pet){
        return pet.age * 12;
    }
}