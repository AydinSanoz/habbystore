import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Layout} from '../components';
import {Formik, Field} from 'formik';
import FieldInput from '../components/FieldInput';
import * as Yup from 'yup';
import {Error} from '../components/error';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const Login = props => (
  <Formik
    initialValues={{email: '', password: ''}}
    validationSchema={SignupSchema}
    onSubmit={values => console.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
      <Layout>
        <FieldInput
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}>
          {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
        </FieldInput>

        <FieldInput
          placeholder="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry>
          {errors.password && touched.password ? (
            <Error>{errors.password}</Error>
          ) : null}
        </FieldInput>

        <Button onPress={handleSubmit} title="Submit" />
      </Layout>
    )}
  </Formik>
);
