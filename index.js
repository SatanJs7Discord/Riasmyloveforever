const
      config = require("./config.json"),
      { readdirSync } = require("fs"),
      { Client, Collection, Discord} = require("discord.js"),
      client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }),
      figlet = require('figlet'),
      colors = require('colors'),
      readline = require('readline');
      alexa = require("alexa-bot-api");
      var chatbot = new alexa("aw2plm")
client.commands = new Collection()

const loadEvents = (dir = "./modules/") => {
    readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
                                    
    for (const event of events) {
    const evt = require(`${dir}/${dirs}/${event}`);
    const evtName = event.split(".")[0];
    client.on(evtName, evt.bind(null, client));
    console.log(`[EVENTS]`.red + ` Chargement de l'évènement >`.white + ` ${evtName}.js`.red);
    };
  });
  };
  loadEvents()

const loadCommands = (dir = "./commandes/") => {
    readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        
    for (const file of commands) {
    const getFileName = require(`${dir}/${dirs}/${file}`);
    client.commands.set(getFileName.help.name, getFileName);
    console.log(`[COMMANDS]`.red + ` Chargement de la commande >`.white + ` ${getFileName.help.name}.js`.red);
    };
  });
  };
  loadCommands()

const activities_list = [
    "Best waifu <3",
    "In Dev",
    "Road To Partner"
]

client.on("ready", () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: 'WATCHING' });
    }, 10000);
    var generalChannel = client.channels.get("727287855222751262") // Replace with known channel ID
});

client.on('message', (receivedMessage) => {

  let content = client.content;
  if (!content) {
    chatbot.getReply(content).then(r => message.channel.send(r))
  }
}),

client.on('message', (receivedMessage) => {

  // Prevent bot from responding to its own messages
  if (receivedMessage.author == client.user) {
      return
  }
  
  if (receivedMessage.content.includes(client.user.toString())) {
    receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
  }
})

client.login(config.login.token)