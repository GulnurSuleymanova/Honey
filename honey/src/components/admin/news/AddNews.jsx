import React, { useState } from "react";
import { useAddNewsMutation } from "../../../store/newsApi";

const AddNews = () => {
  const [addNews] = useAddNewsMutation();
  const [form, setForm] = useState({ title: "", content: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNews(form).unwrap();
      alert("News added successfully");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <button type="submit">Add News</button>
    </form>
  );
};

export default AddNews;
