import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const HomeScreen = () => {
    const handleLogout = async() => {
      await signOut(auth);
    }
  return (
    <SafeAreaView className='flex-1 flex-row justify-center items-center'>
      <Text className='text-lg'>Home Page - </Text>
      <TouchableOpacity className='p-1 bg-red-400 rounded-lg' onPress={handleLogout}>
        <Text className='text-white text-lg font-bold'>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen