用 C++ 做 Web 后端是可行的，尤其在性能要求较高的应用场景中，比如实时系统、金融应用和需要处理大量并发请求的服务。尽管 C++ 在 Web 开发中不如 JavaScript、Python 或 Java 常用，但它的高性能和控制能力使其在某些场景下有优势。

### 常见的 C++ Web 框架
有几个流行的 C++ 框架可以用来做 Web 后端开发：

1. **Drogon**：一个现代的 C++14/17 框架，支持 RESTful API 和 WebSocket。Drogon 提供了异步和多线程的处理能力，是比较成熟的选择之一。

2. **CppCMS**：这是一个专门为高性能和高并发设计的 Web 框架。它支持传统的 Web 功能，如模板、会话管理等，但比起一般的 Web 框架更适合用于高速缓存和分布式环境。

3. **Crow**：是一个轻量级的 Web 框架，支持 RESTful API 和 WebSocket，适合小型项目。Crow 使用 C++14 标准，配置简单，适合入门级开发者使用。

4. **Pistache**：一个基于 HTTP 协议的小型框架，适合快速搭建 REST API。Pistache 提供了基础的路由和多线程支持，非常轻量。

5. **Boost.Beast**：Boost 库的一部分，专门处理 HTTP 和 WebSocket 通信。它没有完整的框架功能，但可以和其他库一起构建高性能的 Web 应用。

### C++ 的包管理器
C++ 近年有几个包管理器逐渐被采用，以下是比较常用的几个：

1. **Conan**：一个流行的 C++ 包管理器，支持跨平台依赖管理。Conan 可以很方便地用来管理 C++ 项目中的第三方库，并且支持与多种构建系统（如 CMake）集成。

2. **vcpkg**：由微软开发的开源包管理器，适用于 Windows、Linux 和 MacOS。vcpkg 很容易上手，尤其对于用 Visual Studio 开发的用户来说更为友好。它有大量的预构建库，直接支持多平台构建。

3. **Hunter**：一个基于 CMake 的包管理系统，适合需要细粒度控制依赖项的项目。Hunter 将包管理嵌入到 CMake 中，项目构建时会自动拉取和编译依赖库。

4. **Buckaroo**：专门为 C++ 项目设计的包管理器，可以与 Buck 构建系统集成，用于管理跨平台依赖。

C++ 的这些包管理器都在不断发展中，相比其他语言的包管理器稍显年轻，但也在逐步改进和扩展功能，能够方便地管理依赖库。