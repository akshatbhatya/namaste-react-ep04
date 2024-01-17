import React from 'react'

function Searchbar() {

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" />
        <button type='submit'>search</button>
      </form>
    </div>
  )
}

export default Searchbar
