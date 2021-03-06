import "../styles/movie.css"
import "../images/image1.png"
import "../images/sleepy-scotty.jpg"

let processAJAXCalls = object => {
	let parentDiv = document.getElementsByClassName('content-columns')[0];
	let childDiv = document.getElementsByClassName('add-content')[0];
	if (object.Response){
		(object.Search).forEach( (num, i, array) => {
			parentDiv.insertBefore(createDiv(object.Search[i]),childDiv);
		});
	}
}

let createDiv = info => {
	let	contentBox = document.createElement("div");
	contentBox.setAttribute("class", 'content-box');
	let	infoBoxContainer = document.createElement("div");
	infoBoxContainer.setAttribute("class", 'content-info-box');
	infoBoxContainer.appendChild(createParagraph(info.Title, 'movie-title'));
	infoBoxContainer.appendChild(createParagraph(info.Year, 'movie-year'));
	contentBox.appendChild(infoBoxContainer);
	contentBox.appendChild(createImg(info.Poster, 'movie-poster', info.Title, info.Title));
    return contentBox;
}

let createParagraph = (text, className) => {
	let	pTag = document.createElement("p");
	pTag.setAttribute("class", className);
	let pText = document.createTextNode(text);
	pTag.appendChild(pText);
    return pTag;
}

let createImg = (imgURL, className, imgAlt, imgTitle) => {
	let imgTag = document.createElement("img");
	imgTag.src = imgURL;
	imgTag.setAttribute("class", className);
	imgTag.alt = imgAlt ? imgAlt : null;
	imgTag.title = imgTitle ? imgTitle : null;
	return imgTag; 
}

let fetchData = term => {
	let fetchURL = `https://www.omdbapi.com/?s=${term}&apikey=a4d98298`;
	fetch(fetchURL)
	.then(response => {
		return response.json();
	},
	networkError => { console.log(networkError.message); })
	.then(data => {
		processAJAXCalls(data);
	})
	.catch(error => {
		console.log(error);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	fetchData('coach');

	let plusCircle = document.getElementsByClassName("plus-circle")[0];
	plusCircle.addEventListener('click', (e) => { 
		let inputContainer = document.getElementById("input-box-container");
		let inputBox = document.createElement("input");
		inputBox.setAttribute("class", "input-box");
		inputContainer.appendChild(inputBox);
		let submitBtn = document.createElement("button");
		submitBtn.setAttribute("class", "orange-btn");
		submitBtn.innerHTML = `Submit New Movie`;
		inputContainer.appendChild(submitBtn);
		let addContentDiv = document.getElementsByClassName('add-content')[0];
        addContentDiv.className += " added-box";
        inputBox.focus();
        
		let orangeSubmit = document.getElementsByClassName("orange-btn")[0];
		orangeSubmit.addEventListener('click', () => { 
			fetchData(document.getElementsByClassName('input-box')[0].value); 
			inputContainer.innerHTML = '';
			addContentDiv.className = "add-content";
		});
	});

	let hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),
		main: document.querySelector('.main'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
			this.main.classList.toggle('pushIt');
		}
	};

	hamburger.navToggle.addEventListener('click', (e) => { 
		if (e.target.tagName.toLowerCase() !== 'a') { hamburger.doToggle(e); }
	});

	let links = document.getElementsByClassName("nav-item");
	for (let i = 0; i < links.length; i++) {
	    let link = links[i];
	    link.onclick = () => {
	        let prev = document.getElementsByClassName("active");
	        if (prev && prev[0]) {
	            prev[0].className = "";
	        }
	        this.className += " active";
	    };
	}
});