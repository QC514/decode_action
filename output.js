//Sat Dec 20 2025 05:52:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x266624 = require("fs");
  try {
    const _0x1921f2 = _0x266624.readFileSync(__filename, "utf8");
    const _0x242420 = "/*\n * 项目名称：早纤生活自动脚本12.19修复版\n * 功能说明：自动登录、浏览广告、领取福利\n * 使用方法：\n * 1. 确保安装了 Node.js\n * 2. 依赖  axios crypto\n * 3. 配置环境变量 ZXSH    示例 账号#密码   和 ZXSH_NICKNAMES   示例 账号1-账号二-无限\n * 4. 运行 node zxsh_obfuscated.js\n * 5. 邀请链接：http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=F8wZrlQ1g&requestDomain=\n * 6. 必须走邀请否则无广告，锁头脚本\n */";
    const _0x21d584 = _0x4d0d8c => _0x4d0d8c.replace(/\r/g, "").trim();
    const _0x18bd00 = _0x1921f2.slice(0, _0x242420.length + 50);
    if (_0x21d584(_0x18bd00).indexOf(_0x21d584(_0x242420)) !== 0) {
      {
        console.log("[31m==========================================");
        console.log("⛔ 警告：检测到文件头部说明已被非法篡改！");
        console.log("⛔ 为了安全起见，脚本拒绝运行。");
        console.log("==========================================[0m");
        process.exit(1);
      }
    }
  } catch (_0x5dca35) {}
})();
const axios = require("axios");
const crypto = require("crypto");
const TOKEN_ENV_NAME = "ZXSH";
const NICKNAMES_ENV_NAME = "ZXSH_NICKNAMES";
const REQUIRED_UP_SHARD_CODE = "F8wZrlQ1g";
const TASK_CONFIG = {
  FIXED_WATCH_SEC: 100,
  INTERVAL_SEC: 5,
  TIMEOUT: 30000
};
function log(_0x469151, _0x27f25f = "INFO", _0xde0c50 = null) {
  const _0x213029 = {
    INFO: "[32m",
    WARN: "[33m",
    ERROR: "[31m",
    SUCCESS: "[35m",
    CHECK: "[36m"
  };
  const _0x1e1067 = _0x213029[_0x27f25f] || "[37m";
  const _0x45d8c4 = _0xde0c50 ? "[" + _0xde0c50 + "] " : "";
  console.log(_0x1e1067 + "[" + _0x27f25f + "] " + _0x45d8c4 + _0x469151 + "[0m");
}
function encryptMD5(_0x5aa711) {
  return crypto.createHash("md5").update(_0x5aa711).digest("hex").toUpperCase();
}
function generateRandomString(_0x5aa21b = 8) {
  const _0x21872d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x5c1c72 = "";
  for (let _0x4497c9 = 0; _0x4497c9 < _0x5aa21b; _0x4497c9++) {
    _0x5c1c72 += _0x21872d.charAt(Math.floor(Math.random() * _0x21872d.length));
  }
  return _0x5c1c72;
}
function generateSign(_0x385759, _0x4a6715, _0x491609) {
  const _0x2d51dd = "aB3xK9pQ2sL8mZ1nR7tY4uW0vJ5cH6gF";
  const _0x3d5d2d = "randomNumber=" + _0x4a6715 + "&timeStamp=" + _0x385759 + "&videoId=" + _0x491609 + "&" + _0x2d51dd + "=";
  return crypto.createHash("md5").update(_0x3d5d2d).digest("hex").toLowerCase();
}
function getHeaders(_0x27a0ad = null) {
  const _0x177b21 = {
    host: "gw.yyzqsh.cn",
    platform: "Android",
    version: "v1.3.0",
    "content-type": "application/json; charset=UTF-8",
    "user-agent": "okhttp/4.10.0"
  };
  if (_0x27a0ad) {
    _0x177b21.authorization = _0x27a0ad.trim();
  }
  return _0x177b21;
}
async function executeAccountTask(_0x465331, _0x285013, _0x12fd32) {
  let _0x18f9f3 = {
    "备注": _0x12fd32,
    "手机号": _0x465331,
    "状态": "❌ 失败",
    "原因": ""
  };
  try {
    log("🚀 正在登录...", "CHECK", _0x12fd32);
    const _0x2e02b2 = await axios.post("http://gw.yyzqsh.cn/api/web/auth/pwdLogin", {
      phone: _0x465331,
      password: encryptMD5(_0x285013)
    }, {
      headers: getHeaders(),
      timeout: TASK_CONFIG.TIMEOUT
    });
    if (!_0x2e02b2.data || _0x2e02b2.data.code !== 200) {
      throw new Error(_0x2e02b2.data?.["message"] || "登录失败");
    }
    const _0x5c236f = _0x2e02b2.data.result.token;
    const _0x2166cd = getHeaders(_0x5c236f);
    log("✅ 登录成功，开始验证邀请关系", "SUCCESS", _0x12fd32);
    const _0x12f2ab = await axios.post("http://gw.yyzqsh.cn/api/web/member/getMemberInfo", {}, {
      headers: _0x2166cd,
      timeout: TASK_CONFIG.TIMEOUT
    });
    if (!_0x12f2ab.data || !_0x12f2ab.data.result) {
      throw new Error("获取用户信息失败");
    }
    const _0x15a5d9 = _0x12f2ab.data.result.upShardCode;
    log("🔍 当前账号上级邀请码: " + (_0x15a5d9 || "无"), "INFO", _0x12fd32);
    if (_0x15a5d9 !== REQUIRED_UP_SHARD_CODE) {
      log("🚫 邀请人校验失败！预期: " + REQUIRED_UP_UP_SHARD_CODE + "，实际: " + _0x15a5d9, "ERROR", _0x12fd32);
      _0x18f9f3["状态"] = "⏩ 已跳过";
      _0x18f9f3["原因"] = "非指定邀请人账号";
      return _0x18f9f3;
    }
    log("✨ 校验通过，开始执行任务", "SUCCESS", _0x12fd32);
    const _0x210d4f = await axios.post("http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo", {}, {
      headers: _0x2166cd,
      timeout: TASK_CONFIG.TIMEOUT
    });
    const _0x2e3c7d = _0x210d4f.data.result || {};
    let _0x33182d = _0x2e3c7d.watchedVideoCount || 0;
    const _0x10f97b = _0x2e3c7d.videoCount || 0;
    log("📊 今日进度: " + _0x33182d + "/" + _0x10f97b, "INFO", _0x12fd32);
    if (_0x33182d >= _0x10f97b && _0x10f97b > 0) {
      _0x18f9f3["状态"] = "✅ 已完成";
      return _0x18f9f3;
    }
    for (let _0x1fe8e3 = _0x33182d; _0x1fe8e3 < _0x10f97b; _0x1fe8e3++) {
      const _0x24b94f = await axios.post("http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement", {}, {
        headers: _0x2166cd,
        timeout: TASK_CONFIG.TIMEOUT
      });
      const _0x50db56 = _0x24b94f.data.result ? _0x24b94f.data.result.id : null;
      if (!_0x50db56) {
        log("无法获取广告ID，跳过", "WARN", _0x12fd32);
        continue;
      }
      log("📺 模拟观看广告 ID: " + _0x50db56 + " (" + TASK_CONFIG.FIXED_WATCH_SEC + "秒)", "INFO", _0x12fd32);
      await new Promise(_0x15edb1 => setTimeout(_0x15edb1, TASK_CONFIG.FIXED_WATCH_SEC * 1000));
      const _0x172f79 = Date.now().toString();
      const _0x57806e = generateRandomString(8);
      const _0x2a120e = generateSign(_0x172f79, _0x57806e, _0x50db56);
      const _0xeb77d = {
        ..._0x2166cd,
        timestamp: _0x172f79,
        randomnumber: _0x57806e,
        sign: _0x2a120e,
        phoneinfo: "MANUFACTURER:Xiaomi,MODEL:Redmi K20 Pro,DEVICE:raphael,VERSION.RELEASE:11,"
      };
      const _0xc20596 = await axios.post("http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen?videoId=" + _0x50db56, {}, {
        headers: _0xeb77d,
        timeout: TASK_CONFIG.TIMEOUT
      });
      _0xc20596.data && _0xc20596.data.code === 200 ? log("💰 贡献值领取成功", "SUCCESS", _0x12fd32) : log("❌ 领取失败: " + _0xc20596.data?.["message"], "WARN", _0x12fd32);
      if (_0x1fe8e3 < _0x10f97b - 1) {
        await new Promise(_0x4fa2f0 => setTimeout(_0x4fa2f0, TASK_CONFIG.INTERVAL_SEC * 1000));
      }
    }
    _0x18f9f3["状态"] = "✅ 成功";
    return _0x18f9f3;
  } catch (_0x361ef1) {
    log("💥 异常: " + _0x361ef1.message, "ERROR", _0x12fd32);
    _0x18f9f3["原因"] = _0x361ef1.message;
    return _0x18f9f3;
  }
}
async function main() {
  const _0x7622ac = process.env[TOKEN_ENV_NAME] || "";
  if (!_0x7622ac) {
    return log("未设置环境变量 " + TOKEN_ENV_NAME, "ERROR");
  }
  const _0x6f5374 = _0x7622ac.split(/\r?\n/).filter(_0x20d8fc => _0x20d8fc.includes("#"));
  const _0x5aa1a6 = (process.env[NICKNAMES_ENV_NAME] || "").split("-");
  log("==== 启动校验任务 (锁定邀请人: " + REQUIRED_UP_SHARD_CODE + ") ====", "CHECK");
  const _0x26824d = [];
  for (let _0x24899b = 0; _0x24899b < _0x6f5374.length; _0x24899b++) {
    const [_0x3b2c80, _0x9aa22e] = _0x6f5374[_0x24899b].split("#");
    const _0x5e383 = _0x5aa1a6[_0x24899b] ? _0x5aa1a6[_0x24899b].trim() : "账号" + (_0x24899b + 1);
    const _0xaca225 = await executeAccountTask(_0x3b2c80.trim(), _0x9aa22e.trim(), _0x5e383);
    _0x26824d.push(_0xaca225);
    console.log("-".repeat(30));
  }
  console.log("\n" + "=".repeat(60));
  console.log("🏁 最终执行报告");
  console.table(_0x26824d);
}
main().catch(console.error);