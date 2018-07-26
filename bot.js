const Discord = require('discord.js');
const client = new Discord.Client();




client.login(process.env.BOT_TOKEN);



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Hmam');
 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ] users! [ " ${client.users.size} " ] channels! [ " ${client.channels.size} " ]     `); 
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('is online')
client.user.setStatus("dnd");
});


 client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`b!help `,`b!inv`,`${client.users.size} users`,`in ${client.guilds.size} server`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/hmamkhalid`);
    }, ms);1000

});
            







var prefix = "b!"
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});


client.on('message', message => {
 if (message.content.includes('discord.gg')){ 
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.delete() 
     var member = message.member
    
 
       
          member.kick().then((member) => {
              message.channel.send("", {embed: {
              author: {
              },
              title: 'بسبب النشر ' + member.displayName + ' تم طرد',
              color: 490101,
              }
            });
        }
      ) 
    }
}
});


client.on('message', message => {
 if (message.content.includes('https')){ 
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.delete() 
     var member = message.member
    
 
       
          member.kick().then((member) => {
              message.channel.send("", {embed: {
              author: {
              },
              title: 'بسبب النشر ' + member.displayName + ' تم طرد',
              color: 490101,
              }
            });
        }
      ) 
    }
}
});


client.on('message', function(msg) {
    const prefix = 'b!'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });




const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
client.on('message', function(message) {
  var prefix = "b!";
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');
 
    if (mess.startsWith(prefix + 'play')) {
            const ll = message.member.voiceChannel.leave();
                if(ll){ 
                message.channel.send(' لا يوجد احد بـ الروم الصوتي :( سوف اغادر');
                                    message.voiceChannel.leave();
                return;
}
        if (!message.member.voiceChannel) return message.channel.send(`يجب الدخول في روم صوتي`);
        // if user is not insert the URL or song title
        if (args.length == 0) {
 
            message.channel.send('اكتب اسم الاغنيه او الرابط')
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
.setDescription(`playing ${videoInfo.info}`) 
              .setFooter(`Best Friend`)
        message.channel.send()|

message.channel.sendEmbed(embed)
 
                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('#e30a0a')
.setDescription(`playing ${videoInfo.info}`) 
.setImage(videoInfo.thumbnailUrl)
              .setFooter(`Best Friends`)

        message.channel.send()

message.channel.sendEmbed(embed)
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.channel.send(`يجب الدخول في روم صوتي`);
        message.channel.send('تم التخطي').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'vol')) {
        if (!message.member.voiceChannel) return message.channel.send(`<442973851937275905> يجب الدخول في روم صوتي`);
        // console.log(args)
        if (args < 1) return message.channel.send('1 - 200')
        if (args > 200) return message.channel.send('1 - 200')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`<Volume now **__${dispatcher.volume*50}%__**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.channel.send(`<442973851937275905> يجب الدخول في روم صوتي`);
        message.channel.send('<:pause:442997534261248010> تم الإيقاف مؤقتا').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'start')) {
        if (!message.member.voiceChannel) return message.channel.send(`<442973851937275905> يجب الدخول في روم صوتي`);
            message.channel.send('<:unpause:442999164914368512> تم الإستئناف').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
        if (!message.member.voiceChannel) return message.channel.send(`<442973851937275905> يجب الدخول في روم صوتي`);
        message.channel.send('تم الايقاف');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
 
    }
    else if (mess.startsWith(prefix + 'join')) {
        if (!message.member.voiceChannel) return message.channel.send(`<442973851937275905> يجب الدخول في روم صوتي`);
        message.member.voiceChannel.join().then(message.channel.send('<443366137170886665> تم الدخول للروم'));
    }
    else if (mess.startsWith(prefix + 'شغل')) {
        if (!message.member.voiceChannel) return message.channel.send(`<:voice:442973851937275905> You have to be in a voice channel`);
        if (isPlaying == false) return message.channel.send('Stopping');
      message.channel.send(`443001127772880907> Playing ${videoInfo.title}`)
    }
});
 
function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send(`<442973851937275905> يجب الدخول في روم صوتي`);
    dispatcher.end();
}
 
function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;
 
 
    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];
 
        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}
 
function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}
 
function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}
 
function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);

}
)};
 
function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;

}


















const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";

var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];

client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};




 client.on('message', message => {
        
        var prefix = "b!"  
           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ?`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(": النك نيم",`${h.nickname}`, true) .addField(": #",heg.discriminator, true)
.addField(`: البلينق`,`${h.presence.game && h.presence.game.name || '-'}`,true) .addField(': الحالة',`${h.presence.status}`,true)
.addField(`: الرتب`, `${message.guild.members.get(h.id).roles.map(r => `\`${r.name}\``).slice(1).join('\n') || 'لايوجد رتب'}`,true)                                                    
.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });



 
client.on('message' , message => {
    var prefix = "b!";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});
 



client.on('message', message => {
if (message.content.startsWith("b!ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});



const bot = new Discord.Client();
var Canvas = require('canvas');// npm i canvas
var jimp = require('jimp');// npm i jimp 
const fs = require("fs");// npm i fs

      bot.on('guildMemberAdd', member => {
      const welcomer =  member.guild.channels.find('name', 'welcome');

      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w7.png',
      './img/w8.png'];

              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);

      })

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                              
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);

                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);

                              //NAME
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                    ctx.fillText(`انت العضو رقم${member.guild.memberCount} `
                              , 200, 190);

 welcomer.sendFile(canvas.toBuffer())



      })
      })
      });
  
 








client.on('message', message => {   
if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (message.content.startsWith('b!mute')){
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}

if (message.content.startsWith('b!unmute')){
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});


var prefix = "b!"
client.on('message', message => {
if(message.content.startsWith(prefix + "inv")) { 
message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
}
});

  


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('jjjjjjaaaaaayayayayyayatstyatsdtasytdutut')){
 if(!message.author.id === '406451228004974603') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});







client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




client.on('message', message => {
       if (message.content ===  "b!help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **╔══╗──────╔╗─╔═══╗──────────╔╗** ' ,' **  ** ')  
.addField('     **║╔╗║─────╔╝╚╗║╔══╝──────────║║** ' ,' ** ** ')
.addField('     **║╚╝╚╦══╦═╩╗╔╝║╚══╦═╦╦══╦═╗╔═╝║**' ,' ** **')
.addField('     **║╔═╗║║═╣══╣║─║╔══╣╔╬╣║═╣╔╗╣╔╗║** ' ,' ** ** ')
.addField('     **║╚═╝║║═╬══║╚╗║║──║║║║║═╣║║║╚╝║** ' ,' ** ** ')
.addField('     **╚═══╩══╩══╩═╝╚╝──╚╝╚╩══╩╝╚╩══╝** ' ,' ** ** ')    
.setColor('RANDOM')
  message.author.send(embed);
    }
});





client.on('message', message => {
       if (message.content ===  "b!help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **أوامر الإدارة** ' ,' **  ** ')  
.addField('     **b!bc** ' ,' **إرسال رسالة لجميع الأعضاء** ')
.addField('    **b!mute**' ,' **لإعطاء ميوت لشخص ما** ')
.addField('    **b!unmute**' ,' **لفك الميوت عن الشخص** ')
.addField('    **b!ban**' ,' **لحظر الشخص من ** ')
.addField('    **b!unban**' ,' **لفك الحظر من الشخص ** ')
.setColor('RANDOM')
  message.author.send(embed);

    }
});

client.on('message', message => {
       if (message.content ===  "b!help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **أوامر الأعضاء** ' ,' **  ** ')  
.addField('     **b!help** ' ,' **لعرض أوامر السيرفر** ')
.addField('     **b!gif** ' ,' **لعرض صورة متحركة** ')
.addField('    **b!server**' ,' **لعرض حالة السيرفر** ')
.addField('     **b!support** ' ,' **لعرض سيرفر السبورت** ')
.addField('     **b!inv** ' ,' **لدعوة البوت للسيرفر** ')
.setColor('RANDOM')
  message.author.send(embed);
    }
});

client.on('message', message => {
       if (message.content ===  "b!help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **الترحيب والمغادرة** ' ,' **  ** ')  
.addField('     **الترحيب** ' ,' **وسيتم الترحيب بالعضو الجديد تلقائيا welcome ضع روم اسمه** ')
.setColor('RANDOM')
  message.author.send(embed);
    }
});

client.on('message', message => {
       if (message.content ===  "b!help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **أوامر الميوزك** ' ,' **  ** ')  
.addField('     **b!play** ' ,' **لبدء أغنية** ')
.addField('    **b!stop**' ,' **لإيقاف الأغنية** ')
.addField('     **b!pause** ' ,' **لإيقاف الأغنية مؤقتا** ')
.addField('     **b!start** ' ,' **لإستئناف الأغنية** ')
.addField('     **b!skip** ' ,' **لتخطي الأغنية** ')    
.addField('     **b!join** ' ,' **لجعل البوت ينضم للروم** ')
.setColor('RANDOM')
  message.author.send(embed);
    }
});


var prefix = "b!"
         client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('إسم البوت:regional_indicator_a:  ',`[${client.user.username}]`) 

.addField('مصمم  + صاحب البوت ',`!Hmam#1606`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content === "b!help") {
message.reply("**تم ارسال اوامر البوت في الخاص**")
message.react("📩")

}
});


const Slam = [
  'تفضل https://discord.gg/SYgU2pE',
  'خذ https://discord.gg/SYgU2pE',
  'ادخل https://discord.gg/SYgU2pE',
  'تشرفنا https://discord.gg/SYgU2pE',
]
client.on('message', msg => {
if  (msg.content === 'b!support') {
    const slamat = new Discord.RichEmbed()
    .setDescription(`${Slam[Math.floor(Math.random() * Slam.length)]}`)
    .setThumbnail(msg.author.send)
    msg.channel.send(slamat);
  }
});



client.on('message', message => {
if (message.content === "b!inv") {
message.reply("**تم ارسال رابط البوت في الخاص**")
message.react("📩")

}
});



