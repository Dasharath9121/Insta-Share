import {Link} from 'react-router-dom'

import {BsHeart} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {BiShareAlt} from 'react-icons/bi'
import {FaRegComment} from 'react-icons/fa'

import DataContext from '../../context/DataContext'

import './index.css'

const InstaPostSearchItem = props => (
  <DataContext.Consumer>
    {value => {
      const {initiateSearchPostLikeApi} = value

      const {eachPost} = props
      const {comments, postId, likesCount, message} = eachPost
      const updatedComments = comments.map(eachComment => ({
        comment: eachComment.comment,
        commentUserId: eachComment.user_id,
        commentUserName: eachComment.user_name,
      }))

      const isLiked = message === 'Post has been liked'

      const postLikeApi = () => {
        initiateSearchPostLikeApi(postId, true)
      }

      const postUnLikeApi = () => {
        initiateSearchPostLikeApi(postId, false)
      }

      return (
        <li key={eachPost.postId} className="post_item_container">
          <div className="profile_div">
            <img
              src={eachPost.profilePic}
              alt="post author profile"
              className="profile_pic"
            />
            <Link to={`/users/${eachPost.userId}`}>
              <p className="profileName">{eachPost.userName}</p>
            </Link>
          </div>
          <img src={eachPost.postImage} alt="post" className="postImage" />
          <div className="social_div">
            {isLiked ? (
              <button
                onClick={postUnLikeApi}
                type="button"
                className="icon_button"
              >
                {/* eslint-disable-next-line */}
                <FcLike className="likeIcon" />
              </button>
            ) : (
              <button
                onClick={postLikeApi}
                type="button"
                className="icon_button"
              >
                {/* eslint-disable-next-line */}
                <BsHeart className="icon" />
              </button>
            )}
            {/* eslint-disable-next-line */}
            <button type="button" className="icon_button">
              <FaRegComment className="icon" />
            </button>
            {/* eslint-disable-next-line */}
            <button type="button" className="icon_button">
              <BiShareAlt className="icon" />
            </button>
          </div>
          <p className="likes">{likesCount} likes</p>
          <p className="caption">{eachPost.postCaption}</p>
          <ul className="comments_container">
            {updatedComments.map(eachComment => (
              <li className="comment_item" key={eachComment.commentUserId}>
                <Link to={`/users/${eachComment.commentUserId}`}>
                  <span className="commentUSerName">
                    {eachComment.commentUserName}
                  </span>
                </Link>
                <p className="comment">{eachComment.comment}</p>
              </li>
            ))}
          </ul>
          <p className="createdAt">{eachPost.createdAt}</p>
        </li>
      )
    }}
  </DataContext.Consumer>
)
export default InstaPostSearchItem
