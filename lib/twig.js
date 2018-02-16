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


module.export = Twig;