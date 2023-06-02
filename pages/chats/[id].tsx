import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-400">
          Hi how much are you selling them for?
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-400">
          I want ￦20,000
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-400">
          Are you carazy?
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-4 inset-x-0">
        <div className="flex relative items-center">
          <input
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-400 pr-12 focus:outline-none focus:border-orange-400"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-orange-400 rounded-full px-3 text-sm text-white hover:bg-orange-500 cursor-pointer focus:ring-2 focus:outline-none focus:ring-offset-2 ring-orange-400">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
