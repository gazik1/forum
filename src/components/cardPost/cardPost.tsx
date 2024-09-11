import { ComponentProps, FC } from "react"
import style from './cardPost.module.scss'
import classNames from "classnames"
import {  Button, Card, Divider, Image, RowProps } from "antd"
import { generatePath, Link, useNavigate } from "react-router-dom";
import { PATH } from "@/constant/roote";
import Meta from "antd/es/card/Meta";
interface Props extends ComponentProps<
React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>
>
{
    className?:string
    postId:string
    shortDescription:string
    title:string
    userId:string
    postUserName:string
    img:string
}
const CardPost:FC<Props>=(props)=>{
    const {className,postId,shortDescription,title,userId,postUserName,img,...rest}=props
    const cardPostCn=classNames(style.cardPostCn ,className)
  const navigation= useNavigate()

  const pathPost=generatePath(PATH.MAIN.POSTS.POST,{postId:postId})
  const pathUser=generatePath(PATH.MAIN.USERS.PROFILE,{userId:userId})

    return(
        
    <Card  className={cardPostCn} {...rest} type="inner"  cover={
        <Image
        alt="example"
        src={img}
        />} 
        actions={[
            <Button onClick={()=>{navigation(pathPost)}}>Перейти к посту</Button>
            
          ]}
          
    >
        
       <Divider orientation="left"><Link to={pathUser}>{postUserName}</Link></Divider>

         
        
      <Meta
      title={title}
      description={shortDescription}
      
    />
    </Card>
    )
}
export default CardPost