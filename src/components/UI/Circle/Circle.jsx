const Circle = ({ sm = false, md = false, children }) => {
  let size = null;

  const sizes = {
    "sm": "w-6 h-6",
    "md": "w-8 h-8",
  }

  if (md) {
    size = "md";
  } else {
    size = "sm";
  }

  return (
    <div 
      className={
        `flex items-center justify-center rounded-full ring-1 ring-black bg-dark-gray
        ${sizes[size]}`
        }
      >
      {children}
    </div>
  );
};

export default Circle;
