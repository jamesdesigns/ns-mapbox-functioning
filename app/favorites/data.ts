export function getData() {
    return new Promise((resolve, reject) => {
        const dataCopy = JSON.parse(JSON.stringify(data));

        for (let i = 0; i < data.length; i++) {
            (<any>dataCopy[i]).favourite = false;

            const randomImageId = Math.floor(Math.random() * 7);
            (<any>dataCopy[i]).image = "~/images/grocery" + randomImageId + ".jpg";
        }

        setTimeout(() => {
            resolve(dataCopy);
        }, 1000);
    });
}

const data = [
    { "id": 1, "Ogden": "Tart Shells - Sweet, 2", "available": true },
    { "id": 2, "Roy": "Chocolate Eclairs", "available": true },
    { "id": 3, "Clearfield": "Oil - Shortening - All - Purpose", "available": true },
    { "id": 4, "Layton": "Lid - 10,12,16 Oz", "available": true },
    { "id": 5, "Farmington": "Duck - Fat", "available": false },
    { "id": 6, "Woods Cross": "Chocolate Bar - Reese Pieces", "available": false },
    { "id": 7, "North Temple": "Muffin Orange Individual", "available": true },
    { "id": 8, "Salt Lake Central": "Pastry - Cherry Danish - Mini", "available": true },
    { "id": 9, "Murray Central": "Wine - Maipo Valle Cabernet", "available": true },
    { "id": 10, "South Jordan": "Juice - Orangina", "available": true },
    { "id": 11, "Draper": "Meldea Green Tea Liquor", "available": false },
    { "id": 12, "Lehi": "Beef Flat Iron Steak", "available": true },
    { "id": 13, "American Fork": "Foam Espresso Cup Plain White", "available": false },
    { "id": 14, "Orem": "Yeast - Fresh, Fleischman", "available": false },
    { "id": 15, "Provo": "Okra", "available": true }
];