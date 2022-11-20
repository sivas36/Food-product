import './App.css';
import { useState } from "react"; 
import Header from './Header/header';
import Card from './Card/Card';
function App() {

  let[count,setCount]= useState(0);
  
  const cardDetails =[
    {
      src:"https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg",
      name:"Food Product",
      price:'$90',
    

    },
      {
      src:"https://www.mamaxpert.com/pub/media/magefan_blog/Food-Items-To-Avoid-After-Pregnancy.jpg",
      name:"Food Product",
       price:'$70'

    },{
      src:"https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe-500x375.jpg",
      name:'Special item',
       price:'$60'
    },
    {
      src:"https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg",
      name:'Food prodcut',
       price:'$30'
    },
      {
      src:"https://www.simplyrecipes.com/thmb/WXzv7XkTQvFEpYnyyk4x5HRMtVc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Horizontal-1b86ef1e115444ba8b6fb216f2810c7c.jpg",
      name:'Popular item',
       price:'$30'
    }

  ]
  
  const  onAddHandler = (cart) =>{
        console.log(cart);
        setCount(cart+count);
        
  }

    
  const  onRemoveHandler = () =>{
   
        setCount(--count);
        
  }
   



  return (
    <div className="App">
         <Header cartcount = {count}/>
          <div class="inner cover" style={{backgroundColor:"black",color:"white",height:"300px",padding:"90px 0px 0px 0px",textAlign:'center'}}>
            <h1 class="cover-heading">Shop in style</h1>
            <p class="lead">with this shop homepage template</p>
      
          </div>
         <div className="container" style={{marginTop:"40px"}}>
              <div className="row">
                {cardDetails.map((el)=>{
                 return <Card onAdd={onAddHandler} onRemove={onRemoveHandler} name={el.name} src={el.src} price={el.price}/>
               })
               } 

              
         </div>
         </div>
      
    </div>
  );
}


export default App;


//CI-CD - CONTINOUS INTEGRATION AND DEPLOYMENT