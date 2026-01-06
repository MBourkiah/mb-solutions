"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, TrendingDown, CheckCircle } from "lucide-react";

/**
 * Dashboard Preview - NEU
 *
 * Live Monitoring Dashboard Mockup
 * Zeigt "Behind the Scenes" & Technical Authority
 */

export function DashboardPreview() {
  const metrics = [
    {
      label: "Uptime",
      value: "99.95%",
      trend: "+0.05%",
      status: "Online",
      color: "green",
    },
    {
      label: "Response",
      value: "120ms",
      trend: "-15ms",
      status: "Optimal",
      color: "cyan",
    },
    {
      label: "Requests",
      value: "1.2M",
      trend: "+12%",
      status: "Today",
      color: "blue",
    },
    {
      label: "Performance",
      value: "98/100",
      trend: "+2",
      status: "Excellent",
      color: "purple",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/8 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
              Continuous Monitoring
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Performance in Echtzeit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
          >
            24/7 System-Monitoring inklusive. So behalten wir Ihre Systeme im Blick.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            {/* Massive Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-3xl opacity-50" />

            {/* Dashboard Container */}
            <div className="relative rounded-3xl bg-[#0A0E27] p-6 md:p-8 border border-white/10 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-400">Live Monitoring</span>
                </div>
                <div className="text-xs text-gray-500">Updated 2s ago</div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <MetricCard key={metric.label} {...metric} index={index} />
                ))}
              </div>

              {/* Charts Placeholder */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Response Time Chart */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-400">Response Times (24h)</span>
                    <TrendingDown className="w-4 h-4 text-green-400" />
                  </div>
                  {/* Chart Placeholder */}
                  <div className="h-32 flex items-end gap-2">
                    {[40, 35, 50, 30, 45, 25, 35, 30, 28, 25, 30, 20].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-500/20 rounded-t transition-all duration-300 hover:from-cyan-500/70"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Traffic Chart */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-400">Traffic by Hour</span>
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  {/* Chart Placeholder */}
                  <div className="h-32 flex items-end gap-2">
                    {[30, 45, 35, 50, 40, 60, 55, 70, 65, 75, 60, 50].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/50 to-blue-500/20 rounded-t transition-all duration-300 hover:from-blue-500/70"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="mt-8 flex flex-wrap gap-3">
                <StatusDot label="API Server" status="online" />
                <StatusDot label="Database" status="online" />
                <StatusDot label="CDN" status="online" />
                <StatusDot label="Cache" status="online" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  trend,
  status,
  color,
  index,
}: {
  label: string;
  value: string;
  trend: string;
  status: string;
  color: string;
  index: number;
}) {
  const colors: Record<string, string> = {
    green: "text-green-400",
    cyan: "text-cyan-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      <div className="text-xs text-gray-500 mb-2">{label}</div>
      <div className="flex items-baseline gap-2 mb-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
          className="text-2xl md:text-3xl font-black text-white"
        >
          {value}
        </motion.div>
        <div className="text-xs text-gray-500">/ day</div>
      </div>
      <div className="flex items-center gap-2">
        <div className={`text-xs font-semibold ${colors[color]}`}>{trend}</div>
        <div className="text-xs text-gray-500">• {status}</div>
      </div>
    </motion.div>
  );
}

function StatusDot({ label, status }: { label: string; status: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">
      <div
        className={`w-2 h-2 rounded-full ${
          status === "online" ? "bg-green-400 animate-pulse" : "bg-red-400"
        }`}
      />
      <span className="text-xs font-medium text-gray-400">{label}</span>
      <CheckCircle className="w-3 h-3 text-green-400" />
    </div>
  );
}
