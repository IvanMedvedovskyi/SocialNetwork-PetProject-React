import React, {FC, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../assets/api/login-api.ts";
import {Navigate} from "react-router-dom";
import s from './Login.module.scss'
import {AppDispatch, RootState} from "../../assets/redux/store";

const LoginForm: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const captchaUrl = useSelector((state: RootState) => state.auth.captchaUrl)
    const [error, setError] = useState('');

    if(isAuth) {
        return <Navigate to='/profile' />
    }

    interface InitialValuesType {
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    }

    const InitialValues: InitialValuesType = { email: '', password: '', rememberMe: false, captcha: '' }
    return (
        <div className={s.container}>
            <div style={{width: "100%", maxWidth: "425px"}}>
                <h1 className={s.title}>Sign up:</h1>
                <Formik
                    initialValues={InitialValues}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(login(values.email, values.password, values.rememberMe, setError, values.captcha))
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
                            {captchaUrl && <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <img style={{width: "150px"}} src={captchaUrl} alt="captcha"/>
                                <Field className={s.input.captcha} type='text' name='captcha' placeholder='Enter the captcha'/>
                                <ErrorMessage name="captcha" component="div"/>
                            </div>}
                            <button className={s.btn} type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                            {error && <div className={s.error}>{error}</div>}
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
