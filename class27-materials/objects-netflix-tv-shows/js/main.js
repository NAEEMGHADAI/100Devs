//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow {
	constructor(name, genre, lan, noOfEpisodes) {
		this.name = name;
		this.genre = genre;
		this.lan = lan;
		this.noOfEpisodes = noOfEpisodes;
	}
	spitRuntime() {
		console.log(
			`name of tv show is ${this.name} and no of episodes is ${
				this.noOfEpisodes
			} and its runtime is ${this.noOfEpisodes * 60}`
		);
	}
	skipIntro() {
		console.log("Skip intro...");
	}
	play() {
		console.log("Play the episode");
	}
}

let bridgerton = new NetflixTvShow(
	"Bridgerton",
	["Romance", "Period", "Drama"],
	"English, Hindi, etc",
	"16"
);
bridgerton.spitRuntime();
