let arr = ["home", 'class', 'room', 'ay', 'jessica'];

const fil = () => {
  return arr.filter((task) => {
    if(task !== "home") {
        return true
    } else {
        return false
    }
 });
}

console.log(fil());
console.log(arr.length);