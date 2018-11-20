const constraints = window.constraints = {
	audio: true,
	video: { width: 30, height: 30 }
};

module.exports = class WebRTC {
	constructor(){
		this.videoPlaying = false;
		this.video = document.createElement("video");
		this.video.setAttribute("autoplay", "");
		this.video.setAttribute("playsinline", "");
		document.body.appendChild(this.video);

		this.app = document.createElement("div");

		navigator.mediaDevices.getUserMedia(constraints)
			.then((stream) => {
				this.video.srcObject = stream;
				this.video.width = constraints.video.width;
				this.video.height = constraints.video.height;

				this.video.addEventListener("playing", () => this.videoPlaying = true);
				this.video.addEventListener("paused", () => this.videoPlaying = false);
			});
		console.log("webrtc module loaded");
	}
};
