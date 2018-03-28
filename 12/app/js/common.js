
	'use strict';
	var  hotels = [
		{
			id: 1,
			name: 'Otium Amphoras',
			price: 220,
			rating: 4,
			url: 'https://media-cdn.tripadvisor.com/media/photo-s/01/fa/83/6f/shores-amphoras-hotel.jpg'

		},
		{
			id: 2,
			name: 'Falcon Hills',
			price: 440,
			rating: 4,
			url: 'https://media-cdn.tripadvisor.com/media/oyster/980/07/69/1b/90/main-pool--v5171423.jpg'

		},
		{
			id: 3,
			name: 'Iberotel Palace',
			price: 500,
			rating: 4.5,
			url: 'https://media-cdn.tripadvisor.com/media/photo-o/03/42/51/ce/overview.jpg'
		},
		{
			id: 4,
			name: 'Royal Grand',
			price: 290,
			rating: 4.5,
			url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/f7/af/aa/royal-grand-sharm-hotel.jpg'
		},
		{
			id: 5,
			name: 'Hilton Sharm',
			price: 590,
			rating: 4.5,
			url: 'https://media-cdn.tripadvisor.com/media/photo-w/09/cf/a8/f4/main-pool-complex.jpg'
		},
	]

	var HotelCard = React.createClass({
		render(){
			return(
				<div className='hotel'>
						<img className='hotel__img' src={this.props.url}/>				
						<div className='hotel__about'>
							<h2 className='hotel__name'>Hotel {this.props.name}</h2>
							<h3 className='hotel__rating'>STAR: {this.props.rating}</h3>
							<span className='hotel__price'>PRICE: {this.props.price}</span>
						</div>
						<button className='hotel__btn'>make order</button>
				</div>
			)
		}
	});

	var SearchBar = React.createClass({
		render(){	
			return(
				<div>
					<input className='hotels__search' type='text' placeholder='Enter Hotel'  onChange={this.props.onSearch}/>
				</div>
			)
		}
	});

	var HotelApp = React.createClass({
		getInitialState(){
			return{
				displayedHotels: hotels
			}
		
		},

		handleSearch(e){
			var searchQuery = e.target.value.toLowerCase();
			var displayedHotels = hotels.filter(hotel => {
				var searchString = hotel.name.toLowerCase();
				return searchString.indexOf(searchQuery) !== -1;
			});

			this.setState({
				displayedHotels:displayedHotels
			});
		},
		render() {
			var hotelCards = this.state.displayedHotels.map(hotel =>
			<HotelCard 
				name={hotel.name}
				price={hotel.price}
				key = {hotel.id}
				rating = {hotel.rating}
				url = {hotel.url}
			/>
		)
			return(
				<div>
					<div>
						<SearchBar onSearch={this.handleSearch}/>
					</div>
					<div>
					
						{hotelCards}
					</div>
				</div>
			);
		}
	})

	ReactDOM.render(
		<HotelApp/>,
		document.getElementById('hotels'));
