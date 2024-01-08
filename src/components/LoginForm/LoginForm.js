import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../assets/api/login-api";
import {Navigate} from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    if(isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div style={{display:'flex', flexDirection: 'column'}}>
            <h1>Authorization page:</h1>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(login(values.email, values.password, values.rememberMe))
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" placeholder='Email' />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" placeholder='Password'/>
                        <ErrorMessage name="password" component="div" />
                        <Field type='checkbox' name='rememberMe' />
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
