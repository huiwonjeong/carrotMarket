import type { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
      <h3 className="font-semibold text-gray-800 text-2xl mt-2">
        Let&apos;s See this!
      </h3>
      <div className="py-10 h-[50vh] overflow-y-scroll px-4 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>I want $20</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Cool!</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Cool!</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Cool!</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Cool!</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Cool!</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md ">
            <p>Cool!</p>
          </div>
        </div>

        <div className="fixed w-full mx-auto max-w-md bottom-3 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-orange-400 focus:ring-orange-500 focus:!outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0 ">
              <button className="flex items-center bg-orange-400 hover:bg-orange-500 rounded-full px-3 text-sm text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamDetail;
