// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like span");
const modal = document.getElementsByClassName("hidden")[0];

for(const like of likes){
  like.addEventListener("click", (e)=>{
    mimicServerCall()
    .then(() => {
      if (like.innerHTML === EMPTY_HEART) {
      like.innerHTML = FULL_HEART
      like.classList.add("activated-heart")
    }
    if (like.innerHTML === FULL_HEART){
      like.innerHTML = EMPTY_HEART
      like.classList.remove("activated-heart")
    }
  })
  .catch((error) => {
    modal.classList.remove("hidden")
    setTimeout(()=>{modal.classList.add("hidden")},5000)
    })
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
