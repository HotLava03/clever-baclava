import config from '../config'
import { BaclavaServer } from './BaclavaServer'

// If there's no token, prevent the server from starting.
if (!process.env.TOKEN) {
  console.log('Missing token environment variable (TOKEN).')
  process.exit(1)
}

// Check if we're in development mode.
const dev = process.argv[2] === '--dev'

// Initialize the server.
const server = new BaclavaServer(config)
// Start it.
server.init(dev)
