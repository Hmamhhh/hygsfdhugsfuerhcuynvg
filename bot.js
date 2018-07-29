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
    var ms = 10000 ;
    var setGame = [`b!help ON ${client.guilds.size} Servers`,`b!inv ${client.users.size} Users`];
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
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});
            













client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '472371244428296233').setName("W");
client.channels.find('id', '472371244428296233').setName("We");
client.channels.find('id', '472371244428296233').setName("Wel");
client.channels.find('id', '472371244428296233').setName("Welc");
client.channels.find('id', '472371244428296233').setName("Welco");
client.channels.find('id', '472371244428296233').setName("Welcom");
client.channels.find('id', '472371244428296233').setName("Welcome");
client.channels.find('id', '472371244428296233').setName("Welcome T");
client.channels.find('id', '472371244428296233').setName("Welcome To");
client.channels.find('id', '472371244428296233').setName("Welcome To B");
client.channels.find('id', '472371244428296233').setName("Welcome To Be");
client.channels.find('id', '472371244428296233').setName("Welcome To Bes");
client.channels.find('id', '472371244428296233').setName("Welcome To Best");
client.channels.find('id', '472371244428296233').setName("Welcome To Best F");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Fr");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Fri");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Frie");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Frien");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Friend");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Friend");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Frien");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Frie");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Fri");
client.channels.find('id', '472371244428296233').setName("Welcome To Best Fr");
client.channels.find('id', '472371244428296233').setName("Welcome To Best F");
client.channels.find('id', '472371244428296233').setName("Welcome To Best");
client.channels.find('id', '472371244428296233').setName("Welcome To Bes");
client.channels.find('id', '472371244428296233').setName("Welcome To Be");
client.channels.find('id', '472371244428296233').setName("Welcome To B");
client.channels.find('id', '472371244428296233').setName("Welcome To ");
client.channels.find('id', '472371244428296233').setName("Welcome T");
client.channels.find('id', '472371244428296233').setName("Welcome ");
client.channels.find('id', '472371244428296233').setName("Welcom");
client.channels.find('id', '472371244428296233').setName("Welco");
client.channels.find('id', '472371244428296233').setName("Welc");
client.channels.find('id', '472371244428296233').setName("Wel");
client.channels.find('id', '472371244428296233').setName("We");
client.channels.find('id', '472371244428296233').setName("W");

  }, 3000);
});





var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "b!roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});


var prefix ="b!"
client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});








client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('b!bc')){
 if (message.author.id !== '406451228004974603') return message.reply('** هذا الأمر قفط لصاحب البوت  **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
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




const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 


const prefix = "b!"
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء منك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Best Friend")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}




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
        if(!user) return  message.channel.send(`يجب كتابة ايدي العضو وليس منشن`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**تم فك الباند** !')
        .addField('**فك الباند عن :** ', `${user}` , true)
        .addField('**بواسطة :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});
 



client.on('message', message => {
if (message.content.startsWith("b!ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند للشخص");
};
});



client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`اهلاً و سهلاً :raised_hand::skin-tone-1: :smiley:` , `welcome :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`منور السيرفر يا حلو :blush:` , `welcome to the server :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });
client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    }) 
  
 








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

  















client.on('message',async message => {
    if (message.content === 'b!help') {
try {
message.author.send(`
╔══╗──────╔╗─╔═══╗──────────╔╗
║╔╗║─────╔╝╚╗║╔══╝──────────║║
║╚╝╚╦══╦═╩╗╔╝║╚══╦═╦╦══╦═╗╔═╝║
║╔═╗║║═╣══╣║─║╔══╣╔╬╣║═╣╔╗╣╔╗║
║╚═╝║║═╬══║╚╗║║──║║║║║═╣║║║╚╝║
╚═══╩══╩══╩═╝╚╝──╚╝╚╩══╩╝╚╩══╝
**b!help public | اوامر عامة
b!help music | اوامر الأغاني
b!help admin | أوامر الإدارة
b!help welcome | الترحيب والمغادرة
b!help owner | اوامر صاحب البوت**
`);
} catch(e) {
if(e) return message.reply('خاصك مقفول');
}
}
});




client.on('message', message => {
       if (message.content ===  "b!help welcome") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **الترحيب والمغادرة** ' ,' **  ** ')  
.addField('     **الترحيب** ' ,' **وسيتم الترحيب بالعضو الجديد تلقائيا welcome ضع روم اسمه** ')
     .addField('     **الرتبة التلقائية** ' ,' **ضع رتبة بإسم Member وسيتم إعطاء العضو رتبة تلقائية** ')
.setColor('RANDOM')
  message.author.send(embed);
    }
});



client.on('message', message => {
       if (message.content ===  "b!help admin") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **أوامر الإدارة** ' ,' **  ** ')  
.addField('     **b!clear** ' ,' **لمسح الشات** ')
.addField('    **b!mute**' ,' **لإعطاء ميوت لشخص ما** ')
.addField('    **b!unmute**' ,' **لفك الميوت عن الشخص** ')
.addField('    **b!ban**' ,' **لحظر الشخص من ** ')
.addField('    **b!unban**' ,' **لفك الحظر من الشخص ** ')
.setColor('RANDOM')
  message.author.send(embed);

    }
});

client.on('message', message => {
       if (message.content ===  "b!help public") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **أوامر الأعضاء** ' ,' **  ** ')  
.addField('     **b!help** ' ,' **لعرض أوامر السيرفر** ')
.addField('    **b!server**' ,' **لعرض حالة السيرفر** ')
.addField('     **b!support** ' ,' **لعرض سيرفر السبورت** ')
.addField('     **b!inv** ' ,' **لدعوة البوت للسيرفر** ')
.addField('     **b!roles** ' ,' **لعرض رتب السيرفر** ')
.setColor('RANDOM')
  message.author.send(embed);
    }
});


client.on('message', message => {
       if (message.content ===  "b!help music") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **أوامر الميوزك** ' ,' **  ** ')  
.addField('     **b!play** ' ,' **لبدء أغنية** ')
.addField('    **b!stop**' ,' **لإيقاف الأغنية** ')
.addField('     **b!vol** ' ,' **لتعديل مستوى الصوت** ')
.addField('     **b!np** ' ,' **لمعرفة الأغنية الحالية** ')
.addField('     **b!queue** ' ,' **لرؤية قائمة الإنتظار** ')
.addField('     **b!skip** ' ,' **لتخطي الأغنية** ')    
.setColor('RANDOM')
  message.author.send(embed);
    }
});


client.on('message', message => {
       if (message.content ===  "b!help owner") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.send)
.addField('     **اوامر صاحب البوت** ' ,' **  ** ')  
.addField('     **b!bc** ' ,' **لإرسال رسالة لكل السيرفرات اللي ضافت البوت** ')
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
if(!message.channel.guild) return message.reply(` `);
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
if(!message.channel.guild) return message.reply(` `);
message.reply("**تم ارسال رابط البوت في الخاص**")
message.react("📩")

}
});





