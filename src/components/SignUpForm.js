import {Formik} from 'formik';
import React from 'react';
import {Button, View} from 'react-native';
import {Error} from './error';
import FieldInput from './FieldInput';
import * as Yup from 'yup';

export function SignUpForm({children, ...props}) {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required').max(10, 'Too Long'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={{email: '', password: '', firstName: ''}}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View>
          <FieldInput
            placeholder="FirstName"
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}>
            {errors.firstName && touched.firstName ? (
              <Error>{errors.firstName}</Error>
            ) : null}
          </FieldInput>
          <FieldInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}>
            {errors.email && touched.email ? (
              <Error>{errors.email}</Error>
            ) : null}
          </FieldInput>

          <FieldInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry>
            {errors.password && touched.password ? (
              <Error>{errors.password}</Error>
            ) : null}
          </FieldInput>

          <Button onPress={handleSubmit} title="SignUp" />
          {children}
        </View>
      )}
    </Formik>
  );
}
