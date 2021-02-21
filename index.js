var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Bedava BDFD , DBD.js , Discord.JS , HTML & CSS Kodları",
assets : {
large_image : "https://images-ext-1.discordapp.net/external/PgopuQYGZPyc2Tu52mGovC2R0dQTCF_Dh3oVcJwAAY8/https/cdn.discordapp.com/icons/786282128584736809/a_c481b9e9e1f46a15eb75fd5a5e95a4a2.gif",
large_text : "Mükemmel Çekiliş İçin DM" // bu gözükmeyebilir!!
},
buttons : [{label : "Angel Code Share" , url : "https://discord.gg/UXPctgdC4t"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "739089386695819325" }).catch(console.error);
client.on('ready', () => {
	console.log(`Herhangi bir hata bulunamadı.`)
	console.log(client.user.username, `hesabı ile yetkilendirildi.`)
});
