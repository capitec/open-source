const prefix = 'Capitec:'
const title = `${prefix} Open Source Documentation`;

window.addEventListener(`popstate`, evt => {
    if (intervalId) {
        try {
            clearInterval(intervalId);
        } catch (error) {

        }
        intervalId = undefined;
    }
    if (evt.state && evt.state.url) {
        load(false, evt.state.url);
    } else {
        load(false, window.location.href);
    }
});

let intervalId = undefined;
let iframe = undefined;
let selectChange = undefined;
var home = document.getElementById("btn-home");
var header = document.getElementById("header");
var headerLabel = document.getElementById("header-label");
var select = document.getElementById("version-select");
var fullscreen = document.getElementById("btn-fullscreen");
var welcome = document.getElementById("welcome");

var url = new URL(window.location.href);
var newUrl = url.href.replace(url.search, ``);
home.href = newUrl;


async function load(pushState = true, loadUrl = undefined) {

    loadUrl = new URL(loadUrl || window.location.href);

    const baseRef = window.location.pathname.slice(0, -1);

    const requestInit = {
        mode: `cors`,
        method: `GET`,
        credentials: `same-origin`,
        headers: {
            'Pragma': `no-cache`,
            'Cache-Control': `no-store`
        }
    };
    let response = await fetch(`${baseRef}/repos.json`, requestInit);
    let structure = await response.text();
    if (structure) {
        structure = JSON.parse(structure);
    } else {
        structure = {
            repos: []
        };
    }

    var main = document.getElementById("main");

    function clearElements(el) {
        if (!el) {
            el = main;
        }
        // Clear elements
        var child = el.lastElementChild;
        while (child) {
            el.removeChild(child);
            child = el.lastElementChild;
        }
    }
    clearElements();

    function displayFor(repo, versions, displayVersion, pushState, display) {
        if (welcome && welcome.parentElement) {
            welcome.parentElement.removeChild(welcome);
        }

        if (select && selectChange) {
            select.removeEventListener(`change`, selectChange);
            selectChange = undefined;
        }
        var url = new URL(window.location.href);
        url.searchParams.set(`repo`, repo);

        headerLabel.textContent = `${prefix} ${display || repo}`
        window.document.title = `${prefix} ${display || repo}`

        var tree = document.createDocumentFragment();

        var div = document.createElement("div");
        div.setAttribute("id", `container-${repo}`);

        iframe = document.createElement("iframe");
        iframe.setAttribute("id", `frame-${repo}`);
        iframe.setAttribute("class", `content-frame`);
        const repoSrc = `/docs/${repo}`;
        let src = repoSrc;
        if (displayVersion && displayVersion !== `latest`) {
            src = `/docs/${repo}/versions/${displayVersion}`;
            url.searchParams.set(`version`, displayVersion);
        } else {
            url.searchParams.delete(`version`);
        }

        if (pushState) {
            history.pushState({ url: url.href }, ``, url.href);
        }

        var fullPath = url.searchParams.get(`path`);
        if (fullPath) {
            iframe.setAttribute("src", `${baseRef}${src}${fullPath}`);
            fullscreen.href = `${baseRef}${src}${fullPath}`;
        } else {
            iframe.setAttribute("src", `${baseRef}${src}`);
            fullscreen.href = `${baseRef}${src}`;
        }
        intervalId = setInterval(() => {
            try {
                if (!iframe || !iframe.parentElement || !iframe.contentWindow || !iframe.contentWindow.location) {
                    clearInterval(intervalId);
                    return;
                } else if (iframe.contentWindow.location.search || iframe.contentWindow.location.pathname || iframe.contentWindow.location.hash) {
                    const framePath = `${iframe.contentWindow.location.pathname?.replace(`${baseRef}${src}`, '')}${iframe.contentWindow.location.search}${iframe.contentWindow.location.hash}`;
                    if (framePath) {
                        url = new URL(window.location.href);
                        const hadPath = url.searchParams.has(`path`);
                        url.searchParams.set(`path`, framePath);
                        if (url.href != window.location.href && url.searchParams.has(`repo`)) {
                            if (hadPath) {
                                history.pushState({ url: url.href }, ``, url.href);
                            } else {
                                history.replaceState({ url: url.href }, ``, url.href);
                            }
                        }
                    }
                }
                if (iframe.contentWindow.location.href) {
                    fullscreen.href = iframe.contentWindow.location.href;
                }
            } catch (error) {
                console.error(error);
                clearInterval(intervalId);
            }
        }, 50);

        if (versions && versions.length > 0) {
            select.setAttribute(`class`, `version-select`);
            clearElements(select);
            var option;

            option = document.createElement('option');

            option.value = option.textContent = `latest`;

            select.appendChild(option);

            versions.forEach((item) => {

                option = document.createElement('option');

                option.value = option.textContent = item;

                select.appendChild(option);
            });
            selectChange = (evt) => {
                const newDisplayVersion = evt.target.value;
                if (newDisplayVersion !== displayVersion && (displayVersion || newDisplayVersion !== `latest`)) {
                    clearElements();
                    displayFor(repo, versions, newDisplayVersion, true, display);
                }
            }
            select.addEventListener(`change`, selectChange);

            if (displayVersion && displayVersion !== `latest`) {
                select.options[versions.indexOf(displayVersion) + 1].selected = true;
            }

        } else {
            select.setAttribute(`class`, `hidden`);
        }
        fullscreen.classList.remove(`hidden`);

        div.appendChild(iframe);

        tree.appendChild(div);

        main.appendChild(tree);
    }


    if (loadUrl.search) {
        var url = loadUrl;
        var repo = url.searchParams.get(`repo`);
        if (repo) {
            let versions = [];
            var version = url.searchParams.get(`version`);
            let definition = structure.repos.find(r => r.name === repo);
            if (definition) {
                versions = definition.versions || [];
            }
            clearElements();

            displayFor(repo, versions, version, pushState, definition.display);
            return;
        }
    }
    headerLabel.textContent = title;
    window.document.title = title;
    select.setAttribute(`class`, `hidden`);
    fullscreen.classList.add(`hidden`);
    
    var barTree = document.createDocumentFragment();
    var barDiv = document.createElement("div");
    barDiv.setAttribute("id", `container-buttons`);
    barDiv.setAttribute("class", "btn-bar");

    structure.repos.forEach(async item => {
        const path = item.name;
        let docsDefinition = item;

        // try {
        //     let response = await fetch(`${baseRef}/docs/${path}/.oss-docs.json`, requestInit);
        //     docsDefinition = await response.text();
        //     if (docsDefinition) {
        //         docsDefinition = JSON.parse(docsDefinition);
        //         console.log(docsDefinition);
        //     } else {
        //         docsDefinition = {
        //             name: path
        //         };
        //     }
        // } catch (error) {
        //     docsDefinition = {
        //         name: path
        //     };
        // }

        var tree = document.createDocumentFragment();

        var div = document.createElement("div");
        div.setAttribute("id", `container-${path}`);
        div.setAttribute("class", "btn-container");

        var centering = document.createElement("div");
        centering.classList.add('links');
        div.appendChild(centering);

        var button = document.createElement("button");
        button.setAttribute("id", `btn-${path}`);
        button.appendChild(document.createTextNode(docsDefinition.display || docsDefinition.name));
        button.classList.add('tile', 'center');
        button.addEventListener("click", async (e) => {
            let versions = item.versions || [];
            clearElements();

            displayFor(path, versions, undefined, true, docsDefinition.display);
        });

        div.appendChild(button);

        var linkList = document.createElement("div");
        linkList.classList.add('links');

        if (docsDefinition.repo) {           

            var gitLink = document.createElement("a");
            gitLink.setAttribute("id", `lnk-${path}`);
            var img = document.createElement("img");
            img.style.maxWidth = "32px";
            img.style.maxHeight = "32px";
            img.src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
            img.alt = "Github";
            img.title = "Github Repository";
            gitLink.appendChild(img);
            gitLink.classList.add('icon','center');
            gitLink.href = docsDefinition.repo;

            linkList.appendChild(gitLink);
        }

        if (docsDefinition.links) {
            docsDefinition.links.forEach(linkDef => {         

                var link = document.createElement("a");
                link.setAttribute("id", `lnk-${path}-${linkDef.name}`);
                if (linkDef.icon) {
                    var img = document.createElement("img");
                    img.style.maxWidth = "32px";
                    img.style.maxHeight = "32px";
                    img.src = linkDef.icon;
                    img.alt = linkDef.name;
                    img.title = linkDef.name;
                    link.appendChild(img);
                } else {
                    link.appendChild(document.createTextNode(linkDef.name));
                }
                link.classList.add('icon','center');
                link.href = linkDef.url;
    
                linkList.appendChild(link);
            });
        }
        
        div.appendChild(linkList);

        tree.appendChild(div);

        barDiv.appendChild(tree);
    });

    barTree.appendChild(barDiv);

    main.appendChild(barTree);
}

load(true);