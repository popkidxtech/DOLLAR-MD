const _0x381f7b = function () {
  let _0x5cfb7a = true;
  return function (_0x1d043b, _0x310720) {
    const _0x45256e = _0x5cfb7a ? function () {
      if (_0x310720) {
        const _0x2b1faa = _0x310720.apply(_0x1d043b, arguments);
        _0x310720 = null;
        return _0x2b1faa;
      }
    } : function () {};
    _0x5cfb7a = false;
    return _0x45256e;
  };
}();
const _0x30a411 = _0x381f7b(this, function () {
  return _0x30a411.toString().search("(((.+)+)+)+$").toString().constructor(_0x30a411).search("(((.+)+)+)+$");
});
_0x30a411();
const _0x133ff2 = function () {
  let _0x28ecc0 = true;
  return function (_0xcab606, _0x40717e) {
    const _0x504dda = _0x28ecc0 ? function () {
      if (_0x40717e) {
        const _0x24ac4d = _0x40717e.apply(_0xcab606, arguments);
        _0x40717e = null;
        return _0x24ac4d;
      }
    } : function () {};
    _0x28ecc0 = false;
    return _0x504dda;
  };
}();
const _0x2efa0b = _0x133ff2(this, function () {
  let _0x943ab5;
  try {
    const _0x3e8fe5 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x943ab5 = _0x3e8fe5();
  } catch (_0x586f46) {
    _0x943ab5 = window;
  }
  const _0x2c2422 = _0x943ab5.console = _0x943ab5.console || {};
  const _0x48131a = ["log", "warn", 'info', "error", "exception", "table", "trace"];
  for (let _0x4079fb = 0; _0x4079fb < _0x48131a.length; _0x4079fb++) {
    const _0x3341c6 = _0x133ff2.constructor.prototype.bind(_0x133ff2);
    const _0x42236f = _0x48131a[_0x4079fb];
    const _0x503d04 = _0x2c2422[_0x42236f] || _0x3341c6;
    _0x3341c6.__proto__ = _0x133ff2.bind(_0x133ff2);
    _0x3341c6.toString = _0x503d04.toString.bind(_0x503d04);
    _0x2c2422[_0x42236f] = _0x3341c6;
  }
});
_0x2efa0b();
import _0x4d4af0 from 'node-fetch';
import _0x8546d from '../../config.cjs';
const praytime = async (_0x5b3ee3, _0x43fd43) => {
  const _0x392707 = _0x8546d.PREFIX;
  const _0x51c929 = _0x5b3ee3.body.startsWith(_0x392707) ? _0x5b3ee3.body.slice(_0x392707.length).split(" ")[0].toLowerCase() : '';
  if (["praytime", "prayertimes", "prayertime", 'ptime'].includes(_0x51c929)) {
    await _0x5b3ee3.React('⏳');
    const _0x35bbe6 = _0x5b3ee3.body.split(" ").slice(1).join(" ") || 'nawabshah';
    const _0x93f889 = "https://api.nexoracle.com/islamic/prayer-times?city=" + _0x35bbe6;
    try {
      const _0x3c34f8 = await _0x4d4af0(_0x93f889);
      if (!_0x3c34f8.ok) {
        return reply("*Error fetching prayer times!*");
      }
      const _0x176574 = await _0x3c34f8.json();
      if (_0x176574.status !== 200) {
        return reply("*Failed to get prayer times. Try again later.*");
      }
      const _0x33b5f7 = _0x176574.result.items[0];
      const _0x3ecff5 = _0x176574.result.today_weather;
      const _0x4610b2 = _0x176574.result.city;
      const _0x5b2ce8 = ['🕌', '📿', '🙏', '🌅', '☪️', '🕋'];
      const _0x176afb = ['🌙', '⭐', '📖', '🕌', '🕋', '🔭'];
      const _0x110e75 = _0x5b2ce8[Math.floor(Math.random() * _0x5b2ce8.length)];
      let _0x34afd9 = _0x176afb[Math.floor(Math.random() * _0x176afb.length)];
      while (_0x34afd9 === _0x110e75) {
        _0x34afd9 = _0x176afb[Math.floor(Math.random() * _0x176afb.length)];
      }
      await _0x5b3ee3.React(_0x110e75);
      let _0x50863f = "*🕌 Prayer Times for " + _0x4610b2 + ", " + _0x176574.result.state + "*\n\n*_RECITE DUROOD SHREEF_*\n\n";
      _0x50863f += "📍 *Location*: " + _0x4610b2 + ", " + _0x176574.result.state + ", " + _0x176574.result.country + "\n";
      _0x50863f += "🕌 *Method*: " + _0x176574.result.prayer_method_name + "\n\n";
      _0x50863f += "🌅 *Fajr*: " + _0x33b5f7.fajr + "\n";
      _0x50863f += "🌄 *Shurooq*: " + _0x33b5f7.shurooq + "\n";
      _0x50863f += "☀️ *Dhuhr*: " + _0x33b5f7.dhuhr + "\n";
      _0x50863f += "🌇 *Asr*: " + _0x33b5f7.asr + "\n";
      _0x50863f += "🌆 *Maghrib*: " + _0x33b5f7.maghrib + "\n";
      _0x50863f += "🌃 *Isha*: " + _0x33b5f7.isha + "\n\n";
      _0x50863f += "🧭 *Qibla Direction*: " + _0x176574.result.qibla_direction + "°\n";
      _0x50863f += "🌡️ *Temperature*: " + (_0x3ecff5.temperature !== null ? _0x3ecff5.temperature + '°C' : "Data not available") + "\n\n*_POWERED BY POPKID-MD_*";
      const _0x374776 = {
        url: "https://files.catbox.moe/8fy6up.jpg"
      };
      const _0x357394 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "Popkid-MD",
        serverMessageId: -1
      };
      const _0x2b556b = {
        title: "🫧popkid🫧",
        body: "Prayer Times Information",
        thumbnailUrl: '',
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: false
      };
      await _0x43fd43.sendMessage(_0x5b3ee3.from, {
        'image': _0x374776,
        'caption': _0x50863f,
        'contextInfo': {
          'mentionedJid': [_0x5b3ee3.sender],
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': _0x357394,
          'forwardingScore': 0x3e7,
          'externalAdReply': _0x2b556b
        }
      }, {
        'quoted': _0x5b3ee3
      });
      const _0x6c0f35 = {
        url: "https://github.com/MRSHABAN40/SHABAN-MD_DATABASE/raw/refs/heads/main/autovoice/sarkar-tum%20pay%20karudon.mp3"
      };
      const _0x46cbdd = {
        audio: _0x6c0f35,
        mimetype: "audio/mp4",
        ptt: false
      };
      await _0x43fd43.sendMessage(_0x5b3ee3.from, _0x46cbdd, {
        'quoted': _0x5b3ee3
      });
      await _0x5b3ee3.React('✅');
    } catch (_0x5d3444) {
      console.error(_0x5d3444);
      reply("*Error fetching prayer times. Please try again later.*");
    }
  }
};
export default praytime;
