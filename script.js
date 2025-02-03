const btn = document.querySelector("button");
const imgarr = ["https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt134818d279038650/6668df6434f6fb5cd48aac34/beautiful-flowers-rose.jpeg?q=70&width=3840&auto=webp",
    "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg","https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/plumeria-2-Eric-Tessmer-Flickr-1024x708.jpg"]




function abc(){
    let randomx = Math.random()*100;
    let randomy =Math.random()*100;
    let rotate = Math.random()*360;
    let randomimage = Math.floor(Math.random()*imgarr.length);
    return {randomx,randomy,rotate,randomimage};
}




btn.addEventListener("click",()=>{
    const {randomx,randomy,randomimage, rotate}= abc();
    const image = document.createElement("img");
    image.style.position = "absolute"
    image.style.height = "100px";
    image.style.borderRadius = "50px";
    image.style.top = randomy + "%";
    image.style.left = randomx + "%";
    image.style.transform = `rotate(${rotate}deg)`;
    

image.src = imgarr[randomimage];

document.body.appendChild(image);



})
