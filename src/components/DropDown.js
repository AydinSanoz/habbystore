import * as React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export function DropDown({variations}) {
  const [country, setCountry] = React.useState('us');

  return (
    <View>
      <DropDownPicker
        items={[
          {label: 'genişlkik', value: '10m'},
          {label: 'uzunluk', value: '5m'},
        ]}
        // {[
        //   {
        //     label: 'USA',
        //     value: 'usa',
        //     icon: () => <Icon name="flag" size={18} color="#900" />,
        //     hidden: false,
        //   },
        //   {
        //     label: 'UK',
        //     value: 'uk',
        //     icon: () => <Icon name="flag" size={18} color="#900" />,
        //   },
        //   {
        //     label: 'France',
        //     value: 'france',
        //     icon: () => <Icon name="flag" size={18} color="#900" />,
        //   },
        // ]}
        defaultValue={country}
        placeholder={item => item.label}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: 'red'}}
        onChangeItem={item => setCountry(item.value)}
      />
    </View>
  );
}
