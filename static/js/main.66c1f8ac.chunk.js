(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},2:function(e){e.exports={text:['Hi Sydney! I was kinda joking when I said I\'d make this, but here we are. This is my "loveLetters" program. Click/Press the left and right sides to scroll through notes',"I'm going to write new notes every day, and put them here for you to read. You'll also be able to view any old notes whenever you want.","These first one's are a few slides long, sorry, but it's story time.","I remember when we first started dating, and we'd spend as nights watching tv until midnight. One of my fondest memories of that was actually before we started dating","We had been holding hands all through the movie, but at some point I decided to put my arm around you. Instead of pulling away like I expected, you leaned in","That night, you fell asleep on the couch with my arm around you. We hugged goodbye that night for like 15 minutes and you started to fall asleep again...","That night was so great, because it made me feel so insanely loved, more than I'd ever felt before.","I had hated myself for so long, I just didn't think anyone could love me, but you did.","You always contradicted yourself when the topic came up, you'd basically express you didn't have feelings for me because... [insert reason]","But, in the end, we got together, and I couldn't have been happier about that.","Through the good, the bad, the sad, and the terrible, I love you. We've changed so much since we met, and I'm pretty damned sure at this point we are to be together forever.","I love you more than everything in the universe, put together, on a giant kebab, with a honey glaze, roasted on aged wood in the universe dragon powered furnace.","In just a few short months we'll be able to live together. That thought, of being able to go to bed with you and wake up next to you every day makes me immeasurably happy."]}},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=(a(18),a(5)),h=a(6),d=a(8),u=a(7),l=a(9),c=a(1),g=(a(20),a(2)),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).iterateLeft=a.iterateLeft.bind(Object(c.a)(Object(c.a)(a))),a.iterateRight=a.iterateRight.bind(Object(c.a)(Object(c.a)(a))),a.onChange=a.onChange.bind(Object(c.a)(Object(c.a)(a))),a.state={currentText:g.text[g.text.length-1],day:g.text.length,input:""},a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"iterateLeft",value:function(){this.setState({currentText:g.text[this.state.day-2],day:this.state.day-1})}},{key:"iterateRight",value:function(){this.setState({currentText:g.text[this.state.day],day:this.state.day+1})}},{key:"onChange",value:function(e){this.setState({currentText:this.state.currentText,day:this.state.day,input:e.target.value})}},{key:"render",value:function(){return"nathanlovesme"===this.state.input?o.a.createElement(o.a.Fragment,null,console.log(this.state),o.a.createElement("p",{id:"heart-text"},'"',this.state.currentText,'"'),o.a.createElement("div",{id:"loveButtons"},this.state.day-1>0?o.a.createElement("button",{id:"prevButton",onClick:this.iterateLeft},"Last"):o.a.createElement("div",{id:"prevButton"}),this.state.day<g.text.length?o.a.createElement("button",{id:"nextButton",onClick:this.iterateRight},"Next"):o.a.createElement("div",{id:"nextButton"}))):(console.log(this.state),o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{onChange:this.onChange,type:"password",class:"passcode"})))}}]),t}(o.a.Component),m=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,23)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)})};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),m()}},[[10,3,2]]]);
//# sourceMappingURL=main.66c1f8ac.chunk.js.map