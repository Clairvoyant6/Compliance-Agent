// ─── ComplianceIQ Mock Data ───────────────────────────────────────────────────

export interface Transaction {
  id: string;
  date: string;
  description: string;
  vendor: string;
  gstin: string;
  amount: number;
  gst: number;
  type: 'Purchase' | 'Sale' | 'Expense' | 'Import' | 'Export';
  status: 'Reconciled' | 'Pending' | 'Mismatched' | 'Filed';
  category: string;
  invoiceNo: string;
}

export interface Deadline {
  id: number;
  form: string;
  dueDate: string;
  description: string;
  status: 'overdue' | 'urgent' | 'upcoming' | 'filed';
  priority: 'high' | 'medium' | 'low';
  daysLeft: number;
}

export interface GSTReturn {
  id: string;
  period: string;
  form: string;
  dueDate: string;
  filedDate: string | null;
  status: 'Filed' | 'Pending' | 'Late' | 'Not Due';
  taxPayable: number;
  taxPaid: number;
  lateFee: number;
  interest: number;
}

export interface HealthCheck {
  id: string;
  category: string;
  title: string;
  status: 'healthy' | 'warning' | 'critical';
  score: number;
  description: string;
  lastChecked: string;
}

export interface ComplianceEvent {
  id: number;
  title: string;
  date: string;
  type: 'filing' | 'payment' | 'audit' | 'deadline';
  form: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'filed' | 'overdue';
  description: string;
}

export interface Report {
  id: string;
  title: string;
  type: string;
  period: string;
  generatedOn: string;
  size: string;
  status: 'ready' | 'generating' | 'error';
}

// ─── Transactions ──────────────────────────────────────────────────────────────
export const transactions: Transaction[] = [
  { id: 'TXN-001', date: '2026-04-10', description: 'Raw Material Purchase – Steel Rods', vendor: 'Steel Corp India Ltd', gstin: '27AABCS1429B1Z1', amount: 145000, gst: 26100, type: 'Purchase', status: 'Reconciled', category: 'Raw Material', invoiceNo: 'INV-SC-2026-0234' },
  { id: 'TXN-002', date: '2026-04-09', description: 'Software License – Enterprise Suite', vendor: 'TechSoft Solutions Pvt Ltd', gstin: '29AATCS9873B1ZP', amount: 89999, gst: 16200, type: 'Expense', status: 'Reconciled', category: 'Technology', invoiceNo: 'TS-2026-0099' },
  { id: 'TXN-003', date: '2026-04-08', description: 'Product Sale – Industrial Valves B2B', vendor: 'Petromax Refineries Ltd', gstin: '06AABCP3929B1ZK', amount: 324000, gst: 58320, type: 'Sale', status: 'Filed', category: 'Product Sales', invoiceNo: 'SALE-2026-0451' },
  { id: 'TXN-004', date: '2026-04-07', description: 'Office Furniture – Ergonomic Chairs', vendor: 'WorkSpace Interiors', gstin: '07AABCW6520C1ZR', amount: 67500, gst: 12150, type: 'Purchase', status: 'Pending', category: 'Office Supplies', invoiceNo: 'WI-2026-0178' },
  { id: 'TXN-005', date: '2026-04-06', description: 'Consulting Services – Tax Advisory', vendor: 'CA Associates LLP', gstin: '19AADCA4815R1ZQ', amount: 45000, gst: 8100, type: 'Expense', status: 'Mismatched', category: 'Professional Services', invoiceNo: 'CAA-2026-0056' },
  { id: 'TXN-006', date: '2026-04-05', description: 'Export – Automotive Parts USA', vendor: 'AutoTech USA Inc.', gstin: 'EXPRT-US-00234', amount: 567800, gst: 0, type: 'Export', status: 'Filed', category: 'Export', invoiceNo: 'EXP-2026-0023' },
  { id: 'TXN-007', date: '2026-04-04', description: 'Electricity Bill – Factory Unit 2', vendor: 'Maharashtra State Electricity Board', gstin: '27AABCM7391K1ZW', amount: 23400, gst: 2106, type: 'Expense', status: 'Reconciled', category: 'Utilities', invoiceNo: 'MSEB-2026-0334' },
  { id: 'TXN-008', date: '2026-04-03', description: 'Import – Electronic Components Taiwan', vendor: 'TechCore Taiwan Co.', gstin: 'IMPRT-TW-00567', amount: 892000, gst: 178400, type: 'Import', status: 'Pending', category: 'Import', invoiceNo: 'IMP-2026-0015' },
  { id: 'TXN-009', date: '2026-04-02', description: 'Product Sale – Pipe Fittings Bulk', vendor: 'BuildRight Construction', gstin: '24AABCB9123D1ZM', amount: 198500, gst: 35730, type: 'Sale', status: 'Reconciled', category: 'Product Sales', invoiceNo: 'SALE-2026-0448' },
  { id: 'TXN-010', date: '2026-04-01', description: 'Transportation & Logistics', vendor: 'FastMove Logistics Pvt Ltd', gstin: '09AABCF5611G1ZT', amount: 34200, gst: 6156, type: 'Expense', status: 'Reconciled', category: 'Logistics', invoiceNo: 'FM-2026-0267' },
  { id: 'TXN-011', date: '2026-03-31', description: 'Chemical Raw Materials – Batch H2', vendor: 'ChemPro Industries', gstin: '27AABCC4012P1ZN', amount: 234000, gst: 42120, type: 'Purchase', status: 'Mismatched', category: 'Raw Material', invoiceNo: 'CP-2026-0122' },
  { id: 'TXN-012', date: '2026-03-30', description: 'Product Sale – Fasteners (B2C)', vendor: 'Various Retail Customers', gstin: 'UNREG', amount: 87600, gst: 15768, type: 'Sale', status: 'Filed', category: 'Retail Sales', invoiceNo: 'SALE-2026-0445' },
  { id: 'TXN-013', date: '2026-03-29', description: 'Cloud Infrastructure – AWS Hosting', vendor: 'Amazon Web Services India', gstin: '29AACCA8719B1ZR', amount: 56780, gst: 10220, type: 'Expense', status: 'Reconciled', category: 'Technology', invoiceNo: 'AWS-2026-0089' },
  { id: 'TXN-014', date: '2026-03-28', description: 'Machinery Spare Parts', vendor: 'TechMach Components', gstin: '27AABCT3012L1ZV', amount: 122300, gst: 22014, type: 'Purchase', status: 'Pending', category: 'Machinery', invoiceNo: 'TM-2026-0097' },
  { id: 'TXN-015', date: '2026-03-27', description: 'Security Services – Annual Contract', vendor: 'SafeGuard Security Ltd', gstin: '07AABCS8219A1ZK', amount: 180000, gst: 32400, type: 'Expense', status: 'Reconciled', category: 'Security', invoiceNo: 'SG-2026-0033' },
  { id: 'TXN-016', date: '2026-03-26', description: 'Product Sale – Hydraulic Systems', vendor: 'Bharat Heavy Equipment Ltd', gstin: '10AABCB6720C1ZP', amount: 456000, gst: 82080, type: 'Sale', status: 'Filed', category: 'Product Sales', invoiceNo: 'SALE-2026-0440' },
  { id: 'TXN-017', date: '2026-03-25', description: 'Printing & Stationery Supplies', vendor: 'PrintMart India', gstin: '29AABCP4421K1ZT', amount: 12400, gst: 1984, type: 'Purchase', status: 'Reconciled', category: 'Office Supplies', invoiceNo: 'PM-2026-0234' },
  { id: 'TXN-018', date: '2026-03-24', description: 'Import – Precision Tools Germany', vendor: 'PrecisionTech GmbH', gstin: 'IMPRT-DE-00234', amount: 672000, gst: 134400, type: 'Import', status: 'Reconciled', category: 'Import', invoiceNo: 'IMP-2026-0014' },
  { id: 'TXN-019', date: '2026-03-23', description: 'Staff Training – Compliance Workshop', vendor: 'Compliance Academy India', gstin: '07AABCC9823E1ZW', amount: 38500, gst: 6930, type: 'Expense', status: 'Reconciled', category: 'Training', invoiceNo: 'CAI-2026-0067' },
  { id: 'TXN-020', date: '2026-03-22', description: 'Export – Textile Products UK', vendor: 'UK Fashion House Ltd', gstin: 'EXPRT-UK-00189', amount: 345600, gst: 0, type: 'Export', status: 'Filed', category: 'Export', invoiceNo: 'EXP-2026-0022' },
];

// ─── Deadlines ────────────────────────────────────────────────────────────────
export const deadlines: Deadline[] = [
  { id: 1, form: 'GSTR-1', dueDate: '2026-04-11', description: 'Monthly Outward Supplies Return', status: 'overdue', priority: 'high', daysLeft: -1 },
  { id: 2, form: 'GSTR-3B', dueDate: '2026-04-20', description: 'Monthly Tax Payment & Summary Return', status: 'urgent', priority: 'high', daysLeft: 8 },
  { id: 3, form: 'GSTR-9', dueDate: '2026-12-31', description: 'Annual Return Filing FY 2025-26', status: 'upcoming', priority: 'medium', daysLeft: 263 },
  { id: 4, form: 'TDS Return', dueDate: '2026-04-30', description: 'Q4 TDS Return Filing', status: 'upcoming', priority: 'medium', daysLeft: 18 },
  { id: 5, form: 'GSTR-2B Reconciliation', dueDate: '2026-04-15', description: 'ITC Reconciliation with GSTR-2B', status: 'urgent', priority: 'high', daysLeft: 3 },
  { id: 6, form: 'PF/ESI', dueDate: '2026-04-15', description: 'Monthly PF & ESI Payment', status: 'urgent', priority: 'medium', daysLeft: 3 },
];

// ─── GST Returns ──────────────────────────────────────────────────────────────
export const gstReturns: GSTReturn[] = [
  { id: 'R001', period: 'Mar 2026', form: 'GSTR-1', dueDate: '2026-04-11', filedDate: null, status: 'Pending', taxPayable: 0, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R002', period: 'Mar 2026', form: 'GSTR-3B', dueDate: '2026-04-20', filedDate: null, status: 'Pending', taxPayable: 87430, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R003', period: 'Feb 2026', form: 'GSTR-1', dueDate: '2026-03-11', filedDate: '2026-03-10', status: 'Filed', taxPayable: 0, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R004', period: 'Feb 2026', form: 'GSTR-3B', dueDate: '2026-03-20', filedDate: '2026-03-19', status: 'Filed', taxPayable: 92150, taxPaid: 92150, lateFee: 0, interest: 0 },
  { id: 'R005', period: 'Jan 2026', form: 'GSTR-1', dueDate: '2026-02-11', filedDate: '2026-02-11', status: 'Filed', taxPayable: 0, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R006', period: 'Jan 2026', form: 'GSTR-3B', dueDate: '2026-02-20', filedDate: '2026-02-22', status: 'Late', taxPayable: 78900, taxPaid: 78900, lateFee: 2000, interest: 340 },
  { id: 'R007', period: 'Dec 2025', form: 'GSTR-1', dueDate: '2026-01-11', filedDate: '2026-01-10', status: 'Filed', taxPayable: 0, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R008', period: 'Dec 2025', form: 'GSTR-3B', dueDate: '2026-01-20', filedDate: '2026-01-20', status: 'Filed', taxPayable: 85670, taxPaid: 85670, lateFee: 0, interest: 0 },
  { id: 'R009', period: 'Nov 2025', form: 'GSTR-1', dueDate: '2025-12-11', filedDate: '2025-12-11', status: 'Filed', taxPayable: 0, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R010', period: 'Nov 2025', form: 'GSTR-3B', dueDate: '2025-12-20', filedDate: '2025-12-20', status: 'Filed', taxPayable: 91200, taxPaid: 91200, lateFee: 0, interest: 0 },
  { id: 'R011', period: 'Oct 2025', form: 'GSTR-1', dueDate: '2025-11-11', filedDate: '2025-11-10', status: 'Filed', taxPayable: 0, taxPaid: 0, lateFee: 0, interest: 0 },
  { id: 'R012', period: 'Oct 2025', form: 'GSTR-3B', dueDate: '2025-11-20', filedDate: '2025-11-21', status: 'Late', taxPayable: 74500, taxPaid: 74500, lateFee: 1000, interest: 210 },
];

// ─── Health Checks ────────────────────────────────────────────────────────────
export const healthChecks: HealthCheck[] = [
  { id: 'HC001', category: 'GST Filing', title: 'GSTR-1 Monthly Filing', status: 'critical', score: 45, description: 'GSTR-1 for Mar 2026 is overdue. Immediate filing required.', lastChecked: '2026-04-12' },
  { id: 'HC002', category: 'GST Filing', title: 'GSTR-3B Compliance', status: 'warning', score: 72, description: '2 instances of late filing in the last 12 months.', lastChecked: '2026-04-12' },
  { id: 'HC003', category: 'ITC Reconciliation', title: 'GSTR-2B vs Books Matching', status: 'warning', score: 68, description: '3 invoices showing mismatch. ₹1,24,000 ITC at risk.', lastChecked: '2026-04-12' },
  { id: 'HC004', category: 'E-Invoicing', title: 'E-Invoice Generation Rate', status: 'healthy', score: 98, description: 'All eligible invoices are being generated with IRN.', lastChecked: '2026-04-12' },
  { id: 'HC005', category: 'TDS Compliance', title: 'TDS Deduction & Filing', status: 'healthy', score: 95, description: 'TDS deducted and deposited on time. Returns filed.', lastChecked: '2026-04-12' },
  { id: 'HC006', category: 'Annual Returns', title: 'GSTR-9 Readiness', status: 'warning', score: 60, description: 'FY 2025-26 annual return preparation is 60% complete.', lastChecked: '2026-04-12' },
  { id: 'HC007', category: 'Data Integrity', title: 'Vendor GSTIN Validation', status: 'healthy', score: 94, description: '3 vendors with expired/invalid GSTINs identified.', lastChecked: '2026-04-12' },
  { id: 'HC008', category: 'Cash Ledger', title: 'Electronic Cash Ledger Balance', status: 'healthy', score: 100, description: 'Sufficient balance available for upcoming tax liabilities.', lastChecked: '2026-04-12' },
];

// ─── Compliance Calendar Events ──────────────────────────────────────────────
export const complianceEvents: ComplianceEvent[] = [
  { id: 1, title: 'GSTR-1 Filing', date: '2026-04-11', type: 'filing', form: 'GSTR-1', priority: 'high', status: 'overdue', description: 'Monthly outward supplies return for March 2026' },
  { id: 2, title: 'GSTR-2B Reconciliation', date: '2026-04-15', type: 'deadline', form: 'GSTR-2B', priority: 'high', status: 'pending', description: 'Reconcile ITC with GSTR-2B for March 2026' },
  { id: 3, title: 'PF/ESI Payment', date: '2026-04-15', type: 'payment', form: 'PF/ESI', priority: 'medium', status: 'pending', description: 'Monthly PF & ESI contribution payment' },
  { id: 4, title: 'GSTR-3B Filing & Payment', date: '2026-04-20', type: 'filing', form: 'GSTR-3B', priority: 'high', status: 'pending', description: 'Monthly summary return and tax payment for March 2026' },
  { id: 5, title: 'TDS Payment', date: '2026-04-30', type: 'payment', form: 'TDS', priority: 'high', status: 'pending', description: 'Q4 TDS deposit for March 2026' },
  { id: 6, title: 'TCS Return', date: '2026-04-30', type: 'filing', form: 'TCS', priority: 'medium', status: 'pending', description: 'Q4 TCS return filing' },
  { id: 7, title: 'GSTR-1 Filing', date: '2026-05-11', type: 'filing', form: 'GSTR-1', priority: 'high', status: 'pending', description: 'Monthly outward supplies return for April 2026' },
  { id: 8, title: 'Advance Tax Q1', date: '2026-06-15', type: 'payment', form: 'Advance Tax', priority: 'high', status: 'pending', description: 'Q1 Advance Tax installment for FY 2026-27' },
  { id: 9, title: 'GSTR-3B Filing', date: '2026-05-20', type: 'filing', form: 'GSTR-3B', priority: 'high', status: 'pending', description: 'Monthly summary return and tax payment for April 2026' },
  { id: 10, title: 'GSTR-9 Annual Return', date: '2026-12-31', type: 'filing', form: 'GSTR-9', priority: 'medium', status: 'pending', description: 'Annual GST return for FY 2025-26' },
  { id: 11, title: 'GSTR-9C Reconciliation', date: '2026-12-31', type: 'filing', form: 'GSTR-9C', priority: 'medium', status: 'pending', description: 'GST Audit reconciliation statement' },
  { id: 12, title: 'Income Tax Return', date: '2026-07-31', type: 'filing', form: 'ITR', priority: 'high', status: 'pending', description: 'Corporate income tax return for FY 2025-26' },
];

// ─── Reports ──────────────────────────────────────────────────────────────────
export const reports: Report[] = [
  { id: 'RPT-001', title: 'GST Liability Summary – Q4 FY2026', type: 'GST Summary', period: 'Jan–Mar 2026', generatedOn: '2026-04-10', size: '2.4 MB', status: 'ready' },
  { id: 'RPT-002', title: 'ITC Reconciliation Report – Mar 2026', type: 'ITC Reconciliation', period: 'Mar 2026', generatedOn: '2026-04-09', size: '1.8 MB', status: 'ready' },
  { id: 'RPT-003', title: 'Vendor Compliance Analysis Report', type: 'Vendor Analysis', period: 'FY 2025-26', generatedOn: '2026-04-08', size: '3.2 MB', status: 'ready' },
  { id: 'RPT-004', title: 'Compliance Health Score Report', type: 'Health Monitor', period: 'Apr 2026', generatedOn: '2026-04-12', size: '856 KB', status: 'ready' },
  { id: 'RPT-005', title: 'TDS Annual Summary FY2025-26', type: 'TDS Report', period: 'FY 2025-26', generatedOn: '2026-04-07', size: '1.1 MB', status: 'ready' },
  { id: 'RPT-006', title: 'Export Documentation Report – Q4', type: 'Export Report', period: 'Jan–Mar 2026', generatedOn: '2026-04-06', size: '2.9 MB', status: 'ready' },
  { id: 'RPT-007', title: 'Annual GST Audit Trail FY2025-26', type: 'Audit Trail', period: 'FY 2025-26', generatedOn: '2026-04-05', size: '8.4 MB', status: 'ready' },
  { id: 'RPT-008', title: 'Cash Ledger & ITC Ledger Statement', type: 'Ledger Report', period: 'Mar 2026', generatedOn: '2026-04-11', size: '990 KB', status: 'generating' },
];

// ─── Chart Data ────────────────────────────────────────────────────────────────
export const monthlyTaxData = [
  { month: 'Nov', taxLiability: 91200, itcClaimed: 67400, netPayable: 23800, revenue: 1250000 },
  { month: 'Dec', taxLiability: 85670, itcClaimed: 64300, netPayable: 21370, revenue: 1180000 },
  { month: 'Jan', taxLiability: 78900, itcClaimed: 58200, netPayable: 20700, revenue: 1090000 },
  { month: 'Feb', taxLiability: 92150, itcClaimed: 69800, netPayable: 22350, revenue: 1320000 },
  { month: 'Mar', taxLiability: 87430, itcClaimed: 70300, netPayable: 17130, revenue: 1270000 },
  { month: 'Apr', taxLiability: 0, itcClaimed: 0, netPayable: 0, revenue: 0 },
];

export const gstBreakdownData = [
  { name: 'CGST', value: 38200, color: '#b5c4ff' },
  { name: 'SGST', value: 38200, color: '#a8d5b5' },
  { name: 'IGST', value: 11030, color: '#ffb692' },
  { name: 'Cess', value: 0, color: '#ffb4ab' },
];

export const complianceScoreHistory = [
  { month: 'Nov', score: 68 },
  { month: 'Dec', score: 74 },
  { month: 'Jan', score: 71 },
  { month: 'Feb', score: 78 },
  { month: 'Mar', score: 72 },
  { month: 'Apr', score: 72 },
];

export const itcUtilizationData = [
  { month: 'Nov', available: 89200, utilized: 67400, blocked: 21800 },
  { month: 'Dec', available: 82400, utilized: 64300, blocked: 18100 },
  { month: 'Jan', available: 76500, utilized: 58200, blocked: 18300 },
  { month: 'Feb', available: 91300, utilized: 69800, blocked: 21500 },
  { month: 'Mar', available: 88600, utilized: 70300, blocked: 18300 },
];

// ─── AI Chat Messages ─────────────────────────────────────────────────────────
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    role: 'assistant',
    content: `Good morning! I'm your AI Compliance Agent. I've synchronized your Q4 FY2026 data and identified **4 critical compliance actions** requiring immediate attention.\n\n**Priority Items:**\n• GSTR-1 for March 2026 is overdue (due Apr 11)\n• 3 invoice mismatches with GSTR-2B data (₹1,24,000 ITC at risk)\n• GSTR-3B deadline approaching in 8 days\n• ITC optimization opportunity: ₹1,240 recoverable from blocked credits\n\nHow can I help you today?`,
    timestamp: '09:12 AM',
  },
];

export const aiSuggestions = [
  'What is my current ITC reconciliation status?',
  'Show me overdue compliance actions',
  'How do I reduce my GST liability?',
  'Explain GSTR-2B mismatches found',
  'Generate a compliance health report',
  'What filings are due this week?',
];

export const aiResponses: Record<string, string> = {
  itc: `**ITC Reconciliation Status for March 2026:**\n\n✅ Total ITC Available: ₹88,600\n⚠️ Matched with GSTR-2B: ₹70,300 (79.3%)\n❌ Mismatched / Blocked: ₹18,300 (20.7%)\n\n**Mismatch Details:**\n1. **INV-SC-2026-0234** (Steel Corp) – ₹26,100: Supplier filed in Apr instead of Mar\n2. **CAA-2026-0056** (CA Associates) – ₹8,100: GSTIN mismatch detected\n3. **CP-2026-0122** (ChemPro) – ₹42,120: Invoice date discrepancy\n\n**Recommended Actions:**\n→ Contact Steel Corp to verify filing period\n→ Validate CA Associates GSTIN\n→ Request revised invoice from ChemPro`,
  
  overdue: `**Overdue & Urgent Compliance Actions:**\n\n🔴 **CRITICAL – GSTR-1 (Mar 2026)**\nDue: April 11, 2026 | Status: OVERDUE\nLate fee: ₹200/day (max ₹10,000)\n*File immediately to stop accumulating penalties.*\n\n🟡 **URGENT – GSTR-2B Reconciliation**\nDue: April 15, 2026 | 3 days remaining\nEnsure all mismatches are resolved before GSTR-3B filing.\n\n🟡 **URGENT – GSTR-3B (Mar 2026)**\nDue: April 20, 2026 | 8 days remaining\nEstimated liability: ₹87,430\n\n💡 *Tip: Filing GSTR-1 first will auto-populate GSTR-3B data.*`,

  gst: `**GST Liability Reduction Strategies:**\n\n1. **Optimize ITC Claims** – Recover ₹18,300 in blocked credits by resolving mismatches with 3 vendors.\n\n2. **Input Tax Credit Planning** – Ensure all vendor invoices are raised before the 25th of the month to appear in GSTR-2B.\n\n3. **Composition Scheme Review** – For eligible B2C transactions, consider restructuring billing cycles.\n\n4. **Reverse Charge Compliance** – Verify all RCM liabilities are correctly identified and paid.\n\n5. **Export Benefits** – Your export invoices qualify for LUT scheme. Confirm LUT renewal for FY 2026-27.\n\n📊 *Potential savings identified: ₹1,240 in blocked credits + ₹18,300 in recoverable ITC.*`,
};

// ─── KPI Summary ──────────────────────────────────────────────────────────────
export const kpiData = {
  complianceScore: 72,
  complianceScoreChange: +4,
  upcomingDeadlines: 3,
  overdueCount: 1,
  itcBalance: 17730,
  itcChange: +12.5,
  netGstPayable: 3870,
  gstDueDays: 8,
  totalTransactions: transactions.length,
  pendingReconciliation: transactions.filter(t => t.status === 'Pending').length,
  mismatchedCount: transactions.filter(t => t.status === 'Mismatched').length,
  totalRevenue: 3456789,
  revenueChange: +8.3,
};
