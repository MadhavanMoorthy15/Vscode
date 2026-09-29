import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(user);

  const handleChange = (e) => {
    draft[e.target.name] = e.target.value;
    setDraft(draft);
  };

  const handleSave = () => {
    updateUser(draft);
    setEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input name="name" defaultValue={draft.name} onChange={handleChange} className="w-full border rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" defaultValue={draft.email} onChange={handleChange} className="w-full border rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input name="phone" defaultValue={draft.phone} onChange={handleChange} className="w-full border rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input name="address" defaultValue={draft.address} onChange={handleChange} className="w-full border rounded px-3 py-2 text-gray-900" />
            </div>
            <div className="flex gap-3">
              <button onClick={handleSave} className="bg-green-600 text-white px-5 py-2 rounded">Save</button>
              <button onClick={() => setEditing(false)} className="border px-5 py-2 rounded">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Phone</span>
              <span>{user.phone}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Address</span>
              <span className="text-right">{user.address}</span>
            </div>
            <button onClick={() => setEditing(true)} className="mt-4 bg-blue-600 text-white px-5 py-2 rounded">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
