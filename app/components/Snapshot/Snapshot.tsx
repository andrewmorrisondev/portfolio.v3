import React, { useState } from "react";
import { Button, ButtonGroup, Card, useTheme, TextField } from "@mui/material";
import Link from "next/link"; // For Next.js navigation using Link
import YouTube from "react-youtube"; // For YouTube embed

// StyledButton Component
const StyledButton = ({
  children,
  isExpanded,
  hasExpanded,
  onClick,
  onExpand,
}: {
  children: React.ReactNode;
  isExpanded: boolean;
  hasExpanded: boolean;
  onClick: () => void;
  onExpand: () => React.ReactNode;
}): JSX.Element => {
  return (
    <Button
      sx={{
        flexGrow: isExpanded ? 50 : 1,
        width: "100%",
        opacity: hasExpanded && !isExpanded ? 0.8 : 1,
        padding: "16px",
        transition: "flex-grow 0.5s ease, opacity 0.5s ease",
      }}
      onClick={onClick}
    >
      {!isExpanded ? (
        children
      ) : (
        <div style={{ textAlign: "center" }}>{onExpand()}</div>
      )}
    </Button>
  );
};

// Snapshot Component
const Snapshot = (): JSX.Element => {
  const [expandedButton, setExpandedButton] = useState<number | null>(null);
  const theme = useTheme(); // Access global theme

  const handleButtonClick = (index: number): void => {
    setExpandedButton(expandedButton === index ? null : index);
  };

  const handleContactSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const body = formData.get("body");

    console.log({ name, email, subject, body });
  };

  // Expand functions for each button
  const expandBiography = (): React.ReactNode => (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link href="/biography" passHref>
        <Button variant="contained">Go to Biography</Button>
      </Link>
    </>
  );

  const expandMedia = (): React.ReactNode => (
    <>
      <YouTube videoId="dQw4w9WgXcQ" opts={{ height: "390", width: "640" }} />
      <Link href="/media" passHref>
        <Button variant="contained">Go to Media</Button>
      </Link>
    </>
  );

  const expandUpcomingSchedule = (): React.ReactNode => (
    <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
      <ul>
        <li>Event 1 - Date</li>
        <li>Event 2 - Date</li>
        <li>Event 3 - Date</li>
        {/* Add more events */}
      </ul>
      <Link href="/schedule" passHref>
        <Button variant="contained" sx={{ position: "sticky", bottom: 0 }}>
          Go to Schedule
        </Button>
      </Link>
    </div>
  );

  const expandProjects = (): React.ReactNode => (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies a
        turpis a pellentesque. Nam ultricies tincidunt ligula, id porta.
      </p>
      <Link href="/projects" passHref>
        <Button variant="contained">Go to Projects</Button>
      </Link>
    </>
  );

  const expandContact = (): React.ReactNode => (
    <form
      onSubmit={handleContactSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TextField label="Name" name="name" fullWidth />
      <TextField label="Email" name="email" fullWidth />
      <TextField label="Subject" name="subject" fullWidth />
      <TextField label="Body" name="body" multiline rows={4} fullWidth />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );

  return (
    <Card
      sx={{
        width: "50%",
        height: "80dvh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ButtonGroup
        orientation="vertical"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        {/* Button 1: Biography */}
        <StyledButton
          isExpanded={expandedButton === 0}
          hasExpanded={expandedButton !== null}
          onClick={() => handleButtonClick(0)}
          onExpand={expandBiography}
        >
          Biography
        </StyledButton>

        {/* Button 2: YouTube embed and media link */}
        <StyledButton
          isExpanded={expandedButton === 1}
          hasExpanded={expandedButton !== null}
          onClick={() => handleButtonClick(1)}
          onExpand={expandMedia}
        >
          Media
        </StyledButton>

        {/* Button 3: Upcoming Schedule */}
        <StyledButton
          isExpanded={expandedButton === 2}
          hasExpanded={expandedButton !== null}
          onClick={() => handleButtonClick(2)}
          onExpand={expandUpcomingSchedule}
        >
          Upcoming Schedule
        </StyledButton>

        {/* Button 4: Projects */}
        <StyledButton
          isExpanded={expandedButton === 3}
          hasExpanded={expandedButton !== null}
          onClick={() => handleButtonClick(3)}
          onExpand={expandProjects}
        >
          Projects
        </StyledButton>

        {/* Button 5: Contact Form */}
        <StyledButton
          isExpanded={expandedButton === 4}
          hasExpanded={expandedButton !== null}
          onClick={() => handleButtonClick(4)}
          onExpand={expandContact}
        >
          Contact
        </StyledButton>
      </ButtonGroup>
    </Card>
  );
};

export default Snapshot;
