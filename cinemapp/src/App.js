import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Searchbar, Subheading, Headline} from 'react-native-paper';

import ListFilmes from './components/ListFilmes';
import AppBar from './components/AppBar';
import {connect} from 'react-redux'

class App extends React.Component {

  state = {
    searchQuery: ''
  }

  render() {

    const onChangeSearch = async value => {
      this.setState({ searchQuery: value })

    };
    const { searchQuery } = this.state;
    const { favoritos } = this.props;
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.header}>
          {
            favoritos.selectedPg == 'search'?(<Headline style={styles.title}>Cinema APP</Headline>):(<Headline style={styles.title}>Cinema APP - Favoritos</Headline>)
          }
          <Subheading>Bem-vindo ao mundo espetacular do cinema</Subheading>
        </View>
        <Searchbar
          style={styles.searchbar}
          placeholder="O que você busca..."
          onChangeText={onChangeSearch}
          value={searchQuery} />

        <ScrollView style={styles.viewList}>
          <ListFilmes title={searchQuery} />
        </ScrollView>
        <AppBar />
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight:'bold'
  },
  header: {
    marginHorizontal: 10,
    marginVertical: 15
  },
  viewList:{
    
  },
  bottomBar:{
    bottom:0
  },
  searchbar:{
    marginHorizontal:10
  }
});
const mapStateToProps = state => ({
  favoritos:state.favoritos
});
export default connect(mapStateToProps,null)(App);
