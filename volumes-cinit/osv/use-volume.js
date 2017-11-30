var fs = require('fs');

FILE = '/volume/demo.txt';

console.log('Writing some message to the volume (' + FILE + ')...')
fs.writeFileSync(FILE, 'Hello from volume!');

console.log('Periodically reading the message from volume...:')
setInterval(function(){
  var message = fs.readFileSync(FILE).toString();
  console.log("MESSAGE:\n" + message);
}, 3000);
