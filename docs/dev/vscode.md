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
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": false,
  "editor.fontFamily": "'CaskaydiaCove Nerd Font', 'Source Han Sans SC VF', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.inlineSuggest.enabled": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.smoothScrolling": true,
  "editor.tabSize": 2,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "explorer.compactFolders": false,
  "extensions.ignoreRecommendations": true,
  "files.associations": {
    "*.json": "jsonc",
    ".nirc": "ini",
    ".nyprmrc": "jsonc"
  },
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "github.gitProtocol": "ssh",
  "javascript.suggest.paths": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "markdown-preview-github-styles.colorTheme": "system",
  "path-intellisense.extensionOnImport": true,
  "path-intellisense.mappings": {
    "/": "${workspaceFolder}",
    "@": "${workspaceFolder}/src"
  },
  "path-intellisense.showHiddenFiles": true,
  "prettier.arrowParens": "avoid",
  "prettier.printWidth": 120,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "none",
  "security.workspace.trust.enabled": false,
  "tailwindCSS.emmetCompletions": true,
  "typescript.suggest.paths": false,
  "workbench.colorTheme": "Material Theme",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.list.smoothScrolling": true,
  "workbench.startupEditor": "none"
}
```

### keybindings.json

```json
// 将键绑定放在此文件中以覆盖默认值
[
  {
    "key": ".",
    "command": ""
  },
  {
    "key": "ctrl+alt+u",
    "command": "editor.action.transformToUppercase"
  },
  {
    "key": "ctrl+alt+t",
    "command": "editor.action.transformToTitlecase"
  },
  {
    "key": "ctrl+alt+l",
    "command": "editor.action.transformToLowercase"
  }
]
```