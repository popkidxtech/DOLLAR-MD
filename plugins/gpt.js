const _0x48b8ff = function () {
  let _0x9706b4 = true;
  return function (_0x552aac, _0x530a5b) {
    const _0x59ce4 = _0x9706b4 ? function () {
      if (_0x530a5b) {
        const _0xc79af = _0x530a5b.apply(_0x552aac, arguments);
        _0x530a5b = null;
        return _0xc79af;
      }
    } : function () {};
    _0x9706b4 = false;
    return _0x59ce4;
  };
}();
const _0x29f66d = _0x48b8ff(this, function () {
  return _0x29f66d.toString().search("(((.+)+)+)+$").toString().constructor(_0x29f66d).search("(((.+)+)+)+$");
});
_0x29f66d();
const _0x3f083d = function () {
  const _0x3fc881 = {
    ypJic: function (_0x4c11c2, _0x4548bc) {
      return _0x4c11c2 === _0x4548bc;
    },
    HcCgU: "MRmIR",
    XzsKq: function (_0x2315b8, _0x446612) {
      return _0x2315b8 + _0x446612;
    },
    dnWMP: "return (function() ",
    uiaIC: "{}.constructor(\"return this\")( )"
  };
  _0x3fc881.aIqmp = function (_0x110ecc, _0x120f45) {
    return _0x110ecc !== _0x120f45;
  };
  let _0x39599c = true;
  return function (_0x2ecda6, _0x2adc37) {
    if (_0x3fc881.aIqmp("YeJjf", 'YeJjf')) {
      const _0x270360 = _0x42fc25.apply(_0x4e5fe6, arguments);
      _0x50de0b = null;
      return _0x270360;
    } else {
      const _0x3dfc17 = _0x39599c ? function () {
        if (_0x2adc37) {
          const _0x5e12f5 = _0x2adc37.apply(_0x2ecda6, arguments);
          _0x2adc37 = null;
          return _0x5e12f5;
        }
      } : function () {};
      _0x39599c = false;
      return _0x3dfc17;
    }
  };
}();
const _0x5b8f7c = _0x3f083d(this, function () {
  const _0x37142c = function () {
    let _0x3d0ef4;
    try {
      _0x3d0ef4 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x300cb0) {
      _0x3d0ef4 = window;
    }
    return _0x3d0ef4;
  };
  const _0x4ae7ec = _0x37142c();
  const _0x3ab540 = _0x4ae7ec.console = _0x4ae7ec.console || {};
  const _0x246741 = ["log", "warn", "info", "error", "exception", 'table', 'trace'];
  for (let _0x3bca79 = 0; _0x3bca79 < _0x246741.length; _0x3bca79++) {
    const _0x3edabe = _0x3f083d.constructor.prototype.bind(_0x3f083d);
    const _0x5b327f = _0x246741[_0x3bca79];
    const _0x15fddc = _0x3ab540[_0x5b327f] || _0x3edabe;
    _0x3edabe.__proto__ = _0x3f083d.bind(_0x3f083d);
    _0x3edabe.toString = _0x15fddc.toString.bind(_0x15fddc);
    _0x3ab540[_0x5b327f] = _0x3edabe;
  }
});
_0x5b8f7c();
import _0x465de8 from '../../config.cjs';
import _0x4de392 from 'node-fetch';
const gpt = async (_0x2596da, _0x2ba3ec) => {
  const _0x4fdfe9 = _0x465de8.PREFIX;
  const _0x2ca54f = _0x2596da.body.startsWith(_0x4fdfe9) ? _0x2596da.body.slice(_0x4fdfe9.length).split(" ")[0].toLowerCase() : '';
  if (_0x2ca54f === "gpt") {
    const _0x3f1262 = _0x2596da.body.slice(_0x4fdfe9.length + _0x2ca54f.length).trim();
    if (!_0x3f1262) {
      const _0x48fc0d = {
        text: "⚠️ *Usage:* `gpt <message>`\n💡 Example: `gpt Hello!`"
      };
      return await _0x2ba3ec.sendMessage(_0x2596da.from, _0x48fc0d, {
        'quoted': _0x2596da
      });
    }
    await _0x2596da.React('⏳');
    try {
      const _0x5e5749 = "https://apis.giftedtech.web.id/api/ai/gpt4?apikey=gifted-md&q=" + encodeURIComponent(_0x3f1262);
      const _0x2b0c60 = await _0x4de392(_0x5e5749);
      const _0x466dec = await _0x2b0c60.json();
      if (_0x466dec.success) {
        const _0x33d1fa = {
          title: "🤖 Popkid-MD GPT-4",
          body: "Chat with GPT-4 AI",
          thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
          sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
          mediaType: 0x1,
          renderLargerThumbnail: false
        };
        await _0x2ba3ec.sendMessage(_0x2596da.from, {
          'text': "🤖 *GPT-4 Response:*\n" + _0x466dec.result,
          'contextInfo': {
            'mentionedJid': [_0x2596da.sender],
            'isForwarded': true,
            'forwardingScore': 0x3e7,
            'externalAdReply': _0x33d1fa
          }
        }, {
          'quoted': _0x2596da
        });
        await _0x2596da.React('✅');
      } else {
        const _0x4ed860 = {
          text: "⚠️ GPT-4 response failed!"
        };
        await _0x2ba3ec.sendMessage(_0x2596da.from, _0x4ed860, {
          'quoted': _0x2596da
        });
        await _0x2596da.React('❌');
      }
    } catch (_0x198dc4) {
      const _0x2d8c08 = {
        text: "⚠️ API Error! Please try again later."
      };
      await _0x2ba3ec.sendMessage(_0x2596da.from, _0x2d8c08, {
        'quoted': _0x2596da
      });
      await _0x2596da.React('❌');
    }
  }
};
export default gpt;
