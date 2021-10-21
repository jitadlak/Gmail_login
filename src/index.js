import React from 'react';
import {View, Text} from 'react-native';
import {useGetAllPostQuery} from './services/posts';

const index = () => {
  const response = useGetAllPostQuery();
  console.log(response);
  console.log('ayya')
  return (
    <View>
      <Text>{response.data}</Text>
      <Text>ok</Text>
    </View>
  );
};

export default index;
