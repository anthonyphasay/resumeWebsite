/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tony Phasay",
  title: "Hello world, I am Tony!",
  subTitle: emoji(
    "I'm a Computer Science student at Brigham Young University with an emphasis in Software Engineering. I am currently working as a DevOps Technician at FPS GOLD, managing over 100+ servers, implementing CI/CD pipelines, troubleshooting production issues, and deploying hotfixes."
  ),
  resumeLink:
    "https://docs.google.com/document/d/152qmYANTWKW-iF0iFVJ6Srmrm1ZA3lb-GmmWYU7_Bvk/edit?usp=sharing", // Set to empty to hide the button. this link doesn't need to be replaced to get your resume in the site. Follow the README instructions for that.
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anthonyphasay",
  linkedin: "https://www.linkedin.com/in/anthony-phasay/",
  gmail: "tonyphasay45@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED FULL-STACK ENGINEER WHO LOVES TO LEARN",
  skills: [
    emoji(
      "⚡ Develop highly interactive user interfaces for web and mobile applications"
    ),
    emoji("⚡ Competent in technical operations and production troubleshooting"),
    emoji(
      "⚡ Experience with CI/CD, Infrastructure as Code, Powershell/Bash scripting"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
    skillName: "C#",
    fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
    skillName: "kubernetes",
    fontAwesomeClassname: "fas fa-dharmachakra"  // Kubernetes icon
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
    skillName: "flutter",
    fontAwesomeClassname: "fab fa-android"  // Try this first
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
    skillName: "powershell",
    fontAwesomeClassname: "fas fa-terminal"
    },
    {
    skillName: "linux",
    fontAwesomeClassname: "fab fa-linux"
  },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byuMedallionNavy.png"),
      logoPosition: "center", // Optional: center, top, bottom, left, right, or specific like "center top"
      logoScale: 1.2, // Optional: zoom factor for logo within the FIXED circle (e.g., 0.8 = zoomed out, 1.5 = zoomed in, circle size never changes)
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2023 - April 2028",
      // desc: "2x Dean's List Recipient (Top 5% of class)",
      // Add something impressive here
      // descBullets: [
      //   "President of BYU Developer's Club",
      //   "Researched ... "
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   logoPosition: "center",
    //   logoScale: 1,
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const customWorkExperience ={
  display: true,
  experience: [{
      role: "Core DevOps Technician",
      company: "FPS GOLD",
      companylogo: require("./assets/images/fpsgold.jpeg"),
      date: "May 2024 – Present",
      desc: "Performed production code releases. Troubleshoot Production, Beta, QA downtimes. System Admin for over 150+ VMs. Database Administrator for Core Databases. Kubernetes Administrator.",
      descBullets: [
        "Create Powershell automation for server maintenance",
        "Set up developer's environment for QA or Beta testing",
        "Create/maintain core databases for core FPS products"
      ]
    }]
}

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Core DevOps Technician",
    //   company: "FPS GOLD",
    //   companylogo: require("./assets/images/fpsgold.jpeg"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      role: "System Operator",
      company: "DHI Computing Services, Inc",
      companylogo: require("./assets/images/dhi.jpeg"),
      date: "Feb 2020 – Jan 2023",
      desc: "Monitor afterhour nightly processing. Troubleshoot client issues during critical processing hours. Contacted Tier 2-3 on call support if further escalation was needed. Ensure systems are operational. Print daily, montly, and yearly statements and reports."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Main Projects / Startups",
  subtitle: "SOME PERSONAL AND SCHOOL PROJECTS",
  projects: [
    {
      image: require("./assets/images/EmailPhishingDetector.png"),
      projectName: "Email Phishing Detector",
      projectDesc: "A chrome extension built on JavaScript that will scan Gmails and verify if they contain any suspicious links or from suspicioius senders. This will display a bright popup that will show if there are any suspicion on a Gmail. Users can get a detailed analysis and rescan emails for verification.",
      footerLink: [
        {
          name: "See landing page",
          url: "https://emailphishingdetector.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/NoraPallogo.png"),
      projectName: "BYU 2025 Homecoming Hackathon",
      projectDesc: "Personalized Agentic AI designed and built for incoming freshman. This AI agent has study mode, research mode, and many more. Can be connected with Canvas to personalize study plans for current semester. Can email professors in real time with help from NoraPal.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gradient-descent-byu-2025.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Associate of Science, Utah Valley University",
      subtitle:
        "Completed my Associates degree at Utah Valley University, Dean's list.",
      image: require("./assets/images/uvuMedallionGreen.webp"),
      imageAlt: "UVU Logo",
      footerLink: [
        {
          name: "View UVU Dean's list",
          url: "https://www.uvu.edu/graduation/docs/finalcommencementbooklet2022/commencementbookdigital.pdf"
        }
      ]
    },
    {
      title: "Microsoft Foundational C# Certification",
      subtitle:
        "Learned new technologies through free certification programs for native C#",
      image: require("./assets/images/free_code_camp_logo.jpeg"),
      imageAlt: "Free Code Camp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/kalablessed/foundational-c-sharp-with-microsoft"
        },
        {
          name: "Free Code Camp Account",
          url: "https://www.freecodecamp.org/kalablessed"
        }
      ]
    },
    {
      title: "Co-Author of chemistry poster for UN conference",
      subtitle: "Created a poster for scientific findings on Microplastics level in fresh body or water in Utah lake, Provo river, and Wasatch Snow peak.",
      image: require("./assets/images/UEN.png"),
      imageAlt: "UEN Logo",
      footerLink: [
        {
          name: "Microplastics in the Snowpack on the Wasatch Mountains",
          url: "https://uen.pressbooks.pub/ucur2023/chapter/science-sessionb-posters/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

// Update this section even if you have github linked, in case the linking fails
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 385-292-6345",
  email_address: "tonyphasay45@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  customWorkExperience,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
