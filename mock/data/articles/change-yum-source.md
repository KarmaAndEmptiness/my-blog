您可以使用vault.centos.org网站来替换CentOS 8的YUM源，但请注意以下几点：

1. **版本支持结束**：CentOS 8的支持已经结束，因此官方不再提供安全更新和bug修复。使用这些旧版本的源可能存在安全风险。

2. **修改YUM源**：您可以通过修改YUM配置文件来使用vault.centos.org的源。以下是如何替换CentOS 8的YUM源的步骤：

   - 备份现有的YUM配置文件：
     ```sh
     sudo cp /etc/yum.repos.d/CentOS-*.repo /etc/yum.repos.d/backup/
     ```

   - 编辑YUM配置文件，将baseurl指向vault.centos.org：
     ```sh
     sudo sed -i 's|mirrorlist=|#mirrorlist=|g' /etc/yum.repos.d/CentOS-*.repo
     sudo sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*.repo
     ```

3. **具体例子**：下面是一个具体的配置示例，假设您正在编辑`/etc/yum.repos.d/CentOS-Linux-BaseOS.repo`文件：

   ```ini
   [BaseOS]
   name=CentOS Linux $releasever - BaseOS
   baseurl=http://vault.centos.org/$releasever/BaseOS/$basearch/os/
   gpgcheck=1
   enabled=1
   gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
   ```

   类似地，您需要编辑其他YUM配置文件（如`CentOS-Linux-AppStream.repo`，`CentOS-Linux-Extras.repo`等），将其中的baseurl更改为vault.centos.org的相应路径。

4. **更新YUM缓存**：修改完成后，运行以下命令以更新YUM缓存：
   ```sh
   sudo yum clean all
   sudo yum makecache
   ```

这样，您的CentOS 8系统就会使用vault.centos.org上的包进行软件安装和更新。请确保测试和评估这些更改，以确保它们不会影响您的系统稳定性和安全性。

更换yum源为vault.centos.org后，可能会遇到一些软件包无法找到的情况，比如snapd。vault.centos.org存储了CentOS的旧版本和归档版本，有时会缺少一些更新的软件包。要解决这个问题，可以尝试以下步骤：

1. **检查EPEL源：**
   EPEL (Extra Packages for Enterprise Linux) 是一个为RHEL及其衍生版本（如CentOS）提供额外软件包的仓库。snapd通常在EPEL仓库中。

   你可以使用以下命令来启用EPEL源：
   ```sh
   yum install epel-release
   ```

2. **更新Yum缓存：**
   启用EPEL源后，更新yum缓存：
   ```sh
   yum makecache
   ```

3. **搜索并安装snapd：**
   在启用EPEL源并更新缓存后，再次搜索并安装snapd：
   ```sh
   yum search snapd
   yum install snapd
   ```

4. **手动配置EPEL源：**
   如果默认的epel-release包无法工作，你可以手动配置EPEL源：
   ```sh
   wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
   rpm -ivh epel-release-latest-8.noarch.rpm
   yum makecache
   ```

5. **检查snapd包是否存在：**
   如果以上步骤都无法解决问题，可以通过以下命令来查看EPEL源中是否包含snapd包：
   ```sh
   yum --disablerepo="*" --enablerepo="epel" list available | grep snapd
   ```

通过上述步骤，你应该能够找到并安装snapd。如果问题依然存在，可能需要检查你的网络连接或尝试其他镜像源。