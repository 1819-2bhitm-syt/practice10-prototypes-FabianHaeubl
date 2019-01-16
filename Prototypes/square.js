function Square(length){
    this.length = length;
}

Square.prototype.getArea = function () {
    return this.length * this.length;
};

Square.prototype.getCircumference = function(){
    return 4 * this.length;
};
module.exports = Square;