import ListPosts from "@/components/listPosts/listPosts";

const img =
  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
const posts = [
  {
    postId: "1",
    postUserName: "имя пользователя",
    shortDescription: "короткое описание",
    title: "название поста",
    userId: "4",
    img: img,
  },
  {
    postId: "2",
    postUserName: "имя пользователя",
    shortDescription: "короткое описание",
    title: "название поста",
    userId: "5",
    img: img,
  },
  {
    postId: "3",
    postUserName: "имя пользователя",
    shortDescription: "короткое описание",
    title: "название поста",
    userId: "6",
    img: img,
  },
];
const Posts = () => {
   
    return <ListPosts posts={posts}/>
};
export default Posts;
