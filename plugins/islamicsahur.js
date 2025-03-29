const _0x4f9e37 = function () {
  let _0x4533f5 = true;
  return function (_0x2113b0, _0x3a4456) {
    const _0x364d87 = _0x4533f5 ? function () {
      if (_0x3a4456) {
        const _0x3b779a = _0x3a4456.apply(_0x2113b0, arguments);
        _0x3a4456 = null;
        return _0x3b779a;
      }
    } : function () {};
    _0x4533f5 = false;
    return _0x364d87;
  };
}();
const _0x4a98c3 = _0x4f9e37(this, function () {
  return _0x4a98c3.toString().search("(((.+)+)+)+$").toString().constructor(_0x4a98c3).search("(((.+)+)+)+$");
});
_0x4a98c3();
const _0x2a06bb = function () {
  let _0x560d4a = true;
  return function (_0x2bf9b5, _0x192db5) {
    const _0x84c061 = _0x560d4a ? function () {
      if (_0x192db5) {
        const _0x1e68fd = _0x192db5.apply(_0x2bf9b5, arguments);
        _0x192db5 = null;
        return _0x1e68fd;
      }
    } : function () {};
    _0x560d4a = false;
    return _0x84c061;
  };
}();
const _0x223556 = _0x2a06bb(this, function () {
  let _0x5b980b;
  try {
    const _0x332978 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5b980b = _0x332978();
  } catch (_0x5449bb) {
    _0x5b980b = window;
  }
  const _0x2cdac4 = _0x5b980b.console = _0x5b980b.console || {};
  const _0x14878c = ["log", "warn", "info", "error", 'exception', "table", 'trace'];
  for (let _0x301e8c = 0; _0x301e8c < _0x14878c.length; _0x301e8c++) {
    const _0x3106e1 = _0x2a06bb.constructor.prototype.bind(_0x2a06bb);
    const _0x839f88 = _0x14878c[_0x301e8c];
    const _0x35739b = _0x2cdac4[_0x839f88] || _0x3106e1;
    _0x3106e1.__proto__ = _0x2a06bb.bind(_0x2a06bb);
    _0x3106e1.toString = _0x35739b.toString.bind(_0x35739b);
    _0x2cdac4[_0x839f88] = _0x3106e1;
  }
});
_0x223556();
import _0x38d5b2 from '../../config.cjs';
import _0x27d3d2 from 'axios';
const islsarbic = async (_0x3de6f2, _0x182fdc) => {
  const _0x2e930e = _0x38d5b2.PREFIX;
  const _0x337965 = _0x3de6f2.body.startsWith(_0x2e930e) ? _0x3de6f2.body.slice(_0x2e930e.length).split(" ")[0].toLowerCase() : '';
  const _0x271af9 = _0x3de6f2.body.slice(_0x2e930e.length + _0x337965.length).trim();
  if (_0x337965 === "suraharbic") {
    if (!_0x271af9 || isNaN(_0x271af9) || _0x271af9 < 1 || _0x271af9 > 114) {
      const _0x3e09e0 = {
        text: "⚠️ Please enter a number between 1 and 114.\nExample: `!suraharbic 1`"
      };
      return _0x182fdc.sendMessage(_0x3de6f2.from, _0x3e09e0, {
        'quoted': _0x3de6f2
      });
    }
    await _0x3de6f2.React('⏳');
    try {
      const _0xb5f46e = await _0x27d3d2.get("https://api.nexoracle.com/islamic/quran-surah?q=" + _0x271af9 + "/ar");
      const _0x467f9f = _0xb5f46e.data?.["result"];
      if (!_0x467f9f || !_0x467f9f.surah_details || !_0x467f9f.data?.["chapter"]) {
        throw new Error("Invalid API response");
      }
      const {
        title_en: _0x283538,
        title_ar: _0x3c5913,
        verses: _0x1aa9a5
      } = _0x467f9f.surah_details;
      const _0x303915 = _0x467f9f.data.chapter.map(_0x2be7c7 => "📖 *آیت " + _0x2be7c7.verse + ":* " + _0x2be7c7.text).join("\n\n");
      const _0x10af34 = "📖 *" + _0x283538 + "* (" + _0x3c5913 + ")\n🔢 *Verses:* " + _0x1aa9a5 + "\n\n" + _0x303915 + "\n\n🚀 *_POWERED BY POPKID-MD_*";
      const _0x5f17b5 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "Popkid-MD",
        serverMessageId: -1
      };
      const _0xb57958 = {
        title: "✨ Sarkar-MD ✨",
        body: "Read Surah with Urdu Translation",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: true
      };
      const _0x1ef779 = {
        isForwarded: true,
        forwardingScore: 0x3e7,
        forwardedNewsletterMessageInfo: _0x5f17b5,
        externalAdReply: _0xb57958
      };
      const _0x34364a = {
        text: _0x10af34,
        contextInfo: _0x1ef779
      };
      await _0x182fdc.sendMessage(_0x3de6f2.from, _0x34364a, {
        'quoted': _0x3de6f2
      });
      await _0x3de6f2.React('✅');
    } catch (_0x3af40b) {
      console.error(_0x3af40b);
      await _0x3de6f2.React('❌');
      const _0x410c68 = {
        text: "⚠️ Sorry, there was an issue fetching the Arabic Surah. Please try again."
      };
      _0x182fdc.sendMessage(_0x3de6f2.from, _0x410c68, {
        'quoted': _0x3de6f2
      });
    }
  }
};
export default islsarbic;
