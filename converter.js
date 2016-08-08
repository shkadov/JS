//## Minutes to string

const converter = (min) => {
	if (min < 0){
	console.log("Error");
	return false;
	}
	if (min => 60) {
		hours = Math.floor(min / 60);
		minutes = min - hours*60;
		console.log(hours, " : ", minutes);
	}

	if (min < 60) {
		console.log("00 : ", min);
	};
}

converter(15);

/*136
#hours = Math.floor(136 /60)
#minutes = min - hours*60

console.log(hours, ":", minutes)*/