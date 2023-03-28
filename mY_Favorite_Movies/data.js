let favMovies = [{
    title : "The Matrix",
    year : 1999,
    rating : 8.7,
    description : "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    directors : ["Lana Wachowski", "Lilly Wachowski"],
    writers : ["Lana Wachowski", "Lilly Wachowski"],
    stars : ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    genres : ["Action", "Sci-Fi"]
},
{
    title : "Shutter Island",
    year : 2010,
    rating : 8.2,
    description : "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    directors : ["Martin Scorsese"],
    writers : ["Laeta Kalogridis"],
    stars : ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    genres : ["Mystery", "Thriller"]
},
{
    title : "Whiplash",
    year : 2014,
    rating : 8.5,
    description : "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    directors : ["Damien Chazelle"],
    writers : ["Damien Chazelle"],
    stars : ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    genres : ["Drama", "Music"]
},
{
    title : "Harry Potter and the Half-Blood Prince",
    year : 2009,
    rating : 7.6,
    description : "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as the property of the Half-Blood Prince and begins to learn more about Lord Voldemort's dark past.",
    directors : ["David Yates"],
    writers : ["Steve Kloves", "J.K. Rowling"],
    stars : ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    genres : ["Adventure", "Family", "Fantasy"]
}];
    console.log("The lead director of the first movie is: " + favMovies[0].directors[0]);
    console.log("The lead writer of the second movie is: " + favMovies[1].writers[0]);
    console.log("The lead star of the third movie is: " + favMovies[2].stars[0]);
    console.log("The main genre of the fourth movie is: " + favMovies[3].genres[0]);

    let totalRating = 0;
for (let i = 0; i < favMovies.length; i++) {
    totalRating += favMovies[i].rating;
}
    let averageRating = totalRating / favMovies.length;

    console.log("Average rating: " + averageRating);

    let totalAge = 0;
for (let i = 0; i < favMovies.length; i++) {
    let movieAge = new Date().getFullYear() - favMovies[i].year;
    totalAge += movieAge;
}
    let averageAge = totalAge / favMovies.length;

    console.log("Average age: " + averageAge);