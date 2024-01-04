function EmailUs() {
  return (
    <>
      <div className=" w-8/12 px-8 text-[14px]">
        <div className="w-full flex justify-start mb-8">
          <input
            className="h-10 text-gray-700 border border-gray-300 w-80 rounded-md pl-3 mr-10 focus:outline-none focus:border-green"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-10 text-gray-700 border border-gray-300 w-80 rounded-md pl-3 focus:outline-none focus:border-green"
            type="text"
            placeholder="Your Email"
          />
        </div>
        <div className="w-full mb-8">
          <input
            className="h-10 text-gray-700 border border-gray-300 w-full rounded-md pl-3 focus:outline-none focus:border-green"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            class="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-green mb-8"
            rows="4"
            placeholder="message"
          ></textarea>
        </div>
        <div className="w-full text-center">
          <button className="bg-green text-white px-8 py-3 rounded-3xl font-sans text-md">
            {" "}
            Send massage{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailUs;
