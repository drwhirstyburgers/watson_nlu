const inquirer = require('inquirer')
const ApiInfoController = require("./ApiInfoController")

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
        this.keys = new ApiInfoController();
    }

    main() {
        console.log('Welcome to WATSON NLU!');
        inquirer.prompt(this.mainMenuQestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new API key & URL":
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
        inquirer.prompt(this.keys.addApiInfoQuestions).then((answers) => {
            this.keys.addInfos(answers.name, answers.url, answers.key).then((info) => {
                console.log("API Info was added successfully m'guy/m'girl/m'them");
                this.main();
            }).catch((err) => {
                console.log(err);
                this.main();
            });
        });
    }

    exit(){
        console.log("thanks for using the service chump change");
        process.exit();
    }
}