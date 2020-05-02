// Write your code here
class Dog{
    constructor(name,breed){
        this.name = name
        this.breed = breed
    }
}
let dog1 = new Dog("Buzz", "greatePyrenees")
let dog2 = new Dog("Woody","labrador")


// breakfast with food and drink

class Breakfast{
    constructor(food,drink){
        this.food = food
        this.drink = drink
    }
}

//lunch with salad soup and drink

class Lunch{
    constructor(salad,soup,drink){
        this.salad= salad
        this.soup = soup
        this.drink = drink 
    }
}

//dinner with salad soup entree and dessert all mean to not be changed
class Dinner{
    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}