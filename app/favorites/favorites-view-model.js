var Observable = require("tns-core-modules/data/observable").Observable;

// New Testing
// function getFavorites() {
//     return localStorage.getItem("favorites", "[]");
// }
// function setFavorites(data) {
//     return localStorage.setItem("favorites", JSON.stringify(data));
// }

// let data = getFavorites();
// // add new
// data.push({
//     id: "NewFavId"
// });
// // delete existigm oe
// data = data.filter((item) => item.id === "IdToDelete");
// // update application settings
// setFavorites(data);






function getMessage(counter) {
    if (counter <= 0) {
        localStorage.clear();
        console.log("Length", localStorage.length);
        return "Your Favorite!";
    } else {
        console.log("Length", localStorage.length);
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    var test = localStorage.getItem("test");
    console.log("Test: ", test);

    localStorage.setItemObject("test", {a: 1, b: 2});
    var test = localStorage.getItem("test");
    console.log("Test2: ", test);
    viewModel.counter = localStorage.getItem("counter") || 12;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        localStorage.setItem("counter", this.counter);
        this.set("message", getMessage(this.counter));
        
    }

    return viewModel;
}

exports.createViewModel = createViewModel;