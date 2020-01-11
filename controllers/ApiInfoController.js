const inquirer = require("inquirer");
const ApiInfo = require("../db/models").ApiInfo;

module.exports = class ApiInfoController {
    constructor(){
        this.apiInfos = [];
        this.addApiInfoQuestions =[
            {
                type: "input",
                name: "name",
                message: "Name this API info y'bish - ",
                validate(val) {
                    return val !== "";
                }
            },
            {
                type: "input",
                name: "url",
                message: "Now gimme the URL from IBM - ",
                validate(val){
                    return val !== "";
                }
            },
            {
                type: "input",
                name: "key",
                message: "Aight, cool, now the key to the whip - ",
                validate(val){
                    return val !== "";
                }
            }
        ]
    }

    addInfos(name, url, key){
        return ApiInfo.create({name, url, key})
    }
}