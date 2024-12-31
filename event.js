let event = require('events');
let eventEmiter = new event.EventEmitter();
  let eventhHandeler = function(){
    console.log("hii everone");
  }

  eventEmiter.on('screms',eventhHandeler);

  eventEmiter.emit('screms');
