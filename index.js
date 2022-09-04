var fs = require('fs');
var text = fs.readFileSync("./kalleanka.txt").toString('utf-8');
var kalleray = text.split("\n");

const Eris = require('eris');
const client = new Eris('OTU2NjAyNTc3MTQ1OTg3MTEy.Yjynkw.uH4RIHxSh3dOf0IbQR5xvuM_iLU');

const prefix = '!';

client.on('ready', () => {
    console.log("im ready");
});

client.on("messageCreate", msg => {
    if(msg.author.bot) return;
    if(msg.author.id == "279712560016654346")
        return msg.channel.createMessage("hi");

    if(msg.author.id == "279712560016654346") {
        msg.channel.createMessage(kalleray[Math.floor(Math.random() * kalleray.length)]);
    }

    if(!msg.content.startsWith(prefix)) return;

    let args = msg.content.slice(prefix.length).trim().split(" ");

    let command = args.shift().toLowerCase();

    if(command = "ping") return msg.channel.createMessage("pong");

    if(msg.channel=="submit-maps" && msg.attachments>0){
        print("content: " + msg.attachments[0]);
        return "something happened";

    }

});

client.connect();
