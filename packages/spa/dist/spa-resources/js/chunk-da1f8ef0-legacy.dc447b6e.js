(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da1f8ef0"],{"1efe":function(t,e,s){"use strict";s.d(e,"a",function(){return p});var i=s("d225"),o=s("b0b4"),n=s("308d"),a=s("6bb5"),r=s("2a88"),c=s("4e2b"),l=s("9242"),d=s("9300"),u=s("dd93"),p=function(t){function e(){return Object(i["a"])(this,e),Object(n["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"load",value:function(t){t=t||{},Object(r["a"])(Object(a["a"])(e.prototype),"load",this).call(this,t),this.projectId=u["a"].isEmpty(t.projectId)?null:t.projectId,this.order=u["a"].isEmpty(t.order)?1:t.order<<0,this.title=u["a"].isEmpty(t.title)?"":t.title,this.description=u["a"].isEmpty(t.description)?"":t.description,u["a"].isArray(t.assets)?this.assets=d["a"].createInstances(t.assets):this.assets=this.assets||[]}}]),e}(l["a"])},2136:function(t,e,s){},"326d":function(t,e,s){},"3a45":function(t,e,s){"use strict";var i=s("2136"),o=s.n(i);o.a},"6beb":function(t,e,s){"use strict";var i=s("326d"),o=s.n(i);o.a},"6eaf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-body"},[s("project-sidebar",{attrs:{projectId:t.$route.params.projectId}}),s("main",{staticClass:"app-main"},[t.isPageLoaded?t._e():s("span",{staticClass:"loader loader-blend"}),t.isPageLoaded&&t.project.id>0?[s("header",{staticClass:"app-header"},[s("nav",{staticClass:"breadcrumbs"},[s("router-link",{staticClass:"breadcrumb-item",attrs:{to:{name:"projects"}}},[t._v(t._s(t.$t("Projects")))]),s("div",{staticClass:"breadcrumb-item editable active",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.project.title},on:{blur:t.updateProjectTitle,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.updateProjectTitle(e))}}},[t._v(t._s(t.project.title))]),s("div",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.$t("Guideline")))])],1),s("div",{staticClass:"flex-fill-block"}),s("button",{staticClass:"btn btn-cons-lg btn-success btn-loader m-l-10",class:{"btn-loader-active":t.isCreatingSection},on:{click:function(e){return e.preventDefault(),t.createSection()}}},[s("i",{staticClass:"fe fe-plus"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("New section")))])])]),t.isLoadingSections?s("div",{staticClass:"block txt-center"},[s("span",{staticClass:"loader loader-blend"})]):t._e(),t.isLoadingSections||t.orderedSections.length?t._e():s("div",{staticClass:"block txt-center"},[t._m(0),s("div",{staticClass:"content m-b-base"},[s("h4",[t._v(t._s(t.$t("Set up your project brand colors, logos and other assets.")))])]),s("button",{staticClass:"btn btn-lg btn-success btn-cons-xl btn-loader",class:{"btn-loader-active":t.isCreatingSection},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.createSection()}}},[s("i",{staticClass:"fe fe-plus"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("New section")))])])]),!t.isLoadingSections&&t.orderedSections.length?s("div",{staticClass:"guideline-sections-list"},t._l(t.orderedSections,function(e,i){return s("guideline-section",{key:e.id,attrs:{section:e,withMoveUpCtrl:i>=1,withMoveDownCtrl:i!=t.orderedSections.length-1},on:{sectionDelete:t.onSectionDelete,beforeSectionOrderUpdate:t.onSectionOrderUpdate}})}),1):t._e()]:t._e(),s("div",{staticClass:"flex-fill-block"}),s("app-footer",{staticClass:"m-t-base"})],2)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("figure",{staticClass:"mockup m-t-base m-b-base"},[s("div",{staticClass:"mockup-bg"}),s("div",{staticClass:"browser secondary"}),s("div",{staticClass:"browser primary"},[s("i",{staticClass:"fe fe-book-open"})])])}],n=(s("55dd"),s("f744")),a=s("dd93"),r=s("438c"),c=s("1efe"),l=s("051c"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"guideline-section"},[s("header",{staticClass:"section-header"},[s("div",{staticClass:"ctrl-item settings-ctrl"},[s("i",{staticClass:"fe fe-more-horizontal"}),s("toggler",{ref:"sectionDropdown",staticClass:"dropdown dropdown-sm"},[s("div",{staticClass:"dropdown-item",class:{disabled:!t.withMoveUpCtrl},on:{click:function(e){return e.preventDefault(),t.reorderSection("up")}}},[s("i",{staticClass:"fe fe-arrow-up"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Move up")))])]),s("div",{staticClass:"dropdown-item",class:{disabled:!t.withMoveDownCtrl},on:{click:function(e){return e.preventDefault(),t.reorderSection("down")}}},[s("i",{staticClass:"fe fe-arrow-down"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Move down")))])]),s("hr"),s("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.deleteSection()}}},[s("i",{staticClass:"fe fe-trash"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Delete")))])])])],1),s("h5",{ref:"titleElem",staticClass:"title m-l-10",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.section.title},on:{blur:function(e){return t.updateSection()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.updateSection())}}},[t._v(t._s(t.section.title))]),t._v("\n\n        ("),s("div",{ref:"descriptionElem",staticClass:"description",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.$t("Add description here...")},on:{blur:function(e){return t.updateSection()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.updateSection())}}},[t._v(t._s(t.section.description))]),t._v(")\n\n        "),s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"ctrl-item toggle-ctrl",on:{click:function(e){return e.preventDefault(),t.toggleSection()}}},[t.collapsed?[s("span",{staticClass:"txt m-r-5 txt-default"},[t._v(t._s(t.$t("Expand")))]),s("i",{staticClass:"fe fe-chevron-down"})]:[s("span",{staticClass:"txt m-r-5"},[t._v(t._s(t.$t("Collapse")))]),s("i",{staticClass:"fe fe-chevron-up"})]],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"section-content"},[s("draggable",{staticClass:"boxes-list assets-list",attrs:{group:"asset-section",draggable:".box-card",filter:".ignore-sort",fallbackTolerance:2,forceFallback:!0,animation:200,touchStartThreshold:0,list:t.orderedAssets},on:{change:t.onSortChange,start:t.onSortStart,end:t.onSortEnd}},[t._l(t.orderedAssets,function(e){return s("asset-box",{key:"asset_"+e.id,attrs:{asset:e},on:{assetDelete:t.onAssetDelete}})}),s("div",{staticClass:"box box-btns box-compact txt-hint ignore-sort",attrs:{slot:"header"},slot:"header"},[s("div",{ref:"addFileContainer",staticClass:"box-btn dz-clickable"},[s("div",{staticClass:"content"},[t.isAddingFile?[s("span",{staticClass:"loader loader-blend"})]:[s("div",{staticClass:"icon"},[s("i",{staticClass:"fe fe-file"})]),s("h5",{staticClass:"title"},[t._v(t._s(t.$t("Add file")))])]],2)]),s("div",{staticClass:"box-btn",on:{click:function(e){return e.preventDefault(),t.createColor()}}},[s("div",{staticClass:"content"},[t.isAddingColor?[s("span",{staticClass:"loader loader-blend"})]:[s("div",{staticClass:"icon"},[s("i",{staticClass:"fe fe-droplet"})]),s("h5",{staticClass:"title"},[t._v(t._s(t.$t("Add color")))])]],2)])])],2)],1)])},u=[],p=s("79e3"),h=s.n(p),f=s("9300"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-card box-compact",class:{"box-color":t.asset.isColor},on:{mouseleave:function(e){!t.$refs.assetDropdown||t.$refs.assetDropdown.hide()}}},[s("figure",{staticClass:"box-thumb",style:{background:t.asset.hex}},[t.asset.isFile?[s("div",{staticClass:"crop-wrapper"},[t.asset.isImage?s("img",{staticClass:"img",attrs:{src:t.asset.getFileUrl("medium"),alt:t.asset.title}}):s("span",{staticClass:"img img-alt"},[t._v(t._s(t.asset.fileExtension))])])]:t._e(),s("div",{staticClass:"thumb-overlay"},[t.asset.isImage?[s("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}}),s("div",{staticClass:"box-ctrl handle center",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[s("i",{staticClass:"fe fe-eye"})])]:t._e(),t.asset.isColor?[s("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openColorPicker()}}}),s("div",{staticClass:"box-ctrl handle center",attrs:{title:t.$t("Change color")},on:{click:function(e){return e.preventDefault(),t.openColorPicker()}}},[s("i",{staticClass:"fe fe-droplet",style:{color:t.asset.contrastHex}})])]:t._e(),s("div",{staticClass:"box-ctrl handle top-right"},[s("i",{staticClass:"fe fe-more-horizontal",style:{color:t.asset.contrastHex}}),s("toggler",{ref:"assetDropdown",staticClass:"dropdown dropdown-sm"},[t.asset.isFile?s("a",{staticClass:"dropdown-item",attrs:{href:t.asset.getFileUrl(),tabindex:"-1",download:"",target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-download"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Download")))])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" HEX")])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" RGB")])]):t._e(),s("hr"),s("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.deleteAsset()}}},[s("i",{staticClass:"fe fe-trash"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Delete")))])])])],1)],2)],2),s("div",{staticClass:"box-content"},[s("div",{key:"title",ref:"titleLabel",staticClass:"title",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.asset.title||t.$t("Title")},on:{blur:function(e){return t.saveTitle()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.saveTitle())}}},[t._v(t._s(t.asset.title))]),t.asset.isFile?[s("div",{staticClass:"meta"},[s("div",{staticClass:"meta-item txt-uppercase"},[t._v(t._s(t.asset.fileExtension))]),t.asset.isImage&&t.assetWidth>0&&t.assetHeight>0?s("div",{staticClass:"meta-item"},[t._v("\n                    "+t._s(t.assetWidth)+"x"+t._s(t.assetHeight)+"\n                ")]):t._e()])]:[s("label",{ref:"hexLabel"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.asset.hex,expression:"asset.hex"}],staticClass:"asset-color-input",attrs:{type:"color",id:"asset_color_"+t.asset.id},domProps:{value:t.asset.hex},on:{change:function(e){return t.saveHex()},input:function(e){e.target.composing||t.$set(t.asset,"hex",e.target.value)}}})]),s("div",{staticClass:"meta"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[t._v("\n                    "+t._s(t.asset.hex.toUpperCase())+"\n                ")]),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[t._v("\n                    "+t._s(t.asset.rgb.toUpperCase())+"\n                ")])])]],2),t.asset.isImage?s("relocator",[s("popup",{key:"asset_popup_"+t.asset.id,ref:"previewPopup",staticClass:"popup-image",scopedSlots:t._u([{key:"content",fn:function(){return[t.$refs.previewPopup&&t.$refs.previewPopup.isActive?s("img",{attrs:{src:t.asset.getFileUrl("original"),alt:t.asset.title}}):t._e()]},proxy:!0}],null,!1,4169098407)})],1):t._e()],1)},m=[],b=s("11b2"),C=s("3905"),g={name:"guideline-asset-box",components:{relocator:b["a"],popup:C["a"]},props:{asset:{type:f["a"],required:!0}},data:function(){return{assetWidth:0,assetHeight:0}},mounted:function(){var t=this;this.asset.isImage&&a["a"].loadImage(this.asset.getFileUrl()).then(function(e){t.assetWidth=e.width,t.assetHeight=e.height})},methods:{deleteAsset:function(){this.asset.id&&window.confirm(this.$t("Do you really want to delete the selected asset?"))&&(this.$toast(this.$t("Successfully deleted asset.")),n["a"].GuidelineAssets.delete(this.asset.id),this.$emit("assetDelete",this.asset.id))},copyToClipboard:function(t){a["a"].copyToClipboard(t)?this.$toast(this.$t("Successfully copied {text} to clipboard.",{text:t})):this.$toast(this.$t("Failed copying {text} to clipboard.",{text:t}),"danger")},openColorPicker:function(){this.asset.isColor&&this.$refs.hexLabel&&this.$refs.hexLabel.click()},saveHex:function(t){var e=this;t=t||this.asset.hex,this.$set(this.asset,"hex",t),n["a"].GuidelineAssets.update(this.asset.id,{hex:t}).then(function(t){e.asset.load(t.data)}).catch(function(t){e.$errResponseHandler(t)})},saveTitle:function(){var t=this,e=this.$refs.titleLabel;if(e&&e.innerText!=this.asset.title){if(!e.innerText)return e.innerText=this.asset.title,void e.blur();var s=e.innerText;this.$set(this.asset,"title",s),e.innerText="",setTimeout(function(){e.innerText=s,e.blur()},100),n["a"].GuidelineAssets.update(this.asset.id,{title:s}).then(function(s){t.asset.load(s.data),e.innerText=t.asset.title}).catch(function(e){t.$errResponseHandler(e)})}else e&&e.blur()},openPreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.open()},closePreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.close()}}},y=g,x=(s("3a45"),s("2877")),$=Object(x["a"])(y,v,m,!1,null,"81e4648c",null),_=$.exports,w=s("310e"),k=s.n(w),S={name:"guideline-section",components:{"asset-box":_,draggable:k.a},props:{section:{type:c["a"],required:!0},withMoveUpCtrl:{default:!1},withMoveDownCtrl:{default:!1}},data:function(){return{collapsed:!1,dropdownActive:!1,isAddingFile:!1,isAddingColor:!1,dropzone:null}},computed:{orderedAssets:function(){return this.section.assets.slice().sort(function(t,e){return t["order"]-e["order"]})}},mounted:function(){this.initFileUpload()},destroyed:function(){this.dropzone&&this.dropzone.destroy()},methods:{onSortStart:function(t){this.sortAnimationTimeoutId&&clearTimeout(this.sortAnimationTimeoutId),t.target&&t.target.classList.add("sort-started")},onSortEnd:function(t){this.sortAnimationTimeoutId&&clearTimeout(this.sortAnimationTimeoutId),this.sortAnimationTimeoutId=setTimeout(function(){t.target&&t.target.classList.remove("sort-started")},400)},onSortChange:function(t){t.removed?this.onAssetDelete(t.removed.element.id):t.added?this.addAsset(t.added.element,t.added.newIndex+1):t.moved&&this.updateAssetOrder(t.moved.element,t.moved.newIndex+1)},updateAssetOrder:function(t,e){if(t&&(t.guidelineSectionId!=this.section.id||t.order!=e)){if(e>t.order)for(var s in this.section.assets)this.section.assets[s].id!=t.id&&this.section.assets[s].order>t.order&&this.section.assets[s].order<=e&&this.$set(this.section.assets[s],"order",this.section.assets[s].order-1);else for(var i in this.section.assets)this.section.assets[i].id!=t.id&&this.section.assets[i].order<t.order&&this.section.assets[i].order>=e&&this.$set(this.section.assets[i],"order",this.section.assets[i].order+1);t.order=e,n["a"].GuidelineAssets.update(t.id,{order:e})}},addAsset:function(t,e){if(t&&t.guidelineSectionId!==this.section.id){e=Math.min(e,this.section.assets.length+1);for(var s=this.section.assets.length-1;s>=0;s--)this.section.assets[s].order>=e&&this.$set(this.section.assets[s],"order",this.section.assets[s].order+1);t=t.clone({order:e,guidelineSectionId:this.section.id}),this.section.assets.push(t),n["a"].GuidelineAssets.update(t.id,{order:e,guidelineSectionId:this.section.id})}},onAssetDelete:function(t){var e=0;for(var s in this.section.assets)if(this.section.assets[s].id==t){e=this.section.assets[s].order,this.$delete(this.section.assets,s);break}for(var i in this.section.assets)this.section.assets[i].order>e&&this.$set(this.section.assets[i],"order",this.section.assets[i].order-1)},toggleSection:function(){this.collapsed?this.collapsed=!1:this.collapsed=!0},updateSection:function(t){var e=this;!this.section.id||this.$refs.titleElem.innerText==this.section.title&&this.$refs.descriptionElem.innerText==this.section.description||(this.$refs.titleElem.innerText.trim()?(this.$refs.titleElem.blur(),this.$refs.descriptionElem.blur(),n["a"].GuidelineSections.update(this.section.id,{title:this.$refs.titleElem.innerText,description:this.$refs.descriptionElem.innerText}).then(function(t){t&&(e.section.load(t.data),e.$refs.titleElem.innerText=e.section.title,e.$refs.descriptionElem.innerText=e.section.description)}).catch(function(t){e.$errResponseHandler(t)})):this.$refs.titleElem.innerText=this.section.title)},reorderSection:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up";if(this.section.id){var s=this.section.order,i="up"===e?this.section.order-1:this.section.order+1;this.$emit("beforeSectionOrderUpdate",this.section.id,i,s),this.section.order=i,this.$refs.sectionDropdown&&this.$refs.sectionDropdown.hide(),n["a"].GuidelineSections.update(this.section.id,{order:i}).then(function(e){t.section.load(e.data),t.$emit("afterSectionOrderUpdate",t.section.id,t.section.order,s)}).catch(function(e){t.$errResponseHandler(e)})}},deleteSection:function(){this.section.id&&window.confirm(this.$t('Do you really want to delete section "{title}"?',{title:this.section.title}))&&(this.$toast(this.$t('Successfully deleted section "{title}".',{title:this.section.title})),n["a"].GuidelineSections.delete(this.section.id),this.$emit("sectionDelete",this.section.id))},createColor:function(t,e){var s=this;if(!this.isAddingColor){if(this.isAddingColor=!0,t=t||"#000000",!e){for(var i=1,o=this.section.assets.length-1;o>=0;o--)this.section.assets[o].isColor&&i++;e=this.$t("Color")+" "+i}n["a"].GuidelineAssets.create({guidelineSectionId:this.section.id,type:"color",order:0,hex:t,title:e}).then(function(t){s.section.assets.push(new f["a"](t.data)),s.$toast(s.$t("Successfully added new asset color."))}).catch(function(t){s.$errResponseHandler(t)}).finally(function(){s.isAddingColor=!1})}},initFileUpload:function(){var t=this;h.a.autoDiscover=!1,this.dropzone=new h.a(this.$refs.addFileContainer,{url:n["a"].$baseUrl+"/guideline-assets",method:"post",paramName:"file",parallelUploads:1,uploadMultiple:!1,thumbnailWidth:null,thumbnailHeight:null,addRemoveLinks:!1,createImageThumbnails:!1,previewTemplate:'<div style="display: none"></div>'}),this.dropzone.on("addedfile",function(e){t.dropzone.options.headers=Object.assign(t.dropzone.options.headers||{},{Authorization:"Bearer "+n["a"].$token})}),this.dropzone.on("sending",function(e,s,i){t.isAddingFile=!0,i.append("guidelineSectionId",t.section.id),i.append("type","file")}),this.dropzone.on("error",function(e,s,i){var o=a["a"].getNestedVal(s,"errors.file")||t.$t("An error occurred while uploading the asset file.");t.$toast(o,"danger")}),this.dropzone.on("success",function(e,s){t.section.assets.push(new f["a"](s)),t.$toast(t.$t("Successfully added new asset file."))}),this.dropzone.on("complete",function(e){t.isAddingFile=!1})}}},j=S,D=(s("6beb"),Object(x["a"])(j,d,u,!1,null,"07178bda",null)),T=D.exports,A=s("b76c"),E={name:"projects-assets",mixins:[A["a"]],components:{"app-footer":r["a"],"project-sidebar":l["a"],"guideline-section":T},data:function(){var t=this;return{pageTitle:function(){return t.$t("Guideline")},sections:[],isLoadingSections:!1,isCreatingSection:!1}},computed:{isPageLoaded:function(){return!this.isLoadingProject&&!this.isLoadingSections},orderedSections:function(){return this.sections.slice().sort(function(t,e){return t["order"]-e["order"]})}},beforeMount:function(){this.loadProject(this.$route.params.projectId),this.loadSections(this.$route.params.projectId)},methods:{loadSections:function(t){var e=this;this.isLoadingSections||(t=t||this.$route.params.projectId,this.isLoadingSections=!0,n["a"].GuidelineSections.getList(1,100,{"search[projectId]":t,expand:"assets"}).then(function(t){e.sections=c["a"].createInstances(t.data)}).catch(function(t){e.$errResponseHandler(t)}).finally(function(){e.isLoadingSections=!1}))},createSection:function(t){var e=this;t=t||this.$route.params.projectId,this.isCreatingSection||(this.isCreatingSection=!0,n["a"].GuidelineSections.create({projectId:t,title:this.$t("Section")+" "+(this.orderedSections.length+1)}).then(function(t){var s=new c["a"](t.data);e.sections.push(s),e.$nextTick(function(){var t=document.querySelector(".guideline-section:last-child");t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}),e.$toast(e.$t("Successfully created new section."))}).catch(function(t){e.$errResponseHandler(t)}).finally(function(){e.isCreatingSection=!1}))},onSectionOrderUpdate:function(t,e,s){var i=a["a"].findByKey(this.sections,"id",t);if(i&&e!=s){if(e>s)for(var o in this.sections)this.sections[o].id!=t&&this.sections[o].order>s&&this.sections[o].order<=e&&(this.sections[o].order=this.sections[o].order-1);else for(var n in this.sections)this.sections[n].id!=t&&this.sections[n].order<s&&this.sections[n].order>=e&&(this.sections[n].order=this.sections[n].order+1);i.order=e}},onSectionDelete:function(t){var e=a["a"].findByKey(this.sections,"id",t);if(e){for(var s in this.sections)this.sections[s].order>e.order&&this.$set(this.sections[s],"order",this.sections[s].order-1);a["a"].removeByKey(this.sections,"id",e.id)}}}},I=E,O=Object(x["a"])(I,i,o,!1,null,null,null);e["default"]=O.exports},9300:function(t,e,s){"use strict";s.d(e,"a",function(){return p});s("28a5");var i=s("d225"),o=s("b0b4"),n=s("308d"),a=s("6bb5"),r=s("2a88"),c=s("4e2b"),l=s("9242"),d=s("dd93"),u=["png","jpg","jpeg","svg","bmp"],p=function(t){function e(){return Object(i["a"])(this,e),Object(n["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"load",value:function(t){t=t||{},Object(r["a"])(Object(a["a"])(e.prototype),"load",this).call(this,t),this.guidelineSectionId=d["a"].isEmpty(t.guidelineSectionId)?null:t.guidelineSectionId,this.type=d["a"].isEmpty(t.type)?"file":t.type,this.order=d["a"].isEmpty(t.order)?1:t.order,this.hex=d["a"].isEmpty(t.hex)?"":t.hex,this.title=d["a"].isEmpty(t.title)?"":t.title,this.file=d["a"].isEmpty(t.file)?{}:t.file}},{key:"getFileUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.file[t]||this.file["original"]||""}},{key:"isFile",get:function(){return"file"===this.type}},{key:"isColor",get:function(){return"color"===this.type}},{key:"contrastHex",get:function(){return this.isColor?d["a"].getContrastHex(this.hex):""}},{key:"rgb",get:function(){var t=d["a"].hexToRgb(this.hex);return"rgb("+t.r+", "+t.g+", "+t.b+")"}},{key:"fileExtension",get:function(){return this.isFile&&this.file.original?this.file.original.split(".").pop():""}},{key:"isImage",get:function(){return this.isFile&&this.file.original&&u.indexOf(this.fileExtension)>=0}}]),e}(l["a"])}}]);