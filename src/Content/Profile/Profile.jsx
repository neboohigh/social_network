import s from './profile.module.css'
import Post from '../Post/Post'
import React from 'react'
import Loader from "../../common/Loader";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../validators/validators";
import {Textarea} from "../../FormControls/FormControls";


class ProfileInfo extends React.Component {

    state = {
        isStatusChanging: false,
        statusMessage: '' //this.props.statusMessage
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profile && prevProps.profile.aboutMe !== this.props.profile.aboutMe) {
            this.setState({
                statusMessage: this.props.profile.aboutMe
            })
        }
    }

    toggleIsStatusChanging = () => {
        this.setState({isStatusChanging: !this.state.isStatusChanging})
    }

    onLocalStatusChanging = (e) => {
        this.setState({statusMessage: e.target.value})
    }

    render() {
        return (
            <div className={s.profileInfo}>
                <div>
                    {!this.state.isStatusChanging
                        ? <span
                            onDoubleClick={this.toggleIsStatusChanging}>{this.props.profile && this.props.profile.aboutMe}</span>
                        : <input value={this.state.statusMessage}
                                 autoFocus={true}
                                 type={this.props.profile.aboutMe}
                                 onBlur={this.toggleIsStatusChanging}
                                 onChange={this.onLocalStatusChanging}/>
                    }
                </div>
                <div>
                    {this.props.profile ? <img src={this.props.profile.photos.large}/> : <Loader/>}
                </div>

            </div>
        )
    }

}

function Posts(props) {
    return (
        <div>
            {props.posts.map((el) => <Post text={el.text}/>)}
        </div>
    )
}



const maxLength30 = maxLength(30)
let NewPost = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       validate={[requiredField, maxLength30]}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

NewPost = reduxForm({form: 'newPost'})(NewPost)


function Profile(props) {
    const onSubmitt = (formData) => {
        props.AddPost(formData.newPostText)
    }

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         updateStatusMessage={props.updateStatusMessage}/>

            <NewPost onSubmit={onSubmitt}/>

            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile