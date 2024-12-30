"use client";

import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/users?search=${search}&page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
      setTotalUsers(data.totalUsers);
    };

    fetchUsers();
  }, [search, page]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handleNextPage = () => {
    if (page * limit < totalUsers) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search users..."
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {loading ? (
        <div className="flex items-center justify-center  text-center text-2xl font-bold">
          Loading...
        </div>
      ) : users.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      ) : null}

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page * limit >= totalUsers}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
