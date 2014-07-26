

describe("Immutable", function () {
    var Person = function(name) {
        var imm = new Immutable();
        imm.Name = name;
        return imm;
    }
    
    var Complex = function(name) {
        var complex = Person.call(this, name);
        complex.people = [new Person(name),new Person(name),new Person(name)];
        complex.time = new Date();
        complex.age = Math.random();
        complex.thing = {
            a: "a"
        }
        return complex;
    }
    
    var person;
    var complex;
    var name = "test"
    
    beforeEach(function(){
        person = new Person(name);
        complex = new Complex(name);
    })
    
    describe("Freeze", function () {
        it("Should be freezeable", function () {
            var notName = "notName";

            person.Freeze();
            person.Name = notName;

            expect(person.Name).toBe(name);
        });
    });

    describe("Copy", function () {
        it("Should provide a copy of the object", function () {
            var person2 = person.Copy();
            expect(person).not.toEqual(person2);
        });
        it("Should copy complex objects as well", function () {
            var copy = complex.Copy();
            expect(copy).not.toEqual(complex);
            expect(copy.people.length).toBe(3);
            expect(copy.people[0].Name).toBe(name);
        });
    });
});
