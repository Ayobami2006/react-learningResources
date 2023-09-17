import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setSate] = useState(initialVal);

  const toggle = () => {
    setSate((prev) => !prev);
  };

  return [state, toggle];

  //HOW TO USE THE USE TOGGLE HOOK:

  //   const [isVisible, toggle] = useToggle();

  //   return (
  //     <div>
  //       <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>

  //       {isVisible && <h1>Hidden text</h1>}
  //     </div>
  //   );
};
