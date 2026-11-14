const ZH={menu:'菜单',n_about:'关于我们',n_work:'我们的工作',n_gal:'图集',n_fund:'资助方',n_contact:'联系我们',n_donate:'捐款',
h1:'亚洲舞蹈，登上匹兹堡的大舞台。',h1p:'燕来舞蹈团是匹兹堡的非营利组织，致力于呈现专业的亚洲民族民间舞与当代跨文化编舞。',cta1:'立即捐款',cta2:'了解我们的工作',
a_h:'千年传统，焕发新生。',a_lead:'从古典到当代，我们的演出展现亚洲舞蹈的丰富多样，以及亚洲艺术在西方语境中不断演变的身份。',a_p:'舞团成立于2025年，致力于推广亚洲及中国舞蹈，并促进西宾夕法尼亚地区舞蹈与表演艺术机构之间的新合作。',
w_h:'我们的工作',w1:'专业舞台制作',w1p:'将亚洲民族民间舞与古典舞带给西宾夕法尼亚各地的观众。',w2:'为青年舞者创造机会',w2p:'让青年舞者登上专业舞台：真实的排练，真实的观众，真实的挑战。',w3:'合作与教育',w3p:'我们与本地舞蹈和表演机构合作，并通过公开演出与外展活动促进跨文化理解。',
gal_h:'图集',gal_p:'舞台上的精彩瞬间。点击照片可放大。',v_h:'观看舞团演出',
fu_h:'致资助方与合作伙伴',fu_p:'评审人员关心的关键信息，一目了然。',fa1:'501(c)(3) 非营利组织',fa1p:'宾夕法尼亚州免税组织。EIN：[待补充]。',fa2:'成立于2025年',fa2p:'一个新成立的组织，致力于推广亚洲及中国舞蹈，并在业内建立合作。',fa3:'1场演出，4家合作机构',fa3p:'仅2026年，我们已完成1场演出，并与4家机构合作。',fa4:'50+ 位表演者',fa4p:'已有超过50位表演者直接受益于我们的工作。',fu_btn:'索取资助资料',
g_h:'助我们登上舞台。',g_p:'您的捐款将守护文化传承，扩大艺术惠及面，并让青年舞者有机会登上专业舞台。',
f_org:'位于宾夕法尼亚州匹兹堡的 501(c)(3) 非营利组织。<br>捐款在法律允许范围内可抵税。',
d_h1:'您资助的不只是一场演出。',d_p:'您投资的是文化自豪感、社区联结，以及本地区亚洲艺术的未来。',d_h2:'通过 Zelle 捐款',d_lead:'免费、快捷，每一分钱都直达舞团。',d_pick:'选择金额，查看具体转账方式。',other:'其他',
d_how:'捐款步骤',d_s1:'在您的银行应用中打开 Zelle。',d_s2:'发送',d_s2b:'至：',anyamt:'任意金额',d_s3:'如需收据，请在备注中填写您的邮箱。',copy:'复制',copied:'已复制',d_s2n:'将捐款发送至下方邮箱，或扫描二维码。',d_qr:'扫码通过 Zelle 捐款',g_side:'亚洲表演艺术 | 匹兹堡',dd_over:'关于舞团',dd_mvb:'使命、愿景与董事会',vh_pause:'暂停视频',vh_play:'播放视频',a_btn:'使命、愿景与董事会',ab_h1:'关于我们',m_h:'使命宣言',m_p:'燕来舞蹈团总部位于匹兹堡，通过资助、制作和推广激动人心的文化演出，让亚洲舞蹈在社区中焕发生机。通过筹款与社区合作，我们为舞者创造登上专业舞台的机会，并呈现具有文化意义的作品，展现亚洲艺术的美、历史与故事，并将影响力拓展到世界各地。',vi_h:'愿景宣言',vi_p:'我们憧憬这样一个世界：亚洲表演艺术在城市舞台上占有重要一席；学生能够体验文化传承带来的自豪；社区成员能在我们讲述的故事中看见自己。我们的愿景是建立可持续的支持体系，支持更大规模的制作，加强文化代表性，确保亚洲舞蹈作为表演艺术领域充满活力、备受推崇的一部分持续繁荣。',bo_h:'董事会成员',b1:'会长',b2:'副会长',b3:'艺术总监',b4:'财务主管',b5:'技术总监 (CTO)',nozelle:'请发送邮件至 info@yanlaidancetroupe.org，通过 Zelle 捐款。',
d_note:'燕来舞蹈团是宾夕法尼亚州的免税 501(c) 非营利组织。选择逐项扣除的捐款人可就捐款抵税。如有疑问：info@yanlaidancetroupe.org'};
const TITLE={en:{i:'Yanlai Dance Troupe | Asian dance in Pittsburgh',d:'Donate | Yanlai Dance Troupe',a:'About us | Yanlai Dance Troupe'},zh:{i:'燕来舞蹈团 | 匹兹堡的亚洲舞蹈',d:'捐款 | 燕来舞蹈团',a:'关于我们 | 燕来舞蹈团'}};
const zid=document.getElementById('zid'),zc=document.getElementById('copy'),ZID=((window.SITE||{}).zelleId||'').trim();
if(zid&&ZID){zid.removeAttribute('data-i18n');zid.textContent=ZID;if(zc)zc.hidden=false}
const els=[...document.querySelectorAll('[data-i18n]')];
els.forEach(e=>e.dataset.en=e.innerHTML);
let lang='en';
const pg=location.pathname.includes('donate')?'d':location.pathname.includes('about')?'a':'i';
function t(k){return lang==='zh'?ZH[k]:(els.find(e=>e.dataset.i18n===k)||{}).dataset?.en}
function apply(l){
  lang=l;document.documentElement.lang=l==='zh'?'zh-Hans':'en';document.body.classList.toggle('zh',l==='zh');
  els.forEach(e=>{e.innerHTML=l==='zh'?(ZH[e.dataset.i18n]??e.dataset.en):e.dataset.en});
  document.title=TITLE[l][pg];
  const b=document.getElementById('lang');if(b)b.textContent=l==='zh'?'EN':'中文';
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.getElementById('lang')?.addEventListener('click',()=>apply(lang==='zh'?'en':'zh'));
let saved='en';try{saved=localStorage.getItem('lang')||(navigator.language||'').startsWith('zh')&&'zh'||'en'}catch(e){}
if(saved==='zh')apply('zh');
// menu
const m=document.querySelector('.menu'),n=document.querySelector('nav');
m?.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
// images: remove if missing
document.querySelectorAll('.frame img,.photo img,.g img').forEach(i=>i.addEventListener('error',()=>i.remove()));
// lightbox
const lb=document.getElementById('lb');
document.querySelectorAll('.g').forEach(g=>g.addEventListener('click',()=>{const i=g.querySelector('img');if(!i||!i.naturalWidth)return;lb.querySelector('img').src=i.src;lb.querySelector('img').alt=i.alt;lb.showModal()}));
lb?.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.close()});
// donate
const c=document.getElementById('copy');
c?.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(document.getElementById('zid').textContent);c.textContent=lang==='zh'?ZH.copied:'Copied'}
  catch(e){c.textContent='Ctrl+C'}
  setTimeout(()=>c.innerHTML=lang==='zh'?ZH.copy:'Copy',2200)});

// dropdown
const dd=document.querySelector('.dd');
if(dd){const b=dd.querySelector('.ddb');
  b.addEventListener('click',e=>{e.stopPropagation();b.setAttribute('aria-expanded',dd.classList.toggle('open'))});
  document.addEventListener('click',e=>{if(!dd.contains(e.target)){dd.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){dd.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
// hero video: muted loop; it fades in only once it is really playing, so if autoplay is
// blocked (phones, low-power mode) the fallback image stays visible instead.
const hv=document.getElementById('hv'),vc=document.getElementById('vctl'),hero=document.querySelector('.vhero');
if(hv){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){hv.remove();vc.hidden=true}
  else{
    let userPaused=false;
    const go=()=>{const p=hv.play();if(p&&p.catch)p.catch(()=>{})};
    const label=()=>{const k=hv.paused?'vh_play':'vh_pause';vc.dataset.i18n=k;vc.dataset.en=hv.paused?'Play video':'Pause video';vc.innerHTML=lang==='zh'?ZH[k]:vc.dataset.en};
    hv.muted=true;
    hv.addEventListener('playing',()=>hero.classList.add('playing'));
    go();
    // some phones allow autoplay only after the first touch
    ['touchstart','click','scroll'].forEach(ev=>addEventListener(ev,()=>{if(hv.paused&&!userPaused)go()},{once:true,passive:true}));
    vc.addEventListener('click',()=>{if(hv.paused){userPaused=false;go()}else{userPaused=true;hv.pause()}label()});
  }
}
// chop mark: jumps in when scrolled into view
const mk=document.querySelector('.mark');
if(mk){
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){mk.classList.add('in');io.disconnect()}}),{threshold:.6});
    io.observe(mk.parentElement);
  }else mk.classList.add('in');
}
