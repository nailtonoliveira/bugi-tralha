import React from 'react';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '../../components/TextInput';
import history from '../../services/history';
import { signUpRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Paper,
  Content,
  Form,
  Title,
  Button,
  Root,
  LinearProgress,
} from './styles';
import schema from './schema';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const { register, errors, handleSubmit, clearError } = useForm({
    mode: 'onBlur',
  });

  const properties = {
    register,
    errors,
    clearError,
    schema,
  };

  function submit(data) {
    console.tron.log(data);
    dispatch(signUpRequest(data.name, data.email, data.password));
  }

  return (
    <Root>
      <Container maxWidth="xs">
        <Paper>
          {loading && <LinearProgress color="secondary" />}
          <Content>
            <Title>Sign Up</Title>
            <Form onSubmit={handleSubmit(submit)}>
              <TextInput properties={properties} field="name" label="Name" />
              <TextInput
                properties={properties}
                field="email"
                label="E-mail"
                type="email"
              />
              <TextInput
                properties={properties}
                field="password"
                label="Password"
                type="password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                onClick={() => history.push('/sign-in')}
                disabled={loading}
              >
                Already have account, go to Sign In
              </Button>
            </Form>
          </Content>
        </Paper>
      </Container>
    </Root>
  );
}
