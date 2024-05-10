import { useState } from "react";

const CreateProductModal = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted content:", content);
    onClose();
  };

  const onClose = () => {
    setOpen(false);
    setContent("");
  };

  return (
    <>
      <button className="py-4 px-8 bg-slate-400 rounded-lg m-4">
        Add Product
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl mb-4">Custom Model</h2>
            <textarea
              className="w-full border rounded-md p-2 mb-4"
              placeholder="Enter content..."
              value={content}
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProductModal;
