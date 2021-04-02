import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Admin from './Admin';
import './AddNew.css'

const AddNew = () => {


    const [imageURL, setImageURL] = useState(null)


    const handleImageChange= event =>{
        const newImageData= new FormData()
        newImageData.set('key', '2db5de09a9ff38405d5b21faec2d1a27')
        newImageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', newImageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        const eventData={
            name: data.name,
            price: data.price,
            weight: data.weight,
            image: imageURL
        };
         fetch('https://immense-scrubland-49493.herokuapp.com/addNew',{
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(eventData)
            })
            .then(res=> console.log('server response'))
        };

        const [state, setState]= useState(true)

        const handleChange=(e)=>{
            if(e.target.value){
                setState(false)
            }
        }


    return (
    <div>
            <Admin/>
        <div className="d-flex align-items-center justify-content-center">
            <form className="p-2 bd-highlight col-example mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="m-3 input-form"  name="name" placeholder="Name" ref={register} onChange={handleChange} /> <br />
                    <input className="m-3 input-form"  name="price" placeholder="Price" ref={register} onChange={handleChange}/> <br />
                    <input className="m-3 input-form"  name="weight" placeholder="Weight" ref={register} onChange={handleChange} /> <br />
                    <input className="m-3 input-form" type="file" name="image"  ref={register} onChange={handleImageChange} /> <br /> 
                    <input disabled={state}  className="m-3 btn btn-primary" type="submit" value="Update" />
            </form>
        </div>

            
     </div>
    );
};

export default AddNew;