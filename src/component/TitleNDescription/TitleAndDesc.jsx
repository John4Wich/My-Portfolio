import React from 'react';

const TitleAndDesc = ({title,desc}) => {
    return (
        <div>
            <h2 className='text-[#EA4334] text-[12px] font-[600]'>{title}</h2>
            <p className='text-[24px] font-bold'>{desc}</p>
        </div>
    );
}

export default TitleAndDesc;
