import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";

export default function Dots({ roll }) {
  if (roll === 1) return <One />;
  if (roll === 2) return <Two />;
  if (roll === 3) return <Three />;
  if (roll === 4) return <Four />;
  if (roll === 5) return <Five />;
  if (roll === 6) return <Six />;
}
