const observableModule = require("tns-core-modules/data/observable");
// This is new for Favorites Plugin
// import { ObservableProperty } from "../observable-property-decorator";
// import { ObservableArray } from "tns-core-modules/data/observable-array";
// import { Observable } from "tns-core-modules/data/observable";
// import { isIOS } from "tns-core-modules/platform";
// import { parse } from "tns-core-modules/ui/builder";
// import { SwipeActionsEventData, ListViewEventData, RadListView, ListViewGridLayout, ListViewLinearLayout } from "nativescript-ui-listview";
// import { getData } from "./data";


// const headerItemTemplate = `
//     <GridLayout class="header-linear">
//         <Label text="Swipe Right to Add to Favorites"
//             horizontalAlignment="center" />
//     </GridLayout>
// `;

// let isListViewLinearLayout: boolean = true;

// export class FavoritesViewModel extends Observable {
//     @ObservableProperty() isBusy: boolean = true;
//     @ObservableProperty() dataItems: ObservableArray<any>;

//     private showFavouritesFilter: boolean = false;

//     constructor() {
//         super();
//         this.isBusy = true;
//         this.showFavouritesFilter = false;
//         this.dataItems = new ObservableArray<any>();

//         getData().then((data) => {
//             this.dataItems.push(data);
//             this.isBusy = false;
//         });
//     }

//     onRadListViewLoaded(args) {
//         const listView: RadListView = args.object;
//         this.toggleHeaderItemTemplate(listView);
//     }

//     private toggleHeaderItemTemplate(listView: RadListView) {
//         if (!isListViewLinearLayout) {
//             listView.headerItemTemplate = undefined;
//         } else {
//             listView.headerItemTemplate = headerItemTemplate;
//         }
//     }

//     selectItemTemplate(item, index, items) {
//         return isListViewLinearLayout ? "linear" : "grid";
//     }

//     toggleFavourite(args) {
//         const image = args.object;
//         const listView = <RadListView>image.page.getViewById("list-view");
//         const itemData = image.bindingContext;
//         if (itemData.favourite) {
//             image.src = "~/images/fav-outline.png";
//             itemData.favourite = false;
//         } else {
//             image.src = "~/images/fav-solid.png";
//             itemData.favourite = true;
//         }

//         listView.notifySwipeToExecuteFinished();
//     }

//     toggleFavouritesFilter(args) {
//         const image = args.object;
//         const listView = <RadListView>image.page.getViewById("list-view");

//         if (this.showFavouritesFilter) {
//             listView.filteringFunction = undefined;
//             image.src = "~/images/fav-outline.png";
//             this.showFavouritesFilter = false;
//         } else {
//             listView.filteringFunction = (item) => {
//                 return item.favourite;
//             };
//             image.src = "~/images/fav-solid.png";
//             this.showFavouritesFilter = true;
//         }
//     }

//     changeLayout(args) {
//         const image = args.object;
//         const listView = <RadListView>image.page.getViewById("list-view");

//         if (isListViewLinearLayout) {
//             const gridLayout = new ListViewGridLayout();
//             isIOS ? gridLayout.itemHeight = 160 : null;
//             gridLayout.spanCount = 2;
//             listView.swipeActions = false;
//             isListViewLinearLayout = false;
//             this.toggleHeaderItemTemplate(listView);
//             image.src = "~/images/layout-linear.png";
//             listView.listViewLayout = gridLayout;
//         } else {
//             const linearLayout = new ListViewLinearLayout();
//             listView.swipeActions = true;
//             isListViewLinearLayout = true;
//             this.toggleHeaderItemTemplate(listView);
//             image.src = "~/images/layout-grid.png";
//             listView.listViewLayout = linearLayout;
//         }
//     }

//     onPullToRefreshInitiated(args: ListViewEventData) {
//         getData().then((data) => {
//             this.dataItems.splice(0);
//             this.dataItems.push(data);
//             const listView = args.object;
//             listView.notifyPullToRefreshFinished();
//         });
//     }
// }
// The End of the new

// function FavoritesViewModel() {
//     const viewModel = observableModule.fromObject({
//         /* Add your view model properties here */
//     });

//     return viewModel;
// }




// Original
// module.exports = FavoritesViewModel;
