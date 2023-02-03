const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/core');


(async () => {
    let reposList = {
        repos: []
    };
    var docsDirs = fs.readdirSync(`docs`);
    await Promise.all(docsDirs.map(async dir => {
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

        // Get content from repo's package.json (assuming there is one).
        const { description, version } = await getGitHubPackageJson(repo.name);

        // Manual description takes preference over package.json value.
        if (!repo.description) {
            repo.description = description;
        }

        repo.version = version;

        reposList.repos.push(repo);
    }));

    fs.writeFileSync(`repos.json`, JSON.stringify(reposList, null, 2));
})();


async function getGitHubPackageJson(name) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}{?ref}', {
            owner: 'capitec',
            repo: name,
            path: 'package.json',
            mediaType: {
                format: 'raw'
            }
        });

        return JSON.parse(response.data);

    } catch (error) {
        return {};
    }


}