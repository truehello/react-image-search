import React from 'react'

const Searchbar = ({ setSearchQuery }) => {

    const handleChangeAndEnter = e => {
       
        if (e.key === 'Enter') {
            setSearchQuery(e.target.value);
         }
         return
      }

    return(
        <>
            <input 
            className="w-full shadow-inner p-4 border-0 text-gray-700 rounded bg-gray-300" 
            type="text" 
            name="search" 
            placeholder="Your search starts here"
            onKeyPress={handleChangeAndEnter}

             />
        </>
    )

}

export default Searchbar