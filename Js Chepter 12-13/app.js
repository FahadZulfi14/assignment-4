// -----------------------    chepter no 9-11  -------
// -----------------USER INPUT & CONDITIONAL STATEMENT---------


// Question no 1
// var city= prompt("which city you will be land");
// if(city=== "karachi"){
//     document.write("<h1>Welcome to city of lights</h1>");
// }



// Question no 2
// var gender= prompt("Please Enter your Gender");
// if(gender === "male"){
//     document.write("<h1> Good Morning Sir. </h1>");
// }
// if(gender === "female"){
//     document.write("<h1> Good Morning Ma’am. </h1>");
// }



// Question no 3
//     document.write("<h1>  Signal Color         Massage. </h1>");
//     var color= prompt("input color front of you traffic signal","red yellow or green");
// if(color === "red"){
//     document.write("<h1>Red ====>  Must Stop </h1>");
// }
// if(color === "yellow"){
//     document.write("<h1>Yellow ====>  Ready to move </h1>");
// }
// if(color === "green"){
//     document.write("<h1>Green ====>  Move now </h1>");}




// /---------------------- Question no 4
//     document.write("<h1>  Fuel   warning ! </h1>");
//     var fuel= prompt("input remaining fuel in car (in digit litres)","1");
// if(fuel >= 3){
//     document.write("<h1> Fuel in Litres ====>  Don't  Worry !</h1>");
// }
// if(fuel <= 2){
//     document.write("<h1>  Fuel in Litres ====>  “Please refill the fuel in your car” </h1>");
// }



// /------------------------------ Question no 5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }



//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }



//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" < "cat"){
//     alert("car is smaller than cat");}



// /---------------------- Question no 6
// document.write("<h1>  Marks Sheet  </h1>");

// var marksObtained = prompt("input Your Obtained Marks"," 1 to 300");
// if(marksObtained >= 241){
//     document.write("<h1>Remarks ==> Excellent ! </h1>"+"<h3> Grade-A-ONE</h3>");
// }else if (marksObtained >= 210){
//     document.write("<h1>Remarks ==> Good ! </h1>"+"<h3> Grade-A</h3>");
// }else if(marksObtained >= 180){
//     document.write("<h1>Remarks ==> You Need to Improve ! </h1>"+"<h3> Grade-B</h3>");
// }else if(marksObtained < 180){
//     document.write("<h1>Remarks ==> Sorry ! </h1>"+"<h3> Grade-Fail</h3>");
// }
// var perCent= marksObtained/300*100 ;
// document.write("<h3>Total Marks ===> 300 </h3>");
// document.write("<h3>"+"Marks Obtained ===> " + marksObtained +"</h3>" );
// document.write("<h3>"+"Percentage ===> " + perCent + " %"+"</h3>" );



// /---------------------- Question no 7
// var guesNum=prompt("Guess secret number(1 to 10))");
// var secNum=5;
// if(guesNum==secNum){
//     document.write("<h1> “Bingo! Correct Answer”. </h1>" +" <h2>It's '5'    Excellent </h2>");
// }else if(guesNum==4){
//     document.write("<h1> “Close enough to the correct answer”.  </h1>");

// }else if(guesNum==6){
//     document.write("<h1> “Close enough to the correct answer”.  </h1>");

// }
// else{
//     document.write("<h1> “SORRY!  Wrong Try Again ”.  </h1>");}




// /---------------------- Question no 8
// var givenNum=prompt("Check Number Divisible by 3 or Not");

// if(givenNum % 3 == 0){
// document.write("<h1>YES ! It's Divisible By 3 </h1>");
// }else{
// document.write("<h1> NOT ! It's Not Divisible By 3 </h1>");
// }




// /---------------------- Question no 9
// var givenNum=prompt("Check Your Number It's Even or Odd !.");

// if(givenNum % 2 == 0){
// document.write("<h1> It's An Even Number </h1>");
// }else{
// document.write("<h1> It's An Odd Number </h1>");
// }




// /---------------------- Question no 10
// document.write("<h1>  Temperature   </h1>");
// var temp = prompt("input °C Temperature in your City right now");
// if (temp >= 40) {
//     document.write("<h1> BE CAREFULL !   “It is too hot outside.” </h1>");
// }
// else if (temp >= 30) {
//     document.write("<h1> “The Weather today is Normal.” </h1>");
// }
// else if (temp >= 20) {
//     document.write("<h1> “Today’s Weather is cool.” </h1>");
// }
// else if (temp >= 10) {
//     document.write("<h1> “OMG! Today’s weather is so Cool.” </h1>");
// }




// /---------------------- Question no 11
// var num1=+prompt("Calculator! input 1st Number","1");
// var oprt=prompt("Calculator! input Operator + - * /","+");
// var num2=+prompt("Calculator! input 2nd Number","2");
// var resul;

// if(oprt== "+"){
//     resul = num1 + num2;
// }
// else if(oprt== "-"){
//     resul = num1 - num2;
// }
// else if(oprt== "*"){
//     resul = num1 * num2;
// }
// else if(oprt== "/"){
//     resul = num1 / num2;
// }
// else{
// document.write("<h1>  Wrong ! </h1>");
// }
// document.write("<h1>Resut  "+ resul + "</h1>");
