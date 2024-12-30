import React from "react";

interface UserDetailModalProps {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({
  name,
  email,
  phone,
  avatar,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="purple"
            className="size-14 flex justify-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>

        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> {phone}
        </p>
        <button
          onClick={onClose}
          className="flex justify-self-end mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailModal;
