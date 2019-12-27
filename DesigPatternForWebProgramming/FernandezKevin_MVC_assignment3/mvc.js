class Fernandez_DPW {
    // singleton class that make sure there is only one instance of the MVC
    constructor() {
        let i = 0;
        //if there is no sigleton then ignore if statement
        if(!!Fernandez_DPW._instance) {
       
            return Fernandez_DPW._instance;
         } 
         // passes this class
         Fernandez_DPW._instance = this;
         Fernandez_DPW._instance.appRun();
         // creates the controller
         this.controller = new Controller();

         Fernandez_DPW.Version = ++i;

    }


    appRun() {
          // self invoke function to save namespace

    //getting both form and div and adding event listeners.
 const form = document.querySelector('#worker');
 const dis = document.querySelector('#display');
 // creating singleton that create controller and controller create view and model
 let main = new Fernandez_DPW();
 
 console.log('page loaded');

 form.addEventListener('click', event => {
    event.preventDefault();
    let target =  event.target;
    if(target.type == "submit") {
        // add worker to the list and display it with in the div
        main.controller.addWorker();
        main.controller.workerToDisplay();
    }
   
 });

 dis.addEventListener('click', event => {
    let target =  event.target;
    //only if the button with the class of del is press will the worker be deleted
    if(target.classList.contains('del')){
         let article = event.target.parentNode;
         console.log(article);
          main.controller.deleteWorker(article);
    }
});

    }
}
//controller class // controller gets data and passes it to the model or view
class Controller {
    constructor() {
        console.log('controller created');
        //creating both model and view with the creation of the controller
        this.model = new Model();
        this.view = new View();   
    }

   // get the information from the user
    addWorker() {
        const form =  document.querySelector('#worker');
        let worker = new ODWorker();

        worker.fullName = form['fullName'].value;
        worker.job =  form['job'].value;
        worker.company = form['company'].value;
        worker.id =  form['id'].value;
        worker.salary = form['salary'].value;
         // send it to the model to be save in a list
       this.model.saveWorker(worker);
    }
//remove a worker from display
    deleteWorker(tag) {

        let name  = tag.querySelector('.name').innerText + '';
        tag.remove();
        console.log(name);

        this.model.removeWorker(name);
    }
//passes the created worker to the view
    workerToDisplay() {
        this.view.renderWorker(ODWorker.ListOfWorkers[ODWorker.ListOfWorkers.length - 1]);
    }
}

// model class, handle data manipulation and returns new info
class Model {
    constructor() {
      console.log('model created');
    }
// call the util method that return florida income tax
    getTaxesToPay(salary){
        return Util.payTaxes(salary);
    }
// save a worker to a static list
    saveWorker(worker) {
      worker.taxToPay = Util.payTaxes(worker.salary);
      ODWorker.ListOfWorkers.push(worker);
      console.log('save worker reach and save');
      console.log(worker);
    }
//remove a worker from a static list
    removeWorker(worker){
        console.log(worker);
       let workers = ODWorker.ListOfWorkers.filter( w => {
         return w.fullName.toUpperCase() !== worker;
       });
       ODWorker.ListOfWorkers = workers;
    }
}
// view class, handles the rendering of information to the browser
class View {
    constructor() {
       console.log('view created')
    }
// renders a worker inside the display div
    renderWorker(worker) {

        let display = document.querySelector('#display'); 
           
            display.innerHTML += `<article>
               <h2 class="name"> ${worker['fullName']} </h2>
               <p>Job: ${worker['job']} </p>  <p> Comp: ${worker['company']}</p>
               <p> ID#: ${worker['id']} </p> <p> Salary: ${worker['salary']} </p>
               <p> Taxes to pay: ${worker['taxToPay']} </p>
               <button class="del"> delete </button>
               </article>`; 
    }

}