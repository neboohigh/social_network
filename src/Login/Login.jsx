import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {requiredField} from "../validators/validators";
import {login, logout} from "../redux/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' component={Input} name={'email'}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder='Password' component={Input} name={'password'} type={'password'}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}
                       validate={[requiredField]}/>
            </div>
                {props.error && <div>{props.error}</div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    'form': 'login',
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={`/profile/${props.id}`}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})

export default connect(mapStateToProps, {login, logout})(Login)