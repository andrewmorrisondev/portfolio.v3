import { Box, Typography, Paper, Link } from "@mui/material";

const ResponsiveResume = (): JSX.Element => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Andrew Morrison
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <Link href="mailto:me@andrewmorrison.dev">
              me@andrewmorrison.dev
            </Link>{" "}
            | (631) 807-2659 | New York, NY
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Link
              href="http://github.com/andrewmorrisondev"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
            |
            <Link
              href="https://www.linkedin.com/in/andy-morrison-b94945246/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
            |
            <Link
              href="http://andrewmorrison.dev"
              target="_blank"
              rel="noopener"
            >
              Portfolio
            </Link>
          </Box>
        </Box>
      </Paper>

      {/* Brand Statement */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Brand Statement
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Typography variant="body1">
            Transitioning from the service industry to software engineering, my
            unwavering commitment to radical empathy fuels my purpose. By fusing
            my unique background with technical expertise, I forge solutions
            that not only revolutionize technology but also empower individuals,
            making an indomitable mark on both industries.
          </Typography>
        </Box>
      </Paper>

      {/* Projects Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Projects
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="body2">
              <strong>The Great Pin Pursuit, Disney - Staging Site</strong>{" "}
              (August 2024)
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" gutterBottom>
                An interactive scavenger hunt live at the 2024 D23 Expo offers
                an engaging experience across devices, allowing attendees to
                explore themed challenges and earn rewards. Featuring real-time
                updates, location-based clues, and interactive elements.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="body2">
              <strong>
                The World’s Largest Tailgate, Kansas City Chiefs - Staging Site
              </strong>{" "}
              (September 2024)
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" gutterBottom>
                A fully responsive live streaming page provides an immersive
                experience across phones, tablets, and desktops, featuring
                interactive elements like an AR photo booth with live preview
                and customizable overlays.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="body2">
              <strong>
                VYNL - Full Stack Developer (MongoDB, Express.js, NodeJs)
              </strong>
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" gutterBottom>
                A social app built with the MEN stack. Show off your favorite
                records, see your friends niche tastes. (April 2023)
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="body2">
              <strong>Snake - Front End Developer (JavaScript, CSS)</strong>
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">
                A classic arcade game, based on the recreation by Taneli Armanto
                of Nokia for the Nokia 6110. (April 2023)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Work Experience Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Work Experience
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="body2">
              <strong>Contract Software Engineer</strong> - Little Cinema
              Digital (April 2024 - Present)
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" gutterBottom>
                Engineered scalable web solutions for high-profile clients in
                the entertainment and tech industries, enhancing their digital
                content delivery and user engagement across platforms.
                Collaborated closely with clients to translate complex
                requirements into robust codebases.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography variant="body2">
              <strong>Bartender</strong> - North Moore Oysters LLC, Smith &
              Mills (Oct. 2019 - Dec. 2023)
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">
                Managed nightly sales ranging from $5,000 to $20,000, showcasing
                exceptional organizational and multitasking abilities.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Education Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2">
              <strong>Software Engineering Intensive</strong> - General Assembly
              (June 2023)
            </Typography>
            <Typography variant="body2">
              <strong>Performance Certificate</strong> - Crane School Of Music
              at SUNY Potsdam (May 2018)
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Skills Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Typography variant="body1">
            TypeScript, JavaScript, React, Remix, Next.js, Vercel, React Router,
            Redux, CSS3, PostCSS, Tailwind CSS, MUI, Ruby, Ruby on Rails, HTML5,
            Git, NodeJs, Express.js, PostgreSQL, MongoDB, Axios, RSpec, Jest,
            Jasmine, Capybara, Postman, JQuery, Markdown, VS Code, Makefile,
            ESLint
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResponsiveResume;
