const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']});
var prefix = "!";
const guildobj = new Discord.Guild();

client.login("NjkxMTYwMzQ5OTI3NDA3NjY2.Xnb75Q.G_odaSw-GVReQc8KNUiIcEZH2MQ");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

client.on("message", texte =>
{
    if (!texte.guild) return
    if (texte.content === prefix + "teknopouf")
    {
        texte.channel.send("cocaine tek pour les teknopoufs !")
    }

    if  (texte.content === prefix + "info")
    {
        var infoRoll = new Discord.MessageEmbed()
        .setTitle("Quelques Infos") //Titre
        .setDescription("__Ce qu'il faut savoir sur KétaminePvP__ \n"
        +"-------------------------------------------------- \n"
        +"    __KétaminePvP est un serveur **PvP Factions**__      \n"
        +"dans un univers inspiré par les teufs et l'acide \n"
        +"-------------------------------------------------- \n"
        +"**Obsi Pétable**  \n\n"
        +"**nouvelles potions** et autres remontants :person_running:  \n \n"
        +"Expérience **inédite** grâce à un **launcher moddé** :exploding_head:  \n\n"
        +"looting **généreux** et très satisfaisant :chart_with_upwards_trend: \n\n" 
        +"encore + de fun plus loin et plus vite grâce aux **4 grades** :smirk: \n\n"
        +"Néanmoins **pas de P2W** parce qu'on est pas des petites frappes. :ok_hand: \n\n "
        +"En tout actuellement plus de **200 nouveautés** a découvrir sur le serveur \n\n"
        +"**Taper :** !site pour recevoir un lien vers **le site**")
        .setColor("#f9ac26")
        texte.channel.send(infoRoll)
    }
    if (texte.content === prefix + "site")
    {
        var siteRoll = new Discord.MessageEmbed().setTitle("Le Site").setURL("http://preventiondrogues.info/Keta/")
        .setDescription("===============================\n"
            +"**Viens combattre le craving en t'inscrivant\net en téléchargeant le launcher !**\n"
            +"===============================")
        .setColor("#f9ac26")
        .setImage("http://preventiondrogues.info/images/logo.png")
        
        texte.channel.send(siteRoll)
    }

});

client.on("guildMemberAdd", user =>
{
    var rand = getRandomInt(0,5);
    if (rand === 0)
    {
        user.guild.channels.resolve("691157675488182312").send("C'est délire ! " + user.displayName + " à rejoint le serv !")
        console.log(user, "s'est co");
    }
    else if (rand === 1)
    {
        user.guild.channels.resolve("691157675488182312").send("Mais qui voila-je ? C'est " + user.displayName + " qui viens combattre le craving !").setImage(user.p)
        console.log(user, "s'est co");
    }
    else if (rand === 2)
    {
        user.guild.channels.resolve("691157675488182312").send(user.displayName + " est venu pour se schmaker... mais il est a court de schmak !")
        console.log(user, "s'est co");
    }
    else if (rand === 3)
    {
        user.guild.channels.resolve("691157675488182312").send("Qu'est ce que c'est que ce bordel ? " + user.displayName + " est venu mettre un terme à la décadence !")
        console.log(user, "s'est co");
    }
    else if (rand === 4)
    {
        user.guild.channels.resolve("691157675488182312").send("Un nouveau voyageur de l'acide est arrivé en ville, son nom : " + user.displayName + ", et il est chaud pour la baston !")
        console.log(user, "s'est co");
    }
    else
    {
        console.log(user, "s'est co");
        user.guild.channels.resolve("691157675488182312").send(user.displayName + " à rejoint le serv !")
    }
});

client.on('messageReactionAdd', async (reaction, reactinguser) => {
    
	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
			return;
        }
    
    }

    if (reactinguser.partial){
        try {
            await reactinguser.fetch();
        } catch (error) {
            console.log("Impossible de get l'user", error);
            return;
        }
    }
    
    if (reaction.emoji.name === "💢" && reaction.message.channel.id === "691150879549816883")
    {
        const fonda = client.users.cache.get('447077441853456384');
        const lolo = client.users.cache.get('278242311719092226');

        fonda.send("On a besoin de ton aide, un joueur à allumé le KétaSignal")
        lolo.send("On a besoin de ton aide, un joueur à allumé le KétaSignal")

        console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
    }
});
   /* if (reaction.emoji.name === "📚" && reaction.message.channel.id === "691146665591308319")
    {
        const role = guildobj.roles.cache.find(role => role.name === 'Membre');
        const member = client.users.cache.get(reactinguser.id);
        member.roles.add(role);
        console.log(`${reactinguser}a réagi aux regles`);
    }
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});*/