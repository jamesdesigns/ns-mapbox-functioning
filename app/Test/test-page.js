const dialogsModule = require("tns-core-modules/ui/dialogs");

exports.pageLoaded = function (args) {
  const page = args.object;
};

exports.alertON = function () {
  dialogsModule.alert({
    title: "North Bound",
    titletwo: "South Bound",
    message: "10:00 AM  11:00 AM  12:00 PM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM",
    messagetwo: "8:00 AM  9:00 AM  10:00 AM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM",
    okButtonText: "CLOSE"
  }).then(() => {
    console.log("The user closed the alert.");
  });
};

exports.alertOS = function () {
  dialogsModule.alert({
    title: "South Bound",
    message: "8:00 AM  9:00 AM  10:00 AM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM 10:35 PM",
    okButtonText: "CLOSE"
  }).then(() => {
    console.log("The user closed the alert.");
  });
};

exports.confirm = function () {
  dialogsModule.confirm({
    title: "North Bound",
    message: "10:00 AM  11:00 AM  12:00 PM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM",
    okButtonText: "CLOSE",
    cancelButtonText: "Cancel text",
    neutralButtonText: "Neutral text"
  }).then((result) => {
    // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
    console.log("Dialog result: " + result);
  });
};

exports.prompt = function () {
  dialogsModule.prompt({
    title: "North Bound",
    message: "10:00 AM  11:00 AM  12:00 PM  2:00 PM  3:30 PM 4:00 PM  7:00 PM  10:00 PM",
    okButtonText: "CLOSE",
    // cancelButtonText: "Cancel text",
    // neutralButtonText: "Neutral text",
    // defaultText: "Default text",
    // inputType: dialogsModule.inputType.email
  }).then((result) => {
    // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
    console.log("Dialog result: " + result.result);
    console.log("Text: " + result.text);
  })
};

exports.login = function () {
  dialogsModule.login({
    title: "Your title",
    message: "Your message",
    okButtonText: "Your button text",
    cancelButtonText: "Cancel text",
    neutralButtonText: "Neutral text",
    userName: "User name label text",
    password: "Password label text"
  }).then((result) => {
    // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
    console.log("Dialog result: " + result.result);
    console.log("Username: " + result.userName);
    console.log("Password: " + result.password);
  });
};

exports.action = function () {
  dialogsModule.action({
    message: "Your message",
    cancelButtonText: "Cancel text",
    actions: ["Option1", "Option2"]
  }).then((result) => {
    if (result == "Option1") {
      console.log("The user selected option 1.");
    } else {
      console.log("The user selected option 2.");
    }
  });
};
