 class viewScreen {
    init( dataStore){
        this.button = document.querySelector( ".enterButton" );
        this.buttonStop = document.querySelector( ".stopButton" );
        this.inputText = document.querySelector( ".inputText" );
        this.lightHeight = 6;
        this.lightWidth = 5;
        this.lampsContainer = document.getElementById( "lamps" );
        this.breakElement = null;
        this.lampElement = null;
        this.mainMechInterval = null;
        this.allClassLampArray = null;
        this.storeAllLamps = dataStore.storeAllLamps;
        this.storeLetters = dataStore.storeAllLetters;
        this.createRows();
    }
    createRows() {
        for ( let iy = 0; iy < this.lightHeight; iy++ ) {
            for ( let ix = 0; ix < this.lightWidth; ix++ ) {
                this.lampElement = document.createElement( "div" );
                this.lampElement.id = `${ix}-${iy}`;
                this.lampElement.className = "lamp";
                this.lampsContainer.appendChild(this.lampElement);
            }
            this.breakElement = document.createElement( "br" );
            this.lampsContainer.appendChild(this.breakElement);
        }
        this.allClassLampArray = document.querySelectorAll( ".lamp" );
    }
    startObservRows() {// store.subscribe(() => {

        // })          
        this.mainMechInterval = setInterval(() => {
            for ( let iy = 0; iy <= 5; iy++ ) {
                for ( let ix = 0; ix <= 4; ix++ ) {
                const position = ix + iy * 5;

                if ( this.storeAllLamps[iy][ix] == 0 || this.storeAllLamps[iy][ix] == undefined ) {
                    this.allClassLampArray[position].style.backgroundColor = "DimGrey";
                } else {
                    this. allClassLampArray[position].style.backgroundColor = "PaleGreen";
                }
                }
            }
            if( this.storeAllLamps[0].length == 0 ) {
                this.button.style.display = 'inline-block';                
            }
        }, 100 );
    }
}

export default new viewScreen();