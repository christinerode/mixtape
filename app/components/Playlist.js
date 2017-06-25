var ALBUM_DATA = [{
  name: 'Blond',
  artist: 'Frank Ocean',
  image: 'https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg',
  url: 'https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music'
}, {
  name: 'Cerulean Salt',
  artist: 'Waxahatchee',
  image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Waxahatchee_cerulean_salt_cover.jpg',
  url: 'https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music'
}];

var React = require('react');

var Title = React.createClass({
	render: function () {
		return (
		     <h1 className="f3 f1-m f-headline-l">{this.props.name} {this.props.id}</h1>
		)
	}
});

var AlbumImage = React.createClass({
	render: function () {
		return (
		   <img className="db ba b--black-10"
       alt={this.props.name}
       src={this.props.image}
  		/>
		)
	}
}); 

var Album = React.createClass({
	render: function () {
		return (
		   <a className="db fl cf mw5 black link dim pa3"
 				  title={this.props.data.name}
 				  href={this.props.data.url}>

					<AlbumImage name={this.props.data.name} 
						artist={this.props.data.artist} 
						image={this.props.data.image} 
						/>
 				</a>
		 );
	}
});

var Songs = React.createClass({
	render: function () {
	  var songList = this.props.data.map(function(data, index){
	              return <Song key={index} data={data} />
	            });

		return (
		   <div>
		   	{songList}
		   </div>
		);
	}
});

var Song = React.createClass({
	render: function () {
		return (
		<div className="cf">
			<Album data={this.props.data} />

			<h1 className="f1 lh-title v-mid">{this.props.data.name}</h1>
			<h2 className="f2 lh-copy">{this.props.data.artist}</h2>
		</div>
		);
	}
});

var Playlist = React.createClass({
	render: function () {
		return (
		        <article className="pa3 pa5-ns">
		          <Title name="Playlist" id={this.props.params.id} />

		          <Songs data={ALBUM_DATA} />
		        </article>
		        )
	}
});

module.exports = Playlist;