function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
}

function draw(){
    image(webcam ,0 , 0 , 300 , 300);
    classifier.classify(webcam , gotResult);
}

function modelLoaded(){
    console.log("Model Loaded!!");
}

function gotResult(error , result){
    if(error){
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}