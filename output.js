//Sat Jun 07 2025 04:11:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2d8b2a = {
    "API_URL": "http://124.71.214.109:7867",
    "PHONE_REGEX": /^1[3-9]\d{9}$/,
    "CODE_LENGTH": 6,
    "COUNTDOWN_TIME": 60
  },
  _0x3d1cac = {
    "phoneInput": document.getElementById("phone"),
    "codeInput": document.getElementById("code"),
    "phoneError": document.getElementById("phoneError"),
    "codeError": document.getElementById("codeError"),
    "sendCodeBtn": document.getElementById("sendCodeBtn"),
    "loginBtn": document.getElementById("loginBtn"),
    "loginForm": document.getElementById("loginForm"),
    "responseArea": document.getElementById("responseArea"),
    "tokenValue": document.getElementById("tokenValue"),
    "copyRawToken": document.getElementById("copyRawToken"),
    "copyEncodedToken": document.getElementById("copyEncodedToken")
  };
let _0x1048d1 = {
  "countdown": _0x2d8b2a.COUNTDOWN_TIME,
  "countdownInterval": null,
  "deviceId": "",
  "isSubmitting": false
};
const _0xcd0d8b = {
    "showError"(_0x4ff758, _0x356753) {
      _0x4ff758.querySelector("span").textContent = _0x356753;
      _0x4ff758.classList.remove("hidden");
      _0x4ff758.previousElementSibling.classList.add("border-danger");
      _0x4ff758.previousElementSibling.classList.add("shake");
      setTimeout(() => {
        _0x4ff758.previousElementSibling.classList.remove("shake");
      }, 500);
    },
    "hideError"(_0x1421e2) {
      _0x1421e2.classList.add("hidden");
      _0x1421e2.previousElementSibling.classList.remove("border-danger");
    },
    "showToast"(_0x57dd1e, _0x98bc21 = true) {
      const _0x5ae52a = document.createElement("div");
      _0x5ae52a.className = "fixed top-4 left-1/2 transform -translate-x-1/2 " + (_0x98bc21 ? "bg-success" : "bg-danger") + " text-white px-6 py-3 rounded-lg shadow-lg z-50 opacity-0 transition-opacity duration-300";
      _0x5ae52a.textContent = _0x57dd1e;
      document.body.appendChild(_0x5ae52a);
      setTimeout(() => {
        _0x5ae52a.classList.remove("opacity-0");
        _0x5ae52a.classList.add("opacity-100");
      }, 10);
      setTimeout(() => {
        _0x5ae52a.classList.remove("opacity-100");
        _0x5ae52a.classList.add("opacity-0");
        setTimeout(() => {
          document.body.removeChild(_0x5ae52a);
        }, 300);
      }, 3000);
    },
    "copyToClipboard"(_0x19e015) {
      navigator.clipboard.writeText(_0x19e015).then(() => {
        this.showToast("复制成功！");
      }).catch(_0x4f3cc2 => {
        console.error("复制失败:", _0x4f3cc2);
        this.showToast("复制失败，请手动复制", false);
      });
    },
    "validatePhone"(_0x54b736) {
      if (!_0x54b736) {
        return {
          "valid": false,
          "message": "请输入手机号"
        };
      }
      if (!_0x2d8b2a.PHONE_REGEX.test(_0x54b736)) {
        return {
          "valid": false,
          "message": "请输入有效的手机号"
        };
      }
      return {
        "valid": true
      };
    },
    "validateCode"(_0x38d048) {
      if (!_0x38d048) {
        return {
          "valid": false,
          "message": "请输入验证码"
        };
      }
      if (_0x38d048.length !== _0x2d8b2a.CODE_LENGTH) {
        return {
          "valid": false,
          "message": "验证码长度应为" + _0x2d8b2a.CODE_LENGTH + "位"
        };
      }
      return {
        "valid": true
      };
    }
  },
  _0x62fbb6 = {
    "start"() {
      _0x1048d1.countdown = _0x2d8b2a.COUNTDOWN_TIME;
      _0x3d1cac.sendCodeBtn.disabled = true;
      _0x3d1cac.sendCodeBtn.classList.remove("bg-primary");
      _0x3d1cac.sendCodeBtn.classList.add("bg-gray-400");
      this.updateButtonText();
      _0x1048d1.countdownInterval = setInterval(() => {
        _0x1048d1.countdown--;
        this.updateButtonText();
        _0x1048d1.countdown <= 0 && this.reset();
      }, 1000);
    },
    "updateButtonText"() {
      _0x3d1cac.sendCodeBtn.textContent = "重新发送(" + _0x1048d1.countdown + "s)";
    },
    "reset"() {
      clearInterval(_0x1048d1.countdownInterval);
      _0x1048d1.countdown = _0x2d8b2a.COUNTDOWN_TIME;
      _0x3d1cac.sendCodeBtn.disabled = false;
      _0x3d1cac.sendCodeBtn.classList.remove("bg-gray-400");
      _0x3d1cac.sendCodeBtn.classList.add("bg-primary");
      _0x3d1cac.sendCodeBtn.textContent = "获取验证码";
    }
  },
  _0x48e8fb = {
    async "sendSmsCode"(_0x517e7d) {
      try {
        const _0x126107 = await axios.post(_0x2d8b2a.API_URL + "/api/send_sms", {
          "phone": _0x517e7d
        }, {
          "headers": {
            "Content-Type": "application/json"
          }
        });
        if (_0x126107.data.code === 0) return _0x1048d1.deviceId = _0x126107.data.deviceId, {
          "success": true,
          "message": "验证码已发送"
        };
        return {
          "success": false,
          "message": _0x126107.data.message || "发送验证码失败"
        };
      } catch (_0x57d6df) {
        return this.handleApiError(_0x57d6df);
      }
    },
    async "doLogin"(_0x369d14, _0x1af0f1) {
      try {
        {
          const _0x553678 = await axios.post(_0x2d8b2a.API_URL + "/api/sms_login", {
            "phone": _0x369d14,
            "code": _0x1af0f1,
            "deviceId": _0x1048d1.deviceId
          }, {
            "headers": {
              "Content-Type": "application/json"
            }
          });
          if (_0x553678.data.code === 0) return {
            "success": true,
            "token": _0x553678.data.token,
            "message": "登录成功"
          };
          return {
            "success": false,
            "message": _0x553678.data.message || "登录失败"
          };
        }
      } catch (_0xad57b5) {
        return this.handleApiError(_0xad57b5);
      }
    },
    "handleApiError"(_0x589faa) {
      let _0x481bea = "网络错误，请稍后重试";
      if (_0x589faa.response) _0x481bea = _0x589faa.response.data.message || _0x481bea;else _0x589faa.request && (_0x481bea = "无法连接到服务器，请检查网络");
      return {
        "success": false,
        "message": _0x481bea
      };
    }
  },
  _0xd01175 = {
    "init"() {
      _0x3d1cac.phoneInput.addEventListener("input", () => {
        {
          const _0x52f4fc = _0x3d1cac.phoneInput.value.trim(),
            {
              valid: _0x451611,
              message: _0x2db1e4
            } = _0xcd0d8b.validatePhone(_0x52f4fc);
          !_0x451611 ? _0xcd0d8b.showError(_0x3d1cac.phoneError, _0x2db1e4) : _0xcd0d8b.hideError(_0x3d1cac.phoneError);
        }
      });
      _0x3d1cac.codeInput.addEventListener("input", () => {
        {
          const _0x5dc8d8 = _0x3d1cac.codeInput.value.trim(),
            {
              valid: _0x53d018,
              message: _0xc4d302
            } = _0xcd0d8b.validateCode(_0x5dc8d8);
          !_0x53d018 ? _0xcd0d8b.showError(_0x3d1cac.codeError, _0xc4d302) : _0xcd0d8b.hideError(_0x3d1cac.codeError);
        }
      });
      _0x3d1cac.sendCodeBtn.addEventListener("click", async () => {
        {
          const _0x2910e9 = _0x3d1cac.phoneInput.value.trim(),
            {
              valid: _0x3a7dc2,
              message: _0x1b8e18
            } = _0xcd0d8b.validatePhone(_0x2910e9);
          if (!_0x3a7dc2) {
            {
              _0xcd0d8b.showError(_0x3d1cac.phoneError, _0x1b8e18);
              return;
            }
          }
          _0x3d1cac.sendCodeBtn.disabled = true;
          _0x3d1cac.sendCodeBtn.innerHTML = "<i class=\"fa fa-spinner fa-spin mr-2\"></i>发送中...";
          const {
            success: _0x2e2a4,
            message: _0x14ab9d
          } = await _0x48e8fb.sendSmsCode(_0x2910e9);
          _0x2e2a4 ? (_0xcd0d8b.showToast("验证码已发送，请注意查收！"), _0x62fbb6.start(), _0x3d1cac.codeInput.focus()) : (_0xcd0d8b.showToast(_0x14ab9d, false), _0x3d1cac.sendCodeBtn.disabled = false, _0x3d1cac.sendCodeBtn.textContent = "获取验证码");
        }
      });
      _0x3d1cac.loginForm.addEventListener("submit", async _0xdf0c79 => {
        _0xdf0c79.preventDefault();
        if (_0x1048d1.isSubmitting) return;
        _0x1048d1.isSubmitting = true;
        const _0x35b877 = _0x3d1cac.phoneInput.value.trim(),
          _0x3a95f4 = _0x3d1cac.codeInput.value.trim(),
          _0x24d039 = _0xcd0d8b.validatePhone(_0x35b877),
          _0xa4a77 = _0xcd0d8b.validateCode(_0x3a95f4);
        if (!_0x24d039.valid) {
          _0xcd0d8b.showError(_0x3d1cac.phoneError, _0x24d039.message);
          _0x1048d1.isSubmitting = false;
          return;
        }
        if (!_0xa4a77.valid) {
          _0xcd0d8b.showError(_0x3d1cac.codeError, _0xa4a77.message);
          _0x1048d1.isSubmitting = false;
          return;
        }
        _0x3d1cac.loginBtn.disabled = true;
        _0x3d1cac.loginBtn.innerHTML = "<i class=\"fa fa-spinner fa-spin mr-2\"></i>登录中...";
        const {
          success: _0x6357e5,
          message: _0x3fb747,
          token: _0xb08407
        } = await _0x48e8fb.doLogin(_0x35b877, _0x3a95f4);
        if (_0x6357e5) {
          const _0x1b4fe8 = encodeURIComponent(_0xb08407);
          _0x3d1cac.tokenValue.textContent = _0xb08407;
          _0x3d1cac.responseArea.classList.remove("hidden");
          _0x3d1cac.copyRawToken.onclick = () => _0xcd0d8b.copyToClipboard(_0xb08407);
          _0x3d1cac.copyEncodedToken.onclick = () => _0xcd0d8b.copyToClipboard(_0x1b4fe8);
          _0x3d1cac.responseArea.scrollIntoView({
            "behavior": "smooth",
            "block": "nearest"
          });
          _0x3d1cac.loginForm.reset();
          _0x62fbb6.reset();
          _0xcd0d8b.showToast("登录成功！");
        } else _0xcd0d8b.showToast(_0x3fb747, false);
        _0x3d1cac.loginBtn.disabled = false;
        _0x3d1cac.loginBtn.innerHTML = "<span>登录</span><i class=\"fa fa-arrow-right ml-2\"></i>";
        _0x1048d1.isSubmitting = false;
      });
      _0x3d1cac.phoneInput.addEventListener("keydown", _0x41cddd => {
        _0x41cddd.key === "Enter" && _0x3d1cac.phoneInput.value.trim().length === 11 && _0x3d1cac.codeInput.focus();
      });
    }
  };
document.addEventListener("DOMContentLoaded", () => {
  _0xd01175.init();
});