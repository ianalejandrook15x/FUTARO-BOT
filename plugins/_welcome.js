import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://tinyurl.com/238t2yav')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `╰⊱🌸≺ *${botname}* \n│「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 」\n•——————•°•✿•°•——————• 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │☁  ℬᎥƏɲʋƏɲᎥᗬ⋆ Ꮬ\n   │🌸  ${groupMetadata.subject}\n   0:58 ━━❍─────── 3:35 ⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `╰⊱🌸≺ *${botname}* \n│「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 」\n•——————•°•✿•°•——————• 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │☁  \n   │🌸 ዞᏜᏕʈᏜ ℘ℛ⋆ɲʈ⋆   ✧･ﾟ: *✧･ﾟ:* 　💌　*:･ﾟ✧*:･ﾟ✧ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `╰⊱🌸≺ *${botname}* \n│「 𝗛𝗮𝘀𝘁𝗮 𝗟𝘂𝗲𝗴𝗼 」\n•——————•°•✿•°•——————• 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │☁  \n   │🌸 ᏜᗬᎥ⋆Ꮥ   0:58 ━━❍─────── 3:35⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
