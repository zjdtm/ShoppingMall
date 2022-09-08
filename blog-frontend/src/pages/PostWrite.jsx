import HeaderContainer from "../containers/common/HeaderContainer";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

const PostWrite = () => {
  return (
      <>
        <HeaderContainer/>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </>
  );
};

export default PostWrite;
