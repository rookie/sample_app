/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  December 21st 2009 1:56:45 AM PST                            */
/*      Machine:  10.16.140.106                                                */
/*       Source:  Backing Store                                                */
/*     Location:  js/ufi/tracking.js h:7c5lvnd6                                */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/ufi/tracking.js                                           */

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("if (window.CavalryLogger) { CavalryLogger.start_js([\"js\\\/ufi\\\/tracking.js\"]); }\n\nfunction ufi_add_ft_hidden_node(c){if(c.link_data)return;var a=collect_data_attrib(c,'ft');if(count(a)){var b=$N('input',{type:'hidden',name:'link_data',value:JSON.encode(a)});c.appendChild(b);}}function ufi_add_all_link_data(){DOM.scry(document.body,'form.commentable_item').forEach(ufi_add_ft_hidden_node);}\n\nif (window.Bootloader) { Bootloader.done([\"js\\\/ufi\\\/tracking.js\"]); }")