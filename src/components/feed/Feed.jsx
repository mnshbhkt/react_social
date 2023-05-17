import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import {Posts} from "../../dummyData";

export default function Feed() {
  // const [posts,setPosts] = useState([])

  // useEffect(()=>{
  //   const fetchPosts = async()=>{
  //   const res = await axios.get("posts/timeline/645cfea8d7cc88278c796364")
  //   setPosts(res.data)
  //   };
  //   fetchPosts();
  // },[])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key ={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
