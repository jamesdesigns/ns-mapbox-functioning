// NEW
var frameModule = require('tns-core-modules/ui/frame');
// End
const TestViewModel = require("./test-view-model");
const testViewModel = new TestViewModel();


exports.pageLoaded = function(args) {
  const page = args.object;
  page.bindingContext = testViewModel;
}
exports.showModal = () => {
  // alert('This is the Modal!')

  // NEW
  var topmost = frameModule.topmost();
  topmost.navigate("map/map-page");
  // END
}





// exports.showModal = function (args) {
//   const page = args.object.page;
//   page.showModal(
//     "./modal/modal", // Path to the xml file of modal without extension
//     { // Pass any context you want to use in the modal
//       // you can pass anything you want as the context, even a viewModel!
      
//       context: "Some data",
//       foodType: "Veg",
//       food: [
//         {
//           name: "Carrot"
//         },
//         {
//           name: "Potatoe"
//         }
//       ]
//     },
//     function closeCallback(result) { // you can customise this callback the way you want
//       // if modal was closed without submitting, this will still get called
//       // so check if the parameters are defined before you use them
//       if (result) {
//         console.log("Result was: ", result);
//       }
//     },
//     false // Full screen or not? (on iOS the modal is fullscreen irrespective of this value)
//   );
// }
