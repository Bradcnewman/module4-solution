(function () {

var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// changed names to name

for (var i = 0; i < name.length; i++) {
  
  var firstLetter = name[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(name[i]);
  } else {
    helloSpeaker.speak(name[i]);
  }
}

})();
//© 2021 GitHub, Inc.
//Terms
//Privacy
//Security
//Status
//Docs
//Contact GitHub
//Pricing
//API
//Training
//Blog
//About
