import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-400 rounded-md focus:!outline-none border-gray-300 focus:border-orange-400"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="mt-2 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 border rounded-md border-transparent shadow-sm text-sm font-medium focus:ring-2 focus:!ring-orange-400 focus:ring-offset-2 focus:!outline-none">
        Submit
      </button>
    </form>
  );
};

export default Write;
