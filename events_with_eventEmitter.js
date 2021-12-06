// var fs = require ('fs');
// var rs = fs.createReadStream('./event.txt');
// rs.on('open',function(){
//     console.log("Event file is open")
// })

// Customs events

var event = require ('events');
var eventEmitter = new events.eventEmitter()
eventEmitter.on("speak",function(name){
    console.log(name,"is Coding")
})
eventEmitter.emit("speak","Adesh")