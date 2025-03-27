const _0x5ed250 = function () {
  let _0x49b6b5 = true;
  return function (_0x1376f1, _0xa2204c) {
    const _0x112441 = _0x49b6b5 ? function () {
      if (_0xa2204c) {
        const _0x4670bf = _0xa2204c.apply(_0x1376f1, arguments);
        _0xa2204c = null;
        return _0x4670bf;
      }
    } : function () {};
    _0x49b6b5 = false;
    return _0x112441;
  };
}();
const _0x42304a = _0x5ed250(this, function () {
  return _0x42304a.toString().search("(((.+)+)+)+$").toString().constructor(_0x42304a).search("(((.+)+)+)+$");
});
_0x42304a();
const _0x3c36a9 = function () {
  let _0x36b97d = true;
  return function (_0x1f0159, _0x4a26e) {
    const _0x49dbfe = _0x36b97d ? function () {
      if (_0x4a26e) {
        const _0x44dac4 = _0x4a26e.apply(_0x1f0159, arguments);
        _0x4a26e = null;
        return _0x44dac4;
      }
    } : function () {};
    _0x36b97d = false;
    return _0x49dbfe;
  };
}();
const _0x58e874 = _0x3c36a9(this, function () {
  let _0x140a1f;
  try {
    const _0x58b0d9 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x140a1f = _0x58b0d9();
  } catch (_0x452c70) {
    _0x140a1f = window;
  }
  const _0x4340d8 = _0x140a1f.console = _0x140a1f.console || {};
  const _0x5196d5 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x5bc688 = 0; _0x5bc688 < _0x5196d5.length; _0x5bc688++) {
    const _0x1efe8d = _0x3c36a9.constructor.prototype.bind(_0x3c36a9);
    const _0x4ee270 = _0x5196d5[_0x5bc688];
    const _0xb9c9e3 = _0x4340d8[_0x4ee270] || _0x1efe8d;
    _0x1efe8d.__proto__ = _0x3c36a9.bind(_0x3c36a9);
    _0x1efe8d.toString = _0xb9c9e3.toString.bind(_0xb9c9e3);
    _0x4340d8[_0x4ee270] = _0x1efe8d;
  }
});
_0x58e874();
import _0x7c9200 from 'yt-search';
import _0x2e308d from '../../config.cjs';
import _0x2d30b7 from 'axios';
const dlSong3 = async (_0x54c674, _0x4e004c) => {
  const _0x8611a6 = _0x2e308d.PREFIX;
  const _0x3291b3 = _0x54c674.body.startsWith(_0x8611a6) ? _0x54c674.body.slice(_0x8611a6.length).split(" ")[0].toLowerCase() : '';
  const _0x3ac880 = _0x54c674.body.slice(_0x8611a6.length + _0x3291b3.length).trim();
  if (_0x3291b3 === "song3" || _0x3291b3 === 'yta3') {
    if (!_0x3ac880) {
      const _0x4344c5 = {
        text: "🔎 Please provide a song name or YouTube link!"
      };
      return _0x4e004c.sendMessage(_0x54c674.from, _0x4344c5, {
        'quoted': _0x54c674
      });
    }
    await _0x54c674.React('⏳');
    try {
      const _0x1db7ba = await _0x7c9200(_0x3ac880);
      if (!_0x1db7ba.videos.length) {
        const _0x300d29 = {
          text: "❌ No results found!"
        };
        return _0x4e004c.sendMessage(_0x54c674.from, _0x300d29, {
          'quoted': _0x54c674
        });
      }
      const _0x534124 = _0x1db7ba.videos[0];
      const _0xe5e2f8 = _0x534124.url;
      const _0x2aea46 = "https://apis.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=" + encodeURIComponent(_0xe5e2f8);
      const _0x1a5762 = await _0x2d30b7.get(_0x2aea46);
      const _0xcb3794 = _0x1a5762.data;
      if (!_0xcb3794.success || !_0xcb3794.result || !_0xcb3794.result.download_url) {
        const _0x4243e7 = {
          text: "❌ Failed to fetch download link!"
        };
        return _0x4e004c.sendMessage(_0x54c674.from, _0x4243e7, {
          'quoted': _0x54c674
        });
      }
      const {
        title: _0x302466,
        download_url: _0x2a758c,
        thumbnail: _0x2677c3,
        quality: _0x3be800
      } = _0xcb3794.result;
      await _0x54c674.React('✅');
      const _0x3f92dc = {
        url: _0x2a758c
      };
      const _0x541d71 = {
        audio: _0x3f92dc,
        mimetype: "audio/mpeg",
        ptt: false,
        fileName: _0x302466 + ".mp3",
        caption: "🎵 *Title:* " + _0x302466 + "\n📥 *Quality:* " + _0x3be800 + "\n\nPOWERED BY POPKID",
        contextInfo: {}
      };
      _0x541d71.contextInfo.isForwarded = false;
      _0x541d71.contextInfo.forwardingScore = 0x3e7;
      _0x541d71.contextInfo.externalAdReply = {};
      _0x541d71.contextInfo.externalAdReply.title = "🫧POPKID🫧";
      _0x541d71.contextInfo.externalAdReply.body = "YouTube Audio Downloader";
      _0x541d71.contextInfo.externalAdReply.thumbnailUrl = _0x2677c3;
      _0x541d71.contextInfo.externalAdReply.sourceUrl = _0xe5e2f8;
      _0x541d71.contextInfo.externalAdReply.mediaType = 0x1;
      _0x541d71.contextInfo.externalAdReply.renderLargerThumbnail = true;
      _0x4e004c.sendMessage(_0x54c674.from, _0x541d71, {
        'quoted': _0x54c674
      });
    } catch (_0x57b7d3) {
      console.error("Error in song3 command:", _0x57b7d3);
      const _0xe8fb40 = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x4e004c.sendMessage(_0x54c674.from, _0xe8fb40, {
        'quoted': _0x54c674
      });
    }
  }
};
export default dlSong3;
