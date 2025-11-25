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
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-outcomes",
          title: "Outcomes",
          description: "My electronics DIY, robotics, and IC design projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outcomes/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "No one can leave this world smiling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-participated-in-dac-2025-as-third-author",
        
          title: "Participated in DAC 2025 as third author",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-join-the-brainsys-lab-of-city-university-of-hongkong",
          title: 'Join the Brainsys lab of City University of Hongkong.',
          description: "",
          section: "News",},{id: "projects-neuromorphic-bmi-chip-development",
          title: 'Neuromorphic BMI Chip Development',
          description: "Development of a neuromorphic computing-based Brain-Machine Interface chip with Spiking Neural Networks for real-time brain signal processing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1-project/";
            },},{id: "projects-ultra-low-power-multi-channel-signal-acquisition-system",
          title: 'Ultra-Low Power Multi-channel Signal Acquisition System',
          description: "Design of ultra-low noise, ultra-low power circuits for multi-channel EEG signal acquisition using Delta modulation-based analog pulse conversion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2-project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%65%6E%67%6E%61%66%75%32-%63@%6D%79.%63%69%74%79%75.%65%64%75.%68%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
