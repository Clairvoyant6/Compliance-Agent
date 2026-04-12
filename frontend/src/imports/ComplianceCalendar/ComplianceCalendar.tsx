import svgPaths from "./svg-xwtem6s2ud";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[30px] tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">Compliance Calendar</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Orchestrate your regulatory timeline. Automated deadline tracking</p>
        <p className="leading-[20px]">for GST, TDS, and MCA filings.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[436.45px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b5c4ff] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Month</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">List</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Timeline</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#1b1c1e] content-stretch flex gap-[4px] items-center p-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function PageHeaderViewToggle() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header & View Toggle">
      <Container />
      <BackgroundBorder />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">November 2024</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p10965ac0} fill="var(--fill-0, #E3E2E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #E3E2E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-start relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Heading2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">GST</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#3b82f6] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">TDS</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#a855f7] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ROC</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#f97316] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[15px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-start relative">
        <Container7 />
        <Container9 />
        <Container11 />
      </div>
    </div>
  );
}

function CalendarHeader() {
  return (
    <div className="bg-[rgba(41,42,44,0.5)] relative shrink-0 w-full" data-name="Calendar Header">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative w-full">
          <Container2 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">SUN</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">MON</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">TUE</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">WED</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-5 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">THU</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-6 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">FRI</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="col-7 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">SAT</p>
        </div>
      </div>
    </div>
  );
}

function DaysOfWeek() {
  return (
    <div className="bg-[rgba(27,28,30,0.3)] relative shrink-0 w-full" data-name="Days of week">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[_39px] pb-px relative w-full">
        <Container13 />
        <Container14 />
        <Container15 />
        <Container16 />
        <Container17 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
          <p className="leading-[20px]">01</p>
        </div>
      </div>
    </div>
  );
}

function Day() {
  return (
    <div className="col-6 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Day 1">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
          <p className="leading-[20px]">02</p>
        </div>
      </div>
    </div>
  );
}

function Day1() {
  return (
    <div className="col-7 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Day 2">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[12px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="col-1 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">03</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="col-2 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">04</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Overlay+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f87171] text-[9px] whitespace-nowrap">
            <p className="leading-[13.5px]">OVERDUE: GSTR-3B</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Border1() {
  return (
    <div className="col-3 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">05</p>
        </div>
        <OverlayBorder />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="col-4 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">06</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(168,85,247,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Overlay+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c084fc] text-[9px] whitespace-nowrap">
            <p className="leading-[13.5px]">TDS Payment</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Border3() {
  return (
    <div className="col-5 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">07</p>
        </div>
        <OverlayBorder1 />
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="col-6 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">08</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="col-7 h-[128px] justify-self-stretch relative row-2 shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">09</p>
        </div>
      </div>
    </div>
  );
}

function Row3TodayHighlighted() {
  return (
    <div className="col-1 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="Row 3 (Today highlighted)">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">10</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.1)] left-[12px] right-[12.91px] rounded-[4px] top-[40px]" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[9px] py-[5px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[9px] whitespace-nowrap">
          <p className="leading-[13.5px]">GSTR-1 Filing</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(181,196,255,0.1)] content-stretch flex flex-col items-center left-[12px] py-[2px] right-[12.91px] rounded-[4px] top-[67.5px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[8px] text-center tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[12px]">TODAY</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(181,196,255,0.05)] col-2 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute h-[128px] left-0 pointer-events-none right-[-0.09px] top-0" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(181,196,255,0.2)]" />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] text-[#b5c4ff] text-[14px] top-[22px] whitespace-nowrap">
        <p className="leading-[20px]">11</p>
      </div>
      <OverlayBorder3 />
      <Overlay />
    </div>
  );
}

function Border5() {
  return (
    <div className="col-3 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">12</p>
        </div>
      </div>
    </div>
  );
}

function Border6() {
  return (
    <div className="col-4 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">13</p>
        </div>
      </div>
    </div>
  );
}

function Border7() {
  return (
    <div className="col-5 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">14</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(249,115,22,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Overlay+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fb923c] text-[9px] whitespace-nowrap">
            <p className="leading-[13.5px]">ROC: ADT-1</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(249,115,22,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Border8() {
  return (
    <div className="col-6 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[13px] pl-[12px] pr-[13px] pt-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">15</p>
        </div>
        <OverlayBorder4 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="col-7 h-[128px] justify-self-stretch relative row-3 shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[12px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">16</p>
        </div>
      </div>
    </div>
  );
}

function CalendarCells() {
  return (
    <div className="relative shrink-0 w-full" data-name="Calendar Cells">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[___128px_128px_128px] relative w-full">
        <div className="bg-[rgba(13,14,16,0.2)] col-1 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Empty cells for start of month">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-[rgba(13,14,16,0.2)] col-2 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Overlay+Border">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-[rgba(13,14,16,0.2)] col-3 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Overlay+Border">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-[rgba(13,14,16,0.2)] col-4 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Overlay+Border">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-[rgba(13,14,16,0.2)] col-5 h-[128px] justify-self-stretch relative row-1 shrink-0" data-name="Overlay+Border">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid inset-0 pointer-events-none" />
        </div>
        <Day />
        <Day1 />
        <Row />
        <Border />
        <Border1 />
        <Border2 />
        <Border3 />
        <Border4 />
        <HorizontalBorder />
        <Row3TodayHighlighted />
        <OverlayBorder2 />
        <Border5 />
        <Border6 />
        <Border7 />
        <Border8 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#1f2022] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <CalendarHeader />
        <DaysOfWeek />
        <CalendarCells />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p11c2d500} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.2)] content-stretch flex items-center justify-center left-[25px] rounded-[9999px] size-[48px] top-[25px]" data-name="Overlay">
      <Container22 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dbeafe] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Vault Intelligence: Risk Alert</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-normal h-[68.25px] leading-[0] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 not-italic text-[rgba(219,234,254,0.6)] top-[10.5px]">
        <p className="leading-[22.75px]">{`System has detected high activity for `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] justify-center left-[249.56px] text-[#93c5fd] top-[11px]">
        <p className="leading-[22.75px]">GSTIN 09AAACT1234F</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-[400.77px] not-italic text-[rgba(219,234,254,0.6)] top-[10.5px]">
        <p className="leading-[22.75px]">.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] justify-center left-0 not-italic text-[rgba(219,234,254,0.6)] top-[44.63px]">
        <p className="mb-0">
          <span className="leading-[22.75px]">{`We recommend initiating GSTR-1 preparation by `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[22.75px] not-italic text-[#93c5fd]">Nov 14</span>
          <span className="leading-[22.75px]">{` to`}</span>
        </p>
        <p className="leading-[22.75px]">avoid peak portal traffic congestion.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[97px] top-[25px] w-[247.75px]" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Button5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(59,130,246,0.2)] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] right-[25.02px] rounded-[8px] top-[calc(50%+0.01px)]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#93c5fd] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px] mb-0">Review</p>
        <p className="leading-[16px]">Logic</p>
      </div>
    </div>
  );
}

function AiInsightsPanel() {
  return (
    <div className="bg-gradient-to-r from-[rgba(30,58,138,0.2)] h-[150.25px] relative rounded-[16px] shrink-0 to-[rgba(88,28,135,0.1)] w-full" data-name="AI Insights Panel">
      <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay1 />
      <Container23 />
      <Button5 />
    </div>
  );
}

function LeftCalendarGrid() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[180.8px] relative row-1 self-start shrink-0" data-name="Left: Calendar Grid">
      <BackgroundBorderShadow />
      <AiInsightsPanel />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[18px] w-full">
          <p className="leading-[28px]">Upcoming Deadlines</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">PRIORITY VIEW</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
        <Heading4 />
        <Container24 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] w-full">
          <p className="leading-[20px]">GSTR-3B Filing</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">OCTOBER 2024 PERIOD</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PENALTY PREVIEW</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="font-normal h-[57.05px] leading-[0] relative shrink-0 text-[#ffb4ab] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] justify-center left-0 text-[18px] top-[13.5px]">
        <p className="leading-[28px]">{`₹2,450.00 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] justify-center left-[106.18px] text-[10px] top-[14.55px]">
        <p className="leading-[28px]">+</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] justify-center left-0 text-[10px] top-[42.55px]">
        <p className="leading-[28px]">₹50/day</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[94.69px]" data-name="Container">
      <Container29 />
      <Paragraph1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[14.45px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px] mb-0">Mark as</p>
        <p className="leading-[15px]">Filed</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#343537] content-stretch flex h-[24px] items-center px-[5px] py-px relative rounded-[9999px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#475569] rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container31 />
      <Button6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pr-[0.01px] pt-[12px] relative w-full">
          <Container28 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(255,180,171,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">CRITICAL</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute right-[0.01px] top-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative">
        <OverlayBorder5 />
      </div>
    </div>
  );
}

function Card1Overdue() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Card 1: Overdue">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
          <Heading5 />
          <Container26 />
          <Container27 />
          <Container32 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,180,171,0.8)] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] w-full">
          <p className="leading-[20px]">GSTR-1 Monthly</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">NOVEMBER 2024 PERIOD</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px] mb-0">ESTIMATED TAX</p>
        <p className="leading-[15px]">LIABILITY</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">₹1,42,890.00</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[127.78px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16.81px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px] mb-0">Mark as</p>
        <p className="leading-[15px]">Filed</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#343537] content-stretch flex h-[24px] items-center px-[5px] py-px relative rounded-[9999px] shrink-0 w-[35.8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#475569] rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container39 />
      <Button7 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pt-[12px] relative w-full">
        <Container35 />
        <Container38 />
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">DUE IN 3 DAYS</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute right-[0.01px] top-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative">
        <OverlayBorder6 />
      </div>
    </div>
  );
}

function Card2DueSoon() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Card 2: Due Soon">
      <div aria-hidden="true" className="absolute border-[rgba(59,130,246,0.8)] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Heading6 />
        <Container33 />
        <Container34 />
        <Container40 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] w-full">
          <p className="leading-[20px]">TDS Payment (Section 194C)</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">OCTOBER 2024 COLLECTIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DUE DATE</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">07 NOV 2024</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[92.41px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Mark as Filed</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#343537] content-stretch flex h-[24px] items-center px-[5px] py-px relative rounded-[9999px] shrink-0 w-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#475569] rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container47 />
      <Button8 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pr-[0.01px] pt-[12px] relative w-full">
          <Container43 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="bg-[rgba(168,85,247,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#c084fc] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">UPCOMING</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute right-0 top-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative">
        <OverlayBorder7 />
      </div>
    </div>
  );
}

function Card3Upcoming() {
  return (
    <div className="bg-[#1b1c1e] relative rounded-[12px] shrink-0 w-full" data-name="Card 3: Upcoming">
      <div aria-hidden="true" className="absolute border-[rgba(168,85,247,0.8)] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Heading7 />
        <Container41 />
        <Container42 />
        <Container48 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] w-full">
          <p className="leading-[20px]">Annual ROC Filing (MGT-7)</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">FY 2023-24 PERIOD</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ENTITY TYPE</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PRIVATE LIMITED</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[101.75px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Mark as Filed</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#343537] content-stretch flex h-[24px] items-center px-[5px] py-px relative rounded-[9999px] shrink-0 w-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#475569] rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container55 />
      <Button9 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pr-[0.01px] pt-[12px] relative w-full">
          <Container51 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="bg-[rgba(249,115,22,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(249,115,22,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#fb923c] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">UPCOMING</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute right-0 top-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative">
        <OverlayBorder8 />
      </div>
    </div>
  );
}

function Card4Roc() {
  return (
    <div className="bg-[#1b1c1e] opacity-70 relative rounded-[12px] shrink-0 w-full" data-name="Card 4: ROC">
      <div aria-hidden="true" className="absolute border-[rgba(249,115,22,0.8)] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Heading8 />
        <Container49 />
        <Container50 />
        <Container56 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Card1Overdue />
        <Card2DueSoon />
        <Card3Upcoming />
        <Card4Roc />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p957df70} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[2px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.1)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <Container57 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">ADD CUSTOM DEADLINE</p>
      </div>
    </div>
  );
}

function FooterAction() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Action">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Button10 />
      </div>
    </div>
  );
}

function RightDetailedDeadlinesPanel() {
  return (
    <div className="bg-[#1f2022] col-[9/span_4] content-stretch flex flex-col items-start justify-between justify-self-stretch p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Right: Detailed Deadlines Panel">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <HorizontalBorder2 />
      <Container25 />
      <FooterAction />
    </div>
  );
}

function DashboardLayoutBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_862.05px] relative shrink-0 w-full" data-name="Dashboard Layout: Bento Grid">
      <LeftCalendarGrid />
      <RightDetailedDeadlinesPanel />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase w-full">
          <p className="leading-[15px]">COMPLIANT FILINGS</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] relative size-full whitespace-nowrap">
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center left-0 text-[#e3e2e5] text-[24px] top-[15.5px]">
          <p className="leading-[32px]">{`42 `}</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center left-[43.2px] text-[#22c55e] text-[12px] top-[20px]">
          <p className="leading-[16px]">/44</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1b1c1e] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative w-full">
        <Container58 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase w-full">
          <p className="leading-[15px]">TOTAL PENALTIES PAID</p>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[24px] w-full">
          <p className="leading-[32px]">₹0.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1b1c1e] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative w-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase w-full">
          <p className="leading-[15px]">PROJECTED LIABILITIES</p>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[24px] w-full">
          <p className="leading-[32px]">₹8.4M</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#1b1c1e] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative w-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] uppercase w-full">
          <p className="leading-[15px]">EFFICIENCY SCORE</p>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#60a5fa] text-[24px] w-full">
          <p className="leading-[32px]">98.2%</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#1b1c1e] col-4 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative w-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function BottomStatsBarIntegrated() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_85px] relative shrink-0 w-full" data-name="Bottom Stats Bar (Integrated)">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative w-full">
        <PageHeaderViewToggle />
        <DashboardLayoutBentoGrid />
        <BottomStatsBarIntegrated />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p210dd580} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search filings...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-[192px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[10px] pt-[9px] px-[12px] relative rounded-[inherit] w-full">
        <Container67 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#0d0e10] content-stretch flex gap-[8px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(67,70,85,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container66 />
      <Input />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#60a5fa] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Period: Q3 FY24</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">All Entities</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[23.99px] items-center relative shrink-0" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <BackgroundBorder5 />
        <Container68 />
      </div>
    </div>
  );
}

function Container70() {
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

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container70 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[8px] relative shrink-0 w-[17px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p33ced450} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">09AAACT1234F1Z5</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#292a2c] content-stretch flex gap-[11.99px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Background">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Button13 />
        <Margin />
        <Background />
      </div>
    </div>
  );
}

function HeaderTopNavBarAnchor() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.6)] content-stretch flex h-[64px] items-center justify-between left-[240px] pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar Anchor">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container65 />
      <Container69 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Container">
          <path d={svgPaths.p210a400} fill="var(--fill-0, #00297B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgb(181, 196, 255) 0%, rgb(100, 138, 255) 100%)" }}>
      <Container74 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[20px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[28px]">ComplianceIQ</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">THE DIGITAL VAULT</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[129.25px]" data-name="Container">
      <Heading />
      <Container76 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative w-full">
          <Background1 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative w-full">
        <Container73 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.pa26e300} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
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
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p1bbea717} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
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
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container79 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p165d3d00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GST Centre</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3962aca0} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function LinkActiveTabCalendar() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active Tab: Calendar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
        <g id="Container">
          <path d={svgPaths.p2bfc5c00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
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
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container85 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1e9b7340} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
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
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container87 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p28d42800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
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
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container89 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[11.725px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.725 11.6667">
        <g id="Container">
          <path d={svgPaths.p1a3bd300} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
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
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <Container91 />
          <Container92 />
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
        <Link2 />
        <LinkActiveTabCalendar />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.pd490b00} fill="var(--fill-0, #00297B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Run AI Analysis</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#b5c4ff] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(181,196,255,0.2),0px_4px_6px_-4px_rgba(181,196,255,0.2)]" data-name="Button:shadow" />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative w-full">
        <Button14 />
      </div>
    </div>
  );
}

function AsideSideNavBarAnchor() {
  return (
    <div className="absolute bg-[#020617] content-stretch flex flex-col h-[1209px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[16px] top-0 w-[240px]" data-name="Aside - SideNavBar Anchor">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1209px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] top-0 w-[240px]" data-name="Aside - SideNavBar Anchor:shadow" />
      <Margin1 />
      <Nav />
      <Container93 />
    </div>
  );
}

export default function ComplianceCalendar() {
  return (
    <div className="bg-[#121315] content-stretch flex flex-col items-start pl-[240px] pt-[64px] relative size-full" data-name="Compliance Calendar">
      <MainContentCanvas />
      <HeaderTopNavBarAnchor />
      <AsideSideNavBarAnchor />
    </div>
  );
}