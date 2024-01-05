function IconTitle({ icon, title, iconColorClass }) {
    return (
      <div className="flex items-center space-x-3 border border-gray-200 w-64 py-3 px-6 hover:border-emerald-300">
        <div className={`text-3xl ${iconColorClass}`}>{icon}</div>
        <h1 className="font-bold hover:text-emerald-300 hover:cursor-pointer">{title}</h1>
      </div>
    );
  }
  
  export default IconTitle;
  