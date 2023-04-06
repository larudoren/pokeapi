import React from 'react';
import {searchIcon} from '../utils/icons';

export default class Modal extends React.Component{

  constructor(props){
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(){
    this.props.onHandleModal();
  }
  render(){
    const pokemon = this.props.pokemon;
    const colors = ['#FC6B6E','#2196F3','#094BE8','#2196F3','#3ED1E0','#CF9B48'];
 
    return(
      <div className='modal'>
        <button className='modal__close' onClick={this.handleModal}>Close X</button>
        <div className='modal__content'>
          <div className="modal__content-features" style={{backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})`}}>
            <div className="modal__content-featuresRight">
              {
                  pokemon.types.map(({ type }) => (
              <span key={type.name} className='modal__content-featuresHabitat'>
                <img className='modal__content-featuresImage' src={searchIcon(type.name)} alt={type.name} />
                {type.name}
              </span>
             
                  ))
            }
            </div>
          </div>
          <div className="modal__content-description">
            <img className='modal__content-descriptionImage' src={pokemon.sprites['front_default']} alt="" />
            <h3 className='modal__content-descriptionTitle'>{pokemon.name}</h3>
          </div>
          
            <div className="modal__tabs">
                <div className="modal__tab">
                    <input type="radio" name="css-tabs" id="tab-about" checked className="modal__tab-switch" />
                    <label htmlFor="tab-about" className="modal__tab-label">About</label>
                    <div className="modal__tab-content">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Height</td>
                                    <td>
                                        {pokemon.height} "
                                    </td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>
                                        {pokemon.weight} lbs
                                    </td>
                                </tr>
                                <tr>
                                    <td>Abilities</td>
                                    <td>
                                    { 
                                        pokemon.abilities.map(({ability})=> (
                                        <span key={ability.name}>{ability.name} </span>
                                        ))
                                    }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal__tab">
                    <input type="radio" name="css-tabs" id="tab-stats" checked className="modal__tab-switch" />
                    <label htmlFor="tab-stats" className="modal__tab-label">Base Stats</label>
                    <div className="modal__tab-content">
                    { 
                        pokemon.stats.map((stat, index)=> (
                        <div className='modal__content-otherStat' key={stat.stat.name}>
                            <div className='modal__content-otherStatContent'>
                            <span className='modal__content-otherStatContentPower'>{stat.stat.name}</span>
                            <span className='modal__content-otherStatContentValue'>{stat.base_stat}</span>
                            </div>
                            <div className='modal__content-otherStatTimeLine'>
                            {
                                stat.base_stat >= 100 ?  
                                <div className='modal__content-otherStatTimeLineStat' style={{width: '100%', backgroundColor: `${colors[index]}`}}></div> :
                                <div className='modal__content-otherStatTimeLineStat' style={{width: `${stat.base_stat}%`, backgroundColor: `${colors[index]}`}}></div>
                            }
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <div className="modal__tab">
                    <input type="radio" name="css-tabs" id="tab-evolution" checked className="modal__tab-switch" />
                    <label htmlFor="tab-evolution" className="modal__tab-label">Evolution</label>
                </div>
                <div className="modal__tab">
                    <input type="radio" name="css-tabs" id="tab-move" checked className="modal__tab-switch" />
                    <label htmlFor="tab-move" className="modal__tab-label">Move</label>
                </div>
            </div>
        </div>
      </div>
    )
  }
}