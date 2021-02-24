import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults } from '@pnotify/core';
import { info, error } from '@pnotify/core';

defaults.icons = 'material';
defaults.styling = 'material';

// info({
//   text: 'Please try another query',
//   delay: 2000,
//   icon: true,
// });

// error({
//   text: 'Something went wrong. Please, try later.',
//   delay: 2000,
//   icon: true,
// });

export default {
  info,
  error,
};
