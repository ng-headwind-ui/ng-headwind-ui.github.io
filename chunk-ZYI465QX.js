import{a as g,b as Z}from"./chunk-Z4YBJUGT.js";import{a as E}from"./chunk-UF2Q3BED.js";import{a as F,b as G}from"./chunk-AZFA6MYO.js";import{b as R}from"./chunk-PIJDZWPX.js";import{b as _,c as y,f as h,g as f,h as S}from"./chunk-TCMGDMVS.js";import{a as A}from"./chunk-DQC7AEK6.js";import{$a as j,Ba as v,Fa as l,Ga as w,Ja as x,Ka as C,Oa as r,Pa as c,Qa as a,Wa as M,Xa as O,Z as m,Za as k,da as I,db as p,ea as T,eb as P,va as s,wa as d,ya as u}from"./chunk-CDHUET3Y.js";var N=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-github-icon"]],standalone:!0,features:[p],decls:6,vars:0,consts:[["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0_2_25)"],["d","M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z","fill","#18181B"],["id","clip0_2_25"],["width","24","height","24","fill","white"]],template:function(t,n){t&1&&(I(),r(0,"svg",0)(1,"g",1),a(2,"path",2),c(),r(3,"defs")(4,"clipPath",3),a(5,"rect",4),c()()())}});let i=e;return i})();var L=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.opened=0}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.toNext()})}ngOnDestroy(){clearTimeout(this._timeoutId)}toNext(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{let o=this.opened+1;o>2?this.opened=0:this.opened=o,this._changeDetectorRef.detectChanges(),this.toNext()},1e3)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-accordion-preview"]],standalone:!0,features:[p],decls:7,vars:4,consts:[[1,"w-full","h-full","flex","items-center","justify-center","flex-col","space-y-2"],[1,"space-y-1"],[1,"w-[200px]","bg-rose-500","rounded-md","h-7"],[1,"w-[200px]","bg-rose-200","rounded-md","h-0","transition-all"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),a(2,"div",2)(3,"div",3),c(),r(4,"div",1),a(5,"div",2)(6,"div",3),c()()),t&2&&(s(3),w("h-10",n.opened===1),s(3),w("h-10",n.opened===2))}});let i=e;return i})();function W(i,e){i&1&&(I(),r(0,"svg",2),a(1,"path",3),c()),i&2&&l("@fadeInGrowUp","show")}var B=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.checked=!1}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.check()})}ngOnDestroy(){clearTimeout(this._timeoutId)}check(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.checked=!0,this._changeDetectorRef.detectChanges(),this.uncheck()},1500)}uncheck(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.checked=!1,this._changeDetectorRef.detectChanges(),this.check()},1500)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-checkbox-preview"]],standalone:!0,features:[p],decls:2,vars:1,consts:[[1,"absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","flex","items-center","justify-center","w-6","h-6","rounded-md","bg-rose-500"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","3","stroke","currentColor","class","w-4 h-4 stroke-white"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","3","stroke","currentColor",1,"w-4","h-4","stroke-white"],["stroke-linecap","round","stroke-linejoin","round","d","m4.5 12.75 6 6 9-13.5"]],template:function(t,n){t&1&&(r(0,"div",0),x(1,W,2,1,":svg:svg",1),c()),t&2&&(s(),C(1,n.checked?1:-1))},data:{animation:[_("fadeInGrowUp",[f("void",h({opacity:0,transform:"scale(.5)"})),f("show",h({opacity:1,transform:"scale(1)"})),S("void <=> show",y(".1s"))])]}});let i=e;return i})();function X(i,e){i&1&&a(0,"div",2),i&2&&l("@fadeIn","show")}var V=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.opened=!1}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.open()})}ngOnDestroy(){clearTimeout(this._timeoutId)}open(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.opened=!0,this._changeDetectorRef.detectChanges(),this.close()},1500)}close(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.opened=!1,this._changeDetectorRef.detectChanges(),this.open()},1500)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-popover-preview"]],standalone:!0,features:[p],decls:2,vars:1,consts:[[1,"absolute","top-1/2","left-1/2","-translate-y-1/2","-translate-x-1/2","w-[80px]","h-6","rounded-md","bg-rose-500"],["class","expandable left-1/2 absolute w-[160px] h-10 rounded-md bg-rose-200"],[1,"expandable","left-1/2","absolute","w-[160px]","h-10","rounded-md","bg-rose-200"]],template:function(t,n){t&1&&(a(0,"div",0),x(1,X,1,1,"div",1)),t&2&&(s(),C(1,n.opened?1:-1))},styles:[".expandable[_ngcontent-%COMP%]{top:calc(50% + 16px);transform:translate(-48px)}"],data:{animation:[_("fadeIn",[f("void",h({opacity:0})),f("show",h({opacity:1})),S("void <=> show",y(".1s"))])]}});let i=e;return i})();function Y(i,e){i&1&&(a(0,"div",1),r(1,"div",2),a(2,"div",3),c()),i&2&&(l("@fadeIn","show"),s(),l("@fadeInGrowUp","show"))}var H=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.opened=!1}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.open()})}ngOnDestroy(){clearTimeout(this._timeoutId)}open(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.opened=!0,this._changeDetectorRef.detectChanges(),this.close()},1500)}close(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.opened=!1,this._changeDetectorRef.detectChanges(),this.open()},1500)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-overlay-preview"]],standalone:!0,features:[p],decls:2,vars:1,consts:[[1,"absolute","top-1/2","left-1/2","-translate-y-1/2","-translate-x-1/2","w-[80px]","h-6","rounded-md","bg-rose-500"],[1,"absolute","w-full","h-full","bg-black/[.3]"],[1,"w-full","h-full","flex","items-center","justify-center"],[1,"origin-center","w-[200px]","h-20","rounded-md","bg-white"]],template:function(t,n){t&1&&(a(0,"div",0),x(1,Y,3,2)),t&2&&(s(),C(1,n.opened?1:-1))},data:{animation:[_("fadeInGrowUp",[f("void",h({opacity:0,transform:"scale(.5)"})),f("show",h({opacity:1,transform:"scale(1)"})),S("void <=> show",y(".1s"))]),_("fadeIn",[f("void",h({opacity:0})),f("show",h({opacity:1})),S("void <=> show",y(".1s"))])]}});let i=e;return i})();function $(i,e){i&1&&a(0,"div",3),i&2&&l("@fadeInGrowUp","show")}function ee(i,e){i&1&&a(0,"div",3),i&2&&l("@fadeInGrowUp","show")}function te(i,e){i&1&&a(0,"div",3),i&2&&l("@fadeInGrowUp","show")}var U=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.selected=0}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.toNext()})}ngOnDestroy(){clearTimeout(this._timeoutId)}toNext(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{let o=this.selected+1;o>2?this.selected=0:this.selected=o,this._changeDetectorRef.detectChanges(),this.toNext()},1e3)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-radio-group-preview"]],standalone:!0,features:[p],decls:7,vars:3,consts:[[1,"flex","flex-col","items-center","justify-center","w-full","h-full","space-y-2"],[1,"w-6","h-6","rounded-full","bg-rose-500","flex","items-center","justify-center"],["class","w-2 h-2 rounded-full bg-white"],[1,"w-2","h-2","rounded-full","bg-white"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),x(2,$,1,1,"div",2),c(),r(3,"div",1),x(4,ee,1,1,"div",2),c(),r(5,"div",1),x(6,te,1,1,"div",2),c()()),t&2&&(s(2),C(2,n.selected===0?2:-1),s(2),C(4,n.selected===1?4:-1),s(2),C(6,n.selected===2?6:-1))},data:{animation:[_("fadeInGrowUp",[f("void",h({opacity:0,transform:"scale(.5)"})),f("show",h({opacity:1,transform:"scale(1)"})),S("void <=> show",y(".1s"))])]}});let i=e;return i})();function ie(i,e){i&1&&(I(),T(),r(0,"div",4),a(1,"div",5)(2,"div",5)(3,"div",5)(4,"div",5),c()),i&2&&l("@growUp","show")}var q=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.opened=!1}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.open()})}ngOnDestroy(){clearTimeout(this._timeoutId)}open(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.opened=!0,this._changeDetectorRef.detectChanges(),this.close()},1500)}close(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.opened=!1,this._changeDetectorRef.detectChanges(),this.open()},1500)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-select-preview"]],standalone:!0,features:[p],decls:4,vars:5,consts:[[1,"absolute","flex","items-center","justify-end","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","w-[120px]","h-6","bg-rose-500","rounded-md","transition-colors"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","3.5","stroke","currentColor",1,"w-4","h-4","stroke-white","absolute","right-2"],["stroke-linecap","round","stroke-linejoin","round","d","m19.5 8.25-7.5 7.5-7.5-7.5"],["class","expandable absolute left-1/2 -translate-x-1/2 w-[120px] bg-rose-200 flex flex-col items-stretch gap-1 p-2 overflow-hidden"],[1,"expandable","absolute","left-1/2","-translate-x-1/2","w-[120px]","bg-rose-200","flex","flex-col","items-stretch","gap-1","p-2","overflow-hidden"],[1,"rounded-md","h-4","bg-rose-50","shrink-0"]],template:function(t,n){t&1&&(r(0,"div",0),I(),r(1,"svg",1),a(2,"path",2),c()(),x(3,ie,5,1,"div",3)),t&2&&(w("rounded-b-none",n.opened),s(),w("rotate-180",n.opened),s(2),C(3,n.opened?3:-1))},styles:[".expandable[_ngcontent-%COMP%]{top:calc(50% + 12px)}"],data:{animation:[_("growUp",[f("void",h({height:0})),f("show",h({height:"*"})),S("void <=> show",y(".1s"))])]}});let i=e;return i})();var z=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.checked=!1}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.check()})}ngOnDestroy(){clearTimeout(this._timeoutId)}check(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.checked=!0,this._changeDetectorRef.detectChanges(),this.uncheck()},1500)}uncheck(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this.checked=!1,this._changeDetectorRef.detectChanges(),this.check()},1500)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-switch-preview"]],standalone:!0,features:[p],decls:3,vars:4,consts:[[1,"w-full","h-full","flex","items-center","justify-center"],[1,"rounded-full","w-10","h-6","bg-rose-200","relative","transition-colors"],[1,"rounded-full","w-4","h-4","bg-white","absolute","top-1","left-1","transition-all"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),a(2,"div",2),c()()),t&2&&(s(),w("bg-rose-500",n.checked),s(),w("left-5",n.checked))}});let i=e;return i})();var J=(()=>{let e=class e{constructor(o,t,n){this._ngZone=o,this._changeDetectorRef=t,this._headwindPlatformService=n,this.selected=0}ngAfterViewInit(){this._headwindPlatformService.isBrowser&&this._ngZone.runOutsideAngular(()=>{this.toNext()})}ngOnDestroy(){clearTimeout(this._timeoutId)}toNext(){clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{let o=this.selected+1;o>2?this.selected=0:this.selected=o,this._changeDetectorRef.detectChanges(),this.toNext()},1e3)}};e.\u0275fac=function(t){return new(t||e)(d(v),d(u),d(g))},e.\u0275cmp=m({type:e,selectors:[["app-tab-group-preview"]],standalone:!0,features:[p],decls:10,vars:24,consts:[[1,"w-full","h-full","flex","items-center","justify-center","flex-col"],[1,"flex","flex-col","items-stretch","w-[210px]","gap-2"],[1,"flex","items-stretch","h-6","gap-2"],[1,"rounded-md","bg-rose-200","grow","shrink-0","basis-auto","transition-colors"],[1,"rounded-md","bg-rose-200","flex","flex-col","gap-2","p-2"],[1,"bar","rounded","h-2","bg-rose-50","transition-all"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),a(3,"div",3)(4,"div",3)(5,"div",3),c(),r(6,"div",4),a(7,"div",5)(8,"div",5)(9,"div",5),c()()()),t&2&&(s(3),w("bg-rose-500",n.selected===0),s(),w("bg-rose-500",n.selected===1),s(),w("bg-rose-500",n.selected===2),s(2),w("step-1",n.selected===0)("step-2",n.selected===1)("step-3",n.selected===2),s(),w("step-1",n.selected===0)("step-2",n.selected===1)("step-3",n.selected===2),s(),w("step-1",n.selected===0)("step-2",n.selected===1)("step-3",n.selected===2))},styles:[".container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.bar.step-1[_ngcontent-%COMP%]:nth-child(1){width:10%}.bar.step-1[_ngcontent-%COMP%]:nth-child(2){width:60%}.bar.step-1[_ngcontent-%COMP%]:nth-child(3){width:40%}.bar.step-2[_ngcontent-%COMP%]:nth-child(1){width:40%}.bar.step-2[_ngcontent-%COMP%]:nth-child(2){width:20%}.bar.step-2[_ngcontent-%COMP%]:nth-child(3){width:80%}.bar.step-3[_ngcontent-%COMP%]:nth-child(1){width:80%}.bar.step-3[_ngcontent-%COMP%]:nth-child(2){width:90%}.bar.step-3[_ngcontent-%COMP%]:nth-child(3){width:20%}"]});let i=e;return i})();var ne=["*"],K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-preview-item"]],hostAttrs:[1,"block","space-y-2"],inputs:{name:"name"},standalone:!0,features:[p],ngContentSelectors:ne,decls:4,vars:1,consts:[[1,"text-base","font-semibold","px-4","transition-colors"],[1,"block","bg-stone-50","rounded-2xl","overflow-hidden","h-[140px]","relative","transition-colors"]],template:function(t,n){t&1&&(M(),r(0,"div",0),k(1),c(),r(2,"div",1),O(3),c()),t&2&&(s(),j(" ",n.name,`
`))},styles:[".container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}"]});let i=e;return i})();var oe=()=>["/doc"],re=()=>["/doc/accordion"],ae=()=>["/doc/checkbox"],se=()=>["/doc/overlay"],ce=()=>["/doc/popover"],de=()=>["/doc/radio-group"],le=()=>["/doc/select"],me=()=>["/doc/switch"],pe=()=>["/doc/tab-group"],Q=(()=>{let e=class e{constructor(o){this._seoService=o,this._seoService.update(this._seoService.defaultOptions)}};e.\u0275fac=function(t){return new(t||e)(d(A))},e.\u0275cmp=m({type:e,selectors:[["app-main-page"]],standalone:!0,features:[p],decls:42,vars:18,consts:[[1,"w-full","p-8","flex","items-center","justify-between"],[1,"flex","items-center","gap-2"],[1,"block","h-8"],[1,"hidden","sm:block"],[1,"block","h-6"],[1,"page-container"],[1,"flex","flex-col","items-center","mt-10","md:mt-20","xl:mt-32","space-y-6"],[1,"block","h-24"],[1,"text-lg","sm:text-2xl","md:text-4xl","text-center"],[3,"routerLink"],[1,"flat-button"],[1,"grid","lg:grid-cols-3","gap-8","mt-20","md:grid-cols-2","grid-cols-1"],["name","Accordion"],["name","Checkbox"],["name","Overlay"],["name","Popover"],["name","Radio Group"],["name","Select"],["name","Switch"],["name","Tab Group"],[1,"mt-10"]],template:function(t,n){t&1&&(r(0,"header",0)(1,"div",1),a(2,"app-logo",2),r(3,"app-version-chip",3),k(4," v17.0.0 "),c()(),a(5,"app-github-icon",4),c(),r(6,"main",5)(7,"div",6),a(8,"app-logo-icon",7),r(9,"div",8),k(10," Styleless Angular components"),a(11,"br"),k(12," to integrate with Tailwind CSS "),c(),r(13,"a",9)(14,"button",10),k(15," Getting Started "),c()()(),r(16,"div",11)(17,"a",9)(18,"app-preview-item",12),a(19,"app-accordion-preview"),c()(),r(20,"a",9)(21,"app-preview-item",13),a(22,"app-checkbox-preview"),c()(),r(23,"a",9)(24,"app-preview-item",14),a(25,"app-overlay-preview"),c()(),r(26,"a",9)(27,"app-preview-item",15),a(28,"app-popover-preview"),c()(),r(29,"a",9)(30,"app-preview-item",16),a(31,"app-radio-group-preview"),c()(),r(32,"a",9)(33,"app-preview-item",17),a(34,"app-select-preview"),c()(),r(35,"a",9)(36,"app-preview-item",18),a(37,"app-switch-preview"),c()(),r(38,"a",9)(39,"app-preview-item",19),a(40,"app-tab-group-preview"),c()()()(),a(41,"app-footer",20)),t&2&&(s(13),l("routerLink",P(9,oe)),s(4),l("routerLink",P(10,re)),s(3),l("routerLink",P(11,ae)),s(3),l("routerLink",P(12,se)),s(3),l("routerLink",P(13,ce)),s(3),l("routerLink",P(14,de)),s(3),l("routerLink",P(15,le)),s(3),l("routerLink",P(16,me)),s(3),l("routerLink",P(17,pe)))},dependencies:[F,N,E,L,B,V,H,U,q,z,J,K,R,Z,G],styles:[".container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}"]});let i=e;return i})();var Ke=[{path:"",component:Q}];export{Ke as routes};
