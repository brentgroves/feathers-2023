import { app } from './app'
import { logger } from './logger'

const port = app.get('port')
const host = app.get('host')

process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason))

app.listen(port).then(() => {
  console.log(`Feathers app listening on http://${host}:${port}`)
})
