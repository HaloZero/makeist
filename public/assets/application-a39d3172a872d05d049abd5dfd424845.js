function debounce(e,t,a){var s;return function(){var n=this,r=arguments,o=function(){s=null,a||e.apply(n,r)},i=a&&!s;clearTimeout(s),s=setTimeout(o,t),i&&e.apply(n,r)}}function autosaveStatusIcon(e){var t=["autosave"],a=[];return"ok"===e?(a.push(React.DOM.svg({viewBox:"0 0 16 16"},React.DOM.path({d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3 4.594l1.406 1.406-5.406 5.406-3.406-3.406 1.406-1.406 2 2 4-4z"}))),a.push("saved!")):(t.push("error"),a.push(React.DOM.svg({viewBox:"0 0 100 100"},React.DOM.path({d:"M96.285,87.674L54.799,15.818c-2.718-4.709-7.167-4.709-9.886,0L3.427,87.674c-2.718,4.71-0.494,8.562,4.944,8.562h82.972   C96.779,96.236,99.004,92.384,96.285,87.674z M49.98,83.335h-0.062c-2.667,0-4.652-1.983-4.652-4.899   c0-2.79,1.985-4.837,4.714-4.837c2.729,0,4.714,2.047,4.714,4.837C54.694,81.352,52.709,83.335,49.98,83.335z M54.322,48.544   c-1.178,6.636-2.109,13.334-3.039,20.465c-0.186,0.744-2.729,0.808-2.854,0c-0.929-7.131-1.921-13.829-3.101-20.465   c-0.372-2.356-0.558-3.474-0.558-4.527c0-1.489,1.055-2.667,5.086-2.667h0.061c3.846,0,5.024,1.178,5.024,2.667   C54.942,45.07,54.694,46.188,54.322,48.544z"}))),a.push("There was a problem!")),React.DOM.div({key:Math.random().toPrecision(4),className:t.join(" ")},a)}(function(){"use strict";function e(){}function t(e,t){for(var a=e.length;a--;)if(e[a].listener===t)return a;return-1}function a(e){return function(){return this[e].apply(this,arguments)}}var s=e.prototype,n=this,r=n.EventEmitter;s.getListeners=function(e){var t,a,s=this._getEvents();if(e instanceof RegExp){t={};for(a in s)s.hasOwnProperty(a)&&e.test(a)&&(t[a]=s[a])}else t=s[e]||(s[e]=[]);return t},s.flattenListeners=function(e){var t,a=[];for(t=0;t<e.length;t+=1)a.push(e[t].listener);return a},s.getListenersAsObject=function(e){var t,a=this.getListeners(e);return a instanceof Array&&(t={},t[e]=a),t||a},s.addListener=function(e,a){var s,n=this.getListenersAsObject(e),r="object"==typeof a;for(s in n)n.hasOwnProperty(s)&&-1===t(n[s],a)&&n[s].push(r?a:{listener:a,once:!1});return this},s.on=a("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=a("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,a){var s,n,r=this.getListenersAsObject(e);for(n in r)r.hasOwnProperty(n)&&(s=t(r[n],a),-1!==s&&r[n].splice(s,1));return this},s.off=a("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,a){var s,n,r=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(s=a.length;s--;)r.call(this,t,a[s]);else for(s in t)t.hasOwnProperty(s)&&(n=t[s])&&("function"==typeof n?r.call(this,s,n):o.call(this,s,n));return this},s.removeEvent=function(e){var t,a=typeof e,s=this._getEvents();if("string"===a)delete s[e];else if(e instanceof RegExp)for(t in s)s.hasOwnProperty(t)&&e.test(t)&&delete s[t];else delete this._events;return this},s.removeAllListeners=a("removeEvent"),s.emitEvent=function(e,t){var a,s,n,r,o=this.getListenersAsObject(e);for(n in o)if(o.hasOwnProperty(n))for(s=o[n].length;s--;)a=o[n][s],a.once===!0&&this.removeListener(e,a.listener),r=a.listener.apply(this,t||[]),r===this._getOnceReturnValue()&&this.removeListener(e,a.listener);return this},s.trigger=a("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},s._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return n.EventEmitter=r,e},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:n.EventEmitter=e}).call(this),window.Modernizr=function(e,t,a){function s(e){M.cssText=e}function n(e,t){return typeof e===t}function r(e,t){return!!~(""+e).indexOf(t)}function o(e,t){for(var s in e){var n=e[s];if(!r(n,"-")&&M[n]!==a)return"pfx"==t?n:!0}return!1}function i(e,t,s){for(var r in e){var o=t[e[r]];if(o!==a)return s===!1?e[r]:n(o,"function")?o.bind(s||t):o}return!1}function c(e,t,a){var s=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+O.join(s+" ")+s).split(" ");return n(t,"string")||n(t,"undefined")?o(r,t):(r=(e+" "+D.join(s+" ")+s).split(" "),i(r,t,a))}var l,u,d,p="2.8.3",h={},f=t.documentElement,m="modernizr",v=t.createElement(m),M=v.style,R=({}.toString,"Webkit Moz O ms"),O=R.split(" "),D=R.toLowerCase().split(" "),y={},b=[],g=b.slice,w={}.hasOwnProperty;d=n(w,"undefined")||n(w.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(e,t){return w.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var a=g.call(arguments,1),s=function(){if(this instanceof s){var n=function(){};n.prototype=t.prototype;var r=new n,o=t.apply(r,a.concat(g.call(arguments)));return Object(o)===o?o:r}return t.apply(e,a.concat(g.call(arguments)))};return s}),y.cssanimations=function(){return c("animationName")};for(var N in y)d(y,N)&&(u=N.toLowerCase(),h[u]=y[N](),b.push((h[u]?"":"no-")+u));return h.addTest=function(e,t){if("object"==typeof e)for(var s in e)d(e,s)&&h.addTest(s,e[s]);else{if(e=e.toLowerCase(),h[e]!==a)return h;t="function"==typeof t?t():t,"undefined"!=typeof enableClasses&&enableClasses&&(f.className+=" "+(t?"":"no-")+e),h[e]=t}return h},s(""),v=l=null,h._version=p,h._domPrefixes=D,h._cssomPrefixes=O,h.testProp=function(e){return o([e])},h.testAllProps=c,h}(this,this.document),window._={},_.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},_.extend=function(e){if(!_.isObject(e))return e;for(var t,a,s=1,n=arguments.length;n>s;s++){t=arguments[s];for(a in t)hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};var SortMixin={sortHandler:function(e){e.preventDefault(),this.updatePrimaryContent({sort:e.target.innerHTML,sortDirection:!this.props.sortDirection})},sortNodes:function(e){return this.props.sort?e.sort(this.comparator(this.props.sort,this.props.sortDirection)):e},comparator:function(e,t){return["name","student_name"].indexOf(e)>-1?t?function(t,a){return t[e].toLowerCase()<a[e].toLowerCase()?-1:t[e].toLowerCase()>a[e].toLowerCase()?1:0}:function(t,a){return a[e].toLowerCase()<t[e].toLowerCase()?-1:a[e].toLowerCase()>t[e].toLowerCase()?1:0}:t?function(t,a){return t[e]-a[e]}:function(t,a){return a[e]-t[e]}}},StatusMessage={loading:function(){return Modernizr.cssanimations?React.DOM.div({className:"spinner"},React.DOM.div({className:"rect1"}),React.DOM.div({className:"rect2"}),React.DOM.div({className:"rect3"}),React.DOM.div({className:"rect4"}),React.DOM.div({className:"rect5"})):React.DOM.div({className:"loading-basic"},"Loading ...")},error:function(e){return React.DOM.div({className:"error-message"},"Oops! There was an error. Please try again and refresh the page. ",React.DOM.span(null,"("+e.status+" "+e.error+")"))}},Attendance=React.createClass({displayName:"Attendance",getDefaultProps:function(){return{attendances:[]}},render:function(){var e,t=0;return e=this.props.attendances.map(function(e,a){return e.attended&&t++,React.DOM.div({key:e.id,className:e.attended?"student present":"student",onClick:this.toggleStudent.bind(this,a)},React.DOM.img({src:e.student_avatar}),React.DOM.input({value:e.student_name,readOnly:!0}))},this),React.DOM.div(null,React.DOM.h3(null,t+" of "+this.props.attendances.length+" attended - (",this.props.attendances.length-t+" absent)"),React.DOM.div({className:"members-wrap"},e))},toggleStudent:function(e){this.props.attendances[e].attended=!this.props.attendances[e].attended,this.props.updatePrimaryContent({attendances:this.props.attendances}),$.ajax({type:"PUT",url:"/attendances/"+this.props.attendances[e].id,data:{attended:this.props.attendances[e].attended,authenticity_token:MK.CSRFTOKEN},dataType:"JSON"})}});Attendance=React.createFactory(Attendance);var Attendances=React.createClass({displayName:"Attendances",mixins:[SortMixin],getDefaultProps:function(){return{students:[]}},render:function(){var e,t,a,s,n=[],r=[],o=[];return t=this.createRow(_.extend({id:"_total",name:"Total"},this.props.aggregate)),e=this.sortNodes(this.props.students).map(function(e){var t=[];return e.attendances.forEach(function(e){t.push(React.DOM.td({className:e?"on":"off"},React.DOM.div()))}),n.push(React.DOM.tr({className:"d"},t)),e.total=e.attendances.length,this.createRow(e)},this),this.props.lessons.forEach(function(e,t){r.push(React.DOM.th({title:e.date_human},"L "+(t+1))),o.push(React.DOM.td(null,React.DOM.div({style:{height:e.percent+"%"}}),React.DOM.span(null,React.DOM.em(null,e.percent+"%"))))}),a=React.DOM.thead(null,React.DOM.tr(null,r)),s=React.DOM.tr({className:"totals"},o),React.DOM.div(null,React.DOM.h3(null,"Attendance Overview"),React.DOM.div({className:"attendences-wrap"},React.DOM.div({className:"rows-wrap"},React.DOM.div({className:"sorters"},React.DOM.span({onClick:this.sortHandler},"name"),React.DOM.span({onClick:this.sortHandler},"percent")),t,e),React.DOM.div({className:"data-wrap"},React.DOM.table(null,a,React.DOM.tbody(null,s,n)))))},createRow:function(e){return React.DOM.div({key:e.id,className:"row"},React.DOM.input({value:e.name,readOnly:!0}),e.avatar?React.DOM.img({src:e.avatar}):null,React.DOM.div({className:"summary"},React.DOM.span({className:"percent"},(e.percent||0)+"%"),React.DOM.span({className:"total"},(e.attended||0)+"/"+e.total)))},updatePrimaryContent:function(e){MK.Nav.setState({content:_.extend({},this.props,e)})}});Attendances=React.createFactory(Attendances);var Calendar=React.createClass({displayName:"Calendar",getDefaultProps:function(){return{}},render:function(){return console.log(this.props),React.DOM.div(null,React.DOM.iframe({src:MK.COURSE.calendar_embed,frameBorder:0,scrolling:"no",seamless:!0,width:"100%",height:600}))}});Calendar=React.createFactory(Calendar);var Courses=React.createClass({displayName:"Courses",getDefaultProps:function(){return{courses:[]}},render:function(){var e=this.props.courses.map(function(e){return React.DOM.li({key:e.id},React.DOM.h4(null,e.name),Lessons({lessons:e.lessons}))},this);return React.DOM.ul({className:"courses-wrap"},e)}});Courses=React.createFactory(Courses);var debouncedUpdate=debounce(function(e,t){this.saveOne(e,t)},350),Feedback=React.createClass({displayName:"Feedback",getDefaultProps:function(){return{feedback:{},autosave:{},questions:[{name:"engagement",question:"How engaged were you during the lesson?",data:["Not engaged at all.","Mostly tuned out but there were a few interesting parts.","Neutral. I was engaged but it had more to do with my effort than the actual lesson.","Mostly engaged but I did tune out -- it's hard to pay attention for so long!","I was engaged the entire time."]},{name:"comprehension",question:"How well did you understand this lesson's content?",data:["This lesson might as well have been in another language.","This lesson was pretty hard and I understood very little.","I think I got it...","I understood almost everything.","I fully understood everything!"]},{name:"pace",question:"How slow/fast did this lesson's pace feel to you?",data:["This lesson was way too slow! I got bored.","This lesson could have been a little faster.","This lesson was the perfect pace for me.","This lesson could have been a little slower.","This lesson was way too fast! I was not able to keep up."]},{name:"quality",question:"What did you think of lesson overall?",data:["This lesson provided no value to me.","This lesson could have been a lot better.","This lesson was ok.","This lesson was good -- It provided a lot of value to me.","This lesson was fantastic! Let me buy you a beer."]}],textareas:[{name:"comments",question:"Any comments you would like to add?"},{name:"learned",question:"3+ things you learned (separate by blank lines please)"},{name:"questions",question:"Any questions you still on the material?"}]}},render:function(){var e,t=[],a=0;for(var s in this.props.feedback)a++;a>0&&(this.props.questions.forEach(function(e){var a=e.data.map(function(t,a){var s;return this.props.autosave[e.name]&&this.props.feedback[e.name]===a+1&&(s=autosaveStatusIcon(this.props.autosave[e.name])),React.DOM.li({className:this.props.feedback[e.name]===a+1?"active":null,onClick:this.saveOne.bind(this,e.name,a+1)},React.DOM.div({className:"num"},(a+1).toString()),React.DOM.div(null,t),s)},this);t.push(React.DOM.div({className:"question"},React.DOM.h4(null,e.question),React.DOM.ul({className:"multiple-choice"},a)))},this),this.props.textareas.forEach(function(e){var a;this.props.autosave[e.name]&&(a=autosaveStatusIcon(this.props.autosave[e.name])),t.push(React.DOM.div({className:"question"},React.DOM.h4(null,e.question,a),React.DOM.textarea({defaultValue:this.props.feedback[e.name],onChange:this.handleTextarea.bind(this,e.name),ref:e.name})))},this));var n;return this.props.autosave.all&&(n=autosaveStatusIcon(this.props.autosave.all)),e=React.DOM.div({className:"submit-wrap"},React.DOM.button({onClick:this.handleSubmit},"Save"),n),React.DOM.div({className:"questions-wrap"},t,e)},handleTextarea:function(e,t){debouncedUpdate.call(this,e,t.target.value)},handleSubmit:function(e){e.preventDefault();var t={};this.props.textareas.forEach(function(e){t[e.name]=this.refs[e.name].getDOMNode().value},this),this.save(t)},save:function(e){var t,a,s,n={},r=0,o=this.props.updatePrimaryContent;for(var i in e)this.props.feedback[i]=e[i],t||(t=i),r++;a=r>1?"all":t,s={authenticity_token:MK.CSRFTOKEN},s.feedback=e,$.ajax({type:"PUT",url:"/feedbacks/"+this.props.feedback.id,data:s,dataType:"JSON"}).done(function(){n[a]="ok",o({autosave:n})}).error(function(){n[a]="error",o({autosave:n})})},saveOne:function(e,t){var a={};a[e]=t,this.save(a)}});Feedback=React.createFactory(Feedback);var FeedbackData=React.createClass({displayName:"FeedbackData",mixins:[SortMixin],getDefaultProps:function(){return{feedbacks:[],missing:[],feedbacksSortDirection:!0}},render:function(){var e,t,a,s;return t=React.DOM.thead(null,React.DOM.tr(null,React.DOM.th({onClick:this.sort},"student_name"),React.DOM.th({onClick:this.sort},"comprehension"),React.DOM.th({onClick:this.sort},"engagement"),React.DOM.th({onClick:this.sort},"pace"),React.DOM.th({onClick:this.sort},"quality"))),e=this.props.feedbacksSort?this.props.feedbacks.sort(this.comparator(this.props.feedbacksSort,this.props.feedbacksSortDirection)):this.props.feedbacks,a=e.map(function(e,t){return[React.DOM.tr({key:t,className:"main"},React.DOM.td(null,e.student_name),React.DOM.td(null,e.comprehension),React.DOM.td(null,e.engagement),React.DOM.td(null,e.pace),React.DOM.td(null,e.quality)),React.DOM.tr({className:"essays"},React.DOM.td({className:"name"},"comments"),React.DOM.td({colSpan:4},React.DOM.pre(null,e.comments))),React.DOM.tr({className:"essays"},React.DOM.td({className:"name"},"learned"),React.DOM.td({colSpan:4},React.DOM.pre(null,e.learned))),React.DOM.tr({className:"essays"},React.DOM.td({className:"name"},"questions"),React.DOM.td({colSpan:4},React.DOM.pre(null,e.questions)))]},this),this.props.missing.length>0&&(s=React.DOM.p(null,this.props.missing.length+" missing: "+this.props.missing.join(", "))),React.DOM.div(null,React.DOM.p(null,this.props.feedbacks.length+" of "+this.props.total_members+" total. "),s,React.DOM.table({id:"feedback-data"},t,React.DOM.tbody(null,a)))},sort:function(e){e.preventDefault(),this.props.updatePrimaryContent({feedbacksSort:e.target.innerHTML,feedbacksSortDirection:!this.props.feedbacksSortDirection})}});FeedbackData=React.createFactory(FeedbackData);var Lesson=React.createClass({displayName:"Lesson",getDefaultProps:function(){return{lesson:{}}},render:function(){var e=[];switch(e.push({name:"Materials",content:function(){return Materials},async:function(e){return"/lessons/"+e.lesson.id+"/materials"}}),MK.USER.type){case"Student":e.push({name:"My Feedback",content:function(){return Feedback},async:function(e){return"/students/"+MK.USER.id+"/lessons/"+e.lesson.id+"/feedback"}});break;case"Teacher":e.push({name:"Feedback Data",content:function(){return FeedbackData},async:function(e){return"/lessons/"+e.lesson.id+"/feedbacks"}}),e.push({name:"Attendance",content:function(){return Attendance},async:function(e){return"/lessons/"+e.lesson.id+"/attendances"}})}return React.DOM.div(null,SubTabs(_.extend({tabs:e},this.props)))}});Lesson=React.createFactory(Lesson);var Lessons=React.createClass({displayName:"Lessons",getDefaultProps:function(){return{lessons:[]}},render:function(){var e,t,a,s;return t=this.props.lessons.map(function(e,t){var a=[];return this.props.lesson&&e.id===this.props.lesson.id&&a.push(React.DOM.svg({viewBox:"0 0 16 16"},React.DOM.path({d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3 4.594l1.406 1.406-5.406 5.406-3.406-3.406 1.406-1.406 2 2 4-4z"}))),a.push("Lesson "+e.lesson+" "+e.date_human),React.DOM.li({key:e.id,onClick:this.loadLesson.bind(this,t)},a)},this),e=React.DOM.div({className:"lessons-list-wrap"},React.DOM.ul(null,t)),this.props.lesson&&(s=React.DOM.h3({onClick:this.toggle},"Lesson "+this.props.lesson.lesson+" "+this.props.lesson.date_human,React.DOM.svg({viewBox:"0 0 40 40"},React.DOM.path({transform:"rotate(180 20 20)",d:"M22.8,10.4L20,7.6l-2.8,2.8H9.5l0,22h21l0-22H22.8z M26.5,28.4h-13  v-2h13V28.4z M26.5,22.4h-13v-2h13V22.4z M26.5,16.4h-13v-2h13V16.4z"}))),a=Lesson(_.extend({_key:this.props.lesson.id,updatePrimaryContent:this.updatePrimaryContent},this.props))),React.DOM.div({id:"lessons-dropdown",className:this.props.dropdown?"active":null},s,e,a)},loadLesson:function(e){this.props.lessons[e]&&this.updatePrimaryContent({lesson:this.props.lessons[e],dropdown:!1})},toggle:function(){this.updatePrimaryContent({dropdown:!this.props.dropdown})},updatePrimaryContent:function(e){MK.Nav.setState({content:_.extend({},this.props,e)})}});Lessons=React.createFactory(Lessons);var Materials=React.createClass({displayName:"Materials",getDefaultProps:function(){return{materials:{}}},render:function(){var e,t;return e=this.props.materials.contents?this.props.materials.contents.map(function(e){return React.DOM.li({key:e.path},React.DOM.img({src:"https://s3.amazonaws.com/makeist.com/app/dropbox-api-icons/48x48/"+e.icon+"48.gif"}),React.DOM.span(null,e.path),e.bytes?React.DOM.i(null,e.size):null,React.DOM.a({href:e.dl,target:"_blank"},"download"))},this):React.DOM.li(null,"No files found"),t=this.props.materials.dl?React.DOM.a({href:this.props.materials.dl,target:"_blank",className:"button"},"download all"):null,React.DOM.div({className:"materials-wrap"},React.DOM.h4(null,this.props.materials.path,t),React.DOM.ul(null,e))}});Materials=React.createFactory(Materials);var Members=React.createClass({displayName:"Members",getDefaultProps:function(){return{students:[]}},render:function(){var e=this.props.students.map(function(e){return React.DOM.div({key:e.id},React.DOM.img({src:e.avatar}),React.DOM.input({value:e.name}))},this);return React.DOM.div(null,React.DOM.h3(null,this.props.students.length+" Total Members"),React.DOM.div({className:"members-wrap"},e))}});Members=React.createFactory(Members);var NavTabs=React.createClass({displayName:"NavTabs",getInitialState:function(){return{active:0,tabs:[]}},render:function(){var e,t,a,s=[];return this.state.tabs.forEach(function(e,t){s.push(React.DOM.li({key:e.name,className:this.state.active===t?"active":null,onClick:this.setTab.bind(this,t)},e.name))},this),this.state.tabs.length>0&&this.state.active>-1&&(t=this.state.tabs[this.state.active],a=this.state.loaded?"error"===this.state.loaded?StatusMessage.error(this.state.content):t.content?t.content(this.state.content):t.name:StatusMessage.loading(),e=React.DOM.div({key:t.name+"cont",className:t.name.replace(" ","-").toLowerCase()+" inner"},a)),React.DOM.div(null,React.DOM.h2({id:"heading"},React.DOM.a({href:"/"},this.state.courseName)),React.DOM.ul({className:"nav-tabs"},s),React.DOM.div({className:"primary-content"},e))},setTab:function(e){if(this.state.tabs[e].async)if("function"==typeof this.state.tabs[e].async)this.setState({active:e,content:this.state.tabs[e].async()});else{var t=this,a={loaded:!1,active:e};this.setState(a),$.ajax({url:this.state.tabs[e].async,dataType:"JSON"}).done(function(e){t.setState({loaded:!0,content:e})}).error(function(e){t.setState({loaded:"error",content:{status:e.status,error:e.statusText}})})}else this.setState({active:e})}});NavTabs=React.createFactory(NavTabs);var SubTabs=React.createClass({displayName:"SubTabs",getDefaultProps:function(){return{activeTab:0,tabs:[]}},componentWillMount:function(){this.setTab(0)},componentDidUpdate:function(e){this.props._key&&this.props._key!=e._key&&this.setTab(0)},render:function(){var e,t=[],a=[];return this.props.tabs.forEach(function(s,n){t.push(React.DOM.li({key:s.name,className:this.props.activeTab===n?"active":null,onClick:this.setTab.bind(this,n)},s.name));var r=[s.name.replace(" ","-").toLowerCase(),"tab"];this.props.activeTab===n&&r.push("active"),e=this.props.loaded?"error"===this.props.loaded?StatusMessage.error(this.props.content):s.content?s.content()(this.props):s.name:StatusMessage.loading(),a.push(React.DOM.div({key:s.name+"cont",className:r.join(" ")},e))},this),React.DOM.div(null,React.DOM.ul({className:"tabs"},t),React.DOM.div({className:"tabs-content"},a))},setTab:function(e){var t=this.props.updatePrimaryContent;t({loaded:!1,activeTab:e}),this.props.tabs[e].async?$.ajax({url:this.props.tabs[e].async(this.props),dataType:"JSON"}).done(function(e){e.loaded=!0,t(e)}).error(function(e){t({loaded:"error",content:{status:e.status,error:e.statusText}})}):t({activeTab:e})}});SubTabs=React.createFactory(SubTabs);