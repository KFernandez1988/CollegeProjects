class Student extends Person {

    _finalGrade = 0;
    constructor(){
        super();
    }

    set finalGrade(grades){
        this._finalGrade = grades;
    }

    get finalGrade() {
        return this._finalGrade;
    }

}
