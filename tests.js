var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path='Immutable.ts' />

var Person = (function (_super) {
    __extends(Person, _super);
    function Person(Name) {
        _super.call(this);
        this.Name = Name;
    }
    return Person;
})(Immutable);
var Complex = (function (_super) {
    __extends(Complex, _super);
    function Complex() {
        _super.apply(this, arguments);
        this.Persons = [new Person("Test"), new Person("Test"), new Person("Test")];
        this.TimeStamp = new Date();
        this.Name = "Testing";
        this.YesNo = true;
        this.Literal = {
            test: true
        };
    }
    return Complex;
})(Immutable);

describe("Immutable", function () {
    var person;
    var name = "Test";

    beforeEach(function () {
        person = new Person(name);
    });

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
            var complex = new Complex();
            var copy = complex.Copy();
            expect(copy).not.toEqual(complex);
            debugger;
            expect(copy.Persons.length).toBe(3);
            expect(copy.Persons[0].Name).toBe(name);
        });
    });
});
