/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const orgRouter = {
  path: '/org',
  component: Layout,
  meta: {
    title: '机构管理',
    icon: 'tree'
  },
  children: [
    {
      path: 'new',
      component: () => import('@/views/tab/index'),
      name: 'newOrg',
      meta: { title: '新建机构', icon: 'tab' }
    },
    {
      path: 'list',
      component: () => import('@/views/tab/index'),
      name: 'orgList',
      meta: { title: '机构列表', icon: 'list' }
    }
  ]
}
export default orgRouter
