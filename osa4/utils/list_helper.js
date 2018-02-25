const dummy = (blogs) => {
    return dummy.length
  }


const totalLikes = (blogs) => {
    var total = 0;
    for (s of blogs) {
    total += s.likes
      }
  

    return total
}

const favoriteBlog = (blogs) => {
    var max = 0
    var favorite = null
    for (s of blogs) {
        if (s.likes > max) {
            max = s.likes
            favorite = s
        }
    }
    return favorite
}

function replacer(key, value) {
    if (key === '_id' || key === 'likes' || key === '__v' || key === 'url') {
      return undefined;
    }
    return value;
  }



const mostLikes = (blogs) => {

    const array = blogs.map(item => ({
        "author": item.author,
        "likes": item.likes
      }));
    var max = 0
    var favorite = null
    var likes = 0;
    for (s of array) {
        if (s.likes > max) {
            max = s.likes
            favorite = s
        }
    }

    for (k of array) {
       if(k.author === favorite.author) {
           
        favorite.likes += k.likes
        console.log(favorite.likes)
       }
    }
    favorite.likes = favorite.likes/2
    return favorite;
}

const mostBlogs = (blogs) => {
    const array = blogs.map(item => ({
        "author": item.author
      }));
    
    var length = array.length;
    
    var ArrayWithUniqueValues = [];
    
    var objectCounter = {};
    for (i = 0; i < length; i++) {
        var currentMemboerOfArrayKey = JSON.stringify(array[i]);
        var currentMemboerOfArrayValue = array[i];
        if (objectCounter[currentMemboerOfArrayKey] === undefined){
            ArrayWithUniqueValues.push(currentMemboerOfArrayValue);
             objectCounter[currentMemboerOfArrayKey] = 1;
        }else{
            objectCounter[currentMemboerOfArrayKey]++;
        }
    }
    
    return(Object.entries(objectCounter)[Object.entries(objectCounter).length-1] + ' Blogs');
}

  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostLikes,
    mostBlogs
  }