import React, { useState } from 'react'
import { APIROUTE } from '../components/Commonroute'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddItems = () => {
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')
    const navigate=useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        const data = {
            name: name,
            price: Number(price),
            image: image,
            category: category
        }
        await axios.post(`${APIROUTE}items/add-item`, data)
            .then(res => {
                console.log(res.data)
                toast.success("Item added successfully");
              navigate('/')
            })
            .catch(err => {
                console.log(err)
               
            })
        setname("")
        setprice("")
        setimage("")
        setcategory("")
        console.log(data)
    }
    return (
        <>
            <br />
            <div className='w-75 m-auto border'>
                <p className='h2 text-success text-center' >Add-Items</p>
                <form className='p-2' onSubmit={submit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder='' onChange={(e) => setname(e.target.value)} value={name} />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="double" className="form-control" id="floatingPrice" placeholder='' onChange={(e) => setprice(e.target.value)} value={price} />
                        <label htmlFor="floatingPrice">Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingimage" placeholder='' onChange={(e) => setimage(e.target.value)} value={image} />
                        <label htmlFor="floatingimage">Image_url</label>
                    </div>

                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Category:</label>
                        <select className="form-select" id="inputGroupSelect01" onChange={(e) => setcategory(e.target.value)} value={category}>
                            <option >Choose any</option>
                            <option value="fruits">fruits</option>
                            <option value="vegetables">vegetables</option>
                            <option value="meat">meat</option>
                        </select>
                    </div>
                    <input type='submit' value="Submit" className='btn btn-primary' />
                </form>
            </div>


        </>
    )
}

export default AddItems