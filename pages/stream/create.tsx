import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="px-10 py-16">
      <div className="my-5">
        <label
          className="tex-sm font-medium text-gray-700 block mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <input
            className="appearance-none w-full px-3 pl-7 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:!outline-none focus:border-orange-400 focus:ring-orange-400"
            id="title"
            type="text"
          />
        </div>
      </div>
      <div className="my-5">
        <label
          className="tex-sm font-medium text-gray-700 block mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            className="appearance-none w-full px-3 pl-7 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:!outline-none focus:border-orange-400 focus:ring-orange-400"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 items-center pointer-events-none ">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          className="tex-sm font-medium text-gray-700 block mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-400 rounded-md focus:!outline-none border-gray-300 focus:border-orange-400"
          rows={4}
        />
      </div>
      <button className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 border rounded-md border-transparent shadow-sm text-sm font-medium focus:ring-2 focus:!ring-orange-400 focus:ring-offset-2 focus:!outline-none">
        Go Live
      </button>
    </div>
  );
};

export default Create;
