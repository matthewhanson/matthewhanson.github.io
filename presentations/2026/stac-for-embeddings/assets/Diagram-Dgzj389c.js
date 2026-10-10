import{C as e,L as t,h as n,y as r}from"./modules/shiki-_IfpXcFA.js";import{rt as i}from"./index-C-cBb_aK.js";var a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 250" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 15px; }
    svg.diagram text.t { font-family: ui-monospace, SF Mono, Menlo, monospace; font-size: 15px; }
    svg.diagram text.c { font-family: ui-monospace, SF Mono, Menlo, monospace; font-size: 12.5px; }
    svg.diagram text.k { font-size: 12.5px; fill: #9f9f9f; font-family: ui-monospace, SF Mono, Menlo, monospace; }
  </style>

  <text x="10" y="24" class="t" style="font-weight:700">Item</text>

  <text x="26" y="56" class="t">├─ properties</text>
  <text x="310" y="56" class="c">datetime · eo:cloud_cover · <tspan style="font-weight:700">emb:dimensions</tspan></text>
  <rect x="660" y="42" width="86" height="20" fill="#0056ff"/>
  <text x="703" y="56" text-anchor="middle" class="c" style="fill:#fff">allowed</text>

  <text x="26" y="88" class="t">└─ assets</text>

  <text x="52" y="122" class="t">├─ B04.tif</text>
  <text x="310" y="122" class="c">raster: · file: · proj:</text>
  <rect x="660" y="108" width="86" height="20" fill="#0056ff"/>
  <text x="703" y="122" text-anchor="middle" class="c" style="fill:#fff">allowed</text>

  <text x="52" y="154" class="t">├─ visual.tif</text>
  <text x="310" y="154" class="c">raster: · file: · proj:</text>
  <rect x="660" y="140" width="86" height="20" fill="#0056ff"/>
  <text x="703" y="154" text-anchor="middle" class="c" style="fill:#fff">allowed</text>

  <rect x="44" y="172" width="700" height="36" fill="#fff0f2"/>
  <text x="52" y="196" class="t">└─ embeddings.parquet</text>
  <text x="310" y="196" class="c">table: · file: · <tspan style="font-weight:700">emb:dimensions</tspan></text>
  <rect x="660" y="182" width="86" height="20" fill="#ff495d"/>
  <text x="703" y="196" text-anchor="middle" class="c" style="fill:#fff">not allowed</text>

  <text x="10" y="236" class="k">the current draft does not permit emb: fields at asset scope</text>
</svg>
`,o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 260" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 16px; }
    svg.diagram text.h { font-size: 18px; font-weight: 900; }
    svg.diagram text.k { font-size: 12px; fill: #777; font-family: ui-monospace, SF Mono, Menlo, monospace; }
  </style>
  <defs><marker id="ctv" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3a3a3a"/></marker></defs>

  <rect x="20" y="34" width="180" height="180" fill="#dce9df" stroke="#3a3a3a" stroke-width="3"/>
  <path d="M20 94h180M20 154h180M80 34v180M140 34v180" stroke="#3a3a3a" opacity=".2"/>
  <path d="M38 171 C75 107 111 197 184 63" fill="none" stroke="#23dd6a" stroke-width="18" opacity=".75"/>
  <rect x="80" y="94" width="60" height="60" fill="#ffee00" fill-opacity=".75" stroke="#ff495d" stroke-width="4"/>
  <text x="110" y="238" text-anchor="middle" class="h">query chip</text>

  <path d="M225 124h76" stroke="#3a3a3a" stroke-width="3" marker-end="url(#ctv)"/>
  <text x="263" y="105" text-anchor="middle" class="k">pixels</text>

  <rect x="322" y="62" width="170" height="124" rx="62" fill="#9c70fc"/>
  <text x="407" y="117" text-anchor="middle" class="h" style="fill:#fff">same image</text>
  <text x="407" y="143" text-anchor="middle" class="h" style="fill:#fff">encoder</text>
  <text x="407" y="210" text-anchor="middle" class="k">Clay v1.5, for example</text>

  <path d="M514 124h76" stroke="#3a3a3a" stroke-width="3" marker-end="url(#ctv)"/>
  <text x="552" y="105" text-anchor="middle" class="k">inference</text>

  <rect x="612" y="62" width="266" height="124" fill="#eef0ff" stroke="#3a3a3a" stroke-width="3"/>
  <text x="745" y="105" text-anchor="middle" class="h">query vector</text>
  <text x="745" y="137" text-anchor="middle" font-family="monospace">0.013, −0.225, 0.084, …</text>
  <text x="745" y="166" text-anchor="middle" class="k">sent to the STAC API</text>
  <text x="745" y="210" text-anchor="middle" class="k">same dimensions · same vector space</text>
</svg>
`,s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 270" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 16px; }
    svg.diagram text[font-weight="700"] { font-size: 18px; }
  </style>
  <defs>
    <pattern id="px" width="15" height="15" patternUnits="userSpaceOnUse">
      <path d="M15 0H0V15" fill="none" stroke="#3a3a3a" stroke-width="1" opacity=".22"/>
    </pattern>
  </defs>

  <!-- chip embedding: footprint and context are the same square -->
  <rect x="60" y="20" width="330" height="210" fill="#dfe8e3" stroke="#3a3a3a" stroke-width="2"/>
  <rect x="60" y="20" width="330" height="210" fill="url(#px)"/>
  <rect x="150" y="50" width="150" height="150" fill="#ff495d" fill-opacity=".18" stroke="#ff495d" stroke-width="3"/>
  <rect x="146" y="46" width="158" height="158" fill="none" stroke="#0056ff" stroke-width="2.5" stroke-dasharray="7 5"/>

  <!-- pixel embedding: one pixel footprint, a wide context -->
  <rect x="510" y="20" width="330" height="210" fill="#dfe8e3" stroke="#3a3a3a" stroke-width="2"/>
  <rect x="510" y="20" width="330" height="210" fill="url(#px)"/>
  <rect x="600" y="50" width="150" height="150" fill="none" stroke="#0056ff" stroke-width="2.5" stroke-dasharray="7 5"/>
  <rect x="667.5" y="117.5" width="15" height="15" fill="#ff495d"/>

  <text x="225" y="258" text-anchor="middle" font-weight="700">chip embedding</text>
  <text x="675" y="258" text-anchor="middle" font-weight="700">pixel embedding</text>
</svg>
`,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 280" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 16px; }
    svg.diagram text[font-weight="700"] { font-size: 18px; }
  </style>
  <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3a3a3a"/></marker></defs>

  <!-- the scene, divided into chips -->
  <rect x="15" y="55" width="130" height="130" fill="#dce9df" stroke="#3a3a3a" stroke-width="2"/>
  <path d="M47.5 55v130M80 55v130M112.5 55v130M15 87.5h130M15 120h130M15 152.5h130" stroke="#3a3a3a" opacity=".3"/>
  <rect x="47.5" y="87.5" width="32.5" height="32.5" fill="none" stroke="#ff495d" stroke-width="3"/>
  <text x="80" y="208" text-anchor="middle">image</text>

  <!-- zoom into one chip -->
  <path d="M80 87.5L200 50M80 120L200 210" stroke="#aaa" stroke-width="1.5" stroke-dasharray="5 4"/>

  <!-- the chip, cut into patches -->
  <rect x="200" y="50" width="160" height="160" fill="#dce9df" stroke="#3a3a3a" stroke-width="3"/>
  <path d="M225 140 C255 95 275 165 340 70" fill="none" stroke="#23dd6a" stroke-width="10" opacity=".75"/>
  <path d="M220 50v160M240 50v160M260 50v160M280 50v160M300 50v160M320 50v160M340 50v160M200 70h160M200 90h160M200 110h160M200 130h160M200 150h160M200 170h160M200 190h160" stroke="#3a3a3a" opacity=".28"/>
  <rect x="260" y="110" width="20" height="20" fill="#ffee00" fill-opacity=".8" stroke="#ff495d" stroke-width="3"/>
  <text x="280" y="230" text-anchor="middle">one chip, cut into patches</text>

  <path d="M382 130h38" stroke="#3a3a3a" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="440" y="74" width="130" height="112" rx="56" fill="#9c70fc"/>
  <text x="505" y="124" text-anchor="middle" font-weight="700">image</text>
  <text x="505" y="150" text-anchor="middle" font-weight="700">model</text>
  <path d="M590 130h38" stroke="#3a3a3a" stroke-width="3" marker-end="url(#arrow)"/>

  <rect x="650" y="62" width="195" height="138" fill="none" stroke="#3a3a3a" stroke-width="3"/>
  <text x="747" y="114" text-anchor="middle" font-family="monospace">0.010, −0.011,</text>
  <text x="747" y="144" text-anchor="middle" font-family="monospace">0.084, …</text>
  <text x="747" y="225" text-anchor="middle">embedding</text>
</svg>
`,l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 255" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 15px; }
    svg.diagram text.h { font-size: 18px; font-weight: 900; }
    svg.diagram text.n { font-size: 28px; font-weight: 900; }
    svg.diagram text.k { font-size: 12px; fill: #777; font-family: ui-monospace, SF Mono, Menlo, monospace; }
  </style>
  <defs><marker id="ior" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3a3a3a"/></marker></defs>

  <rect x="15" y="42" width="170" height="150" fill="#dce9df" stroke="#3a3a3a" stroke-width="3"/>
  <path d="M49 42v150M83 42v150M117 42v150M151 42v150M15 72h170M15 102h170M15 132h170M15 162h170" stroke="#3a3a3a" opacity=".24"/>
  <text x="100" y="24" text-anchor="middle" class="h">one S2 Item</text>
  <text x="100" y="218" text-anchor="middle" class="k">109.8 km · 10,980 px</text>

  <path d="M205 117h74" stroke="#3a3a3a" stroke-width="3" marker-end="url(#ior)"/>
  <text x="242" y="99" text-anchor="middle" class="k">256 px chips</text>

  <text x="365" y="85" text-anchor="middle" class="n">1,764</text>
  <text x="365" y="111" text-anchor="middle" class="h">embeddings</text>
  <text x="365" y="136" text-anchor="middle" class="k">42 × 42 · no overlap</text>

  <path d="M445 94C510 58 540 49 590 49" fill="none" stroke="#ff495d" stroke-width="3" marker-end="url(#ior)"/>
  <path d="M445 127C510 164 540 183 590 183" fill="none" stroke="#0056ff" stroke-width="4" marker-end="url(#ior)"/>

  <rect x="612" y="18" width="260" height="72" fill="#fff0f2" stroke="#ff495d" stroke-width="2.5"/>
  <text x="742" y="47" text-anchor="middle" class="h">1,764 STAC Items?</text>
  <text x="742" y="71" text-anchor="middle" class="k">too many catalog records</text>

  <rect x="612" y="146" width="260" height="86" fill="#eaf2ff" stroke="#0056ff" stroke-width="3"/>
  <text x="742" y="178" text-anchor="middle" class="h">one GeoParquet asset</text>
  <text x="742" y="202" text-anchor="middle" class="k">1,764 rows + geometry + vector</text>
  <text x="742" y="220" text-anchor="middle" class="k">attached to the source Item</text>
</svg>
`,u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 340" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 15px; }
    svg.diagram text.h { font-size: 18px; font-weight: 900; }
    svg.diagram text.n { font-size: 26px; font-weight: 900; }
    svg.diagram text.k { font-size: 12px; fill: #777; font-family: ui-monospace, SF Mono, Menlo, monospace; }
  </style>
  <defs><clipPath id="mtw"><rect x="30.0" y="24.0" width="396.0" height="283.8"/></clipPath></defs>
  <g clip-path="url(#mtw)">
    <rect x="30.0" y="279.5" width="396.0" height="28.3" fill="#dce6ff"/>
    <path d="M30.0 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M59.0 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M88.0 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M116.9 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M145.9 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M174.9 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M203.9 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M232.8 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M261.8 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M290.8 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M319.8 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M348.7 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M377.7 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M406.7 279.5V307.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 307.8H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="251.2" width="396.0" height="28.3" fill="#eef0ff"/>
    <path d="M30.0 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M59.7 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M89.4 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M119.1 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M148.8 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M178.5 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M208.2 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M237.9 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M267.6 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M297.3 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M327.0 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M356.7 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M386.4 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M416.1 251.2V279.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 279.5H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="222.9" width="396.0" height="28.3" fill="#dce6ff"/>
    <path d="M30.0 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M60.5 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M90.9 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M121.4 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M151.8 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M182.3 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M212.8 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M243.2 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M273.7 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M304.2 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M334.6 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M365.1 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M395.5 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M426.0 222.9V251.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 251.2H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="194.7" width="396.0" height="28.3" fill="#eef0ff"/>
    <path d="M30.0 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M62.1 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M94.2 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M126.3 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M158.4 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M190.5 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M222.6 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M254.8 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M286.9 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M319.0 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M351.1 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M383.2 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M415.3 194.7V222.9" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 222.9H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="166.4" width="396.0" height="28.3" fill="#dce6ff"/>
    <path d="M30.0 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M64.9 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M99.9 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M134.8 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M169.8 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M204.7 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M239.6 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M274.6 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M309.5 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M344.5 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M379.4 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M414.4 166.4V194.7" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 194.7H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="138.1" width="396.0" height="28.3" fill="#eef0ff"/>
    <path d="M30.0 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M69.6 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M109.2 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M148.8 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M188.4 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M228.0 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M267.6 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M307.2 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M346.8 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M386.4 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M426.0 138.1V166.4" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 166.4H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="109.8" width="396.0" height="28.3" fill="#dce6ff"/>
    <path d="M30.0 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M77.5 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M125.0 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M172.6 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M220.1 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M267.6 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M315.1 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M362.6 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M410.2 109.8V138.1" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 138.1H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="81.5" width="396.0" height="28.3" fill="#eef0ff"/>
    <path d="M30.0 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M86.6 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M143.1 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M199.7 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M256.3 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M312.9 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M369.4 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M426.0 81.5V109.8" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 109.8H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="53.2" width="396.0" height="28.3" fill="#dce6ff"/>
    <path d="M30.0 53.2V81.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M109.2 53.2V81.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M188.4 53.2V81.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M267.6 53.2V81.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M346.8 53.2V81.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M426.0 53.2V81.5" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 81.5H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
    <rect x="30.0" y="27.3" width="396.0" height="25.9" fill="#eef0ff"/>
    <path d="M30.0 27.3V53.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M162.0 27.3V53.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M294.0 27.3V53.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M426.0 27.3V53.2" stroke="#3a3a3a" stroke-width="1.2"/>
    <path d="M30.0 53.2H426.0" stroke="#3a3a3a" stroke-width="1.2"/>
  </g>
  <rect x="30.0" y="24.0" width="396.0" height="283.8" fill="none" stroke="#3a3a3a" stroke-width="3"/>
  <text x="30.0" y="328" class="k">equator</text>
  <text x="30.0" y="16" class="k">85°N</text>
  <text x="426.0" y="328" text-anchor="end" class="k">schematic: Major TOM’s rule at 1,000 km</text>
  <text x="500" y="40" class="h">At the real 10 km spacing</text>
  <text x="500" y="88" class="n">4,008</text>
  <text x="595" y="86">columns at the equator</text>
  <text x="500" y="140" class="n">2,004</text>
  <text x="595" y="138">columns at 60°N</text>
  <text x="500" y="192" class="n">350</text>
  <text x="595" y="190">columns at 85°N</text>
  <text x="500" y="270" class="k">rows: equal steps in latitude</text>
  <text x="500" y="290" class="k">columns: recounted every row</text>
  <text x="500" y="310" class="k">→ column edges don’t line up</text>
</svg>
`,d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 290" class="diagram">
    <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 16px; }
    svg.diagram text[font-weight="700"] { font-size: 18px; }
  </style>
  <rect x="20" y="50" width="270" height="170" fill="#dfe8e3" stroke="#3a3a3a" stroke-width="2"/>
  <path d="M110.0 50v170M200.0 50v170M20 135.0h270" stroke="#3a3a3a" stroke-width="2" opacity=".5"/>
  <rect x="110" y="135" width="90" height="85" fill="#ff495d" fill-opacity=".14" stroke="#ff495d" stroke-width="3"/>
  <rect x="315" y="50" width="270" height="170" fill="#dfe8e3" stroke="#3a3a3a" stroke-width="2"/>
  <rect x="405" y="92.5" width="90" height="85" fill="#ff495d" fill-opacity=".10" stroke="#ff495d" stroke-width="3"/>
  <rect x="450" y="92.5" width="90" height="85" fill="#0056ff" fill-opacity=".10" stroke="#0056ff" stroke-width="3"/>
  <rect x="405" y="135" width="90" height="85" fill="#d3bd00" fill-opacity=".10" stroke="#d3bd00" stroke-width="3"/>
  <rect x="450" y="135" width="90" height="85" fill="#16a64d" fill-opacity=".10" stroke="#16a64d" stroke-width="3"/>
  <circle cx="470" cy="155" r="6" fill="#3a3a3a"/>
  <rect x="610" y="50" width="270" height="170" fill="#dfe8e3" stroke="#3a3a3a" stroke-width="2"/>
  <path d="M625.0 50v170M640.0 50v170M655.0 50v170M670.0 50v170M685.0 50v170M700.0 50v170M715.0 50v170M730.0 50v170M745.0 50v170M760.0 50v170M775.0 50v170M790.0 50v170M805.0 50v170M820.0 50v170M835.0 50v170M850.0 50v170M865.0 50v170M610 65.5h270M610 80.9h270M610 96.4h270M610 111.8h270M610 127.3h270M610 142.7h270M610 158.2h270M610 173.6h270M610 189.1h270M610 204.5h270" stroke="#3a3a3a" stroke-width="1" opacity=".28"/>
  <rect x="685.0" y="65.5" width="135.0" height="139.1" fill="none" stroke="#0056ff" stroke-width="2.5" stroke-dasharray="6 5"/>
  <rect x="745.0" y="127.3" width="15.0" height="15.5" fill="#ff495d"/>
  <circle cx="168" cy="155" r="6" fill="#3a3a3a"/>
  <text x="155.0" y="248" text-anchor="middle" font-weight="700">no overlap</text>
  <text x="450.0" y="248" text-anchor="middle" font-weight="700">50% overlap</text>
  <text x="745.0" y="248" text-anchor="middle" font-weight="700">per pixel</text>
  <text x="155.0" y="272" text-anchor="middle">1 vector for this place</text>
  <text x="450.0" y="272" text-anchor="middle">4 vectors for this place</text>
  <text x="745.0" y="272" text-anchor="middle">1 vector, read from wider</text>
  </svg>
`,f=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 270" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 14px; }
    svg.diagram text.h { font-size: 16px; font-weight: 900; }
    svg.diagram text.k { font-size: 12px; fill: #707070; font-family: ui-monospace, SF Mono, Menlo, monospace; }
  </style>
  <defs>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="#c9c9c9" stroke-width="1"/>
    </pattern>
  </defs>

  <rect x="24" y="22" width="340" height="220" rx="5" fill="#eef9fc" stroke="#00a7d8" stroke-width="2.5"/>
  <rect x="24" y="22" width="340" height="220" rx="5" fill="url(#grid)"/>
  <text x="40" y="48" class="h">model context</text>
  <text x="40" y="68" class="k">the pixels available to the encoder</text>

  <rect x="150" y="98" width="96" height="96" fill="#9c70fc" fill-opacity="0.75" stroke="#7042d8" stroke-width="3"/>
  <text x="198" y="137" text-anchor="middle" class="h" style="fill:#fff">result</text>
  <text x="198" y="158" text-anchor="middle" style="fill:#fff">geometry</text>
  <text x="198" y="178" text-anchor="middle" class="k" style="fill:#fff">returned Feature</text>

</svg>
`,p=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 210" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 15px; }
    svg.diagram text.n { font-size: 25px; font-weight: 900; }
    svg.diagram text.k { font-size: 12px; fill: #777; font-family: ui-monospace, SF Mono, Menlo, monospace; }
    svg.diagram text.a { font-size: 13px; font-weight: 700; }
  </style>
  <defs><marker id="tp2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#3a3a3a"/></marker></defs>

  <text x="12" y="18" class="k">STAC SEARCH</text>
  <text x="488" y="18" class="k">VECTOR SEARCH</text>
  <path d="M465 4v192" stroke="#aaa" stroke-width="1.5" stroke-dasharray="5 5"/>

  <rect x="12" y="42" width="145" height="104" fill="#00c3ff"/>
  <text x="84" y="86" text-anchor="middle" class="n">2.8 M</text>
  <text x="84" y="112" text-anchor="middle">Items</text>
  <text x="84" y="169" text-anchor="middle" class="k">the catalog</text>

  <path d="M169 94h54" stroke="#3a3a3a" stroke-width="2.5" marker-end="url(#tp2)"/>
  <text x="196" y="76" text-anchor="middle" class="a">filter</text>

  <rect x="235" y="42" width="145" height="104" fill="#0056ff"/>
  <text x="307" y="86" text-anchor="middle" class="n" style="fill:#fff">6</text>
  <text x="307" y="112" text-anchor="middle" style="fill:#fff">Items</text>
  <text x="307" y="169" text-anchor="middle" class="k">six Parquet assets</text>

  <path d="M392 94h54" stroke="#3a3a3a" stroke-width="2.5" marker-end="url(#tp2)"/>
  <text x="419" y="76" text-anchor="middle" class="a">open</text>

  <rect x="488" y="42" width="175" height="104" fill="#9c70fc"/>
  <text x="575" y="86" text-anchor="middle" class="n">22,905</text>
  <text x="575" y="112" text-anchor="middle">embedding rows</text>
  <text x="575" y="169" text-anchor="middle" class="k">geometry + vector</text>

  <path d="M675 94h54" stroke="#3a3a3a" stroke-width="2.5" marker-end="url(#tp2)"/>
  <text x="702" y="76" text-anchor="middle" class="a">rank</text>

  <rect x="741" y="42" width="145" height="104" fill="#3a3a3a"/>
  <text x="813" y="86" text-anchor="middle" class="n" style="fill:#fff">8</text>
  <text x="813" y="112" text-anchor="middle" style="fill:#fff">matches</text>
  <text x="813" y="169" text-anchor="middle" class="k">GeoJSON Features</text>
</svg>
`,m=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 260" class="diagram">
  <style>
    svg.diagram text { fill: #3a3a3a; font-family: Roobert, ui-sans-serif, system-ui, sans-serif; font-size: 15px; }
    svg.diagram text.t { font-family: ui-monospace, SF Mono, Menlo, monospace; font-size: 13px; }
    svg.diagram text.h { font-size: 16px; font-weight: 900; }
    svg.diagram text.k { font-size: 12px; fill: #9f9f9f; font-family: ui-monospace, SF Mono, Menlo, monospace; }
  </style>
  <defs><marker id="ts" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#3a3a3a"/></marker></defs>

  <text x="10" y="20" class="h">One scene in, chips out</text>
  <text x="10" y="42" class="k">optical, per acquisition</text>
  <rect x="10" y="56" width="150" height="60" fill="#00c3ff"/>
  <text x="85" y="82" text-anchor="middle" class="t">Item</text>
  <text x="85" y="102" text-anchor="middle" class="t">S2 · 2023-06-14</text>
  <path d="M170 86h40" stroke="#3a3a3a" stroke-width="2.5" marker-end="url(#ts)"/>
  <rect x="220" y="56" width="200" height="60" fill="#9c70fc"/>
  <text x="320" y="82" text-anchor="middle" class="t">embeddings.parquet</text>
  <text x="320" y="102" text-anchor="middle" class="t">22,905 OGC Features</text>
  <text x="10" y="140" class="t">an asset on the Item it came from — the provenance is the parent</text>

  <path d="M10 162h880" stroke="#9f9f9f" stroke-width="1" stroke-dasharray="4 4"/>

  <text x="10" y="188" class="h">Many scenes in, one surface out</text>
  <text x="330" y="188" class="k">per-pixel · annual · time series</text>
  <rect x="10" y="202" width="112" height="44" fill="#00c3ff"/>
  <text x="66" y="228" text-anchor="middle" class="t">12 × Items</text>
  <path d="M132 224h34" stroke="#3a3a3a" stroke-width="2.5" marker-end="url(#ts)"/>
  <rect x="176" y="202" width="180" height="44" fill="#9c70fc"/>
  <text x="266" y="228" text-anchor="middle" class="t">embedding Item</text>
  <path d="M366 224h34" stroke="#3a3a3a" stroke-width="2.5" marker-end="url(#ts)" stroke-dasharray="4 3"/>
  <rect x="410" y="202" width="310" height="44" fill="none" stroke="#ff495d" stroke-width="2.5"/>
  <text x="565" y="229" text-anchor="middle" class="t">derived_from → 12 source Items</text>
</svg>
`,h=[`innerHTML`],g=e({__name:`Diagram`,props:{name:{}},setup(e){let{$slidev:g,$nav:_,$clicksContext:v,$clicks:y,$page:b,$renderContext:x,$frontmatter:S}=i(),C=e,w=Object.assign({"../diagrams/asset-scope.svg":a,"../diagrams/chip-to-vector.svg":o,"../diagrams/chip-vs-pixel.svg":s,"../diagrams/image-to-vector.svg":c,"../diagrams/items-or-rows.svg":l,"../diagrams/majortom-grid.svg":u,"../diagrams/overlap-stride.svg":d,"../diagrams/result-context.svg":f,"../diagrams/two-pass.svg":p,"../diagrams/two-shapes.svg":m}),T=n(()=>{let e=w[`../diagrams/${C.name}.svg`];return e||console.warn(`[deck] no diagram named "${C.name}" in ./diagrams/`),e??``});return(e,n)=>(t(),r(`div`,{class:`diagram-slot`,innerHTML:T.value},null,8,h))}});export{g as t};