const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

console.log(date);

const app = express();

// let myNewItemArray = ["Buy food", "Cook food", "Eat food"];
// let workItems = [];

app.use(bodyParser.urlencoded({ extended: true })); // this is needed to be able to pass form info to the back-end
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todo list!",
});

const item2 = new Item({
  name: "Another item",
});

const item3 = new Item({
  name: "<-- hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  const dayOfWeek = date.getDate();
  const listTitle = dayOfWeek;

  Item.find({}, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      if (results.length === 0) {
        Item.insertMany(defaultItems, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully saved items in the database.");
          }
        });

        res.redirect("/");
      } else {
        const myNewItemArray = results;
        res.render("list", {
          listTitle: listTitle,
          myNewItemArray: myNewItemArray,
        });
      }
      // mongoose.connection.close();
    }
  });
});

app.post("/", function (req, res) {
  const query = req.body;
  const listName = query.list;
  const myNewItem = query.myNewItem;

  const myNewItemMongo = new Item({
    name: myNewItem,
  });

  const dayOfWeek = date.getDate();
  const listTitle = dayOfWeek;
  if (listName === listTitle.split(" ")[0]) {
    myNewItemMongo.save(myNewItemMongo, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved new item in the database.");
      }
    });

    res.redirect("/");
  } else {
    List.findOne({ name: listName }, (err, foundList) => {
			if (err){
				console.log("Error here")
			} else {
				foundList.items.push(myNewItemMongo);
				foundList.save();
				res.redirect("/" + listName);
			}
    });
  }
});

app.post("/delete", (req, res) => {
  // const checkedItemId2 = req.body.checkbox;
  const checkedItemId = req.body.listName;
  console.log(checkedItemId);

  const dayOfWeek = date.getDate();
  const listTitle = dayOfWeek;

  if (listName === listTitle) {
    Item.findByIdAndRemove(checkedItemId, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Successfully deleted " + checkedItemId + " item in the database."
        );
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } },
      (err, foundList) => {
        if (err) {
          console.log("Error in here.");
        } else {
          res.redirect("/" + listName);
        }
      }
    );
  }
});

app.get("/:customListName", (req, res) => {
  const customListName = req.params.customListName;

  List.findOne({ name: customListName }, (err, foundList) => {
    if (err) {
      console.log(err);
    } else {
      if (foundList) {
        console.log("The custom list exists.");

        res.render("list", {
          listTitle: foundList.name,
          myNewItemArray: foundList.items,
        });
      } else {
        console.log("The the custom list doesn't exist.");

        const list = new List({
          name: customListName,
          items: defaultItems,
        });

        list.save();
        res.redirect("/" + customListName);
      }
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
