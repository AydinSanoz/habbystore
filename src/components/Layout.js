import React from 'react';
import Hearth from '../components/icons/FormatListCheckbox';
import {View, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {layout} from '../styles';
import {SearchBar} from './Searchbar';
import {IconButton} from './IconButton';

export function Layout({children, ...props}) {
  return (
    <SafeAreaView style={layout.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={layout.container}>
          <SearchBar {...props} />
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
