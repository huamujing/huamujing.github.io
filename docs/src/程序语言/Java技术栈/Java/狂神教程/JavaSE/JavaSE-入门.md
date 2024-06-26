#### Dos命令

```shell
#查看目录下的所有文件
dir
#进入文件
cd ..
#清理屏幕
cls
#查看电脑
ip ipconfig
#测试连接 
ping www.baidu.com
```



#### 安装开发环境

卸载jdk

```
1. 通过系统变量 %JAVA_HOME% 可以找到安装位置，删掉
2. 将系统变量中的 %JAVA_HOME% 删除
3. 将系统变量 Path 中的 %JAVA_HOME% 相关的删除
4. 验证： java -version
```



安装jdk

企业中用的比较多的是 JDK8，这样比较稳定

1. 前往[官网](https://www.oracle.com/java/technologies/downloads/#java8-windows)（未验证是不是这个）下载，记录安装目录，注意路径不能有中文，否则安装会失败；Oracle [共享账号](http://www.codebaoku.com/jdk/jdk-oracle-account.html)

2. 配置系统变量 

   | 变量名    | 变量值          |
   | --------- | --------------- |
   | JAVA_HOME | D:\xx\yy\jdk1.8 |

3. 添加 Path 路径

   | 操作 | 百分号相当于引用路径 |
   | ---- | -------------------- |
   | 添加 | %JAVA_HOME%\bin      |
   | 添加 | %JAVA_HOME%\jre\bin  |

   :octopus: jdk1.8 的 jre 路径是这样，其它版本就不确定了；

   :question: 这样以后，似乎就能使用 java 了。



#### 安装IDE-强于编辑器

进入[官网](https://www.jetbrains.com/idea/download/#section=windows)下载，旗舰版功能更多，但是只使用 java 的话，免费的社区版就够了

这里选择了64位驱动器

![image-20221115224409240](.\img\安装IDEA.png)



#### 创建项目

![image-20221116003900317](.\img\创建项目.png)

创建文件

![image-20221116004712188](.\img\hello1.png)

基于此

```java
public class Hey {
}
```

| 快捷键                                   | 说明                    |
| ---------------------------------------- | ----------------------- |
| psvm                                     | 入口                    |
| sout                                     | 打印                    |
| Ctrl + D                                 | 复制当行到下一行        |
| / + * + * + 回车                         | 自动生成文档注释        |
| 10.for + 回车                            | 生成for循环             |
| 数组变量.for + 回车                      | 生成增强for循环         |
| Alt + Insert 选择 Constructor            | 生成构造函数            |
| Alt + Insert 选择 Getter/Setter          | 生成getter/setter(封装) |
| Alt + Insert 选择 Override Methods       | 生成方法重写            |
| 选择代码 + Ctrl + Alt + T 选择 try/catch | 生成 try/catch          |
| Alt + Enter 选择方案                     | 智能修复代码问题        |
| Alt + Enter                              | 生成变量接收值          |
| Ctrl + O                                 | 生成方法重写            |
| Ctrl + Shrift + -/+                      | 折叠/展开所有方法       |
| Shift + Shift                            | 全局搜索                |
| Shift + Shift 点击 Find in Files         | 全局搜索关键词          |

通过左边的绿点可以直接执行程序

![image-20221116004926581](.\img\hello2.png)



#### 创建空项目

![image-20221116164823865](.\img\创建空项目1.png)

![image-20221116164933263](.\img\创建空项目2.png)

创建新模块，模块下会有 src

![image-20221116165328614](.\img\创建空项目3.png)

![image-20221116165446803](.\img\创建空项目4.png)

设置结构，这样以后 java 才能顺利运行

![image-20221116165907710](.\img\创建空项目5.png)



#### 配置注释颜色

![image-20221116171405840](.\img\配置注释颜色.png)



#### 创建包

感觉有点像文件夹，可以容纳多个 java 文件

![image-20221117223602166](.\img\创建包1.png)

包中的 java 文件，在首行会有对应标识，去掉会报错

![image-20221117223645972](.\img\创建包2.png)



#### 包规范

![image-20221118000543180](.\img\包规范2.png)

:hammer_and_wrench: 一般将公司域名倒置作为包名

![image-20221118001123175](.\img\包规范3.png)



#### 运行包下的类

<span style="backGround: #efe0b9">java\JavaSE\base_grammar\src\com\baidu\www</span>

> java\项目名\模块名\src\包路径\

```elm
javac Demo.java --encoding UTF-8
```

:star2: 文件含中文，故加参数

<span style="backGround: #efe0b9">java\JavaSE\base_grammar\src</span>

```elm
java com.baidu.www.Demo
```









#### 注释

```java
// 单行注释

/* 多行注释 */

/**
 * 文档注释
 */
```

:ghost: 文档注释可以通过 `/**` + 回车快速生成。

| 文档注释参数 | 参数信息                  |
| ------------ | ------------------------- |
| @author      | 作者名                    |
| @version     | 版本号                    |
| @since       | 指明需要最早使用的jsk版本 |
| @param       | 参数名                    |
| @return      | 返回值情况                |
| @throws      | 异常抛出情况              |

`文档注释`

```java
/**
 * @author Master
 * @version 1.0
 * @since 1.8
 */
public class Demo {
    /**
     *
     * @param demo
     * @return
     * @throws Exception
     */
    public String callMan (String demo) throws Exception{
        return demo;
    }
}
```

:ghost: 可以为类和方法添加注释，快捷键生成时，自动补注解。



#### 生成JavaDoc文档

> 生成的 <span style="color: green">index.html</span> 文件有相关的信息。

命令行方式

<span style="backGround: #efe0b9">命令行到当前文件夹</span>

```elm
javadoc -encoding UTF-8 -charset UTF-8 Demo.java
```

:whale: 加上的参数可以避免中文乱码



IDEA方式

https://www.cnblogs.com/hyxdz/p/15958937.html





#### 强类型语言

要求变量的使用要严格符合规定(类型)，所有变量都必须先定义后才能使用，区别于 JS。



#### 字节

| 名称          | 说明                                                  |
| ------------- | ----------------------------------------------------- |
| 位、bit、b    | 计算机内部数据储存的最小单位，10101010 是八位二进制数 |
| 字节、byte、B | 计算机内部数据处理的基本单位，1byte = 8bit            |
| 字符          | 计算机中使用的字母、数字、字和字符                    |

```
1B = 8b
1024B = 1KB
1024KB = 1M
1024M = 1G
```



#### 进制

```java
// 结果依次是 2 8 10 16
int i0 = 0b10; // 二进制前缀0b
int i1 = 010; // 八进制前缀0
int i2 = 10;
int i3 = 0x10; // 十六进制前缀0x
```



#### 数据类型

> 数据类型分为基本类型和引用类型

![image-20221116184951067](.\img\数据类型.png)

```javascript
//八大基本数据类型

//整数
int num1 = 10; // 最常用
byte num2 = 20;
short num3 = 30;
long num4 = 30L; // 该类型要在数字后加L / l

//小数(浮点数)
float num5 = 50.1F; // 该类型要在数字后加F
double num6 = 3.14159;

//字符
char name = '嗨'; // 不能赋值两个字

//布尔值
boolean flag = true;
```



#### debug

通过debug，能看到变量的值。

![image-20221116233457019](.\img\debug.png)



#### 浮点不适合金额计算

> 最好避免使用浮点数进行比较：其位数有限，会存在舍入<span style="color: #ff0000">误差</span>。
>
> 可以借助数学工具类 BigDecimal 来进行。

```java
float f = 0.1f;
double d = 1.0/10;
double dd = 0.1;

System.out.println(f==d);  // false
System.out.println(d==dd); // true
System.out.println(f==dd); // false

float d1 = 185651221f;
float d2 = d1 + 1;
System.out.println(d1==d2); // true
```



#### 较大数字计算溢出

```java
int money = 10_0000_0000;
int years = 20;
long total = money*years;
long total2 = money*((long)years);

System.out.println(total);  // -1474836480 计算时已经发生了移除
System.out.println(total2); // 20000000000 计算时让整体类型提示
```

:whale: JDK7 以上版本，数字之间可以用下划线分割；



#### 整数相除避免舍小数

```java
int a = 10;
int b = 20;

System.out.println(a/b);  		 // 0
System.out.println(a/(double)b); // 0.5
```



#### 字符串连接符

```java
int a = 1;
int b = 2;

System.out.println(""+a+b);  		 // 12
System.out.println(a+b+"");  		 // 3

System.out.println('1' + 2);         // 51
System.out.println("1" + 2);		 // 12
```



#### 字符与编码表

```java
char c1 = 'a';
char c2 = '\u0061';
System.out.println((int)c1); // 转化为int类型后输出，结果为 97
System.out.println(c2);		 // a
```

所有的字符本质还是数字，是通过 Unicode 编码表（u0000 - uffff）映射而来的。



#### 打印转义字符

```java
System.out.println("ab\tc"); // 制表符，相当于Tab
System.out.println("ab\nc"); // 换行
```



#### 变量_实例

```java
public class Hey {
    // 类变量 - static
    static int demo1 = 22;
    // 实例变量，有默认值
    int age;
    
    public static void main(String[] args) {
        // 局部变量，必须初始化才能使用
        int demo2 = 6;
        System.out.println(demo2);

        // 类变量
        System.out.println(demo1);

        // 实例变量
        Hey hey1 = new Hey();
        System.out.println(hey1.age);
    }
}
```





### 风格

一行可以声明并初始化多个变量，但可读性差，不推荐；

**与 JavaScript 比**

使用 == 判断相等性；等价于 javascript 的 ===；

变量声明类似于 let，通过添加关键字 final 类似于 const；

自增自减先后

字符串连接符

三元运算符

变量作用域

if else、switch case、while、do while、

数组下标、数组length

方法参数传入原始值、引用值的处理



**帮助文档**

阿里巴巴开发手册

jdk帮助文档 https://www.oracle.com/cn/java/technologies/java-se-api-doc.html

javaBean - 实体类
