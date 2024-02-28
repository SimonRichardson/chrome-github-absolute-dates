setTimeout(function() {
    var elements = document.querySelectorAll('relative-time, time-ago');

    for (var i in elements) {
        var el = elements[i];

        if (!el.attributes || !el.attributes.datetime) {
            continue;
        }

        var date = new Date(Date.parse(
            el.attributes.datetime.value
        ));

        el.parentElement.innerHTML = "<span>" + date.toLocaleDateString() +"</span>"
    }
}, 1000)