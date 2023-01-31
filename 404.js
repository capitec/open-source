function redirect() {
    let path = window.location.pathname;
    const pathParts = path.split('/');
    let pathIndex = 0;
    if (pathParts.includes('versions')) {
        // Redirect to version specific home page
        pathIndex = pathParts.indexOf('versions') + 1;
    } else {
        // Redirect to specific docs home page
        pathIndex = pathParts.indexOf('docs') + 1;
    }
    path = pathParts.slice(0, pathIndex + 1).join('/');
    if (path !== window.location.pathname) {
        window.location.pathname = path;
    } else {
        // Fallback redirect to landing page
        window.location.pathname = '/open-source'; 
    }
}

redirect();
