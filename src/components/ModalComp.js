import React from 'react';
import {Modal, ModalContent} from 'react-native-modals';
import {Button, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {handleModal} from '../redux/reducers';

export function ModalComp(props) {
  const {isModalVisible} = useSelector(state => state.search);
  const dispatch = useDispatch();
  return (
    <View style={modal.container}>
      <Modal
        visible={isModalVisible}
        onTouchOutside={() => {
          dispatch(handleModal(!isModalVisible));
        }}>
        <ModalContent>{props.children}</ModalContent>
        <Button
          title="Show Modal"
          onPress={() => {
            dispatch(handleModal(!isModalVisible));
          }}
        />
      </Modal>
    </View>
  );
}

const modal = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },
});
