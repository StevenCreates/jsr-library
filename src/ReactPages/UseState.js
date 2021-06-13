import { InfoPage } from "../components/InfoPage";

export const UseState = () => {
  return (
    <>
      <InfoPage
        initialCode={`function LikeButton(){
                const [likes, increaseLikes] = React.useState(0)
                
                return (
                <>
                  <p>{likes} Likes</p>
                  <button onClick={() => increaseLikes(likes + 1)}>like Button</button>
                </>
                )
                }`}
        title="useState Hook"
        description="Returns a stateful value, and a function to update it.
        During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
        The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component."
      />
    </>
  );
};
