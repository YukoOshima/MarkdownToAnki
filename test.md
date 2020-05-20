---
title: 2020-5-14
tags: Anki
notebook: Anki
---

### Q

@lc app=leetcode.cn id=53 lang=java
[53] 最大子序和

https://leetcode-cn.com/problems/maximum-subarray/description/

algorithms
Easy (51.06%)
Likes: 1974
Dislikes: 0
Total Accepted: 237.2K
Total Submissions: 464.4K
Testcase Example: '[-2,1,-3,4,-1,2,1,-5,4]'

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释:  连续子数组  [4,-1,2,1] 的和最大，为  6。

进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

### A

```java
// @lc code=start
class Solution {
    public int maxSubArray(int[] nums) {
        int max = Integer.MIN_VALUE, curSum = 0;
        for(int i = 0; i < nums.length; i++) {
            curSum = curSum <= 0 ? nums[i] : curSum + nums[i];
            max = Math.max(curSum, max);
        }
        return max;
    }
}
// @lc code=end
```

### Q

@lc app=leetcode.cn id=104 lang=java

[104] 二叉树的最大深度

https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/

algorithms
Easy (73.13%)
Likes: 528
Dislikes: 0
Total Accepted: 172.6K
Total Submissions: 235.9K
Testcase Example: '[3,9,20,null,null,15,7]'

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明:  叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

```
⁠   3
⁠  / \
⁠ 9  20
⁠   /  \
⁠  15   7
```

返回它的最大深度  3 。

### A

```java
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// Time: O(n), Space: O(n)
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
// Time: O(n), Space: O(n)
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int depth = 0;

        while (!q.isEmpty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                TreeNode s = q.poll();
                if (s.left != null) q.add(s.left);
                if (s.right != null) q.add(s.right);
            }
            ++depth;
        }
        return depth;
    }
}
```

### Q

@lc app=leetcode.cn id=111 lang=java

[111] 二叉树的最小深度

https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/

algorithms
Easy (42.32%)
Likes: 255
Dislikes: 0
Total Accepted: 74K
Total Submissions: 174.8K
Testcase Example: '[3,9,20,null,null,15,7]'

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明:  叶子节点是指没有子节点的节点。

示例:

给定二叉树  [3,9,20,null,null,15,7],

```
⁠   3
⁠  / \
⁠ 9  20
⁠   /  \
⁠  15   7
```

返回它的最小深度  2.

### A

```java
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int depth = 1;

        while (!q.isEmpty()) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                TreeNode s = q.poll(); if (s.left == null && s.right == null) return depth;
                               if (s.left != null) q.add(s.left);
                if (s.right != null) q.add(s.right);
            }
            ++depth;
        }
        return -1;
    }
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        if (root.left == null) return minDepth(root.right) + 1;
        if (root.right == null) return minDepth(root.left) + 1;
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
}
//  //@lc code=end
```
