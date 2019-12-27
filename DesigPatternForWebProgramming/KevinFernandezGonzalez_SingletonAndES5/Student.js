
// student class in ES5(prototype) style
var Student = (function() {
    Student.prototype = Object.create(Person.prototype);

    function Student(name, id, grades, avg) {
         Person.call(this,name, id, grades, avg, 'student');
    }

//student override the person.toJson method
    Student.prototype.toJson = function() {
        return {
                name: this._name,
                id: this._id,
                grades: this._grades,
                avg: this._avg,
                type: 'student'
        };
    }
     
    return Student;
  
})();
