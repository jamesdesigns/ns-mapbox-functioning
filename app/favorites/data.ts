// export function getData() {
//     return new Promise((resolve, reject) => {
//         const dataCopy = JSON.parse(JSON.stringify(data));

//         for (let i = 0; i < data.length; i++) {
//             (<any>dataCopy[i]).favourite = false;
//         }

//         setTimeout(() => {
//             resolve(dataCopy);
//         }, 1000);
//     });
// }

// const data = [
//     { "id": 1, "Ogden": "2393 S. Wall Ave.", "available": true },
//     { "id": 2, "Roy": "4155 S. Sandridge Dr.", "available": true },
//     { "id": 3, "Clearfield": "1250 S. State St.", "available": true },
//     { "id": 4, "Layton": "150 S. Main St.", "available": true },
//     { "id": 5, "Farmington": "450 N. 850 W.", "available": false },
//     { "id": 6, "Woods Cross": "	750 S. 800 W.", "available": false },
//     { "id": 7, "North Temple": "500 W. North Temple", "available": true },
//     { "id": 8, "Salt Lake Central": "250 S. 600 W.", "available": true },
//     { "id": 9, "Murray Central": "140 W. Vine St.", "available": true },
//     { "id": 10, "South Jordan": "10351 South Jordan Gateway", "available": true },
//     { "id": 11, "Draper": "12997 S. FrontRunner Blvd.", "available": false },
//     { "id": 12, "Lehi": "3101 N. Ashton Blvd.", "available": true },
//     { "id": 13, "American Fork": "782 W. 200 S.", "available": false },
//     { "id": 14, "Orem": "1350 W. 900 S.", "available": false },
//     { "id": 15, "Provo": "690 S. University Ave.", "available": true }
// ];

// export function getData() {
//     return new Promise((resolve, reject) => {
//         const dataCopy = JSON.parse(JSON.stringify(data));

//         for (let i = 0; i < data.length; i++) {
//             (<any>dataCopy[i]).favourite = false;

//             const randomImageId = Math.floor(Math.random() * 7);
//             (<any>dataCopy[i]).image = "~/images/grocery" + randomImageId + ".jpg";
//         }

//         setTimeout(() => {
//             resolve(dataCopy);
//         }, 1000);
//     });
// }

// const data = [
//     { "id": 1, "product": "Tart Shells - Sweet, 2", "price": "$2.46", "available": true },
//     { "id": 2, "product": "Chocolate Eclairs", "price": "$8.20", "available": true },
//     { "id": 3, "product": "Oil - Shortening - All - Purpose", "price": "$5.22", "available": true },
//     { "id": 4, "product": "Lid - 10,12,16 Oz", "price": "$2.82", "available": true },
//     { "id": 5, "product": "Duck - Fat", "price": "$7.47", "available": false },
//     { "id": 6, "product": "Chocolate Bar - Reese Pieces", "price": "$5.87", "available": false },
//     { "id": 7, "product": "Muffin Orange Individual", "price": "$2.93", "available": true },
//     { "id": 8, "product": "Pastry - Cherry Danish - Mini", "price": "$9.32", "available": true },
//     { "id": 9, "product": "Wine - Maipo Valle Cabernet", "price": "$8.62", "available": true },
//     { "id": 10, "product": "Juice - Orangina", "price": "$2.74", "available": true },
//     { "id": 11, "product": "Meldea Green Tea Liquor", "price": "$9.01", "available": false },
//     { "id": 12, "product": "Beef Flat Iron Steak", "price": "$2.41", "available": true },
//     { "id": 13, "product": "Foam Espresso Cup Plain White", "price": "$6.82", "available": false },
//     { "id": 14, "product": "Yeast - Fresh, Fleischman", "price": "$6.18", "available": false },
//     { "id": 15, "product": "Okra", "price": "$6.56", "available": true },
//     { "id": 16, "product": "Oysters - Smoked", "price": "$2.59", "available": false },
//     { "id": 17, "product": "Coffee Caramel Biscotti", "price": "$2.14", "available": true },
//     { "id": 18, "product": "Savory", "price": "$3.15", "available": false },
//     { "id": 19, "product": "Veal - Inside", "price": "$4.75", "available": false },
//     { "id": 20, "product": "Wine - Red, Gallo, Merlot", "price": "$1.26", "available": true },
//     { "id": 21, "product": "Oil - Macadamia", "price": "$8.61", "available": true },
//     { "id": 22, "product": "Spring Roll Wrappers", "price": "$0.62", "available": false },
//     { "id": 23, "product": "Shortbread - Cookie Crumbs", "price": "$4.11", "available": true },
//     { "id": 24, "product": "Puff Pastry - Sheets", "price": "$5.58", "available": true },
//     { "id": 25, "product": "Appetizer - Assorted Box", "price": "$6.90", "available": true }
// ];
