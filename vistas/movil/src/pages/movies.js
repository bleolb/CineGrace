import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import { Card } from 'react-native-elements';
import { openDatabase } from 'react-native-sqlite-storage';
import axios from 'axios';

const API = "http://192.168.0.7:5000/film/pelicula";
const db = openDatabase({ name: 'Cine.db' });

// https://aboutreact.com/example-of-sqlite-database-in-react-native/

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({ peliculas: response.data.datos })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { peliculas } = this.state
        return ( 
            <ImageBackground style = { styles.container } source = { require('../../assets/bg.jpg') } >
                <View style = { styles.overlayContainer } >
                    <View style = { styles.top } >
                        <Text style = { styles.header } > CARTELERA </Text>   
                    </View >

                    <ScrollView vertical = { true } > 
                    {
                        peliculas.map(element =>
                            <Link to = "/movie_detail" key = { element.id }>
                                <Card title = { element.titulo } image = { require('../../assets/film_default.jpg') } onPress={ () => this.storeData(element.id) } />  
                            </Link >
                        )
                    } 
                    </ScrollView>  
                </View > 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)',
    },
    top: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)',
    },
    menuContainer: {
        height: '40%',
       
    }
})