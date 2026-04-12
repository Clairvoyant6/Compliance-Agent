import svgPaths from "./svg-t65dy92dl";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[30px] tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">GST Centre</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Unified tax management & compliance cockpit.`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[311.48px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex flex-col items-center justify-center mr-[-0.01px] px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Current Period</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-0.01px] px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Filing History</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0d0e10] content-stretch flex items-start pl-[4px] pr-[4.01px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Background />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tax Liability Waterfall</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#292a2c] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">INR (₹)</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Heading2 />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function HorizontalGridLines() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0.01px_0_0] items-start justify-between opacity-5" data-name="Horizontal Grid Lines">
      <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      </div>
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

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">21,600</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[-0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">OUTPUT TAX</p>
      </div>
    </div>
  );
}

function WaterfallPillars() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[128px]" data-name="Waterfall Pillars">
      <Margin1 />
      <div className="bg-[rgba(100,138,255,0.8)] h-[180px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_-8px_16px_0px_rgba(100,138,255,0.2)] shrink-0 w-[64px]" data-name="Overlay+Shadow" />
      <Container5 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#34d399] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">-17,730</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[-0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ITC APPLIED</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[128px]" data-name="Container">
      <Margin2 />
      <div className="bg-[rgba(16,185,129,0.4)] h-[140px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <Container7 />
      <div className="absolute h-[2px] left-[-48px] top-0 w-[48px]" data-name="Connector">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-dashed border-t-2 inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ContainerCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[244px] items-start justify-end pb-[40px] relative shrink-0" data-name="Container:css-transform">
      <Container6 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffb692] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3,870</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[-0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">NET PAYABLE</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[128px]" data-name="Container">
      <Margin3 />
      <div className="bg-[rgba(233,108,31,0.8)] h-[40px] rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_-8px_16px_0px_rgba(233,108,31,0.2)] shrink-0 w-[64px]" data-name="Overlay+Shadow" />
      <Container9 />
      <div className="absolute h-[2px] left-[-48px] top-0 w-[48px]" data-name="Connector">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-dashed border-t-2 inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[40px] relative w-full">
          <HorizontalGridLines />
          <WaterfallPillars />
          <ContainerCssTransform />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function WaterfallChartCard() {
  return (
    <div className="bg-[#1f2022] col-[1/span_8] justify-self-stretch relative rounded-[16px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Waterfall Chart Card">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Margin />
        <Container4 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-0.01px)] top-[calc(50%+28.5px)]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">ITC Health Score</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[22.93px] pr-[22.94px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[19.5px] mb-0">96% matching with GSTR-2B records.</p>
        <p className="leading-[19.5px]">4% pending vendor filing.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pt-[8px] top-[218.5px]" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">RESOLVE MISMATCHES</p>
      </div>
      <Container11 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[75.98px] pt-[24px] top-[265.5px]" data-name="Button:margin">
      <Button2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-full overflow-clip relative w-[128px]" data-name="SVG">
      <div className="absolute inset-[4.69%]" data-name="Vector">
        <div className="absolute inset-[-3.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
            <path d={svgPaths.p247528e0} id="Vector" stroke="var(--stroke-0, #0D0E10)" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.69%]" data-name="Vector">
        <div className="absolute inset-[-4.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 126">
            <path d={svgPaths.p212b500} id="Vector" stroke="var(--stroke-0, #B5C4FF)" strokeWidth="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[30px] text-center whitespace-nowrap">
        <p className="leading-[36px]">96%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[128px]" data-name="Container">
      <div className="flex h-[128px] items-center justify-center relative shrink-0 w-full" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-[100cqw]">
          <Svg />
        </div>
      </div>
      <Container13 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[144px] items-start left-[90.65px] pb-[16px] top-[50.5px] w-[128px]" data-name="Margin">
      <Container12 />
    </div>
  );
}

function ItcHealthCard() {
  return (
    <div className="bg-[#292a2c] col-[9/span_4] h-[356px] justify-self-stretch overflow-clip relative rounded-[16px] row-1 shrink-0" data-name="ITC Health Card">
      <Heading3 />
      <Margin4 />
      <ButtonMargin />
      <div className="absolute bg-[rgba(181,196,255,0.1)] blur-[32px] right-[-39.99px] rounded-[9999px] size-[128px] top-[-40px]" data-name="Overlay+Blur" />
      <Margin5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Rate-wise Breakdown</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2889b5c0} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative w-full">
          <Heading4 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[106.67px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">TAX RATE</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[145.42px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">TAXABLE VALUE</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[132.8px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">IGST</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[124.94px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">CGST / SGST</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-end px-[24px] py-[16px] relative shrink-0 w-[132.83px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">TOTAL TAX</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#1b1c1e] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[106.67px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5%</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[145.42px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">₹84,000.00</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[132.8px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">₹4,200.00</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[124.94px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">₹0.00</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-end px-[24px] py-[16px] relative shrink-0 w-[132.83px]" data-name="Data">
      <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">₹4,200.00</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[106.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">12%</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[145.42px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹24,500.00</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[132.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹0.00</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[124.94px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹2,940.00</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[132.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[16.5px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">₹2,940.00</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[106.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">18%</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[145.42px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹80,333.33</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[132.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹14,460.00</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[124.94px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">₹0.00</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[132.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[16px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">₹14,460.00</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <Header />
      <Body />
    </div>
  );
}

function RateWiseTable() {
  return (
    <div className="bg-[#1f2022] col-[1/span_8] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-2 self-start shrink-0" data-name="Rate-wise Table">
      <HorizontalBorder />
      <Table />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, #10B981)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container17 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GSTR-1</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Filed on 11 Oct 2023</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[104.84px]" data-name="Container">
      <Heading5 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay />
        <Container18 />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">COMPLETED</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#1f2022] relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#10b981] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[20px] py-[20px] relative w-full">
          <Container16 />
          <Overlay1 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="var(--fill-0, #FFB692)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,182,146,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container21 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GSTR-3B</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Due in 4 Days</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72.36px]" data-name="Container">
      <Heading6 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay2 />
        <Container22 />
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,182,146,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb692] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">DUE SOON</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#1f2022] relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ffb692] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[20px] py-[20px] relative w-full">
          <Container20 />
          <Overlay3 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p3c95900} fill="var(--fill-0, #8D90A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(141,144,160,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container25 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GSTR-9</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Annual Return (FY23)</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[111.86px]" data-name="Container">
      <Heading7 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay4 />
        <Container26 />
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(141,144,160,0.1)] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">UPCOMING</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder2() {
  return (
    <div className="bg-[#1f2022] relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#8d90a0] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[20px] py-[20px] relative w-full">
          <Container24 />
          <Overlay5 />
        </div>
      </div>
    </div>
  );
}

function FilingStatusSide() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[3px] relative row-2 self-start shrink-0" data-name="Filing Status Side">
      <BackgroundVerticalBorder />
      <BackgroundVerticalBorder1 />
      <BackgroundVerticalBorder2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__356px_275px] pt-[32px] relative shrink-0 w-full" data-name="Container">
      <WaterfallChartCard />
      <ItcHealthCard />
      <RateWiseTable />
      <FilingStatusSide />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-70 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[10px]">TAX DUE FOR OCTOBER</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00297b] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">₹3,870.00</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start px-[8px] relative shrink-0 w-[17px]" data-name="Margin">
      <div className="bg-[rgba(0,41,123,0.2)] h-[40px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #00297B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Pay Now</p>
      </div>
      <Container32 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#b5c4ff] content-stretch flex gap-[16px] items-center px-[32px] py-[16px] relative rounded-[9999px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.4)] shrink-0" data-name="Button">
      <Container28 />
      <Margin6 />
      <Container31 />
    </div>
  );
}

function PayNowFloatingActionContainer() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Pay Now Floating Action Container">
      <Button3 />
    </div>
  );
}

function PayNowFloatingActionContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Pay Now Floating Action Container:margin">
      <PayNowFloatingActionContainer />
    </div>
  );
}

function SectionContentArea() {
  return (
    <div className="bg-[#121315] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section - Content Area">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <HeaderSection />
        <Container2 />
        <PayNowFloatingActionContainerMargin />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#60a5fa] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Period: Q3 FY24</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">All Entities</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <HorizontalBorder1 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.pcf6c580} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container36 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3b82f6] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Run AI Analysis</p>
      </div>
    </div>
  );
}

function Container37() {
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

function Container38() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p19c72550} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[25px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.99px] items-center relative">
        <Button4 />
        <VerticalBorder />
      </div>
    </div>
  );
}

function HeaderTopNavBarAnchor() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.6)] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar Anchor">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Container35 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-[1024px] min-w-px relative self-stretch" data-name="Main Content Canvas">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[64px] relative size-full">
          <SectionContentArea />
          <HeaderTopNavBarAnchor />
        </div>
      </div>
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

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">THE DIGITAL VAULT</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Heading />
        <Container40 />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
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

function Container42() {
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
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
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

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link1() {
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
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p152cb200} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GST Centre</p>
      </div>
    </div>
  );
}

function LinkActiveTabGstCentre() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active Tab: GST Centre">
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
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p841cf00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
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
          <Container47 />
          <Container48 />
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
          <path d={svgPaths.pb1c89c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
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
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
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

function Container52() {
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
          <Container51 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
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

function Container54() {
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
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
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

function Container56() {
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
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link />
        <Link1 />
        <LinkActiveTabGstCentre />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#2563eb] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[8px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(30,58,138,0.2),0px_4px_6px_-4px_rgba(30,58,138,0.2)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Run AI Analysis</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.4)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[8px] relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function AsideSideNavBarAnchor() {
  return (
    <div className="absolute bg-[#020617] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[16px] top-0 w-[240px]" data-name="Aside - SideNavBar Anchor">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] top-0 w-[240px]" data-name="Aside - SideNavBar Anchor:shadow" />
      <Margin7 />
      <Nav />
      <HorizontalBorder2 />
    </div>
  );
}

export default function GstCentre() {
  return (
    <div className="bg-[#121315] content-stretch flex items-start justify-center pl-[240px] relative size-full" data-name="GST Centre">
      <MainContentCanvas />
      <AsideSideNavBarAnchor />
    </div>
  );
}