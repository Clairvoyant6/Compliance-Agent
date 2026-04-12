import svgPaths from "./svg-s109d3gdwb";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[30px] tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">Transactions</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Review, filter, and reconcile your fiscal movements.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[386.58px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="var(--fill-0, #E3E2E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#292a2c] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Export Ledger</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-[29.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 21.3333">
        <g id="Container">
          <path d={svgPaths.p357ea5e0} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#292a2c] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-1/2" data-name="Overlay+Shadow" />
      <Container4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[18px] whitespace-nowrap">
          <p className="leading-[28px]">Import Transaction Data</p>
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[4px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Drag and drop your .csv or .json files here, or browse files</p>
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(30,41,59,0.4)] relative rounded-[4px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">ERP CONNECT</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(30,41,59,0.4)] relative rounded-[4px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">DIRECT API</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(30,41,59,0.4)] relative rounded-[4px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">BANK STATEMENTS</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[23px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-full items-start relative">
        <Overlay />
        <Overlay1 />
        <Overlay2 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(13,14,16,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(67,70,85,0.5)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[50px] relative w-full">
          <Margin />
          <Heading2 />
          <Margin1 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function SectionUploadZone() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section - Upload Zone">
      <div className="absolute bg-[rgba(181,196,255,0.05)] blur-[12px] inset-0 opacity-0 rounded-[12px]" data-name="Overlay+Blur" />
      <OverlayBorder />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FILTERS:</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[4.317px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.31667">
        <g id="Container">
          <path d={svgPaths.p1a9c9340} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">All Records</p>
      </div>
      <Container9 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#343537] content-stretch flex gap-[8px] items-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-[#10b981] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Income</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#343537] content-stretch flex gap-[8px] items-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-[#3b82f6] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Expense</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
        <g id="Container">
          <path d={svgPaths.p2e0ed180} fill="var(--fill-0, #FFB4AB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,180,171,0.1)] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container10 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Missing GSTIN</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Clear All Filters</p>
        </div>
      </div>
    </div>
  );
}

function SectionFilterBar() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Section - Filter Bar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Container6 />
          <div className="bg-[rgba(255,255,255,0.1)] h-[24px] shrink-0 w-px" data-name="Vertical Divider" />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[92px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">DATE</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[108.52px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">TYPE</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[158.3px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">DESCRIPTION</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[140.41px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">AMOUNT</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[80.88px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">GST</p>
        <p className="leading-[normal]">RATE</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[106.7px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">HSN/SAC</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[109.08px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">PARTY</p>
        <p className="leading-[normal]">NAME</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[174px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">PARTY GSTIN</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[rgba(41,42,44,0.5)] content-stretch flex items-start justify-center pr-[140.4px] relative shrink-0 w-[1110.28px]" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[26.5px] pl-[26px] pr-[24px] pt-[26px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">2024-</p>
          <p className="leading-[20px]">08-12</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[10px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">INCOME</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[108.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[38.5px] pt-[38px] px-[24px] relative w-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[158.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Service</p>
          <p className="leading-[20px] mb-0">Revenue - Q3</p>
          <p className="leading-[20px]">Project Beta</p>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[140.41px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[26.5px] pt-[26px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">₹</p>
          <p className="leading-[20px]">1,24,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[80.88px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36.5px] pt-[36px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">18%</p>
        </div>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[106.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36.5px] pt-[36px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">998311</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Global</p>
          <p className="leading-[20px] mb-0">Tech</p>
          <p className="leading-[20px]">Solutions</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[174px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36.5px] pt-[36px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">27AAAAA0000A1Z5</p>
        </div>
      </div>
    </div>
  );
}

function Row1Income() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 1: Income">
      <div aria-hidden="true" className="absolute border-[#10b981] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[4px] pr-[140.4px] relative w-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
          <Data5 />
          <Data6 />
          <Data7 />
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[26px] pr-[24px] py-[26.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">2024-</p>
          <p className="leading-[20px]">08-14</p>
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">EXPENSE</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[108.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[38.5px] relative w-full">
        <Overlay4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6667">
        <g id="Container">
          <path d={svgPaths.pc531a80} fill="var(--fill-0, #FFB692)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[158.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[35.97px] items-center px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Cloud</p>
          <p className="leading-[20px] mb-0">Hosting</p>
          <p className="leading-[20px]">Services</p>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[140.41px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹ 45,600.00</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[80.88px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">18%</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[106.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">997331</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Azure</p>
          <p className="leading-[20px] mb-0">Cloud</p>
          <p className="leading-[20px]">Ops</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[174px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffb692] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">MISSING</p>
        </div>
      </div>
    </div>
  );
}

function Row2ExpenseWithWarning() {
  return (
    <div className="bg-[rgba(233,108,31,0.05)] mb-[-1px] relative shrink-0 w-full" data-name="Row 2: Expense with Warning">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-l-4 border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[4px] pr-[140.4px] pt-px relative w-full">
          <Data8 />
          <Data9 />
          <Data10 />
          <Data11 />
          <Data12 />
          <Data13 />
          <Data14 />
          <Data15 />
        </div>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[26px] pr-[24px] py-[26.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">2024-</p>
          <p className="leading-[20px]">08-15</p>
        </div>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[10px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">INCOME</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[108.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[38.5px] relative w-full">
        <Overlay5 />
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[158.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Product Sale -</p>
          <p className="leading-[20px] mb-0">Enterprise</p>
          <p className="leading-[20px]">License</p>
        </div>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[140.41px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[26.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">₹</p>
          <p className="leading-[20px]">8,90,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[80.88px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">12%</p>
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[106.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">8523</p>
        </div>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[27px] pt-[26px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Apex</p>
          <p className="leading-[20px]">Corp Ltd</p>
        </div>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[174px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">07AAACA1234B1Z1</p>
        </div>
      </div>
    </div>
  );
}

function Row3Income() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 3: Income">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-l-4 border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[4px] pr-[140.4px] pt-px relative w-full">
          <Data16 />
          <Data17 />
          <Data18 />
          <Data19 />
          <Data20 />
          <Data21 />
          <Data22 />
          <Data23 />
        </div>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[26px] pr-[24px] py-[26.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">2024-</p>
          <p className="leading-[20px]">08-16</p>
        </div>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">EXPENSE</p>
      </div>
    </div>
  );
}

function Data25() {
  return (
    <div className="relative shrink-0 w-[108.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[38.5px] relative w-full">
        <Overlay6 />
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="relative shrink-0 w-[158.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[27px] pt-[26px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Office Lease -</p>
          <p className="leading-[20px]">Mumbai HQ</p>
        </div>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[140.41px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[26.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">₹</p>
          <p className="leading-[20px]">2,50,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0 w-[80.88px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">18%</p>
        </div>
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0 w-[106.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">997212</p>
        </div>
      </div>
    </div>
  );
}

function Data30() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Elite</p>
          <p className="leading-[20px] mb-0">Realty</p>
          <p className="leading-[20px]">Group</p>
        </div>
      </div>
    </div>
  );
}

function Data31() {
  return (
    <div className="relative shrink-0 w-[174px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">27BBBBB1111C1Z0</p>
        </div>
      </div>
    </div>
  );
}

function Row4Expense() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 4: Expense">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-l-4 border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[4px] pr-[140.4px] pt-px relative w-full">
          <Data24 />
          <Data25 />
          <Data26 />
          <Data27 />
          <Data28 />
          <Data29 />
          <Data30 />
          <Data31 />
        </div>
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="relative shrink-0 w-[92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[26px] pl-[26px] pr-[24px] pt-[26.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">2024-</p>
          <p className="leading-[20px]">08-18</p>
        </div>
      </div>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">EXPENSE</p>
      </div>
    </div>
  );
}

function Data33() {
  return (
    <div className="relative shrink-0 w-[108.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[38px] pt-[38.5px] px-[24px] relative w-full">
        <Overlay7 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6667">
        <g id="Container">
          <path d={svgPaths.pc531a80} fill="var(--fill-0, #FFB692)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data34() {
  return (
    <div className="relative shrink-0 w-[158.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.98px] items-center px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Hardware</p>
          <p className="leading-[20px]">Procurement</p>
        </div>
        <Container12 />
      </div>
    </div>
  );
}

function Data35() {
  return (
    <div className="relative shrink-0 w-[140.41px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[26px] pt-[26.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">₹</p>
          <p className="leading-[20px]">1,12,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Data36() {
  return (
    <div className="relative shrink-0 w-[80.88px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pt-[36.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">18%</p>
        </div>
      </div>
    </div>
  );
}

function Data37() {
  return (
    <div className="relative shrink-0 w-[106.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pt-[36.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">8471</p>
        </div>
      </div>
    </div>
  );
}

function Data38() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Local</p>
          <p className="leading-[20px] mb-0">Vendor</p>
          <p className="leading-[20px]">(B2C)</p>
        </div>
      </div>
    </div>
  );
}

function Data39() {
  return (
    <div className="relative shrink-0 w-[174px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pt-[36.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffb692] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">MISSING</p>
        </div>
      </div>
    </div>
  );
}

function Row5ExpenseWithWarning() {
  return (
    <div className="bg-[rgba(233,108,31,0.05)] mb-[-1px] relative shrink-0 w-full" data-name="Row 5: Expense with Warning">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-l-4 border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[4px] pr-[140.4px] pt-px relative w-full">
          <Data32 />
          <Data33 />
          <Data34 />
          <Data35 />
          <Data36 />
          <Data37 />
          <Data38 />
          <Data39 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-[1114.28px]" data-name="Body">
      <Row1Income />
      <Row2ExpenseWithWarning />
      <Row3Income />
      <Row4Expense />
      <Row5ExpenseWithWarning />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-[1112.28px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function SectionTransactionTable() {
  return (
    <div className="bg-[#0d0e10] relative rounded-[12px] shrink-0 w-[977px]" data-name="Section - Transaction Table">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="min-h-[1226px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start min-h-[inherit] pb-[133px] pt-[64px] px-[32px] relative w-full">
        <HeaderSection />
        <SectionUploadZone />
        <SectionFilterBar />
        <SectionTransactionTable />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[normal]">Search transactions...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[9px] px-[12px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(2,6,23,0.5)] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container14 />
      <Input />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#60a5fa] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Period: Q3 FY24</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">All Entities</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <HorizontalBorder />
      <Container17 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <OverlayBorder1 />
        <Container16 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start relative">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.6)] content-stretch flex h-[64px] items-center justify-between left-[240px] pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar Shell">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container18 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">TOTAL INCOME</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#34d399] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">₹ 10,14,000.00</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[149.39px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">TOTAL EXPENSES</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#60a5fa] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">₹ 4,07,600.00</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[138.59px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">EST. GST LIABILITY</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[18px] whitespace-nowrap">
          <p className="leading-[28px]">₹ 1,09,140.00</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[33px] relative self-stretch shrink-0 w-[171.59px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[43px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-full items-start relative">
        <Container22 />
        <Container25 />
        <VerticalBorder />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.25">
        <g id="Container">
          <path d={svgPaths.p10d9fd00} fill="var(--fill-0, #FFB692)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container32 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb692] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2 Pending GSTIN Records</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#b5c4ff] content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(181,196,255,0.2),0px_4px_6px_-4px_rgba(181,196,255,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Validate All Transactions</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container31 />
        <Button8 />
      </div>
    </div>
  );
}

function StickyFooterTotals() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(13,14,16,0.8)] bottom-0 content-stretch flex items-center justify-between left-[240px] pb-[16px] pt-[17px] px-[32px] right-0" data-name="Sticky Footer Totals">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-10px_30px_0px_rgba(0,0,0,0.5)]" />
      <Container21 />
      <Container30 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[20px] tracking-[-1px] w-full">
        <p className="leading-[28px]">ComplianceIQ</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">The Digital Vault</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Heading />
        <Container34 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function LinkActiveTransactions() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex gap-[12px] items-center pb-[8px] pt-[9px] px-[12px] relative rounded-[8px] w-[207px]" data-name="Link - ACTIVE: Transactions">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GST Centre</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[9px] px-[12px] relative w-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p130fc908} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AI Agent</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p3e7e25c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Health</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container45 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.pa053f40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Link />
        <div className="flex h-[35.15px] items-center justify-center relative shrink-0 w-[196.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
          <div className="flex-none scale-x-95 scale-y-95">
            <LinkActiveTransactions />
          </div>
        </div>
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
        <g id="Container">
          <path d={svgPaths.p1f7ec100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#2563eb] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <Container52 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Run AI Analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Button9 />
      </div>
    </div>
  );
}

function AsideSideNavBarShell() {
  return (
    <div className="absolute bg-[#020617] content-stretch flex flex-col h-[1226px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[16px] top-0 w-[240px]" data-name="Aside - SideNavBar Shell">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1226px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] top-0 w-[240px]" data-name="Aside - SideNavBar Shell:shadow" />
      <Margin2 />
      <Nav />
      <Container51 />
    </div>
  );
}

export default function TransactionsManagement() {
  return (
    <div className="bg-[#121315] content-stretch flex flex-col items-start pl-[240px] relative size-full" data-name="Transactions Management">
      <MainContentCanvas />
      <HeaderTopNavBarShell />
      <StickyFooterTotals />
      <AsideSideNavBarShell />
    </div>
  );
}