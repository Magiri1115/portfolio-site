'use client';

import { useParams, notFound } from 'next/navigation';
import { PROJECTS } from '@/constants/projects';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const chartData = project.chartData?.labels.map((label, index) => ({
    name: label,
    before: project.chartData?.datasets[0].data[index],
    after: project.chartData?.datasets[1].data[index],
  }));

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
        <p className="text-lg text-slate-400 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Target Users */}
      {project.targetUsers && (
        <section className="mb-16">
          <SectionTitle title="ターゲットユーザー" underline={false} className="text-2xl" />
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8">
            <p className="font-bold mb-4">主な対象：</p>
            <ul className="space-y-2 text-slate-400">
              {project.targetUsers.map((user, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  {user}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Challenges & Data */}
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-8">具体的課題</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 space-y-8">
            {project.challenges?.map((challenge, i) => (
              <div key={i}>
                <h3 className="text-blue-400 font-medium mb-3">{challenge.title}</h3>
                <ul className="space-y-1 text-sm text-slate-400">
                  {challenge.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8">
            <h3 className="font-medium mb-4">データによる裏付け</h3>
            <p className="text-slate-300 mb-4 text-sm">改善前の指標（3ヶ月平均）:</p>
            <ul className="space-y-2 text-sm text-slate-400">
              {project.dataBacking?.map((data, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Definition */}
      {project.metrics && (
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">成功定義</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="bg-[#1e3a5f] rounded-lg p-6 flex flex-col justify-between">
                <div className="text-xs text-slate-400 mb-2">{metric.label}</div>
                <div className="text-3xl font-medium text-blue-400 mb-2">{metric.value}</div>
                <div className="text-[10px] text-slate-500">{metric.target}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs text-slate-500 space-y-1">
            <p>計測期間: リニューアル後3ヶ月 | 比較対象: リニューアル前3ヶ月平均</p>
            <p>分析ツール: Google Analytics 4, Hotjar, BigQuery</p>
          </div>
        </section>
      )}

      {/* Team & Role */}
      {project.team && (
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">チーム・役割</h2>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8">
            <p className="mb-6">
              <span className="font-bold">チーム構成:</span>{' '}
              <span className="text-slate-400">{project.team.composition}</span>
            </p>
            <p className="font-bold mb-4">担当役割:</p>
            <ul className="space-y-2 text-slate-400">
              {project.team.role.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* UX Design */}
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-8">UX設計</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8">
            <h3 className="font-medium mb-6">主要な改善施策</h3>
            <div className="space-y-8">
              {project.uxImprovements?.map((imp, i) => (
                <div key={i}>
                  <p className="text-slate-200 font-medium mb-2">{imp.title}</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    {imp.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8">
            <h3 className="font-medium mb-6">ユーザーテストの実施</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-sm mb-2">検証方法:</p>
                <ul className="space-y-1 text-sm text-slate-400">
                  {project.userTests?.methods.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm mb-2">主な発見:</p>
                <ul className="space-y-1 text-sm text-slate-400">
                  {project.userTests?.findings.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      {project.chartData && (
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">データに基づく改善</h2>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8">
            <h3 className="text-blue-400 font-medium mb-8">コンバージョン率の推移</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                  <YAxis
                    stroke="#64748b"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(val) => `${val}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #3b82f6',
                      borderRadius: '8px',
                      color: '#f8fafc',
                    }}
                    formatter={(val: number) => [`${val}%`, '']}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Line
                    type="monotone"
                    dataKey="before"
                    name="改善前"
                    stroke="#f87171"
                    strokeWidth={2}
                    dot={{ fill: '#f87171' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="after"
                    name="改善後"
                    stroke="#60a5fa"
                    strokeWidth={3}
                    dot={{ fill: '#60a5fa' }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Reasons */}
      {project.techStack.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">技術選定の理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.techStack.map((tech, i) => (
              <div key={i} className="bg-[#1e3a5f] rounded-lg p-6">
                <h3 className="text-blue-400 font-medium mb-4">{tech.name}</h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  {tech.reasons.map((reason, j) => (
                    <li key={j} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-blue-600">•</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
