const mainDiv = document.getElementById('main');
const baseRef = window.location.pathname.slice(0, -1);
const template = document.querySelector('template');

// Fetch content from repos.json file.
const requestInit = {
    mode: `cors`,
    method: `GET`,
    credentials: `same-origin`,
    headers: {
        'Pragma': `no-cache`,
        'Cache-Control': `no-store`
    }
};

const response = await fetch(`${baseRef}/repos.json`, requestInit);
let structure = await response.text();

if (structure) {
    structure = JSON.parse(structure);
} else {
    structure = {
        repos: []
    };
}

// Listen for event where OS color scheme changes and re-render repos.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    mainDiv.innerHTML = '';
    renderRepos();
});

renderRepos();

function renderRepos() {
    if ('content' in document.querySelector('template')) {
        for (const repo of structure.repos) {
            // console.log(repo);

            // Repo docs path inferred from repo name.
            const repoPath = `${baseRef}/docs/${repo.name}`;
            const clonedNode = template.content.cloneNode(true);
            const gitHubMarkPath = `github-mark${window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? `-white` : ''}.png`;

            clonedNode.querySelector('a').href = repoPath;
            clonedNode.querySelector('[data-logo]').src = repo.logo ?? gitHubMarkPath;

            if (repo.version) {
                clonedNode.querySelector('[data-version]').innerHTML = repo.version
            } else {
                clonedNode.querySelector('[data-version]').classList.remove('version');
            }

            // clonedNode.querySelector('[data-version]').innerHTML = repo.version ?? '';
            clonedNode.querySelector('[data-name]').innerHTML = repo.display ?? repo.name;
            clonedNode.querySelector('[data-desc]').innerHTML = repo.description ?? '';

            mainDiv.appendChild(clonedNode);
        }
    } else {
        // TODO
    }
}
