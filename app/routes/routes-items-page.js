const RoutesItemsViewModel = require("./routes-items-view-model");
const routesItemsViewModel = new RoutesItemsViewModel(); // New for MODAL


function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new RoutesItemsViewModel();
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

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




// This is for the Modal implementation
exports.pageLoaded = function(args) {
    const page = args.object;
    page.bindingContext = RoutesItemsViewModel;
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
 // End of the Modal Implementation 




exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
