// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

// let arr = [1, 2, 3, 4, 5, 5, 5];

// let set = new Set([...arr]);

// let newSet = [...set];

// set.add(6);

// newSet; //?

/*
 *
 *
 *
 */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Способ 1:

let set = new Set(tags);
let uniqueTags = [...set];

console.log(uniqueTags);

// Способ 2:

const uniqueTags2 = tags.filter(
  (tag, index, arr) => arr.indexOf(tag) === index,
);
console.log('uniqueTags2:', uniqueTags2);
