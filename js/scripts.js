(function(){

$('.hoverme').smallipop({
	theme: 'black'
});

      var count = 0,
      list = [
        {
          service: 'bitly',
          user: 'rollemaa'
        },
        // {
        //   service: 'blogger',
        //   user: '02638703378127213381'
        // },
        {
          service: 'delicious',
          user: 'rollex'
        },
        {
          service: 'deviantart',
          user: 'rolleq'
        },
        // {
        //   service: 'disqus',
        //   user: 'ronilaukkarinen'
        // },
        {
          service: 'dribbble',
          user: 'rolle'
        },
        // {
        //   service: 'facebook_page',
        //   user: 'digitoimistodude'
        // },
        // find your flickr id @
        // http://www.flickr.com/services/api/explore/?method=flickr.people.findByUsername
        // {
        //   service: 'flickr',
        //   user: '11506579@N04'
        // },
        {
          service: 'formspring',
          user: 'rollex2'
        },
        {
          service: 'pocket',
          user: 'rolle-'
        },
        {
          service: 'github',
          user: 'ronilaukkarinen'
        },
        {
          service: 'bitbucket',
          user: 'ronilaukkarinen'
        },
        // // Change the key when you're using it on your own website
        // // You can create one on https://code.google.com/apis/console
        // {
        //   service: 'googleplus',
        //   user: '116255313263451216782',
        //   key: 'AIzaSyDv7bS89kbCUCukBcMi5-1z595MdI_2jjA'
        // },
        {
          service: 'lastfm',
          user: 'rolle-'
        },
        {
          service: 'linkedin',
          user: 'rolle'
        },
        {
          service: 'tumblr',
          user: 'rolle'
        },
        {
          service: 'twitter',
          user: 'rolle'
        },
        {
          service: 'vimeo',
          user: 'rollex'
        },
        {
          service: 'wordpress',
          user: 'rolleweb'
        },
        {
          service: 'youtube',
          user: 'rollex2'
        },
        {
          service: 'rss',
          user: 'http://www.rollemaa.org/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.rollemaa.org/pikkuinen/feed/'
        },
        {
          service: 'rss',
          user: 'http://unet.rollemaa.org/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.pulina.fi/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.huurteinen.fi/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.problemsolv.in/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.dude.fi/blogi/feed/'
        },
      ];

      Date.prototype.toISO8601 = function(date) {
          var pad = function (amount, width) {
              var padding = "";
              while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
                  padding += "0";
              return padding + amount.toString();
          }
          date = date ? date : new Date();
          var offset = date.getTimezoneOffset();
          return pad(date.getFullYear(), 4)
              + "-" + pad(date.getMonth() + 1, 2)
              + "-" + pad(date.getDate(), 2)
              + "T" + pad(date.getHours(), 2)
              + ":" + pad(date.getMinutes(), 2)
              + ":" + pad(date.getUTCSeconds(), 2)
              + (offset > 0 ? "-" : "+")
              + pad(Math.floor(Math.abs(offset) / 60), 2)
              + ":" + pad(Math.abs(offset) % 60, 2);
      };

      $("#lifestream").lifestream({
        limit: 100,
        list: list,
        feedloaded: function(){
          count++;
          // Check if all the feeds have been loaded
          if( count === list.length + 1 ){
            $("#lifestream li").each(function(){
              var element = $(this),
                  date = new Date(element.data("time"));
              element.append(' <abbr class="timeago" title="' + date.toISO8601(date) + '">' + date + "</abbr>");
            })
            $("#lifestream .timeago").timeago();
          }
        }
      });
    })();