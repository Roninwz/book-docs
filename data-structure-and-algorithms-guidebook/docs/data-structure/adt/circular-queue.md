---
nav:
  title: 数据结构
  order: 1
group:
  title: 抽象类型
  order: 2
title: 循环队列
order: 3
---

# 循环队列

循环队列是头尾相接的顺序存储结构的队列。

这种数据结构能够解决顺序存储结构队列的 `假溢出` 的现象。



## 循环队列与链队列的比较

从时间上看，其实它们的基本操作都是常数时间，即都为 `O(1)`。

- 循环队列是事先申请好空间，使用期间不释放，且必须有一个固定长度，所以就有了存储个数和空间浪费的问题
- 链队列每次申请和释放结点也会存在时间开销，如果入队出队频繁，在则两者还是有细微差异
