

import {program} from 'commander';
// import chalk from "chalk";
import init from "./actions/init.js";
import {actionMap} from "./config.js";
import getHelp from "./actions/help.js";

Object.keys(actionMap).forEach((action) => {
    program
        .command(action)
        .action(() => {
            switch (action) {
                case 'init':
                    // process.argv 获取node所有的进程有关信息，是一个数组
                    // 第一个元素是node文件绝对路径，第二个元素是当前执行的js的绝对路径
                    // 后面的元素则是执行时提供的参数
                    init(...process.argv.slice(3))
                    break
                case 'getHelp':
                    getHelp(...process.argv.slice(3))
                    break

                default:
                    break
            }

        })
        .description(actionMap[action].description)
        .alias(actionMap[action].alias) //别名
})

// function help() {
//     Object.keys(actionMap).forEach((action) => {
//         console.log('\r\nUsage:');
//         Object.keys(actionMap).forEach((action) => {
//             actionMap[action].usages.forEach(usage => {
//                 console.log('  - ' + usage);
//             });
//         });
//         console.log('\r');
//     })
// }

// // 修改帮助信息的首行提示
// program.usage('<command> [options]')
//
// // shixw-cli -h
// program.on('-h', help);
// // shixw-cli --help
// program.on('--help', help);

// shixw-cli -v
// 版本选项也支持自定义设置选项名称，可以在.version()方法里再传递一些参数（长选项名称、描述信息），用法与.option()方法类似。

// program.version(version, '-V --version', 'get version')

// shixw-cli 不带参数时,展示帮助信息
// if (!process.argv.slice(2).length) {
//     // 只展示帮助信息，不退出程序
//     program.outputHelp(make_green);
// }

// function make_green(txt) {
//     return chalk.green(txt);
// }

// program.parse() 解析
// 解析node进程，打印在控制台
program.parse(process.argv);
