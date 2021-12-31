img=""
staus=""
object=[]
function preload(){
    img=loadImage("dog_cat.jpg")
}
function setup(){
Canvas=createCanvas(500,400)
Canvas.center()

Object_Detect=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("satus").innerHTML="Status detecting object"
}
function modelloaded(){
    console.log("model loaded")
    staus=true;
    Object_Detect.detect(img,gotresult)
}
function gotresult (error,result){
    if(error){
        console.log(error)
    }
console.log(result)
object=result
}

function draw(){
    image(img,0,0,500,400)
    // fill("red")
    // noStroke()
    // text("Dog",40, 90)
    // noFill()
    // stroke("red")
    // rect(30,40,300,360)
    // fill("green")
    // noStroke()
    // text("Cat",300,100)
    // noFill()
    // stroke("green")
    // rect(200,80,250,300)

    if(staus !=""){
        for(vish=0; vish=object.length;vish++){
            document.getElementById("satus").innerHTML="Status:Object Detected"
            // percentag=floor(object[vish].confidence*100)
            fill("blue")
            text(object[vish].label+" ",object[vish].x,object[vish].y)
            noFill()
            stroke("blue")
            rect(object[vish].x,object[vish].y,object[vish].width,object[vish].height)
    }
}
}