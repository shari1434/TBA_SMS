

const PageTitle = ({title}) => {
  return (
   <>
   <section className="mb-5">
    <div className="container-fluid text-light  bg-breadcrumb animate__animated animate__slideInDown ">
      <div >
        <h1 className="fw-bold text-center ">
          {title}
        </h1>
      </div>
    </div>
   </section>
   </>
  )
}

export default PageTitle
