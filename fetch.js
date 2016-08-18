fetch('https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=recentchanges&rctype=new&rcnamespace=14')
  .then(response => response.json())
  .then(data => data.query.recentchanges)
  .then(items => items.forEach(item => {
    var a = document.createElement('a')
    a.href = 'https://en.wikipedia.org/?curid=' + item.pageid
    a.target = '_blank'
    a.style.display = 'block'
    a.textContent = item.title
    document.body.appendChild(a)
  }))
