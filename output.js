//Mon Jul 21 2025 07:14:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x394785 = new _0x2895c9("喜番");
const _0x3aa3e8 = "xf";
let _0x572cc3 = ["@", "\n"];
msg = "";
let _0x1e9244 = msg;
let _0x1ebc51 = (_0x394785.isNode() ? process.env[_0x3aa3e8] : _0x394785.getdata(_0x3aa3e8)) || "";
let _0x4ee2de = [];
let _0x489ae0 = 0;
let _0x722626 = 0;
async function _0x972199() {
  console.log("\n================== 喜番开始 ==================\n");
  taskall = [];
  for (let _0xfccdc9 of _0x4ee2de) {
    {
      taskall.push(await _0xfccdc9.dm("messag"));
    }
  }
  await Promise.all(taskall);
}
class _0x89aecd {
  constructor(_0x40710e) {
    this.index = ++_0x489ae0;
    this.ck = _0x40710e.split("#");
    this.cookie = this.ck[0];
    this.bu = this.ck[1];
    this.ua = this.ck[2];
    this.su = this.ck[3];
    this.kp = this.ck[4];
    this.message = this.ck[5];
    const _0x2f69ca = this.cookie.match(/userId=([^;]+)/);
    this.userId = _0x2f69ca ? _0x2f69ca[1] : "未知";
    this.stopped = false;
  }
  async task(_0xad56ae, _0x403f4b, _0x10cbdc, _0x836548) {
    if (this.stopped) {
      console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过执行");
      return;
    }
    try {
      {
        const _0x298fb8 = {
          "User-Agent": this.ua,
          Connection: "Keep-Alive",
          "Content-Type": "application/json; application/json; charset=utf-8",
          "Ks-Sig3": _0x10cbdc,
          "Ks-Encoding": "2",
          BrowserUa: this.bu,
          SystemUa: this.su,
          "Ks-PkgId": this.kp,
          Cookie: this.cookie
        };
        let _0x2b12d5 = {
          method: "post",
          url: "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          headers: _0x298fb8,
          body: "{\"version\":\"3.3.55.2.8\",\"appVersion\":\"2.6.3.2\",\"appId\":\"1091400011\",\"message\":\"" + _0x403f4b + "\"}"
        };
        let _0x49358a = await _0x547347(_0x2b12d5, _0x836548);
        if (_0x49358a.result == 1) {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  等待解密响应体");
          if (this.stopped) {
            console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过后续执行");
            return;
          }
          await this.dmd(_0x49358a.data);
        } else {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  请求失败 ❌ 了呢,原因" + _0x49358a.msg);
          console.log(_0x49358a);
        }
      }
    } catch (_0x120d5e) {
      {
        console.log(_0x120d5e);
      }
    }
  }
  async e(_0x41d4b0, _0x390ca7) {
    if (this.stopped) {
      console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过执行");
      return;
    }
    try {
      {
        const _0x3dcbad = {
          "Content-Type": "application/json"
        };
        let _0x47f59f = {
          method: "post",
          url: "http://111.231.107.4:6689/e",
          headers: _0x3dcbad,
          body: "{\"data\":" + _0x41d4b0 + "}"
        };
        let _0x244d5b = await _0x547347(_0x47f59f, _0x390ca7);
        if (_0x244d5b) {
          let _0x1f1772 = _0x244d5b;
          let _0x83fa0a = "/rest/e/tube/inspire/task/report&&{\"version\":\"3.3.55.2.8\",\"appVersion\":\"2.6.3.2\",\"appId\":\"1091400011\",\"message\":\"" + _0x1f1772 + "\"}";
          let _0x4ca6fc = JSON.stringify(_0x83fa0a);
          if (this.stopped) {
            console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过后续执行");
            return;
          }
          await this.sign(_0x4ca6fc, _0x1f1772);
        } else {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  加密失败 ❌ 了呢,原因" + _0x244d5b.msg);
          console.log(_0x244d5b);
        }
      }
    } catch (_0x45b230) {
      {
        console.log(_0x45b230);
      }
    }
  }
  async dm(_0x1c4d08) {
    if (this.stopped) {
      console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过执行");
      return;
    }
    try {
      {
        const _0x495240 = {
          "Content-Type": "application/json"
        };
        let _0x75762f = {
          method: "post",
          url: "http://111.231.107.4:6689/d",
          headers: _0x495240,
          body: "{\"data\": \"" + this.message + "\"}"
        };
        let _0x53e93a = await _0x547347(_0x75762f, _0x1c4d08);
        if (_0x53e93a) {
          console.log("账号[" + this.index + "][" + this.userId + "]  message解密成功咯");
          let _0x27a616 = _0x53e93a.deviceInfo.deviceId;
          let _0x1c06ae = _0x53e93a.deviceInfo.eGid;
          let _0x292148 = "{\"appVersion\":\"2.6.3.2\",\"kpn\":\"XIFAN\",\"channel\":\"ANDROID_VIVO_BA_XFDJXM_NSET_XIFAN_VIVO\",\"originChannel\":\"ANDROID_VIVO_BA_XFDJXM_NSET_XIFAN_VIVO\",\"protocolVersion\":\"2.0\",\"kwaiMerchantSdkVersion\":\"1.0.0\",\"SDKVersion\":\"3.3.55.2.8\",\"SDKVersionCode\":3035502,\"sdkApiVersion\":\"3.3.55.2\",\"sdkApiVersionCode\":3035502,\"sdkType\":2,\"deviceInfo\":{\"oaid\":\"\",\"romName\":\"VIVO\",\"osType\":1,\"osBit\":64,\"osApi\":34,\"osVersion\":\"14\",\"language\":\"zh\",\"screenWidth\":1080,\"screenHeight\":2313,\"deviceWidth\":360,\"deviceHeight\":771,\"androidId\":\"\",\"deviceId\":\"" + _0x27a616 + "\",\"randomDeviceId\":\"\",\"deviceIdTag\":0,\"cloudIdTag\":7,\"deviceVendor\":\"vivo\",\"platform\":3,\"deviceModel\":\"V2172A\",\"deviceBrand\":\"vivo\",\"eGid\":\"" + _0x1c06ae + "\",\"deviceBit\":1,\"arch\":\"aarch64\",\"kwaiNebulaVersionName\":\"12.2.20.7490\",\"wechatVersionName\":\"8.0.60\",\"systemBootTime\":\"626f584d-3a5d-4e1f-a413-f03e3fe90e2d\",\"systemUpdateTime\":\"1750913072.215024123\",\"abi\":\"arm64\",\"socName\":\"Unknown\",\"boardPlatform\":\"taro\",\"firstInstallOpen\":true},\"clientFunction\":{\"enableUserFission\":true},\"appInfo\":{\"appId\":\"1091400011\",\"name\":\"喜番免费短剧\",\"packageName\":\"com.kwai.theater\",\"version\":\"2.6.3.2\",\"sha1\":\"E8:7A:F7:8A:50:EC:4F:48:75:83:D5:EA:D8:AC:6A:5C:DA:29:BA:F0\"},\"tkVersion\":\"5.1.4\",\"adSdkVersion\":\"3.3.55.2\",\"networkInfo\":{\"connectionType\":100,\"operatorType\":3},\"clientDynamicType\":\"0\",\"abi\":\"arm64\",\"socName\":\"Unknown\",\"boardPlatform\":\"taro\",\"kGeoInfo\":{},\"ext\":{\"modeInfo\":{\"cpuCount\":8,\"cpuAbi\":\"arm64-v8a\",\"batteryPercent\":50,\"totalMemorySize\":11823714304,\"availableMemorySize\":4358930432,\"totalDiskSize\":238189031424,\"availableDiskSize\":57468551168,\"imsi\":\"\",\"iccid\":\"\",\"bootTime\":233857,\"romName\":\"VIVO\",\"romVersion\":\"14.1\",\"romBuildTimestamp\":1732676038000,\"ringerMode\":2,\"audioStreamInfo\":[{\"maxVolume\":6,\"minVolume\":1,\"currentVolume\":6},{\"streamType\":1,\"maxVolume\":7,\"currentVolume\":7},{\"streamType\":2,\"maxVolume\":7,\"currentVolume\":7},{\"streamType\":3,\"maxVolume\":15,\"currentVolume\":2},{\"streamType\":4,\"maxVolume\":7,\"currentVolume\":7},{\"streamType\":5,\"maxVolume\":7,\"currentVolume\":6}],\"baseBandVersion\":\"SS.DE.2.0-00780.7-WAIPIO_GEN_PACK-1.10720.323,SS.DE.2.0-00780.7-WAIPIO_GEN_PACK-1.10720.323\",\"fingerPrint\":\"vivo/PD2172/PD2172:14/UP1A.231005.007/compiler11271053:user/release-keys\",\"screenBrightness\":-1,\"isCharging\":false,\"chargeType\":0,\"simCardInfo\":{\"phoneCount\":2,\"activePhoneCount\":0},\"environmentInfo\":{\"isRoot\":2,\"isXPosed\":2,\"isFrameworkHooked\":2,\"isVirtual\":0,\"isAdbEnabled\":1,\"isEmulator\":2,\"isGroupControl\":2},\"sensorEventInfoList\":[{\"sensorType\":1,\"timestamp\":" + Math.floor(Date.now() / 1000) + ",\"values\":[-0.09696517139673233,0.10235211998224258,9.832687377929688]},{\"sensorType\":4,\"timestamp\":" + Math.floor(Date.now() / 1000) + ",\"values\":[0,1.5271181473508477E-4,-1.5271181473508477E-4]},{\"sensorType\":9,\"timestamp\":" + Math.floor(Date.now() / 1000) + ",\"values\":[-0.10635516047477722,0.11213109642267227,9.805432319641113]}]}},\"appUserInfo\":{\"userRecoBit\":1},\"timestamp\":" + Date.now() + ",\"inspireTaskReportParam\":{\"posId\":10914000012,\"ecpm\":41670,\"neoInfos\":[{\"extParam\":{\"taskType\":1,\"llsId\":\"4\",\"creativeId\":" + _0x588679() + ",\"taskToken\":\"\"},\"idempotentId\":\"4_" + _0x588679() + "\"}],\"taskSessionId\":" + Date.now() + ",\"continuousTimes\":0,\"taskId\":6005}}";
          let _0x5e5175 = JSON.stringify(_0x292148);
          if (this.stopped) {
            console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过后续执行");
            return;
          }
          await this.e(_0x5e5175);
        } else {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  解密失败 ❌ 了呢,原因" + _0x53e93a.msg);
          console.log(_0x53e93a);
        }
      }
    } catch (_0x2e5b2e) {
      {
        console.log(_0x2e5b2e);
      }
    }
  }
  async dmd(_0x5d2ffb, _0x49cca4) {
    if (this.stopped) {
      console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过执行");
      return;
    }
    try {
      {
        const _0xdfd16a = {
          "Content-Type": "application/json"
        };
        let _0x3f3251 = {
          method: "post",
          url: "http://111.231.107.4:6689/d",
          headers: _0xdfd16a,
          body: "{\"data\": \"" + _0x5d2ffb + "\"}"
        };
        let _0x266bea = await _0x547347(_0x3f3251, _0x49cca4);
        if (_0x266bea) {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  " + _0x266bea.toast + " " + _0x266bea.amount);
          if (_0x266bea.amount === 1 || _0x266bea.amount.amount === 50) {
            console.log("账号[" + this.index + "][" + this.userId + "]  已黑鸡，停止运行");
            this.stopped = true;
            return;
          }
        } else {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  解密失败 ❌ 了呢,原因" + _0x266bea.msg);
          console.log(_0x266bea);
        }
      }
    } catch (_0x3e13f1) {
      {
        console.log(_0x3e13f1);
      }
    }
  }
  async sign(_0x4218e0, _0x173f6e, _0x5090a4) {
    if (this.stopped) {
      console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过执行");
      return;
    }
    try {
      {
        const _0x400f64 = {
          "Content-Type": "application/json"
        };
        let _0x567a6f = {
          method: "post",
          url: "http://111.231.107.4:6689/sign",
          headers: _0x400f64,
          body: "{\"data\":" + _0x4218e0 + "}"
        };
        let _0x46a840 = await _0x547347(_0x567a6f, _0x5090a4);
        if (_0x46a840) {
          let _0x4d6d77 = _0x46a840;
          console.log("随机等待" + _0x46e2f1() + "秒");
          await _0x2cf93a(_0x46e2f1());
          if (this.stopped) {
            console.log("账号[" + this.index + "][" + this.userId + "]  已停止，跳过后续执行");
            return;
          }
          await this.task(_0x4218e0, _0x173f6e, _0x4d6d77);
        } else {
          _0x513ddc("账号[" + this.index + "][" + this.userId + "]  sign加密失败 ❌ 了呢,原因" + _0x46a840.msg);
          console.log(_0x46a840);
        }
      }
    } catch (_0xe145a) {
      {
        console.log(_0xe145a);
      }
    }
  }
}
!(async () => {
  if (!(await _0x4bbb48())) {
    return;
  }
  if (_0x4ee2de.length > 0) {
    await _0x972199();
  }
  await _0x1afe3e(msg);
})().catch(_0x4d6261 => console.log(_0x4d6261)).finally(() => _0x394785.done());
async function _0x4bbb48() {
  if (_0x1ebc51) {
    let _0x1de082 = _0x572cc3[0];
    for (let _0x52d6d4 of _0x572cc3) if (_0x1ebc51.indexOf(_0x52d6d4) > -1) {
      _0x1de082 = _0x52d6d4;
      break;
    }
    for (let _0x36f124 of _0x1ebc51.split(_0x1de082)) _0x36f124 && _0x4ee2de.push(new _0x89aecd(_0x36f124));
    _0x722626 = _0x4ee2de.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x722626 + "个账号");
  return true;
}
function _0x588679() {
  const _0x4b6019 = 100000000;
  const _0x34a564 = 999999999;
  const _0x3b606d = _0x34a564 - _0x4b6019 + 1;
  const _0x1d9dcd = Math.floor(Math.random() * _0x3b606d) + _0x4b6019;
  return _0x1d9dcd;
}
function _0x46e2f1() {
  const _0x1cdf74 = 6;
  const _0x4283aa = 10;
  const _0x3c70d4 = _0x4283aa - _0x1cdf74 + 1;
  const _0x4f9814 = Math.floor(Math.random() * _0x3c70d4) + _0x1cdf74;
  return _0x4f9814;
}
async function _0x547347(_0x343840, _0x5dd676) {
  var _0x81b286 = require("request");
  return new Promise(_0xbc9ddc => {
    if (!_0x5dd676) {
      let _0x3b9fb4 = arguments.callee.toString();
      let _0xeee73e = /function\s*(\w*)/i;
      let _0x38d09e = _0xeee73e.exec(_0x3b9fb4);
      _0x5dd676 = _0x38d09e[1];
    }
    _0x81b286(_0x343840, function (_0x2a6c4a, _0x1b93a4) {
      if (_0x2a6c4a) {
        throw new Error(_0x2a6c4a);
      }
      let _0x482a67 = _0x1b93a4.body;
      try {
        if (typeof _0x482a67 == "string") {
          if (_0x20d89f(_0x482a67)) {
            let _0x4d90d8 = JSON.parse(_0x482a67);
            _0xbc9ddc(_0x4d90d8);
          } else {
            let _0x4580ff = _0x482a67;
            _0xbc9ddc(_0x4580ff);
          }
          function _0x20d89f(_0x17da97) {
            {
              if (typeof _0x17da97 == "string") {
                try {
                  {
                    if (typeof JSON.parse(_0x17da97) == "object") {
                      return true;
                    }
                  }
                } catch (_0x53739a) {
                  {
                    return false;
                  }
                }
              }
              return false;
            }
          }
        } else {
          let _0x321654 = _0x482a67;
          _0xbc9ddc(_0x321654);
        }
      } catch (_0x3a3ac8) {
        {
          console.log(_0x2a6c4a, _0x1b93a4);
          console.log("\n " + _0x5dd676 + "失败了!请稍后尝试!!");
        }
      } finally {
        {
          _0xbc9ddc();
        }
      }
    });
  });
}
function _0x2cf93a(_0x229ee8) {
  return new Promise(function (_0x54f3f1) {
    {
      setTimeout(_0x54f3f1, _0x229ee8 * 1000);
    }
  });
}
function _0x513ddc(_0x375da2) {
  if (_0x394785.isNode()) {
    if (_0x375da2) {
      console.log("" + _0x375da2);
      msg += "\n" + _0x375da2;
    }
  } else {
    console.log("" + _0x375da2);
    msg += "\n" + _0x375da2;
  }
}
async function _0x1afe3e(_0x290b57) {
  if (!_0x290b57) {
    return;
  }
  console.log(_0x290b57);
}
function _0x2895c9(_0x35f787, _0x2db8cf) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x56031b {
    constructor(_0x70e0d2) {
      {
        this.env = _0x70e0d2;
      }
    }
    send(_0x251e02, _0xe9db8c = "GET") {
      {
        _0x251e02 = "string" == typeof _0x251e02 ? {
          url: _0x251e02
        } : _0x251e02;
        let _0x565ffe = this.get;
        "POST" === _0xe9db8c && (_0x565ffe = this.post);
        return new Promise((_0x11934d, _0x281602) => {
          {
            _0x565ffe.call(this, _0x251e02, (_0x1701a0, _0x4b3a1f, _0x50991a) => {
              {
                _0x1701a0 ? _0x281602(_0x1701a0) : _0x11934d(_0x4b3a1f);
              }
            });
          }
        });
      }
    }
    get(_0x3e50c8) {
      {
        return this.send.call(this.env, _0x3e50c8);
      }
    }
    post(_0xac2c95) {
      {
        return this.send.call(this.env, _0xac2c95, "POST");
      }
    }
  }
  return new class {
    constructor(_0x9ac714, _0x57e255) {
      {
        this.name = _0x9ac714;
        this.http = new _0x56031b(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x57e255);
        this.log("", "🔔" + this.name + ", 开始!");
      }
    }
    isNode() {
      {
        return "undefined" != typeof module && !!module.exports;
      }
    }
    isQuanX() {
      {
        return "undefined" != typeof $task;
      }
    }
    isSurge() {
      {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }
    isLoon() {
      {
        return "undefined" != typeof $loon;
      }
    }
    toObj(_0x52d411, _0x5ac546 = null) {
      {
        try {
          {
            return JSON.parse(_0x52d411);
          }
        } catch {
          {
            return _0x5ac546;
          }
        }
      }
    }
    toStr(_0x2f66bc, _0x4e1419 = null) {
      {
        try {
          {
            return JSON.stringify(_0x2f66bc);
          }
        } catch {
          {
            return _0x4e1419;
          }
        }
      }
    }
    getjson(_0x5cd1e5, _0x5f40ac) {
      {
        let _0x478600 = _0x5f40ac;
        const _0x481834 = this.getdata(_0x5cd1e5);
        if (_0x481834) {
          try {
            {
              _0x478600 = JSON.parse(this.getdata(_0x5cd1e5));
            }
          } catch {}
        }
        return _0x478600;
      }
    }
    setjson(_0x3c5800, _0x3850f0) {
      {
        try {
          {
            return this.setdata(JSON.stringify(_0x3c5800), _0x3850f0);
          }
        } catch {
          {
            return false;
          }
        }
      }
    }
    getScript(_0x5444a0) {
      {
        return new Promise(_0x13252a => {
          {
            const _0x58e247 = {
              url: _0x5444a0
            };
            this.get(_0x58e247, (_0x30c949, _0x46a4e6, _0x578d70) => _0x13252a(_0x578d70));
          }
        });
      }
    }
    runScript(_0x3ea192, _0x2fcd18) {
      {
        return new Promise(_0x4ceb05 => {
          {
            let _0x4610e2 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
            _0x4610e2 = _0x4610e2 ? _0x4610e2.replace(/\n/g, "").trim() : _0x4610e2;
            let _0x21bb59 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
            _0x21bb59 = _0x21bb59 ? 1 * _0x21bb59 : 20;
            _0x21bb59 = _0x2fcd18 && _0x2fcd18.timeout ? _0x2fcd18.timeout : _0x21bb59;
            const _0x56ab6e = {
              script_text: _0x3ea192,
              mock_type: "cron",
              timeout: _0x21bb59
            };
            const [_0x2a05b4, _0x5e43e0] = _0x4610e2.split("@");
            const _0x4007d3 = {
              url: "http://" + _0x5e43e0 + "/v1/scripting/evaluate",
              body: _0x56ab6e,
              headers: {
                "X-Key": _0x2a05b4,
                Accept: "*/*"
              }
            };
            this.post(_0x4007d3, (_0xf6f9f3, _0x3f6957, _0x1f2515) => _0x4ceb05(_0x1f2515));
          }
        }).catch(_0x479a20 => this.logErr(_0x479a20));
      }
    }
    loaddata() {
      {
        if (!this.isNode()) {
          return {};
        }
        {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x5df7c0 = this.path.resolve(this.dataFile);
            const _0x481948 = this.path.resolve(process.cwd(), this.dataFile);
            const _0x4c11aa = this.fs.existsSync(_0x5df7c0);
            const _0x4dcc5f = !_0x4c11aa && this.fs.existsSync(_0x481948);
            if (!_0x4c11aa && !_0x4dcc5f) {
              return {};
            }
            {
              {
                const _0x429302 = _0x4c11aa ? _0x5df7c0 : _0x481948;
                try {
                  {
                    return JSON.parse(this.fs.readFileSync(_0x429302));
                  }
                } catch (_0x4347e4) {
                  {
                    return {};
                  }
                }
              }
            }
          }
        }
      }
    }
    writedata() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x1e61a6 = this.path.resolve(this.dataFile);
          const _0x40d97c = this.path.resolve(process.cwd(), this.dataFile);
          const _0x47e064 = this.fs.existsSync(_0x1e61a6);
          const _0x1d0467 = !_0x47e064 && this.fs.existsSync(_0x40d97c);
          const _0x883a86 = JSON.stringify(this.data);
          _0x47e064 ? this.fs.writeFileSync(_0x1e61a6, _0x883a86) : _0x1d0467 ? this.fs.writeFileSync(_0x40d97c, _0x883a86) : this.fs.writeFileSync(_0x1e61a6, _0x883a86);
        }
      }
    }
    lodash_get(_0x329cd9, _0x54e2b1, _0x5e5e33) {
      {
        const _0x49b491 = _0x54e2b1.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x56a6e8 = _0x329cd9;
        for (const _0x4a8980 of _0x49b491) if (_0x56a6e8 = Object(_0x56a6e8)[_0x4a8980], undefined === _0x56a6e8) {
          return _0x5e5e33;
        }
        return _0x56a6e8;
      }
    }
    lodash_set(_0x45a13f, _0x5d11cd, _0x3603d0) {
      {
        return Object(_0x45a13f) !== _0x45a13f ? _0x45a13f : (Array.isArray(_0x5d11cd) || (_0x5d11cd = _0x5d11cd.toString().match(/[^.[\]]+/g) || []), _0x5d11cd.slice(0, -1).reduce((_0xae75a0, _0x65ae03, _0x274363) => Object(_0xae75a0[_0x65ae03]) === _0xae75a0[_0x65ae03] ? _0xae75a0[_0x65ae03] : _0xae75a0[_0x65ae03] = Math.abs(_0x5d11cd[_0x274363 + 1]) >> 0 == +_0x5d11cd[_0x274363 + 1] ? [] : {}, _0x45a13f)[_0x5d11cd[_0x5d11cd.length - 1]] = _0x3603d0, _0x45a13f);
      }
    }
    getdata(_0x4158a2) {
      {
        let _0x10264f = this.getval(_0x4158a2);
        if (/^@/.test(_0x4158a2)) {
          const [, _0x3da66c, _0x402533] = /^@(.*?)\.(.*?)$/.exec(_0x4158a2);
          const _0x5122a5 = _0x3da66c ? this.getval(_0x3da66c) : "";
          if (_0x5122a5) {
            try {
              {
                const _0x20ad3a = JSON.parse(_0x5122a5);
                _0x10264f = _0x20ad3a ? this.lodash_get(_0x20ad3a, _0x402533, "") : _0x10264f;
              }
            } catch (_0x22e329) {
              {
                _0x10264f = "";
              }
            }
          }
        }
        return _0x10264f;
      }
    }
    setdata(_0x1d446e, _0x2a93ef) {
      {
        let _0x46cb6e = false;
        if (/^@/.test(_0x2a93ef)) {
          const [, _0x52b50e, _0x1adc11] = /^@(.*?)\.(.*?)$/.exec(_0x2a93ef);
          const _0x44f8dc = this.getval(_0x52b50e);
          const _0x4b41f7 = _0x52b50e ? "null" === _0x44f8dc ? null : _0x44f8dc || "{}" : "{}";
          try {
            {
              const _0x17f211 = JSON.parse(_0x4b41f7);
              this.lodash_set(_0x17f211, _0x1adc11, _0x1d446e);
              _0x46cb6e = this.setval(JSON.stringify(_0x17f211), _0x52b50e);
            }
          } catch (_0xc645b7) {
            {
              const _0x52a1b5 = {};
              this.lodash_set(_0x52a1b5, _0x1adc11, _0x1d446e);
              _0x46cb6e = this.setval(JSON.stringify(_0x52a1b5), _0x52b50e);
            }
          }
        } else {
          _0x46cb6e = this.setval(_0x1d446e, _0x2a93ef);
        }
        return _0x46cb6e;
      }
    }
    getval(_0x292054) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x292054) : this.isQuanX() ? $prefs.valueForKey(_0x292054) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x292054]) : this.data && this.data[_0x292054] || null;
      }
    }
    setval(_0x4cf800, _0x337907) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4cf800, _0x337907) : this.isQuanX() ? $prefs.setValueForKey(_0x4cf800, _0x337907) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x337907] = _0x4cf800, this.writedata(), true) : this.data && this.data[_0x337907] || null;
      }
    }
    initGotEnv(_0x30c05c) {
      {
        this.got = this.got ? this.got : require("got");
        this.cktough = this.cktough ? this.cktough : require("tough-cookie");
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
        _0x30c05c && (_0x30c05c.headers = _0x30c05c.headers ? _0x30c05c.headers : {}, undefined === _0x30c05c.headers.Cookie && undefined === _0x30c05c.cookieJar && (_0x30c05c.cookieJar = this.ckjar));
      }
    }
    get(_0x5742e6, _0x4b1593 = () => {}) {
      {
        const _0x1f8cf4 = {
          "X-Surge-Skip-Scripting": false
        };
        const _0x78a777 = {
          hints: false
        };
        _0x5742e6.headers && (delete _0x5742e6.headers["Content-Type"], delete _0x5742e6.headers["Content-Length"]);
        this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x5742e6.headers = _0x5742e6.headers || {}, Object.assign(_0x5742e6.headers, _0x1f8cf4)), $httpClient.get(_0x5742e6, (_0x124ea6, _0x57b620, _0x5baf59) => {
          {
            !_0x124ea6 && _0x57b620 && (_0x57b620.body = _0x5baf59, _0x57b620.statusCode = _0x57b620.status);
            _0x4b1593(_0x124ea6, _0x57b620, _0x5baf59);
          }
        })) : this.isQuanX() ? (this.isNeedRewrite && (_0x5742e6.opts = _0x5742e6.opts || {}, Object.assign(_0x5742e6.opts, _0x78a777)), $task.fetch(_0x5742e6).then(_0x2b3213 => {
          {
            const {
              statusCode: _0x20bc27,
              statusCode: _0x1f1715,
              headers: _0x5089e0,
              body: _0x417c7e
            } = _0x2b3213;
            const _0x84c9c = {
              status: _0x20bc27,
              statusCode: _0x1f1715,
              headers: _0x5089e0,
              body: _0x417c7e
            };
            _0x4b1593(null, _0x84c9c, _0x417c7e);
          }
        }, _0x1af06b => _0x4b1593(_0x1af06b))) : this.isNode() && (this.initGotEnv(_0x5742e6), this.got(_0x5742e6).on("redirect", (_0x4ad48a, _0x582547) => {
          {
            try {
              {
                if (_0x4ad48a.headers["set-cookie"]) {
                  const _0x5c1bb2 = _0x4ad48a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  _0x5c1bb2 && this.ckjar.setCookieSync(_0x5c1bb2, null);
                  _0x582547.cookieJar = this.ckjar;
                }
              }
            } catch (_0x1d8244) {
              {
                this.logErr(_0x1d8244);
              }
            }
          }
        }).then(_0x4730c2 => {
          {
            const {
              statusCode: _0x1dd7b7,
              statusCode: _0x4f0673,
              headers: _0x5ceb6f,
              body: _0x540f62
            } = _0x4730c2;
            const _0x2727d9 = {
              status: _0x1dd7b7,
              statusCode: _0x4f0673,
              headers: _0x5ceb6f,
              body: _0x540f62
            };
            _0x4b1593(null, _0x2727d9, _0x540f62);
          }
        }, _0x24c9a3 => {
          {
            const {
              message: _0x253935,
              response: _0x494331
            } = _0x24c9a3;
            _0x4b1593(_0x253935, _0x494331, _0x494331 && _0x494331.body);
          }
        }));
      }
    }
    post(_0x35bcdb, _0x46ced6 = () => {}) {
      const _0xc80b1 = {
        "X-Surge-Skip-Scripting": false
      };
      const _0x18c099 = {
        hints: false
      };
      if (_0x35bcdb.body && _0x35bcdb.headers && !_0x35bcdb.headers["Content-Type"] && (_0x35bcdb.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x35bcdb.headers && delete _0x35bcdb.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x35bcdb.headers = _0x35bcdb.headers || {}, Object.assign(_0x35bcdb.headers, _0xc80b1));
        $httpClient.post(_0x35bcdb, (_0x3f7f4b, _0x5d2ce9, _0x5655b1) => {
          {
            !_0x3f7f4b && _0x5d2ce9 && (_0x5d2ce9.body = _0x5655b1, _0x5d2ce9.statusCode = _0x5d2ce9.status);
            _0x46ced6(_0x3f7f4b, _0x5d2ce9, _0x5655b1);
          }
        });
      } else {
        if (this.isQuanX()) {
          _0x35bcdb.method = "POST";
          this.isNeedRewrite && (_0x35bcdb.opts = _0x35bcdb.opts || {}, Object.assign(_0x35bcdb.opts, _0x18c099));
          $task.fetch(_0x35bcdb).then(_0x33fe1a => {
            {
              const {
                statusCode: _0x3e1bb3,
                statusCode: _0x3dba01,
                headers: _0x3ea863,
                body: _0x29efd4
              } = _0x33fe1a;
              const _0x9b9799 = {
                status: _0x3e1bb3,
                statusCode: _0x3dba01,
                headers: _0x3ea863,
                body: _0x29efd4
              };
              _0x46ced6(null, _0x9b9799, _0x29efd4);
            }
          }, _0x4ca15d => _0x46ced6(_0x4ca15d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x35bcdb);
            const {
              url: _0x4ba3c8,
              ..._0x284ab4
            } = _0x35bcdb;
            this.got.post(_0x4ba3c8, _0x284ab4).then(_0x372316 => {
              {
                const {
                  statusCode: _0x27ca44,
                  statusCode: _0x5b091e,
                  headers: _0x432106,
                  body: _0x33d8ee
                } = _0x372316;
                const _0x1c163d = {
                  status: _0x27ca44,
                  statusCode: _0x5b091e,
                  headers: _0x432106,
                  body: _0x33d8ee
                };
                _0x46ced6(null, _0x1c163d, _0x33d8ee);
              }
            }, _0x12b26c => {
              const {
                message: _0x1f27ae,
                response: _0x9e0c6d
              } = _0x12b26c;
              _0x46ced6(_0x1f27ae, _0x9e0c6d, _0x9e0c6d && _0x9e0c6d.body);
            });
          }
        }
      }
    }
    time(_0x43631a, _0x59d1d7 = null) {
      const _0x446188 = _0x59d1d7 ? new Date(_0x59d1d7) : new Date();
      let _0x2b582d = {
        "M+": _0x446188.getMonth() + 1,
        "d+": _0x446188.getDate(),
        "H+": _0x446188.getHours(),
        "m+": _0x446188.getMinutes(),
        "s+": _0x446188.getSeconds(),
        "q+": Math.floor((_0x446188.getMonth() + 3) / 3),
        S: _0x446188.getMilliseconds()
      };
      /(y+)/.test(_0x43631a) && (_0x43631a = _0x43631a.replace(RegExp.$1, (_0x446188.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x24eed8 in _0x2b582d) new RegExp("(" + _0x24eed8 + ")").test(_0x43631a) && (_0x43631a = _0x43631a.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2b582d[_0x24eed8] : ("00" + _0x2b582d[_0x24eed8]).substr(("" + _0x2b582d[_0x24eed8]).length)));
      return _0x43631a;
    }
    msg(_0x4c7683 = _0x35f787, _0x55fc62 = "", _0x4150c2 = "", _0x2e46d3) {
      const _0x5e2a2a = _0x5a3be7 => {
        if (!_0x5a3be7) {
          return _0x5a3be7;
        }
        if ("string" == typeof _0x5a3be7) {
          return this.isLoon() ? _0x5a3be7 : this.isQuanX() ? {
            "open-url": _0x5a3be7
          } : this.isSurge() ? {
            url: _0x5a3be7
          } : undefined;
        }
        if ("object" == typeof _0x5a3be7) {
          if (this.isLoon()) {
            let _0x5788bc = _0x5a3be7.openUrl || _0x5a3be7.url || _0x5a3be7["open-url"];
            let _0x32cd00 = _0x5a3be7.mediaUrl || _0x5a3be7["media-url"];
            const _0x3251a9 = {
              openUrl: _0x5788bc,
              mediaUrl: _0x32cd00
            };
            return _0x3251a9;
          }
          if (this.isQuanX()) {
            let _0x2bd374 = _0x5a3be7["open-url"] || _0x5a3be7.url || _0x5a3be7.openUrl;
            let _0x2623aa = _0x5a3be7["media-url"] || _0x5a3be7.mediaUrl;
            const _0x4d0250 = {
              "open-url": _0x2bd374,
              "media-url": _0x2623aa
            };
            return _0x4d0250;
          }
          if (this.isSurge()) {
            let _0x30a0ac = _0x5a3be7.url || _0x5a3be7.openUrl || _0x5a3be7["open-url"];
            const _0x5a58b5 = {
              url: _0x30a0ac
            };
            return _0x5a58b5;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4c7683, _0x55fc62, _0x4150c2, _0x5e2a2a(_0x2e46d3)) : this.isQuanX() && $notify(_0x4c7683, _0x55fc62, _0x4150c2, _0x5e2a2a(_0x2e46d3))), !this.isMuteLog) {
        let _0x19c49a = ["", "==============📣系统通知📣=============="];
        _0x19c49a.push(_0x4c7683);
        _0x55fc62 && _0x19c49a.push(_0x55fc62);
        _0x4150c2 && _0x19c49a.push(_0x4150c2);
        console.log(_0x19c49a.join("\n"));
        this.logs = this.logs.concat(_0x19c49a);
      }
    }
    log(..._0xf8cfe1) {
      _0xf8cfe1.length > 0 && (this.logs = [...this.logs, ..._0xf8cfe1]);
      console.log(_0xf8cfe1.join(this.logSeparator));
    }
    logErr(_0x494ff5, _0x4c5422) {
      const _0x3bdbed = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3bdbed ? this.log("", "❗️" + this.name + ", 错误!", _0x494ff5.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x494ff5);
    }
    wait(_0x4d0528) {
      return new Promise(_0x301b41 => setTimeout(_0x301b41, _0x4d0528));
    }
    done(_0x110dca = {}) {
      const _0x55a428 = new Date().getTime();
      const _0x378f09 = (_0x55a428 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x378f09 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x110dca);
    }
  }(_0x35f787, _0x2db8cf);
}