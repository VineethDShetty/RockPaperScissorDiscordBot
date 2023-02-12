
require('dotenv').config()
const { Client, GatewayIntentBits} = require('discord.js');
var rn = require('random-number');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
client.on("ready", () => {
  console.log("Bot is ready")
})
class Game{
  
  constructor(){
    this.userpoint=0;
    this.botpoint=0;

  }
  play(message){
    
  
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
            this.userpoint=0
            this.botpoint=0
            message.channel.send("Game Resetted")
          }
          else if(msg.toLowerCase()=="rock"){
              if(move=="paper")
                 this.botpoint+=1;
    
              else if(move=="scissor")
                 this.userpoint+=1
              message.reply(move)
              message.channel.send(`User :${this.userpoint}\n Bot : ${this.botpoint}`);  
          }
          else if(msg.toLowerCase()=="scissor"){
            if(move=="rock")
                 this.botpoint+=1;
            else if(move=="paper")
                this.userpoint+=1
            message.reply(move)
            message.channel.send(`User :${this.userpoint}\n Bot : ${this.botpoint}`);
          }
          else if(msg.toLowerCase()=="paper"){
            if(move=="scissor")
                 this.botpoint+=1;
            else if(move=="rock")
                this.userpoint+=1
            message.reply(move)
            message.channel.send(`User :${this.userpoint}\n Bot : ${this.botpoint}`);
          }
          else{
            message.channel.send("Invalid Move");
          }
        
        }
            
   
  }
}


let play1=new Game();
client.on("messageCreate",message=>{
   
   play1.play(message)
})
// var userpoint=0, botpoint=0;
// Game of  stone,paper,scissor


   
client.login(process.env.BOT_TOKEN)