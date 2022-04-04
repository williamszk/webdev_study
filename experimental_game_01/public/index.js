// alert("Hello there!");

// document.querySelector("h1").innerHTML = "Good bye!";

// document.getElementsByTagName()
// document.getElementsByClassName()
// document.getElementById()

// let anelement01 = document.getElementsByTagName("h1");
// console.log(anelement01)
// console.log(typeof(anelement01));

// let anelement01 = document.querySelector("h1");
// console.log(anelement01);
// console.log(typeof(anelement01));

// document.querySelector("#title");
// document.querySelector("li a");
// document.querySelector("li.item"); // comnination of selectors, those are characteristics that are in the same level in the html element
// document.querySelector("#list a"); // this is called a hierarchical selector given the same between the two selectors
// document.querySelectorAll("#list a"); // this will return an array with all the elements that match the query

// document.querySelector("button").classList; // this gives a list of the classes in the element
// document.querySelector("button").classList.add("mynewclass") // how to add a new class
// document.querySelector("button").classList.remove("mynewclass")
// document.querySelector("button").classList.toggle("mynewclass")

// take a look at this:
// functionality to drag and select items
// https://thibaultjanbeyer.github.io/dragNdrop/
// it shows drag and drop functionality

// https://stackoverflow.com/a/46072206/15875971
// https://github.com/ThibaultJanBeyer/DragSelect

// https://dragselect.com/

let dataState = { villagerCount: 0, villagers: [] };

// Villager

const villagerImg = () => {
  /* a function that returns the villager image
   *
   */
  return "assets/images/villager_01.png";
};

const includeVillager = () => {
  /* Function that includes a new villager in the map
   *
   */
  // increase then state of quantity of villagers
  dataState.villagerCount += 1;
  // template strings
  const theHtml = `
		<div id="villager-${dataState.villagerCount}">
			<img src=${villagerImg()} alt="villager" class="villager">
		</div>
	`;
  document.querySelector("#the-map").innerHTML += theHtml;

  const villagerId = dataState.villagerCount;
  dataState.villagers.push({ id: villagerId });
  console.log(dataState);

  return villagerId;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const teleportVillagerToRandomPosition = (villagerId) => {
  const maxRangePosition = 400;
  const newPositionLeft = getRandomInt(maxRangePosition);
  const newPositionRight = getRandomInt(maxRangePosition);
  document.querySelector(`#villager-${villagerId}`).style.position = "absolute";
  document.querySelector(
    `#villager-${villagerId}`
  ).style.left = `${newPositionLeft}px`;
  document.querySelector(
    `#villager-${villagerId}`
  ).style.top = `${newPositionRight}px`;
};

const main = () => {
  let villagerId;
  villagerId = includeVillager();
	teleportVillagerToRandomPosition(villagerId);
  
	villagerId = includeVillager();
	teleportVillagerToRandomPosition(villagerId);

	villagerId = includeVillager();
	teleportVillagerToRandomPosition(villagerId);


};

main();
