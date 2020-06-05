// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
    console.log("We In Here!")
    let heart1 = document.querySelectorAll(".like-glyph");
    heart1.forEach(heart => {
        heart.addEventListener("click", handleHeart);
    })

})

function handleHeart(event) {

    mimicServerCall()
        .then(function(response) { return response.json })
        .then(function(object) {
            console.log(object);
        })
        .catch(function(error) {
            alert("BAD STUFF!");
            note = event.target
            if (!error.message) {
                note.className = "activated-heart";
            } else {
                let modal = document.querySelector("#modal");
                modal.className = '';
                setTimeout(function() { modal.className = 'hidden'; }, 3000);

                // note.innerHTML = EMPTY_HEART;
            }
        })

}





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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