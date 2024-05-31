import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../theme/color';
import ServiceDetail from '../components/ServiceDetail';
import images from '../assets/images';

const data=[
  {pic:<Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={images.harmone_replacement}/>,
  title:'Harmone Replacement',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {pic:<Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={images.weight_loss}/>,
  title:"Weight Loss",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{pic:<Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={images.health_optimization}/>,
  title:"Health Optimization",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{pic:<Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={images.antiaging}/>,
  title:"Anti Aging",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}
]
const Details = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
          backgroundColor: color.light,
        }}
      />
      <Header
        name="Mayab"
        icon={<MaterialIcons name="person-outline" size={25} />}
      />
      <View
        style={{borderBottomColor: color.dark_blue, borderBottomWidth: 1}}
      />
      <View style={{marginTop: 40}}>
        <Text
          style={{textAlign: 'center', fontSize: 45, color: color.dark_blue}}>
          <Text style={{fontWeight: 'bold'}}>Proceed</Text> With The{' '}
          <Text style={{fontWeight: 'bold'}}>Service</Text> You{' '}
          <Text style={{fontWeight: 'bold'}}>Want</Text>
        </Text>
      </View>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        {data.map(eachObject=>{return(
        <ServiceDetail
        onPress={()=>navigation.navigate("Form")}
        onRightArrowPress={() => navigation.navigate("Form")}
          img={eachObject.pic}
          Title={eachObject.title}
          description={eachObject.description}
          fontstyle={{color: color.dark_blue}}
        />
      )})}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
