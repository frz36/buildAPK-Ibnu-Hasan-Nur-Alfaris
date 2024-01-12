import React, {useState} from 'react'
import { Text, SafeAreaView, Button, Image, Alert, TextInput, StyleSheet, View, TouchableOpacity,ScrollView } from 'react-native';
import {LikeButton} from '../../components/atomics/index'
import {DislikeButton} from '../../components/atomics/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../../components/AssetExample';

const Separator = () => <View
style={styles.separator} />;


export default function Portofolio() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [dislike, setDislike] = useState(0);
  const [isDislike, setIsDislike] = useState(0);

  const handleLike = () => {
    if (isLike) {
      setLike(like -1);
    } else {
      setLike(like + 1);
    }
    setIsLike(!isLike);
  }

  const handleDislike = () => {
    if (isDislike) {
      setDislike(dislike -1);
    } else {
      setDislike(like + 1);
    }
    setIsDislike(!isDislike);
  }

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
    <Image
        style={styles.Image}
        source={require('../../assets/profile.webp')}
      />
      <Text style={styles.title}>
        Ibnu Hasan Nur Alfaris
      </Text>
      <Text style={styles.paragraph}>
        Saya seorang desainer yang berfokus pada desain UI Web dan Mobile dan memiliki pengalaman 1+ tahun dalam meningkatkan pengalaman pengguna dan interface, dengan menguasai berbagai software seperti Figma, CorelDRAW, Adobe Photoshop. saya memiliki portofolio yang cukup banyak, Ambisius dan suka menyelesaikan masalah dengan tim. 
      </Text>
      <Button
        style= {styles.buttonContainer}
        title="Contact Me"
        color="purple"
        onPress={() => {Alert.alert('Email : farizsaero@gmail.com')}}
      />
      <Text style={styles.subtitle}>Recent Project</Text>
      <View style={styles.projectContainer}>
      <Image
        style={styles.Imagecard}
        source={require('../../assets/cbe8bs.png')}
      />
      <View style={styles.descContainer}>
      <View style={styles.textContainer}>
            <Text style={styles.header2}>Ngekost</Text>
          <Text style={styles.header3}>Mobile Apps</Text>
      </View>
      
      <View style={styles.likedislike}>
      <LikeButton/>
      <DislikeButton/>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
       <Image
        style={styles.Icon}
        source={require('../../assets/arrow-small-right.png')}
      />
      </TouchableOpacity>
      </View>
      
      </View>
      <View style={styles.projectContainer}>
      <Image
        style={styles.Imagecard}
        source={require('../../assets/bs82.png')}/>
      <View style={styles.descContainer}>
      <View style={styles.textContainer}>
            <Text style={styles.header2}>Skybird</Text>
          <Text style={styles.header3}>Mobile Apps</Text>
      </View>
      <View style={styles.likedislike}>
      <LikeButton/>
      <DislikeButton/>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
       <Image
        style={styles.Icon}
        source={require('../../assets/arrow-small-right.png')}
      />
      </TouchableOpacity>
      </View>
      
      </View>

      <View style={styles.projectContainer}>
      <Image
        style={styles.Imagecard}
        source={require('../../assets/78f32y.png')}/>
      <View style={styles.descContainer}>
      <View style={styles.textContainer}>
            <Text style={styles.header2}>Netspace</Text>
          <Text style={styles.header3}>Landing Page</Text>
      </View>

      <View style={styles.likedislike}>
      <LikeButton/>
      <DislikeButton/>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
       <Image
        style={styles.Icon}
        source={require('../../assets/arrow-small-right.png')}
      />
      </TouchableOpacity>
      </View>
      
      </View>
          
    </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  projectContainer:{
    marginBottom: 16,
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  descContainer:{
  flex: 1,
  flexDirection:'row',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  },

  likedislike:{
    flexDirection: 'row',
    gap: 2,
  },

  textContainer:{
    
  },
  title: {
    margin: 6,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  paragraph: {
    margin:20,
    marginTop: 6,
    fontSize: 12,
    color: 'grey',
    fontWeight: '200',
    textAlign: 'center',
    justifyContent: 'center'
  },
  header2: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: "justify",
    justifyContent: 'center',
  },
  header3: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'grey',
  },
  Image: {
    marginTop: 20,
    height: 128,
    width: 128,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 200,
  },
    card: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: 'white',
    padding: 12,
  },
  subtitle: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 0,
    fontSize: 20,
    padding: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  Imagecard: {
    marginTop: 0,
    height: 190,
    width: 290,
    resizeMode: 'stretch',
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    marginTop: 5,
    padding: 10,
    maxHeight: 50,
    maxWidth: 80,
    borderRadius: 200,
  },
  Icon: {
    height: 24,
    width: 24,
    resizeMode: 'center'
  },
});
