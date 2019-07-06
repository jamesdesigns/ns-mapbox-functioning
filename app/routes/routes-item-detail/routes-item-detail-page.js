const dialogsModule = require("ui/dialogs");

exports.pageLoaded = function (args) {
  const page = args.object;
};

exports.alertOgdenN = function () {
  dialogsModule.alert({
    title: "North Bound",
    titletwo: "South Bound",
    message: "10:00 AM  11:00 AM  12:00 PM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM",
    messagetwo: "8:00 AM  9:00 AM  10:00 AM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM",
    okButtonText: "CLOSE"
  }).then(() => {
    console.log("The user closed the alert.");
  });
};

exports.alertOgdenS = function () {
  dialogsModule.alert({
    title: "South Bound",
    message: `8:00 AM  9:00 AM  10:00 AM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
    okButtonText: "CLOSE"
  }).then(() => {
    console.log("The user closed the alert.");
  });
};



// const RoutesItemViewModel = require("./routes-item-view-model");
// const routesItemViewModel = new RoutesItemViewModel();

// exports.pageLoaded = function(args) {
//   const page = args.object;
//   page.bindingContext = RoutesItemViewModel;
// }

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


// All Original -- BELOW THIS LINE
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = args.context;
}

function onBackButtonTap(args) {
    const view = args.object;
    const page = view.page;
    page.frame.goBack();
}

exports.onNavigatingTo = onNavigatingTo; 
exports.onBackButtonTap = onBackButtonTap; 
