const SearchViewModel = require("./settings-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SearchViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
