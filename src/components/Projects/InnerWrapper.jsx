import './projects.css';

export default function RowCard({children}) {

  return (
    
    <div className='row'>
      <div className="grid grid-cols-2">
        {children}
      </div>
    </div>
    
  )
}