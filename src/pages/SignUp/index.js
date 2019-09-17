import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .required('A senha é obrigatória')
        .min(6, 'No minimo 6 caracteres'),
    name: Yup.string().required('O nome é obrigatório'),
});
export default function SignUp() {
    const dispatch = useDispatch();
    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form onSubmit={handleSubmit} schema={schema}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho cadastro</Link>
            </Form>
        </>
    );
}
