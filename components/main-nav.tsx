"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <nav className=" p-4 text-xl font-bold">
      <ul className="flex space-x-4 text-black">
        <li>
          <Link href="/" onClick={() => handleOptionClick('Projects')}
              className={`hover:text-blue-500 ${activeOption === 'Projects' ? 'text-blue-500' : ''}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/add-project" onClick={() => handleOptionClick('Add Project')}
              className={`hover:text-blue-500 ${activeOption === 'Add Project' ? 'text-blue-500' : ''}`}>
            Add Project
          </Link>
        </li>
        <li>
          <Link href="/edit-project" onClick={() => handleOptionClick('Edit Project')}
              className={`hover:text-blue-500 ${activeOption === 'Edit Project' ? 'text-blue-500' : ''}`}>
            Edit Project
          </Link>
        </li>
        <li>
          <Link href="/delete-project" onClick={() => handleOptionClick('Delete Project')}
              className={`hover:text-blue-500 ${activeOption === 'Delete Project' ? 'text-blue-500' : ''}`}>
            Delete Project
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
