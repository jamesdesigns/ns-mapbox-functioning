const observableModule = require("./node_modules/tns-core-modules/data/observable");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = SettingsViewModel;
