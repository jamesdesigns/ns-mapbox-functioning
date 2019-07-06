const observableModule = require("tns-core-modules/data/observable");

const topmost = require("tns-core-modules/ui/frame").topmost; // New for MODAL

// New. This helps the onboarding start with Welcome and then
// proceed with the TabView on the remaining pages of the app
const application = require("tns-core-modules/application");

// End of adding new addition to the following above

function RoutesItemsViewModel() {
    const viewModel = observableModule.fromObject({
        // New for Modal
        showModal() {
            const page = topmost().currentPage;
            page.showModal(
              "./modal/modal", // Path to the xml file of modal without extension
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
          },
          // End of New For Modal
          


        items: [
            {
                name: "Ogden",
                station: "Ogden Station",
                description: "2393 South Wall Avenue",
                description2: "Ogden, UT 84511",
                times: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Roy",
                station: "Roy Station",
                description: "4155 S. Sandridge Dr.",
                description2: "Roy, UT"
            },
            {
                name: "Clearfield",
                station: "Clearfield Station",
                description: "1250 S. State St.",
                description2: "Clearfield, UT"
            },
            {
                name: "Layton",
                station: "Layton Station",
                description: "150 S. Main St.",
                description2: "Layton, UT"
            },
            {
                name: "Farmington",
                station: "Farmington Station",
                description: "450 N. 850 W.",
                description2: "Farmington, UT"
            },
            {
                name: "Woods Cross",
                station: "Wood Cross Station",
                description: "750 S. 800 W.",
                description2: "Woods Cross, UT"
            },
            {
                name: "North Temple",
                station: "North Temple Station",
                description: "500 W. North Temple",
                description2: "Salt Lake City, UT"
            },
            {
                name: "Salt Lake Central",
                station: "Salt Lake Central",
                description: "250 S. 600 W.",
                description2: "Salt Lake City, UT"
            },
            {
                name: "Murray Central Station",
                station: "Murray Central Station",
                description: "140 W. Vine St.",
                description2: "Murray, UT"
            },
            {
                name: "South Jordan Station",
                station: "South Jordan Station",
                description: "10351 South Jordan Gateway",
                description2: "South Jordan, UT"
            },
            {
                name: "Draper Station",
                station: "Draper Station",
                description: "12997 S. FrontRunner Blvd.",
                description2: "Draper, UT"
            },
            {
                name: "Lehi Station",
                station: "Lehi Station",
                description: "3101 N. Ashton Blvd.",
                description2: "Lehi, UT"
            },
            {
                name: "American Fork Station",
                station: "American Fork Station",
                description: "782 W. 200 S.",
                description2: "American Fork, UT"
            },
            {
                name: "Orem Central",
                station: "Orem Central Station",
                description: "1350 W. 900 S.",
                description2: "Orem, UT"
            },
            {
                name: "Provo Station",
                station: "Provo Station",
                description: "690 S. University Ave.",
                description2: "Provo, UT"
            }
        ],
        
    });

    return viewModel; // New for Modal
}

module.exports = RoutesItemsViewModel;

application.run({ moduleName: "app-root" });
