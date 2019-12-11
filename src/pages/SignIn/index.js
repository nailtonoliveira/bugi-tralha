import React from 'react';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '../../components/TextInput';
import history from '../../services/history';
import { signInRequest } from '../../store/modules/auth/actions';

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

export default function SignIn() {
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
    dispatch(signInRequest(data.uid, data.password));
  }

  return (
    <Root>
      <Container maxWidth="xs">
        <Paper>
          {loading && <LinearProgress color="secondary" />}
          <Content>
            <Title>Sign In</Title>
            <Form onSubmit={handleSubmit(submit)}>
              <TextInput properties={properties} field="uid" label="Username" />
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
            </Form>
            <Button
              color="secondary"
              onClick={() => history.push('/sign-up')}
              disabled={loading}
            >
              Dont have an account? Sing Up
            </Button>
          </Content>
        </Paper>
      </Container>
    </Root>
  );
}
