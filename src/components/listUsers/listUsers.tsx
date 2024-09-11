import { PATH } from "@/constant/roote";
import { Avatar, List } from "antd";
import { Content } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import { generatePath, Link, useSearchParams } from "react-router-dom";
interface User{
    firstName: string;
    lastName: string;
    email: string;
    description: string;
    id: number;
    img: string;

}


const ListUser=(props:{users:User[]})=>{
    const {users}=props
const pathUser=generatePath(PATH.MAIN.USERS.PROFILE,{userId:"3"})
    
const getSearchPage=(state:URLSearchParams)=>{ return state.get("page")}
const createSerchPage=(page:string|number)=>{return new URLSearchParams({page:String(page)}) }
let [searchParams, setSearchParams] = useSearchParams();
useEffect(
()=>{
    if(getSearchPage(searchParams)===  null)
    {            
        setSearchParams(createSerchPage(1))}
    
},[]
)

return(
   <Content>
    <List
     pagination={{
        onChange: (page) => {
            setSearchParams(createSerchPage(page))
        },
        pageSize: 2,
        defaultPageSize:Number(getSearchPage(searchParams))
      }}
    itemLayout="horizontal"
    dataSource={users}
   renderItem={(user)=>{
    return <List.Item>
    <List.Item.Meta
      avatar={<Avatar src={user.img} />}
      title={<Link to={pathUser}>{user.email}</Link>}
      description={user.description}
    />
  </List.Item>
   }} 
    >
    
    </List>
   </Content>
)
}
export default ListUser