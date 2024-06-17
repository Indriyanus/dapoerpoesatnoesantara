'use client';

import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import dynamic from 'next/dynamic';

const ClientCarousel = dynamic(() => import('../../components/carousel/index'), { ssr: false });

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=15');
        setTeamMembers(shuffle(response.data.results));
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  const renderTeamMember = (member, index, position) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="relative w-10 h-10 mx-auto mb-4">
        <img
          src={member.picture.large}
          alt={`Profile of ${member.name.first} ${member.name.last}`}
          className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-full"></div>
      </div>
      <h2 className="text-md font-semibold mt-4 mb-2">{position}</h2>
      <h5 className="text-md font-semibold mt-4 mb-4">{`${member.name.first} ${member.name.last}`}</h5>
      <p className="text-xs text-gray-500 mb-4">{member.email}</p>
      <p className="text-xs text-gray-600">Location: {`${member.location.city}, ${member.location.country}`}</p>
      <p className="text-xs text-gray-600">Phone: {member.phone}</p>
      <p className="text-xs text-gray-600">Date of Birth: {new Date(member.dob.date).toLocaleDateString()}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <ClientCarousel id="jumbotronLogo" />
      <h1 className="text-3xl font-bold text-center mb-8 py-10">Structure Organizational</h1>
      
      <div id="posisi atas satu" className="flex justify-center mb-10 text-center">
        {teamMembers.slice(0, 1).map((member, index) => renderTeamMember(member, index, 'Direktur Utama'))}
      </div>
      
      <div id="posisi tengah dua" className="flex flex-wrap justify-center py-10 px-5 gap-10 text-center">
        {teamMembers.slice(2, 3).map((member, index) => renderTeamMember(member, index, 'Komisaris'))}
        {teamMembers.slice(4, 5).map((member, index) => renderTeamMember(member, index, 'Direktur'))}
      </div>
      
      <div id="posisi bawah lima" className="flex flex-wrap justify-center py-10 px-5 gap-5 text-center">
        {teamMembers.slice(6, 7).map((member, index) => renderTeamMember(member, index, 'Business & Strategy Manager'))}
        {teamMembers.slice(8, 9).map((member, index) => renderTeamMember(member, index, 'Finance Manager'))}
        {teamMembers.slice(10, 11).map((member, index) => renderTeamMember(member, index, 'HR Manager'))}
        {teamMembers.slice(12, 13).map((member, index) => renderTeamMember(member, index, 'Operations Manager'))}
        {teamMembers.slice(14, 15).map((member, index) => renderTeamMember(member, index, 'IT Manager'))}
      </div>
    </div>
  );
}
