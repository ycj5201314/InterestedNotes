    	function search(sender) {
     		var o = document.getElementById("kw");
	     	switch(sender.id){
	     		case 'douban':
	     			window.open('http://www.douban.com/search?q=' + o.value);
	     		break;
	     		case 'baidu':
	     			window.open('http://www.baidu.com/s?wd=' + o.value);
	     		break;
	     		case 'sogou':
	     			window.open('http://www.sogou.com/web?query=' + o.value)
	     		break;
	     		case '360so':
	     			window.open('http://http://www.so.com/s?q=' + o.value)
	     		break;
	     		case 'sinaweibo':
	     			window.open('http://s.weibo.com/weibo/' + o.value);
	     		break;
	     		case '163app':
	     			window.open('http://m.163.com/search/multiform?platform=1&query=' + o.value);
	     		break;
	     		case 'xiami':
	     			window.open('http://www.xiami.com/search?key=' + o.value);
	     		break;
	     		case 'wikipediazh':
	     			window.open('http://zh.wikipedia.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'flickr':
	     			window.open('https://secure.flickr.com/search/?q=' + o.value);
	     		break;
	     		case 'windowsphonecn':
	     			window.open('http://www.windowsphone.com/zh-cn/search?q=' + o.value);
	     		break;
	     		case 'googleplay':
	     			window.open('https://play.google.com/store/search?q=' + o.value);
	     		break;
	     		case 'youku':
	     			window.open('http://www.soku.com/search_video/q_' + o.value);
	     		break;
	     		case 'zhihu':
	     			window.open('http://www.zhihu.com/search?q=' + o.value);
	     		break;
	     		case 'quora':
	     			window.open('http://www.quora.com/search?q=' + o.value);
	     		break;
	     		case 'nounproject':
	     			window.open('http://thenounproject.com/search/?q= ' + o.value);
	     		break;
	     		case 'iconmonstr':
	     			window.open('http://iconmonstr.com/?s=' + o.value);
	     		break;
	     		case 'wikicommons':
	     			window.open('http://commons.wikimedia.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'webstagram':
	     			window.open('http://web.stagram.com/search/' + o.value);
	     		break;
	     		case 'cargo':
	     			window.open('http://cargocollective.com/search/' + o.value);
	     		break;
	     		case 'behance':
	     			window.open('http://www.behance.net/search?search=' + o.value);
	     		break;
	     		case 'godaddy':
	     			window.open('http://www.godaddy.com/domains/search.aspx?ci=54814&domainToCheck=' + o.value + '&tld=.com&checkAvail=1');
	     		break;
	     		case 'pinterest':
	     			window.open('http://pinterest.com/search/pins/?q=' + o.value);
	     		break;
	     		case 'linkedin':
	     			window.open('http://www.linkedin.com/search/fpsearch?type=people&keywords=' + o.value);
	     		break;
	     		case 'foursquare':
	     			window.open('https://foursquare.com/explore?q=' + o.value);
	     		break;
	     		case 'dribbble':
	     			window.open('http://dribbble.com/search?q=' + o.value);
	     		break;
	     		case 'stackoverflow':
	     			window.open('http://stackoverflow.com/search?q=' + o.value);
	     		break;
	     		case 'github':
	     			window.open('https://github.com/search?q=' + o.value);
	     		break;
	     		case 'wikipediaen':
	     			window.open('http://en.wikipedia.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'archdaily':
	     			window.open('http://www.archdaily.com/search/?q=' + o.value);
	     		break;
	     		case 'vimeo':
	     			window.open('https://vimeo.com/search?q=' + o.value);
	     		break;
	     		case 'youtube':
	     			window.open('https://www.youtube.com/results?search_query=' + o.value);
	     		break;
	     		case 'baiduzhidao':
	     			window.open('http://zhidao.baidu.com/search?=search&word=' + o.value);
	     		break;
	     		case 'gettycn':
	     			window.open('http://www.gettyimages.cn/newsr.php?thekeyword=sss' + o.value);
	     		break;
	     		case 'gettyimages':
	     			window.open('http://www.gettyimages.com/Search/Search.aspx?contractUrl=2&language=en-US&family=creative&assetType=image&excludenudity=false&p=' + o.value);
	     		break;
	     		case 'googlehk':
	     			window.open('https://www.google.com.hk/search?q=' + o.value);
	     		break;
	     		case 'googlehk2':
	     			window.open('https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp#hl=zh-CN&site=webhp&q=' + o.value);
	     		break;
	     		case 'tumblr':
	     			window.open('http://www.tumblr.com/tagged/' + o.value);
	     		break;
	     		case 'amazoncn':
	     			window.open('http://www.amazon.cn/s/search-alias%3Daps&field-keywords=' + o.value);
	     		break;
	     		case 'taobao':
	     			window.open('http://s.taobao.com/search?q=' + o.value);
	     		break;
	     		case '360buy':
	     			window.open('http://search.jd.com/Search?keyword=' + o.value + '&enc=utf-8');
	     		break;
	     		case 'dianping':
	     			window.open('http://www.dianping.com/search/keyword/4/0_' + o.value);
	     		break;
	     		case 'twitter':
	     			window.open('https://twitter.com/search?q=' + o.value);
	     		break;
	     		case 'baubauhaus':
	     			window.open('http://www.baubauhaus.com/search?q=' + o.value);
	     		break;
	     		case 'designspiration':
	     			window.open('http://designspiration.net/tag/' + o.value);
	     		break;
	     		case 'renren':
	     			window.open('http://browse.renren.com/s/all?q=' + o.value);
	     		break;
	     		case 'overlapps':
	     			window.open('http://www.overlapps.com/?s=' + o.value);
	     		break;
	     		case 'chromeexts':
	     			window.open('https://chrome.google.com/webstore/search-extensions/' + o.value);
	     		break;
	     		case 'uxmatters':
	     			window.open('http://www.uxmatters.com/mt/mt-ftsearch.cgi?IncludeBlogs=1&limit=40&search=' + o.value);
	     		break;
	     		case 'v2ex':
	     			window.open('https://encrypted.google.com/search?q=site:v2ex.com ' + o.value);
	     		break;
	     		case 'google-douban':
	     			window.open('https://encrypted.google.com/search?q=site:douban.com ' + o.value);
	     		break;
	     		case 'csdn':
	     			window.open('http://so.csdn.net/search?q=' + o.value);
	     		break;
	     		case 'facebook':
	     			window.open('https://www.facebook.com/search/results.php?q=' + o.value);
	     		break;
	     		case 'dianyingfm':
	     			window.open('http://dianying.fm/category/key_' + o.value);
	     		break;
	     		case 'mtime':
	     			window.open('http://search.mtime.com/search/?' + o.value);
	     		break;
	     		case 'reddit':
	     			window.open('http://www.reddit.com/search?q=' + o.value);
	     		break;
	     		case 'iconfinder':
	     			window.open('http://www.iconfinder.com/search/?q=' + o.value);
	     		break;
	     		case '163news':
	     			window.open('http://news.youdao.com/search?keyfrom=news.163&q='+ o.value);
	     		break;
	     		case 'cnn':
	     			window.open('http://edition.cnn.com/search/?query=' + o.value);
	     		break;
	     		case 'bbcnews':
	     			window.open('http://www.bbc.co.uk/search/news/?q=' + o.value);
	     		break;
	     		case 'ap':
	     			window.open('http://www.ap.org/Search/SearchResults?searchkeywords=' + o.value);
	     		break;
	     		case 'reuters':
	     			window.open('http://www.reuters.com/search?blob=' + o.value);
	     		break;
	     		case 'iciba':
	     			window.open('http://www.iciba.com/' + o.value);
	     		break;
	     		case 'googlenewscn':
	     			window.open('https://www.google.com/search?hl=zh-CN&gl=cn&tbm=nws&q=' + o.value);
	     		break;
	     		case 'ifeng':
	     			window.open('http://search.ifeng.com/sofeng/search.action?q=' + o.value);
	     		break;
	     		case 'verge':
	     			window.open('http://www.theverge.com/search?q=' + o.value);
	     		break;
	     		case 'ifanr':
	     			window.open('http://www.ifanr.com/?s=' + o.value);
	     		break;
	     		case 'techcrunch':
	     			window.open('http://techcrunch.com/search/' + o.value);
	     		break;
	     		case 'tnw':
	     			window.open('http://thenextweb.com/?s=' + o.value);
	     		break;
	     		case 'engadget':
	     			window.open('http://www.engadget.com/search/?q=' + o.value);
	     		break;
	     		case 'gdgt':
	     			window.open('http://gdgt.com/search/' + o.value);
	     		break;
	     		case 'ign':
	     			window.open('http://ap.ign.com/en/pages/search/?search=' + o.value);
	     		break;
	     		case 'gamespot':
	     			window.open('http://www.gamespot.com/search/?qs=' + o.value);
	     		break;
	     		case 'gametrailers':
	     			window.open('http://www.gametrailers.com/search?keywords=' + o.value);
	     		break;
	     		case 'polygon':
	     			window.open('http://www.polygon.com/search?q=' + o.value);
	     		break;
	     		case 'guardian':
	     			window.open('http://www.guardian.co.uk/search?q=' + o.value);
	     		break;
	     		case 'gigaom':
	     			window.open('http://gigaom.com/?s=' + o.value);
	     		break;
	     		case '36kr':
	     			window.open('http://www.36kr.com/search/?q=' + o.value);
	     		break;
	     		case 'ali213':
	     			window.open('http://so.ali213.net/search.asp?wd=' + o.value);
	     		break;
	     		case 'kickstarter':
	     			window.open('http://www.kickstarter.com/projects/search?utf8=%E2%9C%93&term=' + o.value);
	     		break;
	     		case 'cnet':
	     			window.open('http://www.cnet.com/1770-5_1-0.html?query=' + o.value);
	     		break;
	     		case 'allthingsd':
	     			window.open('http://allthingsd.com/?s=' + o.value);
	     		break;
	     		case 'creativeapplications':
	     			window.open('http://www.creativeapplications.net/index.php?s=' + o.value);
	     		break;
	     		case 'visualizing':
	     			window.open('http://www.visualizing.org/search/node/' + o.value);
	     		break;
	     		case 'visualy':
	     			window.open('http://visual.ly/search/node?keys=' + o.value);
	     		break;
	     		case 'aiga':
	     			window.open('http://designarchives.aiga.org/#/entries/' + '/_/grid/relevance/asc/0/65/90' + o.value);
	     		break;
	     		case 'imdb':
	     			window.open('http://www.imdb.com/find?q=' + o.value);
	     		break;
	     		case 'ehow':
	     			window.open('http://www.ehow.com/search.html?s=' + o.value);
	     		break;
	     		case 'logowikia':
	     			window.open('http://logos.wikia.com/wiki/index.php?search=' + o.value);
	     		break;
	     		case 'wikia':
	     			window.open('http://www.wikia.com/index.php?search=' + o.value);
	     		break;
	     		case 'internetarchive':
	     			window.open('http://archive.org/search.php?query=' + o.value);
	     		break;
	     		case 'etsy':
	     			window.open('http://www.etsy.com/search?q=' + o.value);
	     		break;
	     		case 'svpply':
	     			window.open('https://svpply.com/shop?search=' + o.value);
	     		break;
	     		case 'deviantart':
	     			window.open('http://browse.deviantart.com/?qh=&section=&global=1&q=' + o.value);
	     		break;
	     		case 'logopond':
	     			window.open('http://logopond.com/search/?search=' + o.value);
	     		break;
	     		case 'society6':
	     			window.open('http://society6.com/search/?q=' + o.value);
	     		break;
	     		case 'moma':
	     			window.open('http://www.moma.org/search?query=' + o.value);
	     		break;
	     		case '9gag':
	     			window.open('https://9gag.com/search?query=' + o.value);
	     		break;
	     		case 'weheartit':
	     			window.open('http://weheartit.com/search?utf8=%E2%9C%93&ac=0&query=' + o.value);
	     		break;
	     		case 'awwwards':
	     			window.open('http://www.awwwards.com/search-websites?text=' + o.value);
	     		break;
	     		case 'myfonts':
	     			window.open('http://www.myfonts.com/search/' + o.value);
	     		break;
	     		case 'qyer':
	     			window.open('http://search.qyer.com/index?wd=' + o.value);
	     		break;
	     		case 'notcot':
	     			window.open('http://www.notcot.org/?action=search&query=' + o.value);
	     		break;
	     		case 'weibopic':
	     			window.open('http://s.weibo.com/pic/' + o.value);
	     		break;
	     		case 'appstorm':
	     			window.open('http://appstorm.net/?s=' + o.value);
	     		break;
	     		case 'soundcloud':
	     			window.open('https://soundcloud.com/search?q=' + o.value);
	     		break;
	     		case 'lastfm':
	     			window.open('http://www.last.fm/search?q=' + o.value);
	     		break;
	     		case 'tumblrblog':
	     			window.open('http://www.tumblr.com/search/blogs?q=' + o.value);
	     		break;
	     		case 'guokr':
	     			window.open('http://www.guokr.com/search/all/?wd=' + o.value);
	     		break;
	     		case 'qiushibaike':
	     			window.open('http://www.baidu.com/baidu?word=' + '&ie=utf-8&tn=bds&cl=3&ct=2097152&si=www.qiushibaike.com&s=on' + o.value);
	     		break;
	     		case 'lofter':
	     			window.open('http://www.lofter.com/tag/' + o.value);
	     		break;
	     		case 'zcool':
	     			window.open('http://www.zcool.com.cn/tosearch.do?world=' + o.value);
	     		break;
	     		case 'issuu':
	     			window.open('http://issuu.com/search?q=' + o.value);
	     		break;
	     		case 'slideshare':
	     			window.open('https://www.slideshare.net/search/slideshow?q=' + o.value);
	     		break;
	     		case 'ukgov':
	     			window.open('https://www.gov.uk/search?q=' + o.value);
	     		break;
	     		case 'bing':
	     			window.open('http://www.bing.com/search?q=' + o.value);
	     		break;
	     		case 'delicious':
	     			window.open('https://delicious.com/search?p=' + o.value);
	     		break;
	     		case 'stumbleupon':
	     			window.open('http://www.stumbleupon.com/explore/' + o.value);
	     		break;
	     		case 'app':
	     			window.open('http://app.wozaixianshang.com/index.php?keyword=' + o.value);
	     		break;
	     		case 'doubanmovie':
	     			window.open('http://movie.douban.com/subject_search?search_text=' + o.value);
	     		break;
	     		case 'doubanmusic':
	     			window.open('http://music.douban.com/subject_search?search_text=' + o.value);
	     		break;
	     		case 'imgur':
	     			window.open('http://imgur.com/?q=' + o.value);
	     		break;
	     		case 'dxy':
	     			window.open('http://search.dxy.cn/?words=' + o.value);
	     		break;
	     		case 'dahuawang':
	     			window.open('http://stu.dahuawang.com/?s=' + o.value);
	     		break;
	     		case 'tieba':
	     			window.open('http://tieba.baidu.com/f?ie=utf-8&kw=' + o.value);
	     		break;
	     		case 'mop':
	     			window.open('http://www.baidu.com/s?wd=site%3Amop.com+' + o.value);
	     		break;
	     		case 'qidian':
	     			window.open('http://sosu.qidian.com/searchresult.aspx?searchkey=' + '&searchtype=%E7%BB%BC%E5%90%88' + o.value);
	     		break;
	     		case 'doubanbook':
	     			window.open('http://book.douban.com/subject_search?search_text=' + o.value);
	     		break;
	     		case 'kdnet':
	     			window.open('http://search.kdnet.net/?q=' + o.value);
	     		break;
	     		case 'doubanapp':
	     			window.open('http://www.douban.com/app/search?q=' + o.value);
	     		break;
	     		case 'googleplus':
	     			window.open('https://plus.google.com/u/0/s/' + o.value);
	     		break;
	     		case 'yqm':
	     			window.open('http://ma.wozaixianshang.com/index.php?keyword=' + o.value);
	     		break;
	     		case 'appstore':
	     			window.open('https://www.google.com.tw/search?q=site%3Aitunes.apple.com+' + o.value);
	     		break;
	     		case 'appdesignserved':
	     			window.open('http://www.appdesignserved.co/search?search=' + o.value);
	     		break;
	     		case 'etao':
	     			window.open('http://s.etao.com/search?q=' + o.value);
	     		break;
	     		case 'ishare':
	     			window.open('http://ishare.iask.sina.com.cn/search.php?key=' + o.value);
	     		break;
	     		case 'pandora':
	     			window.open('http://www.pandora.com/search/' + o.value);
	     		break;
	     		case 'lynda':
	     			window.open('http://www.lynda.com/search?q=' + o.value);
	     		break;
	     		case 'istockphoto':
	     			window.open('http://www.istockphoto.com/search/text/' + o.value);
	     		break;
	     		case 'medium':
	     			window.open('https://www.google.com.tw/search?q=site%3Amedium.com+' + o.value);
	     		break;
	     		case 'giphy':
	     			window.open('http://giphy.com/tags/' + o.value);
	     		break;
	     		case 'caawiki':
	     			window.open('http://caawiki.ivyb.org/index.php?title=%E7%89%B9%E6%AE%8A%3A%E6%90%9C%E7%B4%A2&search=' + o.value);
	     		break;
	     		case 'alternativeto':
	     			window.open('http://alternativeto.net/SearchResult.aspx?platform=all&search=' + o.value);
	     		break;
	     		case 'flck':
	     			window.open('http://www.fulicangku.com/search.php?mod=forum&searchid=1&orderby=lastpost&ascdesc=desc&searchsubmit=yes&kw=' + o.value);
	     		break;
	     		case 'appannie':
	     			window.open('http://www.appannie.com/search/?q=' + o.value);
	     		break;
	     		case 'fancy':
	     			window.open('http://www.fancy.com/search?q=' + o.value);
	     		break;
	     		case 'xyo':
	     			window.open('http://xyo.net/iphone/' + o.value + '/?country=CN');
	     		break;
	     		case 'knowyourmeme':
	     			window.open('http://knowyourmeme.com/search?q=' + o.value);
	     		break;
	     		case 'bilibili':
	     			window.open('http://www.bilibili.tv/search?keyword=' + o.value);
	     		break;
	     		case 'ted':
	     			window.open('http://www.ted.com/search?cat=ss_all&q=' + o.value);
	     		break;
	     		case 'jandan':
	     			window.open('http://jandan.net/search?q=' + o.value + '&cx=partner-pub-4352453996606420%3A9g4umvoigh7&cof=FORID%3A10&ie=UTF-8');
	     		break;
	     		case 'howcast':
	     			window.open('http://www.howcast.com/search?term=' + o.value);
	     		break;
	     		case 'xiachufang':
	     			window.open('http://www.xiachufang.com/search/?keyword=' + o.value);
	     		break;
	     		case 'acfun':
	     			window.open('http://www.acfun.tv/search.aspx#query=' + o.value);
	     		break;
	     		case '500px':
	     			window.open('http://500px.com/search?q=' + o.value);
	     		break;
	     		case 'duokan':
	     			window.open('http://book.duokan.com/search/' + o.value + '/1');
	     		break;
	     		case 'artstack':
	     			window.open('http://theartstack.com/search/' + o.value);
	     		break;
	     		case 'alexa':
	     			window.open('http://www.alexa.com/search?q=' + o.value);
	     		break;
	     		case 'fastcompany':
	     			window.open('https://www.google.com.tw/search?q=site%3Awww.fastcompany.com+' + o.value);
	     		break;
	     		case 'fastcodesign':
	     			window.open('https://www.google.com.tw/search?q=site%3Awww.fastcodesign.com+' + o.value);
	     		break;
	     		case 'fastcocreate':
	     			window.open('https://www.google.com.tw/search?q=site%3Awww.fastcocreate.com+' + o.value);
	     		break;
	     		case 'fastcoexist':
	     			window.open('https://www.google.com.tw/search?q=site%3Awww.fastcoexist.com+' + o.value);
	     		break;
	     		case 'fastcolabs':
	     			window.open('https://www.google.com.tw/search?q=site%3Awww.fastcolabs.com+' + o.value);
	     		break;

	     		case 'googleimage':
	     			window.open('https://www.google.com.tw/search?q=' + o.value + '&source=lnms&tbm=isch' );
	     		break;
	     		case 'googlemaps':
	     			window.open('https://maps.google.com.tw/maps?q=' + o.value);
	     		break;
	     		case 'processing':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=processing.org&as_q=' + o.value);
	     		break;
	     		case 'w3school':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=w3school.com.cn&as_q=' + o.value);
	     		break;
	     		
	     		case 'designboom':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=www.designboom.com&as_q=' + o.value);
	     		break;
	     		case 'wandoujia':
	     			window.open('http://www.wandoujia.com/search?key=' + o.value);
	     		break;
	     		case 'smashingmagazine':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=www.smashingmagazine.com/&as_q=' + o.value);
	     		break;
	     		case 'lonelyplanet':
	     			window.open('http://www.lonelyplanet.com/searchResult?q=' + o.value);
	     		break;
	     		case 'jiepang':
	     			window.open('http://jiepang.com/search/' + o.value);
	     		break;
	     		case 'yixun':
	     			window.open('http://searchex.51buy.com/html?area=1&charset=utf-8&as=1&key=' + o.value);
	     		break;
	     		case 'ikandou':
	     			window.open('http://ikandou.com/search/happy/?q=' + o.value);
	     		break;
	     		case 'kindle':
	     			window.open('http://www.amazon.cn/s/ref=nb_sb_noss?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&url=node%3D116169071&field-keywords=' + o.value);
	     		break;
	     		case 'indiegogo':
	     			window.open('http://www.indiegogo.com/projects?utf8=%E2%9C%93&filter_title=' + o.value + '&search_submit=Search');
	     		break;
	     		case 'xueqiu':
	     			window.open('http://xueqiu.com/k?q=' + o.value);
	     		break;
	     		case 'datatang':
	     			window.open('http://www.datatang.com/s/data?k=' + o.value);
	     		break;
	     		case 'icpsr':
	     			window.open('http://www.icpsr.umich.edu/icpsrweb/ICPSR/studies?q=' + o.value);
	     		break;
	     		case 'typekit':
	     			window.open('https://typekit.com/search?utf8=✓&q=' + o.value);
	     		break;
	     		case 'artsy':
	     			window.open('https://artsy.net/search?q=' + o.value);
	     		break;
	     		case 'googleart':
	     			window.open('http://www.google.com/culturalinstitute/browse/' + o.value);
	     		break;
	     		case 'ucdchina':
	     			window.open('http://ucdchina.com/search?query=' + o.value);
	     		break;
	     		case 'arstechnica':
	     			window.open('http://arstechnica.com/search/?query=' + o.value);
	     		break;
	     		case 'qqnews':
	     			window.open('http://www.soso.com/q?w=' + o.value + '&cid=qs.news.smb&site=news.qq.com&idx=f');
	     		break;
	     		case 'branch':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=branch.com&as_q=' + o.value);
	     		break;
	     		case 'wikivoyage':
	     			window.open('http://en.wikivoyage.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'wiktionary':
	     			window.open('http://en.wiktionary.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'wikibooks':
	     			window.open('http://en.wikibooks.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'wikinews':
	     			window.open('http://en.wikinews.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'wikidata':
	     			window.open('http://www.wikidata.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'wikiquote':
	     			window.open('http://en.wikiquote.org/w/index.php?search=' + o.value);
	     		break;
	     		case 'wikileaks':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=wikileaks.org&as_q=' + o.value);
	     		break;
	     		case 'betalist':
	     			window.open('http://betali.st/startups/search?q=' + o.value);
	     		break;
	     		case 'doubanalbum':
	     			window.open('https://encrypted.google.com/search?as_sitesearch=www.douban.com/photos/album&as_q=' + o.value);
	     		break;
	     		case 'tripadvisor':
	     			window.open('http://www.tripadvisor.com/Search?q=' + o.value);
	     		break;
	     		case 'chanyouji':
	     			window.open('http://chanyouji.com/search/attractions?q=' + o.value);
	     		break;
	     		case 'breadtrip':
	     			window.open('http://breadtrip.com/search/?q=' + o.value);
	     		break;
	     		case 'yyets':
	     			window.open('http://www.yyets.com/search/index?keyword=' + o.value);
	     		break;
	     		case 'weipan':
	     			window.open('http://vdisk.weibo.com/search/?type=public&keyword=' + o.value);
	     		break;
	     		case 'shooter':
	     			window.open('http://www.shooter.cn/search2/' + o.value);
	     		break;
	     		case 'Quixey':
	     			window.open('https://www.quixey.com/search/' + o.value);
	     		break;
	     		case 'minecraftwiki':
	     			window.open('http://zh.minecraftwiki.net/' + o.value);
	     		break;
	     		case 'yahoo':
	     			window.open('http://search.yahoo.com/search?p=' + o.value);
	     		break;
	     		case 'designernews':
	     			window.open('https://news.layervault.com/search?utf8=✓&query=' + o.value);
	     		break;
	     		case 'torrentsto':
	     			window.open('http://www.torrents.to/search/kickasstorrents/' + o.value);
	     		break;
	     		case 'tut':
	     			window.open('http://hub.tutsplus.com/search?utf8=%E2%9C%93&search%5Bkeywords%5D=' + o.value);
	     		break;
	     		case 'googletrans':
	     			window.open('https://translate.google.com/?q=' + o.value);
	     		break;
	     		case 'knicket':
	     			window.open('http://en.knicket.com/#!/overview/iphone/08/azf/0/' + o.value + '/apps');
	     		break;
	     		case 'tudou':
	     			window.open('http://www.soku.com/t/nisearch/' + o.value);
	     		break;
	     		case 'ebay':
	     			window.open('http://www.ebay.com/sch/' + o.value);
	     		break;
	     		case 'brandsoftheworld':
	     			window.open('http://www.brandsoftheworld.com/search/logo?search_api_views_fulltext=' + o.value);
	     		break;
	     		case 'beautifulpixels':
	     			window.open('https://beautifulpixels.com/?s=' + o.value);
	     		break;
	     		case 'aboutme':
	     			window.open('http://about.me/search/#!/q/' + o.value);
	     		break;
	     		case 'appledev':
	     			window.open('https://developer.apple.com/search/index.php?q=' + o.value);
	     		break;
	     		case 'cocoacontrols':
	     			window.open('https://www.cocoacontrols.com/search?utf8=✓&q=' + o.value);
	     		break;
	     		case 'cocoachina':
	     			window.open('https://www.google.com/search?q=' + o.value +'+site%3Acocoachina.com' );
	     		break;
	     		case 'code4app':
	     			window.open('http://code4app.com/search/' + o.value);
	     		break;
	     		case 'steam':
	     			window.open('http://store.steampowered.com/search/?snr=1_4_4__12&term=' + o.value);
	     		break;
	     		case 'indiedb':
	     			window.open('http://www.indiedb.com/search?q=' + o.value);
	     		break;
	     		case 'gmail':
	     			window.open('https://mail.google.com/mail/u/0/#search/' + o.value);
	     		break;
	     		case 'niice':
	     			window.open('http://niice.co/?search=' + o.value);
	     		break;
	     		case 'tagboard':
	     			window.open('https://tagboard.com/' + o.value);
	     		break;
	     		case 'fndio':
	     			window.open('https://fnd.io/#/search?mediaType=ios&term=' + o.value);
	     		break;
	     		case 'cocoapods':
	     			window.open('http://cocoapods.org/?q=' + o.value);
	     		break;
	     		case 'wolframalpha':
	     			window.open('http://www.wolframalpha.com/input/?i=' + o.value);
	     		break;
	     		case 'duckduckgo':
	     			window.open('https://duckduckgo.com/?q=' + o.value);
	     		break;
	     		case 'houzz':
	     			window.open('http://www.houzz.com/' + o.value);
	     		break;
	     		case 'dangdang':
	     			window.open('http://search.dangdang.com/?key=' + o.value);
	     		break;
	     		case 'snsname':
	     			window.open('searchurl' + o.value);
	     		break;
	     		case 'snsname':
	     			window.open('searchurl' + o.value);
	     		break;
	     		case 'snsname':
	     			window.open('searchurl' + o.value);
	     		break;
	     		case 'snsname':
	     			window.open('searchurl' + o.value);
	     		break;



	     	}		
 		}