import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const API_URL = 'http://localhost:3005/api';

const LeaveRequest = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedType, setSelectedType] = useState('');
    const [reason, setReason] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState(null);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const clearForm = () => {
        setUsername('');
        setStartDate(null);
        setEndDate(null);
        setSelectedType('');
        setReason('');
        setMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            startdate: formatDate(startDate),
            enddate: formatDate(endDate),
            type: selectedType,
            reason,
            status: "Pending"
        };

        try {
            const response = await fetch(`${API_URL}/createLeave`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                setMessage('Form submitted successfully.');
                clearForm(); // Clear the form fields
            } else {
                // Handle errors
                const errorResponse = await response.json();
                setMessage('Form submission failed. ' + errorResponse.message);
            }
        } catch (error) {
            // Handle network errors
            setMessage('Network error: ' + error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Leave Request</h2>
                {message && (
                    <div className={message.startsWith('Form submitted successfully.') ? 'text-green-500' : 'text-red-500'}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="border p-2 w-full"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center space-x-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Start Date</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    className="border p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">End Date</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    className="border p-2"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Leave Type</label>
                        <div className="flex items-center">
                            <select
                                className="border p-2 w-full"
                                name="type"
                                value={selectedType}
                                onChange={handleTypeChange}
                                required
                            >
                                <option value="">Select Leave Type</option>
                                <option value="Annual">Annual</option>
                                <option value="Casual">Casual</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Reason</label>
                        <div className="flex items-center">
                            <textarea
                                className="border p-2 w-full h-20 resize-none"
                                placeholder="Enter reason"
                                name="reason"
                                value={reason}
                                onChange={handleReasonChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Request
                        </button>
                        <button
                            type="button"
                            className="flex items-center bg-cancel border border-gray-300 p-2 rounded-md"
                            onClick={clearForm} // Clear the form on cancel
                        >
                            <span className="mr-2">Clear</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeaveRequest;