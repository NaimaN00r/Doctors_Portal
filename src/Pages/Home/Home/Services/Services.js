import React from 'react';
import teeth from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatement',
            description:'ncjdvnhjdbv jdn m okjnjnsn cdsvsjkn  njknkjndsadn',
            icon: teeth,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'ncjdvnhjdbv jdn m okjnjnsn cdsvsjkn  njknkjndsadn ',
            icon: cavity,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whiteining',
            description: 'ncjdvnhjdbv jdn m okjnjnsn cdsvsjkn  njknkjndsadn ',
            icon: whitening,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (

        <div>
            <h1 className='text-6xl text-center font-semibold mt-20 mb-12'>Services</h1>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <Service
                    key={card.id}
                    card={card}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;