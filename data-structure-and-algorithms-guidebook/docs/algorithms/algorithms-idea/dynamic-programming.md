---
nav:
  title: 算法
  order: 2
group:
  title: 算法思想
  order: 5
title: 动态规划
order: 4
---

# 动态规划

懂

一个模型三个特性：

模型 - 多阶段决策最优解模型

我们一般是用动态规划来解决最优问题。而解决问题的过程，需要经历多个决策阶段。每个决策阶段都对应着一组状态。然后我们寻找一组决策序列，经过这组决策序列，能够产生最终期望求解的最优值。

## 模型特性

以下三个动态规划的性质可用于判断动态规划方法是否适用于给定的问题。

- 最优子结构：问题的最优解包含其子问题的最优解
- 无后效性
- 重复子问题：递归求解过程中 包含少量不同子问题的多次重复计算

### 最优子结构

最优子结构指的是，问题的最优解包含子问题的最优解。反过来说就是，我们可以通过子问题的最优解，推导出问题的最优解。如果我们把最优子结构，对应到我们前面定义的动态规划问题模型上，那我们也可以理解为，后面阶段的状态可以通过前面阶段的状态推导出来。

### 无后效性

无后效性有两层含义，第一层含义是，在推导后面阶段的状态的时候，我们只关心前面阶段的状态值，不关心这个状态是怎么一步一步推导出来的。第二层含义是，某阶段状态一旦确定，就不受之后阶段的决策影响。无后效性是一个非常“宽松”的要求。只要满足前面提到的动态规划问题模型，其实基本上都会满足无后效性。

### 重复子问题

这个概念比较好理解。前面一节，我已经多次提过。如果用一句话概括一下，那就是，不同的决策序列，到达某个相同的阶段时，可能会产生重复的状态。

## 解题思路总结

### 状态转移表法

### 状态转移方程法

```js
dp[n] = dn[n - 1] + dp[n - 2];
```

具备三要素，确认边界条件，初始化状态，开始切菜：

- `dp[0] = 1`
- `dp[1] = 1`

```js
const climbStairs = function(n) {
  const dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
```

优化

```js
const climbStairs = function(n) {
  let a1 = 1;
  let a2 = 1;

  for (let i = 2; i <= n; i++) {
    [a1, a2] = [a2, a1 + a2];
  }

  return a2;
};
```

## 经典问题

### 斐波那契数列

### 最长公共子串

### 0-1 背包问题

对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少呢？

```js
// weight 物品重量
// n 物品个数
// w 背包可承载重量
const knapsack = function(weight, n, w) {};
```

### 杨辉三角

---

**参考资料：**
