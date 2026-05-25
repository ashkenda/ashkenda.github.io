// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "A collection of my previous research experiences and projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Some sections have been edited for brevity. To see the full CV, click the PDF icon above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-outreach",
          title: "outreach",
          description: "science communication, public engagement, &amp; community science",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-fun",
          title: "fun!",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fun!/index.html";
          },
        },{id: "post-round-lakes",
        
          title: "Round Lakes",
        
        description: "a gif of increasingly round lakes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/roundlakes/";
          
        },
      },{id: "post-dilllympics",
        
          title: "DILLLYMPICS",
        
        description: "the DILL Lab Olympics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dilllympics/";
          
        },
      },{id: "post-trivia",
        
          title: "Trivia",
        
        description: "our bar trivia team!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/trivia/";
          
        },
      },{id: "post-filmography",
        
          title: "Filmography",
        
        description: "my short films",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/films/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-presented-the-first-chapter-of-my-research-at-icha-in-punta-arenas-chile",
          title: 'I presented the first chapter of my research at ICHA in Punta Arenas,...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-i-gave-an-oral-presentation-on-the-second-chapter-of-my-master-39-s-thesis-at-the-aslo-sil-conference-in-montreal",
          title: 'I gave an oral presentation on the second chapter of my master&amp;#39;s thesis...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-master-39-s-thesis",
          title: 'master&amp;#39;s thesis',
          description: "predicting algal toxin with machine learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-field-tech-39-ing",
          title: 'field tech&amp;#39;ing',
          description: "working as the field technician at the University of Michigan Biological Station",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-undergraduate-research",
          title: 'undergraduate research',
          description: "working in the Duffy Lab at the University of Michigan",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-study-abroad",
          title: 'study abroad',
          description: "studying algal growth in Iceland",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/ASH_CV_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%68%6B%65%6E%64%61@%6D%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-9749-4642", "_blank");
        },
      },{
        id: 'social-iNaturalist',
        title: 'Inaturalist',
        section: 'Socials',
        handler: () => {
          window.open("https://www.inaturalist.org/people/kenda11", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ashkenda", "_blank");
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
