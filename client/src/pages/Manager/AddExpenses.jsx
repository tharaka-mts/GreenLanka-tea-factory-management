import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

const AddExpenses = () => {

    const { currentColor, currentMode } = useStateContext();


    const [month, setMonth] = useState('');
    const [wMachine, setWMachine] = useState();
    const [rMachine, setRMachine] = useState();
    const [dMachine, setDMachine] = useState();
    const [electricity, setElectricity] = useState();
    const [fuel, setFuel] = useState();
    const [transport, setTransport] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e, isButtonRequest) => {
        e.preventDefault();

        const data = {
            month: month,
            wMachine: parseFloat(wMachine),
            rMachine: parseFloat(rMachine),
            dMachine: parseFloat(dMachine),
            electricity: parseFloat(electricity),
            fuelInside: parseFloat(fuel),
            transportOutside: parseFloat(transport),
        };

        console.log('Data being sent to the server:', data);

        axios
            .post('http://localhost:3005/api/newExpenses', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
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
                    <div className='bg-white mt-8 flex '>
                        <form
                            className='bg-gray-200 shadow-md rounded px-8 pt-2 pb-8 mb-4 w-[465px] h-[630px] '

                            onSubmit={handleSubmit}
                        >

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                                <select className=' text-gray-500 form-control bg-light appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] ' id='type'
                                    required
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                >
                                    <option value=''>Select Month</option>
                                    <option value='January'>January</option>
                                    <option value='February'>February</option>
                                    <option value='March'>March</option>
                                    <option value='April'>April</option>
                                    <option value='May'>May</option>
                                    <option value='June'>June</option>
                                    <option value='July'>July</option>
                                    <option value='August'>August</option>
                                    <option value='September'>September</option>
                                    <option value='October'>October</option>
                                    <option value='November'>November</option>
                                    <option value='December'>December</option>

                                </select>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[400px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Withering Machine"
                                        required
                                        value={wMachine}
                                        onChange={(e) => setWMachine(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[400px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Rolling Machine"
                                        required
                                        value={rMachine}
                                        onChange={(e) => setRMachine(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[400px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Drying Equipments"
                                        required
                                        value={dMachine}
                                        onChange={(e) => setDMachine(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[400px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Electricity"
                                        required
                                        value={electricity}
                                        onChange={(e) => setElectricity(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[400px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Fuel(for inside purpose)"
                                        required
                                        value={fuel}
                                        onChange={(e) => setFuel(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                            </div>

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="w-[400px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Transport Utilization(for inside purpose)"
                                        required
                                        value={transport}
                                        onChange={(e) => setTransport(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>

                            </div>




                            <div className='flex '>
                                <button
                                    type='submit'
                                    className='w-[350px] text-center inline-block rounded bg-green-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                                    data-te-ripple-init
                                    data-te-ripple-color='light'
                                    onClick={(e) => handleSubmit(e, true)}
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