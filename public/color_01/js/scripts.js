if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // Registration was successful
    console.log('[ServiceWorker] Registration successful with scope:', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('[ServiceWorker] Registration failed: ', err);
  });
}

function myFunctionRed(){
  var msg = new SpeechSynthesisUtterance('red');
  window.speechSynthesis.speak(msg);
}

function myFunctionBlue(){
  var msg = new SpeechSynthesisUtterance('blue');
  window.speechSynthesis.speak(msg);
}

function myFunctionGreen(){
  var msg = new SpeechSynthesisUtterance('green');
  window.speechSynthesis.speak(msg);
}

function myFunctionOrange(){
  var msg = new SpeechSynthesisUtterance('orange');
  window.speechSynthesis.speak(msg);
}


function myFunctionPink(){
  var msg = new SpeechSynthesisUtterance('pink');
  window.speechSynthesis.speak(msg);
}
