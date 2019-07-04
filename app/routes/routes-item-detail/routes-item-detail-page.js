


//
//
// Beginning of Original
function onNavigatingTo(args) {
    const page = args.object;

    page.bindingContext = args.context;
}

function onBackButtonTap(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}

// function onItemTap(args) {
//     const view = args.view;
//     const page = view.page;
//     const tappedItem = view.bindingContext;

//     page.frame.navigate({
//         // moduleName: "home/home-item-detail/home-item-detail-page",
//         moduleName: "routes/routes-item-detail/routes-item-detail-page",
//         context: tappedItem,
//         animated: true,
//         transition: {
//             name: "slide",
//             duration: 200,
//             curve: "ease"
//         }
//     });
// }
// exports.onItemTap = onItemTap; // NEW
exports.onNavigatingTo = onNavigatingTo;  // Original
exports.onBackButtonTap = onBackButtonTap; // Original
// End of Original
//
//