function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }

    // Update all <a> elements with specific IDs
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.id === 'RegisterLink_URL') {
            link.href = 'https://www.casinograndbay.com/welcome/ccb-260mbww-50fsww?TrackingToken=' + result;
        }
        // Add more conditions for other <a> elements if needed
    });
}

// Call the function with the desired parameter name
findGetParameter('TrackingToken');
