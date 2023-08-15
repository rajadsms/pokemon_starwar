import img from "../../assets/winner.jpg"
import PropTypes from "prop-types";
/**
 * 
 *  @param {object} object.name props
 * @param {object} object.model props
 *  @param {object} object.filmNumber props
 * @param {object} object.maxFilm props
 * @returns {React.Component} return Container
 * 
 */
const Container=({name,model,filmNumber, maxFilm})=>{
    return(
        <div className="continer">
            <div className="leftSide">
                <div>{name}</div>
                <div>Model</div>
                <div>{model}</div>
            </div>
            <div className="rightSide">
                <div>Number of Films</div>
                <div className="filmCount">
                <span>{filmNumber}</span>
                {maxFilm===filmNumber?<img src={img} width={50} height={50} alt="winner"></img>:""}
                </div>
                
            </div>
           
        </div>
    )
}
Container.propTypes = {
    name:PropTypes.string.isRequired,
    model:PropTypes.string.isRequired,
    filmNumber:PropTypes.number.isRequired,
    maxFilm:PropTypes.number.isRequired,
  };
  Container.defaultProps = {
    name:PropTypes.string,
    model:PropTypes.string,
    filmNumber:PropTypes.number, 
    maxFilm:PropTypes.number,
  };
export default Container;