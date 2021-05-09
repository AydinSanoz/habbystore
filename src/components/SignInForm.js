import {Formik} from 'formik';
import React from 'react';
import {Button, View} from 'react-native';
import {Error} from './error';
import FieldInput from './FieldInput';
import * as Yup from 'yup';
import TextSign from './TextSign';
import {IconButton} from './IconButton';

export function SignInForm({children, ...props}) {
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={{backgroundColor: '#fff', flex: 1}}>
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

          <Button onPress={handleSubmit} title="Login" />
          <TextSign {...props} />
        </View>
      )}
    </Formik>
  );
}
