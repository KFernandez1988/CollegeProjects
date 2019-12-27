class Util {
    //util class with one static method
    constructor(){

    }
   // static method that return the tax return of a salary from florida
    static payTaxes(salary) {
        let pay = 0;

        if(salary > 9700 && salary < 39474){
            pay = salary*.12;
        } else if(salary > 39475 && salary < 84199){
            pay = salary*.22;
        } else if(salary > 84200 && salary < 160724){
            pay = salary*.24;
        } else if(salary > 160725 && salary < 204099){
            pay = salary*.32;
        } else if(salary > 204100 && salary < 510299){
            pay = salary*.35;
        } else {
           pay = salary*.37;
        }

        return pay;
    }
}