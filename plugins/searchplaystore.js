const _0x501e97 = function () {
  let _0x3175d2 = true;
  return function (_0x2cd910, _0x2b6d35) {
    const _0x270d24 = _0x3175d2 ? function () {
      if (_0x2b6d35) {
        const _0x3a1be9 = _0x2b6d35.apply(_0x2cd910, arguments);
        _0x2b6d35 = null;
        return _0x3a1be9;
      }
    } : function () {};
    _0x3175d2 = false;
    return _0x270d24;
  };
}();
const _0x148399 = _0x501e97(this, function () {
  return _0x148399.toString().search("(((.+)+)+)+$").toString().constructor(_0x148399).search("(((.+)+)+)+$");
});
_0x148399();
const _0x234370 = function () {
  let _0x185dd1 = true;
  return function (_0xda86de, _0xf74ef1) {
    const _0xf270a6 = _0x185dd1 ? function () {
      if (_0xf74ef1) {
        const _0x19b556 = _0xf74ef1.apply(_0xda86de, arguments);
        _0xf74ef1 = null;
        return _0x19b556;
      }
    } : function () {};
    _0x185dd1 = false;
    return _0xf270a6;
  };
}();
const _0x1582e3 = _0x234370(this, function () {
  const _0x12917b = function () {
    let _0x316f50;
    try {
      _0x316f50 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x22f01f) {
      _0x316f50 = window;
    }
    return _0x316f50;
  };
  const _0x275282 = _0x12917b();
  const _0x2bbdca = _0x275282.console = _0x275282.console || {};
  const _0x5959e5 = ["log", 'warn', 'info', "error", "exception", "table", "trace"];
  for (let _0x403767 = 0; _0x403767 < _0x5959e5.length; _0x403767++) {
    const _0x1130cd = _0x234370.constructor.prototype.bind(_0x234370);
    const _0x2b6ebf = _0x5959e5[_0x403767];
    const _0x250dd6 = _0x2bbdca[_0x2b6ebf] || _0x1130cd;
    _0x1130cd.__proto__ = _0x234370.bind(_0x234370);
    _0x1130cd.toString = _0x250dd6.toString.bind(_0x250dd6);
    _0x2bbdca[_0x2b6ebf] = _0x1130cd;
  }
});
_0x1582e3();
import _0x40132c from 'node-fetch';
import _0xfc6b7f from '../../config.cjs';
const playstoreSearch = async (_0x26d149, _0x1fe2d4) => {
  const _0x279c83 = _0xfc6b7f.PREFIX;
  const _0x210c1f = _0x26d149.body.startsWith(_0x279c83) ? _0x26d149.body.slice(_0x279c83.length).split(" ")[0].toLowerCase() : '';
  if (_0x210c1f === "playstore" || _0x210c1f === 'ps') {
    const _0x1ab65b = _0x26d149.body.slice(_0x279c83.length + _0x210c1f.length).trim();
    if (!_0x1ab65b) {
      const _0x27d125 = {
        text: "⚠️ Please provide an app name!"
      };
      return _0x1fe2d4.sendMessage(_0x26d149.from, _0x27d125, {
        'quoted': _0x26d149
      });
    }
    const _0x223908 = "https://apis.giftedtech.web.id/api/search/playstore?apikey=gifted-md&query=" + encodeURIComponent(_0x1ab65b);
    try {
      await _0x1fe2d4.sendMessage(_0x26d149.from, {
        'react': {
          'text': '⏳',
          'key': _0x26d149.key
        }
      });
      const _0x45ad63 = {
        text: "🔍 Searching for apps on Play Store...",
        contextInfo: {}
      };
      _0x45ad63.contextInfo.externalAdReply = {};
      _0x45ad63.contextInfo.externalAdReply.title = "Play Store Search 📱";
      _0x45ad63.contextInfo.externalAdReply.body = "Powered by Popkid-MD";
      _0x45ad63.contextInfo.externalAdReply.thumbnailUrl = "https://files.catbox.moe/nk71o3.jpg";
      _0x45ad63.contextInfo.externalAdReply.mediaType = 0x1;
      _0x45ad63.contextInfo.externalAdReply.mediaUrl = "https://play.google.com/store";
      _0x45ad63.contextInfo.externalAdReply.sourceUrl = "https://play.google.com/store";
      let _0x3f9e4e = await _0x1fe2d4.sendMessage(_0x26d149.from, _0x45ad63, {
        'quoted': _0x26d149
      });
      const _0x4febda = await _0x40132c(_0x223908);
      const _0x2ee837 = await _0x4febda.json();
      if (!_0x2ee837.success || !_0x2ee837.results.length) {
        await _0x1fe2d4.sendMessage(_0x26d149.from, {
          'react': {
            'text': '❌',
            'key': _0x26d149.key
          }
        });
        const _0x5db762 = {
          edit: _0x3f9e4e.key,
          text: "❌ No results found!"
        };
        return _0x1fe2d4.sendMessage(_0x26d149.from, _0x5db762);
      }
      let _0x66278c = "📱 *Play Store Search Results:*\n\n";
      _0x2ee837.results.slice(0, 5).forEach((_0x2ea988, _0x291219) => {
        _0x66278c += "📲 *" + _0x2ea988.name + "*\n👤 *Developer:* " + _0x2ea988.developer + "\n⭐ *Rating:* " + _0x2ea988.rating_Num + "/5.0\n🔗 [View on Play Store](" + _0x2ea988.link + ")\n\n";
      });
      _0x66278c += "_*POWERED BY POPKID-MD*_";
      await _0x1fe2d4.sendMessage(_0x26d149.from, {
        'react': {
          'text': '✅',
          'key': _0x26d149.key
        }
      });
      const _0x22ad05 = {
        edit: _0x3f9e4e.key,
        text: _0x66278c
      };
      await _0x1fe2d4.sendMessage(_0x26d149.from, _0x22ad05);
    } catch (_0x2940fd) {
      console.error(_0x2940fd);
      await _0x1fe2d4.sendMessage(_0x26d149.from, {
        'react': {
          'text': '❌',
          'key': _0x26d149.key
        }
      });
      const _0x190e7a = {
        text: "❌ An error occurred. Please try again later!"
      };
      await _0x1fe2d4.sendMessage(_0x26d149.from, _0x190e7a, {
        'quoted': _0x26d149
      });
    }
  }
};
export default playstoreSearch;
