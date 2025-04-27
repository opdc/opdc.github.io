---
layout: page
title: K-PaaS 경량화
description: K-PaaS를 Local(PC) 설치를 위한 SandBox 프로젝트
img: assets/img/project/k-paas/portal.png
importance: 1
category: k-paas
---

~~~
- 로컬(Intel 기반 CPU)에서 K-PaaS를 구동하기 위한 Vagrant와 Virtualbox 기반의 ShellScript
- 기본적으로 모두 자동화되어 있음(실행시 모두 자동 설치)
- 로컬에서 K-PaaS 설치를 통한 사용자 접근성 및 이해도 향상
- 설치 과정에서 오류에 대한 트러블슈팅 안내
- K-PaaS 버전(v1.5.2) 적용
~~~

- 구성요소

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/project/k-paas/component.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <img src="/assets/img/project/k-paas/component_color.png"> K-PaaS Local Version 제외 컴포넌트
</div>

- 컴포넌트

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/project/k-paas/core.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/project/k-paas/non_core.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    core 기능 / 제외 컴포넌트
</div>

