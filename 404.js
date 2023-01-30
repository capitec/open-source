let path = window.location.pathname;
const pathParts = path.split('/');
let pathIndex = 0;
if (pathParts.includes('versions')) {
    pathIndex = pathParts.indexOf('versions') + 1;
} else {
    pathIndex = pathParts.indexOf('docs') + 1;
}
path = pathParts.slice(0, pathIndex + 1).join('/');
if (path !== window.location.pathname) {
    window.location.pathname = path;
}