const observableModule = require("tns-core-modules/data/observable");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        items: [
            {
                name: "Delays",
                description: "List of Current Delays"
            },
            {
                name: "Privacy",
                description: "UTA Motions Privacy Policy"
            },
            {
                name: "Alerts",
                description: "UTA Frontrunner Alerts"
            },
            {
                name: "Feedback",
                description: "We Want Your Feedback"
            }
        ]
    });

    return viewModel;
}

module.exports = SettingsViewModel;
