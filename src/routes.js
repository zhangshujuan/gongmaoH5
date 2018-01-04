import login from './views/login.vue'
import my from './views/my.vue'
import registerStep1 from './views/register-step-1.vue'
import registerStep2 from './views/register-step-2.vue'
import registerStep3 from './views/register-step-3.vue'
import forgetStep1 from './views/forget-step-1.vue'
import forgetStep2 from './views/forget-step-2.vue'
import salary from './views/salary.vue'
import notification from './views/notification.vue'
import notificationDetail from './views/notification-detail.vue'
import balance from './views/balance.vue'
import bank from './views/bank.vue'
import bankDetail from './views/bank-detail.vue'
import bankBindStep1 from './views/bank-bind-step-1.vue'
import bankBindStep2 from './views/bank-bind-step-2.vue'
import withdraw from './views/withdraw.vue'
import withdrawSucc from './views/withdraw-succ.vue'
import agreement from './views/agreement.vue'
import aboutus from './views/aboutus.vue'
import withdrawbank from './views/withdrawbank.vue'
let routes = [
    {
        path: '/',
        component: salary,
        name: '工资'
    },
    {
        path: '/login',
        component: login,
        name: '登录'
    },
    {
        path: '/my',
        component: my,
        name: '个人中心',
    },
    {
        path: '/registerStep1',
        component: registerStep1,
        name: '注册-填写手机号密码'
    },
    {
        path: '/registerStep2',
        component: registerStep2,
        name: '注册-发送验证码'
    },
    {
        path: '/registerStep3',
        component: registerStep3,
        name: '注册-完善个人信息'
    },
    {
        path: '/forgetStep1',
        component: forgetStep1,
        name: '忘记密码-发送验证码'
    },
    {
        path: '/forgetStep2',
        component: forgetStep2,
        name: '忘记密码-重置密码'
    },
    {
        path: '/salary',
        component: salary,
        name: '工资'
    },
    {
        path: '/notification',
        component: notification,
        name: '通知'
    },
    {
        path: '/notificationDetail/:id',
        component: notificationDetail,
        name: '通知-详情'
    },
    {
        path: '/balance',
        component: balance,
        name: '账户明细'
    },
    {
        path: '/bank',
        component: bank,
        name: '银行卡'
    },
    {
        path: '/bankDetail/:id',
        component: bankDetail,
        name: '查看银行卡'
    },
    {
        path: '/bankBindStep1',
        component: bankBindStep1,
        name: '银行卡绑定-填写信息'
    },
    {
        path: '/bankBindStep2',
        component: bankBindStep2,
        name: '银行卡绑定-验证码'
    },
    {
        path: '/withdraw',
        component: withdraw,
        name: '提现'
    },
    {
        path: '/withdrawSucc',
        component: withdrawSucc,
        name: '提现成功'
    },
    {
        path: '/withdrawbank',
        component: withdrawbank,
        name: '提现'
    },
    {
        path: '/agreement',
        component: agreement,
        name: '工猫用户协议'
    },
    {
        path: '/aboutus',
        component: aboutus,
        name: '关于我们'
    }
];

export default routes;