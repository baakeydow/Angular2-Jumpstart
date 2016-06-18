import {Component} from 'angular2/core';
import {PlaylistComponent} from './playlist.component';
import {Text} from './classes/config';
import {myVideos} from './classes/video';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/html/app.component.html',
	directives: [PlaylistComponent]
})

export class AppComponent {
	mainHeading = Text.Heading;
	videosList:Array<myVideos>;

	constructor(){
		this.videosList = [
			new myVideos(1, "Angular 2 for Beginners by Bucky Roberts", "hXfigUyeHaY", " - Tutorial 1 - Getting Started "),
			new myVideos(2, "Web Development in Year 2020 ", "0tj6VLuSowQ", " - ES6 and ES7 the future of Javascript"),
			new myVideos(3, "Amy Cuddy ", "Ks-_Mh1QhMc", " - Your Body Language Shapes Who You Are")
		]
	}
}
