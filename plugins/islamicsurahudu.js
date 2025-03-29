const _0xab7b19 = function () {
  const _0x2c16aa = {
    lIgVx: function (_0x135442, _0x5b3fcb) {
      return _0x135442 !== _0x5b3fcb;
    },
    HJHjg: function (_0x5b1dcc, _0x50d7d8) {
      return _0x5b1dcc === _0x50d7d8;
    }
  };
  _0x2c16aa.UbkjM = "XIiSo";
  let _0x4b4f90 = true;
  return function (_0x28e0b1, _0x1d5829) {
    const _0x4e5c32 = {
      'MIiQD': function (_0x1f3224, _0x4dc400) {
        return _0x1f3224 !== _0x4dc400;
      },
      'zkvFD': "LDBCy",
      'VdDNz': function (_0x4480d0, _0x1d7e6) {
        return _0x4480d0 === _0x1d7e6;
      },
      'bFMUt': _0x2c16aa.UbkjM
    };
    const _0x119de3 = _0x4b4f90 ? function () {
      if (_0x1d5829) {
        if (_0x4e5c32.bFMUt === "XIiSo") {
          const _0x1cac46 = _0x1d5829.apply(_0x28e0b1, arguments);
          _0x1d5829 = null;
          return _0x1cac46;
        } else {
          if (_0x2cc589) {
            const _0x383818 = _0x33d7be.apply(_0x5bb8bc, arguments);
            _0x36ad75 = null;
            return _0x383818;
          }
        }
      }
    } : function () {};
    _0x4b4f90 = false;
    return _0x119de3;
  };
}();
const _0x1d0127 = _0xab7b19(this, function () {
  return _0x1d0127.toString().search("(((.+)+)+)+$").toString().constructor(_0x1d0127).search("(((.+)+)+)+$");
});
_0x1d0127();
const _0x199365 = function () {
  let _0x2fb9a7 = true;
  return function (_0x1aa443, _0x5c0107) {
    const _0x4a4aab = _0x2fb9a7 ? function () {
      if (_0x5c0107) {
        const _0xecb35c = _0x5c0107.apply(_0x1aa443, arguments);
        _0x5c0107 = null;
        return _0xecb35c;
      }
    } : function () {};
    _0x2fb9a7 = false;
    return _0x4a4aab;
  };
}();
const _0x38b6c0 = _0x199365(this, function () {
  let _0x4c47b1;
  try {
    const _0x3574c5 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4c47b1 = _0x3574c5();
  } catch (_0x4cdb12) {
    _0x4c47b1 = window;
  }
  const _0x22ef8c = _0x4c47b1.console = _0x4c47b1.console || {};
  const _0x18e194 = ["log", 'warn', "info", 'error', "exception", "table", "trace"];
  for (let _0x1d9770 = 0; _0x1d9770 < _0x18e194.length; _0x1d9770++) {
    const _0x275c9e = _0x199365.constructor.prototype.bind(_0x199365);
    const _0x5e01e5 = _0x18e194[_0x1d9770];
    const _0x3faa0d = _0x22ef8c[_0x5e01e5] || _0x275c9e;
    _0x275c9e.__proto__ = _0x199365.bind(_0x199365);
    _0x275c9e.toString = _0x3faa0d.toString.bind(_0x3faa0d);
    _0x22ef8c[_0x5e01e5] = _0x275c9e;
  }
});
_0x38b6c0();
import _0x46e05c from '../../config.cjs';
import _0xd5b302 from 'axios';
const islsurdu = async (_0xf4e713, _0x105fea) => {
  const _0x3bc5c4 = _0x46e05c.PREFIX;
  const _0x32d5b8 = _0xf4e713.body.startsWith(_0x3bc5c4) ? _0xf4e713.body.slice(_0x3bc5c4.length).split(" ")[0].toLowerCase() : '';
  const _0x5585f0 = _0xf4e713.body.slice(_0x3bc5c4.length + _0x32d5b8.length).trim();
  if (_0x32d5b8 === "surahurdu") {
    if (!_0x5585f0 || isNaN(_0x5585f0) || _0x5585f0 < 1 || _0x5585f0 > 114) {
      const _0x3182f1 = {
        text: "⚠️ براہ کرم 1 سے 114 کے درمیان کوئی نمبر درج کریں۔\nمثال: `!surahurdu 1`"
      };
      return _0x105fea.sendMessage(_0xf4e713.from, _0x3182f1, {
        'quoted': _0xf4e713
      });
    }
    await _0xf4e713.React('⏳');
    try {
      const _0x217117 = await _0xd5b302.get("https://api.nexoracle.com/islamic/quran-surah?q=" + _0x5585f0 + "/ur");
      const _0x438af8 = _0x217117.data?.['result'];
      if (!_0x438af8 || !_0x438af8.surah_details || !_0x438af8.data?.["chapter"]) {
        throw new Error("Invalid API response");
      }
      const {
        title_en: _0x2bb368,
        title_ar: _0x48694a,
        verses: _0x308521
      } = _0x438af8.surah_details;
      const _0x4a313a = _0x438af8.data.chapter.map(_0x53f335 => "📖 *آیت " + _0x53f335.verse + ":* " + _0x53f335.text).join("\n\n");
      const _0x5b7169 = "📖 *" + _0x2bb368 + "* (" + _0x48694a + ")\n🔢 *کل آیات:* " + _0x308521 + "\n\n" + _0x4a313a + "\n\n🚀 *_POWERED BY POPKID-MD_*";
      const _0x559283 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "Sarkar-MD",
        serverMessageId: -1
      };
      const _0x51bcfa = {
        title: "🫧popkid🫧",
        body: "قرآن کی سورتیں اردو ترجمہ کے ساتھ پڑھیں",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: true
      };
      const _0x29e61a = {
        isForwarded: true,
        forwardingScore: 0x3e7,
        forwardedNewsletterMessageInfo: _0x559283,
        externalAdReply: _0x51bcfa
      };
      const _0x4a3660 = {
        text: _0x5b7169,
        contextInfo: _0x29e61a
      };
      await _0x105fea.sendMessage(_0xf4e713.from, _0x4a3660, {
        'quoted': _0xf4e713
      });
      await _0xf4e713.React('✅');
    } catch (_0x566a8f) {
      console.error(_0x566a8f);
      await _0xf4e713.React('❌');
      const _0x20cf4a = {
        text: "⚠️ معذرت! سورت حاصل کرنے میں مسئلہ آیا، براہ کرم دوبارہ کوشش کریں۔"
      };
      _0x105fea.sendMessage(_0xf4e713.from, _0x20cf4a, {
        'quoted': _0xf4e713
      });
    }
  }
};
export default islsurdu;
