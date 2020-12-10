import { Client } from 'eris'
import next from 'next'
import { EventListener } from './EventListener'

export class BaclavaServer {
  constructor(config) {
    this.config = config
    this.commandHandler = new 
  }

  async init(dev) {
    // Create a new Eris client.
    const client = new Client(process.env.TOKEN)

    // Instanciate EventListener.
    const listener = new EventListener()

    // Listen to messages.
    client.on('messageCreate', listener.onMessageReceived)

    client.on('messageUpdate', listener.onMessageEdited)

    // Connect.
    await client.connect()

    // Only start the server when the bot connected.
    this.app = next({ dev })
    this.handler = this.app.getRequestHandler()
    // Handle requests once the app is prepared.
    this.app.prepare.then(this.handleRequests)
  }

  handleRequests() {

  }
}
