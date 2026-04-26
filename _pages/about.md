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

I am Zhiyuan Fang, a Ph.D. student at the School of Software Engineering, Sun Yat-sen University, where I am advised by Prof. [Wuhui Chen](https://sse.sysu.edu.cn/teacher/159). My early research focused on smart contract security, and current passion lies in optimizing LLM Systems. My recent work focuses on efficient MoE inference with offloading. And I am exploring the Kernel Fusion, AI Compiler, and Serving with NPUs.

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
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">TC</span> 
    </td>
    <td style="border: none; padding-bottom: 20px;"> 
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">TransformKV: Optimizing Multi-Turn Conversational Services in LLMs via KV cache Transformation</div> 
      <div style="margin: 4px 0;">Jiahang Zhou, <ins><strong>Zhiyuan Fang*</strong></ins>, Yusheng Qin, Wuhui Chen, Zhang Tao, Chuanfu Zhang, Zibin Zheng.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">IEEE Transactions on Computers (TC), 2026</div> 
      <div class="paper-actions">
        <a class="btn btn--inverse btn--small" href="https://ieeexplore.ieee.org/abstract/document/11458841">PDF</a> 
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-transformkv">BiB</button>
      </div>
    </td> 
  </tr> 
  <tr style="border: none;">
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">WWW</span> 
    </td>
    <td style="border: none; padding-bottom: 20px;"> 
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">Fate: Fast Edge Inference of Mixture-of-Experts Models via Cross-Layer Gate</div> 
      <div style="margin: 4px 0;"><ins><strong>Zhiyuan Fang</strong></ins>, Xingfan Yu, Yuegui Huang, Zicong Hong*, Yufeng Lyu, Wuhui Chen, Yue Yu, Fan Yu.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">In Proceedings of The ACM Web Conference (WWW), 2026</div> 
      <div class="paper-actions"> 
        <a class="btn btn--inverse btn--small" href="https://arxiv.org/abs/2502.12224">PDF</a> 
        <a class="btn btn--inverse btn--small" href="https://github.com/FFFzy/Fate_open">Code</a> 
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-fate">BiB</button>
      </div> 
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">ASPLOS</span> 
    </td> 
    <td style="border: none; padding-bottom: 20px;"> 
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">Klotski: Efficient Mixture-of-Expert Inference via Expert-Aware Multi-Batch Pipeline</div> 
      <div style="margin: 4px 0;"><ins><strong>Zhiyuan Fang</strong></ins>, Yuegui Huang, Zicong Hong, Yufeng Lyu, Wuhui Chen, Yue Yu*, Fan Yu, and Zibin Zheng.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">In Proceedings of the 30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS), 2025</div> 
      <div class="paper-actions"> 
        <a class="btn btn--inverse btn--small" href="https://dl.acm.org/doi/10.1145/3676641.3716261">PDF</a> 
        <a class="btn btn--inverse btn--small" href="https://openi.pcl.ac.cn/fangzhy/Klotski">Code</a> 
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-klotski">BiB</button>
      </div> 
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">TSE</span> 
    </td> 
    <td style="border: none; padding-bottom: 20px;"> 
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">SmartOracle: Generating Smart Contract Oracle via Fine-Grained Invariant Detection</div> 
      <div style="margin: 4px 0;">Jianzhong Su, Jiachi Chen, <ins><strong>Zhiyuan Fang</strong></ins>, Xingwei Lin, Yutian Tang, and Zibin Zheng*.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">IEEE Transactions on Software Engineering (TSE), 2025</div> 
      <div class="paper-actions">
        <a class="btn btn--inverse btn--small" href="https://dl.acm.org/doi/10.1109/TSE.2025.3534567">PDF</a>
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-smartoracle">BiB</button>
      </div> 
    </td> 
  </tr> 
  <tr style="border: none;"> 
    <td style="vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #006600; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">ASE</span> 
    </td> 
    <td style="border: none; padding-bottom: 20px;"> 
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">DefiWarder: Protecting Defi Apps from Token Leaking Vulnerabilities</div> 
      <div style="margin: 4px 0;">Jianzhong Su, Xingwei Lin, <ins><strong>Zhiyuan Fang</strong></ins>, Zhirong Zhu, Jiachi Chen*, Zibin Zheng, Wei Lv, and Jiashui Wang.</div> 
      <div style="color: #666; font-style: italic; font-size: 0.9em;">In Proceedings of the 38th IEEE/ACM International Conference on Automated Software Engineering (ASE), 2023</div> 
      <div class="paper-actions"> 
        <a class="btn btn--inverse btn--small" href="https://dl.acm.org/doi/10.1109/ASE56229.2023.00110">PDF</a> 
        <a class="btn btn--inverse btn--small" href="https://github.com/Demonhero0/DeFiWarder">Code</a>
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-defiwarder">BiB</button>
      </div> 
    </td> 
  </tr> 
</table>

## Preprint
<table style="width: 100%; border-collapse: collapse; border: none;"> 
  <tr style="border: none;"> 
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #D3D3D3; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">Under Review</span> 
    </td>
    <td style="border: none; padding-bottom: 20px;">
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">O-MoE: Efficient MoE Serving with Offloading via Elastic Memory Management</div> 
      <div style="margin: 4px 0;"><ins><strong>Zhiyuan Fang</strong></ins>, Dingyang Li, Jianfeng Zhong, Bin Wang, Weixi Zhu, Zicong Hong, Wuhui Chen*, Zibin Zheng.</div> 
      <!-- <div class="paper-actions">
        <a class="btn btn--inverse btn--small" href="https://arxiv.org/abs/2603.19172">PDF</a> 
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-dymoe">BiB</button>
      </div> -->
    </td> 
  </tr> 

  <tr style="border: none;"> 
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #D3D3D3; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">Under Review</span> 
    </td>
    <td style="border: none; padding-bottom: 20px;">
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">GMM: Generalized OS Memory Management for XPUs</div> 
      <div style="margin: 4px 0;">Weixi Zhu, Bin Wang, <ins><strong>Zhiyuan Fang</strong></ins>, Jiahua Wang, Yao Guo, Rui Fang, Mingliang Gong, Jianfeng Tan, Yifan Huang, Ansheng You, Zhe Qiu, Minghui Yu, Tianyuan Bi, Jun Chen, Yuhang Chen, Liming Huang, Chao Liu, Wupeng Ma, Cunshu Ni, Tianchen Xiong, Qing Xiu, Huijie Xu, Junming Xu, Yanchao Yang, Gingfung Yeung, Adam Barker, Xinwei Hu.</div> 
      <!-- <div class="paper-actions">
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-gmm">BiB</button>
      </div> -->
    </td> 
  </tr> 

  <tr style="border: none;"> 
    <td style="width: 120px; vertical-align: top; border: none; padding-top: 5px;"> 
      <span style="background-color: #D3D3D3; color: white; width: 100px; display: inline-block; text-align: center; padding: 2px 0; border-radius: 12px; font-size: 0.85em; font-weight: bold;">Under Review</span> 
    </td>
    <td style="border: none; padding-bottom: 20px;">
      <div class="paper-title" style="font-weight: bold; font-size: 1.1em; color: #333;">DyMoE: Dynamic Expert Orchestration with Mixed-Precision Quantization for Efficient MoE Inference on Edge</div> 
      <div style="margin: 4px 0;">Yuegui Huang, <ins><strong>Zhiyuan Fang*</strong></ins>, Weiqi Luo, Wuhui Chen, Ruoyu Wu, Zibin Zheng.</div> 
      <div class="paper-actions">
        <a class="btn btn--inverse btn--small" href="https://arxiv.org/abs/2603.19172">PDF</a> 
        <button type="button" class="btn btn--inverse btn--small paper-bib-trigger" data-bib-template="bib-dymoe">BiB</button>
      </div>
    </td> 
  </tr> 
</table>

<div id="paper-bib-modal" class="paper-bib-overlay" hidden>
  <div class="paper-bib-modal" role="dialog" aria-modal="true" aria-labelledby="paper-bib-title">
    <div class="paper-bib-modal__header">
      <h3 id="paper-bib-title" class="paper-bib-modal__title">Citation</h3>
      <button type="button" class="paper-bib-modal__close" data-paper-bib-close aria-label="Close citation dialog">&times;</button>
    </div>
    <pre id="paper-bib-content" class="paper-bib-content"></pre>
    <div class="paper-bib-modal__footer">
      <span id="paper-bib-status" class="paper-bib-status" aria-live="polite"></span>
      <button type="button" id="paper-bib-copy" class="btn btn--inverse btn--small">Copy</button>
    </div>
  </div>
</div>

<template id="bib-transformkv">
@article{zhou2026transformkv,
  title={TransformKV: Optimizing Multi-Turn Conversational Services in LLMs via KV cache Transformation},
  author={Zhou, Jiahang and Fang, Zhiyuan and Qin, Yusheng and Chen, Wuhui and Zhang, Tao and Zhang, Chuanfu and Zheng, Zibin},
  journal={IEEE Transactions on Computers},
  year={2026},
  publisher={IEEE}
}
</template>

<template id="bib-fate">
@article{fang2025fate,
  title={Fate: Fast edge inference of mixture-of-experts models via cross-layer gate},
  author={Fang, Zhiyuan and Hong, Zicong and Huang, Yuegui and Lyu, Yufeng and Chen, Wuhui and Yu, Yue and Yu, Fan and Zheng, Zibin},
  journal={arXiv preprint arXiv:2502.12224},
  year={2025}
}
</template>

<template id="bib-klotski">
@inproceedings{fang2025klotski,
  title={Klotski: Efficient Mixture-of-Expert Inference via Expert-Aware Multi-Batch Pipeline},
  author={Fang, Zhiyuan and Huang, Yuegui and Hong, Zicong and Lyu, Yufeng and Chen, Wuhui and Yu, Yue and Yu, Fan and Zheng, Zibin},
  booktitle={Proceedings of the 30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 2},
  pages={574--588},
  year={2025},
  doi={10.1145/3676641.3716261},
  url={https://doi.org/10.1145/3676641.3716261}
}
</template>

<template id="bib-smartoracle">
@article{su2025smartoracle,
  title={Smartoracle: Generating smart contract oracle via fine-grained invariant detection},
  author={Su, Jianzhong and Chen, Jiachi and Fang, Zhiyuan and Lin, Xingwei and Tang, Yutian and Zheng, Zibin},
  journal={IEEE Transactions on Software Engineering},
  volume={51},
  number={4},
  pages={947--959},
  year={2025},
  publisher={IEEE}
}
</template>

<template id="bib-defiwarder">
@inproceedings{su2023defiwarder,
  title={Defiwarder: Protecting defi apps from token leaking vulnerabilities},
  author={Su, Jianzhong and Lin, Xingwei and Fang, Zhiyuan and Zhu, Zhirong and Chen, Jiachi and Zheng, Zibin and Lv, Wei and Wang, Jiashui},
  booktitle={2023 38th IEEE/ACM International Conference on Automated Software Engineering (ASE)},
  pages={1664--1675},
  year={2023},
  organization={IEEE}
}
</template>

<!-- <template id="bib-gmm">
@misc{zhugmm,
  title={GMM: Generalized OS Memory Management for XPUs},
  author={Zhu, Weixi and Wang, Bin and Fang, Zhiyuan and Wang, Jiahua and Guo, Yao and Fang, Rui and Gong, Mingliang and Tan, Jianfeng and Huang, Yifan and You, Ansheng and Qiu, Zhe and Yu, Minghui and Bi, Tianyuan and Chen, Jun and Chen, Yuhang and Huang, Liming and Liu, Chao and Ma, Wupeng and Ni, Cunshu and Xiong, Tianchen and Xiu, Qing and Xu, Huijie and Xu, Junming and Yang, Yanchao and Yeung, Gingfung and Barker, Adam and Hu, Xinwei},
  note={Under Review}
}
</template> -->

<template id="bib-dymoe">
@article{huang2026dymoe,
  title={DyMoE: Dynamic Expert Orchestration with Mixed-Precision Quantization for Efficient MoE Inference on Edge},
  author={Huang, Yuegui and Fang, Zhiyuan and Luo, Weiqi and Wu, Ruoyu and Chen, Wuhui and Zheng, Zibin},
  journal={arXiv preprint arXiv:2603.19172},
  year={2026}
}
</template>

<script src="{{ '/assets/js/paper-bib.js' | relative_url }}"></script>

# Projects

## In Progress
- *2026.01 - 2026.12*, Kernel fusion / AI complier for LLM, *Tencent*.
- *2025.10 - 2026.10*, Fine-grained computation-communication overlapping kernel for MoE, *CCF-Huawei*.
- *2025.08 - 2026.08*, Cost-effective MoE inference system based on heterogeneous memory, *Huawei 2012 Labs*.

## Finished
- *2024.01 - 2024.12*, MoE offloading inference framework, *CAAI-Huawei Mindspore*, **Outstanding Project**.
