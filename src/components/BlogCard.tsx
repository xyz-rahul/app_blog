import React from 'react'

export default function BlogCard() {
    return (
        <div className="mx-auto my-10 max-w-xs rounded-xl px-6 py-10 text-gray-600 shadow">
            <div className="mb-4 w-20 rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">
                new
            </div>
            <p className="mb-2 text-2xl">Never miss your important emails</p>
            <p className="mb-6 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi natus quae ex! Aliquam, ipsa.
            </p>
            <button className="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
                <span> view blog </span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </button>
        </div>
    )
}
