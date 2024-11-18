"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{3904:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const{site:a}=(0,n.useStaticQuery)("3000541721"),r=a.siteMetadata.description;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("meta",{name:"description",content:r}),l.createElement("meta",{property:"og:title",content:t}),l.createElement("meta",{property:"og:description",content:r}),l.createElement("meta",{property:"og:type",content:"website"}))}},1924:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h},default:function(){return b}});var l=a(7294),n=a(9106),r=a(1883),i=a(8032),c="Greetings-module--accent__text--36e73",s="Greetings-module--link__a--5501e",o=a(8971);var m=()=>{var e;const t=null===(e=(0,r.useStaticQuery)("401890992").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"Greetings-module--greetings__div--672bd"},l.createElement(i.S,{className:"rounded-image",layout:"fixed",formats:["auto","webp","avif"],src:"../../../images/profile-pic.jpg",width:128,height:128,quality:100,alt:"Profile picture",__imageData:a(7654)}),l.createElement("div",{className:"Greetings-module--greetings-container__div--3acbe"},l.createElement("h1",{className:"Greetings-module--title__h1--28379"},"Hello!",l.createElement("br",null)),l.createElement(o.Z,{paragraphClass:"Greetings-module--subtitle__p--8f105"},"I am ",l.createElement("span",{className:"Greetings-module--name__span--516e1"},t.name)),l.createElement(o.Z,null,"I am an italian ",l.createElement("span",{className:c},"software developer")," based in Milan.",l.createElement("br",null),"I strongly believe in good practices and team working."),l.createElement(o.Z,null,"My passion for software development dates back to my childhood, when I would spend hours tinkering with CSS and HTML to create unique themes for an online forum. This love propelled me towards a career in software development, which I officially began in 2016."),l.createElement(o.Z,null,"I thrive in an environment where teamwork is appreciated and encouraged. Collaborating with others to exchange ideas, knowledge and even unwind with a refreshing beer, is what makes work meaningful and enjoyable to me."),l.createElement(o.Z,null,"While writing code I always try to apply some magic tricks which will transform bad code into clean code.",l.createElement("br",null),"My passion lies in keeping things simple."),l.createElement(o.Z,null,"If you are interested on my technical skills you can check my ",l.createElement("a",{className:s,href:t.linkedin},"LinkedIn")," profile or follow me on ",l.createElement("a",{className:s,href:t.github},"Git Hub"),"."),l.createElement(o.Z,null,"Although coding is a significant part of my life, I find balance in my diverse passions. ",l.createElement("span",{className:c},"Music")," has always held a special place in my heart, and I eagerly explore every genre. In my free time I like being a self-taught guitar player, you can find me on ",l.createElement("a",{className:s,href:t.spotify},"Spotify")," sharing my favorite tunes. I'm also fascinated by ",l.createElement("span",{className:c},"photography")," and love to capture the beauty of ",l.createElement("span",{className:c},"nature")," during hikes.")))};var d=e=>{let{label:t}=e;return l.createElement("div",{className:"Divider-module--divider__div--3a2a3"},l.createElement("div",{className:"Divider-module--dots__dov--c71d6"},"..."),l.createElement("span",{className:"Divider-module--label__span--3f09f"},t))};var u=e=>{let{buttonId:t,label:a,buttonClass:n,onButtonClick:r}=e;return l.createElement(l.Fragment,null,l.createElement("button",{key:t,className:"Button-module--button--ea751 "+n,onClick:()=>r(t)},a))};var p=e=>{let{pages:t,onButtonClick:a}=e;const{0:n,1:r}=(0,l.useState)(0),i=e=>{r(e),a(e)};return l.createElement(l.Fragment,null,l.createElement("div",{className:"Pagination-module--blog-pagination__div--9da91"},t.map(((e,t)=>l.createElement(u,{key:t,buttonId:t,buttonClass:t===n?"Pagination-module--selected-page__button--6adb9":"",label:(t+1).toString(),onButtonClick:i})))))};var g=e=>{let{posts:t}=e;const{0:a,1:n}=(0,l.useState)(0),i=[];for(let l=0;l<t.length;l+=2){const e=t.slice(l,l+2);i.push(e)}return l.createElement(l.Fragment,null,0===i.length?l.createElement(o.Z,null,"No posts found :c"):l.createElement("ol",{className:"Articles-module--posts__ol--6744d"},i[a].map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"Articles-module--posts-item__li--9a55c",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",{className:"Articles-module--post-item__header--8e308"},l.createElement("h2",{className:"Articles-module--post-item__h2--95448"},l.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{className:"Articles-module--posts-item__p--16369",dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))})),l.createElement(p,{pages:i.map(((e,t)=>t.toString())),onButtonClick:e=>n(e)})))},f=a(3904);var b=e=>{let{data:t,location:a}=e;return l.createElement(n.Z,{location:a,title:""},l.createElement(m,null),l.createElement(d,{label:"Posts"}),l.createElement(g,{posts:[]||0}))};const h=()=>l.createElement(f.Z,{title:"Hello! I'm Stefano"})},7654:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#a8c8e8","images":{"fallback":{"src":"/static/746d5e88baa65ac289015ccb1cc0d42a/e1fe2/profile-pic.jpg","srcSet":"/static/746d5e88baa65ac289015ccb1cc0d42a/e1fe2/profile-pic.jpg 128w,\\n/static/746d5e88baa65ac289015ccb1cc0d42a/80079/profile-pic.jpg 256w","sizes":"128px"},"sources":[{"srcSet":"/static/746d5e88baa65ac289015ccb1cc0d42a/4c254/profile-pic.avif 128w,\\n/static/746d5e88baa65ac289015ccb1cc0d42a/fbdba/profile-pic.avif 256w","type":"image/avif","sizes":"128px"},{"srcSet":"/static/746d5e88baa65ac289015ccb1cc0d42a/b529c/profile-pic.webp 128w,\\n/static/746d5e88baa65ac289015ccb1cc0d42a/99d55/profile-pic.webp 256w","type":"image/webp","sizes":"128px"}]},"width":128,"height":128}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-43c459e890f8323f9852.js.map