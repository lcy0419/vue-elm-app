import Vue from 'vue'
import Router from 'vue-router'
import BalanceStatement from './components/BalanceStatement'
import Discount from './components/Discount'
import Money from './components/Money'
import My from './components/My'
import Scored from './components/Scored'
import ScoredStatement from './components/ScoredStatement'
import ScoredShop from './components/ScoredShop'
import List from './components/List'
import MenberCenter from './components/MemberCenter'
import DiscountStatement from './components/DiscountStatement'
import PayFor from './components/PayFor'
import ExchangeMember from './components/ExchangeMember'
import ByHistory from './components/ByHistory'
import ServeCenter from './components/ServeCenter'
import DownLoad from './components/DownLoad'
import SuperMemberStatement from './components/SuperMemberStatement'
import AppearRule from './components/AppearRule'
import UserGradeStatement from './components/UserGradeStatement'
import ScoreIssue from './components/ScoreIssue'
import Photograph from './components/Photograph'
import PayStatement from './components/PayStatement'
import OtherIssue from './components/OtherIssue'
import ArriveOnTime from './components/ArriveOnTime'
import VipStatement from './components/VipStatement'
import VipIssue from './components/VipIssue'
import Bag from './components/Bag'
import ActiveRule from './components/ActiveRule'
import SupplementRule from './components/SupplementRule'
import PreferentialStatement from './components/PreferentialStatement'
import ResponsibleStatement from './components/ResponsibleStatement'
import Voucher from './components/Voucher'
import Cooperate from './components/Cooperate'
import PayIssue from './components/PayIssue'
import SuperSeller from './components/SuperSeller'
import AnonymousBy from './components/AnonymousBy'
import ActiveIssue from './components/ActiveIssue'
import BagStatement from './components/BagStatement'
import ExchangeBag from './components/ExchangeBag'
import Recommend from './components/Recommend'
import BusinessVouchers from './components/BusinessVouchers'
import BusinessVouchersStatement from './components/BusinessVouchersStatement'
import HistoryBag from './components/HistoryBag'
import RedBag from './components/RedBag'
import AccountInformation from './components/AccountInformation'
import ChangeUserName from './components/ChangeUserName'
import Address from './components/Address'
import AddAddress from './components/AddAddress'
import SelectAddress from './components/SelectAddress'
import ResetPassword from './components/ResetPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'elmCityList',
      component: () => import('./views/ElmCityList.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/ElmCitySearch.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/ElmLogin.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('./views/ElmResetPassword.vue')
    },
    // --------------
    {
      path: "/ShopList",
      name: "ShopList",
      component: () => import('./views/ShopList.vue')
    },
    {
      path: "/ShopListNav",
      name: "ShopListNav",
      component: () => import('./components/common/ShopListNav')
    },
    {
      path: "/ShopSearch",
      name: "ShopSearch",
      component: () => import('./views/ShopSearch')
    },
    {
      path: "/ShopFood",
      name: "ShopFood",
      component: () => import('./views/ShopFood')
    },
    {
      path: "/ShopFoodDetail",
      name: "ShopFoodDetail",
      component: () => import('./views/ShopFoodDetail')
    },
    {
      path: "/ShopDetail",
      name: "ShopDetail",
      component: () => import('./views/ShopDetail')
    },
    {
      path: "/ShopSafe",
      name: "ShopSafe",
      component: () => import('./views/ShopSafe')
    },
    {
      path: "/SureOrder",
      name: "SureOrder",
      component: () => import('./views/SureOrder')
    },
    {
      path: "/SelectAddress",
      name: "SelectAddress",
      component: () => import('./views/SelectAddress')
    },
    {
      path: "/AddAddress",
      name: "AddAddress",
      component: () => import('./views/AddAddress')
    },
    {
      path: "/searchAddress",
      name: "searchAddress",
      component: () => import('./views/searchAddress')
    },
    {
      path: "/OrderList",
      name: "OrderList",
      component: () => import('./views/OrderList')
    },
    {
      path: "/ListRemark",
      name: "ListRemark",
      component: () => import('./views/ListRemark')
    },
    {
      path: "/SelectBill",
      name: "SelectBill",
      component: () => import('./views/SelectBill')
    },
    // --------------
    { path: "/My", component: My },
    { path: "/BalanceStatement", component: BalanceStatement },
    { path: "/Money", component: Money },
    { path: "/Discount", component: Discount },
    { path: "/Scored", component: Scored },
    { path: "/ScoredStatement", component: ScoredStatement },
    { path: "/ScoredShop", component: ScoredShop },
    { path: "/List", component: List },
    { path: "/MenberCenter", component: MenberCenter },
    { path: "/DiscountStatement", component: DiscountStatement },
    { path: "/PayFor", component: PayFor },
    { path: "/ExchangeMember", component: ExchangeMember },
    { path: "/ByHistory", component: ByHistory },
    { path: "/ServeCenter", component: ServeCenter },
    { path: "/DownLoad", component: DownLoad },
    { path: "/SuperMemberStatement", component: SuperMemberStatement },
    { path: "/AppearRule", component: AppearRule },
    { path: "/UserGradeStatement", component: UserGradeStatement },
    { path: "/ScoreIssue", component: ScoreIssue },
    { path: "/Photograph", component: Photograph },
    { path: "/PayStatement", component: PayStatement },
    { path: "/OtherIssue", component: OtherIssue },
    { path: "/ArriveOnTime", component: ArriveOnTime },
    { path: "/VipStatement", component: VipStatement },
    { path: "/VipIssue", component: VipIssue },
    { path: "/Bag", component: Bag },
    { path: "/ActiveRule", component: ActiveRule },
    { path: "/SupplementRule", component: SupplementRule },
    { path: "/PreferentialStatement", component: PreferentialStatement },
    { path: "/ResponsibleStatement", component: ResponsibleStatement },
    { path: "/Voucher", component: Voucher },
    { path: "/Cooperate", component: Cooperate },
    { path: "/PayIssue", component: PayIssue },
    { path: "/SuperSeller", component: SuperSeller },
    { path: "/AnonymousBy", component: AnonymousBy },
    { path: "/ActiveIssue", component: ActiveIssue },
    { path: "/BagStatement", component: BagStatement },
    { path: "/ExchangeBag", component: ExchangeBag },
    { path: "/Recommend", component: Recommend },
    { path: "/BusinessVouchers", component: BusinessVouchers },
    { path: "/BusinessVouchersStatement", component: BusinessVouchersStatement },
    { path: "/HistoryBag", component: HistoryBag },
    { path: "/RedBag", component: RedBag },
    { path: "/AccountInformation", name: "AccountInformation", component: AccountInformation },
    { path: "/ChangeUserName", component: ChangeUserName },
    { path: "/Address", component: Address },
    { path: "/AddAddress", component: AddAddress },
    { path: "/SelectAddress", component: SelectAddress },
    { path: "/ResetPassword", component: ResetPassword },
    // -------------
    {
      path: "*",
      redirect: "/"
    }
  ]
})
