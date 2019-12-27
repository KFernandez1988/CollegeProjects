class Fernandez_DPW {
    // singleton class that make sure there is only one instance of the MVC
    constructor() {

        //if there is no sigleton then ignore if statement
        if(!!Fernandez_DPW._instance) {
            let i = 0;
            
            Fernandez_DPW.Version = ++i;
            return Fernandez_DPW._instance;
         } 
         // passes this class
         Fernandez_DPW._instance = this;
         Fernandez_DPW._instance.appRun();
         // creates the controller
         this.controller = new Controller();

    }
// method with the application logic
    appRun(){
          //getting both form and div and adding event listeners.
 const form = document.querySelector('#pet');
 const dis = document.querySelector('#display');
 // creating singleton that create controller and controller create view and model
 let main = Fernandez_DPW._instance;

 form.addEventListener('click', event => {
    event.preventDefault();
    let target =  event.target;
    if(target.type == "submit") {
        // add worker to the list and display it with in the div
        main.controller.add();
    }
   
 });

 dis.addEventListener('click', event => {
    let target =  event.target;
    //only if the button with the class of del is press will the worker be deleted
    if(target.classList.contains('del')){
         let article = event.target.parentNode;
         console.log(article);
          main.controller.delete(article);
    }
});

    }
}

/****************************************************/
/****************************************************/
/****************************************************/


//controller class // controller gets data and passes it to the model or view
class Controller {
    constructor() {
        console.log('controller created');
        //creating both model and view with the creation of the controller
        this.model = new Model();
        this.view = new View();   

        
    }

   // get the information from the user
    add() {
        const form = document.querySelector('#pet');
        let pet = new ODPet();

        pet.fullName = form['fullName'].value;
        pet.species =form['species'].value;
        pet.age = form['age'].value;

        const petInfo = new Event('getting');
        petInfo.pet = pet;
        document.dispatchEvent(petInfo);
    }
//remove a worker from display
    delete(tag) {

        let name  = tag.querySelector('.name').innerText;
        tag.remove();
        console.log(name);
         
        const del = new Event('deleted');
        del.info = name;
        document.dispatchEvent(del);
    }
//passes the created worker to the view
}

/****************************************************/
/****************************************************/
/****************************************************/



// model class, handle data manipulation and returns new info
class Model {
    constructor() {
      console.log('model created');
      document.addEventListener('getting', this.save);
      document.addEventListener('deleted', this.remove); 
    }
    
// save a worker to a static list
    save(event) {
      let pet = event.pet;
      console.log(event);
      pet.ageInHumanYears = Util.petAge(pet);
      ODPet.ListOfPets.push(pet);
      console.log(ODPet.ListOfPets.length)
      Model.listChange(ODPet.ListOfPets.length);
      console.log('save worker reach and save');
      console.log(pet);
      const show = new Event('readyToShow');
      show.pet = pet;
     document.dispatchEvent(show)
    }
//remove a worker from a static list
    remove(pet){
        console.log(pet);
        let pets = ODPet.ListOfPets.filter( p => {
         return p.fullName.toUpperCase() !== pet.info;
       });
       ODPet.ListOfPets = pets;    
       console.log(pets)
       Model.listChange(pets.length)  
    }
// handle the list count
    static listChange(petCount) {
        const listChange = new Event('listChange');
        listChange.petsCount = petCount;
        document.dispatchEvent(listChange);
    }
}

/****************************************************/
/****************************************************/
/****************************************************/


// view class, handles the rendering of information to the browser
class View {
    constructor() {
       console.log('view created')
       document.addEventListener('readyToShow', this.render);
       document.addEventListener('listChange', this.changeCount);
    }
// renders a worker inside the display div
    render(event) {
        let pet = event.pet ;
        console.log(pet);
        let display = document.querySelector('#display'); 
           
            display.innerHTML += `<article>
               <h2 class="name"> ${pet['fullName']} </h2>
               <p>species ${pet['species']} </p>  <p> Age ${pet['age']}</p>
               <p> In Human Year: ${pet['ageInHumanYears']} </p> 
               <button class="del"> delete </button>
               </article>`; 
    }
    //display the change of the list
    changeCount(event){
       const total = document.querySelector('#total');
       console.log(event);
       total.value =  event.petsCount;
    }

}