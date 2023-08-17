import d20Icon from "../../images/d20-icon-grey.png";

export default function D20Small({ onClick }) {
  return (
    <img
      alt="20-sided die"
      src={d20Icon}
      className="twenty-small"
      onClick={onClick}
    />
  );
}
