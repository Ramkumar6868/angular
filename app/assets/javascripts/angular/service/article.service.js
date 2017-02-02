article.factory('ArticleService', ['$resourse', function($resourse){
  return $resourse('articles/:id.json',
    {}, {
          query: {isArray: true, method: "GET"}
    })
}])