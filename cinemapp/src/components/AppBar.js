import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as favoritosActions from '../actions/favoritos'


class AppBar extends React.Component {

    togglePg = (pg) =>{
        this.props.togglePg(pg);
    }

    render() {

        const { selectedPg } = this.props.favoritos;
        return (
            <View style={styles.bar}>
                <TouchableHighlight
                    style={selectedPg == 'search'?styles.touchBarSelected:styles.touchBar}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => this.togglePg('search')}>
                    <Text style={styles.textBar}><Icon name="search" size={16} color="#aaa" /> Perquisar</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={selectedPg == 'favoritos'?styles.touchBarSelected:styles.touchBar}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => this.togglePg('favoritos')}>
                    <Text style={styles.textBar}><Icon name="star" size={16} color="#aaa" /> Favoritos</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#eee',
        justifyContent: 'space-evenly',
        flexDirection: 'row'

    },
    touchBar: {
        justifyContent: 'center',
        flex: 1,
        paddingVertical: 20,

    },
    touchBarSelected: {
        backgroundColor:'#fff',
        justifyContent: 'center',
        flex: 1,
        paddingVertical: 20,
    },
    textBar: {
        fontSize: 16,
        textAlign: 'center',
        color:'#aaa'
    }
});
const mapDispatchToProps = dispatch => bindActionCreators(favoritosActions,dispatch);
const mapStateToProps = state => ({
    favoritos:state.favoritos
});
export default connect(mapStateToProps,mapDispatchToProps)(AppBar);
