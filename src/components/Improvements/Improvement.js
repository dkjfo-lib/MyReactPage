const Improvement = function(props){
    return(
        <div className="Improvement">
          <input type="checkbox"></input>
          <p>{props.improvement}</p>
          <br/>
          <strong>Cure</strong>
          <br/>
          {props.cure}
        </div>
    )
} 
export default Improvement