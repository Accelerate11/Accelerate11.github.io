---
layout: profile
author_profile: true
title: "2026CUADC · 多旋翼无人机侦察与救援"
permalink: /projects/cuadc/
eyebrow: "PROJECT / 01"
subtitle: "机载任务系统、视觉投放与外场验证"
---

<div class="project-facts">
  <span><strong>时间</strong> 2025.11 – 2026.10</span>
  <span><strong>角色</strong> 哈工大航模协会四旋翼项目负责人</span>
  <span><strong>技术</strong> C++ · ROS 2 · MAVROS · ArduPilot</span>
</div>

{% assign project = site.data.projects | where: 'id', 'cuadc' | first %}
{% include repository-card.html project=project %}

## 项目背景

围绕多旋翼无人机侦察与救援任务，搭建从自动起降、目标搜索、视觉对准到双载荷投放、航点侦察的机载任务系统。我负责软件迭代，并统筹航电与外场联调，将仿真检查、地面验证和飞行复盘贯穿备赛过程。

## 我的工作

- **任务系统与联调：**迭代 C++ / ROS 2 / MAVROS 状态机，整理任务入口、标定、视觉、舵机测试与日志工具，支撑完整任务执行和分阶段排查。
- **坐标与投放修正：**调试两点 GPS 场地标定、ENU / 机体系变换和起飞原点锁定，结合双投放口外参补偿与下降纠偏，处理航线与实际释放点的偏差。
- **时间对齐与验证：**在 V16 中联调曝光时间戳与飞控位姿插值，搭建 Gazebo Harmonic / ArduPilot SITL，并结合 RTK、相机、飞控及室内、地面、外场日志逐级验证。

## 阶段成果

团队获得 **2026 CUADC 北部赛区冠军**；全国赛两机组分别取得 **1338 分、1341 分，均获一等奖**，团体第四。公开仓库保留代码、备赛日志和技术文档，便于后续队员理解、调试和复现。

[查看项目代码与备赛日志](https://github.com/Accelerate11/2026CUADC)

[← 返回全部项目]({{ '/projects/' | relative_url }})
