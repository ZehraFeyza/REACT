import { render } from 'react-dom';
import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Button, Container, ListGroupItem } from 'react-bootstrap';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);


    const ekle=()=>{
const yeniYazi={
    
        title: "Merhaba Dunya",
        body:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius, voluptate nam autem aspernatur velit fugit repudiandae debitis natus magni, laborum rerum deleniti veritatis ipsa nobis non amet at ex. ",
        userId: 1
    

};

axios
.post("https://jsonplaceholder.typicode.com/posts",yeniYazi)
.then((resp)=>{
    setPosts([...posts,yeniYazi]);
}
);

    }

    useEffect(()=>{
axios('https://jsonplaceholder.typicode.com/posts').then((resp)=>
setPosts(resp.data)
);

 },[]);


  return (
  <Container className='mt-5'>
      <Button  variant="info" className='mb-4' onClick={ekle}>Yeni Ekle</Button>
{posts.map((x)=>(
    <Post baslik={x.title} mesaj={x.body} key={x.id} />
))}
  </Container>

   
  )
}

export default Posts