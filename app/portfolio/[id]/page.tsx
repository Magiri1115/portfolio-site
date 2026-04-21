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
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const chartData = project.chartData
    ? project.chartData.labels.map((label, index) => ({
        name: label,
        before: project.chartData?.datasets[0].data[index],
        after: project.chartData?.datasets[1].data[index],
      }))
    : [];

  return (
    <div className="max-w-[144rem] mx-auto px-6 md:px-20 py-12 md:py-24">
      {/* Hero */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[3.6rem] md:text-[5.2rem] font-medium mb-6 leading-tight">{project.title}</h1>
        <p className="text-[1.8rem] md:text-[2rem] text-slate-400 mb-8 max-w-3xl leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-900/30 text-blue-400 px-4 py-1.5 rounded-md text-[1.4rem]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Target Users */}
      {project.targetUsers && (
        <section className="mb-16 md:mb-24">
          <SectionTitle title="ターゲットユーザー" underline={false} className="text-[2.4rem] md:text-[2.8rem]" />
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
            <p className="font-bold mb-6 text-[1.8rem]">主な対象：</p>
            <ul className="space-y-3 text-slate-400 text-[1.6rem]">
              {project.targetUsers.map((user, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  {user}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Challenges & Data */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-[2.4rem] md:text-[2.8rem] font-medium mb-12">具体的課題</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12 space-y-10">
            {project.challenges?.map((challenge, i) => (
              <div key={i}>
                <h3 className="text-blue-400 font-medium mb-4 text-[1.8rem]">{challenge.title}</h3>
                <ul className="space-y-2 text-[1.4rem] text-slate-400">
                  {challenge.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
            <h3 className="font-medium mb-6 text-[1.8rem]">データによる裏付け</h3>
            <p className="text-slate-300 mb-4 text-[1.4rem]">改善前の指標（3ヶ月平均）:</p>
            <ul className="space-y-3 text-[1.4rem] text-slate-400">
              {project.dataBacking?.map((data, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Definition */}
      {project.metrics && (
        <section className="mb-16 md:mb-24">
          <h2 className="text-[2.4rem] md:text-[2.8rem] font-medium mb-12">成功定義</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="bg-[#1e3a5f] rounded-lg p-8 flex flex-col justify-between h-full">
                <div className="text-[1.3rem] text-slate-400 mb-4">{metric.label}</div>
                <div className="text-[3.2rem] md:text-[3.6rem] font-medium text-blue-400 mb-4">{metric.value}</div>
                <div className="text-[1.2rem] text-slate-500">{metric.target}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-[1.2rem] text-slate-500 space-y-2">
            <p>計測期間: リニューアル後3ヶ月 | 比較対象: リニューアル前3ヶ月平均</p>
            <p>分析ツール: Google Analytics 4, Hotjar, BigQuery</p>
          </div>
        </section>
      )}

      {/* Team & Role */}
      {project.team && (
        <section className="mb-16 md:mb-24">
          <h2 className="text-[2.4rem] md:text-[2.8rem] font-medium mb-12">チーム・役割</h2>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
            <p className="mb-8 text-[1.6rem]">
              <span className="font-bold">チーム構成:</span>{' '}
              <span className="text-slate-400">{project.team.composition}</span>
            </p>
            <p className="font-bold mb-4 text-[1.6rem]">担当役割:</p>
            <ul className="space-y-3 text-slate-400 text-[1.6rem]">
              {project.team.role.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* UX Design */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-[2.4rem] md:text-[2.8rem] font-medium mb-12">UX設計</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
            <h3 className="font-medium mb-8 text-[1.8rem]">主要な改善施策</h3>
            <div className="space-y-10">
              {project.uxImprovements?.map((imp, i) => (
                <div key={i}>
                  <p className="text-slate-200 font-medium mb-3 text-[1.6rem]">{imp.title}</p>
                  <ul className="space-y-2 text-[1.4rem] text-slate-400">
                    {imp.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
            <h3 className="font-medium mb-8 text-[1.8rem]">ユーザーテストの実施</h3>
            <div className="space-y-10">
              <div>
                <p className="font-bold text-[1.4rem] mb-3">検証方法:</p>
                <ul className="space-y-2 text-[1.4rem] text-slate-400">
                  {project.userTests?.methods.map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-bold text-[1.4rem] mb-3">主な発見:</p>
                <ul className="space-y-2 text-[1.4rem] text-slate-400">
                  {project.userTests?.findings.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
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
        <section className="mb-16 md:mb-24">
          <h2 className="text-[2.4rem] md:text-[2.8rem] font-medium mb-12">データに基づく改善</h2>
          <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
            <h3 className="text-blue-400 font-medium mb-10 text-[1.8rem]">コンバージョン率の推移</h3>
            <div className="h-[30rem] w-full">
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
                      borderRadius: '0.8rem',
                      color: '#f8fafc',
                      fontSize: '1.2rem'
                    }}
                    formatter={(value: any) => [`${value}%`, '']}
                  />
                  <Legend wrapperStyle={{ paddingTop: '2rem', fontSize: '1.2rem' }} />
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
        <section className="mb-16 md:mb-24">
          <h2 className="text-[2.4rem] md:text-[2.8rem] font-medium mb-12">技術選定の理由</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.techStack.map((tech, i) => (
              <div key={i} className="bg-[#1e3a5f] rounded-lg p-8 h-full">
                <h3 className="text-blue-400 font-medium mb-6 text-[1.8rem]">{tech.name}</h3>
                <ul className="space-y-3 text-[1.3rem] text-slate-400">
                  {tech.reasons.map((reason, j) => (
                    <li key={j} className="flex items-start gap-3 leading-relaxed">
                      <span className="text-blue-600 mt-1">•</span>
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
