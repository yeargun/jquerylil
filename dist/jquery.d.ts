export as namespace jQuery

interface JQueryStatic {
  (selector?: any, context?: any): JQuery
  fn: JQuery & { jquery: string }
  extend: {
    (deep: boolean, target: any, ...sources: any[]): any
    (target: any, ...sources: any[]): any
  }
  each(collection: any, callback: (index: any, value: any) => any): any
  map(collection: any, callback: (value: any, index: any) => any): any[]
  grep(array: any[], callback: (value: any, index: number) => boolean, invert?: boolean): any[]
  merge(first: any[], second: any[]): any[]
  makeArray(obj: any): any[]
  inArray(value: any, array: any[], fromIndex?: number): number
  isPlainObject(obj: any): boolean
  isEmptyObject(obj: any): boolean
  isFunction(obj: any): boolean
  isArray(obj: any): boolean
  isWindow(obj: any): boolean
  isNumeric(obj: any): boolean
  type(obj: any): string
  camelCase(string: string): string
  trim(text: string): string
  now(): number
  contains(container: Element, contained: Element): boolean
  escapeSelector(selector: string): string
  Deferred: new (beforeStart?: (deferred: JQueryDeferred) => void) => JQueryDeferred
  when: (...thenables: any[]) => JQueryDeferred
  Callbacks: (flags?: string) => JQueryCallbacks
  ajax: (url: any, settings?: any) => JQueryDeferred
  get: (url: string, data?: any, success?: Function, dataType?: string) => JQueryDeferred
  post: (url: string, data?: any, success?: Function, dataType?: string) => JQueryDeferred
  getJSON: (url: string, data?: any, success?: Function) => JQueryDeferred
  param: (obj: any, traditional?: boolean) => string
  parseHTML: (data: string, context?: Document, keepScripts?: boolean) => any[]
  parseXML: (data: string) => Document
  parseJSON: (json: string) => any
  noConflict: (removeAll?: boolean) => JQueryStatic
}

interface JQuery {
  length: number
  jquery: string
  [index: number]: Element
  toArray(): Element[]
  get(index?: number): any
  each(callback: (index: number, element: Element) => any): this
  map(callback: (index: number, element: Element) => any): JQuery
  eq(index: number): JQuery
  first(): JQuery
  last(): JQuery
  end(): JQuery
  find(selector: any): JQuery
  filter(selector: any): JQuery
  not(selector: any): JQuery
  is(selector: any): boolean
  has(selector: any): JQuery
  add(selector: any): JQuery
  children(selector?: string): JQuery
  parent(selector?: string): JQuery
  parents(selector?: string): JQuery
  closest(selector: any): JQuery
  siblings(selector?: string): JQuery
  next(selector?: string): JQuery
  prev(selector?: string): JQuery
  addClass(name: string): this
  removeClass(name?: string): this
  toggleClass(name: string, state?: boolean): this
  hasClass(name: string): boolean
  attr(name: string, value?: any): any
  removeAttr(name: string): this
  prop(name: string, value?: any): any
  data(key?: string, value?: any): any
  removeData(key?: string): this
  val(value?: any): any
  text(value?: any): any
  html(value?: any): any
  css(name: any, value?: any): any
  show(duration?: any, callback?: Function): this
  hide(duration?: any, callback?: Function): this
  toggle(duration?: any, callback?: Function): this
  fadeIn(duration?: any, callback?: Function): this
  fadeOut(duration?: any, callback?: Function): this
  slideDown(duration?: any, callback?: Function): this
  slideUp(duration?: any, callback?: Function): this
  slideToggle(duration?: any, callback?: Function): this
  animate(properties: object, duration?: any, easing?: any, callback?: Function): this
  stop(clearQueue?: boolean, jumpToEnd?: boolean): this
  append(content: any): this
  prepend(content: any): this
  after(content: any): this
  before(content: any): this
  empty(): this
  remove(selector?: string): this
  detach(selector?: string): this
  clone(withDataAndEvents?: boolean): JQuery
  wrap(wrapping: any): this
  on(events: string, selector?: any, data?: any, handler?: Function): this
  off(events?: string, selector?: any, handler?: Function): this
  one(events: string, selector?: any, data?: any, handler?: Function): this
  trigger(event: any, extra?: any): this
  triggerHandler(event: any, extra?: any): any
  click(handler?: Function): this
  ready(handler: Function): this
  width(value?: any): any
  height(value?: any): any
  offset(coordinates?: any): any
  position(): { top: number; left: number }
  scrollTop(value?: number): any
  serialize(): string
  serializeArray(): Array<{ name: string; value: string }>
}

interface JQueryDeferred {
  state(): string
  promise(target?: any): JQueryDeferred
  then(done?: Function, fail?: Function, progress?: Function): JQueryDeferred
  done(callback: Function): this
  fail(callback: Function): this
  always(callback: Function): this
  progress(callback: Function): this
  catch(callback: Function): JQueryDeferred
  resolve(...args: any[]): this
  reject(...args: any[]): this
  notify(...args: any[]): this
}

interface JQueryCallbacks {
  add(callback: Function): this
  remove(callback: Function): this
  fire(...args: any[]): this
  fired(): boolean
  empty(): this
  disable(): this
  lock(): this
  has(callback?: Function): boolean
}

export const jQuery: JQueryStatic
export const $: JQueryStatic
export default jQuery
