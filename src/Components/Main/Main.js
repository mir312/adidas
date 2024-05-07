import Button from '../Button/Button'
import './Main.css'

  function Main () {
    return(
    <section className ="title">
	<div className="container">
	<div className="title_food">
		<h1 className="sec_tit">Best food foryour taste</h1>
		<p className="sec_desc">Discover delectable cuisine and unforgettable moments in our welcoming, culinary
		haven.</p>

		<div class="button">
	<Button text = "Book a table" number ="1"/>
	<Button text = "Explore menu"/>
    
	</div>
    
	</div>
	</div>
	</section>
	
    )
}


export default  Main