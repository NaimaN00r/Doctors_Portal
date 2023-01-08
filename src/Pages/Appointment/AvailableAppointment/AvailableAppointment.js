import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingMOdal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    //2nd way
    const { data: appointmentOptions = [],refetch,isLoading} = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:4500/appointOptions?date=${date}`)
            const data=await res.json()
            return data;
        }
       
    });
//1st way
    // useEffect(() => {
    //     fetch('http://localhost:4500/appointOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    if(isLoading){
        <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;