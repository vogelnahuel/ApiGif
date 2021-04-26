import React, { Fragment,useState } from 'react';
import AddCategory from './components/addCategories';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {
  
  const [categories, setcategories] = useState(['Dragon ball']);
  /*const handleButton = (e) => {
    e.preventDefault();
    setcategories(
      [...categories,  'prueba']
    )
  }*/
   
 
  return (
    <>

      <h2>gifExpertApp</h2>
      <AddCategory
      categories={categories}
       setcategories={setcategories}
      />
      <hr/>
     
      <ol>
         {
           categories.map( (category) =>
            <GifGrid 
            key={category}
            category={category} 
            />
           ) 
           /*** en react en las llaves solo se puede hacer codigo que devuelva hago un for no devuelve nada */
         }
      </ol>
    </>

  );
}

export default GifExpertApp;
