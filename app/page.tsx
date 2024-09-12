import "./globals.css";
import UnderConstruction from "./components/UnderConstruction";
import Container from "./components/Container";

export default function Home(): JSX.Element {
  return (
    <Container size={'small'} >
      <UnderConstruction />
    </Container>
  );
}
