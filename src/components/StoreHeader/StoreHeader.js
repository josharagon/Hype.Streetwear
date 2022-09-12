import { Link } from "react-router-dom";
import "./StoreHeader.css";

const StoreHeader = () => {
  return (
    <header id="storeHead">
      <div id="headContent">
        <Link to="/">
          <img src="/HYPE.png" />
        </Link>
        <time data-timezone-offset="-14400">
          <b>{new Date().toLocaleString() + ""}</b>
        </time>
      </div>
    </header>
  );
};

export default StoreHeader;
