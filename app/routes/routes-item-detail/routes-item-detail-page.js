
//
//
// Beginning of Original
function onNavigatingTo(args) {
    const page = args.object;

    page.bindingContext = args.context;
}

function onBackButtonTap(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}

// function onItemTap(args) {
//     const view = args.view;
//     const page = view.page;
//     const tappedItem = view.bindingContext;

//     page.frame.navigate({
//         // moduleName: "home/home-item-detail/home-item-detail-page",
//         moduleName: "routes/routes-item-detail/routes-item-detail-page",
//         context: tappedItem,
//         animated: true,
//         transition: {
//             name: "slide",
//             duration: 200,
//             curve: "ease"
//         }
//     });
// }
// exports.onItemTap = onItemTap; // NEW
exports.onNavigatingTo = onNavigatingTo;  // Original
exports.onBackButtonTap = onBackButtonTap; // Original
// End of Original
//
//

exports.showModal = function (args) {
    const page = args.object.page;
    page.showModal(
      "./modal/modal", // Path to the xml file of modal without extension
      { // Pass any context you want to use in the modal
        // you can pass anything you want as the context, even a viewModel!
        context: "Some data",
        foodType: "Veg",
        food: [
          {
            name: "Carrot"
          },
          {
            name: "Potatoe"
          }
        ]
      },
      function closeCallback(result) { // you can customise this callback the way you want
        // if modal was closed without submitting, this will still get called
        // so check if the parameters are defined before you use them
        if (result) {
          console.log("Result was: ", result);
        }
      },
      false // Full screen or not? (on iOS the modal is fullscreen irrespective of this value)
    );
  }
