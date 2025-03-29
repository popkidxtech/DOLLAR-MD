const _0x443cec = function () {
  let _0x1547eb = true;
  return function (_0x1341da, _0x5a0ada) {
    const _0xded38a = _0x1547eb ? function () {
      if (_0x5a0ada) {
        const _0x53931c = _0x5a0ada.apply(_0x1341da, arguments);
        _0x5a0ada = null;
        return _0x53931c;
      }
    } : function () {};
    _0x1547eb = false;
    return _0xded38a;
  };
}();
const _0x21d55a = _0x443cec(this, function () {
  return _0x21d55a.toString().search("(((.+)+)+)+$").toString().constructor(_0x21d55a).search("(((.+)+)+)+$");
});
_0x21d55a();
const _0x1a275c = function () {
  let _0x304b96 = true;
  return function (_0x13df1f, _0x3fa2c6) {
    const _0x9b4588 = _0x304b96 ? function () {
      if (_0x3fa2c6) {
        const _0x2dc123 = _0x3fa2c6.apply(_0x13df1f, arguments);
        _0x3fa2c6 = null;
        return _0x2dc123;
      }
    } : function () {};
    _0x304b96 = false;
    return _0x9b4588;
  };
}();
const _0x1a47c7 = _0x1a275c(this, function () {
  let _0x2d317c;
  try {
    const _0x73b435 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2d317c = _0x73b435();
  } catch (_0x40ee48) {
    _0x2d317c = window;
  }
  const _0x52e662 = _0x2d317c.console = _0x2d317c.console || {};
  const _0x4b5b44 = ["log", "warn", "info", "error", "exception", "table", 'trace'];
  for (let _0x2af3ba = 0; _0x2af3ba < _0x4b5b44.length; _0x2af3ba++) {
    const _0x39eb37 = _0x1a275c.constructor.prototype.bind(_0x1a275c);
    const _0x3fb4a0 = _0x4b5b44[_0x2af3ba];
    const _0x383d69 = _0x52e662[_0x3fb4a0] || _0x39eb37;
    _0x39eb37.__proto__ = _0x1a275c.bind(_0x1a275c);
    _0x39eb37.toString = _0x383d69.toString.bind(_0x383d69);
    _0x52e662[_0x3fb4a0] = _0x39eb37;
  }
});
_0x1a47c7();
import _0x1f732b from 'axios';
import _0x1d76d9 from '../../config.cjs';
const tiktok = async (_0x3462b5, _0x450215) => {
  const _0x3c82a3 = _0x1d76d9.PREFIX;
  const _0x1058a3 = _0x3462b5.body.startsWith(_0x3c82a3) ? _0x3462b5.body.slice(_0x3c82a3.length).split(" ")[0].toLowerCase() : '';
  const _0x57a461 = _0x3462b5.body.slice(_0x3c82a3.length + _0x1058a3.length).trim();
  if (_0x1058a3 === "tiktok" || _0x1058a3 === "ttdl" || _0x1058a3 === 'tt' || _0x1058a3 === 'tiktokdl') {
    const _0x62fd6a = _0x57a461.trim();
    if (!_0x62fd6a) {
      const _0x220aa2 = {
        text: "*❌ Please provide a TikTok video link.*",
        contextInfo: {}
      };
      _0x220aa2.contextInfo.isForwarded = true;
      _0x220aa2.contextInfo.forwardedNewsletterMessageInfo = {};
      _0x220aa2.contextInfo.forwardingScore = 0x3e7;
      _0x220aa2.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363290715861418@newsletter";
      _0x220aa2.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "Popkid-MD";
      _0x220aa2.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
      return _0x450215.sendMessage(_0x3462b5.from, _0x220aa2, {
        'quoted': _0x3462b5
      });
    }
    if (!_0x62fd6a.includes("tiktok.com")) {
      const _0x4a841d = {
        text: "*❌ Invalid TikTok link.*",
        contextInfo: {}
      };
      _0x4a841d.contextInfo.isForwarded = true;
      _0x4a841d.contextInfo.forwardedNewsletterMessageInfo = {};
      _0x4a841d.contextInfo.forwardingScore = 0x3e7;
      _0x4a841d.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363290715861418@newsletter";
      _0x4a841d.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "popkid";
      _0x4a841d.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
      return _0x450215.sendMessage(_0x3462b5.from, _0x4a841d, {
        'quoted': _0x3462b5
      });
    }
    const _0x536707 = {
      text: "*🎵 Downloading TikTok video, please wait...*",
      contextInfo: {}
    };
    _0x536707.contextInfo.isForwarded = true;
    _0x536707.contextInfo.forwardedNewsletterMessageInfo = {};
    _0x536707.contextInfo.forwardingScore = 0x3e7;
    _0x536707.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363290715861418@newsletter";
    _0x536707.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "popkid-MD";
    _0x536707.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
    await _0x450215.sendMessage(_0x3462b5.from, _0x536707, {
      'quoted': _0x3462b5
    });
    const _0x4d8320 = "https://delirius-apiofc.vercel.app/download/tiktok?url=" + encodeURIComponent(_0x62fd6a);
    try {
      const {
        data: _0x3e2899
      } = await _0x1f732b.get(_0x4d8320);
      if (!_0x3e2899.status || !_0x3e2899.data) {
        const _0x558ee1 = {
          text: "*❌ Failed to fetch TikTok video.*",
          contextInfo: {}
        };
        _0x558ee1.contextInfo.isForwarded = true;
        _0x558ee1.contextInfo.forwardedNewsletterMessageInfo = {};
        _0x558ee1.contextInfo.forwardingScore = 0x3e7;
        _0x558ee1.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363290715861418@newsletter";
        _0x558ee1.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "Popkid-MD";
        _0x558ee1.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
        return _0x450215.sendMessage(_0x3462b5.from, _0x558ee1, {
          'quoted': _0x3462b5
        });
      }
      const {
        title: _0x535dfa,
        like: _0x44cb32,
        comment: _0x22799d,
        share: _0x13f9d9,
        author: _0xfc6e4d,
        meta: _0x170ff9
      } = _0x3e2899.data;
      const _0xfba299 = _0x170ff9.media.find(_0x27177e => _0x27177e.type === 'video').org;
      const _0x5c1f44 = "🎵 *Popkid-MD* 🎵\n\n" + ("👤 *User:* " + _0xfc6e4d.nickname + " (@" + _0xfc6e4d.username + ")\n") + ("📖 *Title:* " + _0x535dfa + "\n") + ("👍 *Likes:* " + _0x44cb32 + "\n💬 *Comments:* " + _0x22799d + "\n🔁 *Shares:* " + _0x13f9d9);
      const _0x4fe4c8 = {
        url: _0xfba299
      };
      await _0x450215.sendMessage(_0x3462b5.from, {
        'video': _0x4fe4c8,
        'caption': _0x5c1f44,
        'contextInfo': {
          'mentionedJid': [_0x3462b5.sender]
        }
      }, {
        'quoted': _0x3462b5
      });
    } catch (_0x14c54a) {
      console.error("Error in TikTok downloader command:", _0x14c54a);
      const _0x9c174d = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "popkid",
        serverMessageId: -1
      };
      const _0x139bf0 = {
        isForwarded: true,
        forwardedNewsletterMessageInfo: _0x9c174d,
        forwardingScore: 0x3e7
      };
      const _0x177bab = {
        text: "*❌ An error occurred: " + _0x14c54a.message + '*',
        contextInfo: _0x139bf0
      };
      return _0x450215.sendMessage(_0x3462b5.from, _0x177bab, {
        'quoted': _0x3462b5
      });
    }
  }
};
export default tiktok;
