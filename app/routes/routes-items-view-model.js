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
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `9:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Roy",
                station: "Roy Station",
                address: "4155 S. Sandridge Dr.",
                city: "Roy, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `10:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Clearfield",
                station: "Clearfield Station",
                address: "1250 S. State St.",
                city: "Clearfield, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `11:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Layton",
                station: "Layton Station",
                address: "150 S. Main St.",
                city: "Layton, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `12:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Farmington",
                station: "Farmington Station",
                address: "450 N. 850 W.",
                city: "Farmington, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `1:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Woods Cross",
                station: "Wood Cross Station",
                address: "750 S. 800 W.",
                city: "Woods Cross, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `2:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "North Temple",
                station: "North Temple Station",
                address: "500 W. North Temple",
                city: "Salt Lake City, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `3:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Salt Lake Central",
                station: "Salt Lake Central",
                address: "250 S. 600 W.",
                city: "Salt Lake City, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `4:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Murray Central Station",
                station: "Murray Central Station",
                address: "140 W. Vine St.",
                city: "Murray, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `5:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "South Jordan Station",
                station: "South Jordan Station",
                address: "10351 South Jordan Gateway",
                city: "South Jordan, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `7:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Draper Station",
                station: "Draper Station",
                address: "12997 S. FrontRunner Blvd.",
                city: "Draper, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `6:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Lehi Station",
                station: "Lehi Station",
                address: "3101 N. Ashton Blvd.",
                city: "Lehi, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `5:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "American Fork Station",
                station: "American Fork Station",
                address: "782 W. 200 S.",
                city: "American Fork, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `4:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Orem Central",
                station: "Orem Central Station",
                address: "1350 W. 900 S.",
                city: "Orem, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `3:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Provo Station",
                station: "Provo Station",
                address: "690 S. University Ave.",
                city: "Provo, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `2:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            }
        ],
        
    });

    return viewModel; // New for Modal
}

module.exports = RoutesItemsViewModel;

application.run({ moduleName: "app-root" });
