import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const TeamMember = ({ name, age, address, image, teaWeight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 text-center">
      <img src={image} alt={name} className="mb-2 rounded-lg w-32 h-32 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">{age} years old</p>
      <p className="text-gray-500">{address}</p>
      <p className="text-currentColor">Today's Tea Weight: {teaWeight} kg</p>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Ovindu Jeewanga',
    age: 30,
    address: '123 Main St, Eheliyagoda',
    image: 'https://via.placeholder.com/150',
    teaWeight: 35, // Adjust the tea weight in kilograms
  },
  {
    name: 'Tharaka Sandaruwan',
    age: 28,
    address: 'Kahapathwala , Kahapathwala',
    image: 'https://via.placeholder.com/150',
    teaWeight: 30, 
  },
  {
    name: 'Danika Shainda',
    age: 43,
    address: 'Temple Road , Polonnaruwa',
    image: 'https://via.placeholder.com/150',
    teaWeight: 45, 
  },
  {
    name: 'Hasanka Senadeera',
    age: 37,
    address: 'Kaluthara',
    image: 'https://via.placeholder.com/150',
    teaWeight: 34, 
  },

  {
    name: 'Sanidu Udawaththa',
    age: 39,
    address: 'ThelBedda',
    image: 'https://via.placeholder.com/150',
    teaWeight: 40, 
  },
   
];

const MyTeam = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4 text-center  ">My Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            age={member.age}
            address={member.address}
            image={member.image}
            teaWeight={member.teaWeight}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTeam;