import React from 'react';
import { View, Image, Text} from 'react-native';
import {getFilmesByName} from '../api';
import { List, Colors,Subheading  } from 'react-native-paper';


import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as favoritosActions from '../actions/favoritos'

import notFound from '../assets/img/notFoundMovie.png';


class ListFilmes extends React.Component{
    state = {
        listFilmes: [] 
    }
        
      async componentDidUpdate(prevProps){
        if(this.props.title !=prevProps.title){
            const retorno = await getFilmesByName(this.props.title)
            if(retorno.data.Response && retorno.data.Search){
                this.setState({listFilmes:retorno.data.Search})
                console.log(retorno.data.Search);
            }
        }
        
      }
      
      addFavoritos = (filme) =>{
        this.props.addFilme(filme);
      }
    render(){
        const {listFilmes} = this.state;
        const {list_favoritos,selectedPg} = this.props.favoritos;

        if(list_favoritos.length || listFilmes.length)
            return(
                <View>
                    {
                    (selectedPg == 'search')?
                    listFilmes.map((filme,key)=>{
                        const iconName = list_favoritos.find((ele)=>ele.Title == filme.Title)?'star':'star-outline';
                        return (
                        <List.Item
                        title={filme.Title}
                        description={"Ano: "+filme.Year}
                        left={props => <List.Icon {...props}  icon="movie" />}
                        right={props => <List.Icon {...props} color={iconName == 'star'?Colors.amber500:''} icon={iconName} />}
                        key={key}
                        onPress={()=>this.addFavoritos(filme)}
                        />
                        )
                    }):list_favoritos.map((filme,key)=>(
                        <List.Item
                        title={filme.Title}
                        description={"Ano: "+filme.Year}
                        left={props => <List.Icon {...props}  icon="movie" />}
                        right={props => <List.Icon {...props} color={Colors.amber500}  icon='star' />}
                        key={key}
                        onPress={()=>this.addFavoritos(filme)}
                        />
                        )
                    )
                    }
                    
                </View>
            );
        else
            return(
                <View>
                    <View style={{alignItems:'center',justifyContent:'center',height:'60%'}}>
                    <Image source={notFound}  style={{resizeMode:'contain',width:'70%'}}/>
                    </View>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{color:'#bbb', fontSize:16,textAlign:'center'}}>Nenhum filme encontrado, continue procurando...</Text>
                    </View>
                </View>
                
            );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(favoritosActions,dispatch);
const mapStateToProps = state => ({
    favoritos:state.favoritos
});
export default connect(mapStateToProps,mapDispatchToProps)(ListFilmes);