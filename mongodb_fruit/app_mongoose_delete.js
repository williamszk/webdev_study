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

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
// 	name: "Apple",
// 	rating: 34,
// 	review: "Pretty solid.",
// });

const fruit = new Fruit({
  // name: "Apple",
  rating: 6,
  review: "Pretty solid.",
});

// fruit.save();

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    // console.log(fruits);
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "6220d1ce7359e7683e28fa69" },
//   { name: "Peach" },
//   (err) => {
//     if (err) console.log(err);
//     else console.log("Succesfully updated the document.");
//   }
// );

Fruit.deleteOne({_id: "6220d1ce7359e7683e28fa69"},   (err) => {
  if (err) console.log(err);
  else console.log("Succesfully deleted the document.");
});
