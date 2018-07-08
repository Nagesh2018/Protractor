
function myfunc() {
this.color = "Blue";
this.size = "huge";
this.getSpeed = function(){
console.log("Speed is 200MPH");
};
};

module.exports = new myfunc();