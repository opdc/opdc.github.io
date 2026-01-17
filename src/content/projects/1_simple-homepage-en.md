---
title: simple-homepage
description: simple-homepage Boot Template
image: /img/project/simple-homepage/portal.png
tags: ["eGovFrame", "Spring Boot"]
status: active
order: 2
locale: en
---

### Boot Migration Template

Homepage URL: `http://localhost:8080/sht_webapp/cmm/main/mainPage.do`

---

### Modifications

| File | Description | Note |
|------|-------------|------|
| context-common.xml | Added primary="true" for duplicate MultipartResolver beans | Error fix |
| egov-com-servlet.xml | Copied to resources | File recognition in Boot |
| application.properties | Context path configuration<br>Duplicate bean registration fix | Config added |
| pom.xml | Boot-related settings added | Config added |
| EgovBootApplication.java | Boot startup configuration | Config added |

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

### pom.xml Key Settings

```xml
<!-- Spring Boot Parent Configuration -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
</parent>

<!-- ... omitted ... -->

<!-- spring-boot-maven-plugin -->
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <executable>true</executable>
    </configuration>
</plugin>
```
