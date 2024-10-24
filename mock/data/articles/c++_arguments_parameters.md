在C++中，**arguments**（实参）和 **parameters**（形参）是函数调用中的两个不同概念。

1. **Parameters（形参）**：
   - 形参是函数定义时所声明的变量。
   - 它们用来接收函数调用时传递给函数的值。
   - 形参仅在函数内部有效。
   - 形参是函数的接口，用于定义函数预期接收的值。

   例如：
   ```cpp
   void add(int a, int b) {  // a 和 b 是参数（形参）
       std::cout << a + b << std::endl;
   }
   ```

2. **Arguments（实参）**：
   - 实参是函数调用时实际传递给函数的值。
   - 这些值被赋给形参，并在函数内部使用。
   - 实参可以是常量、变量或表达式。

   例如：
   ```cpp
   int x = 5;
   int y = 10;
   add(x, y);  // x 和 y 是实参
   ```

在上述例子中，`add` 函数定义了两个参数 `a` 和 `b`，而在调用 `add(x, y)` 时，`x` 和 `y` 是实参，它们的值会被传递给 `a` 和 `b` 进行计算。

简而言之：
- **形参** 是函数定义时的变量。
- **实参** 是函数调用时传递的实际值。