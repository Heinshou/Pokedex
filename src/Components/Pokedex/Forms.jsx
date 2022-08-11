import React from 'react'


const Forms = ({setPokeSearch, typeList, setTypeFilter}) => {
    
    const changeForm = e => {
        setPokeSearch(e.target.value)
    }

    const changeValue = e =>{
        setTypeFilter(e.target.value)
    }
  return (
    <div>
        <form className='form-home'>
            <input 
            placeholder='Look for your Pokemon' 
            type="text"
            onChange={changeForm}
            />
        </form>
        <select onChange={changeValue}>
            <option value='All Pokemons'>All Pokemons</option>
            {
                typeList?.map(type => (
                    <option key={type.category} value={type.category}>{type.cateogry}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Forms