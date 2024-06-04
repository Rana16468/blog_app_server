"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass    ddddd',
        author: 'Paul Auster',
    },
];
exports.resolvers = {
    Query: {
        books: () => books,
    },
};
