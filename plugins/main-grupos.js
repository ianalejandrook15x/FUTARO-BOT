import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/jGsgr5M/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `【H】【O】【L】【A】 

1-Grupo
𝔽𝕦𝕥𝕒𝕣𝕠 𝕩 𝔾𝕣𝕦𝕡𝕠𝕤
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ 𝑺𝒊 𝒆𝒍 𝒆𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒂 𝒆𝒏𝒕𝒓𝒆 𝒂𝒒𝒖𝒊 ⬃

2.-🅲🅰︎🅽🅰︎🅻 :
『✯ 𝗧𝗲𝗮𝗺 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗜𝗮𝗻 ✯』
*✰* ${canal}

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
