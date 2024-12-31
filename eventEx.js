var event =  require('events');
var eventEmiter = new event.EventEmitter();
  
let eventhHandeler = ()=>{
    console.log("hello word");
}

eventEmiter.on('screms',eventhHandeler);

eventEmiter.emit('screms');