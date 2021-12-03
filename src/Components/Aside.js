import {useSelector, useDispatch} from "react-redux" 
import  randomColor from "randomcolor"
import {change_color} from "../redux/color/colorSlice"



function Aside() {

    const color = useSelector(state => state.color.value)
    const dispatch = useDispatch()
// for give change state with action update state or need to undestant 
    const changeColor =()=>{
        dispatch(change_color({
          color: randomColor()
        })

        )
      }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2> 
      <button onClick={changeColor}>Change Color</button> 
    </div>
  );
}

export default Aside;
