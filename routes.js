const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
};

const routes = {
    "/": "https://black-river-0eee0a010.4.azurestaticapps.net/index.html",
    "/pages1": "https://black-river-0eee0a010.4.azurestaticapps.net/Page1/index1.html",
    "/pages2": "https://black-river-0eee0a010.4.azurestaticapps.net/Page2/indexotherpage.html",
};



window.route = route;

