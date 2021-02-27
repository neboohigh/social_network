import s from './post.module.css'

function Post(props) {
    return (
        <div className={s.post}>
            {props.text}
        </div>
    )
}

function Posts(props) {
    return (
        <div>
            {props.posts.map((el) => <Post text={el.text}/>)}
        </div>
    )
}

export default Posts