---
title: K-PaaS 경량화
description: K-PaaS를 Local(PC) 설치를 위한 SandBox 프로젝트
image: /img/project/k-paas/portal.webp
tags: ["K-PaaS", "Vagrant", "VirtualBox"]
status: active
order: 1
locale: ko
---

### 프로젝트 개요

- 로컬에서 K-PaaS를 구동하기 위한 Vagrant와 Virtualbox 기반의 ShellScript
- 기본적으로 모두 자동화되어 있음(실행시 모두 자동 설치)
- 로컬에서 K-PaaS 설치를 통한 사용자 접근성 및 이해도 향상
- 설치 과정에서 오류에 대한 트러블슈팅 안내
- K-PaaS 버전(v1.5.2) 적용

---

### 구성요소

<div class="my-8">
  <img src="/img/project/k-paas/component.webp" alt="K-PaaS 구성요소" class="w-full rounded-lg shadow-md" />
  <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
    <img src="/img/project/k-paas/component_color.webp" alt="" class="inline h-4" /> K-PaaS Local Version 제외 컴포넌트
  </p>
</div>

---

### 컴포넌트

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div>
    <img src="/img/project/k-paas/core.webp" alt="Core 기능" class="w-full rounded-lg shadow-md" />
  </div>
  <div>
    <img src="/img/project/k-paas/non_core.webp" alt="제외 컴포넌트" class="w-full rounded-lg shadow-md" />
  </div>
</div>
<p class="text-center text-sm text-gray-600 dark:text-gray-400">core 기능 / 제외 컴포넌트</p>