const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "https://black-river-0eee0a010.4.azurestaticapps.net/index.html",
    "/pages1": "https://black-river-0eee0a010.4.azurestaticapps.net/Page1/index1.html",
    "/pages2": "https://black-river-0eee0a010.4.azurestaticapps.net/Page2/indexotherpage.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("center-container").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();