// superhero class in ES5(prototype) style
var SuperHero = (function() {
    SuperHero.prototype = Object.create(Person.prototype);

    function SuperHero(name, id){
        Person.call(this,name, id, "perfect", "Is Over 9000!", 'super');
    }
//overriding the person.prototype method
    SuperHero.prototype.toJson = function() {
        return {
                name: this._name,
                id: this._id,
                grades: this._grades,
                avg: this._avg,
                type: 'superhero'
        };
    }

    return SuperHero;
})();

console.log(SuperHero);