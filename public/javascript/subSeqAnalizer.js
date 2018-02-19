

const SubSeqArr = function(k){
    this.windowSize = k;
    this.currentSeqType = null;
    this.currentSeqStart =  0;
    this.SeqTotals = [];
    this.curr = null;
    this.last = null;
}
SubSeqArr.prototype.add = function(price){
    if (curr > last) {
        if (this.currentSeqType !== 'inc') {
            this.currentSeqType = 'inc'
            this.currentSeqStart = length - 2
        }

    }
    else if (curr === last) {
        this.currentSeqType = null;
        this.currentSeqStart = length - 1
    }
    else {
        this.currentSeqType = 'dec'
        this.currentSeqStart = length - 2
    }
}
SubSeqArr.prototype.build = function (prices){
    this.SeqTotals[0] = 0
    const last = prices.shift();
    while(this.SeqTotals.length < this.windowSize){
        const curr = prices.shift();
        const length = this.SeqTotals.length;


    }
}
const SubSeqAnalizer = function(prices,k){
    const subSeqArr = new SubSeqArr(k).build(prices);
    console.log(prices,k);
    prices.forEach((price)=>{
        subSeqArr.add(price);
    });


}
