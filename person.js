

    //class
    class person {
        constructor(firstname,lastname,rollno,sex,dob){
            this.firstname = firstname;
            this.lastname =lastname;
            this.rollno=rollno;
            this.sex=sex;
            this.dob=new Date(dob);

        }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return '${this.firstname} ${this.lastname}';


    }
}

const person1=new person('sravani','gullapalli','1','female','14-08-1998');
console.log(person1);
const person2=new person('venkat','raja','2','male','21-08-1994');
console.log(person2);

console.log(person1.firstname,person1.lastname);
console.log(person1.dob);

console.log(person2.getFullName());
console.log(person1.getBirthYear());