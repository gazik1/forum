import CardPost from "@/components/cardPost/cardPost";
import { List } from "antd";
import { useEffect } from "react";
import {  useSearchParams } from "react-router-dom";


interface Post{
    postId: string;
    postUserName: string;
    shortDescription: string;
    title: string;
    userId: string;
    img: string;
}
const ListPosts=(props:{posts:Post[]})=>{
   const {posts}=props
    
    const getSearchPage=(state:URLSearchParams)=>{ return state.get("page")}
    const createSerchPage=(page:string|number)=>{return new URLSearchParams({page:String(page)}) }
   
    let [searchParams, setSearchParams] = useSearchParams(createSerchPage(1));

   useEffect(
    ()=>{
        if(getSearchPage(searchParams)===  null)
        {            
            setSearchParams(createSerchPage(1))}
        
    },[]
   )
    
  return (
    <List
    
      pagination={{
        onChange: (page) => {
            setSearchParams(createSerchPage(page))
        },
        pageSize: 2,
        defaultPageSize:Number(getSearchPage(searchParams))
      }}
      itemLayout="vertical"
      size="large"
      dataSource={posts}
      renderItem={(item) => (
        <List.Item>
          <CardPost {...item} />
        </List.Item>
      )}
    />
  );

}
export default ListPosts