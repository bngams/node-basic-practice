const EventEmitter = require('events');

// declare class
class MyEmitter extends EventEmitter { }

// instanciate object
const myEmitter = new MyEmitter();

myEmitter.on('my-custom-event', () => {
    console.log('My event has been called');
});

myEmitter.emit('my-custom-event');