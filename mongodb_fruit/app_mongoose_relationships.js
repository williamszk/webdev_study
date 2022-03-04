const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required, mate!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);


const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit({
	name: "Pineapple",
	rating: 10,
	review: "Pretty solid.",
});

// pineapple.save();

const person = new Person({
	name: "Amy Donavan",
	age: 12,
  favoriteFruit: pineapple
});

person.save();