import React, { Component } from 'react';
import { View, Text } from 'react-native';

function Initial({ loading, gif }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 120, color: 'white' }}>...</Text>
    </View>
  );
}

export default Initial
