const fs = require('fs');
const chalk = require('chalk');
global.owner = ['6283857526250']
global.packname = 'Bot WhatsApp'
global.author = 'Hanzdev'
global.botname = 'Hanz Bot'
global.listprefix = ['+','!','.']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true
global.number_bot = '6283125873309' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://files.catbox.moe/opa7d1.jpg',
	thumbnailUrl: 'https://files.catbox.moe/opa7d1.jpg',
	thumbnail: fs.readFileSync('./src/media/hanz.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: '',
	gh: '',
	gc: '',
	ch: '',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Privat Chat!',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}

//~~~~~~~~~~~~~~~< SETTING ORKUT >~~~~~~~~~~~~~~~\\

global.merchantid = "OK2124796"
global.apiorkut = "311993117368458882124796OKCT9A5C16723796359B753C0F7D30D40537"
global.qrorkut = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214745408315745430303UMI51440014ID.CO.QRIS.WWW0215ID20253677067980303UMI5204541153033605802ID5920TOKO PIPIT OK21247966004SOLO61055711662070703A0163048380"

global.apiBot = "foxstore2e36af05"

//~~~~~~~~~~~~~~~< PTERODACTYL >~~~~~~~~~~~~~~~\\
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID

// PUBLIC
global.domain = ""
global.apikey = ""
global.capikey = ""
global.linkgcadppub = "https://chat.whatsapp.com/H1DD05M4XEeEajrSmoOg6l"
global.linkgcptpub = "https://chat.whatsapp.com/H1DD05M4XEeEajrSmoOg6l"

// PRIVATE
global.domain2 = ""
global.apikey2 = ""
global.capikey2 = ""
global.linkgcadppriv = "https://chat.whatsapp.com/H1DD05M4XEeEajrSmoOg6l"
global.linkgcptpriv = "https://chat.whatsapp.com/H1DD05M4XEeEajrSmoOg6l"

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
