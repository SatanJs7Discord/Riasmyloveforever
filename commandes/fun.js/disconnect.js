const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    config: {
        name: 'disconnect',
        description: 'Leaves the channel.',
        aliases: [`stop`],
    },
    execute: async(Client, message, args) => {


        const serverQueue = Client.queue.get(message.guild.id);

        if (message.guild.voice) message.guild.voice.connection.disconnect();

        if (serverQueue) await Client.queue.delete(message.guild.id);

        const leave = new MessageEmbed()
            .setDescription(`That was a fun party, invite me back soon!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)

        message.channel.send(leave);
    }
}

  module.exports.help = {
    name: "disconnect",
    category: 'Fun',
    description: "Disconnect.",
  };