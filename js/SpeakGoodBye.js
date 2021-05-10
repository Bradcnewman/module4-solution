(function () { //added step 6
var byeSpeaker = {}; //added step 7

var speakWord = "Good Bye";
window.byeSpeaker=byeSpeaker;//added step 9


byeSpeaker.speak=function (name) { //added byeSpeaker.speak=
  console.log(speakWord + " " + name);
}
})();  //added  
