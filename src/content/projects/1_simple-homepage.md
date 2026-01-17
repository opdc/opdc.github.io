---
title: simple-homepage
description: simple-homepage Boot Template
image: /img/project/simple-homepage/portal.png
tags: ["eGovFrame", "Spring Boot"]
status: active
order: 2
locale: ko
---

### Boot 전환 템플릿

홈페이지 접근 주소: `http://localhost:8080/sht_webapp/cmm/main/mainPage.do`

---

### 수정 내용

| 파일 | 내용 | 비고 |
|------|------|------|
| context-common.xml | MultipartResolver 타입의 빈이 2개에 대한 primary="true" 처리 | 에러처리 |
| egov-com-servlet.xml | resources로 복사 | boot에서 파일을 인식 |
| application.properties 생성 | context 경로 처리<br>빈 등록시 중복처리 해결 | 설정추가 |
| pom.xml | boot관련 설정 추가 | 설정추가 |
| EgovBootApplication.java | Boot 기동설정 | 설정추가 |

---

### EgovBootApplication.java

```java
package egovframework;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource({"classpath:/egovframework/spring/com/context-*.xml"
        ,"classpath:/egovframework/spring/springmvc/egov-com-servlet.xml"})
public class EgovBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(EgovBootApplication.class, args);
    }
}
```

---

### pom.xml 주요 설정

```xml
<!-- spring Boot Parent 설정 -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
</parent>

<!-- ... 생략 ... -->

<!-- spring-boot-maven-plugin -->
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <executable>true</executable>
    </configuration>
</plugin>
```