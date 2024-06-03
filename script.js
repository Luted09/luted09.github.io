document.addEventListener("DOMContentLoaded", function() {
	// List of UwU type faces
	const faces = [ "UwU", "OwO", "TwT", ">w<", ":3", ">:3", ">_<", "Gay", "Cute" ];

	// List of sentences
	const sentences = [
		"Exploring my shitpost ideas for technology.",
		"Sharing my mental asylum with you.",
		"Building projects 700 steps at a time.",
		"Innovating for a better future.<br>(hopefully)",
		"Welcome to my creative space, You'll hate it.",
		"Put the Money in the Bag",
		"Have you Ever had a Dream",
		"I Took yo Girl",
		'"and your a <em>roblox coil sound</em> gaw dam furry and i dont wanna hear it"<br>-Some mf in a Discord Server Talking to me, 2024.',
		"Fuck Off!",
		"no<strong>.</strong>",
		"hai >w<",
		"who the hell is Brendan Eich?",
		"who the hell is Nicolas Cannasse?",
		"who the hell is steve jobs?",
		"who the hell is keanu reeves?",
		"who the hell is the red slime?",
		"fuck mint",
		"who the hell is robert topola?",
		"mf's content warning face rn like " + '"' + randomFace() + '" rn',
		"Kiss a Boy? I Would do That",
		"<img src='Assets/Images/RobWildin.png' alt='Rob Wildin for this one'></img>",
		"<img src='Assets/Images/miner.png' alt='YOU ARE NOT :3 YOU ARE A MINOR GO DO YOUR HOMEWORK'></img>",
		"<img src='Assets/Images/fukingliar.gif' alt='would rather die than give you a kiss (lie)'></img>",
		"look at this cute kitty owo<br><img src='Assets/Images/kitty.jpg' alt='Degenerate Nonsense'</img>",
		"<br><img src='Assets/Images/hugz.png' alt='hugz? >w<'</img>",
		"<video width=640 height=360 controls><source src='Assets/Videos/intheend.mp4' type='video/mp4'></video>",
		"it starts with your mom<br>-Cheezer, 2024",
		"in development rn",
		"SIGN UP NOW AND JOIN!<br>And Get Your Sign On Bonus in 10-15 Years~",
	];

	// Im a Furry, What did you expect
	function randomFace()
	{
		const randomIndex = Math.floor(Math.random() * faces.length);
		return faces[randomIndex];
	}

	// Function to get a random sentence from the list
	function getRandomSentence()
	{
		const randomIndex = Math.floor(Math.random() * sentences.length);
		return sentences[randomIndex];
	}

	// Select the subheading element
	const subheading = document.getElementById("subheading");

	// Replace the subheading text with a random sentence
	subheading.innerHTML = getRandomSentence();
});
