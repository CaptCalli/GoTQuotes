var quote = document.getElementById("quote");
var arya = document.getElementById("arya");
var cersei = document.getElementById("cersei");
var dany = document.getElementById("dany");
var jamie = document.getElementById("jamie");
var jon = document.getElementById("jon");
var petyr = document.getElementById("petyr");
var sansa= document.getElementById("sansa");
var hodor = document.getElementById("hodor");
var tyrion = document.getElementById("tyrion");
var varys = document.getElementById("varys");

var aryaQuotes = [
					"Leave one wolf alive and the sheep are never safe.",
					"'Nothing' isn't better or worse than anything. Nothing is just nothing.",
					"Not today.",
					"I am a wolf and will not be afraid.",
					"I wasn't playing. And I don't want to be a lady.",
					"But I'm not a lady. I never have been. That's not me.",
					"I know Death. He's got many faces. I look forward to seeing this one.",
					"The world doesn't just let girls decide what they want to be. But I can now.",
					"A girl has no name.",
					"Our stories aren't over yet.",
					"Fear cuts deeper than swords.",
					"I don't need saving.",
					"Tell them the North remembers.",
					"Joffrey... Cersei... Ilyn Payne... Ser Meryn... the Hound.",
					"Anyone can be killed.",
					"Valar Morghulis.",
					"You know who I am? I'm Arya Stark. Do you know who you are? You're no one. You're nothing!",
					"My name is Arya Stark. I want you to know that. The last thing you're ever going to see is a Stark smiling down at you as you die.",
					"I came to kill Cersei. Your queen killed her first.",
					"West of Westeros. That's where all the maps stop. That's where I'm going."
				];

var cerseiQuotes = [
					"A good king knows when to save his strength and when to destroy his enemies.",
					"Everyone who isn't us is an enemy.",
					"Any time a Targaryen is born, the gods flip a coin.",
					"Tears aren't a woman's only weapon. The best one's between your legs.",
					"Nobody cares what your father once told you.",
					"I know you're a witch and you can see the future. Tell me mine.",
					"Look at me! Look at my face! It's the last thing you'll see before you die.",
					"I choose violence.",
					"This is Ser Gregor Clegane. He's quiet, too. Your gods have forsaken you. This is your god now.",
					"Dead men, dragons, and dragon queens... whatever stands in our way, we will defeat it.",
					"No one walks away from me.",
					"If you want a whore, buy one. If you want a Queen - earn her.",
					"I wanted those elephants.",
					"When the war is won the lion will rule the land, the kraken will rule the sea, and our child will rule over all.",
					"An unhappy wife is a wine merchant's best friend.",
					"You're a clever man. But you're not half as clever as you think you are."
				];

var danyQuotes = [
					"And I swear this. If you ever betray me, I'll burn you alive.",
					"Fire cannot kill a dragon.",
					"Dracarys!",
					"When my dragons are grown, we will take back what was stolen from me and destroy those who wronged me! We will lay waste to armies and burn cities to the ground!",
					"You're both here to advise me. I value your advice, but if you ever question me in front of strangers again, you'll be advising someone else. Is that understood?",
					"A dragon is not a slave.",
					"A man who fights for gold can't afford to lose to a girl.",
					"I will not let those I have freed slide back into chains.",
					"Angry snakes lash out. It makes chopping off their heads that much easier.",
					"My reign has just begun.",
					"Our fathers were evil men. They left the world worse than they found it. We're not going to do that, we're going to leave the world better than we found it.",
					"Shall we begin?",
					"We'll rip her out root and stem.",
					"We have won the Great War. Now we will win the last war.",
					"The next time you fail me will be the last time you fail me.",
					"Not a Queen. A Khaleesi.",
					"I'm no ordinary woman. My dreams come true.",
					"I will answer injustice with justice.",
					"If I give everyone what they deserve, I'll have no one left to rule.",
					"The Iron Throne is mine and I will take it."
				];

var jamieQuotes = [
					"The things I do for love...",
					"We're Lannisters. Lannisters don't act like fools.",
					"The king shits, and the hand wipes.",
					"You're a hateful woman. Why have the gods made me love a hateful woman?",
					"Fuck prophecy. Fuck fate. Fuck everyone who isn't us.",
					"Not everybody wants to die for someone else's home.",
					"They're not good at anything. I know the ironborn. They're bitter, angry little people. All they know how to do is steal things they can't build or grow themselves.",
					"In the name of the Warrior, I charge you to be brave. In the name of the Father, I charge you to be just. In the name of the mother, I charge to you to defend the innocent. Rise Ser Brienne of Tarth, Knight of the Seven Kingdoms.",
					"She's always been good at using the truth to tell lies.",
					"You know the first thing I learned in the North? I hate the fucking North.",
					"I have never slept with a Knight before.",
					"Cersei once called me the stupidest Lannister.",
					"Look at me. Nothing else matters. Only us.",
					"We don't choose whom we love."
				];

var jonQuotes = [
					"My watch has ended.",
					"Do you know something? I know I love you.",
					"Those are giants riding mammoths down there!",
					"I swore a vow to the Night's Watch. If I don't take my own word seriously, what sort of 'Lord of Winterfell' would I be?",
					"Thousands of men don't need to die. Only one of us. Let's end this the old way. You against me.",
					"If I do, if I fall... don't bring me back.",
					"There is only one war that matters: the great war... and it is here.",
					"When enough people make false promises, words stop meaning anything. Then there are no more answers, only better and better lies.",
					"It appears Tyrion's assessment was correct. We're fucked.",
					"You are my queen, now and always.",
					"The North is free thanks to you.",
					"The true enemy won't wait out the storm. He brings the storm."
				];

var petyrQuotes = [
					"Distrusting me was the wisest thing you've done since you climbed off your horse.",
					"Ah, the Starks! Quick tempers, slow minds.",
					"Brothels make a much better investment than ships, I've found. Whores rarely sink.",
					"I did warn you not to trust me.",
					"We only make peace with our enemies, my lord. That's why it's called 'making peace.'",
					"If war were arithmetic, the mathematicians would rule the world.",
					"I have always found revenge to be the purest of motivations.",
					"Look around you, we're all liars here, and every one of us is better than you.",
					"A man with no motive is a man no one suspects. Always keep your foes confused.",
					"There is no justice in this world. Not unless we make it.",
					"The past is the past, the future is all that is worth discussing."
				];

var sansaQuotes = [
					"Thank you for all your many lessons, Lord Baelish. I will never forget them.",
					"If I'm going to die, let it happen while there is still some of me left.",
					"Did you know about Ramsay? If you didn't know, you're an idiot. If you did know, you're my enemy.",
					"You can't protect me. You won't even be able to protect yourself if I tell Brienne to cut you down.",
					"You freed me from the monsters who murdered my family, and you gave me to other monsters who murdered my family.",
					"Your words will disappear. Your house will disappear. Your name will disappear. All memory of you will disappear.",
					"You're going to die tomorrow, Lord Bolton. Sleep well.",
					"Jon, a raven came from the Citadel. A white raven. Winter is here.",
					"Back then I only thought about what I wanted, never about what I had. I was a stupid girl.",
					"Only a fool would trust Littlefinger.",
					"You have to be smarter than Father. You need to be smarter than Robb. I loved them, I miss them, but they made stupid mistakes, and they both lost their heads for it.",
					"When the snows fall, and the white winds blow, the lone wolf dies, but the pack survives.",
					"The men in my family don't so well in the capital.",
					"The North will remain an independent kingdom, as it was for thousands of years.",
					"I am Sansa Stark of Winterfell. This is my home, and you can't frighten me."
				];

var hodorQuotes = [
					"Hodor.",
					"Hodor!",
					"Hodor?",
				];

var tyrionQuotes = [
					"I drink and I know things.",
					"No one turns away a Lannister.",
					"Never forget what you are, the rest of world will not. Wear it like an armor and it can never be used to hurt you.",
					"You love your children. It's your one redeeming quality - that and your cheekbones.",
					"It's hard to put a leash on a dog once you've put a crown on its head.",
					"Oh, fuck me.",
					"Where to begin... this is awkward.",
					"A toast. To the proud Lannister children: the dwarf, the cripple, and the mother of madness.",
					"Are you a lord if you kill your father? I don't imagine they revoke your nobility for killing a whore, it must happen all the time.",
					"Long, sullen silences and an occasional punch in the face. The Mormont Way.",
					"The next time I have an idea like that... punch me in the face!",
					"I'm friends with your mother. I'm here to help. Don't eat the help.",
					"Slavery is a horror that should be ended at once. War is a horror that should be ended at once.",
					"One day, after our queen has taken the Seven Kingdoms, I'd like to have my own vineyard. Make my own wine. The Imp's Delight. Only my close friends could drink it.",
					"Thank you for the armada. Our Queen does love ships.",
					"I trust the eyes of an honest man more than I trust what everybody knows.",
					"Maybe Cersei will win and kill us all. That will solve our problems.",
					"Sometimes duty is the death of love. You are the shield that guards the realm of men.",
					"No one is very happy, which means it's a good compromise, I suppose.",
					"I have a tender spot in my heart for cripples, bastards, and broken things."
				];

var varysQuotes = [
					"A blessing, then. I suffered an early mutilation myself. Some doors close forever, others open in most unexpected places.",
					"Why is it no one ever trusts the eunuch?",
					"I've always hated the bells. They ring for horror. A dead king, a city under siege...",
					"When I see what desire does to people, what it's done to this country, I am very glad to have no part in it. Besides, the absence of desire leaves one free to pursue other things.",
					"Any fool with a bit of luck can find himself born into power. But earning it for yourself, that takes work.",
					"I don't believe in saviors. I believe men of talent have a part to play in the war to come.",
					"Men can be fickle, but birds I always trust.",
					"At least we're already in a crypt.",
					"Do not become what you have always struggled to defeat.",
					"This is a mistake.",
					"I suppose it's hard for a fanatic to admit a mistake. Isn't that the whole point of being a fanatic? You're always right. Everything it the Lord's will.",
					"They say every time a Targaryen is born, the gods toss a coin and the world holds its breath.",
					"I hope I deserve this. Truly, I do. I hope I'm wrong."
				];


arya.addEventListener("click", function(){
	var quotes = aryaQuotes[Math.floor(Math.random() * aryaQuotes.length)];
	quote.textContent = quotes;
})

cersei.addEventListener("click", function(){
	var quotes = cerseiQuotes[Math.floor(Math.random() * cerseiQuotes.length)];
	quote.textContent = quotes;
})

dany.addEventListener("click", function(){
	var quotes = danyQuotes[Math.floor(Math.random() * danyQuotes.length)];
	quote.textContent = quotes;
})

jamie.addEventListener("click", function(){
	var quotes = jamieQuotes[Math.floor(Math.random() * jamieQuotes.length)];
	quote.textContent = quotes;
})

jon.addEventListener("click", function(){
	var quotes = jonQuotes[Math.floor(Math.random() * jonQuotes.length)];
	quote.textContent = quotes;
})

petyr.addEventListener("click", function(){
	var quotes = petyrQuotes[Math.floor(Math.random() * petyrQuotes.length)];
	quote.textContent = quotes;
})

sansa.addEventListener("click", function(){
	var quotes = sansaQuotes[Math.floor(Math.random() * sansaQuotes.length)];
	quote.textContent = quotes;
})

hodor.addEventListener("click", function(){
	var quotes = hodorQuotes[Math.floor(Math.random() * hodorQuotes.length)];
	quote.textContent = quotes;
})

tyrion.addEventListener("click", function(){
	var quotes = tyrionQuotes[Math.floor(Math.random() * tyrionQuotes.length)];
	quote.textContent = quotes;
})

varys.addEventListener("click", function(){
	var quotes = varysQuotes[Math.floor(Math.random() * varysQuotes.length)];
	quote.textContent = quotes;
})