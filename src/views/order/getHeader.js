//Takes the item object and returns n tags with most frequency
export default (data, n = 3) => {
    var tags = new Map();
    
    //Iterate through each items tags and add to map and increase value by 1
    for(var i = 0; i < data.length; i++){
        for(const tag of data[i].tags){
            tags.set(tag, tags.get(tag) == undefined ? 1 : tags.get(tag) + 1);
        }
    }

    //Sort map by value and return n tags, or all if n = 0
    return [...tags.entries()].sort((a,b) => b[1] - a[1]).slice(0, n === 0 ? tags.length : n)
};