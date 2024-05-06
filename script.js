// Function to set the username in a cookie
function setUsername() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    if (usernameInput !== '') {
        setCookie('username', usernameInput, 7); // Set cookie with name "username" lasting 7 days
        alert(`Username "${usernameInput}" has been set in the cookie.`);
    } else {
        alert('Please enter a valid username.');
    }
}

// Function to retrieve and display the username from the cookie
function getUsername() {
    const username = getCookie('username');
    if (username !== '') {
        document.getElementById('usernameDisplay').textContent = `Current Username: ${username}`;
    } else {
        alert('Username cookie not found.');
    }
}

// Function to delete the username cookie
function deleteUsername() {
    deleteCookie('username');
    document.getElementById('usernameDisplay').textContent = 'Username deleted.';
    alert('Username cookie has been deleted.');
}

// Function to set a cookie with a specified name, value, and expiration time
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to delete a cookie by setting its expiration time to a past date
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// 修改过的设置凭据函数，现在同时处理用户名和密码
function setCredentials() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    if (username !== '' && password !== '') {
        setCookie('username', username, 7); // 设置用户名cookie
        setCookie('password', password, 7); // 设置密码cookie（仅作示例，实际应用中不应这样做）
        alert('Your credentials have been set in the cookies.');
    } else {
        alert('Please enter both username and password.');
    }
}

// 新增获取凭据函数
function getCredentials() {
    const username = getCookie('username');
    const password = getCookie('password');
    if (username !== '' && password !== '') {
        document.getElementById('credentialsDisplay').textContent = `Username: ${username}, Password: ${password}`;
    } else {
        alert('Credentials not found in cookies.');
    }
}

// 修改过的删除凭据函数，现在同时删除用户名和密码的cookie
function deleteCredentials() {
    deleteCookie('username');
    deleteCookie('password');
    document.getElementById('credentialsDisplay').textContent = 'Credentials deleted.';
    alert('Credentials cookies have been deleted.');
}