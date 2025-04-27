---
layout: page
title: simple-homepage
description: simple-homepage Boot Template
img: assets/img/project/simple-homepage/portal.png
importance: 2
category: egovframe
---

### Boot 전환 템플릿
- 홒페이지 접근 주소: http://localhost:8080/sht_webapp/cmm/main/mainPage.do
- 수정 내용

| 파일                        | 내용                                                | 비고            |
|---------------------------|---------------------------------------------------|---------------|
| context-common.xml        | MultipartResolver 타입의 빈이 2개에 대한 primary="true" 처리 | 에러처리          |
| egov-com-servlet.xml      | resources로 복사                                     | boot에서 파일을 인식 |
| application.properties 생성 | context 경로 처리<br> 빈 등록시 중복처리 해결                   | 설정추가          |
| pom.xml                   | boot관련 설정 추가                                      | 설정추가          |
| EgovBootApplication.java  | Boot 기동설정                                         | 설정추가          |

<br>

- EgovBootApplication.java

{% raw %}

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

{% endraw %}

- pom.xml

{% raw %}

```xml
<!-- spring Boot Parent 설정 -->
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.7.18</version>
	</parent>

	<dependencyManagement>
		<dependencies>
			<!-- Spring BOM -->
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-framework-bom</artifactId>
				<version>${spring.maven.artifact.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>

			<!-- Spring Security BOM -->
			<dependency>
				<groupId>org.springframework.security</groupId>
				<artifactId>spring-security-bom</artifactId>
				<version>${spring.security.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>

	<dependencies>
		<!-- spring boot dependency start -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-core</artifactId>
			<version>9.0.91</version>
		</dependency>
		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-el</artifactId>
			<version>9.0.91</version>
		</dependency>
		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-jasper</artifactId>
			<version>9.0.91</version>
		</dependency>
		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-websocket</artifactId>
			<version>9.0.91</version>
		</dependency>
		<dependency>
			<groupId>org.apache.tomcat</groupId>
			<artifactId>tomcat-annotations-api</artifactId>
			<version>9.0.91</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<optional>true</optional>
		</dependency>
		<!-- war 배포 시 해당 주석 제거 -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
			<scope>provided</scope>
		</dependency>

		<!-- spring boot dependency end -->

~~ 생략 ~~
    
    <!-- spring-boot-maven-plugin -->
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <executable>true</executable>
            </configuration>
        </plugin>

```

{% endraw %}
