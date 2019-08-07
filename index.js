// 'use strict';
let id = 0;
module.exports = class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, 
        nameOfThePersonWhoAssistedTheVisitor){

        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfThePersonWhoAssistedTheVisitor = nameOfThePersonWhoAssistedTheVisitor;

        }

    save() {          
            let vistor = new Visitor(
            this.fullName,
            this.age,
            this.dateOfVisit,
            this.timeOfVisit,
            this.comments,
            this.nameOfThePersonWhoAssistedTheVisitor
       );

       let data = JSON.stringify(vistor)
       let fs = require('fs');          
       id++;          
       fs.writeFile(`visitor_${id}.json`, data, err => {
            if (err) {
                 throw (Error + 'Cannot save this file');
            } else {
                 console.log('File succesfully saved');
            }
       });

       return 'File succesfully saved';
    }

    load(id) {
       
        var fs = require("fs")
        if(id <= 0) {
            console.log("File does not exist");
        }
        var path = "visitor_" + id + ".json";
        var data =  fs.readFileSync(path);
        let visitorData = JSON.parse(data);
        return (visitorData);
    }    
}    
    
    
    //     let visitor1 = new Visitor("Alice",
    //     35,
    //     "29/07/2019",
    //     "09:16",
    //     "Work",
    //     "Tsepho");
    //      visitor1.save();    
        
    //     let visitor2 = new Visitor("Bob",
    //     21,
    //     "29/07/2019",
    //     "15:09",
    //     "work related",
    //     "Tshepo");
    //      visitor2.save();    
        
    //     let visitor3 = new Visitor("Charlie",
    //     21,
    //     "30/08/2019",
    //     "12:45",
    //     "meeting",
    //     "Lesley");
    //      visitor3.save();

    //     //visitor1.load(1);
    //     //visitor2.load(2);
    //     //visitor3.load(3);
            
