const fs = require('fs');
const path = require('path');

let reposList = {
    repos: []
};
var docsDirs = fs.readdirSync(`docs`);

docsDirs.forEach(dir => {
    if (!fs.lstatSync(`docs/${dir}`).isDirectory()) {
        return;
    }

    let repo = {
        name: dir
    }
    const versionsPath = `docs/${dir}/versions`;
    if (fs.existsSync(versionsPath)) {
        let versions = fs.readdirSync(versionsPath);
        repo.versions = versions;
    }
    const ossDocsDefinition = `docs/${dir}/.oss-docs.json`;
    if (fs.existsSync(ossDocsDefinition)) {
        const docsFile = fs.readFileSync(ossDocsDefinition);
        const docsDef = JSON.parse(docsFile);
        repo = {
            ...docsDef,
            ...repo
        }
    }
    reposList.repos.push(repo);
});

fs.writeFileSync(`repos.json`, JSON.stringify(reposList, null, 2));