const _0x8bd3c0 = function () {
  let _0x1bd6c6 = true;
  return function (_0x606d07, _0x3ac7bf) {
    const _0x374fe4 = _0x1bd6c6 ? function () {
      if (_0x3ac7bf) {
        const _0x55c4bd = _0x3ac7bf.apply(_0x606d07, arguments);
        _0x3ac7bf = null;
        return _0x55c4bd;
      }
    } : function () {};
    _0x1bd6c6 = false;
    return _0x374fe4;
  };
}();
const _0x5df208 = _0x8bd3c0(this, function () {
  return _0x5df208.toString().search("(((.+)+)+)+$").toString().constructor(_0x5df208).search("(((.+)+)+)+$");
});
_0x5df208();
const _0x590df2 = function () {
  let _0x163f8a = true;
  return function (_0x4a827d, _0x54a950) {
    const _0x47f8a0 = _0x163f8a ? function () {
      if (_0x54a950) {
        const _0x4352b7 = _0x54a950.apply(_0x4a827d, arguments);
        _0x54a950 = null;
        return _0x4352b7;
      }
    } : function () {};
    _0x163f8a = false;
    return _0x47f8a0;
  };
}();
const _0x3c6f06 = _0x590df2(this, function () {
  const _0xf1c839 = function () {
    let _0x5c943b;
    try {
      _0x5c943b = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5e8dc6) {
      _0x5c943b = window;
    }
    return _0x5c943b;
  };
  const _0x5513dc = _0xf1c839();
  const _0x515808 = _0x5513dc.console = _0x5513dc.console || {};
  const _0x541301 = ["log", "warn", "info", "error", 'exception', "table", 'trace'];
  for (let _0x2bc4af = 0; _0x2bc4af < _0x541301.length; _0x2bc4af++) {
    const _0x4f128a = _0x590df2.constructor.prototype.bind(_0x590df2);
    const _0x42f81e = _0x541301[_0x2bc4af];
    const _0x5d293c = _0x515808[_0x42f81e] || _0x4f128a;
    _0x4f128a.__proto__ = _0x590df2.bind(_0x590df2);
    _0x4f128a.toString = _0x5d293c.toString.bind(_0x5d293c);
    _0x515808[_0x42f81e] = _0x4f128a;
  }
});
_0x3c6f06();
import _0x2d69ee from '../../config.cjs';
import _0x4745e1 from 'axios';
const islEnglish = async (_0x22809c, _0x26ba91) => {
  const _0x2abdd6 = _0x2d69ee.PREFIX;
  const _0x3224f2 = _0x22809c.body.startsWith(_0x2abdd6) ? _0x22809c.body.slice(_0x2abdd6.length).split(" ")[0].toLowerCase() : '';
  const _0x12a231 = _0x22809c.body.slice(_0x2abdd6.length + _0x3224f2.length).trim();
  if (_0x3224f2 === "surahenglish" || _0x3224f2 === "suraheng") {
    if (!_0x12a231 || isNaN(_0x12a231) || _0x12a231 < 1 || _0x12a231 > 114) {
      const _0x32b637 = {
        text: "⚠️ Please enter a number between 1 and 114.\nExample: `!surahenglish 1`"
      };
      return _0x26ba91.sendMessage(_0x22809c.from, _0x32b637, {
        'quoted': _0x22809c
      });
    }
    await _0x22809c.React('⏳');
    try {
      const _0x56e057 = await _0x4745e1.get("https://api.nexoracle.com/islamic/quran-surah?q=" + _0x12a231 + "/en");
      const _0x3cfeee = _0x56e057.data?.["result"];
      if (!_0x3cfeee || !_0x3cfeee.surah_details || !_0x3cfeee.data?.["chapter"]) {
        throw new Error("Invalid API response");
      }
      const {
        title_en: _0x374398,
        title_ar: _0x10c055,
        verses: _0x41bd53
      } = _0x3cfeee.surah_details;
      const _0x3c43d9 = _0x3cfeee.data.chapter.map(_0x3f14b1 => "📖 *Verse " + _0x3f14b1.verse + ":* " + _0x3f14b1.text).join("\n\n");
      const _0x5f049d = "📖 *" + _0x374398 + "* (" + _0x10c055 + ")\n🔢 *Verses:* " + _0x41bd53 + "\n\n" + _0x3c43d9 + "\n\n🚀 *_POWERED BY POPKID-MD_*";
      const _0x4f54d6 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: 'Popkid-MD',
        serverMessageId: -1
      };
      const _0x3dd290 = {
        title: "🫧popkid🫧",
        body: "Read Surah with English Translation",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: true
      };
      const _0x2c8a53 = {
        isForwarded: true,
        forwardingScore: 0x3e7,
        forwardedNewsletterMessageInfo: _0x4f54d6,
        externalAdReply: _0x3dd290
      };
      const _0x33a5c0 = {
        text: _0x5f049d,
        contextInfo: _0x2c8a53
      };
      await _0x26ba91.sendMessage(_0x22809c.from, _0x33a5c0, {
        'quoted': _0x22809c
      });
      await _0x22809c.React('✅');
    } catch (_0x223c25) {
      console.error(_0x223c25);
      await _0x22809c.React('❌');
      const _0x1cb263 = {
        text: "⚠️ Sorry, there was an issue fetching the English translation. Please try again."
      };
      _0x26ba91.sendMessage(_0x22809c.from, _0x1cb263, {
        'quoted': _0x22809c
      });
    }
  }
};
export default islEnglish;
