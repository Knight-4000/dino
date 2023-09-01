import './card.css';

export default function RowCard({children}) {

  return (
    
    <div className='row outer'>
      <div className="container m-auto grid grid-cols-2 inner">
        {children}
      </div>
    </div>
    
  )
}
