import "./SearchBox.css";

export default function SearchBox() {
  return <form className="search-box">
    <input className="input" type="text" placeholder="Search for a country..." />
    <button className="button">🔍</button>
  </form>
};
