
import './App.css';
import Operating from './component/Assign1.jsx';
// import {Navbar ,Link,Button1} from './component/Assign2';
function App() {

let mobile=["Android","Blackberry","iphone","Window phone"]
let newmobile=mobile.map((mobiles)=>
{
  return<li>{mobiles}</li>

})
let manf=["Samsung","Htc","Micromax","Apple"]
let newmanf=manf.map((manf1)=>
{
  return<li>{manf1}</li>

})


  return (
    <div className="App">
      <Operating first={newmobile} second={newmanf}/>
      
      {/* <Navbar/> */}
      {/* <Link/> */}
      {/* <Button1/> */}
      
      
    </div>
  );
}

export default App;
