import moment from 'moment';

export default () => moment.locale('uz-latn', {
  months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avgust_sentabr_oktabr_noyabr_dekabr'.split('_'),
  monthsShort: 'yanv._fevr._mart_apr._may_iyun_iyul_avg._sent._okt._noy._dek.'.split('_'),
  monthsParseExact: true,
  weekdays: 'dushanba_seshanba_chorshanba_payshanba_juma_shanba_yakshanba'.split('_'),
  weekdaysShort: 'du._se._chor._pay._ju._shan._yak.'.split('_'),
  weekdaysMin: 'du_se_cho_pa_ju_sha_ya'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D-MMMM YYYY',
    LLL: 'D-MMMM HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
});
