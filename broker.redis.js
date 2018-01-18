var mosca = require('mosca')

var mosca_backend = {
  type: 'redis',
  redis: require('redis'),
  db: 12,
  port: 6379,
  return_buffers: true, // to handle binary payloads
  host: "redis"
};

var moscaSettings = {
  port: 1883,
  backend: mosca_backend,
  persistence: {
    factory: mosca.persistence.Redis,
    host: 'redis'
  }
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);		
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.topic, packet.payload);
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}
