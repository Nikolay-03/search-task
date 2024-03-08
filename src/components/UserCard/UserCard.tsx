import "./style.css";
import {UserCardProps} from "../../types/User.ts";

export function UserCard({user} : UserCardProps) {
  return (
    <div className="userCard">
      <img className="userPic" src={user.image} />
      <div className="userInfo">
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
      </div>
    </div>
  );
}
