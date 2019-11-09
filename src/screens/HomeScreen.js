import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Card, CardItem,  Text, Button, Body } from 'native-base';



import  AppHeader from '../components/AppHeader'
import  AppFooter  from '../components/AppFooter'
import Geolocation from '@react-native-community/geolocation';
import { getClimate } from '../store/actions/climate';
import ImagePrevisao from '../../assets/previsao.png'


class HomeScreen extends Component{


    constructor(){
        super();
        this.state = {
            lat:null,
            lng:null
        }
    }


      findCoordinates = () => {
        Geolocation.getCurrentPosition(info => 
            this.props.dispatchCoordinates({lat:info.coords.latitude, lng:info.coords.longitude})
            );
        
      };


    render(){
        return (
            <Container>
                <AppHeader />
                    <Content>
                        <Card>
                            <CardItem cardBody>
                                <Image source={ImagePrevisao} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                
                                <Body>
                                <Button block light onPress={this.findCoordinates}>
                                    <Text>Consultar dados do Clima</Text>
                                </Button> 
                                </Body>
                            </CardItem>


                            {this.props.lat && (
                                <>
                                    <CardItem><Text>{`Latitude: ${this.props.lat}`} </Text></CardItem>
                                    <CardItem><Text> {`Longitude: ${this.props.lng}`} </Text></CardItem>
                                    <CardItem><Text>{`Pressão: ${this.props.pressure}`} </Text></CardItem>
                                    <CardItem><Text>{`Temp. Média: ${this.props.temp - 273.15}ºC`} </Text></CardItem>
                                    <CardItem><Text>{`Temp. Max: ${this.props.temp_max - 273.15}ºC`} </Text></CardItem>
                                    <CardItem><Text>{`Temp. Min: ${this.props.temp_min - 273.15}ºC`} </Text></CardItem>
                                    <CardItem><Text>{`Umidade: ${this.props.humidity}%`} </Text></CardItem>
                                </>
                            )}
                            
                        </Card>
                    </Content>
                <AppFooter />
            </Container>
        )
    }
}

const mapStateToProps = ({ clima }) => {
    return {
        lat: clima.lat,
        lng: clima.lng,
        humidity: clima.humidity,
        temp: clima.temp,
        temp_max: clima.temp_max,
        temp_min: clima.temp_min,
        pressure: clima.pressure
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchCoordinates: payload => dispatch(getClimate(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})