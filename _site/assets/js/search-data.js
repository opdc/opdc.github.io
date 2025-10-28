// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-소개",
          title: "소개",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/introduce/";
          },
        },{id: "nav-연혁",
          title: "연혁",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/history/";
          },
        },{id: "nav-소식-공지",
          title: "소식/공지",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notice/index.html";
          },
        },{id: "nav-리더",
          title: "리더",
          description: "전자정부 표준프레임워크와 K-PaaS 오픈 플랫폼 전문가로 개발자 커뮤니티를 이끄는 리더 여러분을 소개합니다.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/leaders/";
          },
        },{id: "nav-정관",
          title: "정관",
          description: "규정(정관)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/constitution/";
          },
        },{id: "post-opdc-홈페이지-개설-준비-중",
      
        title: "OPDC 홈페이지 개설 준비 중",
      
      description: "2025/10/16.일.00:00",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/notice/";
        
      },
    },{id: "leaders-고재도",
          title: '고재도',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/01-go-Jaedo/";
            },},{id: "leaders-김경하",
          title: '김경하',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/02-kim-kyungha/";
            },},{id: "leaders-이승룡",
          title: '이승룡',
          description: "eGovFrame / OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/03-lee-seungryong/";
            },},{id: "leaders-한성곤",
          title: '한성곤',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/04-han-seonggon/";
            },},{id: "leaders-이기하",
          title: '이기하',
          description: "eGovFrame / OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/05-lee-kiha/";
            },},{id: "leaders-정호열",
          title: '정호열',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/06-jeong-hoyeol/";
            },},{id: "leaders-장미영",
          title: '장미영',
          description: "GovFrame / OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/07-jang-miyoung/";
            },},{id: "leaders-허광남",
          title: '허광남',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/08-heo-gwangnam/";
            },},{id: "leaders-임철홍",
          title: '임철홍',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/09-lim-cheolhong/";
            },},{id: "leaders-옥상훈",
          title: '옥상훈',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/10-ok-sanghoon/";
            },},{id: "leaders-양수열",
          title: '양수열',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/11-yang-suyeol/";
            },},{id: "leaders-이충렬",
          title: '이충렬',
          description: "eGovFrame / OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/12-lee-chungryeol/";
            },},{id: "leaders-권태성",
          title: '권태성',
          description: "eGovFrame Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/13-kwon-taeseong/";
            },},{id: "leaders-이석곤",
          title: '이석곤',
          description: "OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/14-lee-seokgon/";
            },},{id: "leaders-이승윤",
          title: '이승윤',
          description: "OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/15-lee-seungyoon/";
            },},{id: "leaders-권순률",
          title: '권순률',
          description: "OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/16-kwon-soonryu/";
            },},{id: "leaders-전여진",
          title: '전여진',
          description: "OPA Leader",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/17-jeon-yeojin/";
            },},{id: "news-준비-중",
          title: '준비 중',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/opencommunity_pre/";
            },},{id: "projects-k-paas-경량화",
          title: 'K-PaaS 경량화',
          description: "K-PaaS를 Local(PC) 설치를 위한 SandBox 프로젝트",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_k-paas/";
            },},{id: "projects-simple-homepage",
          title: 'simple-homepage',
          description: "simple-homepage Boot Template",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_simple-homepage/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%70%64%63.%6B%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/egovframe.open", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/opdc", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@open-egovframe", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://open.egovframe.org", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
