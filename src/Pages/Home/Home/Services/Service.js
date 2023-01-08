import React from 'react';

const Service = ({card}) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
       <figure><img src={icon} alt="Shoes" /></figure>
       <div className="card-body">
        <h1 className='text-center font-semibold text-xl'>{name}</h1>
       <p>{description}</p>
  </div>
</div>
    );
};

export default Service;