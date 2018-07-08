var a = ["Hello", "World", "Hi", "there"];
for(var i=0;i<a.length;i++) 
{
    console.log(a[i]);
}

var c = new Array();
c[0] = "There";
c[1] = "world";
c[2] = "Hello";

console.log("array size is "+c.length);

for (var i=c.length-1;i>=0;i--) {
    console.log(c[i]);
}

var myArr = new Array();
myArr[0] = "Test1";myArr[1] = "Test2";
myArr[2] = "Test3";myArr[3] = "Test4";

for(var j=0;j<=myArr.length-1;j++) {
    console.log(myArr[j]);
}