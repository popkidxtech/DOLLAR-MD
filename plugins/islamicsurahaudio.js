const _0x57f21f = function () {
  let _0x2eb494 = true;
  return function (_0x135d5d, _0x275378) {
    const _0x1e8a1e = _0x2eb494 ? function () {
      if (_0x275378) {
        const _0x5ad6e7 = _0x275378.apply(_0x135d5d, arguments);
        _0x275378 = null;
        return _0x5ad6e7;
      }
    } : function () {};
    _0x2eb494 = false;
    return _0x1e8a1e;
  };
}();
const _0x256be3 = _0x57f21f(this, function () {
  return _0x256be3.toString().search("(((.+)+)+)+$").toString().constructor(_0x256be3).search("(((.+)+)+)+$");
});
_0x256be3();
const _0x161232 = function () {
  let _0x53f008 = true;
  return function (_0x3b3bc6, _0x10edf0) {
    const _0x40bf56 = _0x53f008 ? function () {
      if (_0x10edf0) {
        const _0x422ebd = _0x10edf0.apply(_0x3b3bc6, arguments);
        _0x10edf0 = null;
        return _0x422ebd;
      }
    } : function () {};
    _0x53f008 = false;
    return _0x40bf56;
  };
}();
const _0xc2e21e = _0x161232(this, function () {
  const _0x332873 = {
    hSryJ: function (_0xceb2e8, _0x41fff7) {
      return _0xceb2e8 !== _0x41fff7;
    },
    YTaLn: "ezBxb",
    MjWrn: "uXNPI",
    SLczK: function (_0x429424, _0x487fb0) {
      return _0x429424 + _0x487fb0;
    },
    wVxBo: "return (function() ",
    FdqEz: "IHfUd"
  };
  _0x332873.vGcko = 'log';
  _0x332873.xFKpJ = "info";
  _0x332873.vGkEe = 'error';
  _0x332873.UGwiR = "exception";
  _0x332873.oSZAt = "trace";
  _0x332873.eCzkl = function (_0x4ea381, _0xe403f2) {
    return _0x4ea381 < _0xe403f2;
  };
  _0x332873.dnwef = "qspVI";
  const _0x5919ef = function () {
    let _0x2b8b1e;
    try {
      _0x2b8b1e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5422e2) {
      _0x2b8b1e = window;
    }
    return _0x2b8b1e;
  };
  const _0x1ea796 = _0x5919ef();
  const _0x40d67e = _0x1ea796.console = _0x1ea796.console || {};
  const _0x18001c = [_0x332873.vGcko, "warn", _0x332873.xFKpJ, _0x332873.vGkEe, _0x332873.UGwiR, "table", _0x332873.oSZAt];
  for (let _0x3e3966 = 0; _0x332873.eCzkl(_0x3e3966, _0x18001c.length); _0x3e3966++) {
    if (_0x332873.dnwef === "qspVI") {
      const _0x3d40a3 = _0x161232.constructor.prototype.bind(_0x161232);
      const _0x15d1fb = _0x18001c[_0x3e3966];
      const _0x26c67f = _0x40d67e[_0x15d1fb] || _0x3d40a3;
      _0x3d40a3.__proto__ = _0x161232.bind(_0x161232);
      _0x3d40a3.toString = _0x26c67f.toString.bind(_0x26c67f);
      _0x40d67e[_0x15d1fb] = _0x3d40a3;
    } else {
      const _0xd02fdd = _0x269a4e ? function () {
        if (_0x4f7a13) {
          const _0x1c3dce = _0x17e4f6.apply(_0x12eac7, arguments);
          _0x3610a1 = null;
          return _0x1c3dce;
        }
      } : function () {};
      _0x18634d = false;
      return _0xd02fdd;
    }
  }
});
_0xc2e21e();
import _0x105070 from '../../config.cjs';
import _0x53e1f7 from 'axios';
const surahaudio = async (_0x155876, _0x180adc) => {
  const _0x9be32a = _0x105070.PREFIX;
  const _0x1df4c6 = _0x155876.body.startsWith(_0x9be32a) ? _0x155876.body.slice(_0x9be32a.length).split(" ")[0].toLowerCase() : '';
  const _0x9f6045 = _0x155876.body.slice(_0x9be32a.length + _0x1df4c6.length).trim();
  if (_0x1df4c6 === "surahaudio") {
    await _0x155876.React('⏳');
    try {
      const _0x3ec491 = await _0x53e1f7.get("https://api.nexoracle.com/islamic/quran-surah?q=" + _0x9f6045 + "/ur");
      const _0x46b609 = _0x3ec491.data?.['result'];
      if (!_0x46b609 || !_0x46b609.surah_details) {
        throw new Error("Invalid API response");
      }
      const {
        title_en: _0x4bd915,
        title_ar: _0x57751c,
        verses: _0x5c613f,
        place: _0x5bef7e,
        type: _0x269d9c
      } = _0x46b609.surah_details;
      const _0x2266d6 = _0x46b609.audio_ar;
      const _0x54614c = "📖 *" + _0x4bd915 + "* (" + _0x57751c + ")\n🕌 *Place:* " + _0x5bef7e + "\n📜 *Type:* " + _0x269d9c + "\n🔢 *Verses:* " + _0x5c613f + "\n\n🚀 *_Popkid-MD Powered by POPKID_*";
      const _0x240f55 = {
        url: _0x2266d6
      };
      const _0x4fc81c = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "popkid",
        serverMessageId: -1
      };
      const _0x4c7ee4 = {
        title: "✨ Sarkar-MD ✨",
        body: "Listen to Surah Audio",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: true
      };
      const _0xb4384f = {
        isForwarded: true,
        forwardingScore: 0x3e7,
        forwardedNewsletterMessageInfo: _0x4fc81c,
        externalAdReply: _0x4c7ee4
      };
      const _0x5f3a0c = {
        audio: _0x240f55,
        mimetype: 'audio/mp4',
        caption: _0x54614c,
        contextInfo: _0xb4384f
      };
      await _0x180adc.sendMessage(_0x155876.from, _0x5f3a0c, {
        'quoted': _0x155876
      });
      await _0x155876.React('✅');
    } catch (_0x284588) {
      console.error(_0x284588);
      await _0x155876.React('❌');
      const _0x58ac68 = {
        text: "*_⚠️ FAILED TO FETCH SURAH MAY BE API GONE DOWN_*"
      };
      _0x180adc.sendMessage(_0x155876.from, _0x58ac68, {
        'quoted': _0x155876
      });
    }
  }
};
export default surahaudio;
