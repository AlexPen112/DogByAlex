import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function DogIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={76}
      style={{ marginBottom:530 , marginLeft:165 }}
      color={"#fffaf0"}
    />
  );
}
