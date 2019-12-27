// Person class ES5 style(prototype)
var Person = (function() {
    function Person(name, id, grades, avg, instante) {
        this._name = name;
        this._id = id;
        this._grades =  grades;
        if(instante == 'student') {
            this._avg = Math.ceil(Util.AVG(grades + ''));
        } else if(instante == 'super') {
         this._avg = avg;
        }
    }

  //method to be override
    Person.prototype.toJson = function() {   
        return {
            name: this._name,
            id: this._id,
            grades: this._grades,
            avg: this._avg,
            type: 'person'
        };
    }
    return Person;
})();