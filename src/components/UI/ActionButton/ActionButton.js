export const ActionButton = ({ handleClick, color='', paddingSize='1' , children }) => {
  const bgColors = {
    'khaki': 'bg-khaki hover:text-dark-gray rounded-full',
    'color': 'bg-dark-gray hover:text-dark-red',
    'none': '',
  }
  const padding = {
    'none': 'p-0',
    '1': 'px-2 py-1',
    '2': 'p-2',
  }
  return (
    <button 
      onClick={handleClick} 
      className={`${bgColors[color]} 
      ${padding[paddingSize]} 
      flex items-center text-white 
      hover:drop-shadow-custom ease-in duration-300`}
    >
      { children }
    </button>
  )
}