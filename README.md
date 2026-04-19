# Antigravity Auto Retry

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Auto-click Retry buttons for AI coding agents. Zero-babysitting automation.**

---

## 👤 About Me

**Henry Chao**

- 🐙 **GitHub:** [henrychao24](https://github.com/henrychao24)

---

## 🤖 Auto Retry

Automatically click **Retry** buttons when AI agents encounter errors. Zero-babysitting automation!

### How It Works

Uses Chrome DevTools Protocol (CDP) to inject a script that monitors the IDE webview and auto-clicks approval buttons.

### Quick Start

1. Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Run `Antigravity Auto Retry: Start`
3. First time: Follow setup dialog to copy the patch command to enable CDP
4. **Restart IDE**
5. Run `Antigravity Auto Retry: Start` again → Active! ✅

### Supported IDEs

- ✅ Antigravity
- ✅ Cursor  
- ✅ VS Code
- ✅ Other Electron-based IDEs

### Platform Support

| Platform | Status |
|----------|--------|
| macOS | ✅ Full support |
| Windows | ✅ Full support |
| Linux | ✅ Full support |

---

## Commands

| Command | Description |
|---------|-------------|
| `Antigravity Auto Retry: Start` | Start auto-retry loop |
| `Antigravity Auto Retry: Stop` | Stop auto-retry loop |
| `Antigravity Auto Retry: Toggle` | Toggle auto-retry loop |
| `Antigravity Auto Retry: Show Log` | Show detailed logs in Output channel |

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| `antigravitySync.autoStartRetry` | `false` | Automatically start Auto Retry when IDE launches |
| `antigravitySync.cdpPort` | `31905` | CDP remote debugging port for auto-accept |
| `antigravitySync.autoRetryInterval` | `3` | Interval in seconds between retry checks |
| `antigravitySync.autoRetryMaxRetries` | `50` | Maximum number of auto-retries before stopping |

## Development

```bash
git clone https://github.com/henrychao24/antigravity-sync.git
cd antigravity-sync
npm install
npm run build

# Run extension (dev mode)
agy . && press F5
```

## Contributing

- [Report bugs](https://github.com/henrychao24/antigravity-sync/issues)
- [Request features](https://github.com/henrychao24/antigravity-sync/issues)

## License

MIT © [Henry Chao](https://github.com/henrychao24)
