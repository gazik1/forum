import { PATH } from "@/constant/roote"
import { Image } from "antd"
import { Content } from "antd/es/layout/layout"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import { generatePath, Link } from "react-router-dom"
const data={
    postId: "1",
    postUserName: "имя пользователя",
    description: "короткое описание",
    title: "название поста",
    userId: "4",
    img:  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    content:"контент"
  }
const Post=()=>{
    const pathUser=generatePath(PATH.MAIN.USERS.PROFILE,{userId:data.userId})
    return(
    <Content>
        <Image src={data.img} width={"100%"} />
        <Title level={2}>{data.title}</Title>
        <Link to={pathUser}>Создатель поста:{data.postUserName}</Link>

        <Paragraph>{data.description}</Paragraph>
        <Paragraph>{data.content}</Paragraph>
    

    </Content>
)
}
export default Post