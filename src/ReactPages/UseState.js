
import { InfoPage } from '../components/InfoPage'

export const UseState = () => {
    return (
        <>
            <InfoPage
            initialCode={
                `function LikeButton(){
                const [likes, increaseLikes] = React.useState(0)
                
                return (
                <>
                  <p>{likes} Likes</p>
                  <button onClick={() => increaseLikes(likes + 1)}>like Button</button>
                </>
                )
                }`
            }
            title='useState Hook'
            description='React useState hook blah blah blah'
            />
        </>
    )
}
