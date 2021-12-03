import {useSelector} from "react-redux"

function Header() {
const color = useSelector(state => state.color.value)



const count = useSelector(state => state.count.value)

  return (
    <div className="header">
      <h1 style={{color}}>REDUX Project</h1>
      <h3> kooi count is {count}</h3>
    </div>
  );
}

export default Header;
