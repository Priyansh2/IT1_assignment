var picno = 0;
var picno2 = 5;
function change()
{
	var image=document.getElementById('img_test1');
	var image2=document.getElementById('img_test2');
	if(picno==5) {
		image.src=imgArray[0];
		picno=0;
	} else if(picno<5) {
		image.src=imgArray[picno++];
	}
	if(picno2==10) {
		image2.src=imgArray[5];
		picno2=5;
	} else if(picno2<10) {
		image2.src=imgArray[picno2++];
		// console.log('picno2 '+picno2);
	}
	timer = setTimeout(change, 2000);
}
var path_img_test1="../../pictures/img_test1";
var path_img_test2="../../pictures/img_test2";
console.log(path_img_test1+"/a.jpeg");
var imgArray = [path_img_test1+"/a.jpeg",path_img_test1+"/b.jpeg",path_img_test1+"/c.jpeg",
								path_img_test1+"/d.jpeg",path_img_test1+"/e.jpeg",path_img_test2+"/11.jpeg",
								path_img_test2+"/12.jpeg",path_img_test2+"/13.jpeg",path_img_test2+"/14.jpeg",
								path_img_test2+"/15.jpeg"];
