export function millisecondsToHuman (t) {
  var timestamp=new Date(t).getTime();
  var todate=new Date(timestamp).getDate();
  var tomonth=new Date(timestamp).getMonth()+1;
  var toyear=new Date(timestamp).getFullYear();
  var original_date=tomonth+'/'+todate+'/'+toyear;
  return original_date
}


export function fetchRecipes (postId) {
 
  return fetch(`http://localhost:5001/posts/'+postId+'/comments`)
    .then((res) => res.json())
    .then(({ hits }) => hits.length)
}