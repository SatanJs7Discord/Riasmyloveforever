const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    config: {
        name: 'loop-queue',
        description: 'Loop the current song queue.',
        aliases: [],
    },
    execute: async(Client, message, args) => {

        const serverQueue = Client.queue.get(message.guild.id);

        const empty = new MessageEmbed()
            .setDescription(`Can\'t seem to find any songs in this guilds queue!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        if (!serverQueue) return message.channel.send(empty);

        if (serverQueue.loopQueue === false) {
            serverQueue.loopQueue = true;
            const loop1 = new MessageEmbed()
                .setDescription(`Looping has been enabled by ${message.author}!`)
                .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
                .setColor(Client.color)
            message.channel.send(loop1);
        } else {
            const loop2 = new MessageEmbed()
                .setDescription(`Looping has been disabled by ${message.author}!`)
                .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
                .setColor(Client.color)
            serverQueue.loopQueue = false;
            message.channel.send(loop2);
        }
    }
}

  module.exports.help = {
    name: "loop-queue",
    category: 'Fun',
    description: "loop-queue.",
  };