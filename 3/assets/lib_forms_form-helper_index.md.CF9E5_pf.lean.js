import{_ as e,C as t,c as k,o as p,ak as r,G as l,j as i,w as h,a}from"./chunks/framework.V5gMLA31.js";const m=JSON.parse('{"title":"表单助手","description":"","frontmatter":{},"headers":[],"relativePath":"lib/forms/form-helper/index.md","filePath":"lib/forms/form-helper/index.md","lastUpdated":null}'),E={name:"lib/forms/form-helper/index.md"};function d(o,s,g,y,c,F){const n=t("Props");return p(),k("div",null,[s[3]||(s[3]=r("",29)),l(n,null,{default:h(()=>[...s[0]||(s[0]=[a(`
/** 当查询参数无法作为 name 匹配时，是否自动将查询参数作为 ID 查询，默认 \`true\`。 */
matchID?: boolean;
/** 当查询参数无法作为 name 匹配时，是否自动将查询参数作 \`name[]\` 的形式进行查询，默认 \`true\`。 */
matchBrackets?: boolean;
/** 是否缓存查询字段，开启后同一 query 只查询一次 DOM，默认 \`false\`。 */
cacheQuery?: boolean;
/** 是否允许同名字段，当为 \`false\`（默认）时，查找到多个同名字段会抛出错误。 */
allowSameName?: boolean;
/** 控件查找器映射，用于识别和操作自定义控件（如 Picker）。 */
controls?: object;
/** 表单字段自定义查找器，可以是按字段名映射的对象或统一的查找函数。 */
fields?: object | function;
/** 是否在找不到字段时抛出错误，默认 \`true\`。 */
throwError?: boolean;
`,-1)])]),_:1}),s[4]||(s[4]=i("h2",{id:"formfield-类型",tabindex:"-1"},[a("FormField 类型 "),i("a",{class:"header-anchor",href:"#formfield-类型","aria-label":'Permalink to "FormField 类型"'},"​")],-1)),s[5]||(s[5]=i("p",null,[i("code",null,"getFieldInfo"),a(" 返回的字段信息对象结构如下：")],-1)),l(n,null,{default:h(()=>[...s[1]||(s[1]=[a(`
/** 查询参数。 */
query: string;
/** 字段 name 属性值。 */
name: string;
/** 字段的 Cash 封装的 DOM 元素。 */
\\$field: Cash;
/** 字段当前值。 */
value: unknown;
/** 关联的控件信息，无控件时为 undefined。 */
control?: FormControlInfo;
`,-1)])]),_:1}),s[6]||(s[6]=i("h2",{id:"formcontrolinfo-类型",tabindex:"-1"},[a("FormControlInfo 类型 "),i("a",{class:"header-anchor",href:"#formcontrolinfo-类型","aria-label":'Permalink to "FormControlInfo 类型"'},"​")],-1)),s[7]||(s[7]=i("p",null,"关联的控件信息对象结构如下：",-1)),l(n,null,{default:h(()=>[...s[2]||(s[2]=[a(`
/** 控件类型标识。 */
type: string;
/** 控件实例。 */
instance: Component;
/** 控件的 Cash 封装的 DOM 元素。 */
\\$element: Cash;
/** 获取控件值的方法。 */
getVal: () => unknown;
/** 设置控件值的方法，返回是否成功。 */
setVal: (value: unknown) => boolean | undefined;
`,-1)])]),_:1})])}const C=e(E,[["render",d]]);export{m as __pageData,C as default};
