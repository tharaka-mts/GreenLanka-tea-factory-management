import { useState } from 'react';
import axios from 'axios';
import QrScanner from 'react-qr-scanner';

const AddWeight = () => {

    const [weight, setWeight] = useState('');
    const [teaWeight, setTeaWeight] = useState('');
    const [scannedData, setScannedData] = useState('');

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

    const handleScan = (data) => {
        if (data) {
            setScannedData(data.text); // Update the scanned data state
            document.getElementsByName('username')[0].value = data.text; // Populate the input field
        }
    };

    const handleError = (error) => {
        console.error('QR Scanner Error:', error);
    };


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
                            />
                            <button className="bg-green-500 text-white h-10 rounded-md ml-2 w-[150px]">
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
                        >
                            Confirm
                        </button>
                    </div>
                    <QrScanner
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddWeight;
