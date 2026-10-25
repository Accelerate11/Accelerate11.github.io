---
layout: profile
author_profile: true
title: "MID360 Reliable Mapper"
permalink: /projects/reliable-mapper/
eyebrow: "PROJECT / 03"
subtitle: "基于 FAST-LIO2 的点云质量门控与可靠建图"
---

<div class="project-facts">
  <span><strong>方向</strong> 开源建图工程</span>
  <span><strong>输出</strong> 稳定点云地图 · 二维占据栅格</span>
  <span><strong>技术</strong> ROS 2 · FAST-LIO2 · Livox MID-360</span>
</div>

## 项目背景

真实设备中的位姿突变、短时漂移与点云错配，可能把错误观测持续写入地图。该项目以 FAST-LIO2 提供的 LiDAR–IMU 里程计为前端，在地图更新前增加一致性检查，围绕导航所需的地图输入开展工程改进。

## 我的工作

- **可靠帧门控：**在 FAST-LIO2 输出后，检查速度、相邻帧位移突变、高度变化与点云重叠度，将通过检查的观测送入后续地图维护流程。
- **稳定地图维护：**结合距离和高度过滤、体素降采样及可靠帧滑动窗口，维护适合实时使用的点云地图，控制原始点云持续累积带来的开销。
- **占据栅格生成：**将可靠点云投影至二维平面，利用射线自由空间与占据证据累积生成栅格，并通过衰减逐步减弱长期未更新的观测影响。

<figure class="project-figure">
  <img src="{{ '/images/projects/mapper-1.png' | relative_url }}" alt="MID360 Reliable Mapper 的三维点云地图和二维占据栅格双窗口结果" loading="lazy">
  <figcaption>同一建图过程中的三维点云与二维占据栅格，来自项目仓库的实机可视化记录。</figcaption>
</figure>

## 工程产出

仓库提供 MID-360 实物接入、运行时外参配置、RViz 双视图与边缘端部署说明。项目重点是稳定、可检查的建图前端，便于后续接入导航与避障；FAST-LIO2 负责里程计估计，本项目的改进集中于其后的质量门控、地图维护和栅格生成。

[查看代码与建图文档](https://github.com/Accelerate11/MID360-Reliable-Mapper)

[← 返回全部项目]({{ '/projects/' | relative_url }})
