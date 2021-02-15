// ==UserScript==
// @name         Google Forms Extension
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Google Forms Extension
// @author       MAXIMUM13
// @match        https://docs.google.com/forms/d/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    console.log('Google Forms Extension');

    let headers = document.body.querySelectorAll('[role=listitem] [role=heading]');
    headers.forEach(header => {
        let link = $('<a>');
        let h = $(header);
        let text = h.text();
        if (text.endsWith('*')) {
            text = text.substr(0, text.length - 1).trim();
        }
        let href = encodeURI('https://yandex.ru/search/?text=' + text);
        link.attr('href', href);
        link.append(h[0].innerHTML);
        h.empty();
        link.prependTo(h);
    });
})();
