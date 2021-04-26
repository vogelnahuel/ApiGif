import React, { Fragment,useState } from 'react';
import  PropTypes from 'prop-types'

const AddCategory = (props) => {
     const {categories,setcategories} = props;

    const [inputvalue, setinputvalue] = useState("");

    const handleChange = (e) => {
        setinputvalue(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if(inputvalue.trim().length>2)
        {
            setcategories( [inputvalue,...categories] );
            setinputvalue('');
        }
       
       
    }

    return ( <form onSubmit={handleSumbit}>
            
                <input
                    type="text"
                    value={inputvalue}
                    onChange={handleChange}
                    
                    
                  />

            </form> 
    );
}

AddCategory.propTypes ={
    setcategories : PropTypes.func.isRequired
}
 
export default AddCategory;