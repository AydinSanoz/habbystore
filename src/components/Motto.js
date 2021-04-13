import React from 'react';
import {View, Text, Dimensions} from 'react-native';

export function Motto(props) {
  return (
    <View style={{width: Dimensions.get('window').width}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
        REINVENT YOUR QUALITY WITH TEKIS LASTIK
      </Text>
      <Text style={{fontSize: 20, textAlign: 'justify', margin: 10}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        provident explicabo a fugiat aspernatur aut, quae temporibus dolorem
        inventore repellendus, non animi veritatis. Ea dicta, iusto possimus
        repellendus exercitationem vero.
      </Text>
    </View>
  );
}
