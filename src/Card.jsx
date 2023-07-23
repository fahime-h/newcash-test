import React, { Component } from 'react'
function Card(props) {
    return (
        <>
        <div className='text-center w-full font-display font-normal rounded-lg shadow-md shadow-gray-500 flex flex-col text-gray-500 text-sm md:text-sm sm:text-xs font-normal'>
            <div className='relative bg-sky-600 rounded-t-lg rounded-br-3xl after:content-[""] after:absolute after:left-0 after:w-5 after:h-5 after:bg-sky-600'>
                <img className='rounded-full m-auto my-5 w-1/3 border-sky-600 border-solid border-4 outline outline-3 outline-white' src={props.data.picture.medium} alt="user avatar" />
            </div>
            <div className='p-3 sm:leading-6 leading-8 relative before:content-[""] before:absolute before:left-0 before:top-0 before:rounded-tl-3xl before:bg-white before:w-5 before:h-5'>
                <h2 className='font-semibold text-lg text-gray-900 pb-2'>{props.data.name.title + " " + props.data.name.first + " " + props.data.name.last}</h2>
                <p>{props.data.email}</p>
                <p>{props.data.cell}</p>
                <p>{props.data.location.country + ", " + props.data.location.city + ", " + props.data.location.street.name}</p>
                <p className='text-sky-600'>Register date: {new Date(props.data.registered.date).getFullYear() + "-" + new Date(props.data.registered.date).getMonth() + "-" + new Date(props.data.registered.date).getDay()}</p>
            </div>
        </div>
        </>
    )
}

export default Card