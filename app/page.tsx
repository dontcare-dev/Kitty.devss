// app/page.tsx - Complete Kitty Devs Links URL Shortener
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Link as LinkIcon,
  Copy,
  QrCode,
  Calendar,
  Lock,
  Globe2,
  BarChart3,
  MousePointerClick,
  Users,
  Server,
  Chrome,
  Apple,
  Award,
  Star,
  Twitter,
  Github,
  Menu,
  X,
  Check,
  AlertCircle,
  TrendingUp,
  MapPin,
  Smartphone,
  Monitor,
  Clock,
  Eye,
  Repeat,
  ExternalLink,
  Settings,
  LogOut,
  CreditCard,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Map,
  ChevronRight,
  Play,
  Pause,
  Download,
  Share2,
  Heart,
  Bell,
  User,
  Search,
  Filter,
  Plus,
  Trash2,
  Edit,
  MoreVertical,
  Send,
  Paperclip,
  Image,
  Video,
  FileText,
  Folder,
  Grid,
  List,
  Layout,
  Sun,
  Moon,
  Command,
  CornerDownLeft,
  Loader2
} from "lucide-react";

// ============ UTILITIES ============
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

// ============ THEME PROVIDER ============
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light';
    if (saved) setTheme(saved);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  return <>{children({ theme, toggle })}</>;
};

// ============ LOADING SCREEN ============
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
  >
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full mb-4"
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-white text-lg"
      >
        kitty.devs.links
      </motion.p>
    </div>
  </motion.div>
);

// ============ COMMAND PALETTE ============
const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  if (!open) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-[500px] max-w-[90vw] bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <Search className="w-5 h-5 text-neutral-500" />
          <input
            placeholder="Type a command..."
            className="flex-1 h-12 bg-transparent outline-none text-white placeholder:text-neutral-500"
            autoFocus
          />
          <kbd className="text-xs text-neutral-500">⌘K</kbd>
        </div>
        <div className="p-2">
          {['Create New Link', 'View Analytics', 'Pricing', 'Documentation'].map(cmd => (
            <div key={cmd} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer text-white">
              {cmd === 'Create New Link' && <LinkIcon className="w-4 h-4" />}
              {cmd === 'View Analytics' && <BarChart3 className="w-4 h-4" />}
              {cmd === 'Pricing' && <CreditCard className="w-4 h-4" />}
              {cmd === 'Documentation' && <HelpCircle className="w-4 h-4" />}
              {cmd}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============ HERO SECTION ============
const HeroSection = () => {
  const [longUrl, setLongUrl] = useState("https://example.com/products/2026/new-launch");
  const [customSlug, setCustomSlug] = useState("launch");
  const [copied, setCopied] = useState(false);

  const shortUrl = `kitty.devs.links/${customSlug || 'launch'}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-sm text-neutral-300">Now with AI-powered analytics</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              Forge Links That
            </span>
            <br />
            <span className="relative inline-block">
              People Actually Remember
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            </span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mt-6">
            Create custom branded URLs in seconds. Fast, secure, analytics-powered, and completely customizable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-red-500/25"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-semibold backdrop-blur-sm"
            >
              View Demo
            </motion.button>
          </div>

          {/* Live Preview Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="text-left mb-4 text-sm text-neutral-400">Live Preview</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-black/50 rounded-xl border border-white/10">
                  <Globe2 className="w-5 h-5 text-neutral-500" />
                  <input
                    type="text"
                    value={longUrl}
                    onChange={e => setLongUrl(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white"
                  />
                </div>
                <div className="flex items-center gap-3 p-3 bg-black/50 rounded-xl border border-white/10">
                  <LinkIcon className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-500">kitty.devs.links/</span>
                  <input
                    type="text"
                    value={customSlug}
                    onChange={e => setCustomSlug(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white"
                    placeholder="custom-slug"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                  <div>
                    <div className="text-sm text-neutral-400">Your short link</div>
                    <div className="text-white font-mono">{shortUrl}</div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shortUrl);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg transition"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ URL SHORTENER TOOL ============
const UrlShortenerTool = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [password, setPassword] = useState("");
  const [customDomain, setCustomDomain] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');

  const validateSlug = (slug: string) => {
    if (!slug) return true;
    const valid = /^[a-zA-Z0-9-_]+$/.test(slug);
    if (!valid) setError("Only letters, numbers, hyphens and underscores allowed");
    else setError("");
    return valid;
  };

  const handleGenerate = async () => {
    if (!longUrl) {
      setError("Please enter a URL");
      return;
    }
    if (!validateSlug(customAlias)) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const slug = customAlias || Math.random().toString(36).substring(2, 8);
    const domain = customDomain || "kitty.devs.links";
    setGeneratedUrl(`https://${domain}/${slug}`);
    setIsLoading(false);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Create Your Short Link</h2>
          <p className="text-neutral-400 mt-2">Customize every aspect of your branded URL</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8 border border-white/10"
        >
          <div className="flex gap-2 mb-6 border-b border-white/10">
            {['basic', 'advanced'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeTab === tab ? 'text-red-500' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            {/* Long URL */}
            <div>
              <label className="block text-sm font-medium mb-2">Long URL *</label>
              <div className="flex items-center gap-3 p-3 bg-black/50 rounded-xl border border-white/10 focus-within:border-red-500/50 transition">
                <Globe2 className="w-5 h-5 text-neutral-500" />
                <input
                  type="url"
                  value={longUrl}
                  onChange={e => setLongUrl(e.target.value)}
                  placeholder="https://example.com/your-long-url"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-neutral-600"
                />
              </div>
            </div>

            {/* Custom Alias */}
            <div>
              <label className="block text-sm font-medium mb-2">Custom Alias (Optional)</label>
              <div className="flex items-center gap-3 p-3 bg-black/50 rounded-xl border border-white/10 focus-within:border-red-500/50 transition">
                <LinkIcon className="w-5 h-5 text-neutral-500" />
                <span className="text-neutral-500">kitty.devs.links/</span>
                <input
                  type="text"
                  value={customAlias}
                  onChange={e => {
                    setCustomAlias(e.target.value);
                    validateSlug(e.target.value);
                  }}
                  placeholder="my-brand"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-neutral-600"
                />
              </div>
              {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</p>}
            </div>

            {/* Advanced options */}
            <AnimatePresence>
              {activeTab === 'advanced' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" />Expiration Date</label>
                    <input
                      type="datetime-local"
                      value={expirationDate}
                      onChange={e => setExpirationDate(e.target.value)}
                      className="w-full p-3 bg-black/50 rounded-xl border border-white/10 focus:border-red-500/50 outline-none text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Lock className="w-4 h-4" />Password Protection</label>
                    <input
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Set a password"
                      className="w-full p-3 bg-black/50 rounded-xl border border-white/10 focus:border-red-500/50 outline-none text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Globe2 className="w-4 h-4" />Custom Domain</label>
                    <input
                      type="text"
                      value={customDomain}
                      onChange={e => setCustomDomain(e.target.value)}
                      placeholder="link.yourdomain.com"
                      className="w-full p-3 bg-black/50 rounded-xl border border-white/10 focus:border-red-500/50 outline-none text-white"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-500/25 transition-all disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
              {isLoading ? "Generating..." : "Generate Link"}
            </button>

            {generatedUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/10 rounded-xl border border-red-500/20"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-sm text-neutral-400">Your shortened URL</div>
                    <a href={generatedUrl} target="_blank" className="text-red-400 font-mono hover:underline">{generatedUrl}</a>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(generatedUrl);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="p-2 hover:bg-white/10 rounded-lg transition"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setShowQR(!showQR)}
                      className="p-2 hover:bg-white/10 rounded-lg transition"
                    >
                      <QrCode className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {showQR && (
                  <div className="mt-4 flex justify-center">
                    <div className="p-4 bg-white rounded-xl">
                      {/* QR code would go here - using a div as placeholder */}
                      <div className="w-32 h-32 bg-black flex items-center justify-center text-xs">QR Code</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ ANALYTICS DASHBOARD ============
const AnalyticsDashboard = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const stats = [
    { label: "Total Clicks", value: 28491, change: "+42%", icon: MousePointerClick, color: "text-red-500" },
    { label: "Active Links", value: 1247, change: "+18%", icon: LinkIcon, color: "text-blue-500" },
    { label: "Countries", value: 89, change: "+5", icon: Globe, color: "text-green-500" },
    { label: "Devices", value: 3, change: "Mobile +12%", icon: Smartphone, color: "text-purple-500" },
  ];

  const recentActivity = [
    { url: "/launch", clicks: 342, time: "2 min ago", location: "United States" },
    { url: "/summer-sale", clicks: 189, time: "15 min ago", location: "United Kingdom" },
    { url: "/black-friday", clicks: 567, time: "1 hour ago", location: "Germany" },
    { url: "/newsletter", clicks: 98, time: "3 hours ago", location: "Canada" },
    { url: "/product-launch", clicks: 2341, time: "5 hours ago", location: "Japan" },
  ];

  const chartData = [65, 78, 92, 88, 102, 115, 98, 124, 142, 138, 156, 189, 201, 198, 215, 234, 256, 278, 298, 312, 334, 356, 378, 412];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Analytics Dashboard</h2>
          <p className="text-neutral-400 mt-2">Track every click with real-time insights</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5 border border-white/10 hover:border-red-500/30 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 border border-white/10 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Click Trends (Last 24 hours)</h3>
            <div className="flex gap-2">
              {['Day', 'Week', 'Month'].map(p => (
                <button key={p} className="px-3 py-1 text-sm rounded-lg hover:bg-white/10 transition">{p}</button>
              ))}
            </div>
          </div>
          <div className="h-64 flex items-end gap-1">
            {chartData.map((value, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${(value / 450) * 100}%` }}
                transition={{ delay: i * 0.01, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-red-500/50 to-red-500 rounded-t-sm hover:from-red-400 hover:to-red-400 cursor-pointer relative group"
                onMouseEnter={() => setHoveredValue(value)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {hoveredValue === value && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {value} clicks
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Device Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 border border-white/10"
          >
            <h3 className="font-semibold mb-4">Device Distribution</h3>
            <div className="space-y-3">
              {[
                { name: "Mobile", value: 58, icon: Smartphone, color: "bg-purple-500" },
                { name: "Desktop", value: 32, icon: Monitor, color: "bg-blue-500" },
                { name: "Tablet", value: 10, icon: Monitor, color: "bg-green-500" },
              ].map(device => (
                <div key={device.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center gap-2"><device.icon className="w-4 h-4" />{device.name}</span>
                    <span>{device.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${device.value}%` }}
                      transition={{ duration: 0.5 }}
                      className={`h-full ${device.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 border border-white/10"
          >
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentActivity.map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5"
                >
                  <div>
                    <div className="font-mono text-sm text-red-400">{activity.url}</div>
                    <div className="text-xs text-neutral-500 flex items-center gap-2">
                      <Clock className="w-3 h-3" />{activity.time}
                      <MapPin className="w-3 h-3 ml-1" />{activity.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{activity.clicks.toLocaleString()}</div>
                    <div className="text-xs text-neutral-500">clicks</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ FEATURES SECTION ============
const FeaturesSection = () => {
  const features = [
    { icon: LinkIcon, title: "Custom Slugs", desc: "Create: site.com/mybrand", color: "text-red-500" },
    { icon: QrCode, title: "QR Codes", desc: "Auto-generated QR codes", color: "text-purple-500" },
    { icon: Lock, title: "Password Protection", desc: "Protect sensitive links", color: "text-yellow-500" },
    { icon: BarChart3, title: "Analytics", desc: "Track every click", color: "text-blue-500" },
    { icon: Globe2, title: "Custom Domains", desc: "Use your own domain", color: "text-green-500" },
    { icon: Users, title: "Team Workspaces", desc: "Collaborate with teams", color: "text-pink-500" },
    { icon: Server, title: "API Access", desc: "Developer-friendly API", color: "text-orange-500" },
    { icon: Zap, title: "Lightning Fast", desc: "Global CDN delivery", color: "text-cyan-500" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Enterprise-Grade Features</h2>
          <p className="text-neutral-400 mt-2">Everything you need to manage your links like a pro</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all cursor-pointer"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ PRICING SECTION ============
const PricingSection = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    { name: "Free", price: 0, links: 100, analytics: "Basic", domains: false, team: false, support: "Community", cta: "Get Started", popular: false },
    { name: "Pro", price: billing === 'monthly' ? 19 : 190, links: "Unlimited", analytics: "Advanced", domains: true, team: false, support: "Email", cta: "Start Free Trial", popular: true },
    { name: "Enterprise", price: billing === 'monthly' ? 99 : 990, links: "Unlimited", analytics: "Custom", domains: true, team: true, support: "24/7 Priority", cta: "Contact Sales", popular: false },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-neutral-400 mt-2">Choose the plan that fits your needs</p>
          <div className="inline-flex items-center gap-3 mt-4 p-1 bg-white/5 rounded-full">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-1.5 rounded-full text-sm transition ${billing === 'monthly' ? 'bg-red-500 text-white' : 'text-neutral-400'}`}
            >Monthly</button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-4 py-1.5 rounded-full text-sm transition ${billing === 'yearly' ? 'bg-red-500 text-white' : 'text-neutral-400'}`}
            >Yearly <span className="text-green-500 text-xs">Save 20%</span></button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-2xl p-6 border ${plan.popular ? 'border-red-500 shadow-lg shadow-red-500/10' : 'border-white/10'} transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price > 0 && <span className="text-neutral-400">/{billing === 'monthly' ? 'mo' : 'yr'}</span>}
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{plan.links === "Unlimited" ? "Unlimited links" : `${plan.links} links`}</li>
                <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{plan.analytics} analytics</li>
                <li className={`flex items-center gap-2 text-sm ${!plan.domains && 'opacity-50'}`}>{plan.domains ? <Check className="w-4 h-4 text-green-500" /> : <AlertCircle className="w-4 h-4" />}Custom domains</li>
                <li className={`flex items-center gap-2 text-sm ${!plan.team && 'opacity-50'}`}>{plan.team ? <Check className="w-4 h-4 text-green-500" /> : <AlertCircle className="w-4 h-4" />}Team management</li>
                <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{plan.support} support</li>
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:shadow-red-500/25' : 'bg-white/10 hover:bg-white/20'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ TESTIMONIALS SECTION ============
const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah Chen", role: "CMO at TechStart", content: "Kitty Devs Links transformed our marketing campaigns. The analytics are incredible and the branded URLs look so professional.", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { name: "Marcus Rodriguez", role: "Product Lead @ GrowthCo", content: "Best URL shortener we've ever used. The team collaboration features and API access are game-changers.", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { name: "Emily Watson", role: "Digital Strategist", content: "The custom domains feature alone is worth it. Our click-through rates increased by 34% after switching.", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Loved by 10,000+ Creators</h2>
          <p className="text-neutral-400 mt-2">Don't just take our word for it</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={testimonial.image} alt="" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-neutral-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ FOOTER ============
const Footer = () => {
  const sections = {
    Product: ["Features", "Pricing", "API", "Changelog"],
    Resources: ["Documentation", "Guides", "Blog", "Support"],
    Company: ["About", "Careers", "Contact", "Status"],
    Legal: ["Privacy", "Terms", "Security", "GDPR"]
  };

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">kitty.devs.links</div>
            <p className="text-neutral-500 text-sm">Forge links that people actually remember.</p>
          </div>
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => <li key={link}><a href="#" className="text-neutral-500 hover:text-white text-sm transition">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <div>© 2024 kitty.devs.links. All rights reserved.</div>
          <div className="flex gap-4">
            <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
            <Github className="w-4 h-4 hover:text-white cursor-pointer" />
            <Mail className="w-4 h-4 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============ BACKGROUND COMPONENTS ============
const AuroraBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/30 rounded-full blur-[100px]" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/30 rounded-full blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]" />
  </div>
);

const AnimatedGrid = () => (
  <div className="fixed inset-0 -z-10 opacity-30">
    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,77,77,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,77,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
  </div>
);

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      className="fixed pointer-events-none z-50 w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[100px] transition-all duration-300"
      style={{ left: position.x - 300, top: position.y - 300 }}
    />
  );
};

const ThemeToggle = ({ theme, toggle }: { theme: string; toggle: () => void }) => (
  <button onClick={toggle} className="fixed bottom-6 right-6 z-40 p-3 glass rounded-full border border-white/10 hover:border-red-500/30 transition">
    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);

// ============ MAIN PAGE ============
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showCommand, setShowCommand] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommand(true);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className={theme === 'dark' ? 'dark bg-black' : 'bg-white'}>
      <AuroraBackground />
      <AnimatedGrid />
      <MouseTracker />
      <ThemeToggle theme={theme} toggle={toggleTheme} />
      {showCommand && <CommandPalette />}
      
      <HeroSection />
      <UrlShortenerTool />
      <AnalyticsDashboard />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
      
      {/* Command hint */}
      <div className="fixed bottom-6 left-6 z-40 text-xs text-neutral-500 glass px-3 py-1.5 rounded-full">
        Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">K</kbd>
      </div>
    </div>
  );
  }
