
var btnf = document.querySelector("#f")
var btnb = document.querySelector("#b")
var image = document.querySelector("#bkl");
var cursor=document.querySelector("#cursor");
var body=document.querySelector("body");
var h3=document.querySelector("h3");
var h2=document.querySelector("h2")
var text=["Over Ear Bluetooth Headphones with Upto 15 Hours Playback, Adaptive Headband, 40mm Dynamic Driver, 300 mah Battery","That won’t stop until you do, with a standby time of 300 to 400 hours powered by a rechargeable 300mAh battery and play it your way.","That comes via the 40mm premium drivers, so just slip into the sound and slip into the comfort and let your visions crystallize with the wild streak of your rhythm","Based around a smooth comfort fit design coated with a sleek matte finish and look sharp and stay sharp, the boAt headway.","So that you can control your music with no hiccups, communicate seamlessly using the in-build mic and so that you can always stay in the zone."]
var heading=['Airdopes A56 Headsets','Up to 15 Hours of Audio Excellence','HD Immersive Audio','Adaptive Ear Cups and Headband','Easy Operational Controls']
body.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x + "px";
    cursor.style.top=dets.y + "px";
})
var k=0;
btnf.onclick=function(){
        k++;
        image.src='f'+k+'.webp';
        h3.innerHTML=text[k];
        h2.innerHTML=heading[k];
        if(k>4){
            image.src='f'+0+'.webp';
            h3.innerHTML=text[0];
            h2.innerHTML=heading[0];
            k=0;  
        }
        else{
            k=k;
        }
    }
 btnb.onclick=function(){
        if(k<1){
            k=4;
            image.src='f'+k+'.webp';
            h3.innerHTML=text[k];
            h2.innerHTML=heading[k];
        }
        else{
            k=k;
            k--;
            image.src='f'+k+'.webp';
            h3.innerHTML=text[k];
            h2.innerHTML=heading[k];
        }
      
    }




