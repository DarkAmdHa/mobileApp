import React from 'react'
import { Image, View } from 'react-native'

function UserAvatar() {
  return (
    <View style={{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: 50,
        overflow: "hidden"
    }}>
    <Image source={require('../../assets/avatar.jpg')} style={{
        height: 50,
        width: 50
      }}/>
    </View>
  )
}

export default UserAvatar