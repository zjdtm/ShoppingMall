import Announcement from "../components/common/Announcement";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
    return(
        <>
         <Announcement/>
         <HeaderContainer/>
         <PostViewerContainer/>
        </>
    )
};

export default PostPage;