//Getting Element of an array

const todo = ['bath', 'sleep', 'eat'];
//old way
const firstTodo = todo[0];
const secondTodo = todo[1];

//Destructuring
const [ oneTodo, twoTodo ] = todo;


// console.log(firstTodo);
// console.log(secondTodo);

// console.log(oneTodo);
// console.log(twoTodo);




//JSUT TESTING OBJECT PROGRAMMING
var gadget = {
    car: "lamboghini",
    phone: "iphone",
    houseName: "Mansion",
    width: 150,

    getTotal: function() {
        return `All Gadget of Home are:
            car = ${gadget.car}
            phone = ${gadget.phone}
            houseName = ${gadget.houseName}
            width = ${gadget.width}
        `;
    }
}

gadget.width = 700;

console.log(gadget.getTotal());




//using IF conditional statement
//Old Way
const age = 15;
if (age >= 18) {
  console.log("over age");
} else {
  console.log("Under Age");
}

//Jsx expression (React.js)
age > 18 ? console.log("Hello") : console.log("bad");