export default class ControllerScreen {
    constructor( dataStore, dataView ){
        this.startFunction = dataStore.startDrawing;
        this.shiftFunction = dataStore.shiftElement;
        this.regularExprSymb = dataStore.re1;
        this.regularExprEng = dataStore.re2;
        this.storeObj = dataStore;
        this.controlAlllamps = dataStore.storeAllLamps;

        this.startButton = dataView.button;
        this.stopButton = dataView.buttonStop;
        this.inputTextCont = dataView.inputText;        

        this.enterInterval = null;
    }

    addListeners () {
        this.startButton.addEventListener("click", () => {
            if (
                this.inputTextCont.value.match(this.regularExprSymb) ||
                this.inputTextCont.value.match(this.regularExprEng) ||
                this.inputTextCont.value == ""
            ) {
                alert(
                "Вы можете вводить только последовательность букв латинского алфавита без пробелов."
                );
            } else {                
                this.startButton.style.display = "none";                
                
                this.startFunction.call( this.storeObj, this.inputTextCont.value.toLowerCase());
                this.shiftFunction.call( this.storeObj );

                
            }
        });

        this.stopButton.addEventListener('click', () => {
            this.storeObj.stopScreen();                       
        });         
    } 
}