import _0x3c708f from '../../config.cjs';
import 'os';
const runtime = _0x532f6a => {
  let _0x1c60c2 = Math.floor(_0x532f6a / 0xe10);
  let _0x5ee8a1 = Math.floor(_0x532f6a % 0xe10 / 0x3c);
  let _0x4bacb8 = Math.floor(_0x532f6a % 0x3c);
  return _0x1c60c2 + "h " + _0x5ee8a1 + "m " + _0x4bacb8 + 's';
};
const alive = async (_0x3a15f0, _0x34e7d2) => {
  const _0x4cbd1f = _0x3c708f.PREFIX;
  const _0x131197 = _0x3a15f0.body.startsWith(_0x4cbd1f) ? _0x3a15f0.body.slice(_0x4cbd1f.length).split(" ")[0x0].toLowerCase() : '';
  if (_0x131197 === "alive") {
    await _0x3a15f0.React('📟');
    const _0x1f9c3b = runtime(process.uptime());
    await _0x34e7d2.sendMessage(_0x3a15f0.from, {
      'audio': {
        'url': "https://github.com/MRSHABAN40/SHABAN-MD_DATABASE/raw/refs/heads/main/autovoice/sarkar-tum%20pay%20karudon.mp3"
      },
      'mimetype': 'audio/mp4',
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "💕𝐏𝐨𝐩𝐤𝐢𝐝 𝐗𝐭𝐞𝐜𝐡 𝐈𝐬 𝐀𝐥𝐢𝐯𝐞❤️",
          'body': "𝙿𝙱𝚄𝙷 | 𝙱𝙾𝚃 𝚄𝙿𝚃𝙸𝙼𝙴: " + _0x1f9c3b,
          'thumbnailUrl': "https://files.catbox.moe/nk71o3.jpg",
          'sourceUrl': "https://github.com/Popkiddevs/POPKID-XTECH/fork",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x3a15f0
    });
  }
};
export default alive;
