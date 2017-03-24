function translate(lang) {
    jQuery.i18n.properties({
        name: 'Messages',
        path: 'lang/',
        language: lang,
        mode: 'both',
        async: true,
        callback: function() {
            $("[data-i18n]").each(function(index, e) {
                var translation = $(e).attr("data-i18n");
                $(e).html(jQuery.i18n.prop(translation));
            });
        }
    });
}

function populateCostumers(data) {
    for (var customer of data) {
        $('.clients').append(`
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 block" style="background-image:url(${customer.logo});">
            <span class="animated fadeIn">
                <div>${customer.name}</div>
            </span>
        </div>
        `);
    }
}

$(document).ready(function() {
    $('.banner').css('height', $(window).innerHeight());

    $.getJSON("customers.json", function(data) {
        populateCostumers(data);
    });


    translate("en");

    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-96110617-1', 'auto');
    ga('send', 'pageview');
});