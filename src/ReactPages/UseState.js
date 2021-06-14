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
        description="Returns [value, function], a value and a function to update that value.
        Upon render the value that is passed to the useState(value) will be the values inital value.
        The function (or setState) is used to update the value, it accepts a new value and then re-renders the component."
      />
    </>
  );
};
