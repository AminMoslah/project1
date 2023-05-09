

var img1 = document.getElementById('img');
var par1=document.getElementById("p1")
var button = document.getElementById('myButton');
var button1 = document.getElementById('myButton1');
var array = [
   "https://i.ytimg.com/vi/uJTbuRgX3-8/maxresdefault.jpg",
   "https://i.pinimg.com/originals/b2/10/21/b21021c7c03a3305478b67df4833cd78.jpg",
   "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/news/17000/700/70/Bugatti-Chiron-1.jpg",
   "https://m.media-amazon.com/images/I/71-NwvYZmeL._SL1500_.jpg",
   "https://picolio.auto123.com/auto123-media/lamborghini-aventador-sept-2022-last-2.jpg?scaledown=450"
]
var data1=["chevrolle camaro 13995,00$","supra mk4 full modefayer  60990€", "bugatti veron  1 100 000 €","Nissan GtR R34 89900 €","lamborghini aventador 471900€"]
 var i = 0 

button.onclick = function (){
    if (i<=array.length)
    i++
   
    img1.src = array[i % array.length]
    p1.innerText=data1[i % data1.length]
}
button1.onclick = function (){
  
    i--
    img1.src = array[i]
    p1.innerText=data1[i]
};
 var img = document.getElementById('img1');
 var button2 = document.getElementById('myButton2');
 var button3 = document.getElementById('myButton3');
 var par=document.getElementById("p")
 var imgs = [
    "https://carmart-mediacloud-wp.s3.eu-central-1.amazonaws.com/2023/04/2023-Maybach-S680-Virgil-Abloh.jpg",
    "https://www.automobile-magazine.fr/asset/cms/840x394/73182/config/56004/au-concours-delegance-de-pebble-beach-ce-concept-mercedes-maybach-vision-6-fait-partie-des-vedettes-surprise.jpg",
    "https://www.largus.fr/images/images/rollsboattailbois3.jpg?width=612&quality=80",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20180406115751_suv.jpg&w=700&q=90&c=1",
    "https://www.autospy.net/data/file/spyshot/thumb-3716994314_QzMLWjG2_5416f794031ab6dede121a196f9306f9268ca1b8_700x394.jpg",
    "https://images.caradisiac.com/images/1/5/4/4/201544/S1-essai-video-bmw-xm-751152.jpg"
]
var data=["Maybach S680  250 000 €","maybach vision 6 300.000€","rolls boattai lboi s3 558.000€","rolls royce phantom 625.000$","Audi A6 e  14.980€","bmw xm 7 178.000€"]
var i = 0 
console.log(imgs)
console.log(button3);
console.log( img.src)
button2.onclick = function (){
    if (i<=imgs.length){
        i++
    img.src = imgs[i % imgs.length]
    p.innerText=data[i % data.length]
    }
   
};
button3.onclick = function (){
  
    i--
    img.src = imgs[i]
    p.innerText=data[i]
};
var img2 = document.getElementById('img2');
var p2 = document.getElementById('p2');
 var button4 = document.getElementById('b1');
 var button5 = document.getElementById('b2');
 var photo = [
    "https://static.displate.com/857x1200/displate/2021-08-06/0d6ac0b067892b6122225b3b33478c91_74c2b7240829c34825096880450f0533.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1xECXSv9M3WvSbPIqoGlspLFO82vOkf1Kw&usqp=CAU",
    "https://www.carscoops.com/wp-content/uploads/2022/05/McLaren-MP4-12C.jpg"
 ]
 var arr2=["toyota supra mk4 55.000€","Dodge Charger Srt8 79.920€","maclaren 300.800€"]
 var i = 0 
console.log(photo)
console.log(button5);
console.log( img2.src)
button4.onclick = function (){
    if (i<=photo.length)
    i++
   
    img2.src = photo[i % photo.length]
    p2.innerText=arr2[i % arr2.length]
};
button5.onclick = function (){
  
    i--;
    img2.src=photo[i]
    p2.innerText=arr2[i]
};