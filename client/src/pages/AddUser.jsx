import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import user from '../data/Assets/user.png';
import { useStateContext } from '../contexts/ContextProvider';

const AddUser = () => {

    const { currentColor, currentMode } = useStateContext();


  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);
    formData.append('age', age);
    formData.append('number', number);
    formData.append('address', address);

    axios
      .post('http://localhost:3001/createUser', formData)
      .then((result) => {
        navigate('/');
      })
      .catch((err) => console.log('Error msg ' + err));
  };

  return (
    <div className='w-full'>
      <div className='w-20% flex justify-center items-center '
        style={{ backgroundColor: currentColor }}>
        <h1 className='flex items-center justify-center mb-5 mt-5 text-xl font-bold text-white py-3'>
          ADD USER
        </h1>
        <img
          src={user}
          className='w-[100px] h-[100px]'
          alt='Sample image'
        />
      </div>

      <div className='w-80%'>
        <div className='flex justify-center w-full h-screen'>
          <div className='bg-white mt-10 flex h-[700px]'>
            <form
              className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px] h-[600px] '
            
              onSubmit={handleSubmit}
            >
              
              <div class="bg-white shadow-md rounded relative" data-te-input-wrapper-init>
                    <input
                        type="text"
                        class="appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                        id="exampleFormControlInput2"
                        placeholder="Name" required />



                    <label
                        for="exampleFormControlInput2"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                    </label>
                </div>

                <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                    <textarea
                        type="text"
                        class="appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                        id="exampleFormControlInput2"
                        placeholder="Address" required />



                    <label
                        for="exampleFormControlInput2"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                    </label>
                </div>

                <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                    <input
                        type="number"
                        class="appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                        id="exampleFormControlInput2"
                        placeholder="Phone Number" required />



                    <label
                        for="exampleFormControlInput2"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                    </label>
                </div>




                <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                    <input
                        type="number"
                        class="appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                        id="exampleFormControlInput2"
                        placeholder="Age" required />



                    <label
                        for="exampleFormControlInput2"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                    </label>
                </div>



                <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>



                    <select className=' text-gray-500 form-control bg-light appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] ' id='type' required>
                        <option value=''>Select Type</option>
                        <option value='manager'>Manager</option>
                        <option value='supervisor'>Supervisor</option>
                        <option value='labour'>Labour</option>
                        <option value='Tea plucker'>Tea Plucker</option>
                    </select>




                    <label
                        for="exampleFormControlInput2"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                    </label>

                </div>
                <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        class="appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                        id="exampleFormControlInput2"
                        placeholder="User Name" required />



                    <label
                        for="exampleFormControlInput2"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                    </label>
                </div>

                <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                    <div className='flex-col'>
                        <input
                            type="password"
                            class="appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                            id="exampleFormControlInput2"
                            placeholder="Password" required />



                        <label
                            for="exampleFormControlInput2"
                            class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                        </label>
                    </div>

                    <div className='flex-col'>
                        <input
                            type="password"
                            class="appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                            id="exampleFormControlInput2"
                            placeholder="Confirm Password" required />



                        <label
                            for="exampleFormControlInput2"
                            class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                        </label>
                    </div>


                </div>



                <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>

                    <div className='mb-2'>
                        <label htmlFor='image'>Image</label>
                        <input
                            type='file'
                            className='form-control bg-light'
                            id='image'
                        />
                    </div>


                </div>


                <div className='flex'>
  <button
    type='submit'
    className='w-[300px] text-center inline-block rounded bg-green-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
    Submit
  </button>

                <button
                  type='button'
                  className='ml-5 align-right w-[300px] col-2 inline-block rounded bg-red-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                  onClick={() => navigate('/manage')}
                >
                  Cancel
                </button>
              </div>

  <button
    type='button'
    className='ml-5 align-right w-[300px] col-2 inline-block rounded bg-red-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                data-te-ripple-init
                data-te-ripple-color='light'
                onClick={() => navigate('/')}
              >
    Cancel
  </button>
</div>
             

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;