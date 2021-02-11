const { MessageEmbed } = require("discord.js");

module.exports = {
        config: {
            name: 'queue',
            description: 'View the servers song queue.',
            aliases: [],
        },
        execute: async(Client, message, args) => {
                const serverQueue = Client.queue.get(message.guild.id);
                const empty = new MessageEmbed()
                    .setDescription(`Can\'t seem to find any songs in this guilds queue!`)
                    .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
                    .setColor(Client.color)
                if (!serverQueue) return message.channel.send(empty);

                let index = 0;

                const embed = new MessageEmbed()
                    .setTitle(`Displaying this guilds queue!`)
                    .setDescription(
                        `
${serverQueue.songs
  .map((song) => `[${++index}・${song.title}](${song.url})`)
  .join("\n")}

**Current Song** - ${serverQueue.songs[0].title}`
    )
    .setThumbnail(
      `https://img.youtube.com/vi/${serverQueue.songs[0].id}/maxresdefault.jpg`
    )
    .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
    .setColor(Client.color);
  message.channel.send(embed);
}}

module.exports.help = {
    name: "queue",
    category: 'Fun',
    description: "Queue.",
  };