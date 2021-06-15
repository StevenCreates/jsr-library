import { InfoPage } from "../components/InfoPage";

export const UseEffect = () => {
  return (
    <>
      <InfoPage
        initialCode={`
        function ClickWindow(){
          const [show, setShow] = React.useState(false);
        React.useEffect(() => {
          const listener = () => {
              setShow(true)
          };
          window.addEventListener("click", listener);
          return () => {
            window.removeEventListener("click", listener);
          };
        }, []);
        return (
          <div className="App">
            <h4>Click the screen to listen the click event</h4>
            {show ? <h2>You Clicked The Screen</h2> : <h2>Will you just click the screen?</h2>}
          </div>
        );
      };
        `}
        title="useEffect Increment Button"
        description="Returns [value, function], a value and a function to update that value.
        Upon render the value that is passed to the useState(value) will be the values inital value.
        The function (or setState) is used to update the value, it accepts a new value and then re-renders the component."
      />
    </>
  );
};
