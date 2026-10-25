---
layout: profile
author_profile: true
title: "IMPACT"
permalink: /projects/impact/
eyebrow: "PROJECT / 04"
subtitle: "GNSS 拒止自主导航：多源融合、完好性裕度规划与主动控制"
---

<div class="project-facts">
  <span><strong>方向</strong> GNSS 拒止环境下的无人机自主导航研究</span>
  <span><strong>技术</strong> C++ · Python · ROS 2 · FAST-LIVO2</span>
  <span><strong>验证</strong> 仿真回放、独立数值重建与分模块检查</span>
</div>

{% assign project = site.data.projects | where: 'id', 'impact' | first %}
{% include repository-card.html project=project %}

## 项目背景

无人机在缺少 GNSS 的环境中，需要依靠机载传感器持续估计位姿、理解周围空间，并在观测不确定时作出规划与控制决策。IMPACT 围绕这一问题，开展多源融合、完好性裕度规划与主动控制研究。

## 研究内容

- **多源融合估计：**基于激光–惯性–视觉定位，研究相机位姿克隆、局部平面不确定性与原始两视图像素约束的联合状态表示。
- **规划与主动感知：**围绕导航完好性裕度，研究感知不确定性、安全规划、动态障碍响应与故障恢复之间的协同。
- **仿真与可复现验证：**整理仿真输入、回放对照、独立数值重建与运行入口，支持按模块检查算法行为。

## 当前进展

仓库保留状态估计与规划控制两条研究线，以及相应的回放和数值验证记录。目前两条研究线分别验证，尚未完成联合闭环验证。

[查看研究代码、验证记录与运行说明](https://github.com/Accelerate11/IMPACT)

[← 返回全部项目]({{ '/projects/' | relative_url }})
