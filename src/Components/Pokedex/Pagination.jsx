import React from 'react'


const Pagination = ({ arrayPages, currentPage, setCurrentPage, quantityPages }) => {

  const prevPage = () => {
    if (currentPage - 1 === 0) {

      setCurrentPage(quantityPages)
    } else {

      setCurrentPage(currentPage - 1)
    }
  }


  const nextPage = () => {

    if (currentPage + 1 > quantityPages) {
      setCurrentPage(1)
    } else {

      setCurrentPage(currentPage + 1)
    }
  }

  const changePageTo = n => {
    setCurrentPage(n)
  }

  //EN LAS DOS HORAS DE CLASE DE LA CLASE DE PAGINACION HACE LO DE QUE SE RESALTE LA CLASE EN LA QUE ESTAMOS "2:00:58"
  return (
    <div>
      <div onClick={prevPage}>&#60;</div>
      <ul>
        {
          arrayPages?.map(num => (
            <li onClick={() => changePageTo(num)} key={num} >{num}</li>
          ))
        }
      </ul>
      <div onClick={nextPage}>&#62;</div>
    </div>
  )
}

export default Pagination
