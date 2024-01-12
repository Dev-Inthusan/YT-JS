const goats = ["Ronaldo", "Messi","Neymar"];
console.log(goats.at(0))
// it's starting count 0,1,2,3...
console.log(goats[goats.length -1])
// it's different negative count,counts behind to count 

// function
function hara(){
    console.log("hi there")
    }
    hara()
    // it's showed above the msg 
    
    var j = 2;
    var k = 3;
     
    function add(){
        console.log(j+k)
    }
    add()
    
    var factor = "Surya"
    var fmovie = "Rolex"
    
    function favourite(){
      console.log("favourite actor is:"+ factor)
      console.log("favourite movie is:"+fmovie)
    }
      favourite()
    
      function bd(a,b){
        console.log(a+b)
      }
      bd(5,6)
    
    
    function area(l,b){
        var a = l*b
        console.log("area is:"+a)
    }
    var length=10
    var breadth=15
    
    area(10,15)

    // return
    function who(){
        return "jawan"
    }
    var a = who()
    console.log(a)

    function add(a,b){
        return(a+b)
    }
    var total = add(8,7)
    console.log(total)

    function billie(){
        return "Ellish"
    }
    var b = billie()
    console.log(b)

    function bi(a,b){
        return(a*b)
    }
    var net = bi(8,9)
    console.log(net)


    // if , else

    if(false){
        console.log("it's true")
    }
    else{
        console.log("it's false")
    }

    var rain = false

    if(rain){
        console.log("take an umbrella")
    }
    else{
        console.log("No need an umbrella")
    }

    var finish = true

    if(finish){
        console.log("Great job")
    }
    else{
        console.log("You should finished homework")
    }

// and && or || not!
console.log(true && true && false)
// if one time false in that's false,All are true that's true

console.log(false || false|| true)
// if one true in that's true 

console.log(!true)
console.log(!false)
// it's neagative 

var color = "yellow"

if(color == "red"){
    console.log("stop")
}

if(color == "yellow"){
    console.log("get ready")
}

if(color== "green"){
    console.log("Start")
}

var season = "winter"

if(season == "spring"){
    console.log("enjoy thre blooming flowers")

}

if(season == "summer"){
    console.log("have fun")
}

if(season == "autumn"){
    console.log("Admire the colourfull trees")
}

if(season == "winter"){
    console.log("stay warm")
}

var score = 70

if(40<55){
    console.log("You need to improve")
}
if(70>55){
    console.log("great")
}

var scores = 69

if(scores<40){
console.log("well try")
}

else if(scores>50 && scores<=70){
    console.log("Average")
}
else if(scores>70 ){
    console.log("Excellent")
}

// loop

// for(count=1;count<=3;count+1){
//     console.log(count)
// }



