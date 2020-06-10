// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

document.querySelector('#modal').className = "hidden"

const mdl = () => document.querySelector("#modal")
// mdl().className = "hidden"

document.addEventListener("DOMContentLoaded", () => {
    //mdl().className = "hidden";
    let hearts = document.querySelectorAll(".like-glyph")
    hearts.forEach(n => {n.addEventListener("click", handleLikeClick)})

})

function handleLikeClick(e) {
    console.log(e.target)

    mimicServerCall()
    .then(resp => {
        if (e.target.innerText == EMPTY_HEART) {
            e.target.innerText = FULL_HEART
            e.target.className = "activated-heart"
        }
        else {
            e.target.innerText = EMPTY_HEART
            e.target.className = ""
        }
    })
    .catch((err) => {
        mdl().className = ''
        mdl().lastElementChild.innerText = err
        setTimeout(() => {mdl().className = 'hidden'}, 5000)
    }
    )
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
