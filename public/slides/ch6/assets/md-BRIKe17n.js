import{_ as u}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Dw-Je4Ys.js";import{b as A,o as k,w as a,e as t,g as s,m as p,C as l,v as g,x as m,B as o}from"./modules/vue-DLwHGqwd.js";import{I as c}from"./two-cols-title-DwBAVZGN.js";import{u as d,f as E}from"./slidev/context-DDrNfour.js";import"./modules/unplugin-icons-BcHucCjW.js";import"./index-CTIm3dh-.js";import"./modules/file-saver-B7oFTzqn.js";import"./modules/shiki-C5BWufWe.js";import"./layoutHelper-HtdtuDyr.js";const O={__name:"ch6.md__slidev_15",setup(R){const{$clicksContext:r,$frontmatter:I}=d();return r.setup(),(T,n)=>{const i=u;return k(),A(c,g(m(o(E)(o(I),14))),{title:a(e=>[...n[0]||(n[0]=[s("p",null,[s("span",{class:"text-2xl"},"Fortran Example")],-1),s("p",null,[s("a",{href:"https://en.wikibooks.org/wiki/Fortran/Fortran_examples",target:"_blank"},"https://en.wikibooks.org/wiki/Fortran/Fortran_examples")],-1)])]),left:a(e=>[t(i,p({},{title:"",ranges:[]}),{default:a(()=>[...n[1]||(n[1]=[s("pre",{class:"shiki shiki-themes slack-dark snazzy-light slidev-code",style:{"--shiki-dark":"#E6E6E6","--shiki-light":"#565869","--shiki-dark-bg":"#222222","--shiki-light-bg":"#FAFBFC"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"C AREA OF A TRIANGLE - HERON'S FORMULA")]),l(`
`),s("span",{class:"line"},[s("span",null,"C INPUT - CARD READER UNIT 5, INTEGER INPUT")]),l(`
`),s("span",{class:"line"},[s("span",null,"C OUTPUT -")]),l(`
`),s("span",{class:"line"},[s("span",null,"C INTEGER VARIABLES START WITH I,J,K,L,M OR N")]),l(`
`),s("span",{class:"line"},[s("span",null,"      READ(5,501) IA,IB,IC")]),l(`
`),s("span",{class:"line"},[s("span",null,"  501 FORMAT(3I5)")]),l(`
`),s("span",{class:"line"},[s("span",null,"      IF (IA) 701, 777, 701")]),l(`
`),s("span",{class:"line"},[s("span",null,"  701 IF (IB) 702, 777, 702")]),l(`
`),s("span",{class:"line"},[s("span",null,"  702 IF (IC) 703, 777, 703")]),l(`
`),s("span",{class:"line"},[s("span",null,"  777 STOP 1")]),l(`
`),s("span",{class:"line"},[s("span",null,"  703 S = (IA + IB + IC) / 2.0")]),l(`
`),s("span",{class:"line"},[s("span",null,"      AREA = SQRT( S * (S - IA) * (S - IB) * (S - IC) )")]),l(`
`),s("span",{class:"line"},[s("span",null,"      WRITE(6,801) IA,IB,IC,AREA")]),l(`
`),s("span",{class:"line"},[s("span",null,"  801 FORMAT(4H A= ,I5,5H  B= ,I5,5H  C= ,I5,8H  AREA= ,F10.2,")]),l(`
`),s("span",{class:"line"},[s("span",null,"     $13H SQUARE UNITS)")]),l(`
`),s("span",{class:"line"},[s("span",null,"      STOP")]),l(`
`),s("span",{class:"line"},[s("span",null,"      END")])])],-1)])]),_:1},16)]),right:a(e=>[t(i,p({},{title:"",ranges:[]}),{default:a(()=>[...n[2]||(n[2]=[s("pre",{class:"shiki shiki-themes slack-dark snazzy-light slidev-code",style:{"--shiki-dark":"#E6E6E6","--shiki-light":"#565869","--shiki-dark-bg":"#222222","--shiki-light-bg":"#FAFBFC"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"IF (IA) 701, 777, 703")])])],-1)])]),_:1},16),n[3]||(n[3]=s("p",null,[s("strong",null,"Meaning:")],-1)),n[4]||(n[4]=s("ul",null,[s("li",null,"If IA < 0 → goto line 701"),s("li",null,"If IA = 0 → goto line 777 (STOP - error!)"),s("li",null,"If IA > 0 → goto line 703")],-1))]),default:a(e=>[...n[5]||(n[5]=[])]),_:1},16)}}};export{O as default};
