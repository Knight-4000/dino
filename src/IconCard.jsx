
export default function IconCard({children}) {
  return (
    <>
        <button className="icon-card inline-flex items-center rounded 
            mb-6 mt-2 px-3 py-3 font-medium text-sm uppercase mx-auto " 
            style={{display: "flex", justifyContent: "center"}}>
          {children}
        </button>
    </>

  )
}
