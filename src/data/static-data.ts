import { BookmarkType } from '../@types/app';
var uniqid = require('uniqid'); 

export const mockData: BookmarkType[] = [
    {id: uniqid(), name: "", url: "", description:"", category: "", tag: ""},
];

export const demoData: BookmarkType[] = [
  {id: 1, name: "mdn", url: "https://developer.mozilla.org/en-US/", description:"", category: "code", tag: "official docs"},
  {id: 2, name: "react", url: "https://reactjs.org/docs/hello-world.html", description:"",  category: "code", tag: "official docs"},
  {id: 3, name: "typescript", url: "https://www.typescriptlang.org/docs/", description:"", category: "code", tag: "official docs"},
  {id: 4, name: "css demystified", url: "https://courses.kevinpowell.co/view/courses/css-demystified", description:"", category: "code", tag: "online course"},
  {id: 5, name: "javascript dsa", url: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/", description:"", category: "code", tag: "online course"},
  {id: 6, name: "teach yourself cs", url: "https://teachyourselfcs.com/", description:"", category: "code", tag: "general guides"},
  {id: 7, name: "frontend roadmap", url: "https://roadmap.sh/frontend", description:"", category: "code", tag: "general guides"},

  {id: 8, name: "loveariddle", url: "https://loveariddle.tumblr.com/", description:"", category: "art", tag: "web artists"},
  {id: 9, name: "emmmeralddd", url: "https://emmmeralddd.tumblr.com/", description:"", category: "art", tag: "web artists"},
  {id: 10, name: "mivvu", url: "https://mivvu-archive.tumblr.com/", description:"", category: "art", tag: "web artists"},
  {id: 11, name: "ovopack", url: "https://ovopack.tumblr.com/", description:"", category: "art", tag: "web artists"},
  {id: 12, name: "jiro sasumo", url: "https://www.pixiv.net/en/users/326389", description:"", category: "art", tag: "web artists"},
  {id: 13, name: "ohprcr", url: "https://ohprcr.tumblr.com", description:"", category: "art", tag: "web artists"},
  {id: 14, name: "worvies", url: "https://twitter.com/Worvies", description:"", category: "art", tag: "web artists"},
  {id: 15, name: "creamyghost", url: "https://twitter.com/CreamyGhost", description:"", category: "art", tag: "web artists"},
  {id: 16, name: "1041uuu", url: "https://1041uuu.tumblr.com", description:"", category: "art", tag: "web artists"},
  {id: 17, name: "みなはむ", url: "https://www.pixiv.net/en/users/228408", description:"", category: "art", tag: "web artists"},
  {id: 18, name: "pon-marsh", url: "https://www.pixiv.net/en/users/5093857", description:"", category: "art", tag: "web artists"},
  {id: 19, name: "holly warburton", url: "https://holly-warbs.tumblr.com/", description:"", category: "art", tag: "web artists"},
  {id: 20, name: "海島千本", url: "https://www.pixiv.net/en/users/18362/", description:"", category: "art", tag: "web artists"},
  {id: 21, name: "illumi999", url: "https://www.instagram.com/illumi999/", description:"", category: "art", tag: "web artists"},
  
  {id: 22, name: "gumroad", url: "https://app.gumroad.com/library", description:"", category: "art", tag: "general learning"},
  {id: 23, name: "adorkastock", url: "https://www.adorkastock.com/pose/", description:"", category: "art", tag: "anatomy"},


  {id: 24, name: "yesterweb", url: "https://yesterweb.org/", description:"", category: "fun", tag: "indie web"},
  {id: 25, name: "sadgrl.online", url: "https://sadgrl.online/cyberspace/surf-the-web", description:"", category: "fun", tag: "indie web"},
  {id: 26, name: "rgb teahouse", url: "https://rgbteahouse.neocities.org/", description:"", category: "fun", tag: "indie web"},
  {id: 27, name: "vg museum", url: "http://www.vgmuseum.com/", description:"", category: "fun", tag: "video games"},
  {id: 28, name: "starmen.net", url: "http://www.starmen.net/", description:"", category: "fun", tag: "video games"},
  {id: 29, name: "sakugabooru", url: "http://www.sakugabooru.com/", description:"", category: "fun", tag: "anime"},
  {id: 30, name: "anilinks", url: "http://www.anilinks.neocities.org", description:"", category: "fun", tag: "anime"},
];
