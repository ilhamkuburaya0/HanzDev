process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { Client } = require('ssh2');
const { JSDOM } = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const crypto = require('crypto');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { JadiBot, StopJadiBot, ListJadiBot } = require('./src/jadibot');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addUang, setUang, transfer } = require('./lib/game');
const { pinterest, wallpaper, remini, wikimedia, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, quotedLyo, youSearch, simi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML } = require('./lib/function');

// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
async function toIDR(x) {
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return x
}
const capital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakbendera = db.game.tebakbendera = []

module.exports = naze = async (naze, m, chatUpdate, store) => {
	try {
		
		await LoadDataBase(naze, m);
		
		const botNumber = await naze.decodeJid(naze.user.id)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.type === 'editedMessage') ? (m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage ? m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : m.message.editedMessage.message.protocolMessage.editedMessage.conversation) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '¿') : listprefix.find(a => body.startsWith(a)) || '¿'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const time_now = new Date()
		const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
		const readmore = String.fromCharCode(8206).repeat(999)
		const setv = pickRandom(listv)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		
		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'Naze'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await naze.updateProfileStatus(`${naze.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		
		// Set Public
		if (!naze.public) {
			if (!isCreator && !m.key.fromMe) return
		}
		
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			if (db.set[botNumber].autoread && naze.public) naze.readMessages([m.key]);
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await naze.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await naze.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await naze.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await naze.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await naze.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Filter Bot
		if (m.isBot) return
		
		// Mengetik
		if (db.set[botNumber].autotyping && naze.public && isCmd) {
			await naze.sendPresenceUpdate('composing', m.chat)
		}
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam))
		}
		
		// Waktu Sholat
		const jadwalSholat = {
			Subuh: '04:30',
			Dzuhur: '12:06',
			Ashar: '15:21',
			Maghrib: '18:08',
			Isya: '19:28'
		}
		if (!this.intervalSholat) this.intervalSholat = null;
		if (!this.waktusholat) this.waktusholat = {};
		if (this.intervalSholat) clearInterval(this.intervalSholat); 
		setTimeout(() => {
			this.intervalSholat = setInterval(async() => {
				const jamSholat = moment.tz('Asia/Jakarta').locale('id').format('HH:mm');
				for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
					if (jamSholat === waktu && this.waktusholat[sholat] !== jamSholat) {
						this.waktusholat[sholat] = jamSholat
						for (const [idnya, settings] of Object.entries(db.groups)) {
							if (settings.waktusholat) {
								await naze.sendMessage(idnya, { text: `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu.slice(0, 5)}*\n_untuk wilayah Jakarta dan sekitarnya._` }).catch(e => {})
							}
						}
					}
				}
			}, 60000)
		}, time_end);
		
		// Cek Expired
		prem.expiredCheck(naze, premium);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await naze.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) naze.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				if (!roof.pilih2) naze.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) naze.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) naze.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				naze.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				naze.sendMessage(m.chat, { react: {text: '❌', key: m.key }})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					naze.sendMessage(m.chat, { react: { text: '😂', key: m.key }})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let { key } = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					naze.sendMessage(m.chat, { react: { text: '🎊', key: m.key }})
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy)) {
						if (akinator[m.sender].isWin) {
							let { key } = await naze.sendMessage(m.chat, { image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }}, { quoted: m })
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let { key } = await naze.sendMessage(m.chat, { image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }}, { quoted: m })
								akinator[m.sender].key = key.id
							} else {
								let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebaknegara, tebakgambar, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id) {
				if (gameName == 'kuismath') {
					jawaban = game[m.chat + id].jawaban
					const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`)
							delete kuismath[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				} else {
					jawaban = game[m.chat + id].jawaban
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`)
						delete game[m.chat + id]
					} else m.reply('*Jawaban Salah!*')
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await naze.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		
		switch(command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			
			// Owner Menu
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				naze.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await naze.query({
						tag: 'iq',
						attrs: {
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await naze.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delppbot': {
				if (!isCreator) return m.reply(mess.owner)
				await naze.removeProfilePicture(naze.user.id)
				m.reply('Sukses')
			}
			break
			case 'join': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await naze.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
			break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await naze.groupLeave(m.chat).then(() => naze.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }}))
			}
			break
			case 'clearchat': {
				if (!isCreator) return m.reply(mess.owner)
				await naze.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat)
				m.reply('Sukses Membersihkan Pesan')
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await naze.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'listblock': {
				let anu = await naze.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await naze.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'adduang': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 1000`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang) {
					addUang(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					addLimit(args[1], nmrnya, db)
					m.reply('Sukses Add limit')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await naze.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				try {
					let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
					let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
					if (anu.length === 0) return m.reply(teks)
					for (let i of anu) {
						let metadata = store.groupMetadata[i] || await naze.groupMetadata(i)
						teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
					}
					await naze.sendTextMentions(m.chat, teks, m)
				} catch (e) {
					m.reply('Tidak ada grup yang di temukan!')
				}
			}
			break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`)
				let group = await naze.groupCreate(q, [m.sender])
				let res = await naze.groupInviteCode(group.id)
				await naze.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, detectLink: true }, { quoted: m });
				await naze.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await naze.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (db.users[nmrnya] && db.users[nmrnya].limit) {
						prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
					} else m.reply('Nomer tidak terdaftar di BOT !')
				} else {
					m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					if (prem.checkPremiumUser(nmrnya, premium)) {
						premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
						fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
					} else {
						m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
					}
				} else m.reply('Nomer tidak terdaftar di BOT !')
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				try {
					if (quoted.isMedia) {
						if (/image|video/.test(quoted.mime)) {
							await naze.sendMessage('status@broadcast', {
								[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
								caption: text || m.quoted?.body || ''
							}, { statusJidList, broadcast: true })
							naze.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
						} else if (/audio/.test(quoted.mime)) {
							await naze.sendMessage('status@broadcast', {
								audio: await quoted.download(),
								mimetype: 'audio/mp4',
								ptt: true
							}, { backgroundColor, statusJidList, broadcast: true })
							naze.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
						} else m.reply('Only Support video/audio/image/text')
					} else if (quoted.text) {
						await naze.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
							textArgb: 0xffffffff,
							font: Math.floor(Math.random() * 9),
							backgroundColor, statusJidList,
							broadcast: true
						})
						naze.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else m.reply('Only Support video/audio/image/text')
				} catch (e) {
					m.reply('Gagal Mengupload Status Whatsapp!')
				}
			}
			break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								m.reply('Case berhasil ditambahkan');
							}
						});
					} else {
						m.reply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case"+`'${cases}'`+fs.readFileSync("naze.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
					}
					m.reply(`${getCase(text)}`)
				} catch (e) {
					m.reply(`case ${text} tidak ditemukan!`)
				}
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							m.reply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await naze.sendMessage(m.chat, {
					document: fs.readFileSync('./nazedev/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, { quoted: m });
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./nazedev', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));					
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./nazedev/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin','mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'donasi': case 'donate': {
				m.reply('Donasi Dapat Melalui Url Dibawah Ini :\nhttps://saweria.co/HanzStoredevv')
			}
			break
			
			// Group Menu
			case 'add': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await naze.groupInviteCode(m.chat)
								if (i.status == 401) return m.reply('Dia Memblokir Bot!')
								if (i.status == 409) return m.reply('Dia Sudah Join!')
								if (i.status == 500) return m.reply('Grub Penuh!')
								if (i.status == 408) {
									await naze.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Baru-Baru Saja Keluar Dari Grub Ini!\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, mentions: [numbersOnly] }, { quoted : m })
									await naze.sendMessage(`${numbersOnly ? numbersOnly : '6283857526250@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, detectLink: true, mentions: [numbersOnly, m.sender] }, { quoted : fkontak }).catch((err) => m.reply('Gagal Mengirim Undangan!'))
								} else if (i.status == 403) {
									let a = i.content.content[0].attrs
									await naze.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `Admin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, null, { mentions: [m.sender] })
									await naze.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, mentions: [numbersOnly] }, { quoted : m })
								} else if (![200, 401, 409, 500].includes(i.status)) {
									m.reply('Gagal Add User\nStatus : ' + i.status)
								}
							}
						})
					} catch (e) {
						m.reply('Terjadi Kesalahan! Gagal Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'request-join': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				const _list = await naze.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
				if (/a(p||pp||cc)(ept||rove)|true|ok/i.test(args[0])) {
					await naze.groupRequestParticipantsUpdate(m.chat, _list, 'approve')
				} else if (/reject|false|no/i.test(args[0])) {
					await naze.groupRequestParticipantsUpdate(m.chat, _list, 'reject')
				} else {
					m.reply(`List Request Join :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*Nothing*'}\nExample : ${prefix + command} approve/reject`)
				}
			}
			break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await naze.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await naze.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setppgroups': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(mime) && /webp/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await naze.query({
						tag: 'iq',
						attrs: {
							target: m.chat,
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await naze.updateProfilePicture(m.chat, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete')
				await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'pin': case 'unpin': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await naze.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await naze.groupInviteCode(m.chat)
				await naze.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await naze.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await naze.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => m.reply('Gagal!'))
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let teks = text.split(' ')
				let set = db.groups[m.chat]
				switch (teks[0].toLowerCase()) {
					case 'close': case 'open':
					await naze.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`))
					break
					case 'pesansementara': case 'disappearing':
					if (/90|7|1|24/i.test(teks[1])) {
						naze.sendMessage(m.chat, { disappearingMessagesInChat: /90/i.test(teks[1]) ? 7776000 : /7/i.test(teks[1]) ? 604800 : 86400 })
					} else if (/0|off|false/i.test(teks[1])) {
						naze.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
					} else m.reply('Silahkan Pilih :\n90 hari, 7 hari, 1 hari, off')
					break
					case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'mute': case 'antitoxic': case 'waktusholat': case 'nsfw':
					if (/on|true/i.test(teks[1])) {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (/off|false/i.test(teks[1])) {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
					default:
					m.reply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n- Pesan Sementara\n\nExample:\n${prefix + command} antilink off`)
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await naze.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				naze.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await naze.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await naze.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break
			
			// Bot Menu
			case 'owner': {
				await naze.sendContact(m.chat, owner, m);
			}
			break
			case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────❍');
			}
			break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await naze.sendMessage(m.chat, { text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_` }, { quoted: m })
				await naze.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
				m.reply(`Total Fitur : ${total}`);
			}
			break
			case 'daily': case 'claim': {
				daily(m, db)
			}
			break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				naze.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				naze.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			case 'runtime': case 'tes': case 'bot': {
				let teks = text.split(' ')
				let set = db.set[botNumber]
				switch(teks[0]) {
					case 'mode':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'public') {
						if (naze.public) return m.reply('*Sudah Aktif Sebelumnya*')
						naze.public = set.public = true
						m.reply('*Sukse Change To Public Usage*')
					} else if (teks[1] == 'self') {
						naze.public = set.public = false
						m.reply('*Sukse Change To Self Usage*')
					} else {
						m.reply('Mode self/public')
					}
					break
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'on') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (teks[1] == 'off') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
					case 'set': case 'settings':
					let settingsBot = Object.entries(set).map(([key, value]) => {
						let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
					}).join('\n');
					m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`);
					break
					default:
					if (teks[0] || teks[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`)
				}
				if (!teks[0] && !teks[1]) return naze.sendMessage(m.chat, { text: `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*` }, { quoted: m })
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			case 'speedtest': case 'speed': {
				m.reply('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						m.quoted.msg.viewOnce = false
						await naze.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
					} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
						m.quoted.msg.message.audioMessage.viewOnce = false
						m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
						await naze.relayMessage(m.chat, m.quoted.msg.message, {})
					} else {
						m.reply(`Reply view once message\nExample: ${prefix + command}`)
					}
				} catch (e) {
					m.reply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Group!')
				let _grup = /chat.whatsapp.com\/([\w\d]*)/;
				let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
				if (_grup.test(text)) {
					await naze.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
						let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : '' }\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\nParticipants:\n`
						_g.participants.forEach((a) => {
							teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
						})
						m.reply(teks)
					}).catch((e) => {
						if ([400, 406].includes(e.data)) return m.reply('Grup Tidak Di Temukan❗');
						if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
						if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					});
				} else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
					await naze.newsletterMsg(text.match(_saluran)[1]).then((n) => {
						m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nSubscriber: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nDescription: ${n.thread_metadata.description.text}\n`)
					}).catch((e) => m.reply('Saluran Tidak Di Temukan❗'))
				} else {
					m.reply('Hanya Support Url Grup atau Saluran!')
				}
			}
			break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!text) return m.reply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					m.reply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					m.reply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
				await naze.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				m.reply(teks)
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return m.reply('Format Tidak Tersedia!')
				if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await naze.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (!isLimit) return m.reply(mess.limit)
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await naze.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) m.reply(`_Waktu ${command} habis_`)
							delete menfes[m.sender];
						}, 600000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) naze.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}, 600000)
					};
					naze.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
					setLimit(m, db)
				} else {
					m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`)
				}
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				naze.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			case 'jadibot': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				await JadiBot(naze, nmrnya, m)
				m.reply(`Gunakan ${prefix}stopjadibot\nUntuk Berhenti`)
				setLimit(m, db)
			}
			break
			case 'stopjadibot': case 'deljadibot': {
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				await StopJadiBot(naze, nmrnya, m)
			}
			break
			case 'listjadibot': {
				ListJadiBot(naze, m)
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data))
					}
					setLimit(m, db)
				} catch (e) {
					m.reply(String(e))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await naze.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await naze.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Hanz Bot.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await naze.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await naze.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					naze.sendMessage(m.chat, { video: buffer, gifPlayback: true }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await naze.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					naze.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const msg = await generateWAMessageContent({ video: anu }, { upload: naze.waUploadToServer })
					await naze.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						m.reply('Url : ' + anu.url)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				naze.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await naze.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' }, { quoted: m })
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'enhance').then(a => {
						naze.sendMessage(m.chat, { image: a, caption: 'Done' }, { quoted: m });
						setLimit(m, db)
					}).catch(e => m.reply('Server sedang offline!'));
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
				}
			}
			break
			case 'ssweb': {
				if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/naze-md`)
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await naze.sendMessage(m.chat, { image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' }, { quoted: m })
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
			case 'getexif': {
				if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
			break
			case 'cuaca': case 'weather': {
				if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!')
				}
			}
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await quoted.download()
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else if (/video/.test(mime)) {
					if ((qmsg).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
			}
			break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
				try {
					if (!isPremium) return m.reply(mess.prem)
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`)
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`)
					m.reply(mess.wait)
					let atas = text.split`|`[0] ? text.split`|`[0] : '-'
					let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
					let media = await quoted.download()
					let mem = await UguuSe(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
					await naze.sendAsSticker(m.chat, smeme, m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Meme Sedang Offline!')
				}
			}
			break
			case 'emojimix': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`)
					for (let res of anu.data.results) {
						await naze.sendAsSticker(m.chat, res.url, m, { packname: packname, author: author })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal Mix Emoji!')
				}
			}
			break
			case 'qc': case 'quote': case 'fakechat': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && !m.quoted) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					let ppnya = await naze.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let res = await quotedLyo(text, m.pushName, ppnya);
					await naze.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Create Sedang Offline!')
				}
			}
			break
			case 'brat': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await naze.sendAsSticker(m.chat, 'https://brat.caliphdev.com/api/brat?text=' + (text || m.quoted.text), m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					try {
						await naze.sendMessage(m.chat, { image: { url: 'https://mannoffc-x.hf.space/brat?q=' + (text || m.quoted.text) }}, { quoted: m })
					} catch (e) {
						m.reply('Server Brat Sedang Offline!')
					}
				}
			}
			break
			case 'bratvid': case 'bratvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				const teks = (m.quoted ? m.quoted.text : text).split(' ');
				const tempDir = path.join(process.cwd(), 'database/sampah');
				try {
					const framePaths = [];
					for (let i = 0; i < teks.length; i++) {
						const currentText = teks.slice(0, i + 1).join(' ');
						const res = await axios.get('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(currentText), { responseType: 'arraybuffer' });
						const framePath = path.join(tempDir, `${m.sender + i}.mp4`);
						fs.writeFileSync(framePath, res.data);
						framePaths.push(framePath);
					}
					const fileListPath = path.join(tempDir, `${m.sender}.txt`);
					let fileListContent = '';
					for (let i = 0; i < framePaths.length; i++) {
						fileListContent += `file '${framePaths[i]}'\n`;
						fileListContent += `duration 0.5\n`;
					}
					fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
					fileListContent += `duration 3\n`;
					fs.writeFileSync(fileListPath, fileListContent);
					const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`);
					execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`);
					naze.sendAsSticker(m.chat, outputVideoPath, m, { packname: packname, author: author })
					framePaths.forEach((filePath) => fs.unlinkSync(filePath));
					fs.unlinkSync(fileListPath);
					fs.unlinkSync(outputVideoPath);
					setLimit(m, db)
				} catch (e) {
					console.log(e)
					m.reply('Terjadi Kesalahan Saat Memproses Permintaan!')
				}
			}
			break
			case 'wasted': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await naze.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
						setLimit(m, db)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'trigger': case 'triggered': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await naze.sendMessage(m.chat, { document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' }, { quoted: m })
						setLimit(m, db)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'nulis': {
				m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
					setLimit(m, db)
				})
			}
			break
			case 'nuliskanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
					setLimit(m, db)
				})
			}
			break
			case 'foliokiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
					setLimit(m, db)
				})
			}
			break
			case 'foliokanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
					setLimit(m, db)
				})
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await naze.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							naze.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						});
					} else {
						m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
					}
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'tinyurl': case 'shorturl': case 'shortlink': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/hitori`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					m.reply('Url : ' + anu.data)
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'git': case 'gitclone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!args[0]) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/hitori`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('Gunakan Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					naze.sendMessage(m.chat, { document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }, { quoted: m }).catch((e) => m.reply(mess.error))
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			
			// Ai Menu
			case 'ai': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let hasil = await yanzGpt(text)
					m.reply(hasil.choices[0].message.content)
				} catch (e) {
					try {
						let hasil = await youSearch(text)
						m.reply(hasil)
					} catch (e) {
						try {
							let hasil = await bk9Ai(text)
							m.reply(hasil.BK9)
						} catch (e) {
							m.reply(pickRandom(['Fitur Ai sedang bermasalah!','Tidak dapat terhubung ke ai!','Sistem Ai sedang sibuk sekarang!','Fitur sedang tidak dapat digunakan!']))
						}
					}
				}
			}
			break
			case 'simi': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					const hasil = await simi(text)
					m.reply(hasil.success)
				} catch (e) {
					m.reply('Server simi sedang offline!')
				}
			}
			break
			case 'txt2img': case 'texttoimage': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} anime, HD`)
				try {
					await naze.sendFileUrl(m.chat, `https://widipe.com/ai/text2img?text=${encodeURIComponent(text)}`, 'Done', m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal Create Gambar!')
				}
			}
			break
			
			// Search Menu
			case 'google': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let anu = await youSearch(text);
					m.reply(anu)
				} catch (e) {
					try {
						let anu = await yanzGpt(text);
						m.reply(hasil.choices[0].message.content)
					} catch (e) {
						m.reply('Pencarian Tidak Ditemukan!')
					}
				}
			}
			break
			case 'gimage': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				gis(text, async (err, result) => {
					if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					if (result == undefined) {
						m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await naze.sendMessage(m.chat, { image: { url: anu.url }, caption: 'Url : '+ anu.url }, { quoted: m })
					} else m.reply('Gagal Mencari Gambar!')
				});
			}
			break
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all)
					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await naze.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: m });
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			case 'pixiv': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await naze.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			case 'pinterest': case 'pint': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await pinterest(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await naze.sendMessage(m.chat, { image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` }, { quoted: m })
						setLimit(m, db)
					}
				} catch (e) {
					m.reply('Pencarian tidak ditemukan!');
				}
			}
			break
			case 'wallpaper': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await naze.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`}, { quoted: m })
						setLimit(m, db)
					}
				} catch (e) {
					m.reply('Server wallpaper sedang offline!')
				}
			}
			break
			case 'ringtone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await naze.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
				setLimit(m, db)
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`)
				let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
				let { objects } = await res.json()
				if (!objects.length) return m.reply('Pencarian Tidak di temukan')
				let txt = objects.map(({ package: pkg }) => {
					return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
				}).join`\n\n`
				m.reply(txt)
			}
			break
			case 'style': {
				if (!text) return m.reply(`Example: ${prefix + command} Naze`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				m.reply(txt)
			}
			break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`)
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
			break
			
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await naze.sendMessage(m.chat, {
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchJson('https://ytdl.axeel.my.id/api/download/audio?url=' + text)
						await naze.sendFileUrl(m.chat, hasil.downloads.url, hasil.metadata.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							let hasil = await fetchJson(api('hitori','/download/youtube', { url: text }, 'apikey'))
							await naze.sendFileUrl(m.chat, hasil.result.resultUrl.audio[0].download, hasil.result.title, m)
							setLimit(m, db)
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await naze.sendMessage(m.chat, { video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchJson('https://ytdl.axeel.my.id/api/download/video?url=' + text)
						await naze.sendFileUrl(m.chat, hasil.downloads.url, hasil.metadata.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							await naze.sendFileUrl(m.chat, 'https://simple.nvlgroup.my.id/download/youtube?url=' + text, '', m)
							setLimit(m, db)
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await instagramDl(text);
					if(hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await naze.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
					}
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchJson(api('hitori','/download/instagram', { url: text }, 'apikey'))
						if(hasil.result.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.length; i++) {
							await naze.sendFileUrl(m.chat, hasil.result[i].imageUrl, 'Done', m)
						}
						setLimit(m, db)
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await naze.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await naze.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await naze.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await naze.sendMessage(m.chat, {
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await naze.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mediafire': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await naze.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${decodeURIComponent(anu.name)}\n*${setv} Size* : ${anu.size}`, m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			case 'spotifydl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`)
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					const hasil = await spotifyDl(text);
					m.reply(mess.wait)
					await naze.sendMessage(m.chat, {
						audio: { url: hasil.download },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: clockString(hasil.duration),
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
					setLimit(m, db)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			
			// Quotes Menu
			case 'motivasi': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'bijak': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'dare': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'quotes': {
				const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json');
				const hasil = pickRandom(res);
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json');
				m.reply(`_${pickRandom(hasil)}_`)
			}
			break
			case 'renungan': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json');
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: pickRandom(hasil),
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'bucin': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json');
				m.reply(pickRandom(hasil))
			}
			break
			
			// Random Menu
			case 'coffe': case 'kopi': {
				await naze.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
			}
			break
			
			// Anime Menu
			case 'waifu': {
				try {
					if (text == 'nsfw') {
						if (!isNsfw) return m.reply('Filter Nsfw Sedang Aktif!')
						const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
						await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
						await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			case 'neko': {
				try {
					if (text == 'nsfw') {
						if (!isNsfw) return m.reply('Filter Nsfw Sedang Aktif!')
						const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
						await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/neko')
						await naze.sendFileUrl(m.chat, res.url, 'Random Neko', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			
			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await naze.sendAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let { data } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`);
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				try {
					const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json');
					const hasil = pickRandom(res);
					m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
				} catch (e) {
					m.reply(pickRandom(['Dokter Indosiar','Sigit Rendang','Ustadz Sinetron','Bocil epep']))
				}
			}
			break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
			}
			break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				naze.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(naze, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(naze, m, prefix, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(naze, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
					chat: m.reply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) m.reply(`_Waktu suit habis_`)
						delete suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await naze.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) m.reply(`_Waktu ${command} habis_`)
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					naze.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
				}
			}
			break
			case 'akinator': {
				if (text == 'start') {
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					await akinator[m.sender].start()
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					akinator[m.sender].key = key.id
					akinator[m.sender].waktu = setTimeout(() => {
						if (akinator[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}, 3600000)
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Sukses Mengakhiri sessi Akinator')
				} else m.reply(`Example : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json'));
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json'));
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json'));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json'));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json'));
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json'));
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json'));
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json'));
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json'));
				let { key } = await naze.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json'));
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			
			// Menu
			case 'allmenu': {
				let profile
				try {
					profile = await naze.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim
				}
				const menunya = `
╭──❍「 *USER INFO* 」❍
├ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
├ *Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Nama Bot* : ${botname}
├ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
├ *Owner* : @${owner[0].split('@')[0]}
├ *Mode* : ${naze.public ? 'Public' : 'Self'}
├ *Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
╰─┬────❍
╭─┴─❍「 *ABOUT* 」❍
├ *Tanggal* : ${tanggal}
├ *Hari* : ${hari}
├ *Jam* : ${jam} WIB
╰──────❍
╭──❍「 *BOT* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}jadibot
│${setv} ${prefix}stopjadibot
│${setv} ${prefix}listjadibot
│${setv} ${prefix}donasi
╰─┬────❍
╭─┴❍「 *GROUP* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}group set
╰─┬────❍
╭─┴❍「 *SEARCH* 」❍
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
╰─┬────❍
╭─┴❍「 *DOWNLOAD* 」❍
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}mediafire (url)
╰─┬────❍
╭─┴❍「 *QUOTES* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}truth
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *TOOLS* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
╰─┬────❍
╭─┴❍「 *AI* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}txt2img (query)
╰─┬────❍
╭─┴❍「 *ANIME* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
╰─┬────❍
╭─┴❍「 *GAME* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *FUN* 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *RANDOM* 」❍
│${setv} ${prefix}coffe
╰─┬────❍
╭─┴❍「 *OWNER* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} $
│${setv} >
│${setv} <
╰──────❍`
				await naze.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, { quoted: m })
			}
			break
			
			case "menu" : {
			const text = `ohayo minasang`
        		naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: ".owner",
                  buttonText: { displayText: "OWNER" },
                  type: 1
                },
                {
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "KLIK BOS",
                      sections: [
                        {
                          title: "PANEL",
                          rows: [
                            {
                              title: "BeliPanelPrivate",
                              description: "klik untuk membeli",
                              id: ".buypanel1"
                            },
                            {
                              title: "BeliPanelPublic",
                              description: "klik untuk membeli",
                              id: ".buypanel2"
                            }
                          ]
                        },{
                          title: "ADMIN PANEL",
                          rows: [
                            {
                              title: "BeliadpPrivate",
                              description: "klik untuk membeli",
                              id: ".buyadp1"
                            },
                            {
                              title: "BeliadpPublic",
                              description: "klik untuk membeli",
                              id: ".buyadp2"
                            }
                          ]
                        },{
                          title: "PANTHER PANEL",
                          rows: [
                            {
                              title: "BeliPtPrivate",
                              description: "klik untuk membeli",
                              id: ".buypt1"
                            },
                            {
                              title: "BeliPtPublic",
                              description: "klik untuk membeli",
                              id: ".buypt2"
                            }
                          ]
                        },{
                          title: "OWNER PANEL",
                          rows: [
                            {
                              title: "BeliOwnerPrivate",
                              description: "klik untuk membeli",
                              id: ".buyown1"
                            },
                            {
                              title: "BeliOwnerPrivate",
                              description: "klik untuk membeli",
                              id: ".buyown2"
                            }
                          ]
                        },{
                          title: "JASA INSTALL",
                          rows: [
                            {
                              title: "jasa install panel",
                              description: "klik untuk membeli",
                              id: ".jasainstallpanel"
                            },{
                              title: "jasa install Thema",
                              description: "klik untuk membeli",
                              id: ".jasainstalltema"
                            },{
                              title: "jasa hb panel",
                              description: "klik untuk membeli",
                              id: ".jasahbpanel"
                            }
                          ]
                        }
                      ]
                    })
                  },
                  type: 2
                }
              ]}, { quoted: m })
			}
			break
			
			// panel private
			case "buypanel1" : {
			const text = `list harga panel private`
        		naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                                {
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "KLIK",
                      sections: [
                        {
                          title: "PANEL",
                          rows: [
                            {
                              title: "panel 1gb Rp harga 500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 1gb"
                            },
                            {
                              title: "panel 2gb Rp harga 1000",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 2gb"
                            },
                            {
                              title: "panel 3gb Rp harga 1500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 3gb"
                            },
                            {
                              title: "panel 4gb Rp harga 2000",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 4gb"
                            },
                            {
                              title: "panel 5gb Rp harga 2500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 5gb"
                            },
                             {
                              title: "panel 6gb Rp harga 3000",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 6gb"
                            },
                             {
                              title: "panel 7gb Rp harga 3500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 7gb"
                            },
                             {
                              title: "panel 8gb Rp harga 4000",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 8gb"
                            },
                            {
                              title: "panel 9gb Rp harga 4500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 9gb"
                            },
                            {
                              title: "panel 10gb Rp harga 5000",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv 10gb"
                            },
                            {
                              title: "panel unli Rp harga 5500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpriv unli"
                            }
                          ]
                        }
                      ]
                    })
                  },
                  type: 2
                }
              ]}, { quoted: m })
			}
			break
	        
	    	case "buypanel2" : {
			const text = `list harga panel public`
        		naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                 {
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "KLIK",
                      sections: [
                        {
                          title: "PANEL",
                          rows: [
                            {
                              title: "panel 1gb Rp harga 100",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 1gb"
                            },
                            {
                              title: "panel 2gb Rp harga 200",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 2gb"
                            },
                            {
                              title: "panel 3gb Rp harga 300",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 3gb"
                            },
                            {
                              title: "panel 4gb Rp harga 400",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 4gb"
                            },
                            {
                              title: "panel 5gb Rp harga 500",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 5gb"
                            },
                             {
                              title: "panel 6gb Rp harga 600",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 6gb"
                            },
                             {
                              title: "panel 7gb Rp harga 700",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 7gb"
                            },
                             {
                              title: "panel 8gb Rp harga 800",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 8gb"
                            },
                            {
                              title: "panel 9gb Rp harga 900",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 9gb"
                            },
                            {
                              title: "panel 10gb Rp harga 1000",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub 10gb"
                            },
                            {
                              title: "panel unli Rp harga 1100",
                              description: "KLIK untuk membeli",
                              id: ".buypanelpub unli"
                            }
                          ]
                        }
                      ]
                    })
                  },
                  type: 2
                }
              ]}, { quoted: m })
			}
			break
			
			// button admin panel
			case "buyadp1" : {
			const text = `\`ADMIN PANEL PRIVATE\`

produk : Adp Private
harga : Rp. 6000
- `
naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: `.buyadppriv`,
                  buttonText: { displayText: "beli" },
                  type: 1
                },
              ]}, { quoted: m })
			}
			break
			
		    case "buyadp2" : {
			const text = `\`ADMIN PANEL PUBLIC\`

produk : Adp Public
harga : Rp. 8000
- `
naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: `.buyadppub`,
                  buttonText: { displayText: "beli" },
                  type: 1
                },
              ]}, { quoted: m })
			}
			break
			
			// button pt panel
		    case "buypt1" : {
			const text = `\`PARTNER PANEL PRIVATE\`

produk : pt private
harga : Rp. 15000
- `
naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: `.buyptpanelpriv`,
                  buttonText: { displayText: "beli" },
                  type: 1
                },
              ]}, { quoted: m })
			}
			break
			
		    case "buypt2" : {
			const text = `\`PARTNER PANEL PUBLIC\`

produk : pt public
harga : Rp. 12000
- `
naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: `.buyptpanelpub`,
                  buttonText: { displayText: "beli" },
                  type: 1
                },
              ]}, { quoted: m })
			}
			break
			
			// button own panel
			case "buyown1" : {
			const text = `\`OWNER PANEL PUBLIC\`

produk : Own pnl Public
harga : Rp. 16000
- `
naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: `.buyownpanelpub`,
                  buttonText: { displayText: "beli" },
                  type: 1
                },
              ]}, { quoted: m })
			}
			break
			
		    case "buyown2" : {
			const text = `\`OWNER PANEL PRIVATE\`

produk : own private
harga : Rp. 20000
- `
naze.sendButtonMsg(m.chat, { text: text, footer: global.botname, buttons: [
                {
                  buttonId: `.buyownpanelpriv`,
                  buttonText: { displayText: "beli" },
                  type: 1
                },
              ]}, { quoted: m })
			}
			break
			
			// Button install Panel
            case 'jasainstallpanel': {
                if (!text || !text.includes("|")) 
                    return m.reply(".jasainstallpanel ipvps|pwvps|domain.com|node.com|ram");
                
                let vii = text.split("|");
                if (vii.length < 5) 
                    return m.reply(".jasainstallpanel ipvps|pwvps|domain.com|node.com|ram");
            
                global.installpanell = {
                    vps: vii[0], 
                    pwvps: vii[1],
                    domain: vii[2],
                    nodedomain: vii[3],
                    rampanel: vii[4]
                };
            
                const emojis = ['🎭', '🎰', '✅'];
                let count = 0;
            
                const sendEmojiReactions = async () => {
                    if (count < 3) {
                        await naze.sendMessage(m.chat, {
                            react: {
                                text: emojis[count % emojis.length],
                                key: m.key,
                            },
                        });
            
                        count++;
                        setTimeout(sendEmojiReactions, 100);
                    } else {
                        let message = `
*_Silahkan Memilih Region & Versi Panel_*
━━━━━━━━━━━━━━━━━━━━━
얀덱스 🏙
> *_Jasa Install Panel By HanzStore❗_*
> *_Setelah selesai dan bot mengirimkan data panel, ambil token node dan kirim ke owner dengan cara tekan tombol di bawah_*
> *_Dan dimohon untuk mengirim pesan dengan teks: .startwings IPvps|PWvps|Token_node_*
`;
            
                        await naze.sendButtonMsg(m.chat, { 
                            text: message, 
                            footer: global.botname, 
                            buttons: [
                            {
                              nativeFlowInfo: {
                                name: "single_select",
                                paramsJson: JSON.stringify({
                                  title: "KLIK",
                                  sections: [
                                    {
                                      title: "panel",
                                      rows: [
                                        {
                                          title: "Regional Singapore Versi New",
                                          description: "klik untuk membeli",
                                          id: ".installpanel"
                                        }
                                      ]
                                    }
                                  ]
                                })
                              },
                              type: 2
                            }
                            ]
                        }, { quoted: m });
                    }
                };
            
                sendEmojiReactions();
                }
                break;
                
                // button install thema
                case "jasainstalltema": {
                    if (!text || !text.includes("|")) 
                        return m.reply(".jasainstalltema ipvps|pwvps");
                    
                    let vii = text.split("|");
                    if (vii.length < 2) 
                        return m.reply(example("ipvps|pwvps"));
                
                    global.installtema = {
                        vps: vii[0], 
                        pwvps: vii[1]
                    };
                
                    let message = `
*_Silakan Pilih Region & Versi Panel_*
━━━━━━━━━━━━━━━━━━━━━
> *_Jasa Install Tema By HanzStore❗_*
> *_Pilih regional dan versi tema dengan tombol di bawah_*
`;
                
                    await naze.sendButtonMsg(m.chat, { 
                        text: message, 
                        footer: global.botname, 
                        buttons: [
                            {
                                nativeFlowInfo: {
                                    name: "single_select",
                                    paramsJson: JSON.stringify({
                                        title: "Klik untuk memilih",
                                        sections: [
                                            {
                                                title: "Pilih Thema",
                                                rows: [
                                                    {
                                                        title: "Nebula",
                                                        description: "Klik untuk membeli",
                                                        id: ".jasainstalltemanebula"
                                                    },{
                                                        title: "Enigma",
                                                        description: "Klik untuk membeli",
                                                        id: ".jasainstalltemaenigma"
                                                    },{
                                                        title: "Night Core",
                                                        description: "Klik untuk membeli",
                                                        id: ".jasainstalltemanightcore"
                                                    },{
                                                        title: "Elysium",
                                                        description: "Klik untuk membeli",
                                                        id: ".jasainstalltemaelysium"
                                                    }
                                                ]
                                            }
                                        ]
                                    })
                                },
                                type: 2
                            }
                        ]
                    }, { quoted: m });
                
                    break;
                }
                

// case otomatis 			
case "buypanelpub": {
    if (m.isGroup) return m.reply("🚫 Pembelian Panel Pterodactyl hanya bisa dilakukan di private chat.");
    if (db.users[m.sender].status_deposit) return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let teks = `
━━━━━━━━━━━━━━━━━━━━━━━━━━
*✨ List RAM Server yang Tersedia ✨*

➤ *1GB*  = 500
➤ *2GB*  = 1000
➤ *3GB*  = 1500
➤ *4GB*  = 2000
➤ *5GB*  = 2500
➤ *6GB*  = 3000
➤ *7GB*  = 3500
➤ *8GB*  = 4000
➤ *9GB*  = 4500
➤ *10GB* = 5000
➤ *Unlimited* = 6000

📝 Contoh penggunaan : *.buypanelpub* unlimited

━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    
    if (!text) return m.reply(teks);
    
    let Obj = {};
    let cmd = text.toLowerCase();
    
    // Setup konfigurasi berdasarkan input user
    const configs = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40", harga: "500" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60", harga: "1000" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80", harga: "1500" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100", harga: "2000" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120", harga: "2500" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140", harga: "3000" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160", harga: "3500" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180", harga: "4000" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200", harga: "4500" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220", harga: "5000" },
        "unli": { ram: "0", disk: "0", cpu: "0", harga: "6000" },
        "unlimited": { ram: "0", disk: "0", cpu: "0", harga: "6000" }
    };
    
    if (configs[cmd]) {
        Obj = configs[cmd];
    } else {
        return m.reply(teks);
    }
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10

    try {
        // API URL Update for Payment Creation with correct apikey
        const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
        const ress = get.data.data
        const teks3 = `
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        *🔔 INFORMASI PEMBAYARAN 🔔*

        ➤ *ID Pembayaran:* ${ress.reff_id}
        ➤ *Total Pembayaran:* Rp${await toIDR(ress.nominal)}
        ➤ *Barang:* Panel Pterodactyl Public
        ➤ *Expired:* 5 menit

        ⚠️ *Catatan:* 
        QRIS pembayaran hanya berlaku dalam 5 menit. Jika melewati 5 menit, pembayaran akan dianggap tidak valid.
        Setelah pembayaran berhasil, bot akan mengirimkan status pembayarannya.

        ❌ Ketik *.batalbeli* untuk membatalkan transaksi.

        ┛━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        `;
        
        let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: ress.reff_id, 
            amount: ress.nominal.toString(), 
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                        await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(8000);
            const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
            const req = await resultcek.data;

            if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);
                await naze.sendMessage(db.users[m.sender].saweria.chat, {
                    delete: db.users[m.sender].saweria.msg.key
                 });
                await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL ✅*

ID : ${db.users[m.sender].saweria.idDeposit}
Total : Rp ${await toIDR(db.users[m.sender].saweria.amount)}
Status : Success
`}, {quoted: db.users[m.sender].saweria.msg});
                
                let username = crypto.randomBytes(4).toString('hex');
                let email = username+"@gmail.com";
                let name = capital(username) + " Server";
                let password = username+crypto.randomBytes(2).toString('hex');
                
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username.toLowerCase(),
                        "first_name": name,
                        "last_name": "Server",
                        "language": "en",
                        "password": password.toString()
                    })
                });

                let data = await f.json();
                if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

                let user = data.attributes;
                let desc = "";
                let usr_id = user.id;

                let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });

                let data2 = await f1.json();
                let startup_cmd = data2.attributes.startup;

                let f2 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": desc,
                        "user": usr_id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start"
                        },
                        "limits": {
                            "memory": Obj.ram,
                            "swap": 0,
                            "disk": Obj.disk,
                            "io": 500,
                            "cpu": Obj.cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations:[parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                });

                let result = await f2.json();
                if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2));

                let server = result.attributes;
                var orang = db.users[m.sender].saweria.chat;
                var tekspanel = `
*✨ Berhasil Membuat Akun Panel ✅✨*

➤ *ID Server:* ${server.id}
➤ *Name:* ${name}
➤ *Username:* ${user.username}
➤ *Password:* ${password}
➤ *Login:* ${global.domain}
➤ *Ram:* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
➤ *Cpu:* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
➤ *Disk:* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
➤ *Expired Server:* 1 Bulan

⚠️ *Rules Pembelian Panel:*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`;
                await naze.sendMessage(orang, {text: tekspanel}, {quoted: null});
                await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan. Mohon coba lagi nanti.");
    }
 }
break;			

case "buypanelpriv": {
    if (m.isGroup) return m.reply("🚫 Pembelian Panel Pterodactyl hanya bisa dilakukan di private chat.");
    if (db.users[m.sender].status_deposit) return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let teks = `
━━━━━━━━━━━━━━━━━━━━━━━━━━
*✨ List RAM Server yang Tersedia ✨*

➤ *1GB*  = 500
➤ *2GB*  = 1000
➤ *3GB*  = 1500
➤ *4GB*  = 2000
➤ *5GB*  = 2500
➤ *6GB*  = 3000
➤ *7GB*  = 3500
➤ *8GB*  = 4000
➤ *9GB*  = 4500
➤ *10GB* = 5000
➤ *Unlimited* = 6000

📝 Contoh penggunaan : *.buypanelpriv* unlimited

━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    
    if (!text) return m.reply(teks);
    
    let Obj = {};
    let cmd = text.toLowerCase();
    
    // Setup konfigurasi berdasarkan input user
    const configs = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40", harga: "500" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60", harga: "1000" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80", harga: "1500" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100", harga: "2000" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120", harga: "2500" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140", harga: "3000" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160", harga: "3500" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180", harga: "4000" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200", harga: "4500" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220", harga: "5000" },
        "unli": { ram: "0", disk: "0", cpu: "0", harga: "6000" },
        "unlimited": { ram: "0", disk: "0", cpu: "0", harga: "6000" }
    };
    
    if (configs[cmd]) {
        Obj = configs[cmd];
    } else {
        return m.reply(teks);
    }
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10

    try {
        // API URL Update for Payment Creation with correct apikey
        const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
        const ress = get.data.data
        const teks3 = `
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        *🔔 INFORMASI PEMBAYARAN 🔔*

        ➤ *ID Pembayaran:* ${ress.reff_id}
        ➤ *Total Pembayaran:* Rp${await toIDR(ress.nominal)}
        ➤ *Barang:* Panel Pterodactyl Public
        ➤ *Expired:* 5 menit

        ⚠️ *Catatan:* 
        QRIS pembayaran hanya berlaku dalam 5 menit. Jika melewati 5 menit, pembayaran akan dianggap tidak valid.
        Setelah pembayaran berhasil, bot akan mengirimkan status pembayarannya.

        ❌ Ketik *.batalbeli* untuk membatalkan transaksi.

        ┛━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        `;
        
        let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: ress.reff_id, 
            amount: ress.nominal.toString(), 
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                        await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(8000);
            const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
            const req = await resultcek.data;

            if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);
                await naze.sendMessage(db.users[m.sender].saweria.chat, {
                    delete: db.users[m.sender].saweria.msg.key
                 });
                await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL ✅*

ID : ${db.users[m.sender].saweria.idDeposit}
Total : Rp ${await toIDR(db.users[m.sender].saweria.amount)}
Status : Success
`}, {quoted: db.users[m.sender].saweria.msg});
                
                let username = crypto.randomBytes(4).toString('hex');
                let email = username+"@gmail.com";
                let name = capital(username) + " Server";
                let password = username+crypto.randomBytes(2).toString('hex');
                
                let f = await fetch(domain2 + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username.toLowerCase(),
                        "first_name": name,
                        "last_name": "Server",
                        "language": "en",
                        "password": password.toString()
                    })
                });

                let data = await f.json();
                if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

                let user = data.attributes;
                let desc = "";
                let usr_id = user.id;

                let f1 = await fetch(domain2 + `/api/application/nests/${nestid}/eggs/` + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    }
                });

                let data2 = await f1.json();
                let startup_cmd = data2.attributes.startup;

                let f2 = await fetch(domain2 + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": desc,
                        "user": usr_id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start"
                        },
                        "limits": {
                            "memory": Obj.ram,
                            "swap": 0,
                            "disk": Obj.disk,
                            "io": 500,
                            "cpu": Obj.cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations:[parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                });

                let result = await f2.json();
                if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2));

                let server = result.attributes;
                var orang = db.users[m.sender].saweria.chat;
                var tekspanel = `
*✨ Berhasil Membuat Akun Panel ✅✨*

➤ *ID Server:* ${server.id}
➤ *Name:* ${name}
➤ *Username:* ${user.username}
➤ *Password:* ${password}
➤ *Login:* ${global.domain2}
➤ *Ram:* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
➤ *Cpu:* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
➤ *Disk:* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
➤ *Expired Server:* 1 Bulan

⚠️ *Rules Pembelian Panel:*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`;
                await naze.sendMessage(orang, {text: tekspanel}, {quoted: null});
                await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan. Mohon coba lagi nanti.");
    }
 }
break;			

// admin panel
case "buyadppub": {
    if (m.isGroup) return m.reply("🚫 Pembelian Admin Panel Pterodactyl hanya bisa dilakukan di private chat, yuk chat pribadi!");

    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum selesai! Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya.");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "6000";
    Obj.username = us;
    
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 50);

    try {
        const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
        const ress = get.data.data
        const teks3 = `
🛒 *INFORMASI PEMBAYARAN*

*💳 ID Transaksi :* ${ress.reff_id}
*💰 Total Pembayaran :* Rp${await toIDR(ress.nominal)}
*📦 Barang :* Admin Panel Pterodactyl
*⏳ Pembayaran Expired :* 5 menit

⚠️ *Perhatian*: QRIS hanya berlaku dalam 5 menit. Jangan lewatkan kesempatan ini! 

📱 Jika pembayaran berhasil, kamu akan mendapatkan notifikasi status pembayaran otomatis. 
Ketik *.batalbeli* untuk membatalkan transaksi kapan saja!

📅 Pastikan untuk melakukan pembayaran dalam waktu yang ditentukan!
`;
        
        let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
        
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: ress.reff_id,
            amount: ress.nominal.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
                        await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(8000);
            const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
            const req = await resultcek.data;

            if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);
                await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL ✅*

ID : ${db.users[m.sender].saweria.idDeposit}
Total : Rp ${await toIDR(db.users[m.sender].saweria.amount)}
Status : Success
                `}, {quoted: db.users[m.sender].saweria.msg});

                let username = Obj.username;
                let email = username + "@gmail.com";
                let name = capital(username);
                let password = crypto.randomBytes(4).toString('hex');

                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username.toLowerCase(),
                        "first_name": name,
                        "last_name": "Admin",
                        "root_admin": true,
                        "language": "en",
                        "password": password.toString()
                    })
                });

                let data = await f.json();
                if (data.errors) return m.reply("❌ Terjadi kesalahan: " + JSON.stringify(data.errors[0], null, 2));

                let user = data.attributes;
                var teks = `
🎉 *Berhasil Membuat Admin Panel Pterodactyl ✅*

*🆔 ID User :* ${user.id}
*👤 Nama :* ${user.first_name}
*📛 Username :* ${user.username}
*🔑 Password :* ${password}
*🌐 Login di :* ${global.domain}
*💬 GB Whatsapp :* ${global.linkgcadppub}

⚠️ *Perhatian:*
- Jangan coba-coba mencuri SC! Terbukti? Akun kamu langsung dihapus!
- Simpan dengan baik data akun ini.
- Gunakan panel hanya untuk keperluan yang sah.

🔒 Garansi hanya berlaku jika ada bukti chat pembelian.
                `;

                await naze.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
                await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memproses transaksi, coba lagi nanti.");
    }
}
break;

case "buyadppriv": {
    if (m.isGroup) return m.reply("🚫 Pembelian Admin Panel Pterodactyl hanya bisa dilakukan di private chat, yuk chat pribadi!");

    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum selesai! Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya.");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "6000";
    Obj.username = us;
    
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 50);

    try {
        const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
        const ress = get.data.data
        const teks3 = `
🛒 *INFORMASI PEMBAYARAN*

*💳 ID Transaksi :* ${ress.reff_id}
*💰 Total Pembayaran :* Rp${await toIDR(ress.nominal)}
*📦 Barang :* Admin Panel Pterodactyl
*⏳ Pembayaran Expired :* 5 menit

⚠️ *Perhatian*: QRIS hanya berlaku dalam 5 menit. Jangan lewatkan kesempatan ini! 

📱 Jika pembayaran berhasil, kamu akan mendapatkan notifikasi status pembayaran otomatis. 
Ketik *.batalbeli* untuk membatalkan transaksi kapan saja!

📅 Pastikan untuk melakukan pembayaran dalam waktu yang ditentukan!
`;
        
        let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
        
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: ress.reff_id,
            amount: ress.nominal.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                        await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ Waktu pembayaran telah expired, transaksi dibatalkan!"}, {quoted: db.users[m.sender].saweria.msg});
                        await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        await clearInterval(db.users[m.sender].saweria.exp);
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
            await sleep(8000);
            const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
            const req = await resultcek.data;

            if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);
                await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL ✅*

ID : ${db.users[m.sender].saweria.idDeposit}
Total : Rp ${await toIDR(db.users[m.sender].saweria.amount)}
Status : Success
                `}, {quoted: db.users[m.sender].saweria.msg});

                let username = Obj.username;
                let email = username + "@gmail.com";
                let name = capital(username);
                let password = crypto.randomBytes(4).toString('hex');

                let f = await fetch(domain2 + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username.toLowerCase(),
                        "first_name": name,
                        "last_name": "Admin",
                        "root_admin": true,
                        "language": "en",
                        "password": password.toString()
                    })
                });

                let data = await f.json();
                if (data.errors) return m.reply("❌ Terjadi kesalahan: " + JSON.stringify(data.errors[0], null, 2));

                let user = data.attributes;
                var teks = `
🎉 *Berhasil Membuat Admin Panel Pterodactyl ✅*

*🆔 ID User :* ${user.id}
*👤 Nama :* ${user.first_name}
*📛 Username :* ${user.username}
*🔑 Password :* ${password}
*🌐 Login di :* ${global.domain}
*💬 GB Whatsapp :* ${global.linkgcadppriv}

⚠️ *Perhatian:*
- Jangan coba-coba mencuri SC! Terbukti? Akun kamu langsung dihapus!
- Simpan dengan baik data akun ini.
- Gunakan panel hanya untuk keperluan yang sah.

🔒 Garansi hanya berlaku jika ada bukti chat pembelian.
                `;

                await naze.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
                await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memproses transaksi, coba lagi nanti.");
    }
}
break;

// partner
case "buyptpanelpub": {
    if (m.isGroup) return m.reply("❌ *Pembelian Partner Panel Pterodactyl hanya bisa di dalam private chat!*");
    if (db.users[m.sender].status_deposit) return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "13000"; // Harga untuk panel publik
    Obj.username = us;
    
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 50);

    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data

    const teks3 = `
    🌟 *INFORMASI PEMBAYARAN*

    📲 *ID Transaksi:* ${ress.reff_id}
    💸 *Total Pembayaran:* Rp${await toIDR(ress.nominal)}
    🛒 *Barang:* Partner Panel Pterodactyl
    ⏳ *Expired:* 5 menit

    ⚠️ *Note:*
    QRIS pembayaran hanya berlaku dalam 5 menit!  
    Jika melewati waktu pembayaran, transaksi dinyatakan tidak valid.
    
    Setelah pembayaran berhasil, bot akan mengirimkan notifikasi status pembayaran secara otomatis.
    
    🔄 Ketik *.batalbeli* untuk membatalkan transaksi
    `;

    let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: ress.reff_id, 
        amount: ress.nominal.toString(), 
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                    await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                    await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);

        const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
        const req = await resultcek.data;

        if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL ✅*

ID : ${db.users[m.sender].saweria.idDeposit}
Total : Rp ${await toIDR(db.users[m.sender].saweria.amount)}
Status : Success
            `}, {quoted: db.users[m.sender].saweria.msg});

            let username = Obj.username;
            let email = username + "@gmail.com";
            let name = capital(username);
            let password = crypto.randomBytes(4).toString('hex');

            let f = await fetch(global.domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Admin",
                    "root_admin": true,
                    "language": "en",
                    "password": password.toString()
                })
            });

            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;
            var teks = `
            🎉 *Berhasil Membuat Partner Panel ✅*

            📑 *ID User:* ${user.id}
            👤 *Nama:* ${user.first_name}
            🏷 *Username:* ${user.username}
            🔑 *Password:* ${password.toString()}
            🌐 *Login:* ${global.domain}
            🗣 *Gabung Whatsapp:* ${global.linkgcptpub}

            *⚠️ Rules Partner Panel:*
            - Jangan Maling SC! Jika ketahuan, akun akan dihapus!
            - Simpan data akun ini dengan baik!
            - Gunakan panel seperlunya saja, jangan asal buat!
            - Untuk klaim garansi, wajib membawa bukti SS saat pembelian.
            `;

            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
            await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case "buyptpanelpriv": {
    if (m.isGroup) return m.reply("❌ *Pembelian Partner Panel Pterodactyl hanya bisa di dalam private chat!*");
    if (db.users[m.sender].status_deposit) return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "13000"; // Harga untuk panel publik
    Obj.username = us;
    
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 50);

    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data

    const teks3 = `
    🌟 *INFORMASI PEMBAYARAN*

    📲 *ID Transaksi:* ${ress.reff_id}
    💸 *Total Pembayaran:* Rp${await toIDR(ress.nominal)}
    🛒 *Barang:* Partner Panel Pterodactyl
    ⏳ *Expired:* 5 menit

    ⚠️ *Note:*
    QRIS pembayaran hanya berlaku dalam 5 menit!  
    Jika melewati waktu pembayaran, transaksi dinyatakan tidak valid.
    
    Setelah pembayaran berhasil, bot akan mengirimkan notifikasi status pembayaran secara otomatis.
    
    🔄 Ketik *.batalbeli* untuk membatalkan transaksi
    `;

    let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: ress.reff_id, 
        amount: ress.nominal.toString(), 
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                    await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                    await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);

        const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
        const req = await resultcek.data;

        if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL ✅*

ID : ${db.users[m.sender].saweria.idDeposit}
Total : Rp ${await toIDR(db.users[m.sender].saweria.amount)}
Status : Success
            `}, {quoted: db.users[m.sender].saweria.msg});

            let username = Obj.username;
            let email = username + "@gmail.com";
            let name = capital(username);
            let password = crypto.randomBytes(4).toString('hex');

            let f = await fetch(domain2 + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Admin",
                    "root_admin": true,
                    "language": "en",
                    "password": password.toString()
                })
            });

            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;
            var teks = `
            🎉 *Berhasil Membuat Partner Panel ✅*

            📑 *ID User:* ${user.id}
            👤 *Nama:* ${user.first_name}
            🏷 *Username:* ${user.username}
            🔑 *Password:* ${password.toString()}
            🌐 *Login:* ${global.domain2}
            🗣 *Gabung Whatsapp:* ${global.linkgcptpriv}

            *⚠️ Rules Partner Panel:*
            - Jangan Maling SC! Jika ketahuan, akun akan dihapus!
            - Simpan data akun ini dengan baik!
            - Gunakan panel seperlunya saja, jangan asal buat!
            - Untuk klaim garansi, wajib membawa bukti SS saat pembelian.
            `;

            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
            await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

// owner panel
case "buyownpanelpub": {
    if (m.isGroup) return m.reply("🔒 Pembelian Owner Panel Pterodactyl hanya bisa di dalam private chat!");
    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "17000"; 
    Obj.username = us;
    
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 70);
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data
    
    const teks3 = `
    *🔑 INFORMASI PEMBAYARAN*

    💳 *ID Transaksi:* ${ress.reff_id}  
    💰 *Total Pembayaran:* Rp${await toIDR(ress.nominal)}  
    📦 *Barang:* Owner Panel Pterodactyl  
    ⏳ *Expired:* 5 menit

    *Note:*  
    🚨 QRIS hanya berlaku 5 menit! Jika melebihi waktu, pembayaran akan dianggap tidak valid.  
    ✅ Setelah pembayaran berhasil, bot akan memberi notifikasi otomatis ke chat kamu!  
    Ketik *.batalbeli* untuk membatalkan transaksi.

    ⏳ Pembayaran harus segera dilakukan agar tidak expired!
    `;

    let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: ress.reff_ir, 
        amount: ress.nominal.toString(), 
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                    await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                    await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);
        const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
        const req = await resultcek.data;
        if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
            *✅ PEMBAYARAN BERHASIL DITERIMA*

            💳 *ID Transaksi:* ${db.users[m.sender].saweria.idDeposit}  
            💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
            📦 *Barang:* Owner Panel Pterodactyl
            `}, {quoted: db.users[m.sender].saweria.msg});
            
            let username = Obj.username;
            let email = username+"@gmail.com";
            let name = capital(username);
            let password = crypto.randomBytes(4).toString('hex');
            
            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Admin",
                    "root_admin": true,
                    "language": "en",
                    "password": password.toString()
                })
            });
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;
            var teks = `
            *🎉 Berhasil Membuat Owner Panel ✅*

            📛 *ID User:* ${user.id}  
            👤 *Nama:* ${user.first_name}  
            💻 *Username:* ${user.username}  
            🔑 *Password:* ${password.toString()}  
            🌐 *Login di:* ${global.domain}  
            📱 *Gabung Whatsapp:* ${global.linkgbbuypublic}

            *⚠️ Rules Owner Panel*  
            1. 🚫 Jangan Maling SC, Ketahuan Maling? Akun Dihapus!  
            2. 💾 Simpan baik-baik Data Akun Ini!  
            3. 🚀 Gunakan Panel dengan Bijak!  
            4. 📸 Claim Garansi hanya dengan Bukti SS Chat Saat Pembelian.
            `;
            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
            await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case "buyownpanelpriv": {
    if (m.isGroup) return m.reply("🔒 Pembelian Owner Panel Pterodactyl hanya bisa di dalam private chat!");
    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "17000"; 
    Obj.username = us;
    
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 70);
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data
    
    const teks3 = `
    *🔑 INFORMASI PEMBAYARAN*

    💳 *ID Transaksi:* ${ress.reff_id}  
    💰 *Total Pembayaran:* Rp${await toIDR(ress.nominal)}  
    📦 *Barang:* Owner Panel Pterodactyl  
    ⏳ *Expired:* 5 menit

    *Note:*  
    🚨 QRIS hanya berlaku 5 menit! Jika melebihi waktu, pembayaran akan dianggap tidak valid.  
    ✅ Setelah pembayaran berhasil, bot akan memberi notifikasi otomatis ke chat kamu!  
    Ketik *.batalbeli* untuk membatalkan transaksi.

    ⏳ Pembayaran harus segera dilakukan agar tidak expired!
    `;

    let msgQr = await naze.sendMessage(m.chat, {image: {url: ress.qr_image}, caption: teks3}, {quoted: m});
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: ress.reff_ir, 
        amount: ress.nominal.toString(), 
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
                    await naze.sendMessage(db.users[m.sender].saweria.chat, {text: "❌ QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});
                    await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);
        const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
        const req = await resultcek.data;
        if (db.users[m.sender].saweria && req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: `
            *✅ PEMBAYARAN BERHASIL DITERIMA*

            💳 *ID Transaksi:* ${db.users[m.sender].saweria.idDeposit}  
            💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
            📦 *Barang:* Owner Panel Pterodactyl
            `}, {quoted: db.users[m.sender].saweria.msg});
            
            let username = Obj.username;
            let email = username+"@gmail.com";
            let name = capital(username);
            let password = crypto.randomBytes(4).toString('hex');
            
            let f = await fetch(domain2 + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username.toLowerCase(),
                    "first_name": name,
                    "last_name": "Admin",
                    "root_admin": true,
                    "language": "en",
                    "password": password.toString()
                })
            });
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;
            var teks = `
            *🎉 Berhasil Membuat Owner Panel ✅*

            📛 *ID User:* ${user.id}  
            👤 *Nama:* ${user.first_name}  
            💻 *Username:* ${user.username}  
            🔑 *Password:* ${password.toString()}  
            🌐 *Login di:* ${global.domain2}  
            📱 *Gabung Whatsapp:* ${global.linkgbbuypublic}

            *⚠️ Rules Owner Panel*  
            1. 🚫 Jangan Maling SC, Ketahuan Maling? Akun Dihapus!  
            2. 💾 Simpan baik-baik Data Akun Ini!  
            3. 🚀 Gunakan Panel dengan Bijak!  
            4. 📸 Claim Garansi hanya dengan Bukti SS Chat Saat Pembelian.
            `;
            await naze.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null});
            await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

// reseller panel
case "buyreseller": {
    if (m.isGroup) return m.reply("🔒 Pembelian Owner Panel Pterodactyl hanya bisa di dalam private chat!");
    if (db.users[m.sender].status_deposit) return m.reply("❗ Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let Obj = { harga: "4000" };
    const api = global.apiBot;
    const UrlQr = global.qrorkut;
    const amount = 10//Number(Obj.harga) + generateRandomNumber(20, 70);

    try {
        const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
        const ress = get.data.data;

        const teks3 = `
        *🔑 INFORMASI PEMBAYARAN*

        💳 *ID Transaksi:* ${ress.reff_id}  
        💰 *Total Pembayaran:* Rp${await toIDR(ress.nominal)}  
        📦 *Barang:* Reseller Panel
        ⏳ *Expired:* 5 menit

        *Note:*  
        🚨 QRIS hanya berlaku 5 menit! Jika melebihi waktu, pembayaran akan dianggap tidak valid.  
        ✅ Setelah pembayaran berhasil, bot akan memberi notifikasi otomatis ke chat kamu!  
        Ketik *.batalbeli* untuk membatalkan transaksi.
        `;

        let msgQr = await naze.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teks3 }, { quoted: m });
        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: ress.reff_id,
            amount: ress.nominal.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit && db.users[m.sender].saweria) {
                        await naze.sendMessage(db.users[m.sender].saweria.chat, { text: "❌ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                        await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };

        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit) {
            await sleep(8000);
            const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
            const req = await resultcek.data;

            if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;

                await naze.sendMessage(db.users[m.sender].saweria.chat, { text: `
                *✅ PEMBAYARAN BERHASIL DITERIMA*

                💳 *ID Transaksi:* ${db.users[m.sender].saweria.idDeposit}  
                💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
                📦 *Barang:* Reseller Panel
                `}, { quoted: db.users[m.sender].saweria.msg });

                // Menambahkan premium setelah pembayaran berhasil
                const nmrnya = m.sender;
                const waktuPremium = "30d"; // Bisa diubah sesuai kebutuhan

                if (db.users[nmrnya]) {
                    prem.addPremiumUser(nmrnya, waktuPremium, premium);
                    db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium;
                    db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium;

                    await naze.sendMessage(m.sender, { text: `✅ Kamu telah mendapatkan akses *Premium* selama ${waktuPremium}!` }, { quoted: m });
                }

                await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan. Mohon coba lagi nanti.");
    }
}
break;

			
case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await naze.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await naze.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

// akses premium
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await naze.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break
// uninstall thema
case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* thema pterodactyl\nTunggu 1-10 menit hingga proses selesai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* thema pterodactyl 🔥")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

// install panel
case 'installpanel': {
 if (m.isGroup) return m.reply("Instalasi panel hanya dapat dilakukan melalui private chat.");
 if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
 let harga = 5000
 let amount = 10//harga + generateRandomNumber(0, 0);
 let api = global.apiBot;
 let UrlQr = global.qrorkut;
 
 // Updated API request to use new URL and API key
 const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
 const ress = get.data.data;
 
 const teksPembayaran = `
 *▧ INFORMASI PEMBAYARAN*

 *• ID :* ${ress.reff_id}
 *• Total Pembayaran :* Rp${await toIDR(ress.nominal)}
 *• Barang :* Install Panel Pterodactyl
 *• Expired :* 5 menit

 *Note :*
 QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.

 Ketik *.batalbeli* untuk membatalkan transaksi.
 `;

 let msgQr = await naze.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teksPembayaran }, { quoted: m });
 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: ress.reff_id,
 amount: ress.nominal.toString(),
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit) {
 await naze.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
 await naze.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 delete db.users[m.sender].saweria;
 }
 }, 300000);
 }
 };

 await db.users[m.sender].saweria.exp();

 while (db.users[m.sender].status_deposit) {
 await sleep(8000);
 
 const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
 const req = await resultcek.data;

 if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;

 await naze.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi panel" }, { quoted: db.users[m.sender].saweria.msg });
 delete db.users[m.sender].saweria; 

 const ress = new Client();
 const connSettings = {
 host: global.installpanell.vps,
 port: '22',
 username: 'root',
 password: global.installpanell.pwvps
 };

 const pass = "adm" + getRandom("");
 let passwordPanel = pass;
 const domainpanel = global.installpanell.domain;
 const domainnode = global.installpanell.nodedomain;
 const ramserver = global.installpanell.rampanel;
 const deletemysql = `\n`;
 const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;

 async function instalWings() {
 ress.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', async (code, signal) => {
 ress.exec('bash <(curl -s https://raw.githubusercontent.com/nazezoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
 if (err) throw err;
 stream.on('close', async (code, signal) => {
 let teks = `
 *Berikut Detail Akun Panel :*

 * *Username :* adm
 * *Password :* ${passwordPanel}
 * *Domain :* ${domainpanel}

 *Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

 *Cara Menjalankan Wings :*
 ketik *.startwings* ipvps|pwvps|tokenwings
 `;
 await naze.sendMessage(m.chat, {text: teks}, {quoted: m});
 }).on('data', async (data) => {
 await console.log(data.toString());
 if (data.toString().includes("Masukkan nama lokasi: ")) {
 stream.write('Singapore\n');
 }
 if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
 stream.write('HanzStore\n');
 }
 if (data.toString().includes("Masukkan domain: ")) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes("Masukkan nama node: ")) {
 stream.write('HanzStore\n');
 }
 if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
 stream.write(`${ramserver}\n`);
 }
 if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
 stream.write(`${ramserver}\n`);
 }
 if (data.toString().includes("Masukkan Locid: ")) {
 stream.write('1\n');
 }
 }).stderr.on('data', async (data) => {
 console.log('Stderr : ' + data);
 });
 });
 }).on('data', async (data) => {
 if (data.toString().includes('Input 0-6')) {
 stream.write('1\n');
 }
 if (data.toString().includes('(y/N)')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Enter the panel address (blank for any address)')) {
 stream.write(`${domainpanel}\n`);
 }
 if (data.toString().includes('Database host username (pterodactyluser)')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Database host password')) {
 stream.write(`adm\n`);
 }
 if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
 stream.write('admin@gmail.com\n');
 }
 console.log('Logger: ' + data.toString());
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function instalPanel() {
 ress.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', async (code, signal) => {
 await instalWings();
 }).on('data', async (data) => {
 if (data.toString().includes('Input 0-6')) {
 stream.write('0\n');
 } 
 if (data.toString().includes('(y/N)')) {
 stream.write('y\n');
 } 
 if (data.toString().includes('Database name (panel)')) {
 stream.write('\n');
 }
 if (data.toString().includes('Database username (pterodactyl)')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Password (press enter to use randomly generated password)')) {
 stream.write('adm\n');
 } 
 if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
 stream.write('Asia/Jakarta\n');
 } 
 if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
 stream.write('adm@gmail.com\n');
 } 
 if (data.toString().includes('Email address for the initial admin account')) {
 stream.write('adm@gmail.com\n');
 } 
 if (data.toString().includes('Username for the initial admin account')) {
 stream.write('adm\n');
 } 
 if (data.toString().includes('First name for the initial admin account')) {
 stream.write('adm\n');
 } 
 if (data.toString().includes('Last name for the initial admin account')) {
 stream.write('adm\n');
 } 
 if (data.toString().includes('Password for the initial admin account')) {
 stream.write(`${passwordPanel}\n`);
 } 
 if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
 stream.write(`${domainpanel}\n`);
 } 
 if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
 stream.write('y\n')
 } 
 if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
 stream.write('y\n');
 } 
 if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
 stream.write('1\n');
 } 
 if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
 stream.write('y\n');
 } 
 if (data.toString().includes('(yes/no)')) {
 stream.write('y\n');
 } 
 if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
 stream.write('y\n');
 } 
 if (data.toString().includes('Still assume SSL? (y/N)')) {
 stream.write('y\n');
 } 
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('y\n');
 }
 if (data.toString().includes('(A)gree/(C)ancel:')) {
 stream.write('A\n');
 } 
 console.log('Logger: ' + data.toString());
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 ress.connect(connSettings);
 ress.on('ready', async () => {
 await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selesai");
 ress.exec(deletemysql, async (err, stream) => {
 if (err) throw err;
 stream.on('close', async (code, signal) => {
 await instalPanel();
 }).on('data', async (data) => {
 await stream.write('\t');
 await stream.write('\n');
 await console.log(data.toString());
 }).stderr.on('data', async (data) => {
 console.log('Stderr : ' + data);
 });
 });
 });
 }
 }
}
break;

// jasa install thema
case "jasainstalltemanebula": {
    if (m.isGroup) return m.reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let api = global.apiBot;
    let UrlQr = global.qrorkut;
    let harga = 5000
    let amount = harga + generateRandomNumber(110, 250);
    
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
 const ress = get.data.data;
 
    const teksPembayaran = `
    *▧ INFORMASI PEMBAYARAN*

    *• ID :* ${ress.reff_id}
    *• Total Pembayaran :* Rp${await toIDR(ress.nominal)}
    *• Barang :* Tema Nebula Pterodactyl
    *• Expired :* 5 menit

    *Note :*
    QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.

    Ketik *.batalbeli* untuk membatalkan transaksi.
    `;

    let msgQr = await Sky.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teksPembayaran }, { quoted: m });
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: ress.reff_id,
        amount: ress.nominal.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
         const req = await resultcek.data;
         if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
         db.users[m.sender].status_deposit = false;

            const connSettings = {
                host: global.installtema.vps,
                port: '22',
                username: 'root',
                password: global.installtema.pwvps,
            };

            const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`;
            const ress = new Client();

            ress.on('ready', async () => {
                m.reply("Memproses install *tema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
                ress.exec(command, (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => { 
                        await m.reply("Berhasil install *tema Nebula* pterodactyl ✅");
                        ress.end();
                    }).on('data', async (data) => {
                        console.log(data.toString());
                        stream.write('2\n'); // Input sesuai kebutuhan instalasi tema Nebula
                        stream.write('\n');
                        stream.write('\n');
                    }).stderr.on('data', (data) => {
                        console.log('STDERR: ' + data);
                    });
                });
            }).on('error', (err) => {
                console.log('Connection Error: ' + err);
                m.reply('Kata sandi atau IP VPS tidak valid.');
            }).connect(connSettings);

            await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case "jasainstalltemaenigma": {
  if (m.isGroup) return m.reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    let api = global.apiBot;
    let UrlQr = global.qrorkut;
    let harga = 5000
    let amount = harga + generateRandomNumber(110, 250);
    
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data;
 
  const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${ress.reff_id}
*• Total Pembayaran :* Rp${await toIDR(ress.nominal)}
*• Barang :* Tema Enigma Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.

Ketik *.batalbeli* untuk membatalkan transaksi.
`;

  let msgQr = await Sky.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teksPembayaran }, { quoted: m });
  db.users[m.sender].status_deposit = true;
  db.users[m.sender].saweria = {
    msg: msgQr,
    chat: m.sender,
    idDeposit: ress.reff_id,
    amount: ress.nominal.toString(),
    exp: function () {
      setTimeout(async () => {
        if (db.users[m.sender].status_deposit) {
          await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
          await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
          db.users[m.sender].status_deposit = false;
          delete db.users[m.sender].saweria;
        }
      }, 300000);
    }
  };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
     
     const req = await resultcek.data;
     if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const connSettings = {
        host: global.installtema.vps,
        port: '22',
        username: 'root',
        password: global.installtema.pwvps,
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => { 
            await m.reply("Berhasil install *tema enigma* pterodactyl ✅");
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write(`skyzodev\n`); // Key Token : skyzodev
            stream.write('1\n');
            stream.write('3\n');
            stream.write('https://wa.me/6283857526250\n');
            stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs567Y1s\n');
            stream.write('https://chat.whatsapp.com/IP1KjO4OyM37ay2iEsSAFy\n');
            stream.write('yes\n');
            stream.write('x\n');
          }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
          });
        });
      }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Kata sandi atau IP VPS tidak valid.');
      }).connect(connSettings);

      await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria;
    }
  }
}
break;

case "jasainstalltemanightcore": {
    if (m.isGroup) return m.reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let api = global.apiBot;
    let UrlQr = global.qrorkut;
    let harga = 5000
    let amount = harga + generateRandomNumber(110, 250);
    
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data;
    
    const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${ress.reff_id}
*• Total Pembayaran :* Rp${await toIDR(ress.nominal)}
*• Barang :* Tema Nightcore Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.

Ketik *.batalbeli* untuk membatalkan transaksi.
`;

    let msgQr = await Sky.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teksPembayaran }, { quoted: m });
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: ress.reff_id,
        amount: ress.nominal.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
     
     const req = await resultcek.data;
     if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

            const connSettings = {
                host: global.installtema.vps,
                port: '22',
                username: 'root',
                password: global.installtema.pwvps,
            };

            const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`;
            const ress = new Client();

            ress.on('ready', () => {
                m.reply("Memproses install *tema nightcore* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
                ress.exec(command, (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => { 
                        await m.reply("Berhasil install *tema nightcore* pterodactyl ✅");
                        ress.end();
                    }).on('data', async (data) => {
                        console.log(data.toString());
                        stream.write('1\n'); // Pilihan instalasi
                        stream.write('y\n'); // Konfirmasi instalasi
                    }).stderr.on('data', (data) => {
                        console.log('STDERR: ' + data);
                    });
                });
            }).on('error', (err) => {
                console.log('Connection Error: ' + err);
                m.reply('Kata sandi atau IP VPS tidak valid.');
            }).connect(connSettings);

            await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case "jasainstalltemaelysium": {
  if (m.isGroup) return m.reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    let api = global.apiBot;
    let UrlQr = global.qrorkut;
    let harga = 5000
    let amount = harga + generateRandomNumber(110, 250);
    
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data;
    
  const teksPembayaran = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${ress.reff_id}
*• Total Pembayaran :* Rp${await toIDR(ress.nominal)}
*• Barang :* Tema Elysium Pterodactyl
*• Expired :* 5 menit

*Note :*
QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan instalasi tema.

Ketik *.batalbeli* untuk membatalkan transaksi.
`;

  let msgQr = await Sky.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teksPembayaran }, { quoted: m });
  db.users[m.sender].status_deposit = true;
  db.users[m.sender].saweria = {
    msg: msgQr,
    chat: m.sender,
    idDeposit: ress.reff_id,
    amount: ress.nominal.toString(),
    exp: function () {
      setTimeout(async () => {
        if (db.users[m.sender].status_deposit) {
          await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
          await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
          db.users[m.sender].status_deposit = false;
          delete db.users[m.sender].saweria;
        }
      }, 300000);
    }
  };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
     
     const req = await resultcek.data;
     if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const connSettings = {
        host: global.installtema.vps,
        port: '22',
        username: 'root',
        password: global.installtema.pwvps,
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/LeXcZxMoDz9/kontol/refs/heads/main/bangke.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        m.reply("Memproses install *tema Elysium* pterodactyl\nTunggu 1-10 menit hingga proses selesai.");
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => { 
            await m.reply("Berhasil install *tema Elysium* pterodactyl ✅");
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write('1\n');
            stream.write('y\n');
            stream.write('yes\n');
          }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
          });
        });
      }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Kata sandi atau IP VPS tidak valid.');
      }).connect(connSettings);

      await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai instalasi tema..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria;
    }
  }
}
break;

case "jasahbpanel": {
  if (m.isGroup) return m.reply("Instalasi tema hanya dapat dilakukan melalui private chat.");
  
  let t = text.split('|');
  if (t.length < 2) return m.reply(".jasahbpanel ipvps|pwvps");
  let ipvps = t[0];
  let passwd = t[1];
  
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    let api = global.apiBot;
    let UrlQr = global.qrorkut;
    let harga = 3000
    let amount = harga + generateRandomNumber(110, 250);
    
    const get = await axios.get(`https://foxstore.my.id/api/orkut/create?apikey=${api}&nominal=${amount}&qrUrl=${UrlQr}`);
    const ress = get.data.data;
  
  const teksPembayaran = `
  *▧ INFORMASI PEMBAYARAN*

  *• ID :* ${ress.reff_id}
  *• Total Pembayaran :* Rp${await toIDR(ress.nominal)}
  *• Barang :* Hackback Panel
  *• Expired :* 5 menit

  *Note :*
  QRIS pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis melanjutkan proses hackback panel.

  Ketik *.batalbeli* untuk membatalkan transaksi.
  `;

  let msgQr = await Sky.sendMessage(m.chat, { image: { url: ress.qr_image }, caption: teksPembayaran }, { quoted: m });
  db.users[m.sender].status_deposit = true;
  db.users[m.sender].saweria = {
    msg: msgQr,
    chat: m.sender,
    idDeposit: ress.reff_id,
    amount: ress.nominal.toString(),
    exp: function () {
      setTimeout(async () => {
        if (db.users[m.sender].status_deposit) {
          await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
          await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
          db.users[m.sender].status_deposit = false;
          delete db.users[m.sender].saweria;
        }
      }, 300000);
    }
  };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await sleep(8000);
    const resultcek = await axios.get(`https://foxstore.my.id/api/orkut/cekstatus?apikey=${api}&merchant=${global.merchantid}&apiorkut=${global.apiorkut}`);
     
     const req = await resultcek.data;
     if (req?.data[0]?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;

      const ipvps = global.installtema.vps;
      const passwd = global.installtema.pwvps;

      const newuser = "hanz" + getRandom("");
      const newpw = "hanz" + getRandom("");

      const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
      };

      const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
      const ress = new Client();

      ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => {
            const teks = `
            *Hackback Panel Sukses ✅*

            *Berikut detail akun admin panel :*
            *• Username :* ${newuser}
            *• Password :* ${newpw}
            `;
            await Sky.sendMessage(m.chat, { text: teks }, { quoted: m });
            ress.end();
          }).on('data', async (data) => {
            console.log(data.toString());
            stream.write("skyzodev\n");
            stream.write("7\n");
            stream.write(`${newuser}\n`);
            stream.write(`${newpw}\n`);
          }).stderr.on('data', (data) => {
            console.log("STDERR: " + data);
          });
        });
      }).on('error', (err) => {
        console.log("Connection Error: " + err);
        m.reply("Kata sandi atau IP VPS tidak valid.");
      }).connect(connSettings);

      await Sky.sendMessage(db.users[m.sender].saweria.chat, { text: "Pembayaran berhasil! Memulai proses hackback panel..." }, { quoted: db.users[m.sender].saweria.msg });
      delete db.users[m.sender].saweria;
    }
  }
}
break;

case "jasainstalldepend": {
    if (!global.installtema || !global.installtema.vps || !global.installtema.pwvps) {
        return m.reply('❌ Informasi VPS atau password belum lengkap. Pastikan data tema telah diisi.');
    }

    const connSettings = {
        host: global.installtema.vps,
        port: '22',
        username: 'root',
        password: global.installtema.pwvps,
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`;
    const ress = new Client();

    ress.on('ready', () => {
        m.reply("⏳ Memproses instalasi tema Enigma Pterodactyl...\nTunggu 1-10 menit hingga proses selesai.");

        ress.exec(command, (err, stream) => {
            if (err) {
                console.log('Error executing command: ' + err);
                return m.reply('❌ Terjadi kesalahan saat menjalankan perintah di VPS.');
            }

            stream.on('close', async (code, signal) => {
                await m.reply("✅ Berhasil install depend.\nSilakan lanjutkan dengan mengetik *.installnebula*");
                ress.end(); // Menutup koneksi SSH
            }).on('data', (data) => {
                console.log(data.toString());
                // Menulis ke stream jika skrip memerlukan input
                stream.write('11\n');
                stream.write('A\n');
                stream.write('Y\n');
                stream.write('Y\n');
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('❌ Gagal terhubung ke VPS. Periksa kembali IP dan password.');
    }).connect(connSettings);
    }
    break;

			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
		}
	} catch (err) {
		console.log(util.format(err));
		m.reply('*❗ Internal server error️*');
		//naze.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});