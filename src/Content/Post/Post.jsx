import s from './post.module.css'

function Post(props) {
    return (
        <div className={s.post}>
            {props.text}
        </div>
    )
}

export default Post