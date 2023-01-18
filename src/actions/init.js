import fs from "node:fs";
import inquirer from "inquirer";
import symbol from 'log-symbols';
import chalk from "chalk";
import ora from "ora";
import {downloadTemplate} from "../utils/getTemplate.js";

export default function init(projectName) {
    if (!projectName) {
        console.log(symbol.error, chalk.red('use shixw-cli init [projectName]'));
        return
    }
    // 检测文件是否存在，返回Boolean
    if (!fs.existsSync(projectName)) {
        inquirer.prompt([
            {
                type: 'list',
                choices: ['Vue2', 'Vue3'],
                name: 'vueVersion',
                message: 'Please choose the version of the Vue: '
            },
            {
                name: 'description',
                message: 'Please enter the project description: '
            },
            {
                name: 'author',
                message: 'Please enter the author name: '
            }
        ]).then(async (valueObj) => {
            const {vueVersion, description, author} = valueObj
            const loading = ora('downloading template...')
            loading.start()
            downloadTemplate(vueVersion, projectName).then(() => {
                loading.succeed()
                // 获取下载项目的package.json
                const fileName = `${projectName}/package.json`;
                if (fs.existsSync(fileName)) {
                    const data = fs.readFileSync(fileName).toString()
                    const json = JSON.parse(data)
                    json.name = projectName;
                    json.author = author;
                    json.description = description;
                    fs.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8')
                    console.log(symbol.success, chalk.green('Project initialization finished!'));
                }
            }, () => {
                loading.fail()
            })
        })
    } else {
        // 项目已经存在
        // symbol 用来显示标记状态
        console.log(symbol.error, chalk.red('The project already exists'));
    }
}
