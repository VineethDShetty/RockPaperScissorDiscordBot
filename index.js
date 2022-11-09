
require('dotenv').config()
const { Client, GatewayIntentBits} = require('discord.js');
var rn = require('random-number');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });


client.on("ready", () => {
        console.log("Bot is ready")
    })
var userpoint=0, botpoint=0;
// Game of  stone,paper,scissor
client.on("messageCreate",message=>{
  
  let prefix="$"
  var gen = rn.generator({
    min:  0
  , max:  2
  , integer: true
  })
  var ran=gen()
  
    
    var move;
    switch(ran){
      case 0: move="scissor";break;
      case 1: move="rock";break;
      case 2: move="paper";break;
    }
    
    if(!message.content.startsWith(prefix)) return;
    else{
      
      // Removing the first character because it is $
      let msg=message.content.slice(1)
      if(msg.toLowerCase()=="restart"){
        userpoint=0
        botpoint=0
        message.channel.send("Game Resetted")
      }
      else if(msg.toLowerCase()=="rock"){
          if(move=="paper")
             botpoint+=1;

          else if(move=="scissor")
             userpoint+=1
          message.reply(move)
          message.channel.send(`User :${userpoint}\n Bot : ${botpoint}`);  
      }
      else if(msg.toLowerCase()=="scissor"){
        if(move=="rock")
             botpoint+=1;
        else if(move=="paper")
            userpoint+=1
        message.reply(move)
        message.channel.send(`User :${userpoint}\n Bot : ${botpoint}`);
      }
      else if(msg.toLowerCase()=="paper"){
        if(move=="scissor")
             botpoint+=1;
        else if(move=="rock")
            userpoint+=1
        message.reply(move)
        message.channel.send(`User :${userpoint}\n Bot : ${botpoint}`);
      }
      else{
        message.channel.send("Invalid Move");
      }
    
    }
        
})

   
client.login(process.env.BOT_TOKEN)