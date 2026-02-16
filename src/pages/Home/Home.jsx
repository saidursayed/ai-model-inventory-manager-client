import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../../components/ModelCard/ModelCard';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            
            <div className='grid grid-cols-3 gap-4'>
                {data.map(model=><ModelCard key={model._id} model={model}></ModelCard>)}
            </div>
        </div>
    );
};

export default Home;