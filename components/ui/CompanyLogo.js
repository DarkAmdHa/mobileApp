import React from 'react'
import { Image, View } from 'react-native'
import IconButton from './IconButton'

function CompanyLogo() {
  return (
    <View style={{
        marginBottom: 5,
    }}>

        <IconButton icon="logo-apple" color="#fff" size={50}/>
    </View>
  )
}

export default CompanyLogo