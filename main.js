const mainPage = (() => {
	document.getElementById("play").addEventListener("click", () => {
	document.querySelector(".greetings").classList.add("hidden");
	document.querySelector(".main").classList.remove("hidden");
	u1Name = document.getElementById("player1").value;
	u2Name = document.getElementById("player2").value;
	user1 = Player(u1Name,"X");
	user2 = Player(u2Name,"O");	
	info = document.querySelector("#playerInfo");
	info.innerHTML = `${user1.name}`;
	});
})();

const Player = (name, marker) => {
	return {name, marker};
};

const Gameboard = () => {
	let gameboard = ["","","","","","","","",""];
	return (index, marker) => {
		gameboard[index] = marker;
		winningCond(gameboard);
	};
};

const winningCond = (gb) => {
	let winning =[
	 [gb[0],gb[1],gb[2]].join(""),
	 [gb[3],gb[4],gb[5]].join(""),
	 [gb[6],gb[7],gb[8]].join(""),
	 [gb[0],gb[3],gb[6]].join(""),
	 [gb[1],gb[4],gb[7]].join(""),
	 [gb[2],gb[5],gb[8]].join(""),
	 [gb[0],gb[4],gb[8]].join(""),
	 [gb[2],gb[4],gb[6]].join(""),
	 ];

	 winning.forEach(e => {
	 	if (e == "XXX" || e == "OOO") winner(e); 
	 });
};

function winner(e) {
	 		document.getElementById("winner").classList.remove("hidden");
	 		document.getElementById("players").classList.add("hidden");
	 		document.getElementById("playAgain").classList.remove("hidden");
	 	 if (e == "XXX") winnerInfo.innerHTML = `${user1.name}`;
	 	 else winnerInfo.innerHTML = `${user2.name}`;
}

const playAgain = (() => {
var buttonAgain = document.getElementById("playAgain")
buttonAgain.addEventListener("click", () => {
	buttonAgain.classList.add("hidden");
	cleanBoard();
});
})();

function cleanBoard(){
location.reload();
}

const play = (() => {
	const anywinner = false;
	const input = Gameboard();
	const cells = document.querySelectorAll(".cell"); 
	let tour = 0;	
	cells.forEach(grid => {
		grid.addEventListener("click", () => {
		if (document.getElementById("winner").classList == "hidden") {
		if(grid.childNodes.length == 0) {
			const para = document.createElement("p"); 
			grid.appendChild(para);
			let m = "";
			const index = parseInt(grid.id);	
			if (tour % 2 == 0) {
				m = user1.marker;
				info.innerHTML = `${user2.name}`;
			} else {
				m = user2.marker;
				info.innerHTML = `${user1.name}`;
			} 
			input(index, m);
			const text = document.createTextNode(m);
			para.appendChild(text);
			tour++;
		} 
		}
		});
	});
})();
