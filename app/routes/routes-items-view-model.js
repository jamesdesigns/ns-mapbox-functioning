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
                description: "Description for Item 1"
            },
            {
                name: "Roy",
                description: "Description for Item 2"
            },
            {
                name: "Clearfield",
                description: "Description for Item 3"
            },
            {
                name: "Layton",
                description: "Description for Item 4"
            },
            {
                name: "Farmington",
                description: "Description for Item 5"
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
