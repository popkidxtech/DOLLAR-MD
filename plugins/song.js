const _0x188317 = function () {
  let _0x51a905 = true;
  return function (_0x18cd2a, _0x213a9a) {
    const _0x26b68e = _0x51a905 ? function () {
      if (_0x213a9a) {
        const _0x182f35 = _0x213a9a.apply(_0x18cd2a, arguments);
        _0x213a9a = null;
        return _0x182f35;
      }
    } : function () {};
    _0x51a905 = false;
    return _0x26b68e;
  };
}();
const _0x1d615f = _0x188317(this, function () {
  return _0x1d615f.toString().search("(((.+)+)+)+$").toString().constructor(_0x1d615f).search("(((.+)+)+)+$");
});
_0x1d615f();
const _0x208289 = function () {
  let _0x1c7106 = true;
  return function (_0x242031, _0x1e0c1b) {
    const _0x3f2bf0 = _0x1c7106 ? function () {
      if (_0x1e0c1b) {
        const _0x20e18b = _0x1e0c1b.apply(_0x242031, arguments);
        _0x1e0c1b = null;
        return _0x20e18b;
      }
    } : function () {};
    _0x1c7106 = false;
    return _0x3f2bf0;
  };
}();
const _0x587eb0 = _0x208289(this, function () {
  const _0x25e664 = function () {
    let _0x52f995;
    try {
      _0x52f995 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x50b2bf) {
      _0x52f995 = window;
    }
    return _0x52f995;
  };
  const _0x10fcfa = _0x25e664();
  const _0x29e720 = _0x10fcfa.console = _0x10fcfa.console || {};
  const _0x55ebf9 = ["log", "warn", 'info', "error", "exception", "table", "trace"];
  for (let _0x2694c = 0; _0x2694c < _0x55ebf9.length; _0x2694c++) {
    const _0x1f2ab5 = _0x208289.constructor.prototype.bind(_0x208289);
    const _0x4cbad5 = _0x55ebf9[_0x2694c];
    const _0x525e02 = _0x29e720[_0x4cbad5] || _0x1f2ab5;
    _0x1f2ab5.__proto__ = _0x208289.bind(_0x208289);
    _0x1f2ab5.toString = _0x525e02.toString.bind(_0x525e02);
    _0x29e720[_0x4cbad5] = _0x1f2ab5;
  }
});
_0x587eb0();
import _0x29d780 from 'yt-search';
import _0x529dd6 from '../../config.cjs';
const dlSong = async (_0x22e4d7, _0xe6b997) => {
  const _0x19cd31 = _0x529dd6.PREFIX;
  const _0xe2cbc1 = _0x22e4d7.body.startsWith(_0x19cd31) ? _0x22e4d7.body.slice(_0x19cd31.length).split(" ")[0].toLowerCase() : '';
  const _0x1c192d = _0x22e4d7.body.slice(_0x19cd31.length + _0xe2cbc1.length).trim();
  if (_0xe2cbc1 === 'song' || _0xe2cbc1 === "yta") {
    if (!_0x1c192d) {
      const _0x12771a = {
        text: "🔎 Please provide a song name or YouTube link!"
      };
      return _0xe6b997.sendMessage(_0x22e4d7.from, _0x12771a, {
        'quoted': _0x22e4d7
      });
    }
    await _0x22e4d7.React('⏳');
    try {
      const _0x514be3 = await _0x29d780(_0x1c192d);
      if (!_0x514be3.videos.length) {
        const _0x46b7a0 = {
          text: "❌ No results found!"
        };
        return _0xe6b997.sendMessage(_0x22e4d7.from, _0x46b7a0, {
          'quoted': _0x22e4d7
        });
      }
      const _0x50c4c3 = _0x514be3.videos[0];
      const _0x10d7f0 = _0x50c4c3.url;
      const _0x513d9c = "https://api.bwmxmd.online/api/download/ytmp3?apikey=ibraah-help&url=" + _0x10d7f0;
      const _0x53d22a = await fetch(_0x513d9c);
      const _0x1914b1 = await _0x53d22a.json();
      if (!_0x1914b1.success || !_0x1914b1.result || !_0x1914b1.result.download_url) {
        const _0x252a48 = {
          text: "❌ Failed to fetch download link!"
        };
        return _0xe6b997.sendMessage(_0x22e4d7.from, _0x252a48, {
          'quoted': _0x22e4d7
        });
      }
      const {
        title: _0x5323ab,
        download_url: _0x24850f,
        thumbnail: _0x10ef0b
      } = _0x1914b1.result;
      await _0x22e4d7.React('✅');
      const _0x49a947 = {
        url: _0x24850f
      };
      const _0x496838 = {
        audio: _0x49a947,
        mimetype: "audio/mpeg",
        ptt: false,
        fileName: _0x5323ab + ".mp3",
        caption: "🎵 *Title:* " + _0x5323ab + "\n📥 *Downloaded from:* Popkid-MD\n\nPOWERED BY SIR POPKID",
        contextInfo: {}
      };
      _0x496838.contextInfo.isForwarded = false;
      _0x496838.contextInfo.forwardingScore = 0x3e7;
      _0x496838.contextInfo.externalAdReply = {};
      _0x496838.contextInfo.externalAdReply.title = "✨popkid✨";
      _0x496838.contextInfo.externalAdReply.body = "YouTube Audio Downloader";
      _0x496838.contextInfo.externalAdReply.thumbnailUrl = _0x10ef0b;
      _0x496838.contextInfo.externalAdReply.sourceUrl = _0x10d7f0;
      _0x496838.contextInfo.externalAdReply.mediaType = 0x1;
      _0x496838.contextInfo.externalAdReply.renderLargerThumbnail = true;
      _0xe6b997.sendMessage(_0x22e4d7.from, _0x496838, {
        'quoted': _0x22e4d7
      });
    } catch (_0x39eb36) {
      console.error("Error in dlSong command:", _0x39eb36);
      const _0x6138df = {
        text: "❌ An error occurred while processing your request!"
      };
      _0xe6b997.sendMessage(_0x22e4d7.from, _0x6138df, {
        'quoted': _0x22e4d7
      });
    }
  }
};
export default dlSong;
