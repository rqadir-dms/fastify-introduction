
async function routes(fastify, options) {
	// First route
	fastify.get('/', async (req, res) => {
		return { name: "Digital Myth Solutions" }
	})

	// Post route
	fastify.post('/reverse', async(req, res) => {
		fastify.log.info('Request body:', req.body)
		return {body: 'Coming Soon'}
	})

}

module.exports = routes
