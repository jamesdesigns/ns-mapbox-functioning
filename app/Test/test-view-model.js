const observableModule = require("tns-core-modules/data/observable");
const topmost = require("tns-core-modules/ui/frame").topmost;



function TestViewModel() {
  const viewModel = observableModule.fromObject({
    showModal() {
      const page = topmost().currentPage;
      page.showModal(
        "./modal/modal.xml", // Path to the xml file of modal without extension
        { // Pass any context you want to use in the modal
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
          console.log("Result was: ", result);
        },
        false // Full screen or not? (on iOS the modal is fullscreen irrespective of this value)
      );
    }
  });

  return viewModel;
}

module.exports = TestViewModel;