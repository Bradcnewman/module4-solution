
(function () {  //added step 2
var helloSpeaker = {}; //added {}; Step 3

var speakWord = "Hello";
window.helloSpeaker= helloSpeaker; //added step 5

helloSpeaker.speak = function (name) {  //added helloSpeaker.speak
  console.log(speakWord + " " + name);
}
})() // added step 2


