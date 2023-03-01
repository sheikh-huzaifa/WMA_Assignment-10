// Task 2                                 Answer

// 5 > 4                                     //True
// "apple" > "pineapple"                     //False
// "2" > "12"                                //True
// undefined == null                         //True
// undefined === null                        //False
// null == "\n0\n"                           //False
// null === +"\n0\n"                         //False


// Task 3                                Answers
// let a = 1 , b = 1;
// let c= ++a;                              // c=2
// let d=b++                               // d=1


// Task 4                               Answers
// let a = 2;
// let x = 1 + (a *=2);                  //x=5



// Task 5                               

// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // 12

// Answers

let a = Number(prompt("First Number?", 1));
let b = Number(prompt("Second number?", 2));
alert(a + b); //3



// Task 6
let result;
(a+b < 4) ? result = 'Below' : result= 'over';



// Task 7
let login , message;
login= prompt();
(login == 'Employee') ? message = 'Hello' :
 (login == 'Director') ?  message = 'Greetings' : 
 (login=="")? message = "no login" : message="";

 console.log(message);



//  Task 8                              Answer
alert( null || 2 || undefined );        // answer will be 2


                                                
// Task 9                               Answer
alert( alert(1) || 2 || alert(3) );     // 1 && 2



// Task 10                              Answer
alert( 1 && null && 2 );                // Null



// Task 11            

alert( alert(1) && alert(2) );          // 1 and undifined



// Task 12                              Answer
alert( null || 2 && 3 || 4 );           //3



// Task 13          
let age;
age = Number(prompt("Enter Your Age"));

if(!(age > 14 && 90 > age)){
    alert("Age is not between 14-90");
}

if(age > 14 && 90 > age){
    alert("Age is between 14-90");
}



// Task 14                             Answer
if( -1 || 0){
    alert("First");                    //First
}

if(-1 && 0){
    alert('Second');                   //null
}

if(null || -1 && 1){
    alert('Third');                   //Third
}



// Task 15
let browser=prompt("Enter Your Broswer Name:");

if(browser=='Edge'){
    alert("You've got the Edge!");
}

else if(browser=='Firefox' || browser=='Chrome' || browser=='Safari' || browser=='Opera'){
    alert('Okay we support these browsers too');
}

else{
    alert('We hope that this page look ok!');
}


// Task 16
let aA = +prompt('a?', '');

switch (aA) {
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2: 
    case 3:
        alert('2,3');
}