// self invoke function
(()=> {
    // creating necesary variables
const infoPage = document.querySelector('form');
let personList = []; //list for persons
let table =  document.querySelector('#body');
//check is there is a form in the page
if(infoPage) {
    //delegate event call on click
    infoPage.addEventListener('click', event => {
        // prevent the submit
        event.preventDefault();
        let tableRows = '';
        console.log(event.target); //DEBUG--
        let submit = event.target;//selecting the event target
        if(submit.type == 'submit') { //only if event is input submit
            console.log('submitted');//DEBUG--
            let isHero = Util.isHero(infoPage['n'].value);
            //if is dependant of the json with some superheros names

            Person.school = infoPage['sc'].value; // <--static variable
            if(isHero) {
                personList.push(new SuperHero(
                infoPage['n'].value,
                infoPage['i'].value,
                infoPage['g'].value,
            ));
            } else {
                personList.push(new Student(
                infoPage['n'].value,
                infoPage['i'].value,
                infoPage['g'].value,
                ));
                }  
               //clear all input except school
                infoPage['n'].value = '';
                infoPage['i'].value = ''
                infoPage['g'].value = '';

                //creating html with the info on form
                table.innerHTML = '';
                personList.forEach(person => {
                  tableRows += Util.table(person);
                });
                
                //display the new user
                table.insertAdjacentHTML('beforeend', tableRows);
        }
        
    });
}

})();