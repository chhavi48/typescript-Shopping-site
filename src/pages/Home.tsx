import Carousel from 'react-bootstrap/Carousel';
export function Home() {
  return(
    <>
        <Carousel >
      <Carousel.Item>
        <img style={{height:"500px"}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6MOoV-zrTZSaC6yonSoT7GqjVaPws9c1Ag&usqp=CAU "
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"black",marginRight:"600px",marginTop:"-300px",fontSize:"40px"}}>Welcome to Bookcart</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"500px"}}
          className="d-block w-100"
          src="https://previews.123rf.com/images/motizova/motizova1608/motizova160800266/61508802-open-book-hardback-books-on-wooden-table-education-background-back-to-school-copy-space-for-text.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:"500px"}}
          className="d-block w-100"
          src="https://img.myloview.com/canvas-prints/composition-with-vintage-old-hardback-books-diary-fanned-pages-on-wooden-deck-table-and-abstract-background-books-stacking-back-to-school-copy-space-education-background-400-208524019.jpg"
          alt="Third slide"
        />

    
        
      </Carousel.Item>
    </Carousel>

    </>
  )
}
