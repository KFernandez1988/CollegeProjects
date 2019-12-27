class Person {
    _name;
    _id;
    _grades;
    _avg = 0;

    constructor(id, avg) {
        this._id = id;
        this._avg;
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
        this.grades = g;
    }

    get type() {
        return this._grades;
    }

    set avg(grades){
       this._avg = Util.AVG(grades);
    }

    get avg() {
        return this._avg;
    }


}