import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth,email,password)
            }
            catch (err) {
                console.log('got error', err.message);
            }
        }
    }
    return (
        <View className='flex-1 bg-white' style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className='flex'>
                <View className='flex-row justify-start'>
                    <TouchableOpacity className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4' onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon size='20' color='black' />
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-center'>
                    <Image source={require('../assets/Images/signup.png')} style={{ height: 110, width: 165 }} />
                </View>
            </SafeAreaView>
            <View className='flex-1 bg-white px-8 pt-8' style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View className='form space-y-2'>
                    <Text className='text-gray-700 ml-4 '>Full Name</Text>
                    <TextInput className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-2'
                        placeholder='Enter the Name'
                    />
                    <Text className='text-gray-700 ml-4 '>Email</Text>
                    <TextInput className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-2'
                        value={email}
                        onChangeText={value => setEmail(value)}
                        placeholder='Enter the Email'
                    />
                    <Text className='text-gray-700 ml-4 '>Password</Text>
                    <TextInput className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5'
                        secureTextEntry
                        onChangeText={value => setPassword(value)}
                        placeholder='Enter the password'
                    />
                    <TouchableOpacity className='flex items-end mb-5'>
                        <Text className='text-gray-700'>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl' onPress={handleSubmit}>
                        <Text className='font-xl font-bold text-center text-gray-700'>Signup</Text>
                    </TouchableOpacity>
                </View>
                <Text className='text-xl text-gray-700 font-bold text-center py-5'>
                    Or
                </Text>
                <View className='flex-row justify-center space-x-12'>
                    <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
                        <Image source={require('../assets/Icons/google.png')} className='w-10 h-10' />
                    </TouchableOpacity>
                    <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
                        <Image source={require('../assets/Icons/apple.png')} className='w-10 h-10' />
                    </TouchableOpacity>
                    <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
                        <Image source={require('../assets/Icons/facebook.png')} className='w-10 h-10' />
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-center mt-7'>
                    <Text className='font-semibold text-gray-500'>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className='font-semibold text-yellow-500'>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUpScreen