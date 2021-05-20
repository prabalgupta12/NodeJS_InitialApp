const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter{ }
    // init object
    const myEmitter = new MyEmitter();

    // Event listener
    myEmitter.on('event', () => console.log('Event Fired!'));
// inital event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');