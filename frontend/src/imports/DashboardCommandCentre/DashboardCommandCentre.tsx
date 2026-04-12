import svgPaths from "./svg-463t1cnzu6";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">COMPLIANCE SCORE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p16151b00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#b5c4ff] text-[36px]">
        <p className="leading-[40px]">72</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#c3c5d7] text-[14px]">
        <p className="leading-[20px]">/100</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#343537] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#b5c4ff] inset-[0_28%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Background />
    </div>
  );
}

function Metric2ComplianceScore() {
  return (
    <div className="bg-[#1b1c1e] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Metric 2: Compliance Score">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Margin />
        <Paragraph />
        <Margin1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">UPCOMING DEADLINES</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffb4ab] text-[48px] whitespace-nowrap">
        <p className="leading-[48px]">3</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
        <p className="leading-[15px] mb-0">Urgent actions</p>
        <p className="leading-[15px]">required</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Metric3Deadlines() {
  return (
    <div className="bg-[#1b1c1e] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Metric 3: Deadlines">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Margin2 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">INPUT TAX CREDIT</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[30px] w-full">
        <p className="leading-[36px]">₹17,730</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">+12.5% from last month</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Metric4Itc() {
  return (
    <div className="bg-[#1b1c1e] col-4 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Metric 4: ITC">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Margin3 />
        <Container7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[53.33px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px] mb-0">NET GST</p>
        <p className="leading-[16px]">PAYABLE</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,182,146,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,182,146,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb692] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PAYABLE</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <OverlayBorder />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['JetBrains_Mono:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3e2e5] text-[30px] w-full">
        <p className="leading-[36px]">₹3,870</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
        <p className="leading-[16px]">Due in 5 days</p>
      </div>
    </div>
  );
}

function Metric1GstPayable() {
  return (
    <div className="bg-[#1b1c1e] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Metric 1: GST Payable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <Container10 />
          <Heading3 />
          <Container12 />
          <div className="absolute bg-[#ffb692] bottom-0 h-[4px] left-0 opacity-40 right-0" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function HeroMetricsBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_156px] relative shrink-0 w-full" data-name="Hero Metrics Bento Grid">
      <Metric2ComplianceScore />
      <Metric3Deadlines />
      <Metric4Itc />
      <Metric1GstPayable />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Active Deadlines</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">View Calendar</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Heading4 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">GSTR-1</p>
        </div>
        <div className="h-[13.5px] relative shrink-0 w-[3px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 13.5">
            <path d={svgPaths.p3d83bb00} fill="var(--fill-0, #FFB4AB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[20px] w-full">
          <p className="leading-[28px]">Nov 11</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">Monthly Return Filing</p>
        </div>
      </div>
    </div>
  );
}

function DeadlineCard() {
  return (
    <div className="bg-[#292a2c] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Deadline Card 1">
      <div aria-hidden="true" className="absolute border-[#ffb4ab] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Paragraph1 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[0.01px] relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">GSTR-3B</p>
        </div>
        <div className="relative shrink-0 size-[15px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p15221b80} fill="var(--fill-0, #FFB692)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[20px] w-full">
          <p className="leading-[28px]">Nov 20</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">Monthly Tax Payment</p>
        </div>
      </div>
    </div>
  );
}

function DeadlineCard1() {
  return (
    <div className="bg-[#292a2c] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Deadline Card 2">
      <div aria-hidden="true" className="absolute border-[#ffb692] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Paragraph2 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">GSTR-9</p>
        </div>
        <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
            <path d={svgPaths.p316e3620} fill="var(--fill-0, #B5C4FF)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[20px] w-full">
          <p className="leading-[28px]">Dec 31</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] w-full">
          <p className="leading-[16px]">Annual Return Filing</p>
        </div>
      </div>
    </div>
  );
}

function DeadlineCard2() {
  return (
    <div className="bg-[#292a2c] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Deadline Card 3">
      <div aria-hidden="true" className="absolute border-[#b5c4ff] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Paragraph3 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_128px] relative shrink-0 w-full" data-name="Container">
      <DeadlineCard />
      <DeadlineCard1 />
      <DeadlineCard2 />
    </div>
  );
}

function UpcomingDeadlinesSection() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[137px] relative row-1 self-start shrink-0" data-name="Upcoming Deadlines Section">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">AI VAULT ANALYSIS</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Heading5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Risk Level</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,182,146,0.2)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb692] text-[10px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">MEDIUM RISK</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Overlay />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
          <path d={svgPaths.p2e0ed180} fill="var(--fill-0, #FFB4AB)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-center pt-[2px] relative">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[0.73px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0">3 invoices showing mismatch with GSTR-</p>
        <p className="leading-[19.5px]">2B data.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[39px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin4 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="h-[11.667px] relative shrink-0 w-[8.75px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 11.6667">
          <path d={svgPaths.p1645fa00} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-center pt-[2px] relative">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[21.36px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0">Optimization possible: Reclaim ₹1,240</p>
        <p className="leading-[19.5px]">ITC from blocked credits.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[39px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin5 />
      <Container31 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#343537] content-stretch flex items-center justify-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Expand Deep Scan</p>
      </div>
    </div>
  );
}

function DecorativeElement() {
  return (
    <div className="absolute bottom-[-24px] h-[101.333px] right-[-24.01px] w-[117.333px]" data-name="Decorative element">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.333 101.333">
        <g id="Decorative element" opacity="0.05">
          <path d={svgPaths.p3b1b3c0} fill="var(--fill-0, #E3E2E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function AiAnalysisCard() {
  return (
    <div className="bg-[#292a2c] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="AI Analysis Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <Container21 />
          <Container23 />
          <Container25 />
          <Button1 />
          <DecorativeElement />
        </div>
      </div>
    </div>
  );
}

function MainFeaturesRow() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_309px] relative shrink-0 w-full" data-name="Main Features Row">
      <UpcomingDeadlinesSection />
      <AiAnalysisCard />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c3c5d7] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">PRECISION TOOLS</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p11fdd840} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Bulk Upload Invoices</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#292a2c] content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p13ace700} fill="var(--fill-0, #B5C4FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Match GSTR-2B</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#292a2c] content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 16">
        <g id="Container">
          <path d={svgPaths.p29002e00} fill="var(--fill-0, #FFB692)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Gen. Report</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#292a2c] content-stretch flex gap-[11.99px] items-center px-[24px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p13965980} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e3e2e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Expert Assistance</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#292a2c] content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function QuickActionsRow() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Quick Actions Row">
      <Heading6 />
      <Container32 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#10b981] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">SERVER: OPTIMAL</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#10b981] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Container">
          <path d={svgPaths.p29641280} fill="var(--fill-0, #C3C5D7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[11px] tracking-[-0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">LAST SYNC: 14 MINS AGO</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Container42 />
        <div className="bg-[rgba(255,255,255,0.1)] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
        <Container44 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c3c5d7] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">GSTIN: 27AABCU1234F1Z5</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.2)] whitespace-nowrap">
        <p className="leading-[16.5px]">|</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c4ff] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">PRO ACCOUNT</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container48 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function FooterBottomHealthStatusStrip() {
  return (
    <div className="bg-[#0d0e10] relative rounded-[12px] shrink-0 w-full" data-name="Footer - Bottom Health Status Strip">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative w-full">
          <Container41 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function MainContentShellCanvasArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content Shell → Canvas Area">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[228.5px] pt-[32px] px-[32px] relative w-full">
        <HeroMetricsBentoGrid />
        <MainFeaturesRow />
        <QuickActionsRow />
        <FooterBottomHealthStatusStrip />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search data or entities...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0d0e10] content-stretch flex items-start justify-center overflow-clip pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Input">
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bottom-[11.11%] content-stretch flex flex-col items-start left-[12px] top-[11.11%]" data-name="Container">
      <div className="relative shrink-0 size-[13.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container54 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#60a5fa] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col h-full items-start pb-[6px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Period: Q3 FY24</p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">All Entities</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[16px] h-[26px] items-start relative shrink-0" data-name="Container">
      <HorizontalBorder />
      <Container56 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Container52 />
        <Container55 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(181,196,255,0.1)] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(181,196,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b5c4ff] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">RUN AI ANALYSIS</p>
      </div>
    </div>
  );
}

function Container59() {
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

function Container60() {
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

function Container58() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Button6 />
        <Container58 />
      </div>
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.6)] content-stretch flex h-[64px] items-center justify-between left-[240px] pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar Shell">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Container57 />
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

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[-0.4px] w-full">
        <p className="leading-[16px]">The Digital Vault</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Heading />
        <Container62 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p498ff00} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkActiveTabDashboard() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active Tab: Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
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

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">GST Centre</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container69 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
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

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">AI Agent</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
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

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Health</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container73 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
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

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container75 />
          <Container76 />
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
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
        <LinkActiveTabDashboard />
        <Link />
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

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(181, 196, 255) 0%, rgb(100, 138, 255) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(181,196,255,0.2),0px_4px_6px_-4px_rgba(181,196,255,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00297b] text-[14px] text-center tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">Run AI Analysis</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Button7 />
      </div>
    </div>
  );
}

function AsideSideNavBarShell() {
  return (
    <div className="absolute bg-[#020617] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[16px] top-0 w-[240px]" data-name="Aside - SideNavBar Shell">
      <div aria-hidden="true" className="absolute border-[rgba(30,41,59,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] top-0 w-[240px]" data-name="Aside - SideNavBar Shell:shadow" />
      <Margin6 />
      <Nav />
      <Container79 />
    </div>
  );
}

export default function DashboardCommandCentre() {
  return (
    <div className="bg-[#121315] content-stretch flex flex-col items-start pl-[240px] pt-[64px] relative size-full" data-name="Dashboard - Command Centre">
      <MainContentShellCanvasArea />
      <HeaderTopNavBarShell />
      <AsideSideNavBarShell />
    </div>
  );
}