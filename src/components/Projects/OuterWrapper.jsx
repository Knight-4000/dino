import './projects.css';

export default function RowWrapper({children}) {

  return (
      <div className='flex justify-center'>
        <div className="home-card mx-auto ">
          <div className='flex justify-center shadow'>
              <div className='block max-w-sm first-line:rounded-lg bg-white rounded-xl'>{children}</div>
          </div>
        </div>
      </div>
  )
}
