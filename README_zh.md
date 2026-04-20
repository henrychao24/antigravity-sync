# Antigravity Auto Retry

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English](README.md) | **中文**

**为 AI 编程助手自动点击 Retry（重试）按钮。实现真正的“无人值守”自动化。**

---

## 👤 关于我

**Henry Chao**

- 🐙 **GitHub:** [henrychao24](https://github.com/henrychao24)

---

## 🤖 自动重试 (Auto Retry)

当 AI Agent 遇到错误时自动点击 **Retry**（重试）按钮，并可配置自动点击终端命令的 **Run**（运行）按钮。解放双手，实现零干预自动化！

### 工作原理

使用 Chrome 开发者工具协议 (CDP) 注入脚本，监控 IDE 的 webview 并自动点击审批/确认按钮。

### 快速开始

1. 打开命令面板 (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. 运行 `Antigravity Auto Retry: Start`
3. 首次使用：根据弹出的设置对话框复制补丁命令，以开启 CDP
4. **重启 IDE**
5. 再次运行 `Antigravity Auto Retry: Start` → 激活成功！✅

### 支持的 IDE

- ✅ Antigravity
- ✅ Cursor  
- ✅ VS Code
- ✅ 其他基于 Electron 的 IDE

### 平台支持

| 平台 | 状态 |
|----------|--------|
| macOS | ✅ 完全支持 |
| Windows | ✅ 完全支持 |
| Linux | ✅ 完全支持 |

#### 💡 Windows 后台启动提示

对于想要在后台静默启动开启了 CDP 端口的 IDE（如 Antigravity IDE）且不保留命令行黑框的 Windows 用户，可以使用提供的 `Antigravity.vbs` 脚本：

1. 确保 `Antigravity.vbs` 内的执行路径与你的安装路径一致（默认为 `C:\Soft\tools\Antigravity\Antigravity.exe`）。
2. 双击 `Antigravity.vbs` 脚本（或为其创建桌面快捷方式）。
3. 这将在后台静默启动带有 `--remote-debugging-port=31905` 参数的 IDE！

---

## 命令

| 命令 | 描述 |
|---------|-------------|
| `Antigravity Auto Retry: Start` | 启动自动重试循环 |
| `Antigravity Auto Retry: Stop` | 停止自动重试循环 |
| `Antigravity Auto Retry: Toggle` | 切换自动重试循环的开关状态 |
| `Antigravity Auto Retry: Show Log` | 在“输出”频道显示详细日志 |

## 配置

| 设置项 | 默认值 | 描述 |
|---------|---------|-------------|
| `antigravitySync.autoStartRetry` | `false` | 在 IDE 启动时自动开启自动重试 |
| `antigravitySync.autoRunEnabled` | `false` | 自动点击 AI Agent 终端命令的“Run”按钮 |
| `antigravitySync.cdpPort` | `31905` | 用于自动接受操作的 CDP 远程调试端口 |
| `antigravitySync.autoRetryInterval` | `3` | 重试检查的间隔时间（秒） |
| `antigravitySync.autoRetryMaxRetries` | `50` | 停止前的最大自动重试次数 |

## 开发

```bash
git clone https://github.com/henrychao24/antigravity-sync.git
cd antigravity-sync
npm install
npm run build

# 运行扩展 (开发模式)
agy . && press F5
```

## 贡献

- [报告 Bugs](https://github.com/henrychao24/antigravity-sync/issues)
- [提交特性需求](https://github.com/henrychao24/antigravity-sync/issues)

## 许可证

MIT © [Henry Chao](https://github.com/henrychao24)
