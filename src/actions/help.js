import {actionMap} from "../config.js";
import symbol from "log-symbols";
import chalk from "chalk";

export default function getHelp(action) {
    if(!action){
        console.log(symbol.error, chalk.red('use shixw-cli getHelp [command]'));
        return
    }
    actionMap[action].usages.forEach(usage => {
        console.log('  - ' + usage);
    });
}
