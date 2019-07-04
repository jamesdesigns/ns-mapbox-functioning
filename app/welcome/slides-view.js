const builder = require("tns-core-modules/ui/builder");
const { GridLayout, GridUnitType, ItemSpec } = require("tns-core-modules/ui/layouts/grid-layout");

const slides = require('./slides');

let slidesView;
const gridLayout = new GridLayout();
loadSlides().then((slides) => {
    const row = new ItemSpec(1, GridUnitType.STAR);
    slides.forEach((element, i) => {
        GridLayout.setColumn(element, 0);
        if (i > 0)
            element.opacity = 0;
        gridLayout.addChild(element);
    });
    gridLayout.addRow(row);
});

slidesView = gridLayout;

function loadSlides() {
    return new Promise(function (resolve, reject) {
        const slideViews = [];
        slides.forEach((slide, i) => {
            slideViews.push(builder.parse(slide))
        });

        resolve(slideViews);
    });
};

module.exports = slidesView;
