/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 07.02.17
 */

module.exports = __DEV__
    ? require('./root.dev')
    : require('./root.prod');