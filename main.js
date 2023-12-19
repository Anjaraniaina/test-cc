import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      return ('Rice has been added.');
    }
    return ('There\'s already rice in the rice cooker.');
    
  },

  cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
    } else if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
    } else {
      console.log('The rice is already cooked.');
    }
  },

  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
    } else if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
    } else {
      console.log('Steaming is already in progress.');
    }
  },

  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      this.heatingInProgress = true;
      return ('The rice is now being kept warm.');
    }
    if (!this.ricePresent) {
      return ('Cannot keep warm. The rice cooker is empty.');
    }
    if (!this.riceCooked) {
      return ('Cannot keep warm. The rice is not cooked.');
    } 
    return ('Keeping warm is already in progress.');
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};


export function simulateRiceCooker() {
    displayMenu();
    try {
        let input = parseInt(prompt('Enter your choice: '));
        if(1 <= input <= 6){
            console.log('Invalid choice. Please select a valid option.');
        }
    } catch (error) {
        console.log('Invalid input. Please enter a valid number.');
    }
    switch (input) {
        case 1:
            return riceCooker.addRice();
        case 2:    
            riceCooker.cookRice();
            break;
        case 3:    
            riceCooker.steam();
            break;
        case 4:    
            riceCooker.keepWarm();
            break;
        case 5:    
            riceCooker.removeRice();
            break;
        case 6:    
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!')
            break;
    }
}

simulateRiceCooker();
