---
layout: profile
title: "简历"
eyebrow: "CURRICULUM VITAE"
permalink: /cv/
subtitle: "教育、项目与工程实践"
---

<p class="cv-download"><a class="btn btn--primary" href="{{ '/files/Yunze-Jiang-CV-public.pdf' | relative_url }}" download>下载公开版简历 <span aria-hidden="true">↓</span></a></p>

## 教育背景

**哈尔滨工业大学 · 本科 · 机器人工程专业**

## 代表项目

### CUADC 多旋翼无人机侦察与救援

2025.11 — 2026.10 · 哈尔滨工业大学航模协会四旋翼项目负责人

负责 C++ / ROS 2 / MAVROS 机载任务系统，串联自动起降、目标搜索、视觉对准、双载荷投放与航点侦察，统筹软件、航电及外场联调。围绕 GPS 场地标定、坐标变换、起飞原点锁定与投放口外参补偿优化任务链路；在 V16 中联调曝光时间戳与飞控位姿插值，搭建 Gazebo Harmonic / ArduPilot SITL 并开展分级验证。

全国赛一、二机组成绩 **1338 / 1341 分**。  
[项目代码与备赛日志](https://github.com/Accelerate11/2026CUADC)

### MID360 感知桥接与可靠建图

开源实践 · AeroHalo360 / MID360-Reliable-Mapper

**AeroHalo360：**通过坐标变换、径向分箱与分位数取距，将点云转换为 MAVLink 障碍距离；加入时间戳、帧序列、超时降级和恢复判定，完成台架与实飞感知链路验证。

**Reliable Mapper：**在 FAST-LIO2 输出后增加速度、位移突变与点云重叠度门控；维护滑动窗口体素地图，结合射线自由空间及占据证据生成二维栅格。

[AeroHalo360](https://github.com/Accelerate11/AeroHalo360) · [Reliable Mapper](https://github.com/Accelerate11/MID360-Reliable-Mapper)

### 红松精灵 · 松果采摘特种无人机

2025.10 — 2026.09 · 国家级大学生创新创业训练计划项目负责人

统筹飞行平台、机械臂与视觉模块，负责方案、上位机程序和整机联调；围绕 Orin Nano、CUAV X7、MID360 与 ROS 2 完成平台集成和初号机试飞。参与松果识别与模型微调实验，相关视觉系统发明专利申请已受理，列第二发明人。

## 工程与团队实践

在限时载运飞行项目中，独立完成主翼、垂尾与整流罩 **112 个零件**的 CATIA 建模并参与制作。带队航协多旋翼组一年，整理近 **2 万字**备赛日志、近 **20 篇**技术文档，与多所高校参赛团队交流。完成竞技机器人队视觉导航组全部培训与结营项目，现参与 RoboMaster 空中机器人组。

## 技术能力

- **软件与仿真：**C++、Python、Linux、ROS 2；MAVROS / MAVLink；Gazebo / ArduPilot SITL。
- **感知与平台：**D435i、MID360、T265、RTK；相机标定、坐标变换、机载部署；Mission Planner 日志分析。
- **结构与集成：**CATIA 结构设计、硬件选型、航电连接与整机联调。

持续学习 ROS 2、NVIDIA Jetson 与 PX4 / APM 开发，欢迎交流机器人、无人机及自主系统项目。

[查看竞赛荣誉与专利申请]({{ '/honors/' | relative_url }}) · [通过邮件联系](mailto:3062811267@qq.com)
