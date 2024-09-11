import ListUser from "@/components/listUsers/listUsers";
import { PATH } from "@/constant/roote";
import { Avatar, List } from "antd";
import { Content } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title";
import { generatePath, Link } from "react-router-dom";

const img =
  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
const userData=[{
    firstName:'firstName',
    lastName:"lastName",
    email:"email",
    description:"о себе",
    id:1,
    img:img
  },
  {
    firstName:'firstName',
    lastName:"lastName",
    email:"email",
    description:"о себе",
    id:2,
    img:img
  }
  ,
  {
    firstName:'firstName',
    lastName:"lastName",
    email:"email",
    description:"о себе",
    id:3,
    img:img
  }
]

const Users=()=>{

return(
   <Content>
    <ListUser users={userData} />
   </Content>
)
}
export default Users