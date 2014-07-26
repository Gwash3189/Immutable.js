Immutable.js
============

Immutable Objects in JS

Environment
-----------

###Browsers
ES5 or greater
###Node
Tested on 10.18. But should work on most versions.

Useage
------
###Create a new Immutable
    var cantChangeMe = new Immutable()
objets instancatied from the Immutable function don't start off as immutable. Instead you need to call `Freeze` on the object first

###Freeze

    cantChangeMe.Freeze();
    cantChangeMe.Name = "Testing";
    console.log(cantChangeMe) //undefined

###Copy

In order to create a copy of the object, you can call thr `Copy` method. This provides a copy of the object and all of it's properties. 
    
    var thing = cantChangeMe.Copy();
    
The newly copied object is unfrozen by default. As before, to freeze it, call Freeze. 

###How
This is all made possible by `Object.Freeze` which is made available in ES5. 
