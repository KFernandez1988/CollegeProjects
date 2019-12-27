// singleton for initiating the app once
class AssignPrototype {
    contructor() {
        console.log('AssignPrototype created');
    }

//static method handle by this class
   static Instance(){
        if(!AssignPrototype._instance) {
            AssignPrototype._instance = new App();
            return AssignPrototype._instance;
        }
        else {
            throw "There is a AssignPrototype created";
        }
    }
}