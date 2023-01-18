
export const actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: [
            'shixw-cli init projectName'
        ]
    },
    getHelp: {
        description: 'how to use command',
        usages: [
            'shixw-cli getHelp [command]'
        ]
    }
    // config: {
    //     alias: 'cfg',
    //     description: 'config .sCliConfig',
    //     usages: [
    //         'sCli config set <k> <v>',
    //         'sCli config get <k>',
    //         'sCli config remove <k>'
    //     ]
    //
    // },
}

// 配置下载模板的地方，给 github 的 api 使用
// 模板下载地址可配置
export const source = 'fat-rab'
export const templateName = {
    Vue2: 'vue2-admin',
    Vue3: 'vue3-admin'
}
