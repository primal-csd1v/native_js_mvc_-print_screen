import { allLamps } from "./constants/all_lamps";
import { letters } from "./constants/all_letters";

export default class StoreScreen {
    constructor() {
        this.storeAllLamps = allLamps;                
        this.storeAllLetters = letters;
        this.intervalGLobal = null;
        this.re1 = /\W/g;
        this.re2 = /\d/g;
    }

    setAllLampZero() {
      for ( let iy = 0; iy <= 5; iy++ ) {
        for ( let ix = 0; ix <= 4; ix++ ) {
          this.storeAllLamps[iy][ix] = 0;
        }
      }
    }
    setAllLampUndefined() {
      for ( let iy = 0; iy <= 5; iy++ ) {
        this.storeAllLamps[iy].length = 0;
      }
    }
    pushSymbol( symbol ) {
        const current = symbol;
        for ( let i = 0; i < this.storeAllLamps.length; i++ ) {
            this.storeAllLamps[i] = this.storeAllLamps[i].concat(this.storeAllLetters[current][i]);
            this.storeAllLamps[i].push(0);
            this.storeAllLamps[i].push(0);
            this.storeAllLamps[i].push(0);
        }        
      }
    startDrawing( inputText ) {        
      this.setAllLampZero();

      let m = inputText.split( "" );
      let mLength = m.length;
      
      for ( let i = 0; i < mLength; i++ ) {
        let letter = m.shift();
        this.pushSymbol( letter );
      }        
      }           
      shiftElement() {
        this.intervalGLobal = setInterval(() => {
          if ( this.storeAllLamps[0][0] == undefined ) {
            clearInterval( this.intervalGLobal );
          }
          for ( let i = 0; i <= 5; i++ ) {
            this.storeAllLamps[i].shift();
          }
        }, 400);
      }
      stopScreen() {        
        clearInterval(this.intervalGLobal);
        this.setAllLampUndefined();         
      }
}