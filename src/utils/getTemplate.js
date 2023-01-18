import downloadGit from 'download-git-repo';
import {source, templateName} from "../config.js"

export async function downloadTemplate(vueVersion, projectName) {
    const api = `${source}/${templateName[vueVersion]}#master`;
    return new Promise((resolve, reject) => {
        downloadGit(api, projectName, {}, (err) => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}

