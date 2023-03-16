# Icon 图标

macross 推荐使用 xicons 作为图标库。

```sh
pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

```vue
<script setup lang="ts">
import { AccessibilityOutline, ArrowRedoOutline } from '@vicons/ionicons5';
const handleClick = () => {
  alert(1);
};
</script>
```

```vue
<MIcon color="#B1B2FF" size="40" @click="handleClick">
  <AccessibilityOutline/>
</MIcon>

<MIcon color="#AAC4FF" size="40">
  <AccessibilityOutline/>
</MIcon>
<MIcon color="#D2DAFF" size="40">
  <AccessibilityOutline/>
</MIcon>
<div>
  <MIcon color="#EBC7E8" size="60">
    <ArrowRedoOutline/>
  </MIcon>

  <MIcon color="#645CAA" size="60">
    <ArrowRedoOutline/>
  </MIcon>

  <MIcon color="#A084CA" size="60">
    <ArrowRedoOutline/>
  </MIcon>
</div>
```

```vue
<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5';
</script>
<template>
  <MIcon color="red" size="40">
    <CashOutline />
  </MIcon>
</template>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |
