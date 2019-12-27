// wait until window is done loading
window.addEventListener('load', () => 
{console.log('page loaded');
  //assign the singleton instance of the app class
  var app = AssignPrototype.Instance;
// run the app
   app();
}, false);