///<reference path='Immutable.ts' />
declare var describe;
declare var it;
declare var expect;
declare var beforeEach;

class Person extends Immutable{
    constructor(public Name: string){super();}
}
class Complex extends Immutable {
    public Persons = [new Person("Test"), new Person("Test"), new Person("Test")];
    public TimeStamp = new Date();
    public Name = "Testing";
    public YesNo = true;
    public Literal = {
        test: true
    };
}

describe("Immutable", () => {
    var person;
    var name = "Test";

    beforeEach(() => {
        person = new Person(name);
    });

    describe("Freeze", () => {
        it("Should be freezeable", () => {
            var notName = "notName";

            person.Freeze();
            person.Name = notName;

            expect(person.Name).toBe(name);
        });
    });

    describe("Copy", ()=>{
        it("Should provide a copy of the object", function(){
            var person2 = person.Copy();

            expect(person).not.toEqual(person2);
        });
        it("Should copy complex objects as well", () => {
            var complex = new Complex();
            var copy = complex.Copy<Complex>();
            expect(copy).not.toEqual(complex);
            debugger;
            expect(copy.Persons.length).toBe(3);
            expect(copy.Persons[0].Name).toBe(name);
        });
    });
});
