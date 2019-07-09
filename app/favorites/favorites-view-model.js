var Observable = require("tns-core-modules/data/observable").Observable;
// var observableModule = require("tns-core-modules/data/observable");

// // New Testing
// function FavoritesViewModel() {
//     var viewModel = observableModule.fromObject({
//       listPickerCountries: ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
//           "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
//           "Italy", "Jamaica", "Romania", "Russia", "United States"],
//       selectedListPickerIndex: 0,
  
  
//     });
  
//     return viewModel;
//   }
// End of Testing  





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
// module.exports = FavoritesViewModel;