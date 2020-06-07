import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#ffd600',
  },

  header: {
    flexDirection: 'row',
    paddingVertical: 24,
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  backButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  backButtonText: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#365999',
    marginLeft: 5,
  
  },


  incident: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 1,
    backgroundColor: '#f5f5f6',
    marginBottom: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },


  scrollImg: {
    padding:0,
    paddingTop:32,
  

  },
  
  pokemonImg:{
    width: 200,
    height: 170,
    padding:0,
    margin:0,


  },

  incidentDetails: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#f5f5f6',
    marginBottom: 8,
    marginTop: 8,

  },

  incidentId: {
    marginTop: 40,
    fontSize: 15,
    marginBottom: 0,
    color: '#002171',
    fontFamily: 'Roboto_700Bold',
  },

  incidentName: {
    marginTop:0,
    fontSize: 35,
    marginBottom: 16,
    color: '#002171',
    fontFamily: 'Roboto_700Bold',
  },

  incidentProperty: {
    fontSize: 17,
    color: '#737380',
    fontFamily: 'Roboto_400Regular',
    marginTop: 16,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 21,
    color: '#41414d',
    fontFamily: 'Roboto_500Medium',
  },

  abilityView:{
    flexDirection: 'row',
  }

});