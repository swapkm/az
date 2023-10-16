"use client"
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Image from 'next/image';

// Define the GraphQL mutation
const CREATE_FEED = gql`
  mutation CreateFeed($title: String!, $content: String!, $image: String) {
    createFeed(title: $title, content: $content, image: $image) {
      _id
      title
      content
      image
      createdAt
    }
  }
`;

interface Feed {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export default function FeedPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [createFeed] = useMutation(CREATE_FEED);
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(false); // To track loading state
  const [message, setMessage] = useState(''); // To display success or error messages

  // Function to handle form submission
  const handleCreateFeed = async () => {
    setLoading(true); // Start loading

    try {
      const { data } = await createFeed({
        variables: { title, content, image },
      });

      // Data now contains the newly created feed
      console.log(data.createFeed);

      // Update the UI to show the newly created feed
      setFeeds([...feeds, data.createFeed]);

      // Reset input fields and show success message
      setTitle('');
      setContent('');
      setImage('');
      setMessage('Feed created successfully');
    } catch (error) {
      console.error(error);

      // Show error message, but don't clear input fields
      setMessage('Error creating feed');
    } finally {
      setLoading(false); // Stop loading, whether successful or not
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Feed</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleCreateFeed}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={loading} // Disable the button while loading
        >
          {loading ? 'Creating...' : 'Create Feed'}
        </button>
        {message && <p className={`mt-2 ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
      </form>
      {/* Display your feeds here */}
    </div>
  );
}
