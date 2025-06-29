# 列表

## 远程数据

#### 根节点和子节点

```html:example
<div id="remoteNestedList2"></div>
```

### 远程数据

```html:example
<div id="remoteSimpleList"></div>
```

## 多层级列表

```html:example
<div id="nestedList"></div>
```

## 简单列表

```html:example
<div id="simpleList"></div>
```

## 属性

### ListProps

| 属性名            | 类型                                                                 | 描述                                                                             | 默认值  |
| ----------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------- |
| `items`           | `ListItemsSetting<T>`                                                | 在列表中渲染的项目。可以是数组或 fetcher 设置。                                     |         |
| `divider`         | `boolean`                                                            | 是否在项目之间显示分隔线。                                                          | `true`  |
| `multiline`       | `boolean`                                                            | 项目是否可以多行显示。                                                              | `false` |
| `checkbox`        | `boolean | CheckboxProps`                                           | 是否为项目显示复选框，或用于自定义的 CheckboxProps。                                   | `false` |
| `checkOnClick`    | `boolean | 'any' | string`                                          | 点击项目时检查项目的行为。                                                            | `false` |
| `selectOnChecked` | `boolean`                                                            | 项目被选中时是否选择项目。                                                            | `true`  |
| `active`          | `string | string[] | Record<string, boolean>`                         | 通过键指定活动项目。                                                                |         |
| `multipleActive`  | `boolean`                                                            | 是否可以同时激活多个项目。                                                          | `false` |
| `activeOnHover`   | `boolean`                                                            | 是否在悬停时激活项目。                                                              | `false` |
| `itemProps`       | `Partial<ListItemProps>`                                             | 应用于所有列表项的默认属性。                                                          |         |
| `itemKey`         | `ItemKeyGetter`                                                      | 用于获取每个项目的唯一键的函数或属性名称。                                                 | `'key'` |
| `onActive`        | `(keys: string[], active: boolean) => void`                          | 项目活动状态更改时的回调。                                                            |         |
| `onCheck`         | `(change: Record<ItemKey, CheckedType>, checks: ItemKey[]) => void` | 项目选中状态更改时的回调。                                                            |         |
| `onLoad`          | `(items: T[]) => void | T[]`                                         | 项目加载完成后的回调。可用于转换项目。                                                   |         |
| `onLoadFail`      | `CustomContentType | ((error: Error) => CustomContentType | void)`   | 加载项目失败时显示的内容或回调。                                                       |         |
| `beforeRender`    | `(options: ListProps) => void`                                       | 列表渲染之前的回调。                                                                |         |
| `afterRender`     | `(firstRender: boolean) => void`                                     | 列表渲染之后的回调。                                                                |         |
| `beforeDestroy`   | `() => void`                                                         | 组件销毁之前的回调。                                                                |         |
| `getItem`         | `(item: T, index: number) => ListItemProps`                          | 用于获取特定项目属性的函数。                                                          |         |

### ListitemProps

| 属性名           | 类型                                                  | 描述                                                                 | 默认值  |
| ---------------- | ----------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| `component`      | `ComponentType | keyof JSX.IntrinsicElements`         | 用于渲染项目的组件。                                                       | `'div'` |
| `innerComponent` | `ComponentType | keyof JSX.IntrinsicElements`         | 用于渲染项目内部部分的组件。                                                 |         |
| `innerClass`     | `ClassNameLike`                                       | 内部组件的 CSS 类。                                                      |         |
| `innerAttrs`     | `Record<string, unknown>`                             | 内部组件的 HTML 属性。                                                   |         |
| `multiline`      | `boolean`                                             | 项目是否可以多行显示。                                                     | `false` |
| `checked`        | `CheckedType`                                         | 项目的选中状态。                                                         |         |
| `checkbox`       | `CheckboxProps`                                       | 如果显示，则为复选框的属性。                                                 |         |
| `disabled`       | `boolean`                                             | 项目是否被禁用。                                                         | `false` |
| `active`         | `boolean`                                             | 项目是否处于活动状态。                                                     | `false` |
| `divider`        | `boolean`                                             | 是否在此项目后显示分隔线。                                                   | `false` |
| `toggleIcon`     | `CustomContentType`                                   | 用于切换嵌套列表的图标。                                                     |         |
| `icon`           | `IconType`                                            | 项目显示的图标。                                                         |         |
| `selected`       | `boolean`                                             | 项目是否被选中。                                                         | `false` |
| `avatar`         | `AvatarOptions | ((item: Item) => AvatarOptions)`     | 头像选项或获取头像选项的函数。                                                 |         |
| `leading`        | `CustomContentType`                                   | 显示在项目开头的内容。                                                     |         |
| `leadingClass`   | `ClassNameLike`                                       | 前导内容的 CSS 类。                                                      |         |
| `url`            | `string`                                              | 点击项目时导航到的 URL。                                                   |         |
| `target`         | `string`                                              | URL 的目标 (例如 `'_blank'`)。                                         |         |
| `text`           | `CustomContentType`                                   | 项目的主要文本内容。                                                       |         |
| `textClass`      | `ClassNameLike`                                       | 文本内容的 CSS 类。                                                      |         |
| `title`          | `CustomContentType`                                   | 项目的标题 (通常用作 HTML title 属性)。                                    |         |
| `titleClass`     | `ClassNameLike`                                       | 标题的 CSS 类。                                                        |         |
| `titleAttrs`     | `Record<string, unknown>`                             | 标题的 HTML 属性。                                                     |         |
| `subtitle`       | `CustomContentType`                                   | 项目的副标题内容。                                                       |         |
| `subtitleClass`  | `ClassNameLike`                                       | 副标题的 CSS 类。                                                      |         |
| `trailing`       | `CustomContentType`                                   | 显示在项目末尾的内容。                                                     |         |
| `trailingClass`  | `ClassNameLike`                                       | 尾随内容的 CSS 类。                                                      |         |
| `trailingIcon`   | `IconType`                                            | 显示在项目末尾的图标。                                                     |         |
| `actions`        | `ToolbarSetting<[Item]>`                              | 为项目显示的操作，通常作为工具栏。                                               |         |
| `contentClass`   | `ClassNameLike`                                       | 主要内容区域的 CSS 类。                                                    |         |
| `content`        | `CustomContentType`                                   | 项目的自定义内容。                                                       |         |
| `contentAttrs`   | `Record<string, unknown>`                             | 内容区域的 HTML 属性。                                                   |         |
| `hint`           | `string`                                              | 项目的提示文本。                                                         |         |

### NestedListProps

这些属性扩展了 `ListProps` 并且特定于嵌套列表。

| 属性名                | 类型                                                              | 描述                                                                             | 默认值    |
| --------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------- |
| `parentKey`           | `ItemKey`                                                         | 父项目的键。                                                                       |             |
| `parent`              | `NestedItem`                                                      | 父项目对象。                                                                       |             |
| `indent`              | `number`                                                          | 嵌套项目的缩进大小。                                                                 |             |
| `level`               | `number`                                                          | 当前嵌套级别。                                                                     | `0`         |
| `preserve`            | `string`                                                          | 如果设置，嵌套项目的展开/折叠状态将使用此键持久化到存储中。                                       |             |
| `nestedTrigger`       | `'click' | 'hover'`                                             | 触发展开/折叠嵌套列表的操作。                                                         | `'click'`   |
| `accordion`           | `boolean`                                                         | 是否以手风琴模式操作 (一次只有一个项目展开)。                                             | `false`     |
| `nestedShow`          | `boolean | Record<ItemKey, boolean>`                          | 控制嵌套项目的展开状态。                                                               | `false`     |
| `defaultNestedShow`   | `boolean | Record<ItemKey, boolean>`                          | 嵌套项目的初始展开状态。                                                               | `false`     |
| `toggleIcons`         | `{collapsed?: IconType, expanded?: IconType, normal?: IconType}` | 不同切换状态 (折叠、展开、正常) 的图标。                                                 |             |
| `nestedToggle`        | `string`                                                          | 切换嵌套列表的元素的 CSS 选择器。                                                      |             |
| `renderCollapsedList` | `boolean`                                                         | 是否渲染折叠列表 (对性能有用)。                                                         | `false`     |
| `checkedState`        | `Record<ItemKey, boolean>`                                        | 用于管理嵌套列表中选中状态的内部属性。不供直接使用。                                               |             |
| `toggleOnActive`      | `boolean`                                                         | 当项目变为活动状态时是否切换嵌套列表。                                                        | `false`     |
| `onToggle`            | `(key: ItemKey, toggle: boolean) => false | void`               | 嵌套列表切换时的回调。返回 `false` 以阻止切换。                                           |             |
| `onHoverItem`         | `(info: {hover: boolean, item: T, index: number, event: MouseEvent}) => void` | 鼠标悬停在项目上时的回调。                                                              |             |

## 事件

| 事件名        | 参数                                                                 | 描述                                                                 |
| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `onActive`    | `keys: string[], active: boolean`                                    | 当项目活动状态更改时触发。                                                     |
| `onCheck`     | `change: Record<ItemKey, CheckedType>, checks: ItemKey[]`            | 当项目选中状态更改时触发。                                                     |
| `onLoad`      | `items: T[]`                                                         | 项目加载完成后触发。                                                         |
| `onLoadFail`  | `error: Error` (如果使用回调)                                           | 加载项目失败时触发。                                                         |
| `onToggle`    | `key: ItemKey, toggle: boolean` (对于 NestedList)                     | 嵌套列表切换 (展开/折叠) 时触发。                                              |
| `onHoverItem` | `info: {hover: boolean, item: T, index: number, event: MouseEvent}` | 鼠标悬停在项目上时触发 (对于 NestedList)。                                       |

*注意: `T` 代表项目的类型，通常是 `ListItem` 或 `NestedListItem`。*

## 方法

### List 方法

| 方法名             | 参数                                                                      | 返回值                      | 描述                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| `getItem()`        | `key: ItemKey`                                                                  | `Item | undefined`           | 通过其键获取项目数据。                                                                                   |
| `getItems()`       |                                                                                 | `Item[]`                    | 获取所有当前项目数据。                                                                                   |
| `load()`           |                                                                                 | `void`                      | 如果 `items` 属性是 fetcher，则手动触发项目加载。                                                          |
| `setItems()`       | `items?: Item[], error?: Error`                                                 | `Promise<void>`             | 手动设置或更新列表项。也可用于在加载失败时设置错误状态。                                                             |
| `isChecked()`      | `key: ItemKey, index?: number, defaultChecked?: CheckedType`                    | `CheckedType`               | 检查项目是否被选中。                                                                                   |
| `isAllChecked()`   |                                                                                 | `boolean`                   | 检查所有项目是否都被选中。                                                                               |
| `toggleChecked()`  | `keyOrChange: ItemKey | ItemKey[] | Record<ItemKey, CheckedType>, checked?: boolean` | `Promise<void>`             | 切换一个或多个项目的选中状态。                                                                         |
| `toggleAllChecked()`| `checked?: boolean`                                                             | `Promise<void>`             | 切换所有项目的选中状态。                                                                               |
| `getChecks()`      |                                                                                 | `ItemKey[]`                 | 获取所有当前选中项目的键。                                                                               |
| `isActive()`       | `key: string | Item`                                                            | `boolean`                   | 检查项目是否处于活动状态。                                                                               |
| `getActiveKeys()`  |                                                                                 | `string[]`                  | 获取所有当前活动项目的键。                                                                               |
| `getActiveKey()`   |                                                                                 | `string | undefined`         | 获取第一个活动项目的键。                                                                                 |
| `toggleActive()`   | `keys: string | string[], active?: boolean`                                      | `Promise<void>`             | 切换一个或多个项目的活动状态。                                                                         |
| `getNextItem()`    | `key?: string, condition?: (item: Item, index: number) => boolean, step?: number` | `Item | undefined`           | 获取相对于给定键的下一个项目，可选地匹配条件。                                                                 |
| `getPrevItem()`    | `key?: string, condition?: (item: Item, index: number) => boolean`              | `Item | undefined`           | 获取相对于给定键的上一个项目，可选地匹配条件。                                                                 |
| `activeNext()`     | `condition?: (item: Item, index: number) => boolean, step?: number`             | `void`                      | 激活下一个项目。                                                                                     |
| `activePrev()`     | `condition?: (item: Item, index: number) => boolean`                            | `void`                      | 激活上一个项目。                                                                                     |

### NestedList 方法

`NestedList` 继承自 `List` 的所有方法，并添加了以下方法：

| 方法名            | 参数                                 | 返回值                    | 描述                                                                                       |
| ----------------- | ------------------------------------------ | ------------------------- | ------------------------------------------------------------------------------------------ |
| `getItemMap()`    |                                            | `Map<string, ItemInfo>`   | 获取所有项目 (包括嵌套项目) 及其层次结构信息的映射。                                                 |
| `getRenderedItem()`| `keyPath: string`                          | `Item | undefined`         | 通过其 keyPath 获取渲染的项目数据。                                                            |
| `getItem()`       | `keyPath: string`                          | `Item | undefined`         | 通过其 keyPath 获取项目数据 (覆盖 List 的 `getItem` 以支持 keyPath)。                                |
| `isExpanded()`    | `keyPath: string`                          | `boolean`                 | 检查嵌套项目是否已展开。                                                                       |
| `toggle()`        | `keyPath: string, toggle?: boolean`        | `Promise<void>`           | 切换嵌套项目的展开/折叠状态。                                                                    |
| `toggleAll()`     | `show: boolean`                            | `Promise<void>`           | 展开或折叠所有嵌套项目。                                                                       |
| `getKeyPath()`    | `key: string`                              | `string`                  | 将简单的项目键转换为其在嵌套结构中的完整 keyPath。                                                     |
