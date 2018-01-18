# Tinkerings with mosca for dojot

Using a single backend broker, it seems mosca has
the most interesting property - allowing horizontal
scaling of iotagents.

That is because, should an external entity (e.g.
a device) needs to subscribe to any given topic,
its data will eventually be published (via redis
or whatever ascoltatore is configured to work
with) to all running instances of mosca.
 
