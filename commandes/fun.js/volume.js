const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };
module.exports = {
    config: {
        name: 'volume',
        description: 'Change the volume for the current song.',
        aliases: [],
    },
    execute: async(Client, message, args) => {


        const serverQueue = Client.queue.get(message.guild.id);
        const empty = new MessageEmbed()
            .setDescription(`Can\'t seem to find any songs in this guilds queue!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        if (!serverQueue) return message.channel.send(empty);
        const volume = new MessageEmbed({ color: Client.color })
            .setDescription(`Servers volume is currently ${serverQueue.volume}%`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        if (!args[0])
            return message.channel.send(volume);

        if (args[0] > 100) args[0] = 100;

        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
        const volume1 = new MessageEmbed()
            .setDescription(`I have changed the volume to ${args[0]}%.`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        message.channel.send(volume1);
    }
}

module.exports.help = {
    name: "voulume",
    category: 'Fun',
    description: "Volume Command.",
  };