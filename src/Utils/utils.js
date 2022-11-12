export let nameToId = (name) => {
   let id = name.toLowerCase().split(' ').join('-');
   return id;
}