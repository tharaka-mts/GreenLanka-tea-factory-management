import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';


const FinalProduction = () => {

    const { currentColor, currentMode } = useStateContext();

    const [grade, setGrade] = useState('');
    const [finalWeight, setFinalWeight] = useState('');
    // const [teaWeight, setTeaWeight] = useState('');

    // const getNewWeight = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.get('http://192.168.8.101:5000/get_weights'); // weight scaler server url
    //         const weights = response.data.weight;
    //         setNewWeight(`${weights} KG`);
    //     } catch (error) {
    //         console.error('Error fetching weight:', error);
    //     }
    // }

    const navigate = useNavigate();

    const handleSubmit = async (e, isButtonRequest) => {
        e.preventDefault();
        const data = {
            grade: grade,
            finalWeight: finalWeight,
        };


        axios
            .post('http://localhost:3005/api/createFinalProduction', data)
            .then((result) => {
                console.log(result);
                navigate('/');
            })
            .catch((err) => console.log('Error msg ' + err));
    };

    return (
        <div className='w-full'>
            <div className='w-20% flex justify-center items-center '
                style={{ backgroundColor: currentColor }}>
                <h1 className='flex items-center justify-center mb-5 mt-5 text-xl font-bold text-white py-3'>
                    Final Production
                </h1>
            </div>

            <div className='w-100%'>
                <div className='flex justify-center w-full'>
                    <div className='bg-white mt-24 flex '>
                        <form
                            className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[570px] '

                            onSubmit={handleSubmit}
                        >

                            <div class="bg-white shadow-md rounded relative mb-6 mt-6" data-te-input-wrapper-init>
                            <select className=' text-gray-500 form-control bg-light appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] ' id='type'
                                    required
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                >
                                    <option value=''>Select Grade</option>
                                    <option value='Grade A'>Grade A</option>
                                    <option value='Grade B'>Grade B</option>
                                    <option value='Grade C'>Grade C</option>
                                    <option value='Grade D'>Grade D</option>

                                </select>
                            </div>

                            <div class="bg-white  rounded relative mb-6 mt-6 flex flex-row" data-te-input-wrapper-init>
                                <div className='flex-col'>
                                    <input
                                        type="number"
                                        class="shadow-md pt-2 w-[350px] appearance-none peer block min-h-[auto]  rounded border-0 bg-transparent px-2 py-[0.32rem] "
                                        id="exampleFormControlInput2"
                                        placeholder="Weight"
                                        required
                                        name="finalWeight"
                                        value={finalWeight}
                                        onChange={(e) => setFinalWeight(e.target.value)}
                                    />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div className='bg-gray-200 w-[20px]'></div>
                                {/* <button
                                    onClick={(e) => getNewWeight(e)}
                                    type='submit'
                                    className='shadow-md w-[300px] text-center inline-block rounded bg-green-500 px-6 pb-2.5 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                                    data-te-ripple-init
                                    data-te-ripple-color='light'
                                >
                                    Add Weight
                                </button> */}
                            </div>

                            <div className='flex'>
                                <button
                                    type='submit'
                                    className='w-[300px] text-center inline-block rounded bg-green-500 px-6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                                    data-te-ripple-init
                                    data-te-ripple-color='light'
                                    onClick={(e) => handleSubmit(e, true)}
                                >
                                    Submit
                                </button>

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

export default FinalProduction;