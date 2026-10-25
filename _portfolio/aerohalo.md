---
layout: profile
author_profile: true
title: "AeroHalo360"
permalink: /projects/aerohalo/
eyebrow: "PROJECT / 02"
subtitle: "从 MID-360 点云到 ArduPilot 障碍距离"
---

<div class="project-facts">
  <span><strong>方向</strong> 开源感知桥接工程</span>
  <span><strong>状态</strong> Alpha · 台架与初步实飞验证</span>
  <span><strong>技术</strong> ROS 2 · MID-360 · MAVLink</span>
</div>

{% assign project = site.data.projects | where: 'id', 'aerohalo' | first %}
{% include repository-card.html project=project %}

## 项目背景

飞控使用的障碍距离与激光雷达输出的三维点云具有不同的数据组织方式。AeroHalo360 面向这一接口问题，将 MID-360 点云转换为 ArduPilot 可接收的水平扇区距离，并通过 Mission Planner 检查感知链路。

## 我的工作

- **点云到距离：**结合坐标变换、径向分箱与分位数取距，将点云压缩为 72 个、每个 5° 的水平扇区，通过 MAVLink 2 `OBSTACLE_DISTANCE` 发送给飞控。
- **数据有效性：**加入源时间戳、帧序列、超时降级与恢复判定，使链路能够区分正常观测与数据中断，并支持诊断和复盘。
- **硬件与飞控联调：**围绕 ROS 2、MID-360、机载计算机及 CUAV / ArduPilot，完成台架链路验证和初步实飞感知验证。

## 当前状态

项目处于 **Alpha 阶段**，已验证点云到飞控的感知链路。模块提供水平障碍距离，最终控制行为由飞控模式与参数决定；安装遮挡、距离精度、端到端时延及不同工况下的稳定性仍需进一步量化。

[查看代码与部署文档](https://github.com/Accelerate11/AeroHalo360)

[← 返回全部项目]({{ '/projects/' | relative_url }})
