---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am Zhiyuan Fang, a Ph.D. student at the School of Software Engineering, Sun Yat-sen University, where I am advised by Prof. [Wuhui Chen](https://sse.sysu.edu.cn/teacher/159). My early research focused on smart contract security, and current passion lies in optimizing LLM Systems. My recent work focuses on efficient MoE inference with offloading. And I am exploring the Kernel Fusion, AI Compiler, and Multimodal Model Serving.

Always open to discussions. Feel free to reach out to me at [fangzhy27@mail2.sysu.edu.cn](mailto:fangzhy27@mail2.sysu.edu.cn).

# Experiences
- *2025.06 - Now*, Research Intern, Huawei 2012 Labs.
- *2022.09 - Now*, PhD Student, Software Engineering, Sun Yat-sen University.
- *2018.09 - 2022.07*, Bachelor, Software Engineering, Central South University.


<!-- # Publications

## Accepted
- <span style="background-color: #006600; color: white; padding: 1px 4px; border-radius: 3px;">WWW 2026</span> [Fate: Fast Edge Inference of Mixture-of-Experts Models via Cross-Layer Gate](https://arxiv.org/abs/2502.12224), **Zhiyuan Fang**, Xingfan Yu, Yuegui Huang, Zicong Hong*, Yufeng Lyu, Wuhui Chen, Yue Yu, Fan Yu.
- <span style="background-color: #006600; color: white; padding: 1px 4px; border-radius: 3px;">ASPLOS 2025</span> [Klotski: Efficient Mixture-of-Expert Inference via Expert-Aware Multi-Batch Pipeline](https://dl.acm.org/doi/10.1145/3676641.3716261), **Zhiyuan Fang**, Yuegui Huang, Zicong Hong, Yufeng Lyu, Wuhui Chen, Yue Yu*, Fan Yu, and Zibin Zheng.
- <span style="background-color: #006600; color: white; padding: 1px 4px; border-radius: 3px;">TSE 2025</span> [SmartOracle: Generating Smart Contract Oracle via Fine-Grained Invariant Detection](https://dl.acm.org/doi/10.1109/TSE.2025.3534567), Jianzhong Su, Jiachi Chen, **Zhiyuan Fang**, Xingwei Lin, Yutian Tang, and Zibin Zheng*.
- <span style="background-color: #006600; color: white; padding: 1px 4px; border-radius: 3px;">ASE 2023</span> [Defiwarder: Protecting defi apps from token leaking vulnerabilities](https://dl.acm.org/doi/10.1109/ASE56229.2023.00110), Jianzhong Su, Xingwei Lin, **Zhiyuan Fang**, Zhirong Zhu, Jiachi Chen*, Zibin Zheng, Wei Lv, and Jiashui Wang.

## Preprint
- <span style="background-color: #D3D3D3; color: white; padding: 1px 4px; border-radius: 3px;">Under Review</span> GMM: Generalized OS Memory Management for XPUs, Weixi Zhu, Bin Wang, **Zhiyuan Fang**, Jiahua Wang, Yao Guo, Rui Fang, Mingliang Gong, Jianfeng Tan, Yifan Huang, Ansheng You, Zhe Qiu, Minghui Yu, Tianyuan Bi, Jun Chen, Yuhang Chen, Liming Huang, Chao Liu, Wupeng Ma, Cunshu Ni, Tianchen Xiong, Qing Xiu, Huijie Xu, Junming Xu, Yanchao Yang, Gingfung Yeung, Adam Barker, Xinwei Hu.
- <span style="background-color: #D3D3D3; color: white; padding: 1px 4px; border-radius: 3px;">Under Review</span> TransformKV: Optimizing Multi-Turn Conversational Services in LLMs via KV cache Transformation, Jiahang Zhou, **Zhiyuan Fang**, Yusheng Qin, Wuhui Chen, Zhang Tao, Chuanfu Zhang, Zibin Zheng.
- <span style="background-color: #D3D3D3; color: white; padding: 1px 4px; border-radius: 3px;">Under Review</span> DyMoE: Dynamic Expert Orchestration with Mixed-Precision Quantization for Efficient MoE Inference on Edge, Yuegui Huang, **Zhiyuan Fang***, Weiqi Luo, Wuhui Chen, Ruoyu Wu, Zibin Zheng. -->

# Publications
## Accepted
<table style="width: 100%; border-collapse: collapse; border: none;">
  <tr style="border: none;">
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">WWW</span> 
    </td>
    <td style="border: none; padding-bottom: 20px;"> 
      <div style="font-weight: bold; font-size: 1.1em; color: #333;">Fate: Fast Edge Inference of Mixture-of-Experts Models via Cross-Layer Gate</div> 
      <div style="margin: 4px 0;"><ins><strong>Zhiyuan Fang</strong></ins>, Xingfan Yu, Yuegui Huang, Zicong Hong*, Yufeng Lyu, Wuhui Chen, Yue Yu, Fan Yu.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">Proceedings of the The Web Conference (WWW), 2026</div> 
      <div style="margin-top: 8px;"> 
        <a href="https://arxiv.org/abs/2502.12224" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">PDF</a> 
        <a href="https://github.com/FFFzy/Fate_open" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">Code</a> 
      </div> 
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">ASPLOS</span> 
    </td> 
    <td style="border: none; padding-bottom: 20px;"> 
      <div style="font-weight: bold; font-size: 1.1em; color: #333;">Klotski: Efficient Mixture-of-Expert Inference via Expert-Aware Multi-Batch Pipeline</div> 
      <div style="margin: 4px 0;"><ins><strong>Zhiyuan Fang</strong></ins>, Yuegui Huang, Zicong Hong, Yufeng Lyu, Wuhui Chen, Yue Yu*, Fan Yu, and Zibin Zheng.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">Proceedings of the 30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS), 2025</div> 
      <div style="margin-top: 8px;"> 
        <a href="https://dl.acm.org/doi/10.1145/3676641.3716261" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">PDF</a> 
        <a href="https://openi.pcl.ac.cn/fangzhy/Klotski" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">Code</a> 
      </div> 
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">TSE</span> 
    </td> 
    <td style="border: none; padding-bottom: 20px;"> 
      <div style="font-weight: bold; font-size: 1.1em; color: #333;">SmartOracle: Generating Smart Contract Oracle via Fine-Grained Invariant Detection</div> 
      <div style="margin: 4px 0;">Jianzhong Su, Jiachi Chen, <ins><strong>Zhiyuan Fang</strong></ins>, Xingwei Lin, Yutian Tang, and Zibin Zheng*.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">IEEE Transactions on Software Engineering (TSE), 2025</div> 
      <div style="margin-top: 8px;"> <a href="https://dl.acm.org/doi/10.1109/TSE.2025.3534567" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">PDF</a> </div> 
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">ASE</span> 
    </td> 
    <td style="border: none; padding-bottom: 20px;"> 
      <div style="font-weight: bold; font-size: 1.1em; color: #333;">DefiWarder: Protecting Defi Apps from Token Leaking Vulnerabilities</div> 
      <div style="margin: 4px 0;">Jianzhong Su, Xingwei Lin, <ins><strong>Zhiyuan Fang</strong></ins>, Zhirong Zhu, Jiachi Chen*, Zibin Zheng, Wei Lv, and Jiashui Wang.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">38th IEEE/ACM International Conference on Automated Software Engineering (ASE), 2023</div> 
      <div style="margin-top: 8px;"> 
        <a href="https://dl.acm.org/doi/10.1109/ASE56229.2023.00110" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">PDF</a> 
        <a href="https://github.com/Demonhero0/DeFiWarder" style="text-decoration: none; border: 1px solid #ccc; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #444;">Code</a>
      </div> 
    </td> 
  </tr> 
</table>

## Preprint
<table style="width: 100%; border-collapse: collapse; border: none;"> 
  <tr style="border: none;"> 
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #D3D3D3; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">Under Review</span> 
    </td> <td style="border: none; padding-bottom: 20px;"> <div style="font-weight: bold; font-size: 1.1em; color: #333;">GMM: Generalized OS Memory Management for XPUs</div> 
      <div style="margin: 4px 0;">Weixi Zhu, Bin Wang, <ins><strong>Zhiyuan Fang</strong></ins>, Jiahua Wang, Yao Guo, Rui Fang, Mingliang Gong, Jianfeng Tan, Yifan Huang, Ansheng You, Zhe Qiu, Minghui Yu, Tianyuan Bi, Jun Chen, Yuhang Chen, Liming Huang, Chao Liu, Wupeng Ma, Cunshu Ni, Tianchen Xiong, Qing Xiu, Huijie Xu, Junming Xu, Yanchao Yang, Gingfung Yeung, Adam Barker, Xinwei Hu.</div> 
      <!-- <div style="color: #666; font-size: 0.9em;">arXiv preprint, 2025</div>  -->
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #D3D3D3; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">Under Review</span> 
    </td> <td style="border: none; padding-bottom: 20px;"> <div style="font-weight: bold; font-size: 1.1em; color: #333;">TransformKV: Optimizing Multi-Turn Conversational Services in LLMs via KV cache Transformation</div> 
      <div style="margin: 4px 0;">Jiahang Zhou, <ins><strong>Zhiyuan Fang</strong></ins>, Yusheng Qin, Wuhui Chen, Zhang Tao, Chuanfu Zhang, Zibin Zheng.</div> 
      <!-- <div style="color: #666; font-size: 0.9em;">arXiv preprint, 2025</div>  -->
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #D3D3D3; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">Under Review</span> 
    </td> <td style="border: none; padding-bottom: 20px;"> <div style="font-weight: bold; font-size: 1.1em; color: #333;">DyMoE: Dynamic Expert Orchestration with Mixed-Precision Quantization for Efficient MoE Inference on Edge</div> 
      <div style="margin: 4px 0;">Yuegui Huang, <ins><strong>Zhiyuan Fang*</strong></ins>, Weiqi Luo, Wuhui Chen, Ruoyu Wu, Zibin Zheng.</div> 
      <!-- <div style="color: #666; font-size: 0.9em;">arXiv preprint, 2025</div>  -->
    </td> 
  </tr> 
</table>

# Projects

## In Progress
- *2026.01 - 2026.12*, Kernel fusion / AI complier for LLM, *Tencent*.
- *2025.10 - 2026.10*, Fine-grained computation-communication overlapping kernel for MoE, *CCF-Huawei*.
- *2025.08 - 2026.08*, Cost-effective MoE inference system based on heterogeneous memory, *Huawei 2012 Labs*.

## Finished
- *2024.01 - 2024.12*, MoE offloading inference framework, *CAAI-Huawei Mindspore*, **Outstanding Project**.
