在centos8中使用certbot获取 [Let's Encrypt](https://letsencrypt.org/zh-cn/) 的ssl证书的步骤
1. 安装Certbot  
在机器上运行以下命令来安装certbot
```
sudo yum install certbot -y
```
2. 运行certbot  
有两种方式：  
    1. 停止 Web 服务器，然后运行此命令以获取证书。Certbot 将暂时在您的机器上启动一个 Web 服务器。
```
sudo certbot certonly --standalone
```
    2. 如果您的 Web 服务器已在使用端口 80，并且不想在 Certbot 运行时停止它，请运行此命令并按照终端中的说明进行操作。
```
sudo certbot certonly --webroot
```

3. 安装证书  
你需要把证书安装到webserver的配置文件中。

4. 测试自动续订   
系统上的 Certbot 软件包附带一个 cron 作业或 systemd 计时器，它将在证书过期之前自动续订证书。除非您更改配置，否则您无需再次运行 Certbot。您可以通过运行以下命令来测试证书的自动续订：
```
sudo certbot renew --dry-run
```

续订 certbot 的命令安装在以下位置之一：  
- ```/etc/crontab/```
- ```/etc/cron.*/*```
- ```systemctl list-timers```

>参考资料：[https://certbot.eff.org/instructions?ws=webproduct&os=centosrhel8](https://certbot.eff.org/instructions?ws=webproduct&os=centosrhel8)
    