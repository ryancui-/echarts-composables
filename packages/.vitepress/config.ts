import { type DefaultTheme, defineConfig } from 'vitepress'
import Sidebar = DefaultTheme.Sidebar

const echartsSidebar: Sidebar = [
  {
    text: 'Basic',
    items: [
      { text: 'Introduction', link: '/echarts/' },
      { text: 'Quick Start', link: '/echarts/quick-start' },
      { text: 'Dimensions & Metrics', link: '/echarts/dimensions-and-metrics' },
      { text: 'Add-ons', link: '/echarts/addons' },
    ]
  },
  {
    text: 'Add-ons',
    items: [
      {
        text: 'Axis',
        items: [
          { text: 'useYAxisAsDimension', link: '/echarts/addons/useYAxisAsDimension/' },
        ]
      },
      {
        text: 'Line',
        items: [
          { text: 'useLineArea', link: '/echarts/addons/useLineArea/' },
        ]
      },
      {
        text: 'Pie',
        items: [
          { text: 'useDoughnut', link: '/echarts/addons/useDoughnut/' },
          { text: 'useDoughnutCenterTotal', link: '/echarts/addons/useDoughnutCenterTotal/' },
        ]
      },
      {
        text: 'Radar',
        items: [
          { text: 'useRadarArea', link: '/echarts/addons/useRadarArea/' },
        ]
      },
    ]
  }
]

const examplesSidebar: Sidebar = [
  {
    text: 'Examples',
    items: [
      { text: '区域折线图', link: '/examples/lineArea' },
      { text: '水平柱状图', link: '/examples/horizontalBar' },
      { text: '环形图', link: '/examples/doughnut' },
      { text: '柱线图', link: '/examples/lineBar' },
    ]
  }
]

export default defineConfig({
  outDir: '../site',
  title: 'ECharts Composables',
  description: 'A composables implementation of ECharts',
  head: [
    ['link', { rel: 'icon', href: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/echarts/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Changelog', link: 'https://github.com/ryancui-/echarts-composables/blob/master/CHANGELOG.md' }
    ],
    sidebar: {
      '/echarts/': echartsSidebar,
      '/examples/': examplesSidebar,
    },
    footer: {
      copyright: 'Copyright © 2022-present Ryan Cui'
    }
  }
})
