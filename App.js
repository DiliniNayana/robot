import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground, Dimensions, TextInput, Animated, Modal, ScrollView, TouchableOpacity} from 'react-native';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = ()=>{
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue,{
        toValue: 1,
        duration: 300, 
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue,{
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  }
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerW}>
        <View style={styles.containerA}>
          <View style={styles.header2}>
            <View style={styles.header}>
              <View style={styles.header1}>
                <View style={styles.header3}>
                  <View style={styles.headerItems}>
                    <View>
                      <Image source={require('./assest/logo.png')} style={styles.logo}/>
                    </View>
                    <View>
                      <View style={styles.user}>
                        <Text>T</Text>
                      </View>
                      <View style={styles.searchBar}>
                        <Image source={require('./assest/search.png')}style={styles.search} />
                        <TextInput placeholder='Your Robot' />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              {/* <product------------------------------------------------------------------------------------------------------------!/> */}
              <View style={styles.productBG1}>
                <ImageBackground source={require('./assest/productBG.png')} style={styles.productBG} >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.stockNo}>8</Text>
                    {/* <Modal---------------------------------------------------------------------------------------------------------! /> */}
                    <ModalPoup visible={visible}>
                      <View style={{alignItems: 'center'}}> 
                      <View style={styles.header_1}>
                          <TouchableOpacity onPress={() => setVisible(false)}>
                            <Image source={require('./assest/closed.png')} style={{height: 13, width: 13}} />
                          </TouchableOpacity>
                        </View>
                       </View>
                    </ModalPoup>
                   {/* <Modal end----------------------------------------------------------------------------------------------------------! /> */}
                    <TouchableOpacity onPress={() => setVisible(true)}>
                      <Image source={require('./assest/fullScreen.png')} style={styles.fullScreen} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image source={require('./assest/robot.png')}  style={styles.robot} />
                  </View>
                  <Text style={styles.name}>R-S-01</Text>
                  <Text style={styles.price}>LKR 5,000.00</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.button1}>Add to Cart</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.productBG1}>
                <ImageBackground source={require('./assest/productBG.png')} style={styles.productBG} >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.stockNo}>8</Text>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                      <Image source={require('./assest/fullScreen.png')} style={styles.fullScreen} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image source={require('./assest/robot.png')}  style={styles.robot} />
                  </View>
                  <Text style={styles.name}>R-S-01</Text>
                  <Text style={styles.price}>LKR 5,000.00</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.button1}>Add to Cart</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </View>
             {/* < end of product----------------------------------------------------------------------------------------------------!/> */}
          </ScrollView>
          {/* <Modal---------------------------------------------------------------------------------------------------------! /> */}
          <ModalPoup visible={visible}>
            <View style={{alignItems: 'center'}}> 
              <View style={styles.header_1}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Image source={require('./assest/closed.png')} style={{height: 13, width: 13}} />
                </TouchableOpacity>
              </View>
            </View>
          </ModalPoup>
          {/* <Modal end----------------------------------------------------------------------------------------------------------! /> */}
          <View style={styles.cartViewMain}>
            <TouchableOpacity style={styles.cartViewMain} onPress={() => setVisible(true)} >
              <View style={styles.cart1}>
                <Text style={styles.cartViewText}>My Cart</Text>
                <Text style={styles.cartViewText}> (</Text>
                <Text style={styles.cartViewText}>2</Text>
                <Text style={styles.cartViewText}>)</Text>
                <Image source={require('./assest/cart.png')} style={styles.cart}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  containerW: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },
  containerA: {
    position: 'absolute',
    width: '97.5%',
    height: '98.6%',
    backgroundColor: '#EBEBEB',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '96%',
    backgroundColor: '#006584',
  },
  header1: {
    backgroundColor: '#03A497',
    height: '100%',
    width: '80%',
    borderTopEndRadius: 140,
  },
  header3: {
    backgroundColor: '#fff',
    height: '100%',
    width: '96%',
    borderTopEndRadius: 140,
  },
  header2: {
    backgroundColor: '#fff',
    height: '15%',
    width: '100%',
  },
  logo: {
    height: 180,
    width: 210,
    marginTop: -30,
    marginLeft: -25,
  },
  headerItems: {
    flexDirection: 'row',
  },
  user: {
    borderRadius: 60,
    backgroundColor: '#fff',
    marginLeft: 160,
    marginTop: 8,
    padding: 5,
    paddingHorizontal: 10,
  },
  searchBar: {
    backgroundColor: '#EBEBEB',
    borderRadius: 17,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    height: 15,
    width: 15,
    marginLeft: 45,
    marginRight: 5,
  },
  productBG: {
    height: 195,
    width: 185,
  },
  productBG1: {
    height: 200,
    width: 185,
    margin: 3,
    marginTop: 5,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 17,
  },
  stockNo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 4,
  },
  fullScreen: {
    marginLeft: 130,
    height: 20,
    width: 20,
    marginTop: 10,
  },
  robot: {
    height: 90,
    width: 50,
    marginLeft: 60,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#CA3400',
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: '500',
    color: '010101',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#03A497',
    borderRadius: 17,
    paddingHorizontal: 5,
    paddingVertical: 7,
    marginHorizontal: 3,
  },
  button1: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  cart1: {
    backgroundColor: '#CA3400',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 17,
    elevation: 5,
  },
  cartViewMain: {
    marginLeft: 100,
    flexDirection: 'row',
    marginBottom: 8,
  },
  cart: {
    height: 30,
    width: 30,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 4,
  },
  cartViewText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginTop: 6,
  },
  // <Modal style..................................................................................................!/>
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
  },
  header_1: {
    marginLeft: 260,
    marginBottom: 5,
  },
  
  // <End of Modal style...........................................................................................!/>
})