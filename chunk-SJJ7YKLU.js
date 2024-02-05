import{q as T}from"./chunk-QNKW3KRZ.js";import{b as C,c as E,f as b,g as x,h as I}from"./chunk-TCMGDMVS.js";import{c as R}from"./chunk-CFJH4TSM.js";import{a as M}from"./chunk-XUHF6YYF.js";import{a as k}from"./chunk-DQC7AEK6.js";import{Fa as f,Ja as g,Oa as n,Pa as a,Qa as m,Sa as h,Ua as w,Va as _,Ya as O,Z as p,Za as i,_a as d,ba as y,ca as u,db as v,nb as S,va as l,wa as c}from"./chunk-CDHUET3Y.js";function z(o,e){if(o&1){let H=h();m(0,"div",2),n(1,"div",3)(2,"div",4)(3,"div",5),i(4,"It's Headwind Overlay"),a(),n(5,"div",6),i(6,"Any TemplateRef can be opened as an overlay."),a(),n(7,"button",7),w("click",function(){y(H);let t=_();return u(t.openedModal==null?null:t.openedModal.destroy())}),i(8," Okay "),a()()()}o&2&&(f("@fadeIn","show"),l(),f("@fadeIn","show"))}var D=(()=>{let e=class e{constructor(r){this._headwindOverlayService=r}ngOnDestroy(){this.openedModal?.destroy()}open(r){this.openedModal||(this.openedModal=this._headwindOverlayService.open(r,()=>delete this.openedModal))}};e.\u0275fac=function(t){return new(t||e)(c(T))},e.\u0275cmp=p({type:e,selectors:[["app-basic-overlay-example"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"h-8","rounded-md","bg-rose-500","px-3","text-sm","text-white",3,"click"],["modal",""],[1,"absolute","h-full","w-full","bg-white/[0.3]","backdrop-blur-md"],[1,"absolute","flex","h-full","w-full","items-center","justify-center","p-8"],[1,"w-full","max-w-[400px]","space-y-4","rounded-2xl","bg-white","p-8","shadow-2xl"],[1,"text-lg","font-semibold"],[1,"text-sm"],[1,"h-10","w-full","rounded-md","border","border-zinc-200","text-sm","font-semibold","transition-colors","hover:bg-zinc-200",3,"click"]],template:function(t,s){if(t&1){let A=h();n(0,"button",0),w("click",function(){y(A);let j=O(3);return u(s.open(j))}),i(1,"Open Overlay"),a(),g(2,z,9,2,"ng-template",null,1,S)}},encapsulation:2,data:{animation:[C("fadeIn",[x("void",b({opacity:0})),x("show",b({opacity:1})),I("void <=> show",E(".1s"))])]}});let o=e;return o})();var V=(()=>{let e=class e{constructor(r,t){this._seoService=r,this._documentationService=t,this.section1_0=F,this.section1_1=P,this.section2_0=K,this.section3_0=N,this.section4_0=q,this._seoService.update({title:"Headwind UI - Overlay",description:"Creates a transparent layer that appears layered on top of other elements. It can be used when implementing screens such as modals, pop-ups, dialog boxes, tooltips, etc.",keywords:["Angular","Tailwind","Overlay"],url:"https://ng-headwind-ui.github.io/doc/v17/overlay"}),this._documentationService.headingNavigations=[{label:"Overlay",fragment:"overlay"},{label:"HeadwindOverlayOutlet",fragment:"headwindoverlayoutlet"},{label:"Accessibility",fragment:"accessibility",children:[{label:"Keyboard Interaction",fragment:"keyboard-interaction"}]},{label:"API",fragment:"api",children:[{label:"HeadwindOverlayService",fragment:"headwindoverlayservice"}]}]}};e.\u0275fac=function(t){return new(t||e)(c(k),c(M))},e.\u0275cmp=p({type:e,selectors:[["app-doc-overlay-page"]],hostAttrs:[1,"doc-page"],standalone:!0,features:[v],decls:12,vars:5,consts:[[1,"live-example-preview"],[1,"live-example"]],template:function(t,s){t&1&&(n(0,"markdown"),i(1),a(),n(2,"div",0),m(3,"app-basic-overlay-example",1),a(),n(4,"markdown"),i(5),a(),n(6,"markdown"),i(7),a(),n(8,"markdown"),i(9),a(),n(10,"markdown"),i(11),a()),t&2&&(l(),d(s.section1_0),l(4),d(s.section1_1),l(2),d(s.section2_0),l(2),d(s.section3_0),l(2),d(s.section4_0))},dependencies:[R,D]});let o=e;return o})(),F="# Overlay\n\nCreates a transparent layer that appears layered on top of other elements. It can be used when implementing screens such as modals, pop-ups, dialog boxes, tooltips, etc.\n\nTo create an overlay, `HeadwindOverlayService` and [TemplateRef](https://angular.io/api/core/TemplateRef) are required. Pass a TemplateRef to use as an overlay to the `open()` method. The `open()` method returns `EmbeddedViewRef`.\n\nTo close the overlay, use the `destroy()` method of `EmbeddedViewRef`.",P=`\`\`\`typescript
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
\`\`\``,K="# HeadwindOverlayOutlet\n\nWhen an overlay is created, `<headwind-overlay-outlet>` is created dynamically. `<headwind-overlay-outlet>` is a fixed component that covers the entire screen, and user interaction is not possible because `pointer-events: none` is set.\n\nChild elements of `<headwind-overlay-outlet>` are set to `pointer-events: auto` so all interactions are possible.",N=`# Accessibility
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Escape\` | \`window\` | Close the latest overlay. |`,q="# API\n\n## HeadwindOverlayService\n\n### Methods\n| Name | Description |\n| ---- | ---- |\n| `open<C = any>(templateRef: TemplateRef<C>, onDestroy?: () => void): EmbeddedViewRef<C>` | Open a template as overlay. Can pass `onDestroy` callback function to call when destroying `EmbeddedViewRef` |\n| `closeLatest()` | Close the latest overlay. |";var ee=[{path:"",component:V}];export{ee as routes};
