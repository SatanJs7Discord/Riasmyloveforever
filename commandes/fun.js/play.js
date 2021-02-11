const { MessageEmbed, Util } = require("discord.js");
const YoutubeAPI = require("simple-youtube-api");
fs = require("fs");
ms = require("ms");
const API_Key = require("../../settings/configuration").BOT_SETTINGS.YT_API_KEY;
const youtube = new YoutubeAPI(API_Key)
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };


module.exports = {
    config: {
        name: 'play',
        description: 'Play a song/video in a voice channel',
        aliases: [],
    },
    execute: async(Client, message, args) => {
        let search = args.join(" ");
        let url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
        const embed33 = new MessageEmbed()
            .setDescription(`Please provide me a title or link!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)
        if (!search)
            return message.channel.send(embed33);

        const voiceChannel = message.member.voice.channel;

        const embed32 = new MessageEmbed()
            .setDescription(`Please join a voice channel before trying to use me!`)
            .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
            .setColor(Client.color)

        if (!voiceChannel)
            return message.channel.send(embed32);

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);

            const videos = await playlist.getVideos();

            for (const value of Object.values(videos)) {

                const video = await youtube.getVideoByID(value.id);

                await Client.handle(Client, video, message, voiceChannel, true);
            }

            const embed = new MessageEmbed()
                .setDescription(`Successfully added ${playlist.title} to the guilds queue!`)
                .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
                .setColor(Client.color)
            message.channel.send(embed);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {

                    const playing = new MessageEmbed()
                        .setDescription(`Searching for - \`${search}\``)
                        .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
                        .setColor(Client.color)
                    message.channel.send(playing);
                    var videos = await youtube.searchVideos(search, 1).catch(() => {})
                    var video = await youtube.getVideoByID(videos[0].id);
                } catch (err) {

                    const result = new MessageEmbed()
                        .setDescription(`Sorry, I can\'t seem to find that song!`)
                        .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))
                        .setColor(Client.color)
                    message.channel.send(result);
                }
            }

            return Client.handle(Client, video, message, voiceChannel);
        }
    }
}

module.exports.help = {
    name: "play",
    category: 'Fun',
    description: "Play.",
  };