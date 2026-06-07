import { useState, useEffect } from "react";

const ORANGE = "#E87722";
const NAVY   = "#1A2A6C";
const WHITE  = "#FFFFFF";

const DB = {
  leads: [],
  siteData: {
    company: {
      name:       "Shivraj Transport",
      tagline:    "Reliable freight services across all 28 states of India. From Thane to the nation — we deliver on time, every time.",
      founded:    "2026",
      proprietor: "Pradeep Gulabchand Tiwari",
      phone:      "+91 9136200373",
      email:      "info@shivrajtransport.com",
      website:    "www.shivrajtransport.com",
      address:    "Shop No. 2, Nilesh Mahatre Office, BR Nagar, Dive E, Thane – 400612",
      about:      "Founded by Pradeep Gulabchand Tiwari in 2026, Shivraj Transport has been serving businesses across India from our base in Thane, Maharashtra. We specialize in road freight, express delivery, and supply chain management — connecting manufacturers, traders, and businesses to every corner of the country with reliability and care.",
    },
    stats: [
      { n: "1+",   label: "Years Experience" },
      { n: "50+",  label: "Happy Clients" },
      { n: "28",   label: "States Covered" },
      { n: "20+",  label: "Fleet Vehicles" },
    ],
    services: [
      { icon: "🚛", title: "Full Truck Load (FTL)",     desc: "Dedicated trucks for large shipments across India. Cost-effective and fast." },
      { icon: "📦", title: "Less Than Truck Load (LTL)", desc: "Share truck space with others. Perfect for small-medium cargo." },
      { icon: "🏭", title: "Warehouse & Storage",        desc: "Secure, GPS-monitored warehousing hubs across Maharashtra & beyond." },
      { icon: "🚀", title: "Express Delivery",           desc: "Time-critical freight delivered within 24-48 hours to major cities." },
      { icon: "🏗️", title: "Project Cargo",              desc: "Heavy machinery, over-dimensional cargo handled with precision." },
      { icon: "🔄", title: "Supply Chain Solutions",     desc: "End-to-end logistics planning, tracking & last-mile delivery." },
    ],
    routes: [
      { from: "Mumbai / Thane", to: "Delhi NCR",  km: "1,400 km", days: "2-3 days", rate: "₹18/kg" },
      { from: "Mumbai / Thane", to: "Bangalore",  km: "980 km",   days: "1-2 days", rate: "₹14/kg" },
      { from: "Mumbai / Thane", to: "Chennai",    km: "1,330 km", days: "2-3 days", rate: "₹16/kg" },
      { from: "Mumbai / Thane", to: "Kolkata",    km: "1,970 km", days: "3-4 days", rate: "₹22/kg" },
      { from: "Mumbai / Thane", to: "Hyderabad",  km: "710 km",   days: "1-2 days", rate: "₹12/kg" },
      { from: "Mumbai / Thane", to: "Ahmedabad",  km: "525 km",   days: "1 day",    rate: "₹10/kg" },
      { from: "Mumbai / Thane", to: "Pune",       km: "155 km",   days: "Same day", rate: "₹8/kg"  },
      { from: "Mumbai / Thane", to: "Jaipur",     km: "1,175 km", days: "2 days",   rate: "₹16/kg" },
    ],
  },
};

const ADMIN_PASS = "shivraj@admin";

const INP = { width:"100%", boxSizing:"border-box", padding:"10px 14px", border:"1px solid #ddd",
  borderRadius:6, fontFamily:"'Lato',sans-serif", fontSize:14, outline:"none", marginBottom:0 };
const LABEL = { fontFamily:"'Oswald',sans-serif", fontSize:11, color:ORANGE, letterSpacing:1,
  display:"block", marginBottom:5, textTransform:"uppercase" };

function Nav({ page, setPage }) {
  const links = ["Home","Services","Freight Rates","About","Contact"];
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:999,background:NAVY,boxShadow:"0 2px 20px rgba(0,0,0,.4)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",
        justifyContent:"space-between",padding:"0 20px",height:64}}>
        <div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>setPage("Home")}>
          <div style={{width:44,height:44,borderRadius:"50%",background:ORANGE,display:"flex",
            alignItems:"center",justifyContent:"center",fontSize:22}}>🚛</div>
          <div>
            <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:20,letterSpacing:2,lineHeight:1}}>SHIVRAJ</div>
            <div style={{fontFamily:"'Oswald',sans-serif",color:WHITE,fontSize:11,letterSpacing:4,lineHeight:1}}>TRANSPORT</div>
          </div>
        </div>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {links.map(l=>(
            <button key={l} onClick={()=>setPage(l)}
              style={{background:"none",border:"none",color:page===l?ORANGE:WHITE,fontFamily:"'Oswald',sans-serif",
                fontSize:13,letterSpacing:1.5,cursor:"pointer",padding:"8px 12px",
                borderBottom:page===l?`2px solid ${ORANGE}`:"2px solid transparent",transition:"all .2s"}}>
              {l.toUpperCase()}
            </button>
          ))}
          <button onClick={()=>setPage("Admin")}
            style={{marginLeft:8,background:ORANGE,border:"none",color:WHITE,fontFamily:"'Oswald',sans-serif",
              fontSize:13,letterSpacing:1,cursor:"pointer",padding:"8px 16px",borderRadius:4}}>
            ADMIN
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ setPage, data }) {
  const { company, stats } = data;
  return (
    <section style={{minHeight:"100vh",background:`linear-gradient(135deg,${NAVY} 0%,#0d1b4f 60%,#0a1235 100%)`,
      display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",paddingTop:64}}>
      <div style={{position:"absolute",right:-60,bottom:0,fontSize:320,opacity:.04,lineHeight:1}}>🚛</div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:6,
        background:`linear-gradient(90deg,${ORANGE},#ffaa44,${ORANGE})`}}/>
      <div style={{maxWidth:900,textAlign:"center",padding:"0 24px",position:"relative"}}>
        <div style={{display:"inline-block",background:ORANGE,color:WHITE,fontFamily:"'Oswald',sans-serif",
          fontSize:12,letterSpacing:4,padding:"6px 18px",borderRadius:2,marginBottom:24}}>
          INDIA'S TRUSTED LOGISTICS PARTNER
        </div>
        <h1 style={{fontFamily:"'Oswald',sans-serif",fontSize:"clamp(42px,8vw,90px)",color:WHITE,
          lineHeight:1,margin:"0 0 8px",letterSpacing:2}}>
          SHIVRAJ<br/><span style={{color:ORANGE}}>TRANSPORT</span>
        </h1>
        <p style={{fontFamily:"'Lato',sans-serif",color:"rgba(255,255,255,.75)",fontSize:"clamp(15px,2vw,19px)",
          maxWidth:640,margin:"20px auto 40px",lineHeight:1.7}}>{company.tagline}</p>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>setPage("Contact")}
            style={{background:ORANGE,color:WHITE,border:"none",fontFamily:"'Oswald',sans-serif",
              fontSize:16,letterSpacing:2,padding:"14px 36px",borderRadius:4,cursor:"pointer",
              boxShadow:`0 4px 24px ${ORANGE}66`}}>GET A QUOTE</button>
          <button onClick={()=>setPage("Freight Rates")}
            style={{background:"transparent",color:WHITE,border:`2px solid ${ORANGE}`,fontFamily:"'Oswald',sans-serif",
              fontSize:16,letterSpacing:2,padding:"14px 36px",borderRadius:4,cursor:"pointer"}}>
            VIEW FREIGHT RATES
          </button>
        </div>
        <div style={{display:"flex",marginTop:64,borderTop:"1px solid rgba(255,255,255,.12)",
          paddingTop:40,flexWrap:"wrap",justifyContent:"center"}}>
          {stats.map((s,i)=>(
            <div key={i} style={{flex:"1 1 120px",padding:"0 24px",
              borderRight:i<stats.length-1?"1px solid rgba(255,255,255,.12)":"none"}}>
              <div style={{fontFamily:"'Oswald',sans-serif",fontSize:42,color:ORANGE,lineHeight:1}}>{s.n}</div>
              <div style={{fontFamily:"'Lato',sans-serif",fontSize:12,color:"rgba(255,255,255,.6)",
                letterSpacing:2,marginTop:4}}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
      }
function Services({ data }) {
  return (
    <section style={{background:"#f5f7fa",padding:"80px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:13,letterSpacing:4,marginBottom:8}}>WHAT WE OFFER</div>
          <h2 style={{fontFamily:"'Oswald',sans-serif",fontSize:42,color:NAVY,margin:0}}>Our Logistics Services</h2>
          <div style={{width:60,height:4,background:ORANGE,margin:"16px auto 0",borderRadius:2}}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
          {data.services.map((s,i)=>(
            <div key={i} style={{background:WHITE,borderRadius:8,padding:32,boxShadow:"0 4px 24px rgba(0,0,0,.06)",
              borderBottom:`4px solid ${ORANGE}`,transition:"transform .2s"}}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
              <div style={{fontSize:40,marginBottom:16}}>{s.icon}</div>
              <h3 style={{fontFamily:"'Oswald',sans-serif",fontSize:22,color:NAVY,margin:"0 0 10px"}}>{s.title}</h3>
              <p style={{fontFamily:"'Lato',sans-serif",color:"#666",lineHeight:1.7,margin:0,fontSize:15}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreightRates({ data }) {
  return (
    <section style={{background:WHITE,padding:"80px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:13,letterSpacing:4,marginBottom:8}}>TRANSPARENT PRICING</div>
          <h2 style={{fontFamily:"'Oswald',sans-serif",fontSize:42,color:NAVY,margin:0}}>Freight Rates from Mumbai / Thane</h2>
          <div style={{width:60,height:4,background:ORANGE,margin:"16px auto 0",borderRadius:2}}/>
          <p style={{fontFamily:"'Lato',sans-serif",color:"#888",marginTop:16,fontSize:14}}>
            *Rates indicative. Final pricing based on weight, dimensions & commodity. Contact us for exact quotes.
          </p>
        </div>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"'Lato',sans-serif"}}>
            <thead>
              <tr style={{background:NAVY}}>
                {["Origin","Destination","Distance","Transit Time","Approx. Rate"].map(h=>(
                  <th key={h} style={{color:WHITE,padding:"14px 20px",textAlign:"left",fontSize:13,
                    letterSpacing:1,fontFamily:"'Oswald',sans-serif",whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.routes.map((r,i)=>(
                <tr key={i} style={{background:i%2===0?"#f9f9f9":WHITE,borderBottom:"1px solid #eee"}}>
                  <td style={{padding:"13px 20px",color:"#555",fontSize:14}}>{r.from}</td>
                  <td style={{padding:"13px 20px",color:NAVY,fontWeight:700,fontSize:14}}>{r.to}</td>
                  <td style={{padding:"13px 20px",color:"#555",fontSize:14}}>{r.km}</td>
                  <td style={{padding:"13px 20px",fontSize:14}}>
                    <span style={{background:`${ORANGE}22`,color:ORANGE,padding:"2px 10px",borderRadius:20,fontSize:12,fontWeight:700}}>{r.days}</span>
                  </td>
                  <td style={{padding:"13px 20px",color:NAVY,fontWeight:700,fontSize:15}}>{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{background:`${NAVY}08`,border:`1px solid ${NAVY}22`,borderRadius:8,padding:24,marginTop:32,
          fontFamily:"'Lato',sans-serif",fontSize:14,color:"#555",lineHeight:1.8}}>
          <strong style={{color:NAVY}}>Note:</strong> All rates are per kg for LTL shipments. FTL pricing available on request.
          GST applicable at 18%. Rates may vary for hazardous materials or oversized freight.
        </div>
      </div>
    </section>
  );
}

function About({ data }) {
  const { company } = data;
  return (
    <section style={{padding:"80px 24px",background:"#f5f7fa"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:60,alignItems:"center"}}>
        <div>
          <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:13,letterSpacing:4,marginBottom:8}}>ABOUT US</div>
          <h2 style={{fontFamily:"'Oswald',sans-serif",fontSize:42,color:NAVY,margin:"0 0 20px"}}>Driven by Trust, Powered by Experience</h2>
          <div style={{width:60,height:4,background:ORANGE,marginBottom:24,borderRadius:2}}/>
          <p style={{fontFamily:"'Lato',sans-serif",color:"#555",lineHeight:1.8,marginBottom:24,fontSize:15}}>{company.about}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {["GPS Tracked Fleet","24/7 Customer Support","Insurance Coverage","Pan-India Network"].map(f=>(
              <div key={f} style={{display:"flex",alignItems:"center",gap:10,fontFamily:"'Lato',sans-serif",fontSize:14,color:NAVY}}>
                <span style={{color:ORANGE,fontWeight:700,fontSize:18}}>✓</span> {f}
              </div>
            ))}
          </div>
        </div>
        <div style={{background:NAVY,borderRadius:12,padding:40,color:WHITE}}>
          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:20,color:ORANGE,marginBottom:24,letterSpacing:1}}>CONTACT DETAILS</div>
          {[
            { icon:"👤", label:"Proprietor", value: company.proprietor },
            { icon:"📅", label:"Founded",    value: company.founded },
            { icon:"📞", label:"Phone",      value: company.phone },
            { icon:"📍", label:"Address",    value: company.address },
            { icon:"✉️", label:"Email",      value: company.email },
            { icon:"🌐", label:"Website",    value: company.website },
          ].map((c,i,arr)=>(
            <div key={i} style={{display:"flex",gap:16,marginBottom:18,paddingBottom:18,
              borderBottom:i<arr.length-1?"1px solid rgba(255,255,255,.1)":"none"}}>
              <span style={{fontSize:20}}>{c.icon}</span>
              <div>
                <div style={{fontFamily:"'Oswald',sans-serif",fontSize:11,color:ORANGE,letterSpacing:2}}>{c.label}</div>
                <div style={{fontFamily:"'Lato',sans-serif",fontSize:14,color:WHITE,marginTop:2,lineHeight:1.5}}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ data }) {
  const [form, setForm] = useState({ name:"",phone:"",email:"",from:"",to:"",weight:"",cargo:"",message:"" });
  const [done, setDone] = useState(false);
  const set = k => e => setForm(f=>({...f,[k]:e.target.value}));
  const submit = () => {
    if(!form.name||!form.phone){ alert("Name and phone are required."); return; }
    DB.leads.push({...form, id:Date.now(), status:"New", submittedAt:new Date().toLocaleString("en-IN")});
    setDone(true);
  };
  const inp2 = {...INP, marginBottom:0};
  if(done) return (
    <section style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f7fa"}}>
      <div style={{textAlign:"center",background:WHITE,borderRadius:12,padding:60,boxShadow:"0 4px 40px rgba(0,0,0,.08)"}}>
        <div style={{fontSize:64,marginBottom:16}}>✅</div>
        <h2 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:32,margin:"0 0 12px"}}>Query Received!</h2>
        <p style={{fontFamily:"'Lato',sans-serif",color:"#666",fontSize:16}}>Our team will contact you within 2 business hours.</p>
        <button onClick={()=>{setDone(false);setForm({name:"",phone:"",email:"",from:"",to:"",weight:"",cargo:"",message:""});}}
          style={{marginTop:24,background:ORANGE,color:WHITE,border:"none",fontFamily:"'Oswald',sans-serif",
            fontSize:15,letterSpacing:1,padding:"12px 32px",borderRadius:6,cursor:"pointer"}}>
          SUBMIT ANOTHER
        </button>
      </div>
    </section>
  );
  return (
    <section style={{padding:"80px 24px",background:"#f5f7fa"}}>
      <div style={{maxWidth:780,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:13,letterSpacing:4,marginBottom:8}}>GET IN TOUCH</div>
          <h2 style={{fontFamily:"'Oswald',sans-serif",fontSize:42,color:NAVY,margin:0}}>Request a Quote</h2>
          <div style={{width:60,height:4,background:ORANGE,margin:"16px auto 0",borderRadius:2}}/>
        </div>
        <div style={{background:WHITE,borderRadius:12,padding:"40px 48px",boxShadow:"0 4px 40px rgba(0,0,0,.08)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px 24px",marginBottom:16}}>
            {[["name","Full Name *","Your name"],["phone","Phone *","+91 XXXXX XXXXX"],
              ["email","Email","email@example.com"],["cargo","Cargo Type","e.g. Electronics, FMCG"],
              ["from","From (City)","Origin city"],["to","To (City)","Destination city"]].map(([k,l,p])=>(
              <div key={k}>
                <label style={LABEL}>{l}</label>
                <input style={inp2} value={form[k]} onChange={set(k)} placeholder={p}/>
              </div>
            ))}
          </div>
          <div style={{marginBottom:16}}>
            <label style={LABEL}>Approximate Weight (kg)</label>
            <input style={inp2} value={form.weight} onChange={set("weight")} placeholder="e.g. 500"/>
          </div>
          <div style={{marginBottom:24}}>
            <label style={LABEL}>Message / Special Requirements</label>
            <textarea style={{...inp2,height:100,resize:"vertical"}} value={form.message}
              onChange={set("message")} placeholder="Describe your shipment needs..."/>
          </div>
          <button onClick={submit}
            style={{width:"100%",background:NAVY,color:WHITE,border:"none",fontFamily:"'Oswald',sans-serif",
              fontSize:18,letterSpacing:2,padding:16,borderRadius:6,cursor:"pointer",transition:"background .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background=ORANGE}
            onMouseLeave={e=>e.currentTarget.style.background=NAVY}>
            SUBMIT ENQUIRY →
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer({ setPage, data }) {
  const { company } = data;
  return (
    <footer style={{background:NAVY,color:WHITE,padding:"48px 24px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:40,marginBottom:40}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <div style={{width:40,height:40,borderRadius:"50%",background:ORANGE,display:"flex",
              alignItems:"center",justifyContent:"center",fontSize:20}}>🚛</div>
            <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:18,letterSpacing:2}}>SHIVRAJ TRANSPORT</div>
          </div>
          <p style={{fontFamily:"'Lato',sans-serif",fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.8,maxWidth:280}}>
            Pan-India logistics from Thane, Maharashtra. Est. {company.founded}. Your cargo, our responsibility.
          </p>
        </div>
        <div>
          <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:14,letterSpacing:2,marginBottom:16}}>QUICK LINKS</div>
          {["Home","Services","Freight Rates","About","Contact"].map(l=>(
            <div key={l} style={{fontFamily:"'Lato',sans-serif",fontSize:14,color:"rgba(255,255,255,.7)",
              marginBottom:8,cursor:"pointer"}} onClick={()=>setPage(l)}>{l}</div>
          ))}
        </div>
        <div>
          <div style={{fontFamily:"'Oswald',sans-serif",color:ORANGE,fontSize:14,letterSpacing:2,marginBottom:16}}>CONTACT</div>
          <div style={{fontFamily:"'Lato',sans-serif",fontSize:14,color:"rgba(255,255,255,.7)",lineHeight:2}}>
            📞 {company.phone}<br/>✉️ {company.email}<br/>📍 {company.address}
          </div>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,.1)",paddingTop:20,textAlign:"center",
        fontFamily:"'Lato',sans-serif",fontSize:12,color:"rgba(255,255,255,.4)"}}>
        © {company.founded} {company.name}. Proprietor: {company.proprietor}. All rights reserved.
      </div>
    </footer>
  );
                          }
function Admin({ siteData, setSiteData }) {
  const [auth, setAuth]   = useState(false);
  const [pw, setPw]       = useState("");
  const [tab, setTab]     = useState("leads");
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editLead, setEditLead] = useState(null);
  const [saved, setSaved] = useState("");

  const login = () => { if(pw===ADMIN_PASS){setAuth(true);setLeads([...DB.leads])}else alert("Wrong password."); };
  const refresh = () => setLeads([...DB.leads]);
  const showSaved = msg => { setSaved(msg); setTimeout(()=>setSaved(""),2000); };

  const saveLead = () => {
    const idx = DB.leads.findIndex(l=>l.id===editLead.id);
    if(idx>-1) DB.leads[idx]=editLead;
    setLeads([...DB.leads]);
    setEditLead(null);
    showSaved("Lead updated ✓");
  };
  const deleteLead = id => {
    if(!window.confirm("Delete this lead?")) return;
    const idx = DB.leads.findIndex(l=>l.id===id);
    DB.leads.splice(idx,1);
    setLeads([...DB.leads]);
    setSelected(null);
    showSaved("Lead deleted ✓");
  };

  const updateCompany = (k,v) => setSiteData(d=>({...d, company:{...d.company,[k]:v}}));
  const updateStat = (i,k,v) => setSiteData(d=>{const s=[...d.stats];s[i]={...s[i],[k]:v};return{...d,stats:s};});
  const addStat = () => setSiteData(d=>({...d,stats:[...d.stats,{n:"",label:""}]}));
  const delStat = i => setSiteData(d=>{const s=[...d.stats];s.splice(i,1);return{...d,stats:s};});
  const updateService = (i,k,v) => setSiteData(d=>{const s=[...d.services];s[i]={...s[i],[k]:v};return{...d,services:s};});
  const addService = () => setSiteData(d=>({...d,services:[...d.services,{icon:"📦",title:"",desc:""}]}));
  const delService = i => setSiteData(d=>{const s=[...d.services];s.splice(i,1);return{...d,services:s};});
  const updateRoute = (i,k,v) => setSiteData(d=>{const r=[...d.routes];r[i]={...r[i],[k]:v};return{...d,routes:r};});
  const addRoute = () => setSiteData(d=>({...d,routes:[...d.routes,{from:"Mumbai / Thane",to:"",km:"",days:"",rate:""}]}));
  const delRoute = i => setSiteData(d=>{const r=[...d.routes];r.splice(i,1);return{...d,routes:r};});

  const cardStyle = { background:WHITE, borderRadius:10, padding:24, boxShadow:"0 2px 12px rgba(0,0,0,.07)", marginBottom:20 };
  const btnOrange = { background:ORANGE, color:WHITE, border:"none", fontFamily:"'Oswald',sans-serif", fontSize:13, padding:"7px 16px", borderRadius:4, cursor:"pointer" };
  const btnNavy  = { background:NAVY, color:WHITE, border:"none", fontFamily:"'Oswald',sans-serif", fontSize:13, padding:"7px 16px", borderRadius:4, cursor:"pointer" };
  const btnRed   = { background:"#e74c3c", color:WHITE, border:"none", fontFamily:"'Oswald',sans-serif", fontSize:13, padding:"7px 16px", borderRadius:4, cursor:"pointer" };
  const btnGhost = { background:"rgba(255,255,255,.15)", color:WHITE, border:"none", fontFamily:"'Oswald',sans-serif", fontSize:13, padding:"7px 16px", borderRadius:4, cursor:"pointer" };

  const TABS = [
    {id:"leads",    label:"📨 Leads"},
    {id:"company",  label:"🏢 Company Info"},
    {id:"stats",    label:"📊 Stats"},
    {id:"services", label:"🚛 Services"},
    {id:"routes",   label:"🗺️ Routes"},
  ];

  if(!auth) return (
    <div style={{minHeight:"100vh",background:"#0d1b4f",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:WHITE,borderRadius:12,padding:48,width:340,boxShadow:"0 8px 60px rgba(0,0,0,.3)"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:40}}>🔐</div>
          <h2 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:28,margin:"8px 0 4px"}}>Admin Login</h2>
          <p style={{fontFamily:"'Lato',sans-serif",color:"#888",fontSize:13}}>Shivraj Transport CRM</p>
        </div>
        <input type="password" value={pw} onChange={e=>setPw(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&login()} placeholder="Enter admin password"
          style={{...INP, marginBottom:16}}/>
        <button onClick={login} style={{...btnNavy, width:"100%", fontSize:16, padding:14}}>LOGIN</button>
        <p style={{fontFamily:"'Lato',sans-serif",fontSize:11,color:"#aaa",textAlign:"center",marginTop:16}}>
          Demo password: shivraj@admin
        </p>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:"#eef0f7",paddingTop:64}}>
      <div style={{background:NAVY,padding:"0 32px",display:"flex",alignItems:"center",
        justifyContent:"space-between",position:"fixed",top:64,left:0,right:0,zIndex:10,
        boxShadow:"0 2px 12px rgba(0,0,0,.2)",height:52}}>
        <div style={{display:"flex",gap:4}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)}
              style={{background:tab===t.id?ORANGE:"transparent",color:WHITE,border:"none",
                fontFamily:"'Oswald',sans-serif",fontSize:12,letterSpacing:1,padding:"8px 14px",
                borderRadius:4,cursor:"pointer"}}>
              {t.label}
            </button>
          ))}
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          {saved && <span style={{fontFamily:"'Lato',sans-serif",fontSize:13,color:"#7fff7f"}}>{saved}</span>}
          <button onClick={refresh} style={btnOrange}>🔄 Refresh</button>
          <button onClick={()=>setAuth(false)} style={btnGhost}>Logout</button>
        </div>
      </div>

      <div style={{padding:"124px 32px 40px",maxWidth:1200,margin:"0 auto"}}>

        {tab==="leads" && (
          <>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:28}}>
              {[
                {label:"Total Enquiries",val:leads.length,icon:"📨",color:NAVY},
                {label:"New",val:leads.filter(l=>l.status==="New").length,icon:"🆕",color:"#27ae60"},
                {label:"In Progress",val:leads.filter(l=>l.status==="In Progress").length,icon:"⚙️",color:ORANGE},
                {label:"Closed",val:leads.filter(l=>l.status==="Closed").length,icon:"✅",color:"#888"},
              ].map((s,i)=>(
                <div key={i} style={{...cardStyle,marginBottom:0,borderLeft:`4px solid ${s.color}`,display:"flex",alignItems:"center",gap:16}}>
                  <div style={{fontSize:28}}>{s.icon}</div>
                  <div>
                    <div style={{fontFamily:"'Oswald',sans-serif",fontSize:30,color:s.color,lineHeight:1}}>{s.val}</div>
                    <div style={{fontFamily:"'Lato',sans-serif",fontSize:12,color:"#888"}}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            {leads.length===0 ? (
              <div style={{...cardStyle,textAlign:"center",padding:60}}>
                <div style={{fontSize:56,marginBottom:12}}>📭</div>
                <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:22}}>No enquiries yet</h3>
                <p style={{fontFamily:"'Lato',sans-serif",color:"#888",fontSize:14}}>Submit the Contact form to see leads here.</p>
              </div>
            ) : (
              <div style={{...cardStyle,padding:0,overflow:"hidden"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"'Lato',sans-serif"}}>
                  <thead>
                    <tr style={{background:NAVY}}>
                      {["#","Name","Phone","Email","Route","Cargo","Status","Date","Actions"].map(h=>(
                        <th key={h} style={{color:WHITE,padding:"13px 14px",textAlign:"left",fontSize:12,
                          letterSpacing:1,fontFamily:"'Oswald',sans-serif",whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l,i)=>(
                      <tr key={l.id} style={{borderBottom:"1px solid #eee",background:i%2===0?"#fafafa":WHITE}}>
                        <td style={{padding:"11px 14px",color:"#aaa",fontSize:13}}>{i+1}</td>
                        <td style={{padding:"11px 14px",color:NAVY,fontWeight:700,fontSize:14}}>{l.name}</td>
                        <td style={{padding:"11px 14px",fontSize:14}}>
                          <a href={`tel:${l.phone}`} style={{color:ORANGE,textDecoration:"none"}}>{l.phone}</a>
                        </td>
                        <td style={{padding:"11px 14px",fontSize:13,color:"#555"}}>{l.email||"—"}</td>
                        <td style={{padding:"11px 14px",fontSize:13,color:"#555"}}>{l.from&&l.to?`${l.from}→${l.to}`:"—"}</td>
                        <td style={{padding:"11px 14px",fontSize:13,color:"#555"}}>{l.cargo||"—"}</td>
                        <td style={{padding:"11px 14px"}}>
                          <span style={{background:l.status==="New"?"#e8f5e9":l.status==="In Progress"?"#fff3e0":"#f5f5f5",
                            color:l.status==="New"?"#27ae60":l.status==="In Progress"?ORANGE:"#888",
                            padding:"3px 10px",borderRadius:20,fontSize:12,fontWeight:700}}>{l.status}</span>
                        </td>
                        <td style={{padding:"11px 14px",fontSize:12,color:"#999"}}>{l.submittedAt}</td>
                        <td style={{padding:"11px 14px"}}>
                          <div style={{display:"flex",gap:6}}>
                            <button onClick={()=>setSelected(l)} style={btnNavy}>View</button>
                            <button onClick={()=>setEditLead({...l})} style={btnOrange}>Edit</button>
                            <button onClick={()=>deleteLead(l.id)} style={btnRed}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {selected && !editLead && (
              <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",display:"flex",
                alignItems:"center",justifyContent:"center",zIndex:999}} onClick={()=>setSelected(null)}>
                <div style={{background:WHITE,borderRadius:12,padding:40,maxWidth:520,width:"90%",
                  maxHeight:"80vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
                    <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:24,margin:0}}>Lead Details</h3>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={()=>{setEditLead({...selected});setSelected(null);}} style={btnOrange}>Edit</button>
                      <button onClick={()=>setSelected(null)} style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#aaa"}}>✕</button>
                    </div>
                  </div>
                  {Object.entries(selected).filter(([k])=>k!=="id").map(([k,v])=>(
                    <div key={k} style={{display:"flex",gap:16,marginBottom:12,paddingBottom:12,borderBottom:"1px solid #f0f0f0"}}>
                      <div style={{...LABEL,minWidth:110,marginBottom:0,alignSelf:"center"}}>{k}</div>
                      <div style={{fontFamily:"'Lato',sans-serif",fontSize:14,color:"#333",flex:1}}>{v||"—"}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {editLead && (
              <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",display:"flex",
                alignItems:"center",justifyContent:"center",zIndex:999}} onClick={()=>setEditLead(null)}>
                <div style={{background:WHITE,borderRadius:12,padding:40,maxWidth:560,width:"90%",
                  maxHeight:"85vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
                    <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:24,margin:0}}>Edit Lead</h3>
                    <button onClick={()=>setEditLead(null)} style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#aaa"}}>✕</button>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px 20px",marginBottom:14}}>
                    {[["name","Full Name"],["phone","Phone"],["email","Email"],["cargo","Cargo"],
                      ["from","From"],["to","To"],["weight","Weight (kg)"]].map(([k,l])=>(
                      <div key={k}>
                        <label style={LABEL}>{l}</label>
                        <input style={{...INP,marginBottom:0}} value={editLead[k]||""}
                          onChange={e=>setEditLead(x=>({...x,[k]:e.target.value}))}/>
                      </div>
                    ))}
                    <div>
                      <label style={LABEL}>Status</label>
                      <select style={{...INP,marginBottom:0}} value={editLead.status}
                        onChange={e=>setEditLead(x=>({...x,status:e.target.value}))}>
                        <option>New</option><option>In Progress</option><option>Closed</option>
                      </select>
                    </div>
                  </div>
                  <div style={{marginBottom:16}}>
                    <label style={LABEL}>Message</label>
                    <textarea style={{...INP,height:80,resize:"vertical",marginBottom:0}} value={editLead.message||""}
                      onChange={e=>setEditLead(x=>({...x,message:e.target.value}))}/>
                  </div>
                  <div style={{display:"flex",gap:10}}>
                    <button onClick={saveLead} style={{...btnNavy,flex:1,padding:12,fontSize:15}}>💾 Save Changes</button>
                    <button onClick={()=>setEditLead(null)} style={{...btnGhost,background:"#eee",color:"#555",flex:1,padding:12,fontSize:15}}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {tab==="company" && (
          <div style={cardStyle}>
            <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:22,margin:"0 0 24px"}}>🏢 Company Information</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px 24px"}}>
              {[["name","Company Name"],["proprietor","Proprietor"],["founded","Founded Year"],
                ["phone","Phone"],["email","Email"],["website","Website"]].map(([k,l])=>(
                <div key={k}>
                  <label style={LABEL}>{l}</label>
                  <input style={{...INP,marginBottom:0}} value={siteData.company[k]}
                    onChange={e=>updateCompany(k,e.target.value)}/>
                </div>
              ))}
            </div>
            <div style={{marginTop:16}}>
              <label style={LABEL}>Address</label>
              <input style={{...INP,marginBottom:0}} value={siteData.company.address}
                onChange={e=>updateCompany("address",e.target.value)}/>
            </div>
            <div style={{marginTop:16}}>
              <label style={LABEL}>Tagline</label>
              <textarea style={{...INP,height:80,resize:"vertical",marginBottom:0}} value={siteData.company.tagline}
                onChange={e=>updateCompany("tagline",e.target.value)}/>
            </div>
            <div style={{marginTop:16}}>
              <label style={LABEL}>About Paragraph</label>
              <textarea style={{...INP,height:100,resize:"vertical",marginBottom:0}} value={siteData.company.about}
                onChange={e=>updateCompany("about",e.target.value)}/>
            </div>
            <button onClick={()=>showSaved("Company info saved ✓")}
              style={{...btnNavy,marginTop:20,padding:"10px 28px",fontSize:15}}>💾 Save</button>
            {saved && <span style={{marginLeft:14,color:"#27ae60",fontFamily:"'Lato',sans-serif",fontSize:14}}>{saved}</span>}
          </div>
        )}

        {tab==="stats" && (
          <div style={cardStyle}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:22,margin:0}}>📊 Hero Stats</h3>
              <button onClick={addStat} style={btnOrange}>+ Add Stat</button>
            </div>
            {siteData.stats.map((s,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 2fr auto",gap:12,alignItems:"end",marginBottom:14}}>
                <div>
                  <label style={LABEL}>Number</label>
                  <input style={{...INP,marginBottom:0}} value={s.n} onChange={e=>updateStat(i,"n",e.target.value)} placeholder="e.g. 50+"/>
                </div>
                <div>
                  <label style={LABEL}>Label</label>
                  <input style={{...INP,marginBottom:0}} value={s.label} onChange={e=>updateStat(i,"label",e.target.value)} placeholder="e.g. Happy Clients"/>
                </div>
                <button onClick={()=>delStat(i)} style={btnRed}>🗑</button>
              </div>
            ))}
            <button onClick={()=>showSaved("Stats saved ✓")} style={{...btnNavy,marginTop:10,padding:"10px 28px",fontSize:15}}>💾 Save</button>
            {saved && <span style={{marginLeft:14,color:"#27ae60",fontFamily:"'Lato',sans-serif",fontSize:14}}>{saved}</span>}
          </div>
        )}

        {tab==="services" && (
          <div style={cardStyle}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:22,margin:0}}>🚛 Services</h3>
              <button onClick={addService} style={btnOrange}>+ Add Service</button>
            </div>
            {siteData.services.map((s,i)=>(
              <div key={i} style={{background:"#f9f9fc",borderRadius:8,padding:20,marginBottom:16,border:"1px solid #e8e8f0"}}>
                <div style={{display:"grid",gridTemplateColumns:"80px 1fr auto",gap:12,alignItems:"end",marginBottom:12}}>
                  <div>
                    <label style={LABEL}>Icon</label>
                    <input style={{...INP,marginBottom:0,fontSize:22,textAlign:"center"}} value={s.icon}
                      onChange={e=>updateService(i,"icon",e.target.value)}/>
                  </div>
                  <div>
                    <label style={LABEL}>Title</label>
                    <input style={{...INP,marginBottom:0}} value={s.title} onChange={e=>updateService(i,"title",e.target.value)}/>
                  </div>
                  <button onClick={()=>delService(i)} style={btnRed}>🗑</button>
                </div>
                <label style={LABEL}>Description</label>
                <textarea style={{...INP,height:72,resize:"vertical",marginBottom:0}} value={s.desc}
                  onChange={e=>updateService(i,"desc",e.target.value)}/>
              </div>
            ))}
            <button onClick={()=>showSaved("Services saved ✓")} style={{...btnNavy,padding:"10px 28px",fontSize:15}}>💾 Save</button>
            {saved && <span style={{marginLeft:14,color:"#27ae60",fontFamily:"'Lato',sans-serif",fontSize:14}}>{saved}</span>}
          </div>
        )}

        {tab==="routes" && (
          <div style={cardStyle}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <h3 style={{fontFamily:"'Oswald',sans-serif",color:NAVY,fontSize:22,margin:0}}>🗺️ Freight Routes</h3>
              <button onClick={addRoute} style={btnOrange}>+ Add Route</button>
            </div>
            {{siteData.routes.map((r, i) => (
  <div
    key={i}
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr) auto",
      gap: 10,
      alignItems: "end",
      marginBottom: 14,
      background: "#f9f9fc",
      padding: 16,
      borderRadius: 8,
      border: "1px solid #ddd"
    }}
  >
    {/* Your route content here */}
  </div>
))}
