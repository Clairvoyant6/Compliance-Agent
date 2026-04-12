import svgPaths from "./svg-t2pnvt1mrr";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ECOSYSTEM</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">/</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative self-stretch shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DIAGNOSTICS</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Nav">
      <Container1 />
      <Margin />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[36px] tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[36px]">Compliance Health</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[323.05px]" data-name="Container">
      <Nav />
      <Heading1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CRITICAL</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,180,171,0.1)] content-stretch flex gap-[8px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#ffb4ab] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <OverlayBorder />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header Section">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative w-full">
          <Container />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[57.67px] pb-[32px] top-[74px]" data-name="Heading 3:margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(195,197,215,0.6)] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">HEALTH COMPOSITE SCORE</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">DEDUCTIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffb4ab] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">-32.4</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(52,53,55,0.4)] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative w-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">ACCURACY</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">94.1%</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(52,53,55,0.4)] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_69px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder1 />
      <OverlayBorder2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] pt-[32px] right-[32px] top-[378px]" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative size-[256px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 256">
        <g id="SVG">
          <path d={svgPaths.p1e7d8a40} id="Vector" stroke="var(--stroke-0, #292A2C)" strokeWidth="12" />
          <g filter="url(#filter0_d_1_291)" id="Vector_2">
            <path d={svgPaths.p1e7d8a40} shapeRendering="crispEdges" stroke="var(--stroke-0, #FFB4AB)" strokeLinecap="round" strokeWidth="12" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="228" id="filter0_d_1_291" width="228" x="14" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.705882 0 0 0 0 0.670588 0 0 0 0.4 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_291" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_291" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[72px] tracking-[-3.6px] whitespace-nowrap">
        <p className="leading-[72px]">68</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">/ 100</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <Container13 />
      <Margin2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-[calc(50%-26.5px)]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[256px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg />
        </div>
      </div>
      <Container12 />
    </div>
  );
}

function HealthScoreGaugeCard() {
  return (
    <div className="bg-[#1b1c1e] col-[1/span_4] h-[553px] justify-self-stretch overflow-clip relative rounded-[16px] row-1 shrink-0" data-name="Health Score Gauge Card">
      <Heading3Margin />
      <Margin1 />
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(119.221deg, rgba(255, 180, 171, 0.05) 0%, rgba(255, 180, 171, 0) 100%)" }} />
      <Container11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SCORE HISTORY (6 MONTHS)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[rgba(181,196,255,0.4)] rounded-[9999px] shrink-0 size-[8px]" data-name="Overlay" />
      <div className="bg-[#b5c4ff] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading2 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[43.71%] opacity-0 right-[43.72%] top-[-24px]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">85</p>
      </div>
    </div>
  );
}

function ChartMockupCssGridFlexColumns() {
  return (
    <div className="bg-[rgba(181,196,255,0.2)] flex-[1_0_0] h-[163.19px] min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Chart Mockup (CSS Grid/Flex Columns)">
      <Container17 />
    </div>
  );
}

function GridLines() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[12px_0_0_0] items-start justify-between opacity-10" data-name="Grid Lines">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      </div>
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      </div>
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[43.71%] right-[43.72%] top-[-22px]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffb4ab] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">68</p>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(255,180,171,0.4)] flex-[1_0_0] h-[130.55px] min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ffb4ab] border-solid border-t-2 inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center overflow-clip pt-[12px] relative rounded-[inherit] size-full">
        <ChartMockupCssGridFlexColumns />
        <GridLines />
        <div className="bg-[rgba(181,196,255,0.2)] flex-[1_0_0] h-[149.75px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(181,196,255,0.2)] flex-[1_0_0] h-[157.44px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(181,196,255,0.4)] flex-[1_0_0] h-[134.39px] min-h-px min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay+HorizontalBorder">
          <div aria-hidden="true" className="absolute border-[#b5c4ff] border-solid border-t-2 inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
        </div>
        <OverlayHorizontalBorder />
        <div className="bg-[#343537] flex-[1_0_0] h-[19.19px] min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(195,197,215,0.4)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">OCT 23</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(195,197,215,0.4)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">NOV 23</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(195,197,215,0.4)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">DEC 23</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(195,197,215,0.4)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">JAN 24</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(195,197,215,0.4)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">FEB 24</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(195,197,215,0.4)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">MAR 24 (PROJ)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container20 />
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function ComplianceScoreHistoryChart() {
  return (
    <div className="bg-[#1f2022] relative rounded-[16px] shrink-0 w-full" data-name="Compliance Score History Chart">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[25px] relative w-full">
        <Container14 />
        <Container16 />
        <Container19 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2302ea80} fill="var(--fill-0, #FFB4AB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CRITICAL ISSUES (4)</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container28 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">GST GSTR-3B Mismatch</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">₹4.2M Variance detected in ITCs</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[153.72px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <Container30 />
        <div className="h-[11.667px] relative shrink-0 w-[6.869px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.86875 11.6667">
            <path d={svgPaths.p10db3b80} fill="var(--fill-0, #FFB4AB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Unmapped PAN Records</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">8 vendor IDs missing valid PAN</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[146.92px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <Container33 />
        <div className="h-[11.667px] relative shrink-0 w-[6.869px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.86875 11.6667">
            <path d={svgPaths.p10db3b80} fill="var(--fill-0, #FFB4AB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Background />
        <Background1 />
      </div>
    </div>
  );
}

function CriticalIssues() {
  return (
    <div className="bg-[rgba(147,0,10,0.1)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Critical Issues">
      <div aria-hidden="true" className="absolute border border-[rgba(255,180,171,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container27 />
        <Container29 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.25">
        <g id="Container">
          <path d={svgPaths.pa72a700} fill="var(--fill-0, #FFB692)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb692] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">WARNINGS (12)</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container37 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">E-Way Bill Expiry</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">{`3 Shipments expiring in < 2hrs`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[144px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <Container39 />
        <div className="h-[11.667px] relative shrink-0 w-[6.869px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.86875 11.6667">
            <path d={svgPaths.p10db3b80} fill="var(--fill-0, #FFB692)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">TDS Deposit Delay</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Upcoming deadline: March 07</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[141.84px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <Container42 />
        <div className="h-[11.667px] relative shrink-0 w-[6.869px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.86875 11.6667">
            <path d={svgPaths.p10db3b80} fill="var(--fill-0, #FFB692)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Background2 />
        <Background3 />
      </div>
    </div>
  );
}

function Warnings() {
  return (
    <div className="bg-[rgba(233,108,31,0.1)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Warnings">
      <div aria-hidden="true" className="absolute border border-[rgba(255,182,146,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container36 />
        <Container38 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_216px] relative shrink-0 w-full" data-name="Container">
      <CriticalIssues />
      <Warnings />
    </div>
  );
}

function RiskSignalsHistory() {
  return (
    <div className="col-[5/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Risk Signals & History">
      <ComplianceScoreHistoryChart />
      <Container26 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">GSTIN VALIDATION PANEL</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Real-time status of top registered entity identifiers</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[237px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading5 />
        <Container46 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#343537] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[7px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Export Ledger</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pl-[24px] pr-[23.99px] pt-[24px] relative w-full">
          <Container45 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[192.05px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ENTITY NAME</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[180.64px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">GSTIN ID</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[193.98px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">VALIDATION STATUS</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[149.28px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">FILING SCORE</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[141.27px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">LAST CHECK</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[116.78px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ACTIONS</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[rgba(13,14,16,0.5)] content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[19px] pt-[17.5px] px-[24px] relative shrink-0 w-[192.05px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Global Logistics Pvt</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[18.5px] pt-[18px] px-[24px] relative shrink-0 w-[180.64px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">27AADCC9988G1Z1</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(34,197,94,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">VALID</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17.5px] pt-[17px] px-[24px] relative shrink-0 w-[193.98px]" data-name="Data">
      <OverlayBorder3 />
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[18.5px] pt-[18px] px-[24px] relative shrink-0 w-[149.28px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">98.5%</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.5px] pt-[20px] px-[24px] relative shrink-0 w-[141.27px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] whitespace-nowrap">
        <p className="leading-[normal]">6 mins ago</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[116.78px]" data-name="Data">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.78 42.5">
        <g id="Data">
          <path d={svgPaths.pdc11800} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[192.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[19px] pt-[18px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Stellar Dynamics Co</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[180.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[18.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">07AAECS1234F1Z9</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(255,180,171,0.1)] content-stretch flex items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">REJECTED</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[193.98px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[17.5px] relative w-full">
        <OverlayBorder4 />
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[149.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[18.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">42.0%</p>
        </div>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[141.27px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[20.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] whitespace-nowrap">
          <p className="leading-[normal]">24 mins ago</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="h-[43.5px] relative shrink-0 w-[116.78px]" data-name="Data">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.78 43.5">
        <g id="Data">
          <path d={svgPaths.pcf738c0} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[192.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[18.5px] pt-[18px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Neo Retail Solutions</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[180.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[18px] pt-[18.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">33AABCR5678B1Z4</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(255,182,146,0.1)] content-stretch flex items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,182,146,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb692] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">PENDING</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[193.98px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[17.5px] px-[24px] relative w-full">
        <OverlayBorder5 />
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[149.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[18px] pt-[18.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">--%</p>
        </div>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[141.27px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] pt-[20.5px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] whitespace-nowrap">
          <p className="leading-[normal]">1 hr ago</p>
        </div>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[116.78px]" data-name="Data">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.78 42.5">
        <g id="Data">
          <path d={svgPaths.pdc11800} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function GstinValidationTable() {
  return (
    <div className="bg-[#1f2022] col-[1/span_12] justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="GSTIN Validation Table">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <HorizontalBorder />
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[14px] tracking-[1.4px] uppercase w-full">
          <p className="leading-[20px]">AI INSIGHT ENGINE</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.p8d95a00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Predictive Risk Alert</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.685px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(195,197,215,0.8)] whitespace-nowrap">
        <p className="leading-[17.88px] mb-0">Based on current transaction velocity,</p>
        <p className="leading-[17.88px] mb-0">{`there's an 84% probability of a GSTR-`}</p>
        <p className="leading-[17.88px] mb-0">2A mismatch in the next filing cycle for</p>
        <p className="leading-[17.88px]">the Delhi jurisdiction.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[2.815px] items-start relative self-stretch shrink-0 w-[201.52px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container50 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(195,197,215,0.6)] tracking-[-0.5px] uppercase w-full">
          <p className="leading-[15px]">RECOMMENDED ACTION</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] w-full">
          <p className="leading-[16px] mb-0">Trigger Reconciliation workflow for top</p>
          <p className="leading-[16px]">50 vendors immediately.</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#34467e] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a5b6f6] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">EXECUTE AI PATCH</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0d0e10] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container53 />
        <Container54 />
        <Button1 />
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Separator">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">TOP RISK FACTORS</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Vendor Non-compliance</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#343537] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-[96px]" data-name="Background">
      <div className="absolute bg-[#ffb4ab] inset-[0_20%_0_0]" data-name="Background" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Background4 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Document Integrity</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#343537] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-[96px]" data-name="Background">
      <div className="absolute bg-[#b5c4ff] inset-[0_70%_0_0]" data-name="Background" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Background5 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Statutory Deadlines</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#343537] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-[96px]" data-name="Background">
      <div className="absolute bg-[#ffb692] inset-[0_40.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Background6 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container60 />
      <Container62 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container48 />
        <BackgroundBorder />
        <Separator />
        <Container55 />
      </div>
    </div>
  );
}

function RiskIntelligenceSidebarPanel() {
  return (
    <div className="bg-[#292a2c] col-[1/span_4] justify-self-stretch relative rounded-[16px] row-3 self-start shrink-0" data-name="Risk Intelligence Sidebar / Panel">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
        <Heading6 />
        <Container47 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[20px] tracking-[-0.5px] w-full">
        <p className="leading-[28px]">Anomaly Detection Active</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Our neural network is currently scanning 12,403 transactions</p>
        <p className="leading-[22.75px] mb-0">for structural compliance markers. Real-time protection is</p>
        <p className="leading-[22.75px] mb-0">active and shielding your ledger from 14 potential penalizing</p>
        <p className="leading-[22.75px]">events.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ENGINE STABLE</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#4ade80] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">LATENCY: 24MS</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#60a5fa] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container70 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31.9px] items-start pt-[16.9px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container69 />
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.1px] items-start relative w-full">
        <Heading7 />
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          <path d={svgPaths.p15b21300} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#343537] relative rounded-[9999px] shrink-0 size-[128px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-4 border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
        <Container71 />
        <div className="absolute inset-[4px] rounded-[9999px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function FocusOnRiskSignalsBottomSection() {
  return (
    <div className="bg-gradient-to-r col-[5/span_8] from-[#1b1c1e] h-[507px] justify-self-stretch relative rounded-[16px] row-3 shrink-0 to-[#1f2022]" data-name="Focus on Risk Signals (Bottom Section)">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[33px] relative size-full">
          <Container64 />
          <BackgroundBorder1 />
        </div>
      </div>
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___553px_292px_507px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <HealthScoreGaugeCard />
      <RiskSignalsHistory />
      <GstinValidationTable />
      <RiskIntelligenceSidebarPanel />
      <FocusOnRiskSignalsBottomSection />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="bg-[#121315] min-h-[1602px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start min-h-[inherit] pb-[47px] pt-[64px] px-[32px] relative w-full">
        <HeaderSection />
        <BentoGridLayout />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[normal]">Search compliance vault...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#020617] content-stretch flex items-start justify-center overflow-clip pb-[7px] pl-[40px] pr-[16px] pt-[6px] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
      <Container76 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container75 />
    </div>
  );
}

function Link() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#60a5fa] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col h-full items-start pb-[6px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Period: Q3 FY24</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">All Entities</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[26px] items-start relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Container73 />
        <Nav1 />
      </div>
    </div>
  );
}

function Container78() {
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

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container78 />
    </div>
  );
}

function Container79() {
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

function BackgroundBorder2() {
  return (
    <div className="bg-[#1e293b] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container79 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Button2 />
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function HeaderTopNavBarFromJson() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.6)] content-stretch flex h-[64px] items-center justify-between left-[240px] pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar (from JSON)">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container72 />
      <Container77 />
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

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">THE DIGITAL VAULT</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[8px] relative w-full">
        <Heading />
        <Container81 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Container80 />
      </div>
    </div>
  );
}

function Container82() {
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

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container82 />
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container84 />
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
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

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GST Centre</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container86 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
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

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container88 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.pb1c89c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AI Agent</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container90 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p3b16e400} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Health</p>
      </div>
    </div>
  );
}

function LinkActiveStateHealth() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active State: Health">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container92 />
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
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

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container94 />
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
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

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container96 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <LinkActiveStateHealth />
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#b5c4ff] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(181,196,255,0.2),0px_4px_6px_-4px_rgba(181,196,255,0.2)]" data-name="Button:shadow" />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Run AI Analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative w-full">
        <Button3 />
      </div>
    </div>
  );
}

function AsideSideNavBarFromJson() {
  return (
    <div className="absolute bg-[#020617] content-stretch flex flex-col h-[1602px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[16px] top-0 w-[240px]" data-name="Aside - SideNavBar (from JSON)">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1602px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] top-0 w-[240px]" data-name="Aside - SideNavBar (from JSON):shadow" />
      <Margin3 />
      <Nav2 />
      <Container98 />
    </div>
  );
}

export default function HealthMonitor() {
  return (
    <div className="bg-[#121315] content-stretch flex flex-col items-start pl-[240px] relative size-full" data-name="Health Monitor">
      <MainContentCanvas />
      <HeaderTopNavBarFromJson />
      <AsideSideNavBarFromJson />
    </div>
  );
}