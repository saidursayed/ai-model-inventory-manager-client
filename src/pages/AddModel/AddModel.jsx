import React from "react";
import useAuth from "../../hooks/useAuth";

const AddModel = () => {
    const {user} = useAuth();
    const handleAddModel = (e) => {
        e.preventDefault()
        const form = e.target;
        const addModelData = {
            name: form.name.value,
            framework: form.framework.value,
            useCase: form.useCase.value,
            dataset: form.dataset.value,
            description: form.description.value,
            image: form.image.value,
            createdBy: user.email,
            createdAt: new Date(),
            purchased: 0
        }
        console.log(addModelData)
        fetch('http://localhost:3000/add-model',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addModelData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className="my-5">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddModel}>
            <fieldset className="fieldset">
              <div>
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />
                <label className="label">Framework</label>
                <input type="text" name="framework" className="input" placeholder="Framework" />
                <label className="label">useCase</label>
                <input type="text" name="useCase" className="input" placeholder="useCase" />
                <label className="label">dataset</label>
                <input type="text" name="dataset" className="input" placeholder="dataset" />
                <label className="label">description</label>
                <br />
                <textarea name="description" id="" cols={50}></textarea>
                <br />
                <label className="label">image</label>
                <input type="text" name="image" className="input" placeholder="image" />
               
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
