const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    config: {
        name: 'skip',
        description: 'Skip the current playing song.',
        aliases: [],
    },
    execute: async(Client, message, args) => {

        const serverQueue = Client.queue.get(message.guild.id);
        const empty = new MessageEmbed()
            .setDescription(`Can\'t seem to find any songs in this guilds queue!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        if (!serverQueue) return message.channel.send(empty);
        const skip = new MessageEmbed()
            .setDescription(`I have skipped the song!\nRequested by ${message.author}`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        message.channel.send(skip);

        await serverQueue.connection.dispatcher.end();
    }
}

module.exports.help = {
    name: "skip",
    category: 'Fun',
    description: "Skip.",
  };