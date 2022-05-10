let dinner_array=["김치찌개", "부대찌개", "오므라이스", "김치볶음밥", "간장계란밥", "생선구이", "삼겹살", "떡볶이", "치킨", "찜닭", "밥버거", "불고기", "소고기무국", "두부김치", "소시지야채볶음"]
let dinner_img=["media/김치찌개.png", "media/부대찌개.png","media/오므라이스.png","media/김치볶음밥.png", "media/간장계란밥.png",]
let prev; let j; let p=0; let num=0;
let timerID;
function start_mix(){
	let dinner = document.getElementById("dinner");
	let i=Math.floor(Math.random()*5);
	prev=i;
	dinner.innerHTML="<figure><img src='"+dinner_img[i]+"' width='180px' height='180px'><figcaption>"+dinner_array[i]+"</figcaption></figure>";
}
function mix(){
	let dinner = document.getElementById("dinner");
	timerID=setInterval("timeout()",200);
	j=Math.floor(Math.random()*5);
	while(j==prev){
		j=Math.floor(Math.random()*5);
	}
	prev=j;
}

function timeout(){
	let dinner = document.getElementById("dinner");
	if (num==15){
		clearInterval(timerID);
		dinner.innerHTML="<figure><img src='"+dinner_img[j]+"' width='180px' height='180px'><figcaption>"+dinner_array[j]+"</figcaption></figure>";
		num=0; p=0;
		return;
	}
	p%=5;
	dinner.innerHTML="<figure><img src='"+dinner_img[p]+"' width='180px' height='180px'><figcaption>추천 중..</figcaption></figure>";
	p++; num++;
}

