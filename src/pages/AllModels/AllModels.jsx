import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../../components/ModelCard/ModelCard';

const AllModels = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='py-20 px-10 bg-[#E5E5FD]'>
             <div className='text-center mb-12'>
                <h2 className='font-bold text-5xl mb-2'>Explore <span className='text-indigo-600'>AI Models</span></h2>
                <p className='text-gray-500 text-lg'>Browse our complete collection of AI models</p>
             </div>
            <div className='grid grid-cols-3 gap-4'>
                {data.map(model=><ModelCard key={model._id} model={model}></ModelCard>)}
            </div>
        </div>
    );
};

export default AllModels;