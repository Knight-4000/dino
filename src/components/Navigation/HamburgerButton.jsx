import './menu.css';

export default function HamburgerButton({showMessage, setShowMessage}) {

    return (
      <div className='lg:hidden' onClick={() => setShowMessage(!showMessage)}>
        <button>
          <hr className={showMessage ? "lineTop spin" : "lineTop"}></hr>
          <hr className={showMessage ? "lineMiddle spin" : "lineMiddle"}></hr>
          <hr className={showMessage ? "lineBottom spin" : "lineBottom"}></hr>
        </button>
      </div>
    )
  }