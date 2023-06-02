import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="py-10 px-4">
      <div className="flex mb-3 px-4 cursor-pointer py-3 border-b items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
          <p className="text-sm font-medium text-gray-500">
            View profile &rarr;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Write;
