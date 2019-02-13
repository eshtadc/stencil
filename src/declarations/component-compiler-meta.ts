import * as d from '.';

/** Must be serializable to JSON!! */
export interface ComponentCompilerFeatures {
  hasAsyncLifecycle: boolean;
  hasAttribute: boolean;
  hasAttributeChangedCallbackFn: boolean;
  hasComponentWillLoadFn: boolean;
  hasComponentDidLoadFn: boolean;
  hasComponentWillUpdateFn: boolean;
  hasComponentDidUpdateFn: boolean;
  hasComponentWillRenderFn: boolean;
  hasComponentDidRenderFn: boolean;
  hasComponentDidUnloadFn: boolean;
  hasConnectedCallbackFn: boolean;
  hasDisonnectedCallbackFn: boolean;
  hasElement: boolean;
  hasEvent: boolean;
  hasLifecycle: boolean;
  hasListener: boolean;
  hasListenerTarget: boolean;
  hasListenerTargetWindow: boolean;
  hasListenerTargetDocument: boolean;
  hasListenerTargetBody: boolean;
  hasListenerTargetParent: boolean;
  hasMember: boolean;
  hasMethod: boolean;
  hasMode: boolean;
  hasProp: boolean;
  hasPropMutable: boolean;
  hasReflect: boolean;
  hasRenderFn: boolean;
  hasState: boolean;
  hasStyle: boolean;
  hasVdomAttribute: boolean;
  hasVdomClass: boolean;
  hasVdomFunctional: boolean;
  hasVdomKey: boolean;
  hasVdomListener: boolean;
  hasVdomRef: boolean;
  hasVdomRender: boolean;
  hasVdomStyle: boolean;
  hasVdomText: boolean;
  hasWatchCallback: boolean;
  htmlAttrNames: string[];
  htmlTagNames: string[];
  isUpdateable: boolean;
  potentialCmpRefs: d.PotentialComponentRef[];
}

/** Must be serializable to JSON!! */
export interface ComponentCompilerMeta extends ComponentCompilerFeatures {
  assetsDirs?: CompilerAssetDir[];
  componentClassName: string;
  dependencies: string[];
  elementRef: string;
  encapsulation: Encapsulation;
  events: ComponentCompilerEvent[];
  excludeFromCollection: boolean;
  isCollectionDependency: boolean;
  docs: CompilerJsDoc;
  jsFilePath: string;
  listeners: ComponentCompilerListener[];
  methods: ComponentCompilerMethod[];
  virtualProperties: ComponentCompilerVirtualProperty[];
  properties: ComponentCompilerProperty[];
  watchers: ComponentCompilerWatch[];
  sourceFilePath: string;
  states: ComponentCompilerState[];
  styleDocs: CompilerStyleDoc[];
  styles: d.StyleCompiler[];
  tagName: string;
}


export type Encapsulation = 'shadow' | 'scoped' | 'none';


export interface ComponentCompilerStaticProperty {
  mutable: boolean;
  optional: boolean;
  required: boolean;
  type: ComponentCompilerPropertyType;
  complexType?: ComponentCompilerPropertyComplexType;
  attribute?: string;
  reflect?: boolean;
  docs: CompilerJsDoc;
  defaultValue?: string;
}

export interface ComponentCompilerProperty extends ComponentCompilerStaticProperty {
  name: string;
}

export interface ComponentCompilerVirtualProperty {
  name: string;
  type: string;
  docs: string;
}

export type ComponentCompilerPropertyType = 'any' | 'string' | 'boolean' | 'number' | 'unknown';

export interface ComponentCompilerPropertyComplexType {
  original: string;
  resolved: string;
  references: ComponentCompilerTypeReferences;
}

export interface ComponentCompilerTypeReferences {
  [key: string]: ComponentCompilerTypeReference;
}

export interface ComponentCompilerTypeReference {
  location: 'local' | 'global' | 'import';
  path?: string;
}

export interface ComponentCompilerEvent {
  name: string;
  method: string;
  bubbles: boolean;
  cancelable: boolean;
  composed: boolean;
  docs: CompilerJsDoc;
  complexType: ComponentCompilerEventComplexType;
}

export interface ComponentCompilerEventComplexType {
  original: string;
  resolved: string;
  references: ComponentCompilerTypeReferences;
}

export interface ComponentCompilerListener {
  name: string;
  method: string;
  capture: boolean;
  disabled: boolean;
  passive: boolean;
  target: d.ListenTargetOptions | undefined;
}

export interface ComponentCompilerStaticMethod {
  docs: CompilerJsDoc;
  complexType: ComponentCompilerMethodComplexType;
}

export interface ComponentCompilerMethodComplexType {
  signature: string;
  parameters: CompilerJsDoc[];
  returns: {
    type: string;
    docs: string;
  };
}

export interface ComponentCompilerWatch {
  propName: string;
  methodName: string;
}

export interface ComponentCompilerMethod extends ComponentCompilerStaticMethod {
  name: string;
}

export interface ComponentCompilerState {
  name: string;
}

export interface CompilerJsDoc {
  text: string;
  tags: CompilerJsDocTagInfo[];
}

export interface CompilerJsDocTagInfo {
  name: string;
  text?: string;
}

export interface CompilerStyleDoc {
  name: string;
  docs: string;
  annotation: 'prop';
}

export interface CompilerAssetDir {
  absolutePath?: string;
  cmpRelativePath?: string;
  originalComponentPath?: string;
  originalCollectionPath?: string;
}


export interface ComponentCompilerNativeData {
  filePath: string;
  tagName: string;
  componentClassName: string;
  cmp: d.ComponentCompilerMeta;
}


export interface ComponentCompilerLazyData {
  exportLine: string;
  filePath: string;
  tagName: string;
}
