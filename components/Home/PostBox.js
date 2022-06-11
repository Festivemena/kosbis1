import React, {useState} from 'react'

const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }

const PostBox = () => {
    const [postMessage, setPostMessage] = useState('')
    const Post = (event) => {
        event.preventDefault()
        console.log(postMessage)
    }
  return (
    <div className={style.wrapper}>
        <div className={style.tweetBoxLeft}>
            <img
          src="data:image/jpeg;base64,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"
          alt="profile image"
          className={ style.profileImage}
        /></div>
        <div className={style.tweetBoxRight}>
            <form>
                <textarea  onChange={e => setPostMessage(e.target.value)}
            value={postMessage} placeholder="What's happening?"
            className={style.inputField}></textarea>
            <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}></div>
            <button
              type='submit'
              onClick={event => Post(event)}
              disabled={!postMessage}
              className={`${style.submitGeneral} ${
                postMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Post
            </button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default PostBox