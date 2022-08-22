# Ubuntu

一个以桌面应用为主的 Linux 操作系统。

## 配置镜像

1. 备份配置文件

   ```bash
   sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
   ```

2. 替换为镜像

   - 阿里云公网镜像

     ```bash
     sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.aliyun.com@g" /etc/apt/sources.list
     sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.aliyun.com@g" /etc/apt/sources.list
     ```

   - 阿里云内网镜像

     ```bash
     sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
     sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
     ```

3. 更新索引

   ```bash
   sudo apt update
   ```
