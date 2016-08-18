fetch('https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=recentchanges&rctype=new&rcnamespace=14').then(function (response) {
  return response.json();
}).then(function (data) {
  return data.query.recentchanges;
}).then(function (items) {
  return items.forEach(function (item) {
    var a = document.createElement('a');
    a.href = 'https://en.wikipedia.org/?curid=' + item.pageid;
    a.target = '_blank';
    a.style.display = 'block';
    a.textContent = item.title;
    document.body.appendChild(a);
  });
});
