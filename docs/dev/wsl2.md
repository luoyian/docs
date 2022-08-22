# WSL2

适用于 Linux 的 Windows 子系统。

## 配置代理

```bash
export hostip=$(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*');
export https_proxy="http://${hostip}:7890";
export http_proxy="http://${hostip}:7890";
export all_proxy="socks5://${hostip}:7891";
```
