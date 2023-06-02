import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="py-10 divide-y">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className="flex mb-3 px-4 cursor-pointer py-3 items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="font-medium text-gray-700">Steve Jebs</p>
            <p className="text-sm font-medium text-gray-500">
              See you tomorrow in the Corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Write;
