# OL-Academy 1_Homework_solution

   create Constructor Function called Car, that takes the following arguments: make, model, year.

   Implement getCarInfo() method that returns the information about the car in the following format: `Tesla Model S released in 2015`;


   Create new constructor Function named Person, that takes the following arguments: name, surname, age, gender, cars. 


  ## In the Person Constructor Function implement fullName and countCars methods like in the following: 
    # i. fullName() must return the full name (name and surname separated by space).
    # ii. countCars() must return the number of the elements(cars) placed into the array.

   In Car Constructor add to this context the variable owners with initial value = [] (empty array). It should be noted that the value of the owner variable should not be determined by the passed parameter (that is, it should not be passed to the constructor function).

  ## Implement the following methods in the Car constructor function:

    # i. addOwner() , which will take one parameter (the owner) and add the context variable to the owners array.
    # ii. removeOwner() , which will take a single parameter (the owner) and remove it from the owners array.
    # iii. getOwnersCount(), which will return the number of people who own this vehicle.
    
  ## Return to the Person constructor function and implement the two methods buysCar() and sellsCar().

    # i. The buysCar() method takes one parameter (a car), adds it to the context's cars array, and adds a new owner (the entire current Person with its properties) to the list of owners of that car.

    # ii. The sellsCar() method takes one parameter (a car), removes it from the context's cars array, and also removes this owner (the entire current Person, with its properties) from the list of owners of that car.

 implement a getOwnerNames method in the Car constructor function that will retrieve all owners from the context's owners array and return their full name using their fullName() function.

 Add the getAllCarsInfo method to the constructor function Person, which will return complete information about all cars in the appropriate format.
