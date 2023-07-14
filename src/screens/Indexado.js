import { Link } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Indexado = () => {
  return (
    <View>
        <Text>
            Indexado
        </Text>
        <Link to={{ screen: 'Home'}}>
          Go to HOME
        </Link>
    </View>
  )
}

export default Indexado