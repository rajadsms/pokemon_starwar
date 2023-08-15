import PropTypes from "prop-types";
/**
 * 
 *  @param {object} object.data props
 * @param {object} object.parentClass props
 * @param {object} object.loader props
 * @returns {React.Component} return List
 */
const List=({data,parentClass,loader})=>{
   const listData= data.map((eachData,index)=>{
      return(<div key={index}>{eachData}</div>)
    })
    if(loader){
        return(
            <div className="loader">
            <h1>Loading</h1>
            </div>
        )
    }
    return(
        <div className={parentClass}>{listData}</div>
    )
}
List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    parentClass: PropTypes.string,
    loader:PropTypes.bool
  };
  List.defaultProps = {
    data: [],
    parentClass: "",
    loader:true
  };
export default List;
