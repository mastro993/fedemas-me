import React, { useState } from "react";
import { Motion, spring } from "react-motion";

const Logo: React.FC = () => {

  const [expanded, setExpanded] = useState<boolean>(false);


  return (
    // eslint-disable-next-line
    <a href="#"
       className="inline-flex items-center"
       onMouseEnter={() => setExpanded(true)}
       onMouseLeave={() => setExpanded(false)}
    >
      <div className="text-4xl text-gray-100 font-bold tracking-wide transition">

        <Motion style={{ x: expanded ? spring(1) : spring(0) }}>
          {({ x }) => (
            <>
              <span>fede</span>
              <span style={{
                opacity: x,
                left: x,
              }}>rico</span>
              <span style={{
                position: "relative",
                backgroundColor: "transparent",
                left: x * 65 - 65,
                zIndex: 9,
              }}>\mas</span>
              <span style={{
                position: "relative",
                left: x * 72 - 72,
                opacity: x,
              }}>trini</span>
            </>

          )}
        </Motion>

      </div>
    </a>
  );
};

export default Logo;