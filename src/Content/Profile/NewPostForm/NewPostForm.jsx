import {maxLength, requiredField} from "../../../validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../FormControls/FormControls";


const maxLength30 = maxLength(30)
let NewPostForm = (props) => {

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

NewPostForm = reduxForm({form: 'newPost'})(NewPostForm)

export default NewPostForm