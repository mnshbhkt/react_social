import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData";
import { useEffect , useState } from 'react';
import axios from "axios";


export default function Post({post}) {
  const [like,setLike]=useState(post.like)
  const [isLiked,setIsLiked]=useState(false)
  const [user,setUser]=useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(()=>{
  //   const fetchUser = async()=>{
  //   const res = await axios.get(`users/${post.userId}`)
  //   setUser(res.data)
  //   };
  //   fetchUser();
  // },[])

  const likeHandler=()=>{
    setLike(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">
              {Users.filter((u)=>u.id===post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className='postImg' src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={`${PF}icons/like2.png`} onClick={likeHandler} alt="" className="likeIcon" />
            <img src={`${PF}icons/love2.png`} onClick={likeHandler} alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

