/**
 * Antigravity Auto Retry - VS Code Extension
 * Auto-click Retry buttons for AI coding agents via CDP
 */
import * as vscode from 'vscode';
import { AutoRetryService } from './services/AutoRetryService';

let autoRetryService: AutoRetryService | undefined;
let outputChannel: vscode.OutputChannel;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  outputChannel = vscode.window.createOutputChannel('Antigravity Auto Retry');
  autoRetryService = new AutoRetryService();

  // Wire log callback to output channel
  autoRetryService.setLogCallback((message, type) => {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
    outputChannel.appendLine(`${prefix} ${message}`);
  });

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('antigravityAutoRetry.start', async () => {
      await startAutoRetry();
    }),

    vscode.commands.registerCommand('antigravityAutoRetry.stop', async () => {
      await stopAutoRetry();
    }),

    vscode.commands.registerCommand('antigravityAutoRetry.toggle', async () => {
      const status = autoRetryService?.getStatus();
      if (status?.running) {
        await stopAutoRetry();
      } else {
        await startAutoRetry();
      }
    }),

    vscode.commands.registerCommand('antigravityAutoRetry.showLog', () => {
      outputChannel.show();
    }),

    outputChannel
  );

  // Auto-start if enabled
  const config = vscode.workspace.getConfiguration('antigravitySync');
  if (config.get('autoStartRetry', false)) {
    setTimeout(async () => {
      await startAutoRetry(true);
    }, 3000);
  }
}

export function deactivate(): void {
  autoRetryService?.stop();
}

/**
 * Start Auto Retry with CDP check
 */
async function startAutoRetry(silent = false): Promise<void> {
  if (!autoRetryService) return;

  outputChannel.appendLine('--- Starting Auto Retry ---');

  const cdpAvailable = await autoRetryService.isCDPAvailable();

  if (!cdpAvailable) {
    outputChannel.appendLine('CDP not enabled. Setting up...');
    const setupSuccess = await autoRetryService.setupCDP(silent);

    if (!setupSuccess && !silent) {
      vscode.window.showErrorMessage('CDP setup failed. Run "Antigravity Auto Retry: Show Log" for details.');
      outputChannel.show();
    }
    return;
  }

  const started = await autoRetryService.start();

  if (!started && !silent) {
    vscode.window.showErrorMessage('Auto Retry failed to start. Run "Antigravity Auto Retry: Show Log" for details.');
    outputChannel.show();
  }
}

/**
 * Stop Auto Retry
 */
async function stopAutoRetry(): Promise<void> {
  if (!autoRetryService) return;
  await autoRetryService.stop();
}
