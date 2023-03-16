import DefaultTheme from 'vitepress/theme';
import '@macross/theme-chalk/src/index.scss';
import MIcon from '@macross/components/icon';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MIcon); // 注册组件
  },
};
