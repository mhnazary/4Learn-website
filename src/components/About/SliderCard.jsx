export default function SliderCard({ Information }) {
  return (
    <>
      <div className="w-11/12 h-54 px-14 mb-8">
        <div className="border-2 border-gray-100 px-16 py-10 mt-4 rounded-lg">
          <h1 className="font-raleway text-[18px] font-bold">
            {Information.name}
          </h1>
          <p className="text-[14px] font-sans text-[#999999] pb-3">
            {Information.job}
          </p>
          <span className="text-[16px] font-sans text-[#444444] italic">
            {Information.desc}
          </span>
        </div>
      </div>
    </>
  );
}
