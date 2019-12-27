class  Util {
    //static class for making app work
    constructor() {

    }

    //calculate avg from grades
    static AVG(grades){
      let avg = 0;
      const gradesToAdd = grades.split(',');
      let sum = 0;
        for(let i = 0; i < gradesToAdd.length; i++){
            gradesToAdd[i].trim();
  
          if(!isNaN(gradesToAdd[i])){
              let  grade = this.IsNumber(gradesToAdd[i]);
                sum += grade;
            } else {
                avg  = 'You did\'nt follow the rules';
                break;
            }
        }
        //leave warning on how the app is being use
        if(typeof avg === "string") {
            return avg;
        } else {
            return sum/gradesToAdd.length;
        }
    }
//parse each grade into a int number
    static IsNumber(toParse){
        return parseInt(toParse, 10);
    }

//create cell with the new person
    static table(person){
        return `<tr>
        <td> ${person.name}</td>
        <td> ${person.id}</td>
        <td> ${person.avg}%</td>
        <td> ${Person.school  /** calling the static variable **/}</td>
        <td> ${person.grades}</td>
        </tr>
        `;
    }


    static isHero(person){
        let isFound = false;
       heros.forEach( hero => {
         if(person.toLowerCase() == hero.superhero.toLowerCase()){
               isFound = true;
         }
       });
       return isFound;
    }
}