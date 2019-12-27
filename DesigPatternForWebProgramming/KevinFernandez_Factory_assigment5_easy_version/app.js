//singleton pattern class
class Application {
    constructor() {
      if(!!Application._instance) {
          console.log('app is already running');
          return Application._instance;
      }

      Application._instance = this;
      Application._instance.run();
    }
  //method to be run once
    run(){
        
        const form = document.querySelector('#character-creation');
        const btn = document.querySelector('#display-info');
    //save a new character to the list
        form.addEventListener('click', event => {
            
            let target = event.target;
            if(target.type == 'submit') {
                event.preventDefault();
                event.preventDefault();
                console.log('click working');
                
                const form = document.querySelector('#character-creation');
                let character = CharacterFactory.characters(form['character'].value);
                character.name = form['name'].value;
                character.birthPlace = form['birth-place'].value;
                console.log(character);
                CharacterFactory.listOfCharacters.push(character);

                form['name'].value = null;
                form['birth-place'].value = null;
                form.querySelector('#other').checked = true;
                btn.classList.remove('hidden');
                btn.classList.add('showing');
            }
        });

        // display all character save inside the list
        btn.addEventListener('click', event => {
            const display = document.querySelector('#characters-list ul');
            display.innerHTML = '';
            let stringBuilder = '';
            CharacterFactory.listOfCharacters.forEach(character => {
                stringBuilder += `<li><article> 
                <h3 class="name"> ${character.name} </h3>
                <img class="obj" width="100" height="100" src="${character.image}" />
                 <div class="img"> 
                    <span class="birth">Birth: ${character.birthPlace}</span>
                    <span class="att">Att: ${character.attack}</span>
                    <span class="def">Def: ${character.defense}</span>
                    <span class="mag">Mag: ${character.magic}</span>
                    <span class="type">Job: ${character.job}</span>
                 </div>
                 </article></li>`;
            });
            display.insertAdjacentHTML("beforeend", stringBuilder);
        });
    }
}

