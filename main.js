Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(dat_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6kvXpXq8w/',modelLoaded);
function modelLoaded() {
    console.log('model loaded');
}
function check() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}
function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accurcy").innerHTML=results[0].confidence.toFixed(3);
    }
}