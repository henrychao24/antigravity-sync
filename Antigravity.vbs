Set WshShell = CreateObject("WScript.Shell")
WshShell.Run """C:\Soft\tools\Antigravity\Antigravity.exe"" --remote-debugging-port=31905", 0, False
Set WshShell = Nothing