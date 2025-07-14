// last update: check the website
const android_rank = 17;
const ios_rank = 713;

// strings
const android_string = `Rank #${android_rank}`;
const ios_string = `Rank #${ios_rank}`;

// scripts
document.getElementById("android-data").textContent = `${android_string}`;
document.getElementById("ios-data").textContent = `${ios_string}`;