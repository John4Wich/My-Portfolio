import React from 'react';
import "./service.css";

const Service = ({data}) => {
    return (
        <div className='ser-item border-[1px] border-[#171512] basis-[calc(50%-50px)] p-[2rem]'>
            <p className='text-[2rem] font-[700] leading-[2.5rem] pb-[1rem] text-[rgb(22, 21, 19)]'>{data.title}</p>
            <p className='text-[1.125rem] font-[500] leading-[2rem] text-gray-800'>{data.content}</p>
        </div>
    );
}

export default Service;
