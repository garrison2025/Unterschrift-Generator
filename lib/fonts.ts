// lib/fonts.ts

import {
  Dancing_Script,
  Great_Vibes,
  Allura,
  Satisfy,
  Pacifico,
  Kaushan_Script,
  Alex_Brush,
  Amatic_SC,
  Caveat,
  Courgette,
  Damion,
  Homemade_Apple,
  Indie_Flower,
  Josefin_Slab,
  Leckerli_One,
  Marck_Script,
  Nothing_You_Could_Do,
  Patrick_Hand,
  Pinyon_Script,
  Qwigley,
  Rouge_Script,
  Sacramento,
  Tangerine,
} from 'next/font/google'

// 为每个字体进行配置
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-dancing-script' });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-great-vibes' });
const allura = Allura({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-allura' });
const satisfy = Satisfy({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-satisfy' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-pacifico' });
const kaushanScript = Kaushan_Script({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-kaushan-script' });
const alexBrush = Alex_Brush({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-alex-brush' });
const amaticSC = Amatic_SC({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-amatic-sc' });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-caveat' });
const courgette = Courgette({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-courgette' });
const damion = Damion({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-damion' });
const homemadeApple = Homemade_Apple({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-homemade-apple' });
const indieFlower = Indie_Flower({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-indie-flower' });
const josefinSlab = Josefin_Slab({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-josefin-slab' });
const leckerliOne = Leckerli_One({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-leckerli-one' });
const marckScript = Marck_Script({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-marck-script' });
const nothingYouCouldDo = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-nothing-you-could-do' });
const patrickHand = Patrick_Hand({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-patrick-hand' });
const pinyonScript = Pinyon_Script({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-pinyon-script' });
const qwigley = Qwigley({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-qwigley' });
const rougeScript = Rouge_Script({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-rouge-script' });
const sacramento = Sacramento({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-sacramento' });
const tangerine = Tangerine({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-tangerine' });


// 将它们整理成一个对象或数组，方便在组件中调用
// 使用对象结构，可以通过字体名称直接访问，更方便
export const signatureFonts = {
  'Dancing Script': dancingScript,
  'Great Vibes': greatVibes,
  'Allura': allura,
  'Satisfy': satisfy,
  'Pacifico': pacifico,
  'Kaushan Script': kaushanScript,
  'Alex Brush': alexBrush,
  'Amatic SC': amaticSC,
  'Caveat': caveat,
  'Courgette': courgette,
  'Damion': damion,
  'Homemade Apple': homemadeApple,
  'Indie Flower': indieFlower,
  'Josefin Slab': josefinSlab,
  'Leckerli One': leckerliOne,
  'Marck Script': marckScript,
  'Nothing You Could Do': nothingYouCouldDo,
  'Patrick Hand': patrickHand,
  'Pinyon Script': pinyonScript,
  'Qwigley': qwigley,
  'Rouge Script': rougeScript,
  'Sacramento': sacramento,
  'Tangerine': tangerine,
};

// 导出一个包含所有字体变量的字符串，以便在全局应用
export const signatureFontVariables = Object.values(signatureFonts).map(font => font.variable).join(' ');
