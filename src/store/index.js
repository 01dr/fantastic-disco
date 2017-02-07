/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 07.02.17
 */

module.exports = process.env.NODE_ENV
    ? require('./store.dev')
    : require('./store.prod');