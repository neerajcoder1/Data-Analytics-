import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Users, DollarSign, UserMinus, Percent, TrendingUp, ShoppingBag, Award, ChevronRight } from 'lucide-react';

// === DATA FOR HR ANALYTICS DASHBOARD ===
interface HRDeptData {
  name: string;
  active: number;
  attrited: number;
  avgSalary: number;
  satisfaction: number; // 1-5
}

const hrDataByDept: Record<string, HRDeptData[]> = {
  All: [
    { name: 'Engineering', active: 185, attrited: 22, avgSalary: 95000, satisfaction: 4.2 },
    { name: 'Sales', active: 110, attrited: 28, avgSalary: 68000, satisfaction: 3.8 },
    { name: 'Marketing', active: 65, attrited: 9, avgSalary: 62000, satisfaction: 4.0 },
    { name: 'HR', active: 35, attrited: 4, avgSalary: 58000, satisfaction: 4.5 },
    { name: 'Finance', active: 45, attrited: 3, avgSalary: 74000, satisfaction: 4.1 },
  ],
  Engineering: [
    { name: 'Frontend', active: 60, attrited: 6, avgSalary: 92000, satisfaction: 4.3 },
    { name: 'Backend', active: 75, attrited: 10, avgSalary: 98000, satisfaction: 4.1 },
    { name: 'Data & AI', active: 30, attrited: 3, avgSalary: 105000, satisfaction: 4.4 },
    { name: 'DevOps', active: 20, attrited: 3, avgSalary: 96000, satisfaction: 4.0 },
  ],
  Sales: [
    { name: 'Enterprise', active: 40, attrited: 8, avgSalary: 85000, satisfaction: 3.9 },
    { name: 'Mid-Market', active: 45, attrited: 12, avgSalary: 60000, satisfaction: 3.7 },
    { name: 'Inside Sales', active: 25, attrited: 8, avgSalary: 50000, satisfaction: 3.8 },
  ],
};

const genderData = [
  { name: 'Male', value: 240, color: '#3b82f6' },
  { name: 'Female', value: 180, color: '#ec4899' },
  { name: 'Non-binary', value: 20, color: '#10b981' },
];

// === DATA FOR SALES ANALYTICS DASHBOARD ===
interface SalesQuarterData {
  month: string;
  revenueYTD: number;
  revenuePY: number; // Previous Year
  profitYTD: number;
  orders: number;
}

const salesDataByQuarter: Record<string, SalesQuarterData[]> = {
  All: [
    { month: 'Jan', revenueYTD: 85000, revenuePY: 72000, profitYTD: 21000, orders: 580 },
    { month: 'Feb', revenueYTD: 92000, revenuePY: 75000, profitYTD: 23000, orders: 620 },
    { month: 'Mar', revenueYTD: 110000, revenuePY: 88000, profitYTD: 29000, orders: 740 },
    { month: 'Apr', revenueYTD: 98000, revenuePY: 82000, profitYTD: 24500, orders: 660 },
    { month: 'May', revenueYTD: 115000, revenuePY: 90000, profitYTD: 31000, orders: 790 },
    { month: 'Jun', revenueYTD: 135000, revenuePY: 102000, profitYTD: 37000, orders: 920 },
    { month: 'Jul', revenueYTD: 120000, revenuePY: 95000, profitYTD: 32000, orders: 810 },
    { month: 'Aug', revenueYTD: 125000, revenuePY: 98000, profitYTD: 33500, orders: 830 },
    { month: 'Sep', revenueYTD: 140000, revenuePY: 110000, profitYTD: 41000, orders: 950 },
    { month: 'Oct', revenueYTD: 130000, revenuePY: 105000, profitYTD: 36000, orders: 890 },
    { month: 'Nov', revenueYTD: 155000, revenuePY: 120000, profitYTD: 46000, orders: 1050 },
    { month: 'Dec', revenueYTD: 180000, revenuePY: 140000, profitYTD: 54000, orders: 1220 },
  ],
  Q1: [
    { month: 'Jan', revenueYTD: 85000, revenuePY: 72000, profitYTD: 21000, orders: 580 },
    { month: 'Feb', revenueYTD: 92000, revenuePY: 75000, profitYTD: 23000, orders: 620 },
    { month: 'Mar', revenueYTD: 110000, revenuePY: 88000, profitYTD: 29000, orders: 740 },
  ],
  Q2: [
    { month: 'Apr', revenueYTD: 98000, revenuePY: 82000, profitYTD: 24500, orders: 660 },
    { month: 'May', revenueYTD: 115000, revenuePY: 90000, profitYTD: 31000, orders: 790 },
    { month: 'Jun', revenueYTD: 135000, revenuePY: 102000, profitYTD: 37000, orders: 920 },
  ],
  Q3: [
    { month: 'Jul', revenueYTD: 120000, revenuePY: 95000, profitYTD: 32000, orders: 810 },
    { month: 'Aug', revenueYTD: 125000, revenuePY: 98000, profitYTD: 33500, orders: 830 },
    { month: 'Sep', revenueYTD: 140000, revenuePY: 110000, profitYTD: 41000, orders: 950 },
  ],
  Q4: [
    { month: 'Oct', revenueYTD: 130000, revenuePY: 105000, profitYTD: 36000, orders: 890 },
    { month: 'Nov', revenueYTD: 155000, revenuePY: 120000, profitYTD: 46000, orders: 1050 },
    { month: 'Dec', revenueYTD: 180000, revenuePY: 140000, profitYTD: 54000, orders: 1220 },
  ],
};

const salesCategoryData = [
  { name: 'Enterprise Software', value: 450000, color: '#4f46e5' },
  { name: 'Consulting Services', value: 320000, color: '#06b6d4' },
  { name: 'SaaS Subscriptions', value: 580000, color: '#10b981' },
  { name: 'Hardware Packages', value: 136000, color: '#f59e0b' },
];

interface InteractiveDashboardsProps {
  activeDashboard: 'HR' | 'Sales';
  setActiveDashboard: (val: 'HR' | 'Sales') => void;
}

export function InteractiveDashboards({ activeDashboard, setActiveDashboard }: InteractiveDashboardsProps) {
  const [hrDept, setHrDept] = useState<'All' | 'Engineering' | 'Sales'>('All');
  const [salesPeriod, setSalesPeriod] = useState<'All' | 'Q1' | 'Q2' | 'Q3' | 'Q4'>('All');

  // Calculate dynamic HR KPIs based on selection
  const currentHRData = hrDataByDept[hrDept];
  const totalActive = currentHRData.reduce((acc, curr) => acc + curr.active, 0);
  const totalAttrited = currentHRData.reduce((acc, curr) => acc + curr.attrited, 0);
  const totalHeadcount = totalActive + totalAttrited;
  const attritionRate = totalHeadcount > 0 ? ((totalAttrited / totalHeadcount) * 100).toFixed(1) : '0.0';
  const avgSalary = Math.round(currentHRData.reduce((acc, curr) => acc + curr.avgSalary * curr.active, 0) / (totalActive || 1));
  const avgSatisfaction = (currentHRData.reduce((acc, curr) => acc + curr.satisfaction, 0) / currentHRData.length).toFixed(1);

  // Calculate dynamic Sales KPIs based on selection
  const currentSalesData = salesDataByQuarter[salesPeriod];
  const totalRevenueYTD = currentSalesData.reduce((acc, curr) => acc + curr.revenueYTD, 0);
  const totalRevenuePY = currentSalesData.reduce((acc, curr) => acc + curr.revenuePY, 0);
  const totalProfitYTD = currentSalesData.reduce((acc, curr) => acc + curr.profitYTD, 0);
  const totalOrders = currentSalesData.reduce((acc, curr) => acc + curr.orders, 0);
  const revenueGrowth = totalRevenuePY > 0 ? (((totalRevenueYTD - totalRevenuePY) / totalRevenuePY) * 100).toFixed(1) : '0.0';
  const avgProfitMargin = totalRevenueYTD > 0 ? ((totalProfitYTD / totalRevenueYTD) * 100).toFixed(1) : '0.0';

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200/80 shadow-xl shadow-gray-100/50 overflow-hidden" id="interactive-analytics-suite">
      
      {/* Dashboard Selector Tab */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-4 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">Interactive Sandbox</span>
          <h4 className="text-xl font-bold text-gray-900">Power BI & DAX Simulator</h4>
        </div>
        <div className="flex bg-white border border-gray-200 p-1 rounded-xl shadow-sm self-start sm:self-auto">
          <button
            onClick={() => setActiveDashboard('HR')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeDashboard === 'HR'
                ? 'bg-gray-950 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            id="tab-hr-dashboard"
          >
            HR Analytics
          </button>
          <button
            onClick={() => setActiveDashboard('Sales')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeDashboard === 'Sales'
                ? 'bg-gray-950 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            id="tab-sales-dashboard"
          >
            Sales Performance
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* ==================== HR ANALYTICS DASHBOARD ==================== */}
        {activeDashboard === 'HR' && (
          <div className="space-y-6" id="hr-dashboard-view">
            {/* Slicers / Filters bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Department Slicer:</span>
                <div className="flex gap-1.5">
                  {(['All', 'Engineering', 'Sales'] as const).map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setHrDept(dept)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        hrDept === dept
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-100'
                          : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-[11px] font-medium text-gray-500 italic">
                *Simulating active Power Query & Star Schema relationships
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Users size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Active Count</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">{totalActive}</h5>
                  <span className="text-[10px] text-gray-400 block mt-1">Full-time Employees</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                  <UserMinus size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Resignations</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">{totalAttrited}</h5>
                  <span className="text-[10px] text-gray-400 block mt-1">YTD Departed</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <Percent size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Attrition Rate</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">{attritionRate}%</h5>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">Target: &lt; 15%</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <DollarSign size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Avg Salary</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">
                    ${avgSalary.toLocaleString()}
                  </h5>
                  <span className="text-[10px] text-gray-400 block mt-1">Annualized Base</span>
                </div>
              </div>
            </div>

            {/* Visual Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Bar Chart: Headcount & Resignations */}
              <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-sm font-bold text-gray-900">Headcount vs Attrition by Group</h5>
                  <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-semibold">
                    Dynamic DAX Measures
                  </span>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={currentHRData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px' }}
                        labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                        itemStyle={{ color: '#93c5fd' }}
                      />
                      <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px' }} />
                      <Bar name="Active Employees" dataKey="active" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                      <Bar name="Attrited YTD" dataKey="attrited" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Side Pie Chart: Gender Demographics */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-gray-900 mb-4">Diversity Distribution</h5>
                  <div className="h-44 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={genderData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {genderData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '11px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  {genderData.map((g) => (
                    <div key={g.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: g.color }} />
                        <span className="text-gray-600 font-medium">{g.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">
                        {g.value} ({((g.value / 440) * 100).toFixed(0)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SALES ANALYTICS DASHBOARD ==================== */}
        {activeDashboard === 'Sales' && (
          <div className="space-y-6" id="sales-dashboard-view">
            {/* Slicers / Filters bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Time Intelligence Slicer:</span>
                <div className="flex gap-1.5">
                  {(['All', 'Q1', 'Q2', 'Q3', 'Q4'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => setSalesPeriod(period)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        salesPeriod === period
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-100'
                          : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-[11px] font-medium text-gray-500 italic">
                *Simulating Time Intelligence (YTD vs Previous Year DAX)
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <DollarSign size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">YTD Revenue</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">${totalRevenueYTD.toLocaleString()}</h5>
                  <span className="text-[10px] text-gray-400 block mt-1">YTD Net Earnings</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">YoY Growth</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">+{revenueGrowth}%</h5>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">Vs PY (${totalRevenuePY.toLocaleString()})</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Total Orders</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">{totalOrders.toLocaleString()}</h5>
                  <span className="text-[10px] text-gray-400 block mt-1">Completed Sales</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <Award size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Profit Margin</span>
                  <h5 className="text-2xl font-extrabold text-gray-900 mt-1">{avgProfitMargin}%</h5>
                  <span className="text-[10px] text-gray-400 block mt-1">Net Margin (${totalProfitYTD.toLocaleString()})</span>
                </div>
              </div>
            </div>

            {/* Visual Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Area Chart: Trend */}
              <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-sm font-bold text-gray-900">Revenue Performance Over Time</h5>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-semibold">
                    Interactive Monthly Trend
                  </span>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={currentSalesData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id="colorYTD" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPY" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px' }}
                        labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                        itemStyle={{ color: '#a7f3d0' }}
                      />
                      <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px' }} />
                      <Area name="Revenue YTD ($)" type="monotone" dataKey="revenueYTD" stroke="#10b981" fillOpacity={1} fill="url(#colorYTD)" strokeWidth={2} />
                      <Area name="Revenue PY ($)" type="monotone" dataKey="revenuePY" stroke="#94a3b8" fillOpacity={1} fill="url(#colorPY)" strokeDasharray="5 5" strokeWidth={1.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Side Horizontal Bar Chart: Category distribution */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-gray-900 mb-4">Product Category Revenue</h5>
                  <div className="h-44 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={salesCategoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={65}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {salesCategoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '11px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="space-y-1.5 mt-4">
                  {salesCategoryData.map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                        <span className="text-gray-600 font-medium truncate max-w-[110px]">{c.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">
                        ${(c.value / 1000).toFixed(0)}k ({((c.value / 1486000) * 100).toFixed(0)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
