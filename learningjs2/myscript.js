var num = 1;
while(num <=30){
    if(num % 7==0 ){
        console.log(num);
    }
    num++
}

var sum = 0, i = 1;
while(i<= 5){
    sum +=i;
    i++;
}
console.log(sum);



var you = 0;
for(var you1 = 10; you1 <= 90; you1++)
{
    you += you1;
}
console.log(you);


var your = 20;
do{
    console.log(your);
    your--;
}
while(your >= 1);

// change string to number
var a = '100';
console.log(typeof a)

var b = Number(a);
console.log(typeof b)

// change number to string

console.log(String(100));

// change bolean to number
console.log(Number(true));
console.log(Number(false));

// change number to bolean 
console.log(Boolean(100));



// change string to bolean
console.log(Boolean('0'));
console.log(Boolean('milad'));
console.log(Boolean(''))




const button = document.getElementById("button"); // Fixed ID
const text = document.getElementById("mytext");
const hone = document.getElementById("h1");

button.onclick = () => {
   console.log(text.value);
   hone.innerHTML = `we got your username mr(${text.value})`;
   text.value = "";
};

for (var q = 1; q <= 10; q++){
    if(q % 2 == 0){
        continue;
    }
    console.log(q);
}


for(var query = 1; query <=1 ; query++){
    console.log('outer'+ query)
    for(var query1 = 1;query1 <=2;query1++){
        console.log('inner'+query1)
    }
}

var str = '';
str = str + '*';
console.log(str);
str = str + '\n';// \n mean new line
str = str + '*';
console.log(str);

// var my = '';
// for(var why=1; why <= 2; i++){
//     for(var j = 1;j <= 3;j++)
//     {
//         my =my +'*';
//     }
//     my = my + '\n';
// }    //ask why that does not work

var array = [1,2,3,4,5,6,7,8,9,10];
console.log(array);



var array1 = [];
console.log(array1);

array1[1] = 10;
array1[2] = 10;
array1[3] = 10;
array1[4] = 10;
array1[5] = 10;
array1[6] = 10;
array1[7] = 10;
array1[8] = 10;
array1[9] = 10;
array1[10] = 10;
array1[11] = 10;

const PI = 3.14159;
let radus;
let masahat;

document.getElementById("submit").onclick = function(){
    radus = document.getElementById("mytext2").value;
    radus = Number(radus);
    masahat = 2 * PI * radus;
    document.getElementById("h4").textContent = masahat + 'cm';
    console.log(radus)
}

const increase = document.getElementById("incbtn");
const decrease = document.getElementById("decbtn")
const reset = document.getElementById("rbtn");
const countable = document.getElementById("countable");
let count= 0;

increase.onclick = function(){
    count++;
    countable.textContent = count;
}
decrease.onclick = function(){
    count--;
    countable.textContent = count;
}
increase.onclick = function(){
    count++;
    countable.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countable.textContent = count;
}
console.log(Math.PI);//pi show the in math
console.log(Math.E);//E show logaritm in farsi

let x = 3.99;
let y = 2;
let z;
let f;
let c;
let t;
let p;
let abidkoni;

p = Math.sqrt(x);//sqrt is like 3 * 3 * 3
t = Math.pow(x, y);//pow show the tawan in farsi
z = Math.round(x);//round 
f = Math.floor(x);//floor alwiys round down
c = Math.ceil(x);//ceil allwais round up
abidkoni = Math.trunc(x);//trunic dont show after point
c = Math.log(x);//its show logaretm
p = Math.sin(x);//show sin
p = Math.cos(x);//show cosine
p = Math.tan(x);//show tanjant
p = Math.abs(x);//show absilioute of a number



const rull = document.getElementById("roll");
const label = document.getElementById("random");
const min = 1;
const max = 6;
let randomnumber;
roll.onclick = function(){
    randomnumber = Math.floor(Math.random() * max) + min;
    label.textContent = randomnumber;
    console.log(label.textContent)
}

const input = document.getElementById("ageinput");
const submet3 = document.getElementById("submetage");
const paragraph = document.getElementById("myp");
let age;

submet3.onclick = function(){
    age = input.value;
    age = Number(age);

    if(age < 0){
        paragraph.textContent = 'You can\'t be under zero';
    }
    else if(age == 0){
        paragraph.textContent = 'Happy birth! You just born';
    }
    else if(age <= 18){
        paragraph.textContent = 'You can\'t join this site';
    }
    else if(age >= 100){
        paragraph.textContent = 'You are too old'; 
    }
    else if(age > 18 && age < 100){
        paragraph.textContent = 'Your age is good for this site'; 
    }
}



const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const none = document.getElementById("none");
const chekbutton = document.getElementById("tuta");
const result = document.getElementById("resultchek");

chekbutton.onclick = function(){
    if(visa.checked){
        result.textContent = 'You have to pay with Visa';
    }
    else if(mastercard.checked){
        result.textContent = 'You have to pay with MasterCard';
    }
    else if(paypal.checked){
        result.textContent = 'You have to pay with PayPal';
    }
    else if(none.checked){
        result.textContent = 'You do not have to pay';
    }
    else{
        result.textContent = 'You have to check one of t  hese';
    }
}

let name = "bro code";
console.log(name.charAt(2));//show the charcter number like b is zero r is one o is three in brocode
console.log(name.indexOf("o")); //show where is o in the brocode
console.log(name.length);//show how many charecter have name
let getspace = name.trim();//trim dont show the spaces
console.log(getspace);

let repeat = name.repeat(4);
console.log(repeat);

let natejah = name.startsWith("c");//if name start with c then its true if does not it is false
console.log(natejah);

let include = name.includes("  ");// show what include in our code
if (include){
    console.log("dont use white space");
}
else{
    console.log(name)
}

let phone = "1234o32";
let hazf = phone.replaceAll("o", "");//we have replace the o with ""
console.log(hazf);

let slice = phone.slice(0,4);//that show from zero to 4 in the phone the zero is 1 and four is 4
console.log(slice);


let hhh = "123456";

hhh = hhh.padStart(15, 0);//padstart make that we say charechter must be 15 charechter if it less than 15 fill it by zero  it must be in string
console.log(hhh);

let hhh1;
hhh1 = hhh1.padStart(15, 0);//it fill the end 
console.log(hhh1);