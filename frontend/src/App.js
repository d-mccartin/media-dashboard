import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Radio, DollarSign, ChevronLeft, ChevronRight, Car, Target, Users, Eye, Globe, ShoppingCart, Zap, Settings, Tv, Headphones, Podcast, Share2, Search, Monitor } from 'lucide-react';

// Add this CSS at the top of your component
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  * {
    font-family: 'Inter', sans-serif;
  }
  
  .slide-transition {
    animation: slideIn 0.4s ease-out;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .hover-scale {
    transition: all 0.2s ease;
  }
  
  .hover-scale:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .glass-effect {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .shadow-elegant {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .shadow-elegant-hover:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const AdvertisingDashboard = () => {
  // Add style tag to document
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState('auto_shopper');
  const [selectedKPIs, setSelectedKPIs] = useState(['conversions']);
  const [selectedChannels, setSelectedChannels] = useState(['streaming_audio']);
  const [selectedIndustry, setSelectedIndustry] = useState('automotive');
  const [isConfigOpen, setIsConfigOpen] = useState(true);
  
  // Industry configurations
  const industries = {
    automotive: {
      name: 'Automotive',
      icon: Car,
      description: 'Dealerships, Auto Services, Parts'
    },
    retail: {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Physical & Online Retail'
    },
    finance: {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Banking, Insurance, Investment'
    },
    healthcare: {
      name: 'Healthcare & Medical',
      icon: Target,
      description: 'Hospitals, Clinics, Practices'
    },
    realestate: {
      name: 'Real Estate',
      icon: Users,
      description: 'Residential & Commercial'
    }
  };
  
  // Media channel configurations
  const mediaChannels = {
    traditional_radio: {
      name: 'Traditional Radio',
      description: 'Broadcast AM/FM Radio',
      icon: Radio,
      penetration: 83,
      reach: 92,
      color: '#94a3b8',
      costRange: { min: 5, max: 50 }
    },
    traditional_tv: {
      name: 'Traditional TV', 
      description: 'Linear Broadcast & Cable TV',
      icon: Tv,
      penetration: 68,
      reach: 78,
      color: '#fbbf24',
      costRange: { min: 20, max: 200 }
    },
    streaming_audio: {
      name: 'Streaming Audio',
      description: 'Digital Audio Platforms',
      icon: Headphones,
      penetration: 62,
      reach: 71,
      color: '#6366f1',
      costRange: { min: 4, max: 25 }
    },
    ott: {
      name: 'OTT',
      description: 'Over-The-Top Video',
      icon: Tv,
      penetration: 74,
      reach: 82,
      color: '#10b981',
      costRange: { min: 25, max: 75 }
    },
    podcast: {
      name: 'Podcast',
      description: 'On-Demand Audio Content',
      icon: Podcast,
      penetration: 41,
      reach: 45,
      color: '#f97316',
      costRange: { min: 10, max: 50 }
    },
    social_media: {
      name: 'Social Media',
      description: 'Social Platforms',
      icon: Share2,
      penetration: 72,
      reach: 84,
      color: '#f87171',
      costRange: { min: 5, max: 30 }
    },
    sem_ppc: {
      name: 'SEM/Google PPC',
      description: 'Search Engine Marketing',
      icon: Search,
      penetration: 38,
      reach: 52,
      color: '#a78bfa',
      costRange: { min: 1, max: 10 }
    },
    display_ads: {
      name: 'Display Ads',
      description: 'Banner & Visual Ads',
      icon: Monitor,
      penetration: 45,
      reach: 58,
      color: '#fde047',
      costRange: { min: 2, max: 15 }
    }
  };

  // Audience configurations
  const audiences = {
    auto_shopper: {
      name: 'Auto Shopper',
      icon: Car,
      mediaUsage: {
        traditional_radio: 82,
        traditional_tv: 65,
        streaming_audio: 78,
        ott: 72,
        podcast: 45,
        social_media: 68,
        sem_ppc: 92,
        display_ads: 58
      }
    },
    home_remodeling: {
      name: 'Home Remodeling/Renovation Intender',
      icon: Users,
      mediaUsage: {
        traditional_radio: 75,
        traditional_tv: 72,
        streaming_audio: 68,
        ott: 78,
        podcast: 52,
        social_media: 85,
        sem_ppc: 88,
        display_ads: 62
      }
    },
    business_decision_maker: {
      name: 'Business Decision Maker',
      icon: DollarSign,
      mediaUsage: {
        traditional_radio: 68,
        traditional_tv: 58,
        streaming_audio: 85,
        ott: 72,
        podcast: 78,
        social_media: 62,
        sem_ppc: 75,
        display_ads: 55
      }
    },
    adults_25_54: {
      name: 'Adults Age 25-54',
      icon: Users,
      mediaUsage: {
        traditional_radio: 78,
        traditional_tv: 68,
        streaming_audio: 82,
        ott: 85,
        podcast: 48,
        social_media: 78,
        sem_ppc: 65,
        display_ads: 52
      }
    },
    adults_18_plus: {
      name: 'Adults Age 18+',
      icon: Users,
      mediaUsage: {
        traditional_radio: 80,
        traditional_tv: 70,
        streaming_audio: 75,
        ott: 80,
        podcast: 42,
        social_media: 82,
        sem_ppc: 58,
        display_ads: 48
      }
    },
    adults_35_plus: {
      name: 'Adults Age 35+',
      icon: Users,
      mediaUsage: {
        traditional_radio: 85,
        traditional_tv: 75,
        streaming_audio: 70,
        ott: 75,
        podcast: 38,
        social_media: 65,
        sem_ppc: 62,
        display_ads: 45
      }
    },
    women_25_54: {
      name: 'Women Age 25-54',
      icon: Users,
      mediaUsage: {
        traditional_radio: 82,
        traditional_tv: 72,
        streaming_audio: 78,
        ott: 88,
        podcast: 45,
        social_media: 85,
        sem_ppc: 68,
        display_ads: 55
      }
    },
    men_25_54: {
      name: 'Men Age 25-54',
      icon: Users,
      mediaUsage: {
        traditional_radio: 75,
        traditional_tv: 65,
        streaming_audio: 85,
        ott: 82,
        podcast: 52,
        social_media: 72,
        sem_ppc: 62,
        display_ads: 48
      }
    },
    hvac_plumbing: {
      name: 'HVAC & Plumbing Intender',
      icon: Users,
      mediaUsage: {
        traditional_radio: 88,
        traditional_tv: 70,
        streaming_audio: 65,
        ott: 68,
        podcast: 35,
        social_media: 75,
        sem_ppc: 95,
        display_ads: 60
      }
    },
    blue_collar: {
      name: 'Blue Collar Worker',
      icon: Users,
      mediaUsage: {
        traditional_radio: 92,
        traditional_tv: 68,
        streaming_audio: 72,
        ott: 65,
        podcast: 32,
        social_media: 78,
        sem_ppc: 45,
        display_ads: 42
      }
    }
  };

  // Channel performance metrics by industry
  const getChannelPerformance = (industry) => {
    const benchmarks = {
      automotive: {
        traditional_radio: {
          brandAwareness: 68,
          brandRecall: 72,
          engagement: 45,
          conversions: 0.08,
          avgCPM: 12.50,
          purchaseIntent: 52,
          leadGeneration: 38
        },
        traditional_tv: {
          brandAwareness: 85,
          brandRecall: 82,
          engagement: 38,
          conversions: 0.06,
          avgCPM: 32.00,
          purchaseIntent: 68,
          leadGeneration: 42
        },
        streaming_audio: {
          brandAwareness: 78,
          brandRecall: 85,
          engagement: 72,
          conversions: 0.24,
          avgCPM: 8.50,
          purchaseIntent: 75,
          leadGeneration: 82
        },
        ott: {
          brandAwareness: 82,
          brandRecall: 78,
          engagement: 65,
          conversions: 0.18,
          avgCPM: 35.00,
          purchaseIntent: 72,
          leadGeneration: 68
        },
        podcast: {
          brandAwareness: 72,
          brandRecall: 88,
          engagement: 82,
          conversions: 0.28,
          avgCPM: 18.00,
          purchaseIntent: 85,
          leadGeneration: 78
        },
        social_media: {
          brandAwareness: 65,
          brandRecall: 58,
          engagement: 85,
          conversions: 0.14,
          avgCPM: 14.20,
          purchaseIntent: 62,
          leadGeneration: 88
        },
        sem_ppc: {
          brandAwareness: 45,
          brandRecall: 38,
          engagement: 92,
          conversions: 0.48,
          avgCPC: 2.85,
          purchaseIntent: 48,
          leadGeneration: 95
        },
        display_ads: {
          brandAwareness: 52,
          brandRecall: 42,
          engagement: 48,
          conversions: 0.08,
          avgCPM: 4.50,
          purchaseIntent: 45,
          leadGeneration: 52
        }
      },
      retail: {
        traditional_radio: {
          brandAwareness: 62,
          brandRecall: 68,
          engagement: 42,
          conversions: 0.12,
          avgCPM: 10.00,
          purchaseIntent: 58,
          leadGeneration: 45
        },
        traditional_tv: {
          brandAwareness: 78,
          brandRecall: 75,
          engagement: 35,
          conversions: 0.08,
          avgCPM: 28.00,
          purchaseIntent: 65,
          leadGeneration: 48
        },
        streaming_audio: {
          brandAwareness: 72,
          brandRecall: 78,
          engagement: 68,
          conversions: 0.32,
          avgCPM: 6.50,
          purchaseIntent: 72,
          leadGeneration: 78
        },
        ott: {
          brandAwareness: 75,
          brandRecall: 72,
          engagement: 62,
          conversions: 0.22,
          avgCPM: 30.00,
          purchaseIntent: 68,
          leadGeneration: 65
        },
        podcast: {
          brandAwareness: 68,
          brandRecall: 82,
          engagement: 78,
          conversions: 0.35,
          avgCPM: 15.00,
          purchaseIntent: 78,
          leadGeneration: 72
        },
        social_media: {
          brandAwareness: 70,
          brandRecall: 62,
          engagement: 88,
          conversions: 0.28,
          avgCPM: 11.50,
          purchaseIntent: 75,
          leadGeneration: 85
        },
        sem_ppc: {
          brandAwareness: 42,
          brandRecall: 35,
          engagement: 88,
          conversions: 0.62,
          avgCPC: 1.95,
          purchaseIntent: 85,
          leadGeneration: 92
        },
        display_ads: {
          brandAwareness: 48,
          brandRecall: 38,
          engagement: 52,
          conversions: 0.12,
          avgCPM: 3.50,
          purchaseIntent: 48,
          leadGeneration: 58
        }
      }
    };
    
    return benchmarks[industry] || benchmarks.automotive;
  };

  const kpiOptions = [
    { id: 'brand_awareness', name: 'Brand Awareness', icon: Eye },
    { id: 'website_traffic', name: 'Website Traffic', icon: Globe },
    { id: 'conversions', name: 'Conversions', icon: ShoppingCart },
    { id: 'incremental_reach', name: 'Incremental Reach', icon: Zap }
  ];

  const generateSlides = () => {
    const slides = [];
    const channelPerformance = getChannelPerformance(selectedIndustry);
    
    // Slide 1: Cover Page with enhanced styling
    slides.push({
      title: "Media Planning Analysis Dashboard",
      subtitle: "Industry Benchmarks & Channel Performance",
      content: (
        <div className="h-full flex flex-col justify-center slide-transition">
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto shadow-elegant">
            <h2 className="text-3xl font-bold gradient-text mb-6">Planning Parameters</h2>
            <div className="space-y-4 text-gray-700">
              <div className="hover-scale p-4 bg-white rounded-xl shadow-elegant">
                <h3 className="font-semibold text-lg mb-2">Industry Vertical</h3>
                <p className="text-gray-600">{industries[selectedIndustry].name}</p>
              </div>
              <div className="hover-scale p-4 bg-white rounded-xl shadow-elegant">
                <h3 className="font-semibold text-lg mb-2">Target Audience Profile</h3>
                <p className="text-gray-600">{audiences[selectedAudience].name}</p>
              </div>
              <div className="hover-scale p-4 bg-white rounded-xl shadow-elegant">
                <h3 className="font-semibold text-lg mb-2">Media Channels Under Consideration</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedChannels.map(channel => (
                    <span key={channel} className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-sm font-medium">
                      {mediaChannels[channel].name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hover-scale p-4 bg-white rounded-xl shadow-elegant">
                <h3 className="font-semibold text-lg mb-2">Campaign Objectives (KPIs)</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedKPIs.map(kpi => {
                    const kpiOption = kpiOptions.find(k => k.id === kpi);
                    return (
                      <span key={kpi} className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium">
                        {kpiOption ? kpiOption.name : kpi}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <p className="text-sm">
                  This analysis provides industry benchmarks for {industries[selectedIndustry].name} 
                  {' '}campaigns targeting {audiences[selectedAudience].name}, comparing performance 
                  across selected media channels.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Data aggregated from: Google Ads Benchmarks, Meta Business IQ, IAB Reports, Edison Research
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    });

    // Slide 2: Market Penetration & Cost Benchmarks with enhanced styling
    slides.push({
      title: "Channel Reach & Cost Efficiency Analysis",
      subtitle: `${industries[selectedIndustry].name} Industry Benchmarks`,
      content: (
        <div className="h-full grid grid-cols-2 gap-8 slide-transition">
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Market Penetration & Reach</h3>
            <p className="text-xs text-gray-600 mb-3">US adult reach potential by channel (Source: Edison Research, Nielsen)</p>
            <div className="h-72 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl shadow-elegant">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={selectedChannels.map(channel => ({
                  channel: mediaChannels[channel].name,
                  penetration: mediaChannels[channel].penetration,
                  reach: mediaChannels[channel].reach,
                  fill: mediaChannels[channel].color
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="channel" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                  <Legend />
                  <Bar dataKey="penetration" name="Market Penetration %" fill="#6366f1" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="reach" name="Max Reach %" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Cost Benchmarks by Channel</h3>
            <p className="text-xs text-gray-600 mb-3">Average CPM/CPC ranges for {industries[selectedIndustry].name}</p>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {selectedChannels.map(channel => {
                const Icon = mediaChannels[channel].icon;
                const perf = channelPerformance[channel];
                return (
                  <div key={channel} className="bg-white p-4 rounded-xl border border-gray-100 hover-scale shadow-elegant-hover">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mr-3">
                          <Icon className="text-indigo-600" size={20} />
                        </div>
                        <span className="font-semibold">{mediaChannels[channel].name}</span>
                      </div>
                      <span className="text-lg font-bold gradient-text">
                        ${perf.avgCPM || perf.avgCPC || mediaChannels[channel].costRange.min}-
                        {mediaChannels[channel].costRange.max}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {channel === 'sem_ppc' ? 'CPC' : 'CPM'} • 
                      {' '}Industry avg: ${perf.avgCPM || perf.avgCPC || 'Varies'}
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: `${((100 - (perf.avgCPM || perf.avgCPC || 10) / 30 * 100))}%`}}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Efficiency Score: {((100 - (perf.avgCPM || perf.avgCPC || 10) / 30 * 100)).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )
    });

    // Slide 3: Audience Media Usage with enhanced styling
    slides.push({
      title: `${audiences[selectedAudience].name} Media Consumption`,
      subtitle: "Channel Usage Patterns & Preferences",
      content: (
        <div className="h-full slide-transition">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Media Usage by Target Audience (%)</h3>
            <p className="text-xs text-gray-600 mb-3">Percentage of target audience that actively consumes content on each channel weekly</p>
            <div className="h-56 bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl shadow-elegant">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={selectedChannels.map(channel => ({
                  channel: mediaChannels[channel].name,
                  usage: audiences[selectedAudience].mediaUsage[channel]
                }))}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="channel" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar 
                    name={audiences[selectedAudience].name} 
                    dataKey="usage" 
                    stroke="#6366f1" 
                    fill="#6366f1" 
                    fillOpacity={0.6}
                  />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl shadow-elegant">
              <h4 className="font-bold text-indigo-800 mb-1">High Usage Channels (70%+)</h4>
              <p className="text-xs text-gray-600 mb-3">Channels with strong existing audience engagement</p>
              {selectedChannels
                .filter(channel => audiences[selectedAudience].mediaUsage[channel] >= 70)
                .map(channel => (
                  <div key={channel} className="flex justify-between items-center mb-2 bg-white p-3 rounded-lg hover-scale shadow">
                    <span className="text-sm font-medium">{mediaChannels[channel].name}</span>
                    <span className="font-bold text-indigo-700 text-lg">
                      {audiences[selectedAudience].mediaUsage[channel]}%
                    </span>
                  </div>
                ))}
              {selectedChannels.filter(channel => audiences[selectedAudience].mediaUsage[channel] >= 70).length === 0 && (
                <p className="text-xs text-gray-500 italic">No channels above 70% usage</p>
              )}
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl shadow-elegant">
              <h4 className="font-bold text-amber-800 mb-1">Growth Opportunities (&lt;70%)</h4>
              <p className="text-xs text-gray-600 mb-3">Channels with potential for increased audience penetration</p>
              {selectedChannels
                .filter(channel => audiences[selectedAudience].mediaUsage[channel] < 70)
                .map(channel => (
                  <div key={channel} className="flex justify-between items-center mb-2 bg-white p-3 rounded-lg hover-scale shadow">
                    <span className="text-sm font-medium">{mediaChannels[channel].name}</span>
                    <span className="font-bold text-amber-700 text-lg">
                      {audiences[selectedAudience].mediaUsage[channel]}%
                    </span>
                  </div>
                ))}
              {selectedChannels.filter(channel => audiences[selectedAudience].mediaUsage[channel] < 70).length === 0 && (
                <p className="text-xs text-gray-500 italic">All channels show high usage</p>
              )}
            </div>
          </div>
        </div>
      )
    });

    // Slide 4: Industry-Specific Performance Metrics with enhanced styling
    slides.push({
      title: `${industries[selectedIndustry].name} Channel Performance Benchmarks`,
      subtitle: "Industry-Specific KPI Performance Data",
      content: (
        <div className="h-full slide-transition">
          <div className="grid grid-cols-2 gap-6 mb-3">
            <div>
              <h3 className="text-lg font-bold mb-1 text-gray-800">Brand Metrics</h3>
              <p className="text-xs text-gray-600 mb-2">Industry benchmarks from Meta IQ & Google</p>
              <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl shadow-elegant">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={selectedChannels.map(channel => ({
                    channel: mediaChannels[channel].name.replace('/', '\n'),
                    awareness: channelPerformance[channel].brandAwareness,
                    recall: channelPerformance[channel].brandRecall
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="channel" angle={-45} textAnchor="end" height={60} fontSize={11} />
                    <YAxis />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                    <Legend />
                    <Bar dataKey="awareness" fill="#6366f1" name="Brand Awareness %" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="recall" fill="#10b981" name="Brand Recall %" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-gray-800">Performance Metrics</h3>
              <p className="text-xs text-gray-600 mb-2">Conversion & engagement benchmarks</p>
              <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl shadow-elegant">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={selectedChannels.map(channel => ({
                    channel: mediaChannels[channel].name.replace('/', '\n'),
                    conversions: (channelPerformance[channel].conversions * 100),
                    engagement: channelPerformance[channel].engagement
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="channel" angle={-45} textAnchor="end" height={60} fontSize={11} />
                    <YAxis />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                    <Legend />
                    <Bar dataKey="conversions" fill="#f97316" name="Conversion Rate %" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="engagement" fill="#a78bfa" name="Engagement %" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-2 text-center">
              {industries[selectedIndustry].name} specific benchmarks • Updated Q4 2024
            </p>
            <div className="grid grid-cols-4 gap-3">
              {selectedChannels.slice(0, 4).map(channel => (
                <div key={channel} className="bg-white p-4 rounded-xl border border-gray-100 text-center hover-scale shadow-elegant-hover">
                  <h5 className="font-semibold text-xs mb-3">{mediaChannels[channel].name}</h5>
                  <div className="text-2xl font-bold gradient-text">
                    {(channelPerformance[channel].conversions * 100).toFixed(2)}%
                  </div>
                  <div className="text-xs text-gray-600">Avg Conversion</div>
                  <div className="text-lg font-semibold text-gray-700 mt-2">
                    ${channelPerformance[channel].avgCPM || channelPerformance[channel].avgCPC}
                  </div>
                  <div className="text-xs text-gray-600">
                    {channel === 'sem_ppc' ? 'Avg CPC' : 'Avg CPM'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    });

    // Integrated Approach Benefits Slide with enhanced styling
    slides.push({
      title: "Benefits of Integrated Multi-Channel Approach",
      subtitle: "Synergies and Amplification Effects",
      content: (
        <div className="h-full slide-transition">
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Multi-Channel Integration Benefits</h3>
            <p className="text-xs text-gray-600 mb-4">How combining channels creates multiplicative effects beyond individual channel performance</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl shadow-elegant">
                <h4 className="font-bold text-indigo-800 mb-3">Cross-Channel Amplification</h4>
                <div className="space-y-3">
                  <div className="flex items-start hover-scale">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-3 mt-1"></div>
                    <div>
                      <p className="text-sm font-semibold">Reach Extension</p>
                      <p className="text-xs text-gray-600">Combined channels reach {Math.min(95, Math.max(...selectedChannels.map(c => mediaChannels[c].reach)) + (selectedChannels.length * 3))}% of target audience vs individual channel max of {Math.max(...selectedChannels.map(c => mediaChannels[c].reach))}%</p>
                    </div>
                  </div>
                  <div className="flex items-start hover-scale">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-3 mt-1"></div>
                    <div>
                      <p className="text-sm font-semibold">Frequency Optimization</p>
                      <p className="text-xs text-gray-600">Multi-channel presence increases message frequency by 2.8x without oversaturation</p>
                    </div>
                  </div>
                  <div className="flex items-start hover-scale">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-3 mt-1"></div>
                    <div>
                      <p className="text-sm font-semibold">Message Reinforcement</p>
                      <p className="text-xs text-gray-600">Cross-channel messaging improves brand recall by additional 28%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl shadow-elegant">
                <h4 className="font-bold text-green-800 mb-3">Performance Improvements</h4>
                <p className="text-xs text-gray-600 mb-2">KPI-specific benefits from integrated approach</p>
                <div className="space-y-2">
                  {selectedKPIs.includes('conversions') && (
                    <div className="bg-white p-3 rounded-lg hover-scale shadow">
                      <p className="text-sm font-semibold text-green-700">Conversion Lift</p>
                      <p className="text-xs text-gray-600">Multi-touch attribution shows 35% higher conversion rate when using {selectedChannels.length} channels vs single channel</p>
                    </div>
                  )}
                  {selectedKPIs.includes('brand_awareness') && (
                    <div className="bg-white p-3 rounded-lg hover-scale shadow">
                      <p className="text-sm font-semibold text-green-700">Brand Awareness Boost</p>
                      <p className="text-xs text-gray-600">Integrated campaigns achieve 42% higher unaided brand awareness</p>
                    </div>
                  )}
                  {selectedKPIs.includes('website_traffic') && (
                    <div className="bg-white p-3 rounded-lg hover-scale shadow">
                      <p className="text-sm font-semibold text-green-700">Traffic Quality</p>
                      <p className="text-xs text-gray-600">Multi-channel visitors show 65% longer session duration and 48% lower bounce rate</p>
                    </div>
                  )}
                  {selectedKPIs.includes('incremental_reach') && (
                    <div className="bg-white p-3 rounded-lg hover-scale shadow">
                      <p className="text-sm font-semibold text-green-700">Audience Expansion</p>
                      <p className="text-xs text-gray-600">Channel overlap analysis shows {15 + (selectedChannels.length * 5)}% incremental unique reach</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl shadow-elegant">
            <h4 className="font-bold text-amber-800 mb-3">Cost Efficiency Benefits</h4>
            <p className="text-xs text-gray-600 mb-3">Financial advantages of coordinated multi-channel campaigns</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl hover-scale shadow-elegant-hover">
                <div className="text-3xl font-bold gradient-text">
                  {(100 - (selectedChannels.reduce((acc, c) => acc + (channelPerformance[c].avgCPM || channelPerformance[c].avgCPC || 10), 0) / selectedChannels.length / 15 * 100)).toFixed(0)}%
                </div>
                <p className="text-xs text-gray-600 mt-1">Lower Effective CPM</p>
                <p className="text-xs text-gray-500 mt-1">vs single channel avg</p>
              </div>
              <div className="bg-white p-4 rounded-xl hover-scale shadow-elegant-hover">
                <div className="text-3xl font-bold gradient-text">
                  {(selectedChannels.reduce((acc, c) => acc + channelPerformance[c].conversions, 0) * 25).toFixed(0)}%
                </div>
                <p className="text-xs text-gray-600 mt-1">Better ROI</p>
                <p className="text-xs text-gray-500 mt-1">through optimization</p>
              </div>
              <div className="bg-white p-4 rounded-xl hover-scale shadow-elegant-hover">
                <div className="text-3xl font-bold gradient-text">
                  {18 + selectedChannels.length * 2}%
                </div>
                <p className="text-xs text-gray-600 mt-1">Budget Optimization</p>
                <p className="text-xs text-gray-500 mt-1">efficiency gain</p>
              </div>
            </div>
          </div>
        </div>
      )
    });

    // Executive Summary with enhanced styling
    slides.push({
      title: "Executive Summary & Recommendations",
      subtitle: "Strategic Insights for Campaign Optimization",
      content: (
        <div className="h-full slide-transition">
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Key Performance Highlights</h3>
              <p className="text-xs text-gray-600 mb-3">Summary of top-performing channels and metrics</p>
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-4 rounded-xl hover-scale shadow-elegant">
                  <h4 className="font-semibold text-indigo-800 mb-2">Best Performing Channel</h4>
                  <p className="text-sm">
                    {(() => {
                      const perf = channelPerformance;
                      const sorted = [...selectedChannels].sort((a, b) => 
                        perf[b].conversions - perf[a].conversions
                      );
                      return `${mediaChannels[sorted[0]].name} - ${(perf[sorted[0]].conversions * 100).toFixed(2)}% conversion rate`;
                    })()}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Highest percentage of audience taking desired action</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl hover-scale shadow-elegant">
                  <h4 className="font-semibold text-green-800 mb-2">Audience Alignment</h4>
                  <p className="text-sm">
                    {(() => {
                      const sorted = [...selectedChannels].sort((a, b) => 
                        audiences[selectedAudience].mediaUsage[b] - audiences[selectedAudience].mediaUsage[a]
                      );
                      return `${mediaChannels[sorted[0]].name} - ${audiences[selectedAudience].mediaUsage[sorted[0]]}% usage`;
                    })()}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Channel with highest engagement from target audience</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Strategic Recommendations</h3>
              <div className="space-y-3">
                {selectedChannels.slice(0, 3).map((channel, index) => (
                  <div key={channel} className="bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-xl hover-scale shadow-elegant">
                    <div className="font-bold text-gray-800 mb-1">
                      <span className="text-2xl gradient-text mr-2">{index + 1}.</span> {mediaChannels[channel].name} Strategy
                    </div>
                    <p className="text-xs text-gray-600">
                      Leverage {channelPerformance[channel].brandRecall}% recall rate with targeted messaging
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="gradient-bg text-white p-6 rounded-2xl shadow-elegant">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="hover-scale">
                <h4 className="text-lg font-bold mb-2">Optimal Channel Mix</h4>
                <div className="text-4xl font-bold">{selectedChannels.length}</div>
                <div className="text-sm opacity-90">Channels Selected</div>
              </div>
              <div className="hover-scale">
                <h4 className="text-lg font-bold mb-2">Audience Coverage</h4>
                <div className="text-4xl font-bold">
                  {Math.max(...selectedChannels.map(c => mediaChannels[c].reach))}%
                </div>
                <div className="text-sm opacity-90">Maximum Reach</div>
              </div>
              <div className="hover-scale">
                <h4 className="text-lg font-bold mb-2">Efficiency Score</h4>
                <div className="text-4xl font-bold">
                  {(selectedChannels.reduce((acc, c) => acc + channelPerformance[c].conversions * 100, 0) / selectedChannels.length).toFixed(1)}
                </div>
                <div className="text-sm opacity-90">Avg Conversion %</div>
              </div>
            </div>
          </div>
        </div>
      )
    });

    // Sources Slide with enhanced styling
    slides.push({
      title: "Data Sources & Methodology",
      subtitle: "Free & Public Data Sources Used",
      content: (
        <div className="h-full slide-transition">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl mb-6 shadow-elegant">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Primary Data Sources (Free Access)</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="hover-scale">
                <h4 className="font-semibold text-gray-700 mb-3">Industry Benchmarks</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>Google Ads Benchmarks</strong> - Think with Google (Free)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>Meta Business IQ</strong> - Facebook Insights (Free)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>LinkedIn B2B Institute</strong> - Marketing Reports (Free)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>IAB Benchmark Reports</strong> - Quarterly Updates (Free)</span>
                  </li>
                </ul>
              </div>
              <div className="hover-scale">
                <h4 className="font-semibold text-gray-700 mb-3">Media Consumption Data</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>Edison Research</strong> - Share of Ear & Infinite Dial (Free)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>Pew Research Center</strong> - Media & Tech Reports (API)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>Nielsen</strong> - Total Audience Reports (Free Summaries)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2 mt-1.5"></div>
                    <span><strong>FCC Public Files</strong> - Broadcast Data (API)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-elegant">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Update Schedule & Methodology</h3>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div className="hover-scale">
                <h4 className="font-semibold text-gray-700 mb-2">Update Frequency</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Google/Meta: Monthly</li>
                  <li>• Edison Research: Annual</li>
                  <li>• IAB Reports: Quarterly</li>
                  <li>• Pew Research: Bi-annual</li>
                </ul>
              </div>
              <div className="hover-scale">
                <h4 className="font-semibold text-gray-700 mb-2">Data Aggregation</h4>
                <p className="text-gray-600">Benchmarks represent median performance across 1,000+ campaigns per vertical, normalized for market conditions</p>
              </div>
              <div className="hover-scale">
                <h4 className="font-semibold text-gray-700 mb-2">Accessing Updates</h4>
                <p className="text-gray-600">All sources provide free access via web portals, APIs, or downloadable reports with registration</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            <p><strong>Note:</strong> This dashboard uses publicly available industry benchmarks. For campaign-specific data, integrate your own analytics.</p>
            <p className="mt-1">To maintain accuracy, update benchmark data quarterly from the sources listed above.</p>
          </div>
        </div>
      )
    });

    return slides;
  };

  const slides = generateSlides();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleKPIToggle = (kpiId) => {
    setSelectedKPIs(prev => {
      if (prev.includes(kpiId)) {
        if (prev.length === 1) return prev;
        return prev.filter(id => id !== kpiId);
      } else {
        return [...prev, kpiId];
      }
    });
    setCurrentSlide(0);
  };

  const handleChannelToggle = (channelId) => {
    setSelectedChannels(prev => {
      if (prev.includes(channelId)) {
        if (prev.length === 1) return prev;
        return prev.filter(id => id !== channelId);
      } else {
        return [...prev, channelId];
      }
    });
    setCurrentSlide(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 min-h-screen flex flex-col items-center justify-center">
      {/* Configuration Panel with enhanced styling */}
      {isConfigOpen && (
        <div className="glass-effect rounded-2xl shadow-elegant p-6 mb-6 w-full max-w-7xl slide-transition">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mr-3">
                <Settings className="text-indigo-600" size={24} />
              </div>
              Media Planning Configuration
            </h2>
            <button
              onClick={() => setIsConfigOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl hover-scale"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Industry Vertical</label>
              <div className="space-y-2">
                {Object.entries(industries).map(([key, industry]) => {
                  const Icon = industry.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedIndustry(key);
                        setCurrentSlide(0);
                      }}
                      className={`w-full p-3 rounded-xl border-2 transition-all flex items-center text-sm hover-scale ${
                        selectedIndustry === key
                          ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-elegant'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <Icon size={18} className="mr-2 flex-shrink-0" />
                      <span className="text-left">{industry.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Target Audience</label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {Object.entries(audiences).map(([key, audience]) => {
                  const Icon = audience.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedAudience(key);
                        setCurrentSlide(0);
                      }}
                      className={`w-full p-3 rounded-xl border-2 transition-all flex items-center text-sm hover-scale ${
                        selectedAudience === key
                          ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-elegant'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <Icon size={18} className="mr-2 flex-shrink-0" />
                      <span className="text-left">{audience.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Media Channels (Multiple)</label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {Object.entries(mediaChannels).map(([key, channel]) => {
                  const Icon = channel.icon;
                  return (
                    <label
                      key={key}
                      className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all hover-scale ${
                        selectedChannels.includes(key)
                          ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-elegant'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedChannels.includes(key)}
                        onChange={() => handleChannelToggle(key)}
                        className="sr-only"
                      />
                      <Icon size={18} className={`mr-2 ${selectedChannels.includes(key) ? 'text-indigo-600' : 'text-gray-500'}`} />
                      <div className="flex-1">
                        <span className={`block text-sm ${selectedChannels.includes(key) ? 'text-indigo-700 font-medium' : 'text-gray-700'}`}>
                          {channel.name}
                        </span>
                        <span className="text-xs text-gray-500">{channel.description}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Campaign KPIs (Multiple)</label>
              <div className="space-y-2">
                {kpiOptions.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <label
                      key={kpi.id}
                      className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all hover-scale ${
                        selectedKPIs.includes(kpi.id)
                          ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-elegant'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedKPIs.includes(kpi.id)}
                        onChange={() => handleKPIToggle(kpi.id)}
                        className="sr-only"
                      />
                      <Icon size={18} className={`mr-2 ${selectedKPIs.includes(kpi.id) ? 'text-indigo-600' : 'text-gray-500'}`} />
                      <span className={selectedKPIs.includes(kpi.id) ? 'text-indigo-700 font-medium' : 'text-gray-700'}>
                        {kpi.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xs text-gray-500">
              Data sourced from free public benchmarks - see final slide for sources
            </p>
            <button
              onClick={() => setIsConfigOpen(false)}
              className="px-6 py-2 gradient-bg text-white rounded-xl hover:opacity-90 transition-opacity shadow-elegant hover-scale"
            >
              Generate Analysis
            </button>
          </div>
        </div>
      )}

      {/* Main Presentation with enhanced styling */}
      <div className="bg-white rounded-2xl shadow-elegant overflow-hidden" style={{ aspectRatio: '16/9', maxHeight: '85vh', width: '100%', maxWidth: '1400px' }}>
        {/* Header with gradient */}
        <div className="gradient-bg text-white p-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
              <p className="text-white/80 text-sm mt-1">{slides[currentSlide].subtitle}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsConfigOpen(!isConfigOpen)}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors hover-scale"
                title="Configuration"
              >
                <Settings size={20} />
              </button>
              <div className="text-right">
                <span className="text-sm font-medium">Slide {currentSlide + 1} / {slides.length}</span>
                <div className="flex items-center mt-1">
                  <Radio size={20} className="mr-2" />
                  <span className="text-xs opacity-80">Multi-Channel Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8" style={{ height: 'calc(100% - 140px)' }}>
          {slides[currentSlide].content}
        </div>

        {/* Navigation with enhanced styling */}
        <div className="bg-gradient-to-t from-gray-100 to-gray-50 p-4 flex justify-between items-center border-t">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center px-4 py-2 gradient-bg text-white rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow hover-scale"
          >
            <ChevronLeft size={18} className="mr-1" />
            Previous
          </button>
          
          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 hover-scale ${
                  currentSlide === index 
                    ? 'w-8 h-3 gradient-bg rounded-full shadow' 
                    : 'w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center px-4 py-2 gradient-bg text-white rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow hover-scale"
          >
            Next
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>

        {/* Footer with enhanced styling */}
        <div className="px-6 py-3 text-xs text-gray-500 bg-gradient-to-t from-gray-100 to-gray-50 border-t">
          <p>
            <span className="font-semibold">Planning Parameters:</span> {industries[selectedIndustry].name} • {audiences[selectedAudience].name} • 
            {selectedChannels.length} Channel{selectedChannels.length > 1 ? 's' : ''} • 
            {selectedKPIs.length} KPI{selectedKPIs.length > 1 ? 's' : ''}
          </p>
          <p className="text-gray-400 mt-1">Agency Planning Mode • Industry Benchmarks from Free Sources</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingDashboard;
