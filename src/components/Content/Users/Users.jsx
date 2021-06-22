import s from './Users.module.css'
import React from "react";
import userPhoto from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div className={s.usersContainer}>
    <div className={s.spanContainer}>
      {pages.map(p => {
        return <span className={props.currentPage === p && s.selectedPage}
                     onClick={(e) => {
                       props.onPageChanged(p)
                     }}>{p}</span>
      })}
    </div>
    <div className={s.users}>
      {
        props.users.map(u =>
          <div className={s.user} key={u.id}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                            props.unfollow(u.id);
                          }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                            props.follow(u.id);
                          }}>Follow</button>
              }
            </div>
            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  </div>
}

export default Users;
