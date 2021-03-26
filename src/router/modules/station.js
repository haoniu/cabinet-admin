/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const stationRouter = {
  path: '/station',
  component: Layout,
  meta: {
    title: '电站管理',
    icon: 'el-icon-office-building'
  },
  children: [
    {
      path: 'new',
      component: () => import('@/views/tab/index'),
      name: 'station',
      meta: { title: '新建电站', icon: 'el-icon-data-board' }
    },
    {
      path: 'list',
      component: () => import('@/views/tab/index'),
      name: 'stationList',
      meta: { title: '电站列表', icon: 'el-icon-data-analysis' }
    },
    {
      path: 'cabninet-list',
      component: () => import('@/views/tab/index'),
      name: 'cabinetList',
      meta: { title: '电柜列表', icon: 'el-icon-film' }
    }
  ]
}
export default stationRouter
