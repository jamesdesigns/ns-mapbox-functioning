const observableModule = require("tns-core-modules/data/observable");
const topmost = require("tns-core-modules/ui/frame").topmost;



function RoutesItemDetailViewModel() {
  const viewModel = observableModule.fromObject({

// This is new for the Modal Feature


// End of the Modal Feature code

// Make a function that works for the alert 

  
        stations: [
            {
                location: "Ogden",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"
            },
            {
                location: "Roy",
                northBound: "7:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Clearfield",
                northBound: "6:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Layton",
                northBound: "5:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Farmington",
                northBound: "4:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Woods Cross",
                northBound: "3:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "North Temple",
                northBound: "2:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Salt Lake Central",
                northBound: "1:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Murray Central",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "South Jordan",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Draper",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Lehi",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "America Fork",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Orem Central",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
            {
                location: "Provo",
                northBound: "8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM",
                southBound: "10:00 AM   11:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM"   
            },
        ],
   







    showModal() {
      const page = topmost().currentPage;
      page.showModal(
        "./modal/modal", // Path to the xml file of modal without extension
        { // Pass any context you want to use in the modal
         
        //     context: "Some data",
        //   foodType: "Veg",
        //   food: [
        //     {
        //       name: "Carrot"
        //     },
        //     {
        //       name: "Potatoe"
        //     }
        //   ]

        },
        function closeCallback(result) { // you can customise this callback the way you want
          console.log("Result was: ", result);
        },
        false // Full screen or not? (on iOS the modal is fullscreen irrespective of this value)
      );
    }
  });

  return viewModel;
}

module.exports = RoutesItemDetailViewModel;