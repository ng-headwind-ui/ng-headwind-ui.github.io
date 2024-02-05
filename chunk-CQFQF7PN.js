import{D as T,E as _,F as k,G as K,H as G}from"./chunk-J46Z6YQH.js";import{b as F,c as C,d as I,f as l,h as B,i as v}from"./chunk-TCMGDMVS.js";import{c as O}from"./chunk-GCXGWCHD.js";import{a as P}from"./chunk-T4LCY2KW.js";import{$a as m,Fa as s,Ha as S,Ja as x,Ma as c,Na as u,Oa as a,Pa as n,Qa as E,Ua as g,Va as w,Z as y,Za as d,_a as h,db as f,qa as j,va as o,wa as X}from"./chunk-N56ESE6Q.js";var z=(e,t)=>t.name;function R(e,t){if(e&1&&(a(0,"headwind-tab-button",3),d(1),n()),e&2){let i=t.$implicit,b=w();S(b.tabKey===i.key?"border-b-rose-500 text-rose-500":"border-b-transparent text-zinc-400"),s("tabKey",i.key),o(),m(" ",i.name," ")}}function V(e,t){if(e&1&&(a(0,"div",5)(1,"div",6),E(2,"img",7),a(3,"div")(4,"div",8),d(5),n(),a(6,"div",9),d(7),n()()(),a(8,"div",10)(9,"div",11),d(10,"Biography"),n(),a(11,"div",12),d(12),n()()()),e&2){let i=w().$implicit;o(2),s("alt",i.name)("src",i.avatarUrl,j),o(3),m(" ",i.name," "),o(2),m(" ",i.job," "),o(5),m(" ",i.biography," ")}}function Z(e,t){if(e&1&&x(0,V,13,5,"ng-template",4),e&2){let i=t.$implicit;s("tabKey",i.key)}}var A=(()=>{let t=class t{constructor(){this.tabKey=1,this.tabs=[{key:1,name:"Tori Day",avatarUrl:"https://picsum.photos/id/174/64",job:"Designer",biography:"I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others."},{key:2,name:"Ishaan Martinez",avatarUrl:"https://picsum.photos/id/213/64",job:"Full-Stack Developer",biography:`From the day I was born, I was a coding prodigy who screamed "console.log('Waah~ Waah~')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.`},{key:3,name:"Alvin Bailey",avatarUrl:"https://picsum.photos/id/322/64",job:"Lawyer",biography:"I am an ordinary lawyer."}]}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=y({type:t,selectors:[["app-basic-tab-group-example"]],standalone:!0,features:[f],decls:7,vars:2,consts:[[1,"block","w-full","max-w-[400px]","rounded-xl","bg-white","p-8","shadow-xl",3,"tabKey","tabKeyChange"],[1,"flex","h-10","items-stretch","gap-2","overflow-auto"],[1,"relative","mt-6","block","overflow-hidden"],[1,"flex","flex-[1_0_auto]","select-none","items-center","justify-center","border-b-2","px-3","text-center","text-sm","font-semibold",3,"tabKey"],["headwindTabContent","",3,"tabKey"],[1,"space-y-4"],[1,"flex","items-center","gap-2"],[1,"h-10","w-10","rounded-full","bg-zinc-200","object-cover",3,"alt","src"],[1,"font-semibold"],[1,"text-sm","text-zinc-400"],[1,"space-y-1"],[1,"text-xs","text-zinc-400"],[1,"text-sm"],["class","flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold",3,"tabKey","class"]],template:function(p,r){p&1&&(a(0,"headwind-tab-group",0),g("tabKeyChange",function(H){return r.tabKey=H}),a(1,"headwind-tab-button-group",1),c(2,R,2,4,"headwind-tab-button",13,z),n(),a(4,"headwind-tab-content-group",2),c(5,Z,1,1,null,4,z),n()()),p&2&&(s("tabKey",r.tabKey),o(2),u(r.tabs),o(2),s("@slide",r.tabKey),o(),u(r.tabs))},dependencies:[T,_,G,K,k],encapsulation:2,data:{animation:[F("slide",[B("1 => 2, 2 => 3, 1 => 3",[I([v(":leave",[l({position:"absolute",width:"100%"}),C(".1s",l({transform:"translateX(-100%)"}))],{optional:!0}),v(":enter",[l({transform:"translateX(100%)"}),C(".1s",l({transform:"translateX(0)"}))],{optional:!0})])]),B("3 => 2, 2 => 1, 3 => 1",[I([v(":leave",[l({position:"absolute",width:"100%"}),C(".1s",l({transform:"translateX(100%)"}))],{optional:!0}),v(":enter",[l({transform:"translateX(-100%)"}),C(".1s",l({transform:"translateX(0)"}))],{optional:!0})])])])]}});let e=t;return e})();var $=(e,t)=>t.key;function tt(e,t){if(e&1&&(a(0,"headwind-tab-button",3),d(1),n()),e&2){let i=t.$implicit,b=w();S(b.tabKey===i.key?"border-b-rose-500 text-rose-500":"border-b-transparent text-zinc-400"),s("tabKey",i.key),o(),m(" ",i.name," ")}}function et(e,t){if(e&1&&(a(0,"div"),d(1),n()),e&2){let i=w().$implicit;o(),m(" ",i.content," ")}}function at(e,t){if(e&1&&x(0,et,2,1,"ng-template",4),e&2){let i=t.$implicit;s("tabKey",i.key)}}var q=(()=>{let t=class t{constructor(){this.tabKey="tab1",this.tabs=[{key:"tab1",name:"Tab 1",content:"Content 1"},{key:"tab2",name:"Tab 2",content:"Content 2"},{key:"tab3",name:"Tab 3",content:"Content 3"}]}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=y({type:t,selectors:[["app-tab-group-tab-key-example"]],standalone:!0,features:[f],decls:7,vars:1,consts:[[1,"block","w-full","max-w-[400px]","rounded-xl","bg-white","p-8","shadow-xl",3,"tabKey","tabKeyChange"],[1,"flex","h-10","items-stretch","gap-2","overflow-auto"],[1,"mt-6","block","overflow-hidden"],[1,"flex","flex-[1_0_auto]","select-none","items-center","justify-center","border-b-2","px-3","text-center","text-sm","font-semibold",3,"tabKey"],["headwindTabContent","",3,"tabKey"],["class","flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold",3,"tabKey","class"]],template:function(p,r){p&1&&(a(0,"headwind-tab-group",0),g("tabKeyChange",function(H){return r.tabKey=H}),a(1,"headwind-tab-button-group",1),c(2,tt,2,4,"headwind-tab-button",5,$),n(),a(4,"headwind-tab-content-group",2),c(5,at,1,1,null,4,$),n()()),p&2&&(s("tabKey",r.tabKey),o(2),u(r.tabs),o(3),u(r.tabs))},dependencies:[T,_,G,K,k],encapsulation:2});let e=t;return e})();var U=(e,t)=>t.key;function nt(e,t){if(e&1&&(a(0,"headwind-tab-button",2),d(1),n()),e&2){let i=t.$implicit,b=w();S(b.tabKey===i.key?"border-b-rose-500 text-rose-500":"border-b-transparent text-zinc-400"),s("tabKey",i.key),o(),m(" ",i.name," ")}}function ot(e,t){if(e&1&&(a(0,"div"),d(1),n()),e&2){let i=w().$implicit;o(),m(" ",i.content," ")}}function it(e,t){if(e&1&&x(0,ot,2,1,"ng-template",3),e&2){let i=t.$implicit;s("tabKey",i.key)}}var W=(()=>{let t=class t{constructor(){this.tabKey="tab1",this.tabs=[{key:"tab1",name:"Tab 1",content:"Content 1"},{key:"tab2",name:"Tab 2",content:"Content 2"},{key:"tab3",name:"Tab 3",content:"Content 3"}]}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=y({type:t,selectors:[["app-tab-group-classes-example"]],standalone:!0,features:[f],decls:7,vars:1,consts:[[3,"tabKey","tabKeyChange"],[1,"flex","h-10","items-stretch","gap-2","overflow-auto"],[3,"tabKey"],["headwindTabContent","",3,"tabKey"],[3,"tabKey","class"]],template:function(p,r){p&1&&(a(0,"headwind-tab-group",0),g("tabKeyChange",function(H){return r.tabKey=H}),a(1,"headwind-tab-button-group",1),c(2,nt,2,4,"headwind-tab-button",4,U),n(),a(4,"headwind-tab-content-group"),c(5,it,1,1,null,3,U),n()()),p&2&&(s("tabKey",r.tabKey),o(2),u(r.tabs),o(3),u(r.tabs))},dependencies:[T,_,G,K,k],styles:[".container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.headwind-tab-group[_ngcontent-%COMP%]{display:block;width:100%;max-width:400px;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:2rem;--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.headwind-tab-button[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;border-bottom-width:2px;padding-left:.75rem;padding-right:.75rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600}.headwind-tab-content-group[_ngcontent-%COMP%]{margin-top:1.5rem;display:block;overflow:hidden}"]});let e=t;return e})();var N=(e,t)=>t.key;function rt(e,t){if(e&1&&(a(0,"headwind-tab-button",2),d(1),n()),e&2){let i=t.$implicit;s("tabKey",i.key),o(),m(" ",i.name," ")}}function dt(e,t){if(e&1&&(a(0,"div"),d(1),n()),e&2){let i=w().$implicit;o(),m(" ",i.content," ")}}function pt(e,t){if(e&1&&x(0,dt,2,1,"ng-template",3),e&2){let i=t.$implicit;s("tabKey",i.key)}}var J=(()=>{let t=class t{constructor(){this.tabKey="tab1",this.tabs=[{key:"tab1",name:"Tab 1",content:"Content 1"},{key:"tab2",name:"Tab 2",content:"Content 2"},{key:"tab3",name:"Tab 3",content:"Content 3"}]}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=y({type:t,selectors:[["app-tab-group-selected-class-example"]],standalone:!0,features:[f],decls:7,vars:1,consts:[[3,"tabKey","tabKeyChange"],[1,"flex","h-10","items-stretch","gap-2","overflow-auto"],[3,"tabKey"],["headwindTabContent","",3,"tabKey"]],template:function(p,r){p&1&&(a(0,"headwind-tab-group",0),g("tabKeyChange",function(H){return r.tabKey=H}),a(1,"headwind-tab-button-group",1),c(2,rt,2,2,"headwind-tab-button",2,N),n(),a(4,"headwind-tab-content-group"),c(5,pt,1,1,null,3,N),n()()),p&2&&(s("tabKey",r.tabKey),o(2),u(r.tabs),o(3),u(r.tabs))},dependencies:[T,_,G,K,k],styles:[".container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.headwind-tab-group[_ngcontent-%COMP%]{display:block;width:100%;max-width:400px;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:2rem;--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.headwind-tab-button[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;border-bottom-width:2px;border-bottom-color:transparent;padding-left:.75rem;padding-right:.75rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(161 161 170 / var(--tw-text-opacity))}.headwind-tab-button.headwind-selected[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:rgb(244 63 94 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(244 63 94 / var(--tw-text-opacity))}.headwind-tab-content-group[_ngcontent-%COMP%]{margin-top:1.5rem;display:block;overflow:hidden}"]});let e=t;return e})();var L=(e,t)=>t.key;function st(e,t){if(e&1&&(a(0,"headwind-tab-button",3),d(1),n()),e&2){let i=t.$implicit,b=w();S(b.tabKey===i.key?"border-b-rose-500 text-rose-500":"border-b-transparent text-zinc-400"),s("tabKey",i.key),o(),m(" ",i.name," ")}}function bt(e,t){if(e&1&&(a(0,"div"),d(1),n()),e&2){let i=w().$implicit;o(),m(" ",i.content," ")}}function lt(e,t){if(e&1&&x(0,bt,2,1,"ng-template",4),e&2){let i=t.$implicit;s("tabKey",i.key)}}var Y=(()=>{let t=class t{constructor(){this.tabKey="tab1",this.tabs=[{key:"tab1",name:"Tab 1",content:"Content 1"},{key:"tab2",name:"Tab 2",content:"Content 2"},{key:"tab3",name:"Tab 3",content:"Content 3"}]}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=y({type:t,selectors:[["app-tab-group-animation-example"]],standalone:!0,features:[f],decls:7,vars:2,consts:[[1,"block","w-full","max-w-[400px]","rounded-xl","bg-white","p-8","shadow-xl",3,"tabKey","tabKeyChange"],[1,"flex","h-10","items-stretch","gap-2","overflow-auto"],[1,"relative","mt-6","block","overflow-hidden"],[1,"flex","flex-[1_0_auto]","select-none","items-center","justify-center","border-b-2","px-3","text-center","text-sm","font-semibold",3,"tabKey"],["headwindTabContent","",3,"tabKey"],["class","flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold",3,"tabKey","class"]],template:function(p,r){p&1&&(a(0,"headwind-tab-group",0),g("tabKeyChange",function(H){return r.tabKey=H}),a(1,"headwind-tab-button-group",1),c(2,st,2,4,"headwind-tab-button",5,L),n(),a(4,"headwind-tab-content-group",2),c(5,lt,1,1,null,4,L),n()()),p&2&&(s("tabKey",r.tabKey),o(2),u(r.tabs),o(2),s("@slide",r.tabKey),o(),u(r.tabs))},dependencies:[T,_,G,K,k],encapsulation:2,data:{animation:[F("slide",[B("tab1 => tab2, tab2 => tab3, tab1 => tab3",[I([v(":leave",[l({position:"absolute",width:"100%"}),C(".1s",l({transform:"translateX(-100%)"}))],{optional:!0}),v(":enter",[l({transform:"translateX(100%)"}),C(".1s",l({transform:"translateX(0)"}))],{optional:!0})])]),B("tab3 => tab2, tab2 => tab1, tab3 => tab1",[I([v(":leave",[l({position:"absolute",width:"100%"}),C(".1s",l({transform:"translateX(100%)"}))],{optional:!0}),v(":enter",[l({transform:"translateX(-100%)"}),C(".1s",l({transform:"translateX(0)"}))],{optional:!0})])])])]}});let e=t;return e})();var Q=(()=>{let t=class t{constructor(b){this._documentationService=b,this.section1_0=mt,this.section1_1=ct,this.section2_0=ut,this.section2_1=wt,this.section3_0=ht,this.section3_1=yt,this.section3_2=ft,this.section3_3=xt,this.section4_0=gt,this.section4_1=Ct,this.section5_0=vt,this.section6_0=Tt,this._documentationService.headingNavigations=[{label:"Tab Group",fragment:"tab-group"},{label:"Tab Key",fragment:"tab-key"},{label:"Tab Group Classes",fragment:"tab-group-classes",children:[{label:"Basic Classes",fragment:"basic-classes"},{label:"Selected Class",fragment:"selected-class"}]},{label:"Accessibility",fragment:"accessibility",children:[{label:"Mouse Interaction",fragment:"mouse-interaction"},{label:"Keyboard Interaction",fragment:"keyboard-interaction"}]},{label:"API",fragment:"api",children:[{label:"HeadwindTabGroupComponent",fragment:"headwindtabgroupcomponent"},{label:"HeadwindTabButtonGroupComponent",fragment:"headwindtabbuttongroupcomponent"},{label:"HeadwindTabButtonComponent",fragment:"headwindtabbuttoncomponent"},{label:"HeadwindTabContentGroupComponent",fragment:"headwindtabcontentgroupcomponent"},{label:"HeadwindTabContentDirective",fragment:"headwindtabcontentdirective"}]}]}};t.\u0275fac=function(p){return new(p||t)(X(P))},t.\u0275cmp=y({type:t,selectors:[["app-doc-tab-group-page"]],standalone:!0,features:[f],decls:34,vars:12,consts:[[1,"live-example-preview"],[1,"live-example"]],template:function(p,r){p&1&&(a(0,"markdown"),d(1),n(),a(2,"div",0),E(3,"app-basic-tab-group-example",1),n(),a(4,"markdown"),d(5),n(),a(6,"markdown"),d(7),n(),a(8,"div",0),E(9,"app-tab-group-tab-key-example",1),n(),a(10,"markdown"),d(11),n(),a(12,"markdown"),d(13),n(),a(14,"div",0),E(15,"app-tab-group-classes-example",1),n(),a(16,"markdown"),d(17),n(),a(18,"markdown"),d(19),n(),a(20,"div",0),E(21,"app-tab-group-selected-class-example",1),n(),a(22,"markdown"),d(23),n(),a(24,"markdown"),d(25),n(),a(26,"div",0),E(27,"app-tab-group-animation-example",1),n(),a(28,"markdown"),d(29),n(),a(30,"markdown"),d(31),n(),a(32,"markdown"),d(33),n()),p&2&&(o(),h(r.section1_0),o(4),h(r.section1_1),o(2),h(r.section2_0),o(4),h(r.section2_1),o(2),h(r.section3_0),o(4),h(r.section3_1),o(2),h(r.section3_2),o(4),h(r.section3_3),o(2),h(r.section4_0),o(4),h(r.section4_1),o(2),h(r.section5_0),o(2),h(r.section6_0))},dependencies:[A,O,q,W,J,Y]});let e=t;return e})(),mt=`# Tab Group

A component that consists of several tab buttons and content, and allows tabs to be activated according to the tab key.`,ct=`\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-tab-group-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: \`
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.name) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group [@slide]="tabKey" class="relative mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.name) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <img [alt]="tab.name" [src]="tab.avatarUrl" class="h-10 w-10 rounded-full bg-zinc-200 object-cover" />

                <div>
                  <div class="font-semibold">
                    {{ tab.name }}
                  </div>

                  <div class="text-sm text-zinc-400">
                    {{ tab.job }}
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="text-xs text-zinc-400">Biography</div>

                <div class="text-sm">
                  {{ tab.biography }}
                </div>
              </div>
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  \`,
  animations: [
    trigger('slide', [
      transition('1 => 2, 2 => 3, 1 => 3', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(-100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
      transition('3 => 2, 2 => 1, 3 => 1', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(-100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
    ]),
  ],
})
export class BasicTabGroupExampleComponent {
  tabKey = 1;

  tabs = [
    {
      key: 1,
      name: 'Tori Day',
      avatarUrl: 'https://picsum.photos/id/174/64',
      job: 'Designer',
      biography:
        'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
    },
    {
      key: 2,
      name: 'Ishaan Martinez',
      avatarUrl: 'https://picsum.photos/id/213/64',
      job: 'Full-Stack Developer',
      biography:
        'From the day I was born, I was a coding prodigy who screamed "console.log(\\'Waah~ Waah~\\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      key: 3,
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
\`\`\``,ut="# Tab Key\n\n`tabKey` is an attribute for setting the tab to be activated. `<headwind-tab-button>` and `[headwindTabContent]` to be activated must have the same `tabKey`.\n\n`<headwind-tab-group>` can set the currently active tab using the `tabKey` property and emits the changed value using the `tabKeyChange` emitter.",wt=`\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-tab-key-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: \`
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group class="mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  \`,
})
export class TabGroupTabKeyExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
\`\`\``,ht=`# Tab Group Classes

## Basic Classes

Each component used to implement Tab Group has the same class name as its name. You can set styles using the class name as a selector in a style file.`,yt=`\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-classes-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: \`
    <headwind-tab-group [(tabKey)]="tabKey">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group>
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-tab-group {
          @apply block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl;
        }

        .headwind-tab-button {
          @apply flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold;
        }

        .headwind-tab-content-group {
          @apply mt-6 block overflow-hidden;
        }
      }
    \`,
  ],
})
export class TabGroupClassesExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
\`\`\``,ft="## Selected Class\n\nWhen an tab is activated, the `<headwind-tab-button>` component has the class `.headwind-selected`.",xt=`\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-selected-class-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: \`
    <headwind-tab-group [(tabKey)]="tabKey">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button [tabKey]="tab.key">
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group>
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-tab-group {
          @apply block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl;
        }

        .headwind-tab-button {
          @apply flex flex-[1_0_auto] select-none items-center justify-center border-b-2 border-b-transparent px-3 text-center text-sm font-semibold text-zinc-400;

          &.headwind-selected {
            @apply border-b-rose-500 text-rose-500;
          }
        }

        .headwind-tab-content-group {
          @apply mt-6 block overflow-hidden;
        }
      }
    \`,
  ],
})
export class TabGroupSelectedClassExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
\`\`\``,gt="# Animation\n\nImplementing animation in a Tab Group can be a bit tricky. In order to implement a slide animation according to tab activation, the leaving and entering elements must be controlled using the `query()` function.",Ct=`\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tab-group-animation-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: \`
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group [@slide]="tabKey" class="relative mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  \`,
  animations: [
    trigger('slide', [
      transition('tab1 => tab2, tab2 => tab3, tab1 => tab3', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(-100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
      transition('tab3 => tab2, tab2 => tab1, tab3 => tab1', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(-100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
    ]),
  ],
})
export class TabGroupAnimationExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
\`\`\``,vt=`# Accessibility

## Mouse Interaction

Clicking \`<headwind-tab-button>\` activates the tab
## Keyboard Interaction

| Comment | Target | Description |
| ---- | ---- | ---- |
| \`Space\`, \`Enter\` | \`<headwind-tab-button>\` | Activates the tab. |
`,Tt=`# API

## HeadwindTabGroupComponent

The root component of Tab Group.

### Selector

\`<headwind-tab-group>\`

### Host Class

\`.headwind-tab-group\`

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() tabKey: any\` | Set the tab key for the activated tab. |

### Outputs

| Name | Description |
| ---- | ---- |
| \`@Output() tabKeyChange: EventEmitter<any>\` | Emits the tab key for activated tab. |
## HeadwindTabButtonGroupComponent

A group component containing multiple tab buttons.
### Selector

\`<headwind-tab-button-group>\`

### Host Class

\`.headwind-tab-button-group\`
## HeadwindTabButtonComponent

Button component that allows tabs to be activated through user interaction.
### Selector

\`<headwind-tab-button>\`

### Host Class

\`.headwind-tab-button\`<br/>
\`.headwind-selected\` when tab activated.

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() tabKey: any\` | Set the tab key of the button to activate tab. |
## HeadwindTabContentGroupComponent

A group component containing multiple tab contents.
### Selector

\`<headwind-tab-content-group>\`

### Host Class

\`.headwind-tab-content-group\`

## HeadwindTabContentDirective

A directive for the template that wraps\xA0the content elements.
### Selector

\`[headwindTabContent]\`
### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() tabKey: any\` | Set the tab key of the tab. |
`;var Wt=[{path:"",component:Q}];export{Wt as routes};
