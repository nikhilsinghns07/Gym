import React from 'react'
import { View, Text ,StyleSheet ,ImageBackground , Dimensions ,ScrollView,Image} from 'react-native'
import {Button} from 'react-native-paper'
import Api from '../component/Api';

import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homepage = ({navigation}) => {
    const adminLogin = async () => {
        const adminToken =  AsyncStorage.getItem('ADMIN_LOGIN_TOKEN')
        // navigation.navigate('Admin')
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys()
        } catch(e) {
            // read key error
        }

        console.log(keys)
        if(adminToken == null ){
            navigation.navigate('Admin')
        }else{
            navigation.navigate('AdminHome')
        }
    }

    const userLogin = () => {
        const userToken = AsyncStorage.getItem('USER_LOGIN_TOKEN')
        if(userToken !== null) {
            navigation.navigate('UserHome')
        }
        else {
            navigation.navigate('UserLogin')
        }
    }
    return (
        <ScrollView>
                <View>
                    <ImageBackground source={require('../assets/img3.jpg')} style={styles.topImg}>
                        <Text style={styles.heading}> Welcome to The Gym </Text>
                        <View style={styles.line}/>
                        <Text style={styles.heading}>Login</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Button style={styles.textInput} mode="contained" color="yellow" onPress={() =>adminLogin()}>Admin</Button>                
                            <Button style={styles.textInput} mode="contained" color="yellow" onPress={() => userLogin()}>User</Button>    
                        </View>
                    </ImageBackground>
                </View>
                <Api />
        </ScrollView>
    )
}

export default Homepage

const styles = StyleSheet.create({
    img:{
        height:windowHeight,
        width:windowWidth
    },
    topImg:{
        padding: 10,
        width:windowWidth,
        height: 190    
    },
    textInput : {
        marginLeft : 18,
        marginRight : 18,
        marginTop : 18
    },
    heading : {
        color:'white',
        fontSize:25,
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:'bold',
        padding: 5,
    },
    line:{
        borderBottomColor:'red',
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:60,
        marginRight:60,
        marginTop:4
    }
})