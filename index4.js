//Q.1:
const square = function(y) {
    return y * y;
  };
  
  console.log(square(10));

//Q.2:
  function add(a,b,){ 
      let result=0;
      result=a+b;
      console.log(result);
    }
    add(3,4); //7

  //Q.3:
    const addition = (a,b) => {
           let result = a+b;
           console.log(result);
         }
         console.log(addition);
         addition(4,8); //12

//Q.4:       
var x=21;
var girl = function(){
    console.log(x);
    var x=20;
}
girl(); //undefine



//Q.5:
var x=21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x =20;
} //undefine

//Q.6:
// var x=21;
// a();
// b();
// console.log(a);
// a = function(){
//     x=20;
//     console.log(x);
// };
// b = function(){
//     x=40;
//     console.log(x);
// }; //reference error


//Q.7:
function factorial(f){
    if (f < 0){
        return -1;
    }
    else if (f == 0){
        return 1;
    }
    else{
        return (f*factorial(f - 1));
    }
}
console.log(factorial(4));


  

