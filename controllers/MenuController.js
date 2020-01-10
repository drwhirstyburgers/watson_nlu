const inquirer = require('inquirer')

module.exports = class MenuController {
    constructor(){
        this.mainMenuQestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from the options below",
                choices: [
                    "Add new API key & URL",
                    "Exit"
                ]
            }
        ];
        this.keys = [];
    }

    main() {
        console.log('Welcome to WATSON NLU!');
        inquirer.prompt(this.mainMenuQestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new API key":
                    this.addKeys();
                    break;
                case "Exit":
                    this.exit();
                default:
                    console.log("invalid input");
                    this.main();
            }
        })
    }

    clear() {
        console.log("\x1Bc");
    }

    addKeys(){
        this.clear();
        console.log('add api called');
        this.main();
    }

    exit(){
        console.log("thanks for using the service chump change");
        process.exit();
    }
}