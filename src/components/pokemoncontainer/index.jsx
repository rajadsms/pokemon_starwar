import PropTypes from "prop-types";

/**
 *  @param {object} object.name props
 * @returns {React.Component} return PokemonContainer
 * 
 */
const PokemonContainer=({name})=>{
    return(
        <div className="continer pokemon">
            <div className="leftSide">
                <div>{name}</div>
            </div>
                
            </div>
    )
}
PokemonContainer.propTypes = {
    name:PropTypes.string.isRequired,
  };
  PokemonContainer.defaultProps = {
    name:PropTypes.string,
  };
export default PokemonContainer;