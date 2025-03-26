'use client'

import { useState } from "react";

export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
  
    const handleAddComment = () => {
      if (newComment.trim()) {
        setComments([...comments, newComment]);
        setNewComment("");
      }
    };
  
    return (
      <div className="w-full mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded-lg"
        />
        <button onClick={handleAddComment} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Comment
        </button>
        <ul className="mt-4 space-y-2">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 bg-white rounded-lg shadow">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    );
  }