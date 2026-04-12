import svgPaths from "./svg-26off0hr06";

function Container2() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p130fc908} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(100,138,255,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">Good morning, Sarah.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Heading1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[16px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[26px]">{`I've synchronized your Q3 data. There are `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[26px] not-italic text-[#b5c4ff]">4 critical compliance actions</span>
          <span className="leading-[26px]">{` requiring your`}</span>
        </p>
        <p className="leading-[26px]">attention today. The pipeline is primed for full automated verification.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container1 />
        <Container3 />
      </div>
    </div>
  );
}

function SectionAiWelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-[#1b1c1e] relative rounded-[16px] shrink-0 to-[#121315] w-full" data-name="Section - AI Welcome Banner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[36px] pr-[32px] py-[32px] relative w-full">
          <div className="absolute bg-[rgba(181,196,255,0.05)] blur-[32px] inset-[-20%_-4.98%_-36.1%_78.75%] rounded-[9999px]" data-name="Overlay+Blur" />
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#b5c4ff] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[9px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Container">
          <path d={svgPaths.p3cb704d0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container4 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">ANALYSIS PIPELINE</p>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[16px] w-full">
        <p className="leading-[16px]">Step 1: Analysis</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
        <p className="leading-[16px]">Scanning Ledger vs GST portal returns</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">COMPLETE</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">1,402 REC MATCHED</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[9.508px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50833 7.01458">
        <g id="Container">
          <path d={svgPaths.p25f8ca80} fill="var(--fill-0, #00297B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#b5c4ff] content-stretch flex items-center justify-center left-[-28px] rounded-[9999px] size-[24px] top-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_#121315] size-[24px] top-0" data-name="Overlay+Shadow" />
      <Container9 />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step 1">
      <Container5 />
      <Background />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[16px] w-full">
        <p className="leading-[16px]">Step 2: Decision</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
        <p className="leading-[16px]">Classifying risk and validation states</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1e293b] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#b5c4ff] inset-[0_35.01%_0_0] shadow-[0px_0px_8px_0px_rgba(181,196,255,0.4)]" data-name="Background+Shadow" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container11 />
      <Background1 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(181,196,255,0.2)] content-stretch flex items-center justify-center left-[-28px] p-px rounded-[9999px] size-[24px] top-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#b5c4ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_#121315] size-[24px] top-0" data-name="Overlay+Shadow" />
      <div className="bg-[#b5c4ff] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step 2">
      <Container10 />
      <OverlayBorder />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-full">
        <p className="leading-[16px]">Step 3: Action</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-full">
        <p className="leading-[16px]">Executing rectification workflows</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">3</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#1e293b] content-stretch flex items-center justify-center left-[-28px] p-px rounded-[9999px] size-[24px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_#121315] size-[24px] top-0" data-name="Overlay+Shadow" />
      <Container14 />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step 3">
      <Container12 />
      <BackgroundBorder1 />
    </div>
  );
}

function VerticalStepper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Vertical Stepper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start pl-[32px] pt-[8px] relative w-full">
        <div className="absolute bg-[#1e293b] bottom-[8px] left-[11px] top-[16px] w-[2px]" data-name="Line" />
        <Step />
        <Step1 />
        <Step2 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #00297B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(167.815deg, rgb(181, 196, 255) 0%, rgb(100, 138, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center justify-center py-[16px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(181,196,255,0.2),0px_8px_10px_-6px_rgba(181,196,255,0.2)]" data-name="Button:shadow" />
        <Container15 />
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[16px] text-center tracking-[-0.4px] whitespace-nowrap">
          <p className="leading-[24px]">Run Full Analysis</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#1f2022] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[25px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Heading2 />
        <VerticalStepper />
        <Button />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">HEALTH METRIC</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
          <Heading6 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">94.2</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
        <g id="Container">
          <path d={svgPaths.p313692c0} fill="var(--fill-0, #4ADE80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container21 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">+2.1%</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-end pt-[8px] relative w-full">
        <Container19 />
        <Margin />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.275px] uppercase w-full">
          <p className="leading-[16.5px]">COMPLIANCE CONFIDENCE SCORE</p>
        </div>
      </div>
    </div>
  );
}

function AiInsightsMiniCard() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[16px] shrink-0 w-full" data-name="AI Insights Mini-Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative w-full">
        <Container16 />
        <Container18 />
        <Container22 />
      </div>
    </div>
  );
}

function LeftPipelineControl4Columns() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[153.5px] relative row-1 self-start shrink-0" data-name="Left: Pipeline Control (4 Columns)">
      <BackgroundBorder />
      <AiInsightsMiniCard />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(181,196,255,0.2)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[20px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-full relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#b5c4ff] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pb-[2px] px-[8px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Action Required</p>
        </div>
        <Overlay2 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-full relative shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center pb-[18px] pt-[17px] px-[8px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Decision Log</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-full relative shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center pb-[18px] pt-[17px] px-[8px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Data Integrity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabsHeader() {
  return (
    <div className="bg-[#292a2c] h-[56px] relative shrink-0 w-full" data-name="Tabs Header">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pb-px px-[24px] relative size-full">
          <Button1 />
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(181,196,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">01</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <Border />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">DUE: NOV 15</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Reconcile ITC Mismatch</p>
      </div>
      <Container26 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute font-normal h-[57.5px] leading-[0] left-0 right-0 text-[14px] top-[32px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 not-italic text-[#c3c5d7] top-[10.5px]">
        <p className="leading-[22.75px]">{`System detected a discrepancy of `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] justify-center left-[229.75px] text-[#ffb692] top-[11px]">
        <p className="leading-[22.75px]">₹42,350</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-[287.14px] not-italic text-[#c3c5d7] top-[10.5px]">
        <p className="leading-[22.75px]">{` in input tax credit from vendor`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 not-italic text-[#c3c5d7] top-[33.25px]">
        <p>
          <span className="[text-decoration-skip-ink:none] decoration-[#475569] decoration-solid leading-[22.75px] underline">Global Logistics Ltd</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic">.</span>
        </p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">HOW-TO-SOLVE</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(227,226,229,0.8)] w-full">
        <p className="leading-[19.5px] mb-0">Initiate a formal query via the GST portal to Global Logistics regarding their</p>
        <p className="leading-[19.5px]">GSTR-1 filing for Sep FY24. If unresolved, claim reversal in next filing.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#0d0e10] content-stretch flex flex-col gap-[8px] items-start left-0 p-[16px] right-0 rounded-[12px] top-[93.5px]" data-name="Background">
      <Heading7 />
      <Container29 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#334155] content-stretch flex items-center justify-center pb-[5px] pt-[4px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#121315] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[15px]">JD</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-[#475569] content-stretch flex items-center justify-center left-[-8px] pb-[5px] pt-[4px] px-px rounded-[9999px] size-[24px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#121315] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[15px]">ML</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <BackgroundBorder2 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Mark Done</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container31 />
        <div className="bg-[#1e293b] relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
          <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pt-[9px] right-0 top-[203.5px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container30 />
      <Label />
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <Paragraph />
        <Background2 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function StepCard() {
  return (
    <div className="bg-[#1b1c1e] h-[82px] relative rounded-[16px] shrink-0 w-full" data-name="Step Card 1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[20px] items-start p-[21px] relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">02</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <Border1 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">DUE: NOV 18</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Update HSN Mapping</p>
      </div>
      <Container35 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute font-normal h-[57.5px] leading-[0] left-0 right-0 text-[14px] top-[32px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 not-italic text-[#c3c5d7] top-[10.5px]">
        <p className="leading-[22.75px]">{`New regulatory changes require updating HSN codes for `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] justify-center left-[379.12px] text-[#b5c4ff] top-[11px]">
        <p className="leading-[22.75px]">CAT-82</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] justify-center left-0 text-[#b5c4ff] top-[33.75px]">
        <p className="leading-[22.75px]">Services</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-[67.2px] not-italic text-[#c3c5d7] top-[33.25px]">
        <p className="leading-[22.75px]">{` from 12% to 18% slab.`}</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">HOW-TO-SOLVE</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(227,226,229,0.8)] w-full">
        <p className="leading-[19.5px] mb-0">Run the AI HSN-mapper to auto-update the product catalog and push sync to the</p>
        <p className="leading-[19.5px]">main ERP database.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#0d0e10] content-stretch flex flex-col gap-[8px] items-start left-0 p-[16px] right-0 rounded-[12px] top-[93.5px]" data-name="Background">
      <Heading8 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[7.292px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7.29167">
        <g id="Container">
          <path d={svgPaths.p1a93dc80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">NEW_GUIDELINE_V2.PDF</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Mark Done</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container42 />
        <div className="bg-[#1e293b] relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
          <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pt-[9px] right-0 top-[203.5px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container39 />
      <Label1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container34 />
        <Paragraph1 />
        <Background3 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function StepCard1() {
  return (
    <div className="bg-[#1b1c1e] h-[82px] relative rounded-[16px] shrink-0 w-full" data-name="Step Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[20px] items-start p-[21px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#334155] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">03</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <Border2 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] w-full">
        <p className="leading-[28px]">Batch Verify Digital Signatures</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Required for 432 outward invoices.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading9 />
        <Container45 />
      </div>
    </div>
  );
}

function StepCard3ActionOnlySummary() {
  return (
    <div className="h-[90px] opacity-70 relative rounded-[16px] shrink-0 w-full" data-name="Step Card 3 (Action Only Summary)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#1b1c1e] inset-0 rounded-[16px]" />
        <div className="absolute bg-[rgba(255,255,255,0.5)] inset-0 mix-blend-saturation rounded-[16px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[20px] items-start p-[21px] relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function TabContentActionList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab Content: Action List">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <StepCard />
        <StepCard1 />
        <StepCard3ActionOnlySummary />
      </div>
    </div>
  );
}

function RightOutputActionTabs8Columns() {
  return (
    <div className="bg-[#121315] col-[5/span_8] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-start shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Right: Output & Action Tabs (8 Columns)">
      <TabsHeader />
      <TabContentActionList />
    </div>
  );
}

function GridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_779px] relative shrink-0 w-full" data-name="Grid Layout">
      <LeftPipelineControl4Columns />
      <RightOutputActionTabs8Columns />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative w-full">
        <SectionAiWelcomeBanner />
        <GridLayout />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p210dd580} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[normal]">Search records...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-[192px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[10px] pt-[9px] px-[12px] relative rounded-[inherit] w-full">
        <Container48 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#0d0e10] content-stretch flex gap-[12px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container47 />
      <Input />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#60a5fa] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Period: Q3 FY24</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">All Entities</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <HorizontalBorder2 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <BackgroundBorder4 />
        <Container49 />
      </div>
    </div>
  );
}

function Container52() {
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

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#292a2c] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container53 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Button4 />
        <BackgroundBorder5 />
      </div>
    </div>
  );
}

function HeaderTopNavBarAnchor() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.6)] content-stretch flex h-[64px] items-center justify-between left-[240px] pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar Anchor">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container46 />
      <Container51 />
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

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">THE DIGITAL VAULT</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Heading />
        <Container55 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Container54 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p498ff00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container57 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p29a33480} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container60 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p152cb200} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GST Centre</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p841cf00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container66 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.pb1c89c0} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AI Agent</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container68 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p2233f880} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Health</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2173abc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[16.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.75 16.6667">
        <g id="Container">
          <path d={svgPaths.p18e22d80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container56 />
        <Container59 />
        <Container62 />
        <Container65 />
        <Overlay3 />
        <Container70 />
        <Container73 />
        <Container76 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(168deg, rgb(181, 196, 255) 0%, rgb(100, 138, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[12px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(59,130,246,0.2),0px_4px_6px_-4px_rgba(59,130,246,0.2)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Run AI Analysis</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function AsideSideNavBarAnchor() {
  return (
    <div className="absolute bg-[#020617] content-stretch flex flex-col h-[1103px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[16px] top-0 w-[240px]" data-name="Aside - SideNavBar Anchor">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1103px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] top-0 w-[240px]" data-name="Aside - SideNavBar Anchor:shadow" />
      <Margin2 />
      <Nav />
      <HorizontalBorder3 />
    </div>
  );
}

export default function AiComplianceAgent() {
  return (
    <div className="bg-[#121315] content-stretch flex flex-col items-start pl-[240px] pt-[64px] relative size-full" data-name="AI Compliance Agent">
      <MainContentCanvas />
      <HeaderTopNavBarAnchor />
      <AsideSideNavBarAnchor />
    </div>
  );
}