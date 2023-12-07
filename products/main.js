var imgs = document.querySelectorAll(".box img");
var background = document.querySelector(".transparent");
var centerImg = document.querySelector(".child-img");
var closeBtn = document.querySelector("#close");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var currentIndex = 0;

// # show light screen
for(var i=0; i<imgs.length; i++){
    imgs[i].addEventListener("click",(e)=>{

        let imgSrc = e.target.getAttribute("src");
        // currentIndex = imgs.indexOf(e.target);         /////// ERROR
        console.log(currentIndex);

        background.style.display = "flex";
        centerImg.style.display = "flex";
        centerImg.style.backgroundImage = `url(${imgSrc})`;
    });
}

// # close
closeBtn.addEventListener("click",()=>{
    background.style.display = "none";
});

// # next
next.addEventListener("click",()=>{
    currentIndex++;
    if(currentIndex == imgs.length){
        currentIndex = 0 ;
    }
    let imgSrc = imgs[currentIndex].getAttribute('src');
    centerImg.style.backgroundImage = `url(${imgSrc})`;
});

// # prev
prev.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex == -1){
        currentIndex = imgs.length-1;
    }
    let imgSrc = imgs[currentIndex].getAttribute('src');
    centerImg.style.backgroundImage = `url(${imgSrc})`;
});