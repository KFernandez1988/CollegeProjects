//base class that hold the main methods for creating students and heros
class Person {
    _name;
    _id;
    _grades;
    _avg = 0;

    constructor(name, id, grades, avg, instante) {
        this._name = name;
        this._id = id;
        this._grades =  grades;
        if(instante == 'student') {
            this._avg = Math.ceil(Util.AVG(grades));
        } else if(instante == 'super') {
         this._avg = avg;
        }
        
    }
    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set grades(g) {
        this._grades = g;
    }

    get grades() {
        return this._grades;
    }

    set avg(grades){
       this._avg = Util.AVG(grades);
    }

    get avg() {
        return this._avg;
    }

    toJson(){
        return {
            name: this._name,
            id: this._id,
            greades: [].push(this._grades),
            avg: this._avg
        }
    }
}