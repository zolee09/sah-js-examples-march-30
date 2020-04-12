// 4th part

$('p').css('background', 'purple');
$('p').text('<strong>hello world</strong>');
$('p').html('<strong>hello world</strong>');
$('p').append('<strong> another</strong>');

//$('div').remove();

$('button').click(() => {
    $('.first').toggleClass('hidden');
})

// From 1st part to the 3d
console.log("Break until 17:10");

console.log("Javascript is working!");

let colors = ["orange", "blue", "green", "purple"]

let post = {
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 33;

if (age > 18) {
    console.log("you're an adult");
}
else {
    console.log("you're a kind");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(colors);

let myFunction = x => {
    console.log(x);
}

let greeter = name => {
    console.log("Hello, " + name);
    if (name === "Adam") {
        console.log("he's an adult");
    }
}

greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");

colors.forEach(color => {
    console.log(color);
});

console.log("this is the end of our code");