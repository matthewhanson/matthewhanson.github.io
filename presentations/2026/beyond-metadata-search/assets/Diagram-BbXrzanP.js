import{C as e,L as t,h as n,y as r}from"./modules/shiki-_IfpXcFA.js";import{rt as i}from"./index-COT-9bFm.js";var a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 250" class="diagram">
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
`,s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 255" class="diagram">
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
`,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 270" class="diagram">
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
`,l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 210" class="diagram">
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
`,u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 260" class="diagram">
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
`,d=[`innerHTML`],f=e({__name:`Diagram`,props:{name:{}},setup(e){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=i(),y=e,b=Object.assign({"../diagrams/asset-scope.svg":a,"../diagrams/chip-to-vector.svg":o,"../diagrams/items-or-rows.svg":s,"../diagrams/result-context.svg":c,"../diagrams/two-pass.svg":l,"../diagrams/two-shapes.svg":u}),x=n(()=>{let e=b[`../diagrams/${y.name}.svg`];return e||console.warn(`[deck] no diagram named "${y.name}" in ./diagrams/`),e??``});return(e,n)=>(t(),r(`div`,{class:`diagram-slot`,innerHTML:x.value},null,8,d))}});export{f as t};