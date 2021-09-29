const id = require('uniqid');
const fs = require('fs');
const path = require('path');
const cubeDB = require('./../config/cubeDB.json')

class Cube {

    // static #DB = [
    //     {
    //         id: 'asdfjnkldfvkjlzs',
    //         name: 'Mirror Cube',
    //         description: 'Strange Cube',
    //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
    //         difficulty: '4'
    //     },
    //     {
    //         id: 'gaoxe5eroku5uj5s3',
    //         name: 'rubik cube',
    //         description: ' Originally called the Magic Cube,[4] the puzzle was licensed by Rubik to be sold by Ideal Toy Corp. in 1980[5] via businessman Tibor Laczi and Seven Towns founder Tom Kremer',
    //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Rubiks_cube_solved.jpg',
    //         difficulty: 3
    //       },
    //       {
    //         id: 'gaoxe5bkcku5urpre',
    //         name: ' Cube Surface Area Mathematics',
    //         description: 'In arithmetic and algebra, the cube of a number n is its third power, that is, the result of multiplying three instances of n together. The cube of a number or any other mathematical expression is denoted by a superscript 3, for example 23 = 8 or (x + 1)3.\r\n' +
    //           '\r\n' +
    //           'The cube is also the number multiplied by its square:\r\n' +
    //           '\r\n' +
    //           'n3 = n × n2 = n × n × n.\r\n' +
    //           'The cube function is the function x ↦ x3 (often denoted y = x3) that maps a number to its cube. It is an odd function, as\r\n' +  
    //           '\r\n' +
    //           '(−n)3 = −(n3).',
    //         imageUrl: 'https://img.favpng.com/6/25/15/cube-surface-area-mathematics-two-dimensional-figures-plane-png-favpng-NhNenab7i00Mi14MF0iHYhyf9.jpg',
    //         difficulty: 6
    //       }

    // ];


    constructor(name, description, imageUrl, difficulty) {
        this.id = id();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = Number(difficulty);
    }

    static add(cube) {
        cubeDB.push(cube);
        let result = JSON.stringify(cubeDB, '', 2);
        fs.writeFile('./src/config/cubeDB.json', result, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
        })

    }

    static get cubes() {
        let data = fs.readFileSync('./src/config/cubeDB.json', 'utf8')
        data = JSON.parse(data);
        return data;
    }

    static findCube(cubeId) {
        let data = fs.readFileSync('./src/config/cubeDB.json', 'utf8')
        data = JSON.parse(data);
        return data.find(x => x.id === cubeId);
    }

    static searchCube(search, from, to) {
    let result = Cube.cubes

    if (search) {
        result = Cube.cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        from = Number(from);
        result = Cube.cubes.filter(x => x.difficulty >= from);
    }
    if (to) {
        to = Number(to);
        result = Cube.cubes.filter(x => x.difficulty <= to);
    }

    return result;
}
}

module.exports = Cube;