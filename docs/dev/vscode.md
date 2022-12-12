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
  "editor.fontFamily": "'FiraCode Nerd Font'",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.parameterHints.enabled": false,
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
  "javascript.suggest.paths": false,
  "less.compile": {
    "out": false
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "markdown-preview-github-styles.colorTheme": "system",
  "path-intellisense.mappings": {
    "/": "${workspaceFolder}",
    "@": "${workspaceFolder}/src"
  },
  "path-intellisense.showHiddenFiles": true,
  "prettier.arrowParens": "avoid",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "none",
  "security.workspace.trust.enabled": false,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.smoothScrolling": true,
  "typescript.suggest.paths": false,
  "vetur.ignoreProjectWarning": true,
  "volar.autoWrapParentheses": false,
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
  }
]
```
