import { useState, useEffect } from 'react';
import axios from 'axios';
import QrScanner from 'react-qr-scanner';

import { getUser } from '../api/getDetails';

const AddWeight = () => {

    const [weight, setWeight] = useState('');
    const [teaWeight, setTeaWeight] = useState('');

    const [username, setUsername] = useState('');

    const [scanQR, setScanQR] = useState('');
    const [userDetails, setUserDetails] = useState({});

    const getWeight = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://192.168.8.101:5000/get_weights'); // weight scaler server url
            const weights = response.data.weight;
            setWeight(`${weights} KG`);
            setTeaWeight(weights);
        } catch (error) {
            console.error('Error fetching weight:', error);
        }
    };

    useEffect(() => {
        async function fetchUserDetails() {
          const userDetailsData = await getUser(username);
    
          if (userDetailsData) {
            setUserDetails(userDetailsData);
          }
        }
    
        fetchUserDetails();
      }, [username]);

    const handleScan = (data) => {
        if (data) {
            setUsername(data.text); // Update the scanned data state
            //document.getElementsByName('username')[0].value = data.text;
        }
    };

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/emp/prod/add', {
                username: username,
                weight: teaWeight,
            });
            console.log(response.data.message);
            alert("Weight Added Successfully");
        } catch (error) {
            console.error('Weight adding error:', error);
        }
    };

    const handleError = (error) => {
        console.error('QR Scanner Error:', error);
    };

    const handleScanQR = (e) => {
        e.preventDefault();
        setScanQR(!scanQR);
    }


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Add Weight</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="border p-2 w-full"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button onClick={(e) => handleScanQR(e)} className="bg-green-500 text-white h-10 rounded-md ml-2 w-[150px]">
                                Scan QR
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Tea Weight in KG</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="border p-2 w-full"
                                placeholder="Enter tea weight"
                                name="teaWeight"
                                value={teaWeight}
                                onChange={(e) => setTeaWeight(e.target.value)}
                            />
                            <button
                                onClick={(e) => getWeight(e)}
                                className="bg-green-500 text-white h-10 rounded-md ml-2 w-[150px]"
                            >
                                Get Weight
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="flex items-center bg-cancel border border-gray-300 p-2 rounded-md"
                        >
                            <span className="mr-2">Cancel</span>
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                            onClick={submitData}
                        >
                            Confirm
                        </button>
                    </div>
                    <div className='mt-3'>
                    { (scanQR) ? <QrScanner
                        delay={200}
                        onError={handleError}
                        onScan={handleScan}
                    /> : <div></div> }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWeight;
