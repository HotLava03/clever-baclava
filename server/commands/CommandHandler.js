import { Message } from 'eris'

export class CommandHandler {
  constructor(server) {
    this.server = server
  }

  /**
   * @param {Message} message
   */
  callCommandByMessage(message) {
    // Get the command name through the message content.
    const commandName = message.content.replace(/^>>\s*(\w+)\s*/, '$1')
    // Get the command's args.
    const args = message.content.substring(2).replace(commandName, '').trim().split(/\s*/)
    // Find the command(s) that have that name (there shouldn't be more than one with the same name, but...).
    this.commands.filter(command => command.name.toLowerCase() === commandName.toLowerCase())
      .onCommand(message, args)
  }

  _registerCommands() {
  }
}
