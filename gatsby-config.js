module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Bryan Roberts',
    // Main Site Title
    title: `Bryan Roberts | Computer Science Student`,
    // Description that goes under your name in main bio
    description: `Computer Science student based in Woodland, California`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/brynsroberts`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/bryan-roberts-b00945145/`,
    // Content of the About Me section
    about: `I'm a motivated Computer Science student who is excited about building software-applications.  While obtaining my degree from Oregon State University, I have worked full-time as a Research Associate at the West Coast Metabolomics Center as a specialist in Untargeted LC-MS/MS instrumentation and data analysis.  I look forward to graduating in December 2021 and pursuing a job in Software Engineering.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Small Shell',
        description:
          'A bash-like shell in C using a variety of UNIX operating system API calls, foreground and background processes, custom handlers for SIGINT and SIGTSTP, and input/output redirection',
        link: 'https://github.com/brynsroberts/small-shell',
      },
      {
        name: 'Automated Lipidomics Single Point Quantification',
        description:
          'Utilizes Python and Pandas library to automate an excel data processing task that my team performs on a regular basis and requires hours of manual work',
        link: 'https://github.com/brynsroberts/Automated-Lipidomics-Single-Point-Quantification',
      },
      {
        name: 'Pokemon Command Line Game',
        description:
          'Using object-oriented concepts, implements command line game where the players move through pointer linked spaces derived from an abstract Space class',
        link: 'https://github.com/brynsroberts/Pokemon-Command-Line-Game',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Staff Research Associate III - Untargeted LC-MS/MS Team Leader',
        description: 'Untargeted LC-MS/MS Team Leader, October 2020 - Present',
        link: 'https://metabolomics.ucdavis.edu/',
      },
      {
        name: 'Staff Research Associate II - Untargeted LC-MS/MS Team Leader',
        description: 'Untargeted LC-MS/MS, October 2016 - October 2020',
        link: 'https://metabolomics.ucdavis.edu/',
      },
      {
        name: 'Chemist',
        description: 'Environmental Analytical Chemist, October 2012 - October 2016',
        link: 'https://www.vista-analytical.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, Typescript, Node.js, Express.js, React, C, C++, Python',
      },
      {
        name: 'Databases',
        description: 'Google App Engine Datastore, MySQL',
      },
      {
        name: 'Other',
        description:
          'Google App Engine, CI / CD, REST API Design, Agile / Scrum, Git/GitHub, Postman, Linux',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
