const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(process.argv[2], (error, desc) => {
if (error) {
console.log('Error fetch details:', error);
} else if (desc === 0){
console.log('Breed not found');
}else {
console.log(desc);
}
});