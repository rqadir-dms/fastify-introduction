// Import fastify module
const Fastify = require('fastify')
const fastify = Fastify({
	logger: true
})
const routes = require('./routes')

fastify.register(routes)

// Declare index '/' route
//fastify.get('/', (req, reply) => {
//	reply.send({company: 'Digital Myth Solutions'})
//})

fastify.listen(4000, (err, address) => {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	// Logger will log the connection output string
})

