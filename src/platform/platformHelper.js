import _ from 'lodash';
import { platformService } from './platformService';
import { numberFormat } from './numberFormat';

export class PlatformHelper {
    static AccountCurrency ='USD';
    static instrumentsCurrency = {'AMAZON': 'USD',
        'BOEING': 'USD',
        'EXXONMOBIL': 'USD',
        'FACEBOOK': 'USD',
        'GOOGLE': 'USD',
        'MICROSOFT': 'USD',
        'FERRARI': 'USD',
        'MASTERCARD': 'USD',
        'VISA': 'USD',
        'COCACOLA': 'USD',
        'EBAY': 'USD',
        'NIKE': 'USD',
        'YANDEX': 'USD',
        'CHEVRON': 'USD',
        'SANTANDER': 'USD',
        'IBM': 'USD',
        'GOLDMANSACH': 'USD',
        'JPMORGANCH': 'USD',
        'ADOBE': 'USD',
        'CITIGROUP': 'USD',
        'DEUTBANK': 'USD',
        'FORD': 'USD',
        'GENELECTRIC': 'USD',
        'GOPRO': 'USD',
        'HARLEYDAVID': 'USD',
        'INTEL': 'USD',
        'MANCHESTERU': 'USD',
        'TESLA': 'USD',
        'WALMART': 'USD',
        'RENAULT': 'EUR',
        'AUDI': 'EUR',
        'BMW': 'EUR',
        'IBERDROLA': 'EUR',
        'VOLKSWAGEN': 'EUR',
        'AMADEUS': 'EUR',
        'DISENO': 'EUR',
        'BILBAOBANK': 'EUR',
        'ADIDAS': 'EUR',
        'BARCLAYS': 'EUR',
        'BHPBILLITON': 'EUR',
        'BNPPARIBAS': 'EUR',
        'RIOTINTO': 'EUR',
        'SIEMENS': 'EUR',
        'GAZPROM': 'RUB',
        'ROSNEFT': 'RUB',
        'SBERBANK': 'RUB',
        'RIYADBANK': 'USD',
        'ALRAJHIBANK': 'USD',
        'HOLLANDBANK': 'USD',
        'ALJAZIRBANK': 'USD',
        'NATCOMBANK': 'USD',
        'SAUDBRIBANK': 'USD',
        'SAUDIINBANK': 'USD',
        'PETRORABIGH': 'USD',
        'DARALARKAN': 'USD',
        'BANKSAFRANS': 'USD',
        'ALINMA': 'USD',
        'ALUJAIN': 'USD',
        'ARABBANK': 'USD',
        'KINGDOM': 'USD',
        'NATLGASIND': 'USD',
        'SAHARA': 'USD',
        'SAMBAGROUP': 'USD',
        'SAUDIBASIC': 'USD',
        'SAUDELECTRO': 'USD',
        'SAUDIKAYAN': 'USD',
        'BANKOFCHINA': 'CNH',
        'CHINARAIL': 'CNH',
        'ICBANKCHINA': 'CNH',
        'PACIFICSEC': 'CNH',
        'PETROCHINA': 'CNH',
        'BILBAOXETRA': 'CNH',
        'AEX25': 'EUR',
        'COPUSD': 'USD',
        'MICEX': 'RUB',
        'SAUDIBRIBANK': 'USD',
        'OILUSD': 'USD',
        'APPLE': 'USD',
        'USDINDEX': 'USD',
        'FTSEA50CHINA': 'USD',
        'CSIUSD': 'USD',
        'SMICHF': 'CHF',
        'SAUDELICRTO': 'USD',
        'SAUDIINVBANK': 'USD',
        'CNINARAIL': 'CNH',
        'HARLEYDAVIDSON': 'USD',
        'NATCOMBNK': 'USD',
        'DEUTSCHEBANK': 'USD',
        'BITCOIN': 'USD',
        'BITCOINCASH': 'USD',
        'ZCASH': 'USD'
    };
    static session = [
        {ID: 1, Name: 'AUDCAD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 2, Name: 'AUDCHF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 3, Name: 'AUDJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 4, Name: 'AUDNZD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 5, Name: 'AUDUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 6, Name: 'CADCHF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 7, Name: 'CADJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 8, Name: 'CHFJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 9, Name: 'EURAUD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 10, Name: 'EURCAD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 11, Name: 'EURCHF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 12, Name: 'EURDKK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 13, Name: 'EURGBP', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 15, Name: 'EURJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 16, Name: 'EURMXN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 17, Name: 'EURNOK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 18, Name: 'EURNZD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 19, Name: 'EURPLN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 20, Name: 'EURRUB', OpenDay: 1, CloseDay: 5, WeeklyFrom: '07:00:00.00', WeeklyTo: '16:00:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '16:00:00.00'}]},
        {ID: 21, Name: 'EURSEK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 21, Name: 'EURTRY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 23, Name: 'EURUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 24, Name: 'EURZAR', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 25, Name: 'GBPAUD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 26, Name: 'GBPCAD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 27, Name: 'GBPCHF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 28, Name: 'GBPJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 29, Name: 'GBPNZD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 30, Name: 'GBPUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 31, Name: 'GBPZAR', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 32, Name: 'NOKJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 34, Name: 'NZDCAD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 35, Name: 'NZDCHF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 36, Name: 'NZDJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 37, Name: 'NZDUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 38, Name: 'SGDJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 39, Name: 'USDCAD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 40, Name: 'USDCHF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 43, Name: 'USDDKK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 44, Name: 'USDHKD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 45, Name: 'USDHUF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 47, Name: 'USDJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 49, Name: 'USDMXN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 50, Name: 'USDNOK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 51, Name: 'USDPLN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 52, Name: 'USDRUB', OpenDay: 1, CloseDay: 5, WeeklyFrom: '07:00:00.00', WeeklyTo: '16:00:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '16:00:00.00'}]},
        {ID: 53, Name: 'USDSEK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 54, Name: 'USDSGD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 56, Name: 'USDTRY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 58, Name: 'USDZAR', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 59, Name: 'ZARJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 65, Name: 'XAGUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 66, Name: 'XAUUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 67, Name: 'XPDUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 68, Name: 'XPTUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 71, Name: 'CACEUR', OpenDay: 1, CloseDay: 5, WeeklyFrom: '06:00:00.00', WeeklyTo: '19:45:00.00', Dailies: [{DailyFrom: '06:00:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 72, Name: 'DAXEUR', OpenDay: 1, CloseDay: 5, WeeklyFrom: '06:00:00.00', WeeklyTo: '19:45:00.00', Dailies: [{DailyFrom: '06:00:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 73, Name: 'DOWUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '20:15:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '20:15:00.00'}, {DailyFrom: '20:30:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 74, Name: 'FTSGBP', OpenDay: 1, CloseDay: 5, WeeklyFrom: '06:00:00.00', WeeklyTo: '19:45:00.00', Dailies: [{DailyFrom: '06:00:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 75, Name: 'HSIHKD', OpenDay: 1, CloseDay: 5, WeeklyFrom: '01:15:00.00', WeeklyTo: '08:15:00.00', Dailies: [{DailyFrom: '01:15:00.00', DailyTo: '04:00:00.00'}, {DailyFrom: '05:00:00.00', DailyTo: '08:15:00.00'}]},
        {ID: 76, Name: 'IBXEUR', OpenDay: 1, CloseDay: 5, WeeklyFrom: '06:00:00.00', WeeklyTo: '19:45:00.00', Dailies: [{DailyFrom: '06:00:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 79, Name: 'NKYJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '23:00:00.00', WeeklyTo: '20:15:00.00', Dailies: [{DailyFrom: '23:00:00.00', DailyTo: '20:15:00.00'}]},
        {ID: 80, Name: 'NSQUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '20:15:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '20:15:00.00'}, {DailyFrom: '20:30:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 82, Name: 'SP5USD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '20:15:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '20:15:00.00'}, {DailyFrom: '20:30:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 83, Name: 'SPIAUD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:50:00.00', WeeklyTo: '20:00:00.00', Dailies: [{DailyFrom: '21:50:00.00', DailyTo: '05:30:00.00'}, {DailyFrom: '06:10:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 109, Name: 'USOUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 110, Name: 'CHFNOK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 111, Name: 'GBPDKK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 112, Name: 'GBPNOK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 113, Name: 'UKOUSD', OpenDay: 1, CloseDay: 5, WeeklyFrom: '00:00:00.00', WeeklyTo: '20:45:00.00', Dailies: [{DailyFrom: '00:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 114, Name: 'CHFDKK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 115, Name: 'GBPTRY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 116, Name: 'AUDSGD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 117, Name: 'TRYJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 118, Name: 'NZDHUF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 119, Name: 'HKDJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 120, Name: 'CHFSEK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 121, Name: 'EURSGD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 121, Name: 'AUDNOK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 123, Name: 'AUDSEK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 124, Name: 'CHFPLN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 125, Name: 'CHFHUF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 126, Name: 'USDCZK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 127, Name: 'SEKJPY', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 128, Name: 'NZDSGD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 129, Name: 'EURCZK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 130, Name: 'GBPSGD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 131, Name: 'GBPSEK', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 132, Name: 'GBPPLN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 133, Name: 'AUDHUF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 134, Name: 'EURHKD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 135, Name: 'GBPHUF', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 136, Name: 'XNGUSD', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: [{DailyFrom: '21:00:00.00', DailyTo: '21:00:00.00'}]},
        {ID: 137, Name: 'E50EUR', OpenDay: 1, CloseDay: 5, WeeklyFrom: '06:00:00.00', WeeklyTo: '19:45:00.00', Dailies: [{DailyFrom: '06:00:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 138, Name: 'PetroRabigh', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 139, Name: 'Citigroup', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 140, Name: 'ManchesterU', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 141, Name: 'ExxonMobil', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 142, Name: 'NIKE', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 143, Name: 'Santander', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 144, Name: 'COCACOLA', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 145, Name: 'JPMorganCh', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 146, Name: 'MICROSOFT', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 147, Name: 'Chevron', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 148, Name: 'BankSaFrans', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 149, Name: 'Facebook', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 150, Name: 'ArabBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 151, Name: 'BHPBilliton', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 152, Name: 'BOEING', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 153, Name: 'SaudiBriBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 154, Name: 'GenElectric', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 155, Name: 'FERRARI', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 156, Name: 'CninaRail', OpenDay: 1, CloseDay: 5, WeeklyFrom: '01:35:00.00', WeeklyTo: '06:55:00.00', Dailies: [{DailyFrom: '01:30:00.00', DailyTo: '03:30:00.00'}, {DailyFrom: '05:00:00.00', DailyTo: '07:00:00.00'}]},
        {ID: 157, Name: 'Iberdrola', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 158, Name: 'PacificSec', OpenDay: 1, CloseDay: 5, WeeklyFrom: '01:35:00.00', WeeklyTo: '06:55:00.00', Dailies: [{DailyFrom: '01:30:00.00', DailyTo: '03:30:00.00'}, {DailyFrom: '05:00:00.00', DailyTo: '07:00:00.00'}]},
        {ID: 159, Name: 'Sberbank', OpenDay: 1, CloseDay: 5, WeeklyFrom: '07:05:00.00', WeeklyTo: '15:35:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '15:40:00.00'}]},
        {ID: 160, Name: 'RiyadBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 161, Name: 'AMAZON', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 162, Name: 'GoldmanSach', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 163, Name: 'Gazprom', OpenDay: 1, CloseDay: 5, WeeklyFrom: '07:05:00.00', WeeklyTo: '15:35:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '15:40:00.00'}]},
        {ID: 164, Name: 'GOOGLE', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 165, Name: 'DeutscheBank', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 166, Name: 'SaudElicrto', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 167, Name: 'Diseno', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 168, Name: 'ICBankChina', OpenDay: 1, CloseDay: 5, WeeklyFrom: '01:35:00.00', WeeklyTo: '06:55:00.00', Dailies: [{DailyFrom: '01:30:00.00', DailyTo: '03:30:00.00'}, {DailyFrom: '05:00:00.00', DailyTo: '07:00:00.00'}]},
        {ID: 169, Name: 'SaudiInvBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 170, Name: 'BMW', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 171, Name: 'Tesla', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 172, Name: 'Intel', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 173, Name: 'WalMart', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 174, Name: 'Renault', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 175, Name: 'Amadeus', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 176, Name: 'HarleyDavidson', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 177, Name: 'HollandBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 178, Name: 'Alinma', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 179, Name: 'Rosneft', OpenDay: 1, CloseDay: 5, WeeklyFrom: '07:05:00.00', WeeklyTo: '15:35:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '15:40:00.00'}]},
        {ID: 180, Name: 'AlRajhiBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 181, Name: 'Mastercard', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 182, Name: 'VolksWagen', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 183, Name: 'SaudiBasic', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 184, Name: 'Barclays', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 185, Name: 'Kingdom', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 186, Name: 'AlJazirBank', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 187, Name: 'NatlGasInd', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 188, Name: 'Yandex', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 189, Name: 'RioTinto', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 190, Name: 'Adidas', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 191, Name: 'Sahara', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 192, Name: 'BilbaoBank', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 193, Name: 'SambaGroup', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 194, Name: 'GoPro', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 195, Name: 'VISA', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 196, Name: 'BNPParibas', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 197, Name: 'Alujain', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 198, Name: 'EBAY', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 199, Name: 'Adobe', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 200, Name: 'IBM', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 201, Name: 'PetroChina', OpenDay: 1, CloseDay: 5, WeeklyFrom: '01:35:00.00', WeeklyTo: '06:55:00.00', Dailies: [{DailyFrom: '01:30:00.00', DailyTo: '03:30:00.00'}, {DailyFrom: '05:00:00.00', DailyTo: '07:00:00.00'}]},
        {ID: 202, Name: 'Ford', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 203, Name: 'SaudiKayan', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 204, Name: 'BankofChina', OpenDay: 1, CloseDay: 5, WeeklyFrom: '01:35:00.00', WeeklyTo: '06:55:00.00', Dailies: [{DailyFrom: '01:30:00.00', DailyTo: '03:30:00.00'}, {DailyFrom: '05:00:00.00', DailyTo: '07:00:00.00'}]},
        {ID: 205, Name: 'Siemens', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]},
        {ID: 206, Name: 'APPLE', OpenDay: 1, CloseDay: 5, WeeklyFrom: '13:35:00.00', WeeklyTo: '19:55:00.00', Dailies: [{DailyFrom: '13:30:00.00', DailyTo: '20:00:00.00'}]},
        {ID: 207, Name: 'NatComBnk', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 208, Name: 'DarAlArkan', OpenDay: 0, CloseDay: 4, WeeklyFrom: '07:05:00.00', WeeklyTo: '11:55:00.00', Dailies: [{DailyFrom: '07:00:00.00', DailyTo: '12:00:00.00'}]},
        {ID: 209, Name: 'BITCOIN', OpenDay: 0, CloseDay: 5, WeeklyFrom: '21:00:00.00', WeeklyTo: '21:00:00.00', Dailies: []},
        {ID: 210, Name: 'AUDI', OpenDay: 1, CloseDay: 5, WeeklyFrom: '08:05:00.00', WeeklyTo: '16:25:00.00', Dailies: [{DailyFrom: '08:00:00.00', DailyTo: '16:30:00.00'}]}
    ];
    static isSession (quoteSecurity) {
        if (!quoteSecurity) return false;
        quoteSecurity = quoteSecurity.toUpperCase();
        let sessionRate = null;
        let state = false;
        for (let index in this.session) {
            if (quoteSecurity.toLocaleLowerCase() === this.session[index].Name.toLocaleLowerCase()) {
                sessionRate = this.session[index];
                break;
            }
        }
        if (sessionRate) {
            const localTime = new Date(Date.now());
            const day = localTime.getUTCDay().toString();
            const time = localTime.toISOString().slice(11, 22);
            if (day < sessionRate.OpenDay || day > sessionRate.CloseDay) state = false;
            else if (day === sessionRate.OpenDay && time < sessionRate.WeeklyFrom) state = false;
            else if (day === sessionRate.CloseDay && time > sessionRate.WeeklyTo) state = false;
            else {
                if (sessionRate.Dailies.length > 0) {
                    for (let daily in sessionRate.Dailies) {
                        if (sessionRate.Dailies[daily].DailyFrom < sessionRate.Dailies[daily].DailyTo && time >= sessionRate.Dailies[daily].DailyFrom && time <= sessionRate.Dailies[daily].DailyTo) {
                            state = true;
                            break;
                        } else if (sessionRate.Dailies[daily].DailyFrom >= sessionRate.Dailies[daily].DailyTo && (time >= sessionRate.Dailies[daily].DailyFrom || time <= sessionRate.Dailies[daily].DailyTo)) {
                            state = true;
                            break;
                        } else { state = false }
                    }
                } else {
                    state = true;
                }
            }
        } else return false;
        return state;
    }
    static getMargin (quote, quoteSettings, amount) {
        if (typeof (amount) === 'string') {
            amount = +amount.replace(/,/g, '');
        }
        const instrCurrency = this.instrumentsCurrency[quote['security'].toUpperCase()];
        const values = (() => {
            const basicCurrency = !instrCurrency ? quote['security'].substring(0, 3) : quote['security'];
            const secondaryCurrency = !instrCurrency ? quote['security'].substring(3, 6) : instrCurrency;
            let value = {};
            let arrRates = platformService.platform.quotes;
            let mid = null;
            let midPrice = null;
            let substrFirs = null;
            let substrSecond = null;
            let isSymbolTrue = false;
            let isCrossCurrTrue = false;
            if (secondaryCurrency === this.AccountCurrency || basicCurrency === this.AccountCurrency) {
                _.map(arrRates, (item) => {
                    if (quote['security'] === item.security) {
                        value.askPrice = quote.askPrice;
                        value.bidPrice = quote.bidPrice;
                        return false;
                    }
                });
            } else {
                _.map(arrRates, (item) => {
                    if (quote['security'] === item.security) {
                        value.askPrice = quote.askPrice;
                        value.bidPrice = quote.bidPrice;
                        midPrice = (parseFloat(value.askPrice) + parseFloat(value.bidPrice)) / 2;
                        isSymbolTrue = true;
                        _.map(arrRates, (item) => {
                            substrFirs = item.security.substring(0, 3);
                            substrSecond = item.security.substring(3, 6);
                            if (substrFirs === basicCurrency && substrSecond === this.AccountCurrency) {
                                value.midPrice = (parseFloat(item.askPrice) + parseFloat(item.bidPrice)) / 2;
                                value.isUSDBasic = false;
                                isCrossCurrTrue = true;
                            } else if (substrSecond === basicCurrency && substrFirs === this.AccountCurrency) {
                                value.midPrice = (parseFloat(item.askPrice) + parseFloat(item.bidPrice)) / 2;
                                value.isUSDBasic = true;
                                isCrossCurrTrue = true;
                            } else if (substrFirs === secondaryCurrency && substrSecond === this.AccountCurrency) {
                                mid = (parseFloat(item.askPrice) + parseFloat(item.bidPrice)) / 2;
                                value.midPrice = midPrice * mid;
                                value.isUSDBasic = false;
                                isCrossCurrTrue = true;
                            } else if (substrSecond === secondaryCurrency && substrFirs === this.AccountCurrency) {
                                mid = (parseFloat(item.askPrice) + parseFloat(item.bidPrice)) / 2;
                                value.midPrice = midPrice / mid;
                                value.isUSDBasic = false;
                                isCrossCurrTrue = true;
                            }
                            if (isSymbolTrue && isCrossCurrTrue) {
                                if (isNaN(value.midPrice) && !value.isUSDBasic) {
                                    value.midPrice = midPrice * mid;
                                } else if (isNaN(value.midPrice) && value.isUSDBasic) {
                                    value.midPrice = midPrice / mid;
                                }
                                return false;
                            }
                        });
                    }
                });
            }
            return value;
        })();
        const askPrice = parseFloat(values.askPrice);
        const bidPrice = parseFloat(values.bidPrice);
        let margin = (isNaN(askPrice) || isNaN(bidPrice)) ? '---' : (() => {
            let margin = 0;
            const midPrice = (askPrice + bidPrice) / 2;
            if (quote['security'].substring(3, 6) === this.AccountCurrency || instrCurrency === this.AccountCurrency) {
                margin = (amount / quoteSettings.leverage) * midPrice;
            } else if (quote['security'].substring(0, 3) === this.AccountCurrency) {
                margin = (amount / quoteSettings.leverage);
            } else {
                if (values.isUSDBasic) {
                    margin = (amount / quoteSettings.leverage) / values.midPrice;
                } else if (!values.isUSDBasic) {
                    margin = (amount / quoteSettings.leverage) * values.midPrice;
                }
            }
            return margin;
        })().toFixed(0);
        if (isNaN(margin) || (!margin && margin !== 0)) {
            margin = '---';
        }
        return margin;
    }
    static getCrossUSD (quote) {
        let crossUSD = 0;
        const AccountCurrency = 'USD';
        let instrCurrency = this.instrumentsCurrency[quote['security'].toUpperCase()];
        let curr1 = !instrCurrency ? quote['security'].substring(0, 3) : instrCurrency;
        let curr2 = !instrCurrency ? quote['security'].substring(3, 6) : instrCurrency;
        const arrRates = platformService.platform.quotes;
        if (curr2 && curr2 === AccountCurrency) {
            crossUSD = 1;
        } else if (curr1 && curr1 === AccountCurrency) {
            crossUSD = (parseFloat(quote.bidPrice) + parseFloat(quote.askPrice)) / 2;
        } else {
            if (arrRates[AccountCurrency + curr2]) {
                const tempQuote = arrRates[AccountCurrency + curr2];
                crossUSD = (parseFloat(tempQuote.askPrice) + parseFloat(tempQuote.bidPrice)) / 2;
            } else if (arrRates[curr2 + AccountCurrency]) {
                const tempQuote = arrRates[curr2 + AccountCurrency];
                crossUSD = 1 / ((parseFloat(tempQuote.askPrice) + parseFloat(tempQuote.bidPrice)) / 2);
            }
        }
        return crossUSD;
    }
    static getPostPnl (quote, postPl, recommend) {
        let pnl = 0;
        if (quote && quote.bidPrice && quote.askPrice) {
            const crossUSD = this.getCrossUSD(quote);
            if (postPl && postPl.length > 0) {
                for (let i in postPl) {
                    if (postPl[i].action && postPl[i].action === 'Sell' && postPl[i].action === recommend) {
                        const currentPrice = parseFloat(quote.askPrice);
                        pnl += -(currentPrice - postPl[i].bid_price) * postPl[i].amount / parseFloat(crossUSD); // Calculate PL from open deal price to current moment
                        // pnl += -(currentPrice - postPrice) * postPl[i].amount / parseFloat(crossUSD); // Calculate PL from the create post price to current moment
                    }
                    if (postPl[i].action && postPl[i].action === 'Buy' && postPl[i].action === recommend) {
                        const currentPrice = parseFloat(quote.bidPrice);
                        pnl += (currentPrice - postPl[i].ask_price) * postPl[i].amount / parseFloat(crossUSD); // Calculate PL from open deal price to current moment
                        // pnl += (currentPrice - postPrice) * postPl[i].amount / parseFloat(crossUSD); // Calculate PL from the create post price to current moment
                    }
                }
            }
        }
        return pnl;
    }
    static getPnl (quote, deal) {
        let pnl = 0;
        if (quote && quote.bidPrice && quote.askPrice) {
            const crossUSD = this.getCrossUSD(quote);
            const currentPrice = parseFloat(deal['openPrice']);
            if (deal['side'] && (deal['side'] === 'LONG' || deal['side'] === 'BUY')) {
                pnl = -(currentPrice - quote.bidPrice) * (deal['amount']) / parseFloat(crossUSD);
            }
            if (deal['side'] && (deal['side'] === 'SHORT' || deal['side'] === 'SELL')) {
                pnl = (currentPrice - quote.askPrice) * (deal['amount']) / parseFloat(crossUSD);
            }
        }
        return pnl;
    }
    static getPnlRange (quote, deal) {
        let pnl = 0;
        if (quote && quote.bidPrice && quote.askPrice) {
            const crossUSD = this.getCrossUSD(quote);
            const amount = deal['amount'];
            const openPrice = parseFloat(deal['openPrice']);
            const currentPrice = parseFloat(deal['currentValue']);
            if (deal['side'] && (deal['side'] === 'SHORT' || deal['side'] === 'SELL')) {
                if (crossUSD > 0) {
                    pnl = -(currentPrice - openPrice) * amount / parseFloat(crossUSD);
                } else {
                    pnl = -(currentPrice - openPrice) * amount * parseFloat(-crossUSD);
                }
            }
            if (deal['side'] && (deal['side'] === 'LONG' || deal['side'] === 'BUY')) {
                if (crossUSD > 0) {
                    pnl = (currentPrice - openPrice) * amount / parseFloat(crossUSD);
                } else {
                    pnl = (currentPrice - openPrice) * amount * parseFloat(-crossUSD);
                }
            }
        }
        return pnl;
    }
    static getLongShort (postPl) {
        const max = 100;
        const min = 0;
        if (postPl && postPl.length !== 0) {
            let allBuy = 0;
            let allSell = 0;
            postPl.forEach((element) => {
                if (element.action === 'Buy') {
                    allBuy += element.ask_price * element.amount;
                } else if (element.action === 'Sell') {
                    allSell += element.bid_price * element.amount;
                }
            });
            allSell = Math.round(Math.abs(allSell) * 100) / 100;
            allBuy = Math.round(Math.abs(allBuy) * 100) / 100;
            const long = Math.round((allBuy / (allBuy + allSell)) * 100);
            const short = Math.round((allSell / (allSell + allBuy)) * 100);
            const res = ((min + (max - min) / 2) + (long - short) / 100 * (max - min) / 2);
            return parseFloat(res).toFixed(0);
        }
    }
    static getDIndex (quote) {
        let dIndex = 1;
        if (platformService.platform.userSettings.securitySettings === undefined || !platformService.platform.userSettings.securitySettings[quote['security']]) {
            return dIndex;
        }
        const tick = platformService.platform.userSettings.securitySettings[quote['security']].tickSize;
        const rounding = platformService.platform.userSettings.securitySettings[quote['security']].priceRounding / 1000000;
        const market = platformService.platform.userSettings.securitySettings[quote['security']].market;
        if (market !== 'Index') {
            if (tick > 1000) {
                if (rounding === 1) {
                    dIndex = 2;
                } else {
                    dIndex = 3;
                }
            } else {
                dIndex = 5;
            }
        }
        return dIndex;
    }
    static getPriceDirection (quote, deal) {
        let dealParams = {};
        if (deal['side'] && (deal['side'] === 'SHORT' || deal['side'] === 'SELL')) {
            dealParams.direction = 'SHORT';
            dealParams.price = quote['askPrice'];
        } else {
            dealParams.direction = 'LONG';
            dealParams.price = quote['bidPrice'];
        }
        return dealParams;
    }
    static getFlFix (dIndex) {
        const factor = {
            '3': 0.001,
            '5': 0.00001
        };
        return factor[dIndex] ? factor[dIndex] : 0;
    }
    static getPriceTakeProfitRange (quote, deal) {
        const maxPercent = platformService.platform.userSettings.takeProfitMaxPercent;
        const minPercent = platformService.platform.userSettings.takeProfitMinPercent;
        const dIndex = this.getDIndex(quote);
        const flFix = this.getFlFix(dIndex);
        const dealParams = this.getPriceDirection(quote, deal);
        let rangesPrice = {};
        let takeProfitMin = 0;
        let takeProfitMax = 0;
        switch (dealParams.direction) {
        case 'SHORT':
            takeProfitMin = (dealParams.price * (100 - (maxPercent / 1000000)) / 100) + flFix;
            takeProfitMax = (dealParams.price * (100 - (minPercent / 1000000)) / 100) - flFix;
            break;
        case 'LONG':
            takeProfitMin = (dealParams.price * (100 + (minPercent / 1000000)) / 100) + flFix;
            takeProfitMax = (dealParams.price * (100 + (maxPercent / 1000000)) / 100) - flFix;
            break;
        }
        rangesPrice['min'] = takeProfitMin.toFixed(dIndex);
        rangesPrice['max'] = takeProfitMax.toFixed(dIndex);
        return rangesPrice;
    }
    static getPriceStopLossRange (quote, deal) {
        const maxPercent = platformService.platform.userSettings.stopLossMaxPercent;
        const minPercent = platformService.platform.userSettings.stopLossMinPercent;
        const dIndex = this.getDIndex(quote);
        const flFix = this.getFlFix(dIndex);
        const dealParams = this.getPriceDirection(quote, deal);
        let rangesPrice = {};
        let stopLossMin = 0;
        let stopLossMax = 0;
        switch (dealParams.direction) {
        case 'SHORT':
            stopLossMin = (dealParams.price * (100 + (minPercent / 1000000)) / 100) + flFix;
            stopLossMax = (dealParams.price * (100 + (maxPercent / 1000000)) / 100) - flFix;
            break;
        case 'LONG':
            stopLossMin = (dealParams.price * (100 - (maxPercent / 1000000)) / 100) + flFix;
            stopLossMax = (dealParams.price * (100 - (minPercent / 1000000)) / 100) - flFix;
            break;
        }
        rangesPrice['min'] = stopLossMin.toFixed(dIndex);
        rangesPrice['max'] = stopLossMax.toFixed(dIndex);
        return rangesPrice;
    }
    static getAmountStopLossRange (quote, deal) {
        const minPercent = platformService.platform.userSettings.stopLossMinPercent;
        const maxPercent = platformService.platform.userSettings.stopLossMaxPercent;
        const dealParams = this.getPriceDirection(quote, deal);
        const pnl = this.getPnl(quote, deal);
        let stopLossMin = 0;
        let stopLossMax = 0;
        let rangesPrice = {};
        let tempDealForMin = {};
        let tempDealForMax = {};
        _.map(deal, (item, key) => {
            tempDealForMin[key] = deal[key];
            tempDealForMax[key] = deal[key];
        });
        switch (dealParams.direction) {
        case 'SHORT':
            stopLossMin = (dealParams.price * (100 + (minPercent / 1000000)) / 100);
            stopLossMax = (dealParams.price * (100 + (maxPercent / 1000000)) / 100);
            break;
        case 'LONG':
            stopLossMin = (dealParams.price * (100 - (minPercent / 1000000)) / 100);
            stopLossMax = (dealParams.price * (100 - (maxPercent / 1000000)) / 100);
            break;
        }
        tempDealForMin['currentValue'] = stopLossMin;
        tempDealForMax['currentValue'] = stopLossMax;
        let sMin = this.getPnlRange(quote, tempDealForMin);
        let sMax = this.getPnlRange(quote, tempDealForMax);
        if (pnl < 0) {
            sMin = Math.abs(sMin);
            sMax = Math.abs(sMax);
        } else {
            if (sMin > 0 && sMax > 0) {
                sMin = 0;
                sMax = 0;
            } else {
                sMin = Math.abs(sMin);
                sMax = Math.abs(sMax);
            }
        }
        rangesPrice['min'] = sMin.toFixed(2);
        rangesPrice['max'] = sMax.toFixed(2);
        return rangesPrice;
    }
    static getAmountTakeProfitRange (quote, deal) {
        const minPercent = platformService.platform.userSettings.stopLossMinPercent;
        const maxPercent = platformService.platform.userSettings.stopLossMaxPercent;
        const dealParams = this.getPriceDirection(quote, deal);
        const pnl = this.getPnl(quote, deal);
        let takeProfitMin = 0;
        let takeProfitMax = 0;
        let rangesPrice = {};
        let tempDealForMin = {};
        let tempDealForMax = {};
        _.map(deal, (item, key) => {
            tempDealForMin[key] = deal[key];
            tempDealForMax[key] = deal[key];
        });
        switch (dealParams.direction) {
        case 'SHORT':
            takeProfitMin = (dealParams.price * (100 - (minPercent / 1000000)) / 100);
            takeProfitMax = (dealParams.price * (100 - (maxPercent / 1000000)) / 100);
            break;
        case 'LONG':
            takeProfitMin = (dealParams.price * (100 + (minPercent / 1000000)) / 100);
            takeProfitMax = (dealParams.price * (100 + (maxPercent / 1000000)) / 100);
            break;
        }
        tempDealForMin['currentValue'] = takeProfitMin;
        tempDealForMax['currentValue'] = takeProfitMax;
        let sMin = this.getPnlRange(quote, tempDealForMin);
        let sMax = this.getPnlRange(quote, tempDealForMax);
        if (pnl < 0) {
            if (sMin < 0 && sMax < 0) {
                sMin = 0;
                sMax = 0;
            } else {
                sMin = sMin < 0 ? 0 : sMin;
                sMax = Math.abs(sMax);
            }
        } else {
            sMin = Math.abs(sMin);
            sMax = Math.abs(sMax);
        }
        rangesPrice['min'] = (sMin + 0.01).toFixed(2);
        rangesPrice['max'] = sMax.toFixed(2);
        return rangesPrice;
    }
    static getRanges (quote, deal) {
        let ranges = {
            stopLoss: { amount: {}, rate: {}},
            takeProfit: { amount: {}, rate: {}}
        };
        ranges['stopLoss']['amount'] = this.getAmountStopLossRange(quote, deal);
        ranges['stopLoss']['rate'] = this.getPriceStopLossRange(quote, deal);
        ranges['takeProfit']['amount'] = this.getAmountTakeProfitRange(quote, deal);
        ranges['takeProfit']['rate'] = this.getPriceTakeProfitRange(quote, deal);
        return ranges;
    }
    static lessDeal (amount, quoteSettings) {
        const amountParseString = amount.replace(/,/g, '');
        const amountInt = +amountParseString;
        const step = quoteSettings.quantityIncrement / 1000000;
        const res = amountInt - step;
        const decimals = PlatformHelper.countDecimals(step);
        if (res > quoteSettings.minimumQuantity / 1000000) {
            return numberFormat(res, decimals);
        } else {
            return numberFormat(quoteSettings.minimumQuantity / 1000000, decimals);
        }
    }
    static moreDeal (amount, quoteSettings) {
        const amountParseString = amount.replace(/,/g, '');
        const amountInt = +amountParseString;
        const step = quoteSettings.quantityIncrement / 1000000;
        const res = amountInt + step;
        const decimals = PlatformHelper.countDecimals(step);
        if (res < quoteSettings.maximumQuantity / 1000000) {
            return numberFormat(res, decimals);
        } else {
            return numberFormat(quoteSettings.maximumQuantity / 1000000, decimals);
        }
    }
    static validateOnBlur (amount, quoteSettings) {
        const amountParseString = amount.replace(/,/g, '');
        const amountInt = +amountParseString;
        if (amountInt < quoteSettings.minimumQuantity / 1000000) {
            const decimals = PlatformHelper.countDecimals(quoteSettings.minimumQuantity);
            return numberFormat(quoteSettings.minimumQuantity / 1000000, decimals);
        } else if (amountInt > quoteSettings.maximumQuantity / 1000000) {
            const decimals = PlatformHelper.countDecimals(quoteSettings.maximumQuantity);
            return numberFormat(quoteSettings.maximumQuantity / 1000000, decimals);
        } else {
            const resultNumber = Math.round(amountInt / (quoteSettings.quantityIncrement / 1000000)) * (quoteSettings.quantityIncrement / 1000000);
            const decimals = PlatformHelper.countDecimals(resultNumber);
            return numberFormat(resultNumber, decimals);
        }
    }
    static validateOnChange (amount, quoteSettings) {
        const amountParseString = amount.replace(/,/g, '');
        const amountInt = +amountParseString;
        if (amountParseString.length > (quoteSettings.maximumQuantity / 1000000).toString().length || amountInt > (quoteSettings.maximumQuantity / 1000000)) {
            const decimals = PlatformHelper.countDecimals(quoteSettings.maximumQuantity);
            return numberFormat(quoteSettings.maximumQuantity / 1000000, decimals);
        } else if (amountParseString.length === 0) {
            const decimals = PlatformHelper.countDecimals(quoteSettings.minimumQuantity);
            return numberFormat(quoteSettings.minimumQuantity / 1000000, decimals);
        } else {
            if (amountParseString.match(/[1-9]+?/)) {
                const decimals = PlatformHelper.countDecimals(amountInt);
                return numberFormat(amountInt, decimals);
            } else {
                return amount.replace(/^,/, '');
            }
        }
    }
    static validateOnKeyPress (e) {
        if (e && e.key && !e.key.match(/[0-9]/) && (e.key.length === 1)) { e.preventDefault() }
    }
    static validateChangeProfitLossText (input, rangeMin, rangeMax) {
        const completeRegex = /^\d+\.\d+$|^\d+$/i;
        rangeMin = parseFloat(rangeMin);
        rangeMax = parseFloat(rangeMax);
        const digitRegex = /^\d+\.\d+$|^\d+$|^\d+\.$/i;
        const softDigitRegex = /\d+\.\d*|\d+\.|\d*/i;
        if (!digitRegex.test(input.value)) {
            input.value = softDigitRegex.exec(input.value);
        }
        if (input.value.length === 0) {
            return true;
        } else if ((completeRegex.test(input.value) && parseFloat(input.value) > rangeMin && parseFloat(input.value) < rangeMax)) {
            return true;
        } else {
            return false;
        }
    }
    static countDecimals (value) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split('.')[1].length || 0;
    }
}
