const id = require('uniqid');
const fs = require('fs');

class Cube {

    static #DB = [
        {
            id: 'asdfjnkldfvkjlzs',
            name: 'Mirror Cube',
            description: 'Strange Cube',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
            difficulty: '4'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = id();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = Number(difficulty);
    }

    static get cubes() {
        return Cube.#DB.slice();
    }

    static add(cube) {
        Cube.#DB.push(cube)
    }

    static findCube(cubeId) {
        return Cube.cubes.find(x => x.id === cubeId);
    }

    static searchCube(){
        
    }
}

module.exports = Cube;