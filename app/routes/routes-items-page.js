const RoutesItemsViewModel = require("./routes-items-view-model"); // New for Modal
const routesItemsViewModel = new RoutesItemsViewModel(); // New for MODAL

exports.pageLoaded = function(args) {
    const page = args.object;
    page.bindingContext = routesItemsViewModel;
  } // New for Modal

 // THis originally belongs here 
function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new RoutesItemsViewModel();
}

// This originally belongs here
function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    // This originally belongs here
    page.frame.navigate({
        // moduleName: "home/home-item-detail/home-item-detail-page", 
        moduleName: "routes/routes-item-detail/routes-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

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

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
