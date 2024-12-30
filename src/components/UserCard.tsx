"use client";
import React, { useState } from "react";
import UserDetailModal from "./UserDetailModal";
interface UserCardProps {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, phone, avatar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex justify-start gap-4 p-8 max-w-sm rounded-md overflow-hidden shadow-lg bg-white m-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="purple"
        className="size-14"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>

      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-1">
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="text-slate-500 font-medium">{email}</p>
        </div>
        <button
          onClick={toggleModal}
          className="px-4 py-1 rounded-full border border-purple-200  hover:text-white hover:bg-purple-500"
        >
          View Profile
        </button>
        <UserDetailModal
          name={name}
          email={email}
          phone={phone}
          avatar={avatar}
          isOpen={isModalOpen}
          onClose={toggleModal}
        />
      </div>
    </div>
  );
};

export default UserCard;
