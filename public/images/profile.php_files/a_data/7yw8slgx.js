/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  February 17th 2010 1:48:07 PM PST                            */
/*      Machine:  10.16.140.104                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:7yw8slgx                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/d262kr6ibbsc4804.pkg.js                                   */

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("if (window.CavalryLogger) { CavalryLogger.start_js([\"js\\\/d262kr6ibbsc4804.pkg.js\"]); }\n\nArbiter.inform(\"template\\\/registerTemplate\", {\"name\":\"\\\/gigaboxx\\\/templates\\\/GBSearchBox.tmpl\",\"template\":\"\\n<form bindPoint=\\\"root\\\" listen=\\\"submit: searchSubmit\\\" action=\\\"#\\\" class=\\\"GBSearchBox\\\">\\n  <span class=\\\"GBSearchBox_Input\\\">\\n    <input bindPoint=\\\"typeahead\\\"\\n              listen=\\\"focus: searchFocus\\\"\\n                name=\\\"q\\\"\\n           maxlength=\\\"100\\\"\\n             results=\\\"0\\\"\\n        autocomplete=\\\"off\\\"\\n         placeholder=\\\"${placeholder}\\\"\\\/>\\n  <\\\/span>\\n  <span class=\\\"GBSearchBox_Submit\\\">\\n    <a bindPoint=\\\"submit\\\" listen=\\\"click: searchSelectSubmit\\\" class=\\\"GBSearchBox_SubmitLink\\\" href=\\\"#\\\">\\n      <span class=\\\"GBSearchBox_Button\\\">&nbsp;<\\\/span>\\n    <\\\/a>\\n  <\\\/span>\\n<\\\/form>\\n\"}, Arbiter.BEHAVIOR_PERSISTENT);\nfunction UIToolbarWell(a){this._root=a;this._leftSide=this._root.find('span.UIToolbarWell_Left');this._rightSide=this._root.find('span.UIToolbarWell_Right');this._secondaryContentContainer=this._root.find('div.UIToolbarWell_SecondaryContent');return this;}UIToolbarWell.prototype.addContent=function(b,a){if(a=='left'){this._leftSide.appendContent(b);}else if(a=='right')this._rightSide.appendContent(b);};UIToolbarWell.prototype.addButton=function(b,a){b.setSuppressMargin(true);var c=$N('span',{className:'UIToolbarWell_Button'},b.getNodes());this.addContent(c,a);return this;};UIToolbarWell.prototype.reset=function(){DOM.empty(this._leftSide);DOM.empty(this._rightSide);return this;};UIToolbarWell.prototype.addSecondaryContent=function(a){this._secondaryContentContainer.appendContent(a);this.setShowSecondaryContent(true);};UIToolbarWell.prototype.setShowSecondaryContent=function(a){CSS.conditionClass(this._secondaryContentContainer,'hidden_elem',!a);};\nfunction group_remove_user(b,c){var a='\/groups.php';if(c!=0)a+='?id='+c;new AsyncRequest().setURI('\/ajax\/group_actions_ajax.php').setData({gid:b,remove:1}).setHandler(goURI.bind(null,a)).setErrorHandler(ErrorDialog.showAsyncError).send();}function group_add_user(a){new AsyncRequest().setURI('\/ajax\/group_actions_ajax.php').setData({gid:a,join:1}).setHandler(goURI.curry('\/group.php?gid='+a,false)).send();}function group_remove_officer(a,b){new AsyncRequest().setURI('\/ajax\/group_actions_ajax.php').setData({gid:a,uid:b,remove_officer:1}).setHandler(function(){document.location.reload();}).setErrorHandler(ErrorDialog.showAsyncError).send();}function group_ask_leave(b,e,c,d){if(c!=\"\")c+=\"<br \/><br \/>\";c+=_tx(\"Are you sure you want to remove your membership from {group-name}?\",{'group-name':htmlize(d)});var a=new Dialog().setTitle(_tx(\"Remove group membership?\")).setBody(c).setButtons([Dialog.newButton('remove',_tx(\"Remove\"),'',function(){group_remove_user(b,e);a.hide();}),Dialog.CANCEL]).show();return false;}function group_ask_join(b,d){var c=_tx(\"Do you want to join {group-name}?\",{'group-name':htmlize(d)});var a=new Dialog().setTitle(_tx(\"Add group membership?\")).setBody(c).setButtons([Dialog.newButton('join',_tx(\"Join\"),'',function(){group_add_user(b);a.hide();}),Dialog.CANCEL]).show();return false;}\nfunction ui_tokenizer_source(b,c){this.parent.construct(this);if(typeof(b)=='string')b=JSON.decode(b);if(b.length&&typeof(b[0])==\"string\")for(var a=0;a<b.length;a++)b[a]={t:b[a],i:b[a]};copy_properties(this,c);this.values=b;this.build_index();}ui_tokenizer_source.extend('static_source');ui_tokenizer_source.prototype.text_placeholder=ui_tokenizer_source.prototype.text_noinput=false;ui_tokenizer_source.prototype.gen_html=function(c,a){var b=['<div>',typeahead_source.highlight_found(c.t,a),'<\/div>'];if(c.s)b.push('<div><small>',htmlspecialchars(c.s),'<\/small><\/div>');return b.join('');};\nfunction ToolTips(){copy_properties(this,{tipBox:$N('div'),tipInner:$N('div'),_showTimer:null});CSS.addClass(this.tipBox,'tooltip');CSS.addClass(this.tipInner,'tooltip_inner');this.tipBox.appendChild(this.tipInner);DOM.getRootElement().appendChild(this.tipBox);}ToolTips.TOP_CENTER={orientClassName:'tooltip_top_center'};ToolTips.RIGHT_CENTER={orientClassName:'tooltip_right_center'};ToolTips.BOTTOM_CENTER={orientClassName:'tooltip_bottom_center'};ToolTips.LEFT_CENTER={orientClassName:'tooltip_left_center'};ToolTips.DEFAULT=ToolTips.TOP_CENTER;copy_properties(ToolTips.prototype,{show:function(event){var b=$E(event).getTarget();var a=DataStore.get(b,'tooltip',{}).delay||0;if(!a){this._show(b);}else if(!this._showTimer)this._showTimer=this._show.bind(this,b).defer(a);},_show:function(c){var a=DataStore.get(c,'tooltip');if(a&&a.tip){this.tipInner.setContent(HTML(a.tip));CSS.setClass(this.tipBox,'tooltip');if(a.className)this.tipBox.addClass(a.className);this.tipBox.style.display='block';this.tipBox.style.visibility='hidden';this.tipBox.style.position='absolute';this.tipBox.style.zIndex='102';orientation=a.orientation||ToolTips.DEFAULT;var d;var b=Vector2.getElementDimensions(this.tipBox);switch(orientation){case ToolTips.RIGHT_CENTER:d=Vector2.getElementCompassPoint(c,Vector2.compass.southeast).add(3,-(Vector2.getElementDimensions(c).y+b.y)\/2);break;case ToolTips.TOP_CENTER:d=Vector2.getElementCompassPoint(c,Vector2.compass.north).add(-b.x\/2,-b.y-3);break;case ToolTips.LEFT_CENTER:d=Vector2.getElementCompassPoint(c,Vector2.compass.southwest).add(-b.x-7,-(Vector2.getElementDimensions(c).y+b.y)\/2);break;case ToolTips.BOTTOM_CENTER:d=Vector2.getElementCompassPoint(c,Vector2.compass.south).add(-b.x\/2,3);break;default:throw new Error(sprintf('Unknown tooltip orientation: %s.',orientation));}CSS.addClass(this.tipBox,orientation.orientClassName);this.tipBox.style.visibility='visible';if(a.offset)d=d.sub(a.offset);d.setElementPosition(this.tipBox);(function(){Rect.getElementBounds(this.tipBox).boundWithin(Rect.getViewportBounds()).getPositionVector().setElementPosition(this.tipBox);}).bind(this).defer();}else this.hide();return this;},hide:function(event){if(this._showTimer){clearTimeout(this._showTimer);this._showTimer=null;}this.tipBox.style.display='';return this;}});copy_properties(ToolTips,{instance:null,getInstance:function(){return ToolTips.instance||(ToolTips.instance=new ToolTips());},setTips:function(e,d,a,c){for(var b in e)ToolTips.setTip(b,e[b],d,a,c);return ToolTips;},setTip:function(c,i,g,a,f){var b=ge(c);if(b){var e=ToolTips.getInstance();var h=e.show.bind(e);var d=e.hide.bind(e);DataStore.set(b,'tooltip',{tip:i,orientation:g,delay:a,offset:f});b.listen('mouseover',h);b.listen('mouseout',d);}return ToolTips;},configureTip:function(b,c,d){switch(c){case 'orientation':case 'delay':case 'tip':case 'className':b=ge(b);if(b){var a=DataStore.get(b,'tooltip');a[c]=d;DataStore.set(b,'tooltip',a);}return ToolTips;break;}throw new TypeError('Invalid property, consult documentation.');}});\nvar SocialGraphManager=function(){var c=false;var a=-1;var d=-1;var b=null;var e=function(h){if(!c)return null;var i={node_id:d};i['class']=a;copy_properties(h,i);return h;};var f=function(j,h,i){new AsyncRequest().setURI(j).setData(e(h)).setHandler(i?i:bagofholding).send();return false;};var g=function(j,i){if(!(i=e(i)))return;var h=new AsyncRequest().setMethod('POST').setURI(j).setData(i);b=new Dialog().setModal(true).setAsync(h).show();return false;};return {init:function(h,i){c=true;a=h;d=i;return this;},getCurrentNodeID:function(){return d;},showInviteDialog:function(){g('\/ajax\/social_graph\/invite_dialog.php',{});},showAddAdminDialog:function(){g('\/ajax\/social_graph\/add_admin_dialog.php',{});},showBrowseDialog:function(h){var i=URI.getRequestURI().getQueryData();if('viewas' in i){if(h==null)h={};h.viewas=i.viewas;}g('\/ajax\/social_graph\/dialog\/browse.php',h||{});},submitDialog:function(i,j){if(Dialog.getCurrent()){var h=serialize_form($(i));Dialog.getCurrent().hide();if(h.ids||h.email_addresses)g(j,h);}},cancelDialog:function(){if(b)b.hide();},fetch:function(i,l,m,k,j){var o='\/ajax\/social_graph\/fetch.php';var h={edge_type:i,page:m,limit:k};var n=URI.getRequestURI().getQueryData();if('viewas' in n)h.viewas=n.viewas;if(l)copy_properties(h,l);return f(o,h,j);},search:function(k,j,i){var l='\/ajax\/social_graph\/search.php';var h={query:k};if(j)copy_properties(h,j);return f(l,h,i);},add:function(k,j,n,h,m,l){var o='\/ajax\/social_graph\/add.php';var i={fbids:k,edge_type:j,app_id:h,message:m};if(n)copy_properties(i,n);return f(o,i,l);},remove:function(k,j,h,n,m,l){var o='\/ajax\/social_graph\/remove.php';var i={fbid:k,edge_type:j,ban:h,message:m};if(n)copy_properties(i,n);return f(o,i,l);}};}();\nArbiter.inform(\"template\\\/registerTemplate\", {\"name\":\"\\\/templates\\\/UIObjectListing.tmpl\",\"template\":\"\\n\\n<div bindPoint=\\\"root\\\" class=\\\"UIObjectListing clearfix\\\">\\n    <div class=\\\"UIObjectListing_Pic\\\">\\n      <a href=\\\"${href}\\\">\\n        <img class = \\\"UIProfileImage UIProfileImage_LARGE\\\" bindPoint=\\\"pic\\\" \\\/>\\n      <\\\/a>\\n    <\\\/div>\\n    <div class=\\\"UIObjectListing_MetaData\\\">\\n      <a bindPoint=\\\"title\\\" class=\\\"UIObjectListing_Title\\\" href=\\\"${href}\\\">\\n        ${title}\\n        <span bindPoint=\\\"alternatetitle\\\"\\\/>\\n      <\\\/a>\\n      <div class=\\\"UIObjectListing_MetaDataSecondary\\\">\\n        <span bindPoint=\\\"subtitle\\\" class=\\\"UIObjectListing_Subtitle\\\"\\\/>\\n        <span bindPoint=\\\"subtext\\\" class=\\\"UIObjectListing_Subtext\\\"\\\/>\\n      <\\\/div>\\n    <\\\/div>\\n    <div class=\\\"UIObjectListing_RightContent\\\" bindPoint=\\\"rightContent\\\">\\n      <div class=\\\"UIObjectListing_RemoveContainer hidden_elem\\\" bindPoint=\\\"removeContainer\\\">\\n        <a class=\\\"UIObjectListing_RemoveLink\\\" bindPoint=\\\"removeLink\\\" href=\\\"#\\\">&nbsp;<\\\/a>\\n      <\\\/div>\\n      <div class=\\\"UIObjectListing_ActionContainer hidden_elem\\\" bindPoint=\\\"actionContainer\\\">\\n      <\\\/div>\\n    <\\\/div>\\n<\\\/div>\\n\"}, Arbiter.BEHAVIOR_PERSISTENT);\nfunction UIObjectListing(a){copy_properties(this,{_data:a,_dirty:true,root:null,pic:null,actionContainer:null,removeContainer:null,removeLink:null,rightContent:null,subtext:null});this._removeLinkHandler=bagofholding;this._control=false;var b=URI('\/templates\/UIObjectListing.tmpl');this.parent.construct(this,b,this._data);}UIObjectListing.extend('TemplateObject');UIObjectListing.prototype.setBoldTitle=function(a){CSS.conditionClass(this.root,'UIObjectListing_TitleNormal',!a);};UIObjectListing.prototype.setPicPadding=function(a){CSS.conditionClass(this.root,'UIObjectListing_PicPadding',a);};UIObjectListing.prototype.getId=function(){return this._data.id;};UIObjectListing.prototype.setSubtext=function(a){DOM.setContent(this.subtext,a);return this;};UIObjectListing.prototype.setActionControl=function(a){this._control=a;DOM.setContent(this.actionContainer,a.getNodes());CSS.removeClass(this.actionContainer,'hidden_elem');return this;};UIObjectListing.prototype.getActionControl=function(){return this._control;};UIObjectListing.prototype.setRemoveControl=function(a,b,c){CSS.conditionClass(this.removeContainer,'hidden_elem',!a);CSS.conditionClass(this.root,'UIObjectListing_HasRemoveControl',a);if(a){if(b)this._removeLinkHandler=b;if(c)ToolTips.setTip(this.removeLink,c,ToolTips.TOP_CENTER,0,new Vector2(0,5));}};UIObjectListing.prototype.setRightContent=function(a){DOM.setContent(this.rightContent,a);return this;};UIObjectListing.prototype._removeLinkClick=function(a){this._removeLinkHandler();return false;};UIObjectListing.prototype.paint=function(){this.pic.src=this._data.pic;if(this._data.removeable)CSS.removeClass(this.removeContainer,'hidden_elem');if(this._data.alternate_title){DOM.setContent(this.alternatetitle,'('+this._data.alternate_title+')');}else DOM.remove(this.alternatetitle,null);if(this._data.subtitle)DOM.setContent(this.subtitle,this._data.subtitle);CSS.conditionClass(this.subtitle,'UIObjectListing_Padding',this._data.subtitle);if(this._data.subtext)this.setSubtext(this._data.subtext);Event.listen(this.removeLink,'click',this._removeLinkClick.bind(this));if(!this._data.href)DOM.replace(this.title,$N('span',{className:this.title.className},DOM.getText(this.title)));this._dirty=false;};\n\nif (window.Bootloader) { Bootloader.done([\"js\\\/d262kr6ibbsc4804.pkg.js\"]); }")