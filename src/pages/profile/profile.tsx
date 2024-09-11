import CarouselApp from "@/components/carousel/carousel";
import ListPosts from "@/components/listPosts/listPosts";
import { Content } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

interface Post{
    postId: string;
    postUserName: string;
    shortDescription: string;
    title: string;
    userId: string;
    img: string;
}
const img =
  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
const posts:Post[] = [
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

  const userData={
    firstName:'firstName',
    lastName:"lastName",
    email:"email",
    description:"о себе",
    id:1,
    myPosts:posts
  }
  
const Profile=()=>{

    return(
        <Content>
        <CarouselApp img={[img,img,img,img]} />
        <Paragraph >{userData.firstName}</Paragraph>
        <Paragraph >{userData.lastName}</Paragraph>
        <Paragraph >{userData.email}</Paragraph>
        <Paragraph >{userData.description}</Paragraph>

        <Title level={2}>Обсуждения пользователя</Title>
    <ListPosts posts={posts}/>


    </Content>
    )
}

export default Profile