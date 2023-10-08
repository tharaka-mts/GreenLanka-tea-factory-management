import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

const AddExpenses = () => {

    const { currentColor, currentMode } = useStateContext();


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');


    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('age', age);
        formData.append('number', number);
        formData.append('address', address);


        axios
            .post('', formData)
            .then((result) => {
                console.log(result);
                navigate('/');
            })
            .catch((err) => console.log('Error msg ' + err));
    };

    return (
        <div className='w-full'>
            <div className=' flex justify-center items-center '
                style={{ backgroundColor: currentColor }}>
                <h1 className='flex items-center justify-center mb-5 mt-5 text-xl font-bold text-white py-3'>
                    ADD EXPENCES
                </h1>
            </div>

            <div className='w-full'>
                <div className='flex justify-center w-full h-screen'>
                    <div className='bg-white mt-10 flex '>
                        <form
                            className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[765px] h-[660px] '

                            onSubmit={handleSubmit}
                        >

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                                <select className=' text-gray-500 form-control bg-light appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] ' id='type' required>
                                    <option value=''>Select Month</option>
                                    <option value='january'>January</option>
                                    <option value='february'>February</option>
                                    <option value='march'>March</option>
                                    <option value='april'>April</option>
                                    <option value='may'>May</option>
                                    <option value='june'>June</option>
                                    <option value='july'>July</option>
                                    <option value='august'>August</option>
                                    <option value='september'>September</option>
                                    <option value='october'>October</option>
                                    <option value='november'>November</option>
                                    <option value='december'>December</option>
                                </select>
                                <label
                                    for="exampleFormControlInput2"
                                    class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >
                                </label>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Withering Machine" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="No of Hours Used" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Rolling Machine" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="No of Hours Used" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Drying Equipments" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="No of Hours Used" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Electricity" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="No of Units Used" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Fuel(for inside purpose)" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="No of Liters Used" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Fuel(for outside purpose)" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="No of Liters Used" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Transport Utilization(for inside purpose)" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="For how far" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Transport Utilization(for outside purpose)" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[350px] appearance-none peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  "
                                        id="exampleFormControlInput2"
                                        placeholder="For how far" required />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[70%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>


                            {/* <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
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
                            </div> */}




                            <div className='flex '>
                                <button
                                    type='submit'
                                    className='w-[350px] text-center inline-block rounded bg-green-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                                    data-te-ripple-init
                                    data-te-ripple-color='light'
                                >
                                    Submit
                                </button>

                                <button
                                    type='button'
                                    className='ml-5 align-right w-[350px] col-2 inline-block rounded bg-red-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
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

export default AddExpenses;