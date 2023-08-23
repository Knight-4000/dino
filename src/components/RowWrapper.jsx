import './card.css';

export default function RowWrapper({children}) {
  return (
    <div className='flex justify-center'>
        <div className='block max-w-sm rounded-lg bg-white'>{children}</div>
    </div>
  )
}
