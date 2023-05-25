let success = document.getElementById('success');
let notifications = document.querySelector('.notifications');

function createToast(type, icon, title, text){
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="close fa-solid fa-xmark"
                onclick="(this.parentElement).remove()"
                ></i>
            </div>`;

    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000)
}

success.onclick = function(){
    let type = 'success';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Thành Công';
    let text = 'Đã Đặt Hàng Thành Công';
    createToast(type, icon, title, text);
}