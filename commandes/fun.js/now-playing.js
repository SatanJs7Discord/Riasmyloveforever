const { MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");

module.exports = {
    config: {
        name: 'now-playing',
        description: 'View the song thats currently playing on the server.',
        aliases: [],
    },
    execute: async(Client, message, args) => {

        const serverQueue = Client.queue.get(message.guild.id);

        const empty = new MessageEmbed()
            .setDescription(`Can\'t seem to find any songs in this guilds queue!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)

        if (!serverQueue) return message.channel.send(empty);

        const songInfo = await ytdl.getInfo(serverQueue.songs[0].url);

        let time = songInfo.length_seconds;

        time %= 3600;
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        const embed = new MessageEmbed()
            .setDescription(`Current Song: ${serverQueue.songs[0].title}\nDuration: ${minutes} minutes & ${seconds} seconds!`)
            .setFooter(`${message.guild.name} | Made by Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color);
        message.channel.send(embed);
    }
}
module.exports.help = {
    name: "now-playing",
    category: 'Fun',
    description: "now-playing.",
  };