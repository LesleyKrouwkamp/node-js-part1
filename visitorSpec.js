var Visitor = require('./index');
describe('Visitor()', () => {
    
    let visitor;
    beforeEach(() => {
        
        visitor = new Visitor("Alice", 35, "29/07/2019", "09:16", "Work", "Tsepho")
    })
    it('should be defined', () => {
        expect(visitor).toBeDefined();
    });

})
describe('Visitor.save()', () => {
    
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Alice", 35, "29/07/2019", "09:16", "Work", "Tsepho")
        
        
    })
    
    it('save() should be defined', () => {
       
        let str = visitor.save()

        expect(str).toBe('File succesfully saved');
    })
    it('save() should create a new .json file', () => {
        visitor = new Visitor("Alice", 35, "29/07/2019", "09:16", "Work", "Tsepho")
        expect(visitor.save()).toBe('File succesfully saved');
    });
    it('should throw an error when the function is unable to create a new file ', () => {
        visitor = function () {
            throw ('Cannot save file');
        }
        expect(visitor).toThrow('Cannot save file');

    });

})

describe('Visitor.load()', () => {
   
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Alice", 35, "29/07/2019", "09:16", "Work", "Tsepho")
    })

    it('should return the file with the defined ID', () => {
        expect(visitor.load(1)).toEqual({

            fullName: "Alice",
            age: 35,
            dateOfVisit: "29/07/2019",
            timeOfVisit: "09:16",
            comments: "Work",
            nameOfThePersonWhoAssistedTheVisitor: "Tsepho"
        });

    })

})