// controller class that initialize both the model and the view
class Controller {
    constructor() {
        this.model = new Model();
        this.View = new View();
        
        // static method that make loop easier
        Controller.current = 0;
    }

// method for getting the json form data from data.js file
    getData(){
        const movies = data.movies;
     // event passes data to be save
        let saving = new Event('saving');
        saving.movies = movies;
        document.dispatchEvent(saving);
    }

    //method for changing movies in disply
    changeMovie(move){
        let movies = MovieOD.listOfMovies;
        Controller.current = move == 1 ? Controller.current + 1 :Controller.current - 1;
        if(Controller.current > movies.length -1) {
            Controller.current = 0;
        } else if(Controller.current < 0){
            Controller.current =  movies.length -1;
        }
       // event that trigger when a new movie need to be display
        const change = new Event('change');
        change.movie = movies[Controller.current];
        document.dispatchEvent(change);
    }

}


// ES5 model prototype
let Model = (function() {

    function Model() {
      document.addEventListener('saving', this.toODMovie)
    } 
   //method that convert data to a object and save it
    Model.prototype.toODMovie = function(event) {
       let movies = event.movies;
//converts each item inside the json to a MovieOD and save it into a list
       movies.forEach( movie => {
          let newMovie = new MovieOD();
              newMovie.title = movie.title;
              newMovie.duration = Util.minToHour(movie.duration);
              newMovie.rating = movie.rating;

              MovieOD.listOfMovies.push(newMovie);
              console.log('saved');
       });
      // event that will display the first movie of the list once pass to the view
       const allMoviesSaved = new Event("allSaved");
       allMoviesSaved.movie = MovieOD.listOfMovies[0];
       document.dispatchEvent(allMoviesSaved);
    }
    return Model;
})();

// view class that renders movies datas
class View {
    constructor() {
     document.addEventListener('allSaved', this.display);
     document.addEventListener('change', this.display);
    }

// method for displaying a movie
    display(event) {
        const movie = event.movie;
        
        let stringBuilder = "";
        const selection = document.querySelector('#movie-in-display');
      
          stringBuilder = ` <article>
                                <h3> ${movie.title}</h3>
                                <p> ${movie.duration}hr</p>
                                <p> ${movie.rating}</p
                            </article>`;                         
      

        selection.innerHTML = stringBuilder;
    }
}