// Application class with a singleton approach
class Application {
    constructor(){
        console.log('application created');
        if(!!Application._instance){
            return Application._instance;
        }

        Application._instance = this;
        this.controller = new Controller();
        Application._instance.run();
    }
   // method for running the app
      run() {

        console.log('application running');
        const previous = document.querySelector('#previous');
        const next = document.querySelector('#next');

        this.controller.getData();

        previous.parentNode.addEventListener('click', () => {
            this.controller.changeMovie(-1);
        })

        next.parentNode.addEventListener('click', () => {
            this.controller.changeMovie(1);
        })
    }
}