# 程序提交之后为什么会超时？O(n)的算法会超时，n 究竟是多大？

一些同学可能对计算机运行的速度还没有概念，就是感觉计算机运行速度应该会很快，那么在 leetcode 上做算法题目的时候为什么会超时呢？

计算机究竟 1s 可以执行多少次操作呢？ 接下来探讨一下这个问题。

# 超时是怎么回事

![程序超时](https://img-blog.csdnimg.cn/20200729112716117.png)

大家在 leetcode 上练习算法的时候应该都遇到过一种错误是“超时”。

也就是说程序运行的时间超过了规定的时间，一般 OJ（online judge）的超时时间就是 1s，也就是用例数据输入后最多要 1s 内得到结果，暂时还不清楚 leetcode 的判题规则，下文为了方便讲解，暂定超时时间就是 1s。

如果写出了一个 O(n)的算法 ，其实可以估算出来 n 是多大的时候算法的执行时间就会超过 1s 了。

如果 n 的规模已经足够让 O(n)的算法运行时间超过了 1s，就应该考虑 log(n)的解法了。

# 从硬件配置看计算机的性能

计算机的运算速度主要看 CPU 的配置，以 2015 年 MacPro 为例，CPU 配置：2.7 GHz Dual-Core Intel Core i5 。

也就是 2.7 GHz 奔腾双核，i5 处理器，GHz 是指什么呢，1Hz = 1/s，1Hz 是 CPU 的一次脉冲（可以理解为一次改变状态，也叫时钟周期），称之为为赫兹，那么 1GHz 等于多少赫兹呢

- 1GHz（兆赫）= 1000MHz（兆赫）
- 1MHz（兆赫）= 1 百万赫兹

所以 1GHz = 10 亿 Hz，表示 CPU 可以一秒脉冲 10 亿次（有 10 亿个时钟周期），这里不要简单理解一个时钟周期就是一次 CPU 运算。

例如 1 + 2 = 3，cpu 要执行四次才能完整这个操作，步骤一：把 1 放入寄存机，步骤二：把 2 放入寄存器，步骤三：做加法，步骤四：保存 3。

而且计算机的 cpu 也不会只运行我们自己写的程序上，同时 cpu 也要执行计算机的各种进程任务等等，我们的程序仅仅是其中的一个进程而已。

所以我们的程序在计算机上究竟 1s 真正能执行多少次操作呢？

# 做个测试实验

在写测试程序测 1s 内处理多大数量级数据的时候，有三点需要注意：

- CPU 执行每条指令所需的时间实际上并不相同，例如 CPU 执行加法和乘法操作的耗时实际上都是不一样的。
- 现在大多计算机系统的内存管理都有缓存技术，所以频繁访问相同地址的数据和访问不相邻元素所需的时间也是不同的。
- 计算机同时运行多个程序，每个程序里还有不同的进程线程在抢占资源。

尽管有很多因素影响，但是还是可以对自己程序的运行时间有一个大体的评估的。

引用算法 4 里面的一段话：

- 火箭科学家需要大致知道一枚试射火箭的着陆点是在大海里还是在城市中；
- 医学研究者需要知道一次药物测试是会杀死还是会治愈实验对象；

所以**任何开发计算机程序员的软件工程师都应该能够估计这个程序的运行时间是一秒钟还是一年**。

这个是最基本的，所以以上误差就不算事了。

以下以 C++代码为例：

测试硬件：2015 年 MacPro，CPU 配置：2.7 GHz Dual-Core Intel Core i5

实现三个函数，时间复杂度分别是 O(n) , O(n^2), O(nlogn)，使用加法运算来统一测试。

```CPP
// O(n)
void function1(long long n) {
    long long k = 0;
    for (long long i = 0; i < n; i++) {
        k++;
    }
}

```

```CPP
// O(n^2)
void function2(long long n) {
    long long k = 0;
    for (long long i = 0; i < n; i++) {
        for (long j = 0; j < n; j++) {
            k++;
        }
    }

}
```

```CPP
// O(nlogn)
void function3(long long n) {
    long long k = 0;
    for (long long i = 0; i < n; i++) {
        for (long long j = 1; j < n; j = j*2) { // 注意这里j=1
            k++;
        }
    }
}

```

来看一下这三个函数随着 n 的规模变化，耗时会产生多大的变化，先测 function1 ，就把 function2 和 function3 注释掉

```CPP
int main() {
    long long n; // 数据规模
    while (1) {
        cout << "输入n：";
        cin >> n;
        milliseconds start_time = duration_cast<milliseconds >(
            system_clock::now().time_since_epoch()
        );
        function1(n);
//        function2(n);
//        function3(n);
        milliseconds end_time = duration_cast<milliseconds >(
            system_clock::now().time_since_epoch()
        );
        cout << "耗时:" << milliseconds(end_time).count() - milliseconds(start_time).count()
            <<" ms"<< endl;
    }
}
```

来看一下运行的效果，如下图：

![程序超时2](https://img-blog.csdnimg.cn/20200729200018460.png)

O(n)的算法，1s 内大概计算机可以运行 5 _ (10^8)次计算，可以推测一下 O(n^2) 的算法应该 1s 可以处理的数量级的规模是 5 _ (10^8)开根号，实验数据如下。

![程序超时3](https://img-blog.csdnimg.cn/2020072919590970.png)

O(n^2)的算法，1s 内大概计算机可以运行 22500 次计算，验证了刚刚的推测。

在推测一下 O(nlogn)的话， 1s 可以处理的数据规模是什么呢？

理论上应该是比 O(n)少一个数量级，因为 logn 的复杂度 其实是很快，看一下实验数据。

![程序超时4](https://img-blog.csdnimg.cn/20200729195729407.png)

O(nlogn)的算法，1s 内大概计算机可以运行 2 \* (10^7)次计算，符合预期。

这是在我个人 PC 上测出来的数据，不能说是十分精确，但数量级是差不多的，大家也可以在自己的计算机上测一下。

**整体测试数据整理如下：**

![程序超时1](https://img-blog.csdnimg.cn/20201208231559175.png)

至于 O(logn) 和 O(n^3) 等等这些时间复杂度在 1s 内可以处理的多大的数据规模，大家可以自己写一写代码去测一下了。

# 完整测试代码

```CPP
#include <iostream>
#include <chrono>
#include <thread>
using namespace std;
using namespace chrono;
// O(n)
void function1(long long n) {
    long long k = 0;
    for (long long i = 0; i < n; i++) {
        k++;
    }
}

// O(n^2)
void function2(long long n) {
    long long k = 0;
    for (long long i = 0; i < n; i++) {
        for (long j = 0; j < n; j++) {
            k++;
        }
    }

}
// O(nlogn)
void function3(long long n) {
    long long k = 0;
    for (long long i = 0; i < n; i++) {
        for (long long j = 1; j < n; j = j*2) { // 注意这里j=1
            k++;
        }
    }
}
int main() {
    long long n; // 数据规模
    while (1) {
        cout << "输入n：";
        cin >> n;
        milliseconds start_time = duration_cast<milliseconds >(
            system_clock::now().time_since_epoch()
        );
        function1(n);
//        function2(n);
//        function3(n);
        milliseconds end_time = duration_cast<milliseconds >(
            system_clock::now().time_since_epoch()
        );
        cout << "耗时:" << milliseconds(end_time).count() - milliseconds(start_time).count()
            <<" ms"<< endl;
    }
}


```

# 总结

本文详细分析了在 leetcode 上做题程序为什么会有超时，以及从硬件配置上大体知道 CPU 的执行速度，然后亲自做一个实验来看看 O(n)的算法，跑一秒钟，这个 n 究竟是做大，最后给出不同时间复杂度，一秒内可以运算出来的 n 的大小。

建议录友们也都自己做一做实验，测一测，看看是不是和我的测出来的结果差不多。

这样，大家应该对程序超时时候的数据规模有一个整体的认识了。

## 其他语言版本

Java：

Python：

Go：

---

<div align="center"><img src=https://code-thinking.cdn.bcebos.com/pics/01二维码一.jpg width=500> </img></div>
