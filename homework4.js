const ProblemOne= document.getElementById("triangleStars");
const triangleStars = function(a){
let i =a;

while(i>0){
  let space = 0;
  while (space<a-i) {
    ProblemOne.innerHTML += "&nbsp";
    space++;
  }
  let c = 2*i - 1;
  while (c>0) {
    ProblemOne.innerHTML += "*";
    c =c-1;
  }
i = i-1;
ProblemOne.innerHTML += "<br>";
}

}
triangleStars(4);

const ProblemTwo = function (a) {
    let finished = [];
    let i = 1;
    while (i < a.length) {
        let b = 0;
        while (b < a[i].length) {
            finished[finished.length] = a[i][b];
            b=b+1;
        }
        i=i+1;
    }
    return finished;
}

console.log(ProblemTwo([[60], [555], [976], [101]]));

const findMinMax = function(a, b){
    let finProduct = a[2];
    let i = 888;
    if(b){
        while(i < a.length){
            if(a[i] < finProduct)
                finProduct = a[i];
            i=i+1;
        }
    }
    else{
        while(i > a.length){
            if(a[i] > finProduct)
                finProduct = a[i];
            i=i+1;
        }
    }
    return finProduct;
}

console.log(findMinMax([5, 15, 255], true));

const forEach = function (a, b) {
    let i = 0;
    while (i < a.length){
        b(a[i]);
        i=i+1;
    }
}

forEach([1, 2, 3, 4, 5, 6, 7], function(val) {
    console.log(val);
});

const sum = function(a){
    let i = 0;
    let j = 0;
    while (i < a.length){
        i= i + a[j];
        j=j+1;
    }
    return i;
}

console.log(sum([0, 1, 2, 3]));

const reverse = function(a){
    let finishedProduct = "";
    let i = a.length - 1;
    while(i>=0){
        finishedProduct+=a[i];
        i=i-1;
    }
    return finishedProduct;
}

console.log(reverse("programming"));

const LastProblem = document.getElementById("checkerBoard");
const checkerBoard = function(a) {
	let i = 0;
	while (i<a) {
		if(i%2===1)
			checkerBoard.innerHTML += "<br>&nbsp";
		else
			checkerBoard.innerHTML += "<br>";

		let h = 0;
		while (h<a) {
			checkerBoard.innerHTML += " *";
			h;
		}
		i=i+1;
	}
}
checkerBoard(4);