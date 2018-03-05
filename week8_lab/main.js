/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg"
  this.type = "Bird";
}

/*** Global Variables ***/
var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // get the savedAnimal in local storage if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  var hasSavedAnimal = false;

  //check if the saved animal exists or if it is null
  if (animal === null) 
  {
    //if there is no saved animal, the button should display the Save Animal text
    $("#button-storage").text("Save Animal");

    //if there is no saved animal, we generate one
    animal = generateRandomAnimal();
  } 
  else 
  {
    //if there is a saved animal, the button should display Clear Animal text
    $("#button-storage").text("Clear Animal");

    //change the boolean to note that this animal has been saved
    hasSavedAnimal = true;
  }

  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);


  $("#button-storage").click(function() {
    //when we are clearing the animal
    if (hasSavedAnimal) 
    {
      // clear the animal from the browser
      localStorage.removeItem("savedAnimal");
      // if this button was clicked, hide button and show feedback
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Cleared!");
      $("#button-action-text").css("display", "block");
    } 
    //when we are saving the animal
    else 
    {
      // save the animal to the browser
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      // if this button was clicked, hide button and show feedback
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Saved!");
      $("#button-action-text").css("display", "block");
    }
  });

});