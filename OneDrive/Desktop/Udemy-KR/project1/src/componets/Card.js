import React from 'react'

const Card = ({name,email,id}) => {
    // const {name,email,id}=props
  return (
    <div className='tc bg-light-green did br3 pa3 ma5 grow bw3 shadow-3'>
        <img src={`https://robohash.org/${id}?150x150`} alt="robots" />
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card