/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const taskRouter = {
  path: '/task',
  component: Layout,
  meta: {
    title: '任务管理',
    icon: 'el-icon-notebook-2'
  },
  children: [
    {
      path: 'new',
      component: () => import('@/views/tab/index'),
      name: 'newTask',
      meta: { title: '新建任务', icon: 'el-icon-circle-plus' }
    },
    {
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'taskList',
      meta: { title: '任务列表', icon: 'el-icon-s-order' }
    },
    {
      path: 'del',
      component: () => import('@/views/tab/index'),
      name: 'delTask',
      meta: { title: '撤回任务列表', icon: 'el-icon-s-release' }
    }
  ]
}
export default taskRouter
