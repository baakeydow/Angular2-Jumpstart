import {Component} from 'angular2/core';
import {myVideos} from './classes/video';

@Component({
	selector: 'playlist',
	templateUrl: 'app/ts/html/playlist.component.html',
	inputs: ['vids']
})

export class PlaylistComponent{

	displayVids(vid:myVideos){
		var code = vid.videoCode;
		document.getElementById("youtube").innerHTML= `
		<iframe width=\"420\" height=\"315\"
		src=\"http://www.youtube.com/embed/${code}?autoplay=1\">
		</iframe>`
	}
}
