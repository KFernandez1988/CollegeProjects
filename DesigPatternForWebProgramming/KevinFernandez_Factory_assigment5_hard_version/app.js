
//singleton class
class Application {
    constructor() {
      if(!!Application._instance) {
          console.log('app is already running');
          return Application._instance;
      }

      Application._instance = this;
      this.controller = new Controller();
      Application._instance.run();
    }
// method with the app logic
    run(){
        
        const form = document.querySelector('#character-creation');

        form.addEventListener('click', event => {
            
            let target = event.target;
            if(target.type == 'submit') {
                event.preventDefault();
                console.log('click working');
                this.controller.add();
            }
        });

        const div = document.querySelector('#characters-list');

        div.addEventListener('click', this.controller.getCharacter);
    }
}
// controller class for getting data
class Controller {
    constructor(){
        this.model = new Model();
        this.view = new View();
    }

// get the data ready for adding it to the model
    add(){
        const form = document.querySelector('#character-creation');
        let character = CharacterFactory.characters(form['character'].value);
        character.name = form['name'].value;
        character.birthPlace = form['birth-place'].value;
        console.log(character);
        const toSave = new Event('toSave');
        toSave.character = character;
        document.dispatchEvent(toSave);
    }
// gets a already build characte that is in the list
    getCharacter(event) {
        let target = event.target;
        if(target.classList.contains('display')){
            let article = event.target.parentNode;
            let character = {
                name: article.querySelector('.name').innerText,
                job: article.querySelector('.job').innerText,
                birthPlace: article.querySelector('.birth').innerText,
                attack: article.querySelector('.att').innerText,
                defense: article.querySelector('.def').innerText,
                magic: article.querySelector('.mag').innerText,
            }
            let display = new Event('display');
            display.character = character;
            document.dispatchEvent(display);
            console.log(character);
        }

      
    }
}
// data handleling , model class
class Model {
    constructor(){
       document.addEventListener('toSave', this.saving);
    }
// save the add character
    saving(event){
        CharacterFactory.listOfCharacters.push(event.character);
        console.log('is saved');
        const saved = new Event('saved');
        saved.characters = CharacterFactory.listOfCharacters;
        document.dispatchEvent(saved);
    }
}
// render the process data, view class
class View {
    constructor() {
       document.addEventListener('saved', this.render);
       document.addEventListener('display', this.display);
    }

//show a new character 
    render(event){
       const ul = document.querySelector('#characters-list ul');
       let character = event.characters[event.characters.length - 1];
       console.log(character);
       let stringBuilder = `<li><article> 
                             <h3 class="name"> ${character.name} </h3>
                             <img class="obj" width="100" height="100" src="${character.image}" />
                              <div class="hide img"> 
                                 <span class="birth">${character.birthPlace}</span>
                                 <span class="job">${character.job}</span>
                                 <span class="att">${character.attack}</span>
                                 <span class="def">${character.defense}</span>
                                 <span class="mag">${character.magic}</span>
                              </div>
                                <button class="display">Display Info</button>
                              </article></li>`;
        ul.insertAdjacentHTML('beforeend', stringBuilder);                    
    }
//display a select character to the player information form
    display(event){
      const form =  document.querySelector('#character-stats');
      let character = event.character;
      console.log(character);
      form[name="name-is"].value = character.name;
      form[name="birth-in"].value = character.birthPlace;
      form[name="job"].value = character.job
      form[name="attack"].value = character.attack;
      form[name="defense"].value = character.defense;
      form[name="magic"].value = character.magic;

    }
}