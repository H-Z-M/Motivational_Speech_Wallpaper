class WallPaper {
	constructor(text, colorCode, imgUrl, vert, horizon){
		this.text = text;
		this.colorCode = colorCode;
		this.imgUrl = imgUrl;
		this.vert = vert;
		this.horizon = horizon;
	}
	vertTable = {
		"top" : "align-items-start",
		"center" : "align-items-center",
		"end" : "align-items-end",
	}
	horizonTable = {
		"left" : "justify-content-start",
		"center" : "justify-content-center",
		"right" : "justify-content-end",
	}
	motivationalSpeechWallpaper(){
		const container = document.createElement("div");
		container.classList.add("container", "d-flex", "justify-content-center");

		container.innerHTML = `<div class="imgBackground vh-75 p-md-5 p-3 my-5 col-12 col-md-8 d-flex ${this.vertTable[this.vert]} ${this.horizonTable[this.horizon]}" style="background-image: url('${this.imgUrl}');">
				<p class="paperText col-8" style="color:#${this.colorCode};">${this.text}</p>
			</div>`
		return container;
	}
}

const obj1 = new WallPaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");
const obj2 = new WallPaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");
const obj3 = new WallPaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");

const objs = [obj1, obj2, obj3];

let domObj = document.getElementById("target");
objs.map(obj => domObj.append(obj.motivationalSpeechWallpaper()));
