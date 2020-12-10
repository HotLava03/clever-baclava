import { Message } from 'eris'

export class EventListener {
  constructor(server) {
    this.server = server
  }

  /**
   * @param {Message} message The created message.
   */
  onMessageReceived(message) {
    // Check if this is a conversation.
    if (this._hasBaclavaMention(message)) {
      return this._handleConversation(message)
    }

    // Nope, so let's see if it's a command.
    if (this._isCommandCall(message)) {
      
    }
  }

  /**
   * @param {Message} message The edited message.
   */
  onMessageEdited(message) {
    // Edited messages only matter for conversations, for now.
    if (this._hasBaclavaMention(message)) {
      this._handleConversation(message)
    }
  }

  /// Private methods ///

  _hasBaclavaMention(message) {
    return message.mentions.map(user => user.id).includes(this.server.config.botId)
  }

  _isCommandCall(message) {

  }

  _handleConversation(message) {

  }
}