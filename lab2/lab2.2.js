var prevprev=0
var prev=1
var fib_next = function (){
    var next=prev+prevprev
    prevprev=prev
    prev=next
    return next;
}
