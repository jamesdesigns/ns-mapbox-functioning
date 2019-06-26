const observableModule = require("tns-core-modules/data/observable");

// New. This helps the onboarding start with Welcome and then
// proceed with the TabView on the remaining pages of the app
const application = require("tns-core-modules/application");

// End of adding new addition to the following above

function RoutesItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Ogden",
                station: "Ogden Station",
                description: "2393 South Wall Avenue",
                description2: "Ogden, UT 84511"
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
                description: "Description for Item 6"
            },
            {
                name: "North Temple",
                description: "Description for Item 7"
            },
            {
                name: "Salt Lake Central",
                description: "Description for Item 8"
            },
            {
                name: "Murray Central Station",
                description: "Description for Item 9"
            },
            {
                name: "South Jordan Station",
                description: "Description for Item 10"
            },
            {
                name: "Draper Station",
                description: "Description for Item 11"
            },
            {
                name: "Lehi Station",
                description: "Description for Item 12"
            },
            {
                name: "American Fork Station",
                description: "Description for Item 12"
            },
            {
                name: "Orem Central",
                description: "Description for Item 12"
            },
            {
                name: "Provo Station",
                description: "Description for Item 12"
            }
        ]
    });

    return viewModel;
}

module.exports = RoutesItemsViewModel;

application.run({ moduleName: "app-root" });
