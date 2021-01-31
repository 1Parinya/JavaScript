//libhello.js
const person={
    name:'Parinya',
    weight : 75

}

function sayHello(){
    console.log("HELLO WORLD!")
}

function cube(x){
    return x*x*x;
}

const add = (a,b) =>a+b;

const status = true;
module.exports = {person, sayHello,cube,add,status}

