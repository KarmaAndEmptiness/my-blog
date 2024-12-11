在 Windows 10 上使用压缩包方式安装 MySQL，并避免将其注册为服务的步骤如下：

---

### **1. 下载 MySQL 压缩包**
1. 前往 [MySQL 官方下载页面](https://dev.mysql.com/downloads/mysql/)。
2. 选择 "Windows (x86, 64-bit), ZIP Archive" 版本。
3. 下载完成后，将压缩包解压到你希望安装 MySQL 的路径（例如：`C:\mysql`）。

---

### **2. 配置 MySQL**
1. 进入解压后的目录，创建一个名为 `my.ini` 的配置文件，内容如下（根据需要调整路径）：

```ini
[mysqld]
# 设置 MySQL 数据存储目录
basedir=C:/mysql
datadir=C:/mysql/data

# 设置字符集
character-set-server=utf8mb4
collation-server=utf8mb4_general_ci

# 设置端口
port=3306

# 禁用服务注册（避免将 MySQL 注册为服务）
skip-grant-tables
```

2. 如果需要完整的权限管理，可删除或注释掉 `skip-grant-tables`。

---

### **3. 初始化 MySQL 数据目录**
1. 打开命令提示符（以管理员身份运行）。
2. 进入 MySQL 的 `bin` 目录，例如：

```cmd
cd C:\mysql\bin
```

3. 运行以下命令初始化数据目录：

```cmd
mysqld --initialize-insecure --basedir=C:\mysql --datadir=C:\mysql\data
```

- `--initialize-insecure` 会创建一个没有密码的 root 用户。
- 如果想要随机生成 root 密码，可以用 `--initialize`（需要手动查找日志获取密码）。

---

### **4. 启动 MySQL**
1. 在命令提示符中，运行以下命令以启动 MySQL：

```cmd
mysqld --console
```

- `--console` 会将日志输出到当前窗口。
- 如果不希望每次手动输入命令，可以创建一个批处理文件（如 `start_mysql.bat`），内容如下：

```cmd
@echo off
"C:\mysql\bin\mysqld" --console
pause
```

双击该文件即可启动 MySQL。

---

### **5. 连接 MySQL**
1. 打开一个新的命令提示符窗口。
2. 进入 MySQL 的 `bin` 目录并运行以下命令：

```cmd
mysql -u root
```

如果未设置密码，可以直接登录；否则需要提供 `-p` 并输入密码。

---

### **6. 停止 MySQL**
1. 在命令提示符中运行以下命令停止 MySQL：

```cmd
mysqladmin -u root shutdown
```

2. 确保在操作前已登录 MySQL 或已正确配置环境变量。

---

通过以上步骤，你可以在 Windows 10 上使用压缩包方式安装 MySQL，并避免注册为服务，适合临时使用或开发环境。