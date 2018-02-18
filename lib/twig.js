const app = require('express')();
const Twig = require('twig');
const slugify = require('slugify');
const dotenv = require('dotenv');
dotenv.config();

const getTitle = () => {
    return process.env.APP_TITLE || 'Music Collection';
};

Twig.extendFunction('slugify', (value) => {
    return slugify(value).toLowerCase();
});

Twig.extendFunction('app', () => {
    return {
        title: getTitle()
    };
});

Twig.extendFunction('page_title', (title, sep) => {
    let defaultTitle = getTitle();

    if (!title) {
        return defaultTitle;
    }

    sep = !sep ? " &raquo; " : sep;

    if (typeof title === 'object') {
        title = sep + title.join(sep);
    }

    return defaultTitle + title;
});

Twig.extendFunction('seconds_to_minutes', function(seconds) {
    let minutes_decimal = seconds / 60,
        minutes_int = Math.floor(minutes_decimal),
        seconds_int = Math.round((minutes_decimal - minutes_int) * 60);

    return minutes_int + ':' + seconds_int;
});

module.export = Twig;