import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../assets/api/login-api";
import {Navigate} from "react-router-dom";
import s from './Login.module.scss'

const LoginForm = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    if(isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={s.container}>
            <div style={{width: "100%", maxWidth: "425px"}}>
                <h1 className={s.title}>Sign up:</h1>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(login(values.email, values.password, values.rememberMe))
                        setSubmitting(false)
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Обязательно для ввода';
                        }
                        if (!values.password) {
                            errors.password = 'Обязательно для ввода';
                        }
                        return errors;
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={s.form}>
                            <Field
                                className={s.input}
                                type="email" name="email" placeholder='Email' />
                            <ErrorMessage name="email" component="div" className={s.errorEmail}/>
                            <Field
                                className={s.input}
                                type="password" name="password" placeholder='Password'/>
                            <ErrorMessage name="password" component="div" className={s.errorPassword}/>
                            <button className={s.btn} type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                            <label className={s.label}>
                                <Field type='checkbox' name='rememberMe' />
                                Remember me
                            </label>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;
