import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StoreHeader.css";

const StoreHeader = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);
  return (
    <header id="storeHead">
      <div id="headContent">
        <Link to="/">
          <img src="/HYPE.png" />
        </Link>
        <time data-timezone-offset="-14400">
          <b>{time}</b>
        </time>
      </div>
    </header>
  );
};

export default StoreHeader;
