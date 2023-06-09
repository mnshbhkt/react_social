import './rightbar.css'
import { Users } from "../../dummyData";
import Online from "../online/Online"

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ami Slyan</b> and <b>3 others</b> have birthday today.
          </span>
        </div>
        <img className='rightbarAd' src={`${PF}ad.png`} alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return(
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${PF}pp/pp2.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Cena</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}pp/pp5.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Cena</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}pp/pp1.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Cena</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}pp/pp1.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Cena</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}pp/pp1.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Cena</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}pp/pp1.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Cena</span>
        </div>
      </div>
    </>
    );
  }

    return (
      <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
      </div>
    );
  }
