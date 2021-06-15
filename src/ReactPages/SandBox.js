import React from "react";

export const SandBox = () => {
    const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const listener = () => {
        setShow(true)
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
      setShow(false)
    };
  }, []);
  return (
    <div className="App">
      <h4>Click the screen to listen the click event</h4>
      {show ? <h2>You Clicked The Screen</h2> : <h2>Will you just click the screen?</h2>}
    </div>
  );
};
