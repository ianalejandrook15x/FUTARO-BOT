/*import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://api.github.com/repos/ianalejandrook14x/FUTARO-BOT')
let json = await res.json()
try {
let txt = '`- 乂  S C R I P T`\n\n'
    txt += `	•   *𝗡𝗼𝗺𝗯𝗿𝗲* : ${json.name}\n`
    txt += `	•   *𝗩𝗶𝘀𝗶𝘁𝗮𝘀* : ${json.watchers_count}\n`
    txt += `	•   *𝗣𝗲𝘀𝗼* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `	•   *𝗔𝗰𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗱𝗼* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `	•   *𝗨𝗥𝗟* : ${json.html_url}\n`
    txt += `	•   *𝗳𝗼𝗿𝗸𝘀* : ${json.forks_count}\n`
    txt += `	•   *𝘀𝘁𝗮𝗿𝘀* : ${json.stargazers_count}\n\n`
    txt += `> 💌 *${textbot}*`
let img = await (await fetch(`https://tinyurl.com/26ehamvg`)).buffer()

await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
} catch {
await m.react('✖️')
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo', 'repository']
handler.register = true 
export default handler */
