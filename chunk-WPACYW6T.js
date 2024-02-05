import{q as R}from"./chunk-J46Z6YQH.js";import{b as S,c as E,f as b,g as x,h as k}from"./chunk-TCMGDMVS.js";import{c as M}from"./chunk-GCXGWCHD.js";import{a as I}from"./chunk-T4LCY2KW.js";import{Fa as u,Ja as g,Oa as t,Pa as n,Qa as p,Sa as h,Ua as w,Va as _,Ya as O,Z as c,Za as o,_a as d,ba as y,ca as f,db as v,nb as C,va as l,wa as m}from"./chunk-N56ESE6Q.js";function j(i,e){if(i&1){let V=h();p(0,"div",2),t(1,"div",3)(2,"div",4)(3,"div",5),o(4,"It's Headwind Overlay"),n(),t(5,"div",6),o(6,"Any TemplateRef can be opened as an overlay."),n(),t(7,"button",7),w("click",function(){y(V);let a=_();return f(a.openedModal==null?null:a.openedModal.destroy())}),o(8," Okay "),n()()()}i&2&&(u("@fadeIn","show"),l(),u("@fadeIn","show"))}var T=(()=>{let e=class e{constructor(r){this._headwindOverlayService=r}ngOnDestroy(){this.openedModal?.destroy()}open(r){this.openedModal||(this.openedModal=this._headwindOverlayService.open(r,()=>delete this.openedModal))}};e.\u0275fac=function(a){return new(a||e)(m(R))},e.\u0275cmp=c({type:e,selectors:[["app-basic-overlay-example"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"h-8","rounded-md","bg-rose-500","px-3","text-sm","text-white",3,"click"],["modal",""],[1,"absolute","h-full","w-full","bg-white/[0.3]","backdrop-blur-md"],[1,"absolute","flex","h-full","w-full","items-center","justify-center","p-8"],[1,"w-full","max-w-[400px]","space-y-4","rounded-2xl","bg-white","p-8","shadow-2xl"],[1,"text-lg","font-semibold"],[1,"text-sm"],[1,"h-10","w-full","rounded-md","border","border-zinc-200","text-sm","font-semibold","transition-colors","hover:bg-zinc-200",3,"click"]],template:function(a,s){if(a&1){let H=h();t(0,"button",0),w("click",function(){y(H);let A=O(3);return f(s.open(A))}),o(1,"Open Overlay"),n(),g(2,j,9,2,"ng-template",null,1,C)}},encapsulation:2,data:{animation:[S("fadeIn",[x("void",b({opacity:0})),x("show",b({opacity:1})),k("void <=> show",E(".1s"))])]}});let i=e;return i})();var D=(()=>{let e=class e{constructor(r){this._documentationService=r,this.section1_0=z,this.section1_1=F,this.section2_0=P,this.section3_0=K,this.section4_0=N,this._documentationService.headingNavigations=[{label:"Overlay",fragment:"overlay"},{label:"HeadwindOverlayOutlet",fragment:"headwindoverlayoutlet"},{label:"Accessibility",fragment:"accessibility",children:[{label:"Keyboard Interaction",fragment:"keyboard-interaction"}]},{label:"API",fragment:"api",children:[{label:"HeadwindOverlayService",fragment:"headwindoverlayservice"}]}]}};e.\u0275fac=function(a){return new(a||e)(m(I))},e.\u0275cmp=c({type:e,selectors:[["app-doc-overlay-page"]],hostAttrs:[1,"doc-page"],standalone:!0,features:[v],decls:12,vars:5,consts:[[1,"live-example-preview"],[1,"live-example"]],template:function(a,s){a&1&&(t(0,"markdown"),o(1),n(),t(2,"div",0),p(3,"app-basic-overlay-example",1),n(),t(4,"markdown"),o(5),n(),t(6,"markdown"),o(7),n(),t(8,"markdown"),o(9),n(),t(10,"markdown"),o(11),n()),a&2&&(l(),d(s.section1_0),l(4),d(s.section1_1),l(2),d(s.section2_0),l(2),d(s.section3_0),l(2),d(s.section4_0))},dependencies:[M,T]});let i=e;return i})(),z="# Overlay\n\nCreates a transparent layer that appears layered on top of other elements. It can be used when implementing screens such as modals, pop-ups, dialog boxes, tooltips, etc.\n\nTo create an overlay, `HeadwindOverlayService` and [TemplateRef](https://angular.io/api/core/TemplateRef) are required. Pass a TemplateRef to use as an overlay to the `open()` method. The `open()` method returns `EmbeddedViewRef`.\n\nTo close the overlay, use the `destroy()` method of `EmbeddedViewRef`.",F=`\`\`\`typescript
import { Component, EmbeddedViewRef, OnDestroy, TemplateRef } from '@angular/core';
import { HeadwindOverlayService } from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-overlay-example',
  standalone: true,
  imports: [],
  template: \`
    <button (click)="open(modal)" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">Open Overlay</button>

    <ng-template #modal>
      <div [@fadeIn]="'show'" class="absolute h-full w-full bg-white/[0.3] backdrop-blur-md"></div>

      <div [@fadeIn]="'show'" class="absolute flex h-full w-full items-center justify-center p-8">
        <div class="w-full max-w-[400px] space-y-4 rounded-2xl bg-white p-8 shadow-2xl">
          <div class="text-lg font-semibold">It's Headwind Overlay</div>

          <div class="text-sm">Any TemplateRef can be opened as an overlay.</div>

          <button
            (click)="openedModal?.destroy()"
            class="h-10 w-full rounded-md border border-zinc-200 text-sm font-semibold transition-colors hover:bg-zinc-200"
          >
            Okay
          </button>
        </div>
      </div>
    </ng-template>
  \`,
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      state(
        'show',
        style({
          opacity: 1,
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
  ],
})
export class BasicOverlayExampleComponent implements OnDestroy {
  openedModal?: EmbeddedViewRef<any>;

  constructor(private readonly _headwindOverlayService: HeadwindOverlayService) {}

  ngOnDestroy() {
    this.openedModal?.destroy();
  }

  open(templateRef: TemplateRef<any>): void {
    if (!this.openedModal) {
      this.openedModal = this._headwindOverlayService.open(templateRef, () => delete this.openedModal);
    }
  }
}
\`\`\``,P="# HeadwindOverlayOutlet\n\nWhen an overlay is created, `<headwind-overlay-outlet>` is created dynamically. `<headwind-overlay-outlet>` is a fixed component that covers the entire screen, and user interaction is not possible because `pointer-events: none` is set.\n\nChild elements of `<headwind-overlay-outlet>` are set to `pointer-events: auto` so all interactions are possible.",K=`# Accessibility
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Escape\` | \`window\` | Close the latest overlay. |`,N="# API\n\n## HeadwindOverlayService\n\n### Methods\n| Name | Description |\n| ---- | ---- |\n| `open<C = any>(templateRef: TemplateRef<C>, onDestroy?: () => void): EmbeddedViewRef<C>` | Open a template as overlay. Can pass `onDestroy` callback function to call when destroying `EmbeddedViewRef` |\n| `closeLatest()` | Close the latest overlay. |";var Z=[{path:"",component:D}];export{Z as routes};
