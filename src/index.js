const fastify = require('fastify')
const app = fastify({ logger: true })
const store = require('./db');

app.get('/', async (req, res) => {
  return { workers: true }
})

app.get('/var', async (req, res) => {
  return process.env.DB_SERVICE_ACCOUNT;
})

app.get('/db', async (req, res) => {
  return await store.getRotations();
})

exports.app = async (req, res) => {
  await app.ready()
  app.server.emit('request', req, res)
}


const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
