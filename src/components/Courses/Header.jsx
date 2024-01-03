function Header({ title, text}) {
  return (
    <div className="bg-[#5fcf80] text-center px-14 py-7 text-white font-raleway space-y-2">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p>
       {text}
      </p>
    </div>
  );
}

export default Header;
