const profile = {
  username: "Jacob",
  playTime: 300,
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
  changeUsername(newName) {
    this.username = newName;
    return `${newName} has ${this.playTime} active hours!`;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
    return `${this.username} has ${hours} active hours!`;
  },
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
