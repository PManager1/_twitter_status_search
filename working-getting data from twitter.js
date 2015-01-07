var Twit = require('twit')
var _ = require('underscore')

var T = new Twit({
    consumer_key: 'X8Grq1lxceBJ1bo4d12rAeXXV',
    consumer_secret: 'vIuBbTentRtUmJ5k9iyknKTBrSa5N65KON3LvSiA07yPTxPmVt',
    access_token: '2834351286-MjvSf8PTBaEn5d7QmtnpRFIz59A3gdzoZM5fnBH',
    access_token_secret: 'nghmxxpL9PmA44SfMZe9qXYuYDlZhkkoQ7E2YnY56nMYA'
})

// var data  = { statuses: [],
//   search_metadata: 
//    { completed_in: 0.007,
//      max_id: 552899447748050940,
//      max_id_str: '552899447748050944',
//      query: 'punjabi+bandhan+mountain+view',
//      refresh_url: '?since_id=552899447748050944&q=punjabi%20bandhan%20mountain%20view&include_entities=1',
//      count: 100,
//      since_id: 0,
//      since_id_str: '0' } }; 



T.get('search/tweets', { q: 'mountain view', count: 100 }, function(err, data, response) {
  console.log(data);
  var a = data; 

  var arr = []; 

  _.each(a,function(o){
   
   // console.log(' udpated arr >> =', arr);    

   arr.push(_.pick(o,'id_str'));
   // console.log(' udpated arr >> =', arr);
});

})



//   console.log(' data.statuses = ', data.statuses);
//   console.log(' data.search_ metadata = ', data.search_metadata);  

//   var a = data.search_metadata; 
//   console.log(' a  = ', a);
//   var arr = []; 

//   _.each(a,function(o){
   
//    // console.log(' udpated arr >> =', arr);    

//    arr.push(_.pick(o,'id_str'));
//    console.log(' udpated arr >> =', arr);
// });



