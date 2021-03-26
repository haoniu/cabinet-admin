/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  meta: {
    title: '人员管理',
    icon: 'el-icon-user-solid'
  },
  children: [
    {
      path: 'new',
      component: () => import('@/views/tab/index'),
      name: 'newUser',
      meta: { title: '新建人员', icon: 'user' }
    },
    {
      path: 'user-list',
      component: () => import('@/views/tab/index'),
      name: 'userList',
      meta: { title: '人员列表', icon: 'peoples' }
    }
  ]
}
export default userRouter
