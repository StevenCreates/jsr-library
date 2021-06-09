import styled from "styled-components";
import Editor from "react-code-live";

const InfoDescription = styled.div`
  margin: 100px;
  color: pink;
`;

const LiveEditorContainer = styled.div`
    max-width: 900px,
    min-width: 600px
`;

export const InfoPage = ({ title, description, initialCode }) => {
  return (
    <div>
      <Editor
        storageIdentifier="preview-container"
        initialJs={initialReactCode}
        showControls={true}
      />
      <LiveEditorContainer data-id="preview-container"></LiveEditorContainer>
      <InfoDescription>Testing</InfoDescription>
    </div>
  );
};

const initialReactCode = `const WithStyled = () => {
  const [value, setValue] = useState('initialValue')
  return (
    <>
      <h5>{value}</h5>
      <input type="text" onChange={e => setValue(e.target.value)} value={value} />
    </>
  )
  }
`;
