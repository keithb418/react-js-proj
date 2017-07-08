let React = require('react');

let itemRegExp = /\{[a-zA-Z]*\}/g;

module.exports = {
    extend: (target = {}, ...sources) => {
        sources.forEach((source = {}) => {
            let keys = Object.keys(source);

            keys.forEach((key) => {
                target[key] = source[key];
            });
        });

        return target;
    },
    getSubstituteIds: (string = '') => {
        let ids = string.match(itemRegExp) || [];

        ids.forEach((id) => {
            id = id.substr(1, id.length - 2);
        });

        return ids;
    },
    splitDescription: (description) => {
        var descPieces = description.split(itemRegExp);

        descPieces.forEach((piece, i) => {
            piece = <span key={i}>{piece}</span>;
        });

        return descPieces;
    }
};