import React from 'react'
import {Text, View } from 'react-native';
function BookCount({title, styles, count}) {
  return (
    <View style={styles.footerItem}>
        <Text style={styles.footerItemText}>{title}</Text>
        <Text>{count}</Text>
    </View>
  )
}

export default BookCount