class  Util {
    constructor() {

    }

    static AVG(grades){
      const avg = 0;
      const gradesToAdd = grades.split(',');
      let sum = 0;
          
        for(let i = 0; i < gradesToAdd.lenght; i++){
            gradeToAdd[i].trim();
          if(isNaN(gradeToAdd[i])){
              let  grade = this.IsNumber(gradeToAdd[i]);
                console.log(grade)
                sum += grade;
            } else {
                avg  = 'You did\'nt follow the rules';
                break;
            }
        }
      return typeof avg == 'string' ? avg : sum/gradesToAdd.lenght ;
    }

    static IsNumber(toParse){
        return parseInt(toParse, 10);
    }
}