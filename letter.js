function Letter(let) {
  this.let =
    let;
  this.underscore = false;
  this.display = function () {
    if (this.let === " ") {
      return " ";
    } else if (!this.underscore) {
      return "_";
    } else {
      return this.let;
    }
  }
  this.check = function (userIn) {
    if (userIn === this.let) {
      this.underscore = true;
    }
  }


}






module.exports = Letter;
