export default function D6Small({ onClick }) {
  return (
    <button className="six-small" onClick={onClick}>
      <div className="left-right-small">
        <div className="dots-small"></div>
        <div className="dots-small"></div>
      </div>
      <div className="left-right-small">
        <div className="dots-small"></div>
        <div className="dots-small"></div>
      </div>
      <div className="left-right-small">
        <div className="dots-small"></div>
        <div className="dots-small"></div>
      </div>
    </button>
  );
}
