//*=============================== NÚT DI CHUYỂN LÊN ĐẦU TRANG ====================================*/
function gotoTop() {
    if (window.jQuery) {
		//jQuery().animate(): để tạo hành động tùy chỉnh
		//Phương thức scrollTop() thiết lập hoặc trả về vị trí thanh cuộn dọc cho các phần tử được chọn.
        	jQuery('html,body').animate({ scrollTop: 0 }, 'slow');
    } else {
		//Phương thức scrollIntoView() cuộn phần tử được chỉ định vào vùng hiển thị của cửa sổ trình duyệt.
        document.getElementsByClassName('top')[0].scrollIntoView({
			behavior: 'smooth',  //xác định hình ảnh chuyển tiếp tự động
			block: 'start',		//chạy theo chiều dọc dừng ở đầu trang.
		});
		
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
// /*=============================== NÚT DI CHUYỂN LÊN ĐẦU TRANG ====================================*/

// /*=============================== FORM LOGIN - SIGN UP ====================================*/
function showForm() {
	var userform = document.getElementById('showform');
	userform.style.display = 'block';
}

function showLogin() {
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}

function showSignup() {
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}

function closeForm() {
	var userform = document.getElementById('showform');
	userform.style.display = 'none';
}
// /*=============================== FORM LOGIN - SIGN UP ====================================*/

