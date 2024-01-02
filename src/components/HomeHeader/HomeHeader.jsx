function HomeHeader() {
  return (
    <div>
      <div className="bg-[url(./assets/images/hero-bg.jpg)] h-[430px] bg-cover ">
        <div className="w-full h-full bg-black inset-0 bg-opacity-40">
        <div className="w-full h-full pl-[72px]  text-white">
          <h1 className="pt-32 font-poppins text-[48px] font-bold leading-[56px]">Learning Today,
          <br />
           Leading Tomorrow</h1>
           <p className="font-raleway text-[24px] mt-3 font-500">We are team of talented designers making websites with Bootstrap</p>
           <button className='border-2 mt-9 border-white rounded-3xl py-2 px-9
           hover:bg-green hover:border-green hover:duration-1000'>Get Started</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HomeHeader;
