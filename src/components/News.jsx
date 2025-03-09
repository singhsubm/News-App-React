import React from 'react';

export default function News({ news }) {
    const { title, content, description, image, publishedAt, url } = news;

    const truncateText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div className="max-w-md bg-white rounded-lg shadow-lg p-4 mt-4 flex flex-col justify-between">
            <div>
                <h1 className="text-center font-bold text-lg mb-2">{truncateText(title, 10)}</h1>
                {image && (
                    <div className="w-full h-48 overflow-hidden rounded-md">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                )}
                <p className="text-sm font-semibold opacity-60 mt-1">🕒 {new Date(publishedAt).toDateString()}</p>
                <p className="text-gray-600 mt-2">{truncateText(description, 20)}</p>
                <p className="text-gray-700 mt-2">{truncateText(content, 30)}</p>
            </div>
            <div>
                <a href={url} target="_blank" rel="noopener noreferrer" className="block text-center mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Read More
                </a>
            </div>
        </div>
    );
}
