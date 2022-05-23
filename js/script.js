myArr=[];
vegArr=[];
function pushData(){
    let input=document.getElementById("input").value;
    //append data to the array using push

    myArr.push(input);
    form1.input.value="";
    console.log(myArr);

    //declared a variable where we have to store the value
    let pVal="";
   for(i=0; i<myArr.length; i++){
       pVal = pVal + myArr[i] + "</br>";
       
   }
   //display data on web page
   document.getElementById("pText").innerHTML=pVal;

   }


function popData(){
    //removes last element from the array
    myArr.pop(myArr.length-1);
    console.log('pop:', myArr);
    let pVal="";
    for(i=0;i<myArr.length;i++){
        pVal = pVal + myArr[i] + "</br>";
        
    }
    //display data on web page
    document.getElementById("pText").innerHTML=pVal;
    console.log(myArr);
   }

function shiftData(){
    //removes first element from the array
    myArr.shift();
    let pVal="";
    for(i=0;i<myArr.length;i++){
        pVal = pVal + myArr[i] + "</br>";
        
    }
    //display data on web page
    document.getElementById("pText").innerHTML=pVal;
    console.log(myArr);
}

function unshiftData(){
    //add elements to the first position
    let input=document.getElementById("input").value;
    myArr.unshift(input);
    //console.log(myArr);
    let pVal="";
    for(i=0;i<myArr.length;i++){
        pVal = pVal + myArr[i] + "</br>";
    }
    //display data on web page
    document.getElementById("pText").innerHTML=pVal;
    console.log(myArr);
}

function sliceData(){
    sliced=myArr.slice(0, 2);
    let pVal="";
    for(i=0;i<myArr.length;i++){
        pVal = pVal + myArr[i] + "</br>";
    }
    //display data on web page
    document.getElementById("pText").innerHTML=pVal;
    document.getElementById("output").innerHTML="Top 2 favourite fruits are:" + sliced;
}

function spliceData(){
    const removed=myArr.splice(2);
    document.getElementById("output").innerHTML="Remaining fruits are:" + removed;
}

function lengthData(){
    document.getElementById("output").innerHTML="Total fruits in the list are:" + myArr.length;
}

function reverseData(){
    myArr.reverse();
    document.getElementById("output").innerHTML="Array in reverse direction" + myArr;
}

function joinData(){
    myArr.join("Fruit:");
    console.log(myArr);
document.getElementById("output").innerHTML= myArr.join(" and ");
}


function mapData(){
const newArr=myArr.map(myFunction);
function myFunction(fruit){
    return fruit + fruit; 
}
document.getElementById("output").innerHTML=newArr;
}  

function sortData(){
    myArr.sort();
    document.getElementById("output").innerHTML="Fruits and Vegetables in ascendng order: "+ myArr;
}

function filterData(){
    const fruitlength=myArr.filter((elem, index)=>{
    return elem.length> 6;
    })
    document.getElementById("output").innerHTML="Dsiplay fruits whose length is greater than six letter: " + fruitlength;
}

function fillData(){
    document.getElementById("output").innerHTML=myArr.fill("🍅",0);
}

function reduceData(){
    let sum=myArr.reduce((accum, curr)=>{
return parseInt(accum) + parseInt(curr);
    })
    document.getElementById("output").innerHTML=sum;
}

