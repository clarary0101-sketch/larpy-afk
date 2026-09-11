import mineflayer from 'mineflayer'

const HOST = process.env.MC_HOST || 'play.leztusasmp.xyz'
const PORT = parseInt(process.env.MC_PORT || '25565', 10)
const USERNAME = process.env.MC_USERNAME || 'larpy'
const VERSION = process.env.MC_VERSION || '1.21.1'

const bot = mineflayer.createBot({
  host: HOST,
  port: PORT,
  username: USERNAME,
  version: VERSION,
  auth: 'offline',
})

bot.on('login', () => {
  console.log(`[bot] logged in as ${bot.username} on ${HOST}:${PORT} (${VERSION})`)
})

bot.on('spawn', () => {
  console.log(`[bot] spawned at ${bot.entity.position}`)
  setTimeout(() => bot.chat('/login GAGOKABA'), 1500)
  setTimeout(() => bot.chat('/eco'), 4000)
  setTimeout(() => bot.chat('/afk 1'), 6500)
})

bot.on('kicked', (reason) => {
  console.log(`[bot] kicked: ${reason}`)
})

bot.on('error', (err) => {
  console.error(`[bot] error: ${err.message}`)
})

const shutdown = () => {
  bot.quit('Goodbye')
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
