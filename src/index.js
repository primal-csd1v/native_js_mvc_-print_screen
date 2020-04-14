import viewScreen from "./views/view_screen.js";
import StoreScreen from "./models/store_screen.js";
import ControllerScreen from "./controllers/controller_screen.js";


const storeScreen = new StoreScreen();
viewScreen.init(storeScreen);
viewScreen.startObservRows();
//const screen = new viewScreen( storeScreen );
const controllerScreen = new ControllerScreen( storeScreen, viewScreen );





controllerScreen.addListeners();



storeScreen.startDrawing('foobar');
storeScreen.shiftElement();


// console.log(screen.storeAllLamps);
// console.log(store.storeAllLamps);


// console.log(screen.storeAllLamps);