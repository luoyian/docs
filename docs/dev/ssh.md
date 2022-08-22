# SSH

一种用于安全通信的网络协议。

## 生成新的 SSH 密钥

```bash
ssh-keygen -t ed25519
```

## 测试 SSH 连接

```bash
ssh -T git@github.com
```

## 在 HTTPS 端口使用 SSH

```config
Host github.com
  HostName ssh.github.com
  Port 443
  User git
```

## 配置代理

```cofig
ProxyCommand "C:\Program Files\Git\mingw64\bin\connect.exe" -H 127.0.0.1:7890 %h %p
```
