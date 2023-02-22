const TILE_HEIGHT = 36; // this is a constant that is shared with css
const TILE_WIDTH = 64;
const NUM_TILE_HORIZONTAL = 25;
const NUM_TILE_VERTICAL = 25;
// is there a way to control the css through index.js?
const mapDoc = document.querySelector("#map");
let dataState = {};

const callTileImg = () => {
	return "assets/220407_03_isometric_tile.png";
};

const addTile = () => {
	if (dataState.tiles == undefined) {
		dataState.tiles = [{ type: "tile", id: 1, posY: 0, posX: 0 }];
	} else {
		const arrLen = dataState.tiles.length;
		const lastId = dataState.tiles[arrLen-1].id;
		const newId = lastId + 1;

		const newPosX = (lastId % NUM_TILE_HORIZONTAL)*TILE_WIDTH;
		const newPosY = Math.floor(newId / NUM_TILE_HORIZONTAL)*TILE_HEIGHT;

		dataState.tiles.push({ type: "tile", id: newId, posY: newPosY, posX: newPosX });
	}

	const arrLen = dataState.tiles.length;
	const posY = dataState.tiles[arrLen-1].posY;
	const posX = dataState.tiles[arrLen-1].posX;
	const lastId = dataState.tiles[arrLen-1].id;

	const htmlInsert = `
		<div id="tile-${lastId}" class="tile-div" style=" left: ${posX}px; top: ${posY}px;">
			<img src=${callTileImg()} alt="tile" class="tile-img">
		</div>
	`;

	mapDoc.innerHTML += htmlInsert;
};

const main = () => {
	for (let i = 0; i < 300; i++){
		addTile();
	}

};

main();
