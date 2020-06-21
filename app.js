//Chapter#21-25
//Task#01
/*var first = prompt("Enter your first name:")
var last = prompt("Enter your last name:")
var fullname = first + " " + last
alert("Welcome " + fullname)

//Task#02
var fav = prompt("Enter your fav phone model")
var length = fav.length
document.write("My favorite phone is: " + fav + "<br> Length of string: " + length) 

//Task#03
var string = "Pakistani";
var index = string.indexOf("n");
document.write("String: " + string +"<br> Index of 'n': "+ index )

//Task#04
var string = "Hello World";
var index = string.lastIndexOf("l");
document.write("String: " + string +"<br> Last index of 'l': "+ index )

//Task#05
var string = "Pakistani";
var char = string.charAt(3);
document.write("String: " + string +"<br> Character at index 3: "+ char )

//Task#06
var string = "Pakistani";
var char = string.indexOf("i");
var char1 = string.slice(char,4)
document.write("String: " + string +"<br> Character at index 3: "+ char1 )

//Task#07
var city = "Hyderabad"
var city1 = city.replace("Hyder","Islam")
document.write("City: " + city + "<br> After Replacement: " + city1)

//Task#08
var message = "Ali and Sami are best friends. They play cricket and football together.";
var index = message.indexOf('and');
var index1 = message.lastIndexOf('and');
var firsttext = message.slice(0,index)
var replacingtext = "&";
var secondtext = message.slice(index+3,index1)
var thirdtext = message.slice(index1+3)
document.write("Message: "+ message + "<br> After Replacement: " + firsttext+ replacingtext +secondtext+replacingtext+ thirdtext)

//Task#09
var string = "472"
var type = typeof(string)
var num = Number(string)
var typeno = typeof(num)
document.write("Value: " + string + " <br> Type: " + type + " <br> Value: " + num + " <br> Type: " + typeno )

//Task#10
var input = "peanuts"
document.write("User input: " + input + "<br> Upper case: " + input.toUpperCase())

//Task#11
var input = "javascript"
var firstChar = input.slice(0, 1);
var otherChars = input.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
document.write("User input: " + input + "<br> Title case: " + cappedCity)

//Task#12
var num = 35.36;
var string = num.toString();
var no = string.slice(0,2)
var no1 = string.slice(3)
document.write("Number: "+ num + "<br> Result: " + no + no1 )



//Task#14
var  bak = ["cake", "apple pie", "cookie", "chipe", "paties"];
var inp = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
for(i=0;i<bak.length;i++){
    if (bak[i] === inp){
        document.write(inp + " is <b> available </b> at index " + i + " in our bakery.")
        break;
    } 
}
if (bak[i] != inp){
    document.write("We are sorry. " + inp + " is  <b> not available </b> in our bakery.")
}

//Task#17
var string = "Pakistan";
var char = string.lastIndexOf("n")
var charnew = string.slice(char)
document.write("User input: " + string +"<br> Last character of input: "+ charnew )






//Chapter#26-30
//Task#1
var number = +prompt("Enter any positive number")
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("<b> Number: " + number + "<br> <b> Round off value: " + round + "<br> <b> Floor value " + floor + "<br> <b> Ceil value: " + ceil)

//Task#2
var number = +prompt("Enter negative floating point number")
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("<b> Number: " + number + "<br> <b> Round off value: " + round + "<br> <b> Floor value " + floor + "<br> <b> Ceil value: " + ceil)

//Task#3
var number = +prompt("Enter number")
var absolute = Math.abs(number)
document.write("The absolute value of " + number + " is " + absolute)

//Task#4
var dice = Math.random()*6
var floor = Math.ceil(dice)
document.write("Random dice value: " + floor )

//Task#5
var toss = Math.random()*3
var floor = Math.floor(toss)
if (floor ===  2){
    document.write(floor + " <br> Random coin value: Heads" )
}
if (floor===1){
    document.write(floor + "<br>Random coin value: Tails" )
}

//Task#6
var num = Math.random()*100
var floor = Math.ceil(num)
document.write("Random number between 1 and 100: " + floor)

//Task#7
var inp = prompt("Enter your weight in kilograms")
var kg = parseInt(inp)
document.write("The weight of user is "+ kg + " kilograms")

//Task#8
var secret = 8;
var num = +prompt("Enter any number between 1 and 10")
if (secret === num){
    alert("Congratulations")
}
else{
    alert("Try again!")
}



//Chapter31-34
//Task#1
var Date = new Date();
document.write(Date)

//Task#2
var Date = new Date();
var b = Date.toString() //converting into string
var month = b.slice(4,7) //taking 3 letters of month
document.write("Current Month: " + month)

//Task#3
var Date = new Date();
var b = Date.toString() //converting into string
var month = b.slice(0,4) //taking 3 letters of day
document.write("Today is " + month)

//Task#4
var Date = new Date();
var b  =Date.getDay() //converting into string
if (b === 6){
    document.write("It's Fun day")
} 
else if (b === 0){
    document.write("It's Fun day")
}

//Task#5
var Date = new Date();
var b  =Date.getDate() //converting into string
if (b <= 15){
    document.write("First fifteen days of month")
} 
else if (b > 15 ){
    document.write("Last days of month")
}

//Task#6
var Date = new Date()
var milli = Date.getTime();
var mint = milli/(1000*60*60);
document.write("Current Date: " + Date)
document.write(" <br> Elapsed milliseconds since January 1, 1970: " + milli)
document.write("<br> Elapsed minutes since January 1, 1970: " + mint)

//Task#7
var Date = new Date();
var hour = Date.getHours()
if (hour <= 11){
    document.write("It's AM")
} 
else if (hour >= 12 ){
    document.write("It's PM")
}

//Task#8
var a = new Date("Dec 31,2020")
document.write("Later date: " + a)

//Task#9
var date = new Date("June 18,2015");
var milli = date.getTime();
var Today = new Date();
var Todaymilli = Today.getTime()
var diff = Todaymilli - milli
var diffyear = diff/(1000*60*60*24)
var accurate = Math.floor(diffyear)
document.write(accurate + " days have passed since 1st Ramadan, 2015")

//Task#10
var beg = new Date("Jan 1,2015");
var begmilli = beg.getTime();
var ref = new Date("Dec 5,2015");
ref.setHours(22);
ref.setMinutes(50)
ref.setSeconds(16)
var refmilli = ref.getTime();
var diff = refmilli - begmilli;
var diffsec = diff/(1000*60);
var accurate = Math.floor(diffsec);
document.write("On reference date " + ref +",<br>" + accurate + " seconds had passed since beginning of 2015")

//Task#11
var Date = new Date();
var b = Date.toString()
var hour = b.slice(16,18);
var newhour = hour - 1;
var first = b.slice(0,16)
var last = b.slice(18)
var ago = first + newhour + last;
document.write("current date " + Date + "<br> 1 hour ago, it was " + ago)

//Task#12
var date = new Date();
var years = new Date();
years.setFullYear(1915)
document.write("current date " + date + "<br> 100 years back, it was " + years)

//Task#13
var dob = new Date(prompt("Enter your DOB","Jan 3,2000"));
var dobmilli = dob.getTime();
var today = new Date();
var todaymilli = today.getTime();
var year = todaymilli-dobmilli
var accurate = year/(1000*60*60*24*30*12)
var acu = Math.floor(accurate)
var year = dob.toString();
var year1 = year.slice(11,15)
document.write("Your age is " + acu + "<br> Your birth year is " + year1)

//Task#14
var name = prompt("Enter your name")
var date = new Date()
var datestring = date.toString()
var datenew = datestring.slice(4,7)
var unit = 16
var nounit = +prompt("Enter no of units")
var amount = unit*nounit
var surcharge = 16*21.875
var due = surcharge+amount
document.write("<h1> K-Electric Bill <h1> <br> " + "Customer Name: "+ name +"<br> Month: " + datenew + "<br> Number of units: "+ nounit + "<br> Charger per unit: " + unit + "<br> <br> Net Amount Payable (within Due Date): " + amount + "<br> Late payment surcharge: "+ surcharge + "<br> Gross Amount Payable (after Due Date): " + due)






//Chapter#35-38
//Task#1
function date(){
    var z = new Date()
    document.write(z)
}
date()

//Task#2
function full(){
    var a = prompt("Enter first name")
    var b = prompt("Enter last name")
    alert("Welcome" + a+" " + b)
}
full()

//Task#3
function add(){
    var a = +prompt("Enter 1st number")
    var b = +prompt("Enter 2nd number")
    document.write(a+ "+" + b + "=" + (+a + +b))
}
add()

//Task#4
function calc(){
    var inp1 = prompt("Enter 1st number")
    var inp2 = prompt("Enter 2nd number")
    var op = prompt("Enter operator")
    if (op === "+"){
        document.write(inp1 + "+" + inp2 + "=" + (+inp1+ +inp2))
    }
    else if (op === "-"){
        console.log(inp1 + "-" + inp2 + "=" + inp1 -inp2)
    }
    else if (op === "*"){
        document.write(inp1 + "*" + inp2 + "=" + inp1 * inp2)
    }
    else if (op === "/"){
        document.write(inp1 + "/" + inp2 + "=" + inp1 / inp2)
    }
    else if (op === "%"){
        document.write(inp1 + "%" + inp2 + "=" + inp1 % inp2)
    }
}
calc()

//Task#5
function square(){
    var a = prompt("Enter number")
    document.write("Square of " + a +" is " +a**2)
}
square()

//Task#6
function fact(){
var num = prompt("Enter number")
fact = 1
for ( i = num; i >0; i--){
        fact = fact*i
       console.log(fact)
    }
}
fact()

//Task#7
function count(){
    var num = +prompt("Enter starting number")
    var num2 = +prompt("Enter ending number")
    for (i = num+1; i<=num2; i++){
        num = num+i
        console.log(num)
    }
}
count()

//Task#8
function hypo(){
    var base = +prompt("Enter size of base")
    var perp = +prompt("Enter size of perpendicular")
    function square(){
        var a = base**2
        var b = perp**2
        var hyp = a+b
        var result = hyp**(1/2)
        document.write("Hyp is: "+ result)
        
    }
    square()
}
hypo()


//Task#10
function palindrome(){
var word = prompt("Enter your word");
var check = "";
for (i=word.length-1; i>=0; i--){
    check += word[i]
      
}

if (word===check){
    document.write(word + " is a palindrome word")
}
else{
    document.write(word + " is not a palindrome word")
}
}
palindrome()

//Task#14
var radius = +prompt("Enter radius")
function calcCircumference(){
    var circum = 2*Math.PI*radius
    document.write("Circumference is: " + circum + "<br>")
}
function calcArea(){
    var area = Math.PI*(radius**2)
    document.write("Area is:" + area)
}
calcCircumference()
calcArea()*/