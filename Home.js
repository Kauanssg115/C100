import React, { Component } from "react";
import {  View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    ImageBackground,    
    Image,
    TouchableOpacity
} from "react-native";


<View>
    <View style={styles.appTitleText}>
      <Text> Bem Vindo! </Text>
    </View>
    <TouchableOpacity style={styles.routeCard} onPress={() =>
     this.props.navigation.navigate("Agenda")
    }/>
</View>

const styles = StyleSheet.create({
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center",
        textAlign:"center"
        },
        routeCard: {
            flex: 0.25,
            marginLeft: 50,
            marginRight: 50,
            marginTop: 50,
            borderRadius: 30,
            backgroundColor: 'white'
        }
})
