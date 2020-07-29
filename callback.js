function bar(callback)
{
    callback('success call bar()');
}

function foo(a, b, callback)
{
    console.log("i'm foo(), a:%s, b:%s", a, b);
    bar(callback);
}

foo(1, 2, function(msg){ console.log(msg); });