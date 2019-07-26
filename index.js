'use strict';
const fs = require('fs');

class Visitor{
    constructor(fullname, age, dateOfVisit, timeOfVisit, comments, 
        nameOfThePersonWhoAssistedTheVisitor){

        this.fullname = fullname;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfThePersonWhoAssistedTheVisitor = nameOfThePersonWhoAssistedTheVisitor;

        }

        save(id){
            let data = fs.readFileSync(`visitor_${id}.json`);
            let visitor = JSON.parse(data);
            console.log(visitor);
        }

        load(id){
            
            console.log(`visitor_${id}.json`);

            
        }

}
    let alice = new Visitor();
    let bob = new Visitor();
    let charlie = new Visitor();
    alice.save(1);
    bob.save(2);
    charlie.save(3);

    alice.load(1);
    alice.load(2);
    alice.load(3);
    
    
