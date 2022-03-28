"use strict"

class user{
    constructor(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    static countUsers() {
        console.log('There are 50 users');
    }
    register() {
        console.log(this.username+' is now registered');
    }
}

//let sravani=new User('sravani','sravani@gmail.com','1254689');
//sravani.register();
//user.countUsers();

class Member extends user {
    constructor(username,email,password,memberpackage){
        super(username,email,password);
        this.package=memberpackage;
    }
    getpackage(){
        console.log(this.username+'is subscribed to the '+this.package+'package');

    }
}
let laddu= new Member('laddu','laddu@gmail.com','9836547','standard');
//laddu.getpackage();
laddu.register();