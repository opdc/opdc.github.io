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
  },{id: "nav-notice",
          title: "notice",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notice/index.html";
          },
        },{id: "nav-history",
          title: "history",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/history/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-leaders",
          title: "Leaders",
          description: "표준프레임워크의 기능개선과 대외전파를 위해 커미터와 에반젤리스트로 활동하시는 12인의 공개SW 전문가 여러분을 소개합니다.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/leaders/";
          },
        },{id: "nav-opdc-repo",
          title: "OPDC Repo",
          description: "OPDC에서 개발 중인 repository",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-notice",
              title: "notice",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-seminar",
              title: "seminar",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-제주항공-여객기-사고-희생자와-유가족분들께-깊은-애도를-표합니다",
      
        title: "제주항공 여객기 사고 희생자와 유가족분들께 깊은 애도를 표합니다.",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/notice/";
        
      },
    },{id: "post-2024-전자정부-표준프레임워크-신규버전-v4-3-발표회-개최",
      
        title: "2024 전자정부 표준프레임워크 신규버전(v4.3) 발표회 개최!",
      
      description: "12/16.월.14:00,온라인생중계",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/egov-new-4.3/";
        
      },
    },{id: "leaders-고재도",
          title: '고재도',
          description: "Committer",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/committer01/";
            },},{id: "leaders-김경하",
          title: '김경하',
          description: "Committer",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/committer02/";
            },},{id: "leaders-이기하",
          title: '이기하',
          description: "Committer",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/committer03/";
            },},{id: "leaders-이승룡",
          title: '이승룡',
          description: "Committer",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/committer04/";
            },},{id: "leaders-한성곤",
          title: '한성곤',
          description: "Committer",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/committer05/";
            },},{id: "leaders-정호열",
          title: '정호열',
          description: "Committer",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/committer06/";
            },},{id: "leaders-장미영",
          title: '장미영',
          description: "좋은 시스템을 만들고 나누고 싶은 아키쟁이",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/evangelist01/";
            },},{id: "leaders-허광남",
          title: '허광남',
          description: "Evangelist",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/evangelist02/";
            },},{id: "leaders-임철홍",
          title: '임철홍',
          description: "Evangelist",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/evangelist03/";
            },},{id: "leaders-옥상훈",
          title: '옥상훈',
          description: "Evangelist",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/evangelist04/";
            },},{id: "leaders-양수열",
          title: '양수열',
          description: "Evangelist",
          section: "Leaders",handler: () => {
              window.location.href = "/leaders/evangelist05/";
            },},{id: "news-119차-세미나-08-14-집중코스-1차-표준프레임워크-github-컨트리뷰션-도전하기",
          title: '119차 세미나(08.14)-[집중코스 1차] 표준프레임워크 GitHub 컨트리뷰션 도전하기!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/opencommunity_119/";
            },},{id: "news-120차-세미나-집중코스-2차-컨트리뷰션-실전-개발환경-실행환경-템플릿-프로젝트-해보기",
          title: '120차 세미나-[집중코스 2차] 컨트리뷰션 실전 개발환경/실행환경/템플릿 프로젝트 해보기!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/opencommunity_120/";
            },},{id: "news-121차-세미나-집중코스-3차-컨트리뷰션-실전-공통컴포넌트-개발가이드-해보기",
          title: '121차 세미나-[집중코스 3차] 컨트리뷰션 실전 공통컴포넌트/개발가이드 해보기!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/opencommunity_121/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
