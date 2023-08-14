// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Berhan Bank',
    items: [
      { title: 'General Analytics', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      // { title: 'Berhan Bank', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.analytics },
      { title: 'Bole Branch Analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      { title: 'Jemo Branch Analytics', path: PATH_DASHBOARD.general.banking, icon: ICONS.analytics },
      { title: 'Mexico Branch Analytics', path: PATH_DASHBOARD.general.booking, icon: ICONS.analytics },
      
      { title: '18 Mazoria Analytics', path: PATH_DASHBOARD.general._18_mazoria_branch, icon: ICONS.analytics },
      { title: 'Abuware Analytics', path: PATH_DASHBOARD.general.abuware_branch, icon: ICONS.analytics },
      { title: 'Africa Hibret Analytics', path: PATH_DASHBOARD.general.africa_hibret_branch, icon: ICONS.analytics },
      { title: 'Arada Beranch Analytics', path: PATH_DASHBOARD.general.arada_beranch_branch, icon: ICONS.analytics },
      { title: 'Ertu Lebu Analytics', path: PATH_DASHBOARD.general.ertu_lebu_branch, icon: ICONS.analytics },
      { title: 'Figa Analytics', path: PATH_DASHBOARD.general.figa_branch, icon: ICONS.analytics },
      { title: 'Gofa Camp Analytics', path: PATH_DASHBOARD.general.gofa_camp_branch, icon: ICONS.analytics },
      { title: 'Jacros Analytics', path: PATH_DASHBOARD.general.jacros_branch, icon: ICONS.analytics },
      { title: 'Kara Kore Analytics', path: PATH_DASHBOARD.general.kara_kore_branch, icon: ICONS.analytics },
      { title: 'Lafto Mebrat Analytics', path: PATH_DASHBOARD.general.lafto_mebrat_branch, icon: ICONS.analytics },
      { title: 'Meri Loke Analytics', path: PATH_DASHBOARD.general.meri_loke_branch, icon: ICONS.analytics },
      { title: 'Saris Abo Analytics', path: PATH_DASHBOARD.general.saris_abo_branch, icon: ICONS.analytics },
      { title: 'Saris Analytics', path: PATH_DASHBOARD.general.saris_branch, icon: ICONS.analytics },
      { title: 'Summit Analytics', path: PATH_DASHBOARD.general.summit_branch, icon: ICONS.analytics },
      { title: 'Washington Adebabay Analytics', path: PATH_DASHBOARD.general.washington_adebabay_branch, icon: ICONS.analytics },
      { title: 'Zenebework Tabotmaderia Analytics', path: PATH_DASHBOARD.general.zenebework_tabotmaderia_branch, icon: ICONS.analytics },

    ],
  },

  // // MANAGEMENT
  // // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     // USER
  //     {
  //       title: 'user',
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'profile', path: PATH_DASHBOARD.user.profile },
  //         { title: 'cards', path: PATH_DASHBOARD.user.cards },
  //         { title: 'list', path: PATH_DASHBOARD.user.list },
  //         { title: 'create', path: PATH_DASHBOARD.user.new },
  //         { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
  //         { title: 'account', path: PATH_DASHBOARD.user.account },
  //       ],
  //     },

  //     // E-COMMERCE
  //     {
  //       title: 'e-commerce',
  //       path: PATH_DASHBOARD.eCommerce.root,
  //       icon: ICONS.cart,
  //       children: [
  //         { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
  //         { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
  //         { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
  //         { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
  //         { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
  //         { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
  //       ],
  //     },

  //     // INVOICE
  //     {
  //       title: 'invoice',
  //       path: PATH_DASHBOARD.invoice.root,
  //       icon: ICONS.invoice,
  //       children: [
  //         { title: 'list', path: PATH_DASHBOARD.invoice.list },
  //         { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
  //         { title: 'create', path: PATH_DASHBOARD.invoice.new },
  //         { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
  //       ],
  //     },

  //     // BLOG
  //     {
  //       title: 'blog',
  //       path: PATH_DASHBOARD.blog.root,
  //       icon: ICONS.blog,
  //       children: [
  //         { title: 'posts', path: PATH_DASHBOARD.blog.posts },
  //         { title: 'post', path: PATH_DASHBOARD.blog.demoView },
  //         { title: 'create', path: PATH_DASHBOARD.blog.new },
  //       ],
  //     },
  //   ],
  // },

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'mail',
  //       path: PATH_DASHBOARD.mail.root,
  //       icon: ICONS.mail,
  //       info: (
  //         <Label variant="outlined" color="error">
  //           +32
  //         </Label>
  //       ),
  //     },
  //     { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
  //     { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
  //     { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
  //   ],
  // },
];

export default navConfig;
