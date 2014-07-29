Immutable.js
============

Immutable Objects in JS

Environments
-----------

###Browsers
ES5 or greater
###Node
Tested on 10.18. But should work on most versions.

Useage
------
###Constructor

    var cantChangeMe = new Immutable()

objects instancatied from the Immutable function don't start off as immutable. Instead you need to call `Freeze` on the object first

You can also provide an object to the consturctor. This objects properties will be copied over to the new immutable object. 

    var Person = function(name){
        this.Name = name;
    };
    var immutablePerson = new immutable(new Person("Hello World"));
    console.log(immutablePerson.Name); // "Hello World"

###Freeze
Freezes the object and does not allow any changes the the object. Once an object is frozen, it is forever frozen.

    cantChangeMe.Freeze();
    cantChangeMe.Name = "Testing";
    console.log(cantChangeMe.Name) //undefined

###Copy

In order to create a copy of the object, you can call thr `Copy` method. This provides a copy of the object and all of it's properties. 
    
    var thing = cantChangeMe.Copy();
    
The newly copied object is unfrozen by default.

###Set

Set works the same as the consturctor function. It takes an object, and copies it's values to the Immutable object. This is mainly used for setting a large number of properties at once. 

    thing.Set({prop: "stuff"});

This method **will not** work if you have called `Freeze` as the object will be immutable.

Contributing
------------

* `git clone` it. 
* run `npm install -g testem`.
* run `testem` from the cloned directory once `testem` is installed. 
* Add features.
* Create tests for features. 
* All previously existing features must be passing.
* Create pull request. 
