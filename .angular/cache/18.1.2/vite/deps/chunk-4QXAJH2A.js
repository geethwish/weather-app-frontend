import {
  MenuService,
  NzIsMenuInsideDropDownToken,
  NzMenuModule
} from "./chunk-ANEUPX47.js";
import {
  ConnectionPositionPair,
  NzNoAnimationDirective,
  Overlay,
  POSITION_MAP,
  TemplatePortal,
  slideMotion
} from "./chunk-JUJ24KMN.js";
import {
  ESCAPE,
  hasModifierKey
} from "./chunk-RYXCVOOR.js";
import {
  Directionality
} from "./chunk-3ARI7WNA.js";
import {
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  WithConfig
} from "./chunk-KUTW6UCX.js";
import {
  Platform
} from "./chunk-SBSGXA3C.js";
import {
  NgClass,
  NgStyle
} from "./chunk-F2NMOQGF.js";
import {
  ANIMATION_MODULE_TYPE,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-4Z5MUN7N.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  Subscription,
  __decorate,
  auditTime,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  fromEvent,
  map,
  mapTo,
  merge,
  startWith,
  switchMap,
  takeUntil
} from "./chunk-SVLPOJW7.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-transition-patch.mjs
var _NzTransitionPatchDirective = class _NzTransitionPatchDirective {
  setHiddenAttribute() {
    if (this.hidden) {
      if (typeof this.hidden === "string") {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", this.hidden);
      } else {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
      }
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, "hidden");
    }
  }
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.hidden = null;
    this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
  }
  ngOnChanges() {
    this.setHiddenAttribute();
  }
  ngAfterViewInit() {
    this.setHiddenAttribute();
  }
};
_NzTransitionPatchDirective.ɵfac = function NzTransitionPatchDirective_Factory(t) {
  return new (t || _NzTransitionPatchDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_NzTransitionPatchDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTransitionPatchDirective,
  selectors: [["", "nz-button", ""], ["nz-button-group"], ["", "nz-icon", ""], ["", "nz-menu-item", ""], ["", "nz-submenu", ""], ["nz-select-top-control"], ["nz-select-placeholder"], ["nz-input-group"]],
  inputs: {
    hidden: "hidden"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzTransitionPatchDirective = _NzTransitionPatchDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hidden: [{
      type: Input
    }]
  });
})();
var _NzTransitionPatchModule = class _NzTransitionPatchModule {
};
_NzTransitionPatchModule.ɵfac = function NzTransitionPatchModule_Factory(t) {
  return new (t || _NzTransitionPatchModule)();
};
_NzTransitionPatchModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTransitionPatchModule,
  imports: [NzTransitionPatchDirective],
  exports: [NzTransitionPatchDirective]
});
_NzTransitionPatchModule.ɵinj = ɵɵdefineInjector({});
var NzTransitionPatchModule = _NzTransitionPatchModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransitionPatchDirective],
      exports: [NzTransitionPatchDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-wave.mjs
var NzWaveRenderer = class {
  get waveAttributeName() {
    return this.insertExtraNode ? "ant-click-animating" : "ant-click-animating-without-extra-node";
  }
  constructor(triggerElement, ngZone, insertExtraNode, platformId, cspNonce) {
    this.triggerElement = triggerElement;
    this.ngZone = ngZone;
    this.insertExtraNode = insertExtraNode;
    this.platformId = platformId;
    this.cspNonce = cspNonce;
    this.waveTransitionDuration = 400;
    this.styleForPseudo = null;
    this.extraNode = null;
    this.lastTime = 0;
    this.onClick = (event) => {
      if (!this.triggerElement || !this.triggerElement.getAttribute || this.triggerElement.getAttribute("disabled") || event.target.tagName === "INPUT" || this.triggerElement.className.indexOf("disabled") >= 0) {
        return;
      }
      this.fadeOutWave();
    };
    this.platform = new Platform(this.platformId);
    this.clickHandler = this.onClick.bind(this);
    this.bindTriggerEvent();
  }
  bindTriggerEvent() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        this.removeTriggerEvent();
        if (this.triggerElement) {
          this.triggerElement.addEventListener("click", this.clickHandler, true);
        }
      });
    }
  }
  removeTriggerEvent() {
    if (this.triggerElement) {
      this.triggerElement.removeEventListener("click", this.clickHandler, true);
    }
  }
  removeStyleAndExtraNode() {
    if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
      document.body.removeChild(this.styleForPseudo);
      this.styleForPseudo = null;
    }
    if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
      this.triggerElement.removeChild(this.extraNode);
    }
  }
  destroy() {
    this.removeTriggerEvent();
    this.removeStyleAndExtraNode();
  }
  fadeOutWave() {
    const node = this.triggerElement;
    const waveColor = this.getWaveColor(node);
    node.setAttribute(this.waveAttributeName, "true");
    if (Date.now() < this.lastTime + this.waveTransitionDuration) {
      return;
    }
    if (this.isValidColor(waveColor)) {
      if (!this.styleForPseudo) {
        this.styleForPseudo = document.createElement("style");
        if (this.cspNonce) {
          this.styleForPseudo.nonce = this.cspNonce;
        }
      }
      this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
      document.body.appendChild(this.styleForPseudo);
    }
    if (this.insertExtraNode) {
      if (!this.extraNode) {
        this.extraNode = document.createElement("div");
      }
      this.extraNode.className = "ant-click-animating-node";
      node.appendChild(this.extraNode);
    }
    this.lastTime = Date.now();
    this.runTimeoutOutsideZone(() => {
      node.removeAttribute(this.waveAttributeName);
      this.removeStyleAndExtraNode();
    }, this.waveTransitionDuration);
  }
  isValidColor(color) {
    return !!color && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && this.isNotGrey(color) && !/rgba\(\d*, \d*, \d*, 0\)/.test(color) && color !== "transparent";
  }
  isNotGrey(color) {
    const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
    if (match && match[1] && match[2] && match[3]) {
      return !(match[1] === match[2] && match[2] === match[3]);
    }
    return true;
  }
  getWaveColor(node) {
    const nodeStyle = getComputedStyle(node);
    return nodeStyle.getPropertyValue("border-top-color") || // Firefox Compatible
    nodeStyle.getPropertyValue("border-color") || nodeStyle.getPropertyValue("background-color");
  }
  runTimeoutOutsideZone(fn, delay) {
    this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
};
var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
  disabled: false
};
var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken("nz-wave-global-options");
function provideNzWave(config) {
  return makeEnvironmentProviders([{
    provide: NZ_WAVE_GLOBAL_CONFIG,
    useValue: config
  }]);
}
var _NzWaveDirective = class _NzWaveDirective {
  get disabled() {
    return this.waveDisabled;
  }
  get rendererRef() {
    return this.waveRenderer;
  }
  constructor(ngZone, elementRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.nzWaveExtraNode = false;
    this.waveDisabled = false;
    this.cspNonce = inject(CSP_NONCE, {
      optional: true
    });
    this.platformId = inject(PLATFORM_ID);
    this.config = inject(NZ_WAVE_GLOBAL_CONFIG, {
      optional: true
    });
    this.animationType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this.waveDisabled = this.isConfigDisabled();
  }
  isConfigDisabled() {
    let disabled = false;
    if (this.config && typeof this.config.disabled === "boolean") {
      disabled = this.config.disabled;
    }
    if (this.animationType === "NoopAnimations") {
      disabled = true;
    }
    return disabled;
  }
  ngOnDestroy() {
    if (this.waveRenderer) {
      this.waveRenderer.destroy();
    }
  }
  ngOnInit() {
    this.renderWaveIfEnabled();
  }
  renderWaveIfEnabled() {
    if (!this.waveDisabled && this.elementRef.nativeElement) {
      this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode, this.platformId, this.cspNonce);
    }
  }
  disable() {
    this.waveDisabled = true;
    if (this.waveRenderer) {
      this.waveRenderer.removeTriggerEvent();
      this.waveRenderer.removeStyleAndExtraNode();
    }
  }
  enable() {
    this.waveDisabled = this.isConfigDisabled() || false;
    if (this.waveRenderer) {
      this.waveRenderer.bindTriggerEvent();
    }
  }
};
_NzWaveDirective.ɵfac = function NzWaveDirective_Factory(t) {
  return new (t || _NzWaveDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
_NzWaveDirective.ɵdir = ɵɵdefineDirective({
  type: _NzWaveDirective,
  selectors: [["", "nz-wave", ""], ["button", "nz-button", "", 3, "nzType", "link", 3, "nzType", "text"]],
  inputs: {
    nzWaveExtraNode: "nzWaveExtraNode"
  },
  exportAs: ["nzWave"],
  standalone: true
});
var NzWaveDirective = _NzWaveDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWaveDirective, [{
    type: Directive,
    args: [{
      selector: '[nz-wave],button[nz-button]:not([nzType="link"]):not([nzType="text"])',
      exportAs: "nzWave",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }], {
    nzWaveExtraNode: [{
      type: Input
    }]
  });
})();
var _NzWaveModule = class _NzWaveModule {
};
_NzWaveModule.ɵfac = function NzWaveModule_Factory(t) {
  return new (t || _NzWaveModule)();
};
_NzWaveModule.ɵmod = ɵɵdefineNgModule({
  type: _NzWaveModule,
  imports: [NzWaveDirective],
  exports: [NzWaveDirective]
});
_NzWaveModule.ɵinj = ɵɵdefineInjector({
  providers: [provideNzWave(NZ_WAVE_GLOBAL_DEFAULT_CONFIG)]
});
var NzWaveModule = _NzWaveModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWaveModule, [{
    type: NgModule,
    args: [{
      imports: [NzWaveDirective],
      exports: [NzWaveDirective],
      providers: [provideNzWave(NZ_WAVE_GLOBAL_DEFAULT_CONFIG)]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-button.mjs
var _c0 = ["nz-button", ""];
var _c1 = ["*"];
function NzButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
}
var NZ_CONFIG_MODULE_NAME = "button";
var _NzButtonComponent = class _NzButtonComponent {
  insertSpan(nodes, renderer) {
    nodes.forEach((node) => {
      if (node.nodeName === "#text") {
        const span = renderer.createElement("span");
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }
  get iconOnly() {
    const listOfNode = Array.from(this.elementRef?.nativeElement?.childNodes || []);
    const noText = listOfNode.every((node) => node.nodeName !== "#text");
    const noSpan = listOfNode.filter((node) => {
      return !(node.nodeName === "#comment" || !!node?.attributes?.getNamedItem("nz-icon"));
    }).length == 0;
    return !!this.nzIconDirectiveElement && noSpan && noText;
  }
  constructor(ngZone, elementRef, cdr, renderer, nzConfigService, directionality) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.renderer = renderer;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBlock = false;
    this.nzGhost = false;
    this.nzSearch = false;
    this.nzLoading = false;
    this.nzDanger = false;
    this.disabled = false;
    this.tabIndex = null;
    this.nzType = null;
    this.nzShape = null;
    this.nzSize = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.loading$ = new Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click", {
        capture: true
      }).pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.disabled && event.target?.tagName === "A" || this.nzLoading) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzLoading
    } = changes;
    if (nzLoading) {
      this.loading$.next(this.nzLoading);
    }
  }
  ngAfterViewInit() {
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }
  ngAfterContentInit() {
    this.loading$.pipe(startWith(this.nzLoading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$)).subscribe((loading) => {
      const nativeElement = this.nzIconDirectiveElement.nativeElement;
      if (loading) {
        this.renderer.setStyle(nativeElement, "display", "none");
      } else {
        this.renderer.removeStyle(nativeElement, "display");
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) {
  return new (t || _NzButtonComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
};
_NzButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzButtonComponent,
  selectors: [["button", "nz-button", ""], ["a", "nz-button", ""]],
  contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzIconDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-btn"],
  hostVars: 34,
  hostBindings: function NzButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
      ɵɵclassProp("ant-btn-default", ctx.nzType === "default")("ant-btn-primary", ctx.nzType === "primary")("ant-btn-dashed", ctx.nzType === "dashed")("ant-btn-link", ctx.nzType === "link")("ant-btn-text", ctx.nzType === "text")("ant-btn-circle", ctx.nzShape === "circle")("ant-btn-round", ctx.nzShape === "round")("ant-btn-lg", ctx.nzSize === "large")("ant-btn-sm", ctx.nzSize === "small")("ant-btn-dangerous", ctx.nzDanger)("ant-btn-loading", ctx.nzLoading)("ant-btn-background-ghost", ctx.nzGhost)("ant-btn-block", ctx.nzBlock)("ant-input-search-button", ctx.nzSearch)("ant-btn-rtl", ctx.dir === "rtl")("ant-btn-icon-only", ctx.iconOnly);
    }
  },
  inputs: {
    nzBlock: [2, "nzBlock", "nzBlock", booleanAttribute],
    nzGhost: [2, "nzGhost", "nzGhost", booleanAttribute],
    nzSearch: [2, "nzSearch", "nzSearch", booleanAttribute],
    nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
    nzDanger: [2, "nzDanger", "nzDanger", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabIndex: "tabIndex",
    nzType: "nzType",
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  exportAs: ["nzButton"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["nz-icon", "", "nzType", "loading"]],
  template: function NzButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzButtonComponent_Conditional_0_Template, 1, 0, "span", 0);
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.nzLoading ? 0 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzButtonComponent = _NzButtonComponent;
__decorate([WithConfig()], NzButtonComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonComponent, [{
    type: Component,
    args: [{
      selector: "button[nz-button], a[nz-button]",
      exportAs: "nzButton",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @if (nzLoading) {
      <span nz-icon nzType="loading"></span>
    }
    <ng-content></ng-content>
  `,
      host: {
        class: "ant-btn",
        "[class.ant-btn-default]": `nzType === 'default'`,
        "[class.ant-btn-primary]": `nzType === 'primary'`,
        "[class.ant-btn-dashed]": `nzType === 'dashed'`,
        "[class.ant-btn-link]": `nzType === 'link'`,
        "[class.ant-btn-text]": `nzType === 'text'`,
        "[class.ant-btn-circle]": `nzShape === 'circle'`,
        "[class.ant-btn-round]": `nzShape === 'round'`,
        "[class.ant-btn-lg]": `nzSize === 'large'`,
        "[class.ant-btn-sm]": `nzSize === 'small'`,
        "[class.ant-btn-dangerous]": `nzDanger`,
        "[class.ant-btn-loading]": `nzLoading`,
        "[class.ant-btn-background-ghost]": `nzGhost`,
        "[class.ant-btn-block]": `nzBlock`,
        "[class.ant-input-search-button]": `nzSearch`,
        "[class.ant-btn-rtl]": `dir === 'rtl'`,
        "[class.ant-btn-icon-only]": `iconOnly`,
        "[attr.tabindex]": "disabled ? -1 : (tabIndex === null ? null : tabIndex)",
        "[attr.disabled]": "disabled || null"
      },
      imports: [NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzIconDirectiveElement: [{
      type: ContentChild,
      args: [NzIconDirective, {
        read: ElementRef
      }]
    }],
    nzBlock: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGhost: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzButtonGroupComponent = class _NzButtonGroupComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.nzSize = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) {
  return new (t || _NzButtonGroupComponent)(ɵɵdirectiveInject(Directionality));
};
_NzButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzButtonGroupComponent,
  selectors: [["nz-button-group"]],
  hostAttrs: [1, "ant-btn-group"],
  hostVars: 6,
  hostBindings: function NzButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-btn-group-lg", ctx.nzSize === "large")("ant-btn-group-sm", ctx.nzSize === "small")("ant-btn-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzSize: "nzSize"
  },
  exportAs: ["nzButtonGroup"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function NzButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzButtonGroupComponent = _NzButtonGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-button-group",
      exportAs: "nzButtonGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-btn-group",
        "[class.ant-btn-group-lg]": `nzSize === 'large'`,
        "[class.ant-btn-group-sm]": `nzSize === 'small'`,
        "[class.ant-btn-group-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: Directionality
  }], {
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzButtonModule = class _NzButtonModule {
};
_NzButtonModule.ɵfac = function NzButtonModule_Factory(t) {
  return new (t || _NzButtonModule)();
};
_NzButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _NzButtonModule,
  imports: [NzButtonComponent, NzButtonGroupComponent],
  exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule]
});
_NzButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
});
var NzButtonModule = _NzButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzButtonComponent, NzButtonGroupComponent],
      exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-dropdown.mjs
var _c02 = ["*"];
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("@slideMotion.done", function NzDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEvent($event));
    })("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setMouseState(true));
    })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setMouseState(false));
    });
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-dropdown-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1.nzOverlayClassName)("ngStyle", ctx_r1.nzOverlayStyle)("@slideMotion", void 0)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
var NZ_CONFIG_MODULE_NAME2 = "dropDown";
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var _NzDropDownDirective = class _NzDropDownDirective {
  setDropdownMenuValue(key, value) {
    if (this.nzDropdownMenu) {
      this.nzDropdownMenu.setValue(key, value);
    }
  }
  constructor(nzConfigService, elementRef, overlay, renderer, viewContainerRef, platform) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.overlay = overlay;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.platform = platform;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
    this.overlayRef = null;
    this.destroy$ = new Subject();
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");
    this.inputVisible$ = new BehaviorSubject(false);
    this.nzTrigger$ = new BehaviorSubject("hover");
    this.overlayClose$ = new Subject();
    this.nzDropdownMenu = null;
    this.nzTrigger = "hover";
    this.nzMatchWidthElement = null;
    this.nzBackdrop = false;
    this.nzClickHide = true;
    this.nzDisabled = false;
    this.nzVisible = false;
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.nzPlacement = "bottomLeft";
    this.nzVisibleChange = new EventEmitter();
  }
  ngAfterViewInit() {
    if (this.nzDropdownMenu) {
      const nativeElement = this.elementRef.nativeElement;
      const hostMouseState$ = merge(fromEvent(nativeElement, "mouseenter").pipe(mapTo(true)), fromEvent(nativeElement, "mouseleave").pipe(mapTo(false)));
      const menuMouseState$ = this.nzDropdownMenu.mouseState$;
      const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
      const hostClickState$ = fromEvent(nativeElement, "click").pipe(map(() => !this.nzVisible));
      const visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((trigger) => {
        if (trigger === "hover") {
          return mergedMouseState$;
        } else if (trigger === "click") {
          return hostClickState$;
        } else {
          return EMPTY;
        }
      }));
      const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.nzClickHide), mapTo(false));
      const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.nzDisabled));
      const visible$ = merge(this.inputVisible$, domTriggerVisible$);
      combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$)).subscribe((visible) => {
        const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
        const triggerWidth = element.getBoundingClientRect().width;
        if (this.nzVisible !== visible) {
          this.nzVisibleChange.emit(visible);
        }
        this.nzVisible = visible;
        if (visible) {
          if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
              positionStrategy: this.positionStrategy,
              minWidth: triggerWidth,
              disposeOnNavigation: true,
              hasBackdrop: this.nzBackdrop && this.nzTrigger === "click",
              scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
            merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter((e) => e.keyCode === ESCAPE && !hasModifierKey(e)))).pipe(takeUntil(this.destroy$)).subscribe(() => {
              this.overlayClose$.next(false);
            });
          } else {
            const overlayConfig = this.overlayRef.getConfig();
            overlayConfig.minWidth = triggerWidth;
          }
          this.positionStrategy.withPositions([POSITION_MAP[this.nzPlacement], ...listOfPositions]);
          if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
          }
          this.overlayRef.attach(this.portal);
        } else {
          if (this.overlayRef) {
            this.overlayRef.detach();
          }
        }
      });
      this.nzDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.toState === "void") {
          if (this.overlayRef) {
            this.overlayRef.dispose();
          }
          this.overlayRef = null;
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
  ngOnChanges(changes) {
    const {
      nzVisible,
      nzDisabled,
      nzOverlayClassName,
      nzOverlayStyle,
      nzTrigger
    } = changes;
    if (nzTrigger) {
      this.nzTrigger$.next(this.nzTrigger);
    }
    if (nzVisible) {
      this.inputVisible$.next(this.nzVisible);
    }
    if (nzDisabled) {
      const nativeElement = this.elementRef.nativeElement;
      if (this.nzDisabled) {
        this.renderer.setAttribute(nativeElement, "disabled", "");
        this.inputVisible$.next(false);
      } else {
        this.renderer.removeAttribute(nativeElement, "disabled");
      }
    }
    if (nzOverlayClassName) {
      this.setDropdownMenuValue("nzOverlayClassName", this.nzOverlayClassName);
    }
    if (nzOverlayStyle) {
      this.setDropdownMenuValue("nzOverlayStyle", this.nzOverlayStyle);
    }
  }
};
_NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) {
  return new (t || _NzDropDownDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Platform));
};
_NzDropDownDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropDownDirective,
  selectors: [["", "nz-dropdown", ""]],
  hostAttrs: [1, "ant-dropdown-trigger"],
  inputs: {
    nzDropdownMenu: "nzDropdownMenu",
    nzTrigger: "nzTrigger",
    nzMatchWidthElement: "nzMatchWidthElement",
    nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute],
    nzClickHide: [2, "nzClickHide", "nzClickHide", booleanAttribute],
    nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
    nzVisible: [2, "nzVisible", "nzVisible", booleanAttribute],
    nzOverlayClassName: "nzOverlayClassName",
    nzOverlayStyle: "nzOverlayStyle",
    nzPlacement: "nzPlacement"
  },
  outputs: {
    nzVisibleChange: "nzVisibleChange"
  },
  exportAs: ["nzDropdown"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NzDropDownDirective = _NzDropDownDirective;
__decorate([WithConfig()], NzDropDownDirective.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-dropdown]",
      exportAs: "nzDropdown",
      host: {
        class: "ant-dropdown-trigger"
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: Overlay
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: Platform
  }], {
    nzDropdownMenu: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzMatchWidthElement: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClickHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }]
  });
})();
var _NzContextMenuServiceModule = class _NzContextMenuServiceModule {
};
_NzContextMenuServiceModule.ɵfac = function NzContextMenuServiceModule_Factory(t) {
  return new (t || _NzContextMenuServiceModule)();
};
_NzContextMenuServiceModule.ɵmod = ɵɵdefineNgModule({
  type: _NzContextMenuServiceModule
});
_NzContextMenuServiceModule.ɵinj = ɵɵdefineInjector({});
var NzContextMenuServiceModule = _NzContextMenuServiceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuServiceModule, [{
    type: NgModule
  }], null, null);
})();
var _NzDropDownADirective = class _NzDropDownADirective {
  constructor() {
  }
};
_NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) {
  return new (t || _NzDropDownADirective)();
};
_NzDropDownADirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropDownADirective,
  selectors: [["a", "nz-dropdown", ""]],
  hostAttrs: [1, "ant-dropdown-link"],
  standalone: true
});
var NzDropDownADirective = _NzDropDownADirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownADirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-dropdown]",
      host: {
        class: "ant-dropdown-link"
      },
      standalone: true
    }]
  }], () => [], null);
})();
var _NzDropdownButtonDirective = class _NzDropdownButtonDirective {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.nzButtonGroupComponent = inject(NzButtonGroupComponent, {
      host: true,
      optional: true
    });
  }
  ngAfterViewInit() {
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    if (this.nzButtonGroupComponent && parentElement) {
      this.renderer.addClass(parentElement, "ant-dropdown-button");
    }
  }
};
_NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) {
  return new (t || _NzDropdownButtonDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NzDropdownButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropdownButtonDirective,
  selectors: [["", "nz-button", "", "nz-dropdown", ""]],
  standalone: true
});
var NzDropdownButtonDirective = _NzDropdownButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button][nz-dropdown]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _NzDropdownMenuComponent = class _NzDropdownMenuComponent {
  onAnimationEvent(event) {
    this.animationStateChange$.emit(event);
  }
  setMouseState(visible) {
    this.mouseState$.next(visible);
  }
  setValue(key, value) {
    this[key] = value;
    this.cdr.markForCheck();
  }
  constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.nzMenuService = nzMenuService;
    this.directionality = directionality;
    this.mouseState$ = new BehaviorSubject(false);
    this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
    this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
    this.animationStateChange$ = new EventEmitter();
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) {
  return new (t || _NzDropdownMenuComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(Directionality));
};
_NzDropdownMenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDropdownMenuComponent,
  selectors: [["nz-dropdown-menu"]],
  viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  exportAs: ["nzDropdownMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    MenuService,
    /** menu is inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useValue: true
    }
  ]), ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  consts: [[1, "ant-dropdown", 3, "mouseenter", "mouseleave", "ngClass", "ngStyle", "nzNoAnimation"]],
  template: function NzDropdownMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 2, 7, "ng-template");
    }
  },
  dependencies: [NgClass, NgStyle, NzNoAnimationDirective],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzDropdownMenuComponent = _NzDropdownMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownMenuComponent, [{
    type: Component,
    args: [{
      selector: `nz-dropdown-menu`,
      exportAs: `nzDropdownMenu`,
      animations: [slideMotion],
      providers: [
        MenuService,
        /** menu is inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useValue: true
        }
      ],
      template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgClass, NgStyle, NzNoAnimationDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: MenuService
  }, {
    type: Directionality
  }], {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var _NzDropDownModule = class _NzDropDownModule {
};
_NzDropDownModule.ɵfac = function NzDropDownModule_Factory(t) {
  return new (t || _NzDropDownModule)();
};
_NzDropDownModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDropDownModule,
  imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
  exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
});
_NzDropDownModule.ɵinj = ɵɵdefineInjector({
  imports: [NzContextMenuServiceModule, NzMenuModule]
});
var NzDropDownModule = _NzDropDownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownModule, [{
    type: NgModule,
    args: [{
      imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
      exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
    }]
  }], null, null);
})();
var LIST_OF_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "top"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "top"
})];
var _NzContextMenuService = class _NzContextMenuService {
  constructor(ngZone, overlay) {
    this.ngZone = ngZone;
    this.overlay = overlay;
    this.overlayRef = null;
    this.closeSubscription = Subscription.EMPTY;
  }
  create($event, nzDropdownMenuComponent) {
    this.close(true);
    const {
      x,
      y
    } = $event;
    if ($event instanceof MouseEvent) {
      $event.preventDefault();
    }
    const positionStrategy = this.overlay.position().flexibleConnectedTo({
      x,
      y
    }).withPositions(LIST_OF_POSITIONS).withTransformOriginOn(".ant-dropdown");
    this.overlayRef = this.overlay.create({
      positionStrategy,
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
    this.closeSubscription = new Subscription();
    this.closeSubscription.add(nzDropdownMenuComponent.descendantMenuItemClick$.subscribe(() => this.close()));
    this.closeSubscription.add(this.ngZone.runOutsideAngular(() => merge(fromEvent(document, "click").pipe(
      filter((event) => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)),
      /** handle firefox contextmenu event **/
      filter((event) => event.button !== 2)
    ), fromEvent(document, "keydown").pipe(filter((event) => event.key === "Escape"))).pipe(first()).subscribe(() => this.ngZone.run(() => this.close()))));
    return this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
  }
  close(clear = false) {
    if (this.overlayRef) {
      this.overlayRef.detach();
      if (clear) {
        this.overlayRef.dispose();
      }
      this.overlayRef = null;
      this.closeSubscription.unsubscribe();
    }
  }
};
_NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) {
  return new (t || _NzContextMenuService)(ɵɵinject(NgZone), ɵɵinject(Overlay));
};
_NzContextMenuService.ɵprov = ɵɵdefineInjectable({
  token: _NzContextMenuService,
  factory: _NzContextMenuService.ɵfac,
  providedIn: NzContextMenuServiceModule
});
var NzContextMenuService = _NzContextMenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuService, [{
    type: Injectable,
    args: [{
      providedIn: NzContextMenuServiceModule
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Overlay
  }], null);
})();

export {
  NzDropDownDirective,
  NzContextMenuServiceModule,
  NzDropDownADirective,
  NzDropdownButtonDirective,
  NzDropdownMenuComponent,
  NzDropDownModule,
  NzContextMenuService
};
//# sourceMappingURL=chunk-4QXAJH2A.js.map
