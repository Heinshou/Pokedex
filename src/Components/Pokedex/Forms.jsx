<<<<<<< HEAD
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

=======
import React from 'react'


const Forms = ({setPokeSearch, typeList, setTypeFilter}) => {
    
    const changeForm = e => {
        setPokeSearch(e.target.value)
    }

    const changeValue = e =>{
        setTypeFilter(e.target.value)
    }
  return (
    <div className='container-input search-input'>
        <form className='form-home'>
            <input 
            placeholder='Look for your Pokemon' 
            type="text"
            onChange={changeForm}
            />
        </form>
        <select className='select' onChange={changeValue}>
            <option value='All Pokemons'>All Pokemons</option>
            {
                typeList?.map(type => (
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>
    </div>
  )
}

>>>>>>> ed2432d85d4a26740789c999b223713817323883
export default Forms