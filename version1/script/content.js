let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
// ulHeader.appendChild(liViewPosts);

liViewPosts.classList.add(".global-nav__primary-item");
// liViewPosts.innerHTML="testtest";

let aViewPosts=document.createElement("a");

aViewPosts.setAttribute("target","_blank");
aViewPosts.setAttribute("href","https://www.linkedin.com/my-items/saved-posts/");
aViewPosts.classList.add("app-aware-link","gobal-nav__primary-link");
// aViewPosts.innerHTML="Saved";

let divOuter=document.createElement("div");
divOuter.classList.add("ivm-image-view-model","global-nav__icon-ivm");

let divInner=document.createElement("div");
divInner.classList.add("ivm-image-attr__img-wrapper","display-flex");

let img=document.createElement("img");
img.setAttribute("src",chrome.runtime.getURL("Images/saved-icon.png"));
img.setAttribute("id","saved_image");

divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);



let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12","break-words","block","t-black--light","t-normalglobal-nav__primary-link-text");
spanViewPosts.innerHTML="Saved";

aViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);


document.addEventListener("keydown",handlekbd);
function handlekbd(event){
    console.log(event.key);
    if(event.shiftKey && event.altKey && event.code==="KeyO"){
        console.log("keyboard");
        aViewPosts.click();
    }
  
}
// speech recognition
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous=true;
// speechRecognition.interimResults=true;
speechRecognition.lang="en-in";
speechRecognition.start();


speechRecognition.onresult=(event)=>{
    let transcript = event.results[event.resultIndex][0].transcript;
    console.log(event);
    if(transcript.trim().toLowerCase().includes("open post")){
        aViewPosts.click();
    }
};

