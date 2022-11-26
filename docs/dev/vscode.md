# VSCode

一个跨平台源代码编辑器。

## 我的配置

### settings.json

```json
{
  "[rust]": {
    "editor.defaultFormatter": "rust-lang.rust-analyzer",
    "editor.tabSize": 4
  },
  "[stylus]": {
    "editor.defaultFormatter": "thisismanta.stylus-supremacy"
  },
  "[toml]": {
    "editor.defaultFormatter": "bodil.prettier-toml"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.cursorSmoothCaretAnimation": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": false,
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.smoothScrolling": true,
  "editor.tabSize": 2,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "explorer.compactFolders": false,
  "extensions.ignoreRecommendations": true,
  "files.associations": {
    "*.json": "jsonc"
  },
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "github.gitProtocol": "ssh",
  "less.compile": {
    "out": false
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "markdown-preview-github-styles.colorTheme": "system",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "security.workspace.trust.enabled": false,
  "terminal.integrated.smoothScrolling": true,
  "workbench.colorTheme": "Material Theme",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.list.smoothScrolling": true,
  "workbench.startupEditor": "none"
}
```
