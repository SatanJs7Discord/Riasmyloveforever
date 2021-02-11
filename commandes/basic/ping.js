module.exports.run = (client, message, args) => {
    message.channel.send('Pong.')
};

module.exports.help = {
    name: "ping",
    aliases: ['vc','vocalmembers'],
    category: 'utilitaires',
    description: "Compteur des membres en vocal en direct.",
  };