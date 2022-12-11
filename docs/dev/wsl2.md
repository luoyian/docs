# WSL2

适用于 Linux 的 Windows 子系统。

## 配置代理

```sh
export hostip=$(cat /etc/resolv.conf | grep -oP '(?<=nameserver\ ).*')
export http_proxy="socks5://${hostip}:7890/"
export https_proxy="socks5://${hostip}:7890/"
```
