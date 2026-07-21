import React, { useState, useEffect } from 'react';
import { Terminal, Play, Server, AlertCircle, Cpu, ShieldAlert, Waves, CheckCircle2 } from 'lucide-react';

interface MockResponse {
  endpoint: string;
  method: 'POST' | 'GET';
  statusCode: number;
  latencyMs: number;
  payload: any;
  logs: string[];
}

interface BackendSimulatorProps {
  selectedApi: 'visionx' | 'astra' | 'waterhole' | 'swarm';
  setSelectedApi: (val: 'visionx' | 'astra' | 'waterhole' | 'swarm') => void;
}

export function BackendSimulator({ selectedApi, setSelectedApi }: BackendSimulatorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<MockResponse | null>(null);
  
  // Custom form state
  const [skillsFilter, setSkillsFilter] = useState('Python, Data Analysis, SQL');
  const [district, setDistrict] = useState('Bengaluru Central');
  const [sensorId, setSensorId] = useState('SEN-8869');
  const [swarmPrompt, setSwarmPrompt] = useState('Summarize user activity and cluster by department');

  const runSimulation = () => {
    setIsLoading(true);
    setResponse(null);

    // Create a slight simulated delay
    setTimeout(() => {
      let mockRes: MockResponse;

      if (selectedApi === 'visionx') {
        mockRes = {
          endpoint: '/api/v1/recommendations/internship',
          method: 'POST',
          statusCode: 200,
          latencyMs: 142,
          logs: [
            'INFO: [VisionX] Receiving recommendation query...',
            `INFO: Parsing filter parameters: "${skillsFilter}"`,
            'DEBUG: Tokenizing skills with CountVectorizer...',
            'DEBUG: Computing Cosine Similarity with candidate embeddings...',
            'INFO: Match complete. Ranking top 3 internships...'
          ],
          payload: {
            success: true,
            query: skillsFilter,
            matches_found: 3,
            algorithm: 'Scikit-Learn (Cosine Similarity)',
            recommendations: [
              {
                title: "Business Intelligence Intern",
                company: "TechCorp India Ltd.",
                similarity_score: 0.942,
                required_skills: ["Python", "SQL", "Power BI"],
                match_reason: "High dense similarity overlap in SQL database engineering and Python analytics."
              },
              {
                title: "Junior Data Analyst",
                company: "Deloitte India Solutions",
                similarity_score: 0.815,
                required_skills: ["Data Analysis", "SQL", "Excel"],
                match_reason: "Strong compatibility with core analytical concepts and reporting."
              },
              {
                title: "Data Engineer Associate",
                company: "Karnataka Smart Systems",
                similarity_score: 0.728,
                required_skills: ["SQL", "FastAPI", "Python"],
                match_reason: "Matches FastAPI backend development credentials."
              }
            ]
          }
        };
      } else if (selectedApi === 'astra') {
        mockRes = {
          endpoint: `/api/v1/astra/crime-analytics?district=${encodeURIComponent(district)}`,
          method: 'GET',
          statusCode: 200,
          latencyMs: 185,
          logs: [
            'INFO: [ASTRA] Incoming query for incident report data...',
            `INFO: Restricting search queries to District: ${district}`,
            'DEBUG: Querying incident tables from local SQL databases...',
            'DEBUG: Creating rolling statistical risk scores...',
            'INFO: Grouping results by offense type & timestamp...'
          ],
          payload: {
            district: district,
            status: "ACTIVE",
            crime_index_rating: "MODERATE",
            total_incidents_30d: 142,
            major_categories_distribution: {
              cyber_crime: "42%",
              property_theft: "28%",
              traffic_offenses: "20%",
              miscellaneous: "10%"
            },
            predictive_hotspots: [
              { sector: "Zone 4 Sector B", risk_multiplier: "1.4x", optimal_patrol_hours: "22:00 - 02:00" },
              { sector: "Zone 1 Sector A", risk_multiplier: "0.9x", optimal_patrol_hours: "10:00 - 14:00" }
            ],
            system_integrity_status: "SECURE"
          }
        };
      } else if (selectedApi === 'waterhole') {
        mockRes = {
          endpoint: '/api/v1/sentinel/drowning-prediction',
          method: 'POST',
          statusCode: 200,
          latencyMs: 98,
          logs: [
            'INFO: [Sentinel] IoT telemetry beacon heard.',
            `INFO: Parsing telemetry payload for sensor: ${sensorId}`,
            'DEBUG: Evaluating water depth & temperature fluctuations...',
            'DEBUG: Analyzing motion anomaly detection streams...',
            'WARN: Warning threshold exceeded on sensor depth triggers.'
          ],
          payload: {
            sensor_id: sensorId,
            coordinates: { latitude: 12.9716, longitude: 77.5946 },
            telemetry: {
              water_depth_meters: 4.8,
              surface_temperature_c: 24.2,
              undercurrent_velocity_mps: 1.2,
              crowd_density_ratio: 0.85
            },
            drowning_risk_assessment: {
              risk_level: "HIGH",
              probability_score: 0.84,
              key_triggers: ["Sudden depth fluctuation", "Undercurrent threshold breach"],
              alert_action_triggered: true,
              police_alert_dispatched: "ASTRA Dispatch Station #04"
            }
          }
        };
      } else {
        mockRes = {
          endpoint: '/api/v1/swarm/coordinate-workflow',
          method: 'POST',
          statusCode: 200,
          latencyMs: 312,
          logs: [
            'INFO: [SwarmAssist] Booting asynchronous master pipeline...',
            'DEBUG: Spawning Agent 1 [PlannerAgent] -> Generating workflow directives...',
            `DEBUG: Spawning Agent 2 [AnalysisAgent] -> Processing query: "${swarmPrompt}"`,
            'DEBUG: Spawning Agent 3 [ReviewAgent] -> Inspecting database outputs for telemetry integrity...',
            'INFO: Agent alignment reached. Aggregating multi-agent outputs...'
          ],
          payload: {
            pipeline_status: "SUCCESSFUL",
            active_agents: 3,
            execution_seconds: 0.31,
            user_prompt: swarmPrompt,
            consensus_report: {
              summary: "Structured layout categorization complete. Detected anomalous spikes in Marketing headcount.",
              recommendation: "Re-allocate Sales and Marketing operations to match Power BI forecast indices.",
              confidence_metric: "98.4%"
            },
            active_workflows: [
              { agent: "PlannerAgent", status: "COMPLETED", active_tasks: 0 },
              { agent: "AnalysisAgent", status: "COMPLETED", active_tasks: 0 },
              { agent: "ReviewAgent", status: "COMPLETED", active_tasks: 0 }
            ]
          }
        };
      }

      setResponse(mockRes);
      setIsLoading(false);
    }, 900);
  };

  // Run initial simulation on component mount
  useEffect(() => {
    runSimulation();
  }, [selectedApi]);

  return (
    <div className="w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl text-slate-100 overflow-hidden" id="backend-api-sandbox">
      
      {/* Header bar */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 text-teal-400 p-2 rounded-xl">
            <Terminal size={18} />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400">REST API Sandbox</span>
            <h4 className="text-base font-bold text-slate-100">AI & FastAPI Microservices</h4>
          </div>
        </div>

        {/* API Selector */}
        <div className="flex flex-wrap gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setSelectedApi('visionx')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedApi === 'visionx' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            VisionX (AI Rec)
          </button>
          <button
            onClick={() => setSelectedApi('astra')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedApi === 'astra' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ASTRA (Police)
          </button>
          <button
            onClick={() => setSelectedApi('waterhole')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedApi === 'waterhole' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Waterhole Sentinel
          </button>
          <button
            onClick={() => setSelectedApi('swarm')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedApi === 'swarm' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SwarmAssist (Agents)
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        
        {/* Left Side: Parameters Form / API Spec */}
        <div className="lg:col-span-5 p-6 border-r border-slate-800/80 bg-slate-950/40 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-teal-400">
              <Server size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">Request Parameters</span>
            </div>

            {/* VisionX form */}
            {selectedApi === 'visionx' && (
              <div className="space-y-3" id="visionx-api-form">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    Skills Query (User input tags)
                  </label>
                  <input
                    type="text"
                    value={skillsFilter}
                    onChange={(e) => setSkillsFilter(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Calculates natural language embeddings similarity with real-world vacancies using <strong>CountVectorizer</strong> & <strong>Cosine Similarity</strong>.
                </p>
              </div>
            )}

            {/* ASTRA Form */}
            {selectedApi === 'astra' && (
              <div className="space-y-3" id="astra-api-form">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    Select Jurisdiction District
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Bengaluru Central">Bengaluru Central</option>
                    <option value="Bengaluru South">Bengaluru South</option>
                    <option value="Mysuru Range">Mysuru Range</option>
                    <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                  </select>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Query backend APIs developed for the Karnataka State Police department. Computes rolling incident analytics and patrol optimization maps.
                </p>
              </div>
            )}

            {/* Waterhole Sentinel Form */}
            {selectedApi === 'waterhole' && (
              <div className="space-y-3" id="waterhole-api-form">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    IoT Beacon Waterhole Sensor ID
                  </label>
                  <input
                    type="text"
                    value={sensorId}
                    onChange={(e) => setSensorId(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Queries active telemetry. Triggers AI-driven drowning risk assessment and dispatches microservices for immediate rescue operations.
                </p>
              </div>
            )}

            {/* SwarmAssist Form */}
            {selectedApi === 'swarm' && (
              <div className="space-y-3" id="swarm-api-form">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    Multi-Agent Prompt Task
                  </label>
                  <textarea
                    value={swarmPrompt}
                    onChange={(e) => setSwarmPrompt(e.target.value)}
                    rows={3}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500 resize-none"
                  />
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Executes coordinate multi-agent consensus tasks (Planner, Analytics, Reviewer) asynchronously using React and FastAPI.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={runSimulation}
            disabled={isLoading}
            className="w-full bg-teal-500 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-400 transition-all disabled:opacity-50 text-xs shadow-lg shadow-teal-500/10 active:scale-95"
            id="btn-trigger-api"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                <span>Executing API query...</span>
              </>
            ) : (
              <>
                <Play size={14} className="fill-slate-950" />
                <span>Submit REST API Request</span>
              </>
            )}
          </button>
        </div>

        {/* Right Side: Log Feed & JSON Output */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950 text-[11px] font-mono border-t lg:border-t-0 border-slate-800">
          
          {/* Output header tabs */}
          <div className="border-b border-slate-800/80 px-4 py-3 flex items-center justify-between text-[10px] text-slate-400 uppercase tracking-widest font-semibold bg-slate-950">
            <span>Terminal Output Console</span>
            {response && (
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className="text-emerald-500">HTTP {response.statusCode}</span>
                <span>•</span>
                <span className="text-teal-400">{response.latencyMs}ms</span>
              </div>
            )}
          </div>

          {/* Terminal Console Panels */}
          <div className="flex-1 p-5 space-y-4 overflow-y-auto max-h-[380px]">
            
            {/* Logs stream */}
            <div className="space-y-1.5 text-slate-400 border-b border-slate-850 pb-4">
              {isLoading ? (
                <div className="text-teal-400 animate-pulse flex items-center gap-2">
                  <Cpu className="animate-spin" size={12} />
                  <span>[Gateway] Dispatching request payload to server...</span>
                </div>
              ) : (
                <>
                  {response?.logs.map((log, idx) => (
                    <div key={idx} className={`${log.startsWith('WARN') ? 'text-amber-400' : log.startsWith('DEBUG') ? 'text-slate-500' : 'text-slate-300'}`}>
                      {log}
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* JSON Payload representation */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">Response JSON Payload</span>
              {isLoading ? (
                <div className="space-y-2 pt-2">
                  <div className="h-4 bg-slate-900 rounded-md w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-slate-900 rounded-md w-1/2 animate-pulse"></div>
                  <div className="h-4 bg-slate-900 rounded-md w-5/6 animate-pulse"></div>
                </div>
              ) : response ? (
                <pre className="text-teal-400 bg-slate-900/50 p-4 rounded-xl border border-slate-850 overflow-x-auto text-[11px] leading-relaxed select-text">
                  <code>{JSON.stringify(response.payload, null, 2)}</code>
                </pre>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
