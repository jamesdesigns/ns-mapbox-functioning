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
                address: "2393 South Wall Avenue",
                city: "Ogden, UT 84511",
                times: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Roy",
                station: "Roy Station",
                address: "4155 S. Sandridge Dr.",
                city: "Roy, UT",
                times: `6:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Clearfield",
                station: "Clearfield Station",
                address: "1250 S. State St.",
                city: "Clearfield, UT",
                times: `4:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Layton",
                station: "Layton Station",
                address: "150 S. Main St.",
                city: "Layton, UT",
                times: `1:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Farmington",
                station: "Farmington Station",
                address: "450 N. 850 W.",
                city: "Farmington, UT",
                times: `3:30 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Woods Cross",
                station: "Wood Cross Station",
                address: "750 S. 800 W.",
                city: "Woods Cross, UT",
                times: `1:30 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "North Temple",
                station: "North Temple Station",
                address: "500 W. North Temple",
                city: "Salt Lake City, UT",
                times: `2:15 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Salt Lake Central",
                station: "Salt Lake Central",
                address: "250 S. 600 W.",
                city: "Salt Lake City, UT",
                times: `1:20 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Murray Central Station",
                station: "Murray Central Station",
                address: "140 W. Vine St.",
                city: "Murray, UT",
                times: `2:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "South Jordan Station",
                station: "South Jordan Station",
                address: "10351 South Jordan Gateway",
                city: "South Jordan, UT",
                times: `12:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Draper Station",
                station: "Draper Station",
                address: "12997 S. FrontRunner Blvd.",
                city: "Draper, UT",
                times: `1:40:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Lehi Station",
                station: "Lehi Station",
                address: "3101 N. Ashton Blvd.",
                city: "Lehi, UT",
                times: `3:10 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "American Fork Station",
                station: "American Fork Station",
                address: "782 W. 200 S.",
                city: "American Fork, UT",
                times: `6:10 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Orem Central",
                station: "Orem Central Station",
                address: "1350 W. 900 S.",
                city: "Orem, UT",
                times: `5:10 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Provo Station",
                station: "Provo Station",
                address: "690 S. University Ave.",
                city: "Provo, UT",
                times: `4:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            }
        ],
        
    });

    return viewModel; // New for Modal
}

module.exports = RoutesItemsViewModel;

application.run({ moduleName: "app-root" });
