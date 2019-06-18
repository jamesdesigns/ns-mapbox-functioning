export function getData() {
    return new Promise((resolve, reject) => {
        const dataCopy = JSON.parse(JSON.stringify(data));

        for (let i = 0; i < data.length; i++) {
            (<any>dataCopy[i]).favourite = false;

            // const randomImageId = Math.floor(Math.random() * 7);
            // (<any>dataCopy[i]).image = "~/images/grocery" + randomImageId + ".jpg";
        }

        setTimeout(() => {
            resolve(dataCopy);
        }, 1000);
    });
}

const data = [
    { "id": 1, "Ogden": "2393 S. Wall Ave.", "available": true },
    { "id": 2, "Roy": "4155 S. Sandridge Dr.", "available": true },
    { "id": 3, "Clearfield": "1250 S. State St.", "available": true },
    { "id": 4, "Layton": "150 S. Main St.", "available": true },
    { "id": 5, "Farmington": "450 N. 850 W.", "available": false },
    { "id": 6, "Woods Cross": "	750 S. 800 W.", "available": false },
    { "id": 7, "North Temple": "500 W. North Temple", "available": true },
    { "id": 8, "Salt Lake Central": "250 S. 600 W.", "available": true },
    { "id": 9, "Murray Central": "140 W. Vine St.", "available": true },
    { "id": 10, "South Jordan": "10351 South Jordan Gateway", "available": true },
    { "id": 11, "Draper": "12997 S. FrontRunner Blvd.", "available": false },
    { "id": 12, "Lehi": "3101 N. Ashton Blvd.", "available": true },
    { "id": 13, "American Fork": "782 W. 200 S.", "available": false },
    { "id": 14, "Orem": "1350 W. 900 S.", "available": false },
    { "id": 15, "Provo": "690 S. University Ave.", "available": true }
];