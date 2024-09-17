// 获取当前日期
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// 设定你的生日
const birthDate = new Date(2004, 9, 8); // 2004年10月8日 (JS中月份是从0开始的，所以10月是9)

// 计算年龄
let age = currentYear - birthDate.getFullYear();

// 判断今年的生日是否已经过了
const hasBirthdayPassed = 
  currentDate.getMonth() > birthDate.getMonth() || 
  (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

if (!hasBirthdayPassed) {
  age--; // 如果今年的生日还没到，年龄减一
}

// 显示年份和年龄到HTML
document.getElementById('currentYear').textContent = currentYear;
document.getElementById('myAge').textContent = age;
