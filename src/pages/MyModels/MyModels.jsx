import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ModelCard from '../../components/ModelCard/ModelCard';

const MyModels = () => {
    const {user} = useAuth()
    const [models, setModels] = useState([])
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:3000/my-models?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setModels(data)
        })
    },[user])
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 ">
            {models.map((model) => (
              <ModelCard key={model._id} model={model}></ModelCard>
            ))}
          </div>
        </div>
    );
};

export default MyModels;