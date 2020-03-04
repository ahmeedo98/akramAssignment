import { StyleSheet, Platform } from 'react-native';
import '../global';
import { Row } from 'native-base';

const CARD_HEIGHT = global.height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: { ...StyleSheet.absoluteFillObject, flex: 1, zIndex: -1, elevation: 1, position: 'absolute', bottom: 300 },

  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: global.width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  // markerWrap: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // marker: {
  //   width: 8,
  //   height: 8,
  //   borderRadius: 4,
  //   backgroundColor: 'rgba(130,4,150, 0.9)',
  // },
  // ring: {
  //   width: 24,
  //   height: 24,
  //   borderRadius: 12,
  //   backgroundColor: 'rgba(130,4,150, 0.3)',
  //   position: 'absolute',
  //   borderWidth: 1,
  //   borderColor: 'rgba(130,4,150, 0.5)',
  // },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  marker: {
    position: 'absolute', // <-- moved from ring
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
  backgroundImage: {
    width:'100%',
    height:'100%',
    position:'absolute',
  },
  book1: {
    alignItems: 'center',
    backgroundColor: '#e20787',
    padding: 10,
    margin: 30,
    flex:1,
    borderRadius:10,
    top:50,
  },
  book2: {
    alignItems: 'center',
    backgroundColor: '#fe912a',
    padding: 10,
    margin: 30,
    flex:1,
    borderRadius:10,
    top:25,
  },
  book3: {
    alignItems: 'center',
    backgroundColor: '#7c0700',
    padding: 10,
    margin: 30,
    flex:1,
    borderRadius:10,
    bottom:10,
  },
  bookshelf:{
  },
  slider:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
  },
  bookButton:{
    flex:1,
    backgroundColor: 'white',
    padding: 20,
    flex:1,
    borderRadius:10,
    bottom:25,
  },
  bookText:{
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:18,
    width:100,
  }

});
