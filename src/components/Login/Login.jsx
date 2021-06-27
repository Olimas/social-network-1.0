import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/formsControls/FormControls.module.css"

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={Input}
               validate={[required, maxLength50]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
               validate={[required, maxLength50]}/>
      </div>
      <div>
        <Field name={"rememberMe"} type="checkbox" component={Input}/>remember me
      </div>
      {props.error &&
      <div className={styles.formSummaryError}>
        {props.error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
  }
)
export default connect(mapStateToProps, {login})(Login);