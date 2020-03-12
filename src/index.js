const _ = require("lodash");
const $ = require("jquery");

const sayHello = () => {
    console.log("Wazzup");
}

sayHello();

console.log(_.random(0,3));

$('.jquery').html('wazzuuup').css('style','red');