const id = require('uniqid');

class Cube {

    static #DB = [];

    constructor(name,description,imageUrl,difficulty){
        this.id = id();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = Number(difficulty);
    }

    static get cubes() {
        return Cube.#DB.slice();
    }

    static add(cube){
        Cube.#DB.push(cube)
    }
}

module.exports = Cube;