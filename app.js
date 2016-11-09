function getDaysBetween(date1, date2) {
  if (date1.toDateString() === date2.toDateString()) { return 0; }
  var one_day=1000*60*60*24;
  var difference_ms = date2.getTime() - date1.getTime();
  return Math.round(difference_ms/one_day); 
}

var prompt = new Vue({
  el: '#prompt',
  data: {
    message: 'How many days until ',
    date: new Date().toLocaleDateString()
  }
});

var daysLeft = new Vue({
  el: "#days-left",
  data: {
    message: getDaysBetween(new Date(), new Date(prompt.date)) + " days left."
  }
});
