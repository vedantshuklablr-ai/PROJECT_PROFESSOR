// Strategy data
const strategy = {
    phases: [
        {
            id: "immediate",
            title: "Phase 1: Immediate UI/UX Wins",
            icon: "🎨",
            duration: "1-2 weeks",
            priority: "HIGH",
            color: "from-emerald-500 to-teal-600",
            sections: [
                {
                    title: "Visual & Interaction Improvements",
                    items: [
                        {
                            id: "ui-1",
                            task: "Fix responsive breakpoints",
                            detail: "Current app has no mobile responsiveness. Add breakpoints at 768px, 1024px, 1440px",
                            code: "Add: @media (max-width: 768px) { ... }"
                        },
                        {
                            id: "ui-2",
                            task: "Enhance visual hierarchy",
                            detail: "Strengthen typography scale - current font sizes too similar (11px-13px range)",
                            code: "Scale: 11px → 13px → 16px → 20px → 28px → 40px"
                        },
                        {
                            id: "ui-3",
                            task: "Add loading states",
                            detail: "Missing skeleton loaders and spinners for async operations",
                            code: "Add shimmer effects for chat loading, voice processing"
                        },
                        {
                            id: "ui-4",
                            task: "Improve form validation",
                            detail: "No visual feedback on empty inputs in PDF/Image search modals",
                            code: "Add error states with shake animation + border color change"
                        },
                        {
                            id: "ui-5",
                            task: "Enhance accessibility",
                            detail: "Missing ARIA labels, keyboard navigation, focus states",
                            code: "Add: aria-label, role, tabindex, :focus-visible styles"
                        }
                    ]
                },
                {
                    title: "Animation & Motion",
                    items: [
                        {
                            id: "anim-1",
                            task: "Stagger chat message reveals",
                            detail: "Messages appear instantly - add entrance animation with delay",
                            code: "@keyframes slideIn { from { opacity: 0; transform: translateY(20px); } }"
                        },
                        {
                            id: "anim-2",
                            task: "Add micro-interactions",
                            detail: "Button clicks, hover states need tactile feedback",
                            code: "transform: scale(0.98) on click, subtle glow on hover"
                        },
                        {
                            id: "anim-3",
                            task: "Smooth voice visualizer",
                            detail: "Voice ring animation too abrupt - needs easing",
                            code: "Use cubic-bezier(0.4, 0, 0.2, 1) for smooth transitions"
                        }
                    ]
                }
            ]
        },
        {
            id: "architecture",
            title: "Phase 2: Architecture Refactor",
            icon: "⚙️",
            duration: "2-3 weeks",
            priority: "HIGH",
            color: "from-blue-500 to-indigo-600",
            sections: [
                {
                    title: "Frontend Separation",
                    items: [
                        {
                            id: "arch-1",
                            task: "Extract CSS to modules",
                            detail: "Move 800+ lines of inline CSS to separate files with logical grouping",
                            code: "Create: layout.css, components.css, theme.css, animations.css"
                        },
                        {
                            id: "arch-2",
                            task: "Break into components",
                            detail: "Single HTML file should be 10-15 reusable components",
                            code: "Header, Sidebar, ChatWindow, VoicePanel, Modal, Card, etc."
                        },
                        {
                            id: "arch-3",
                            task: "Implement state management",
                            detail: "Global vars scattered - consolidate into state manager",
                            code: "Options: React Context, Zustand, or plain JS Proxy pattern"
                        },
                        {
                            id: "arch-4",
                            task: "Create UI component library",
                            detail: "Reusable Button, Input, Badge, Toast components with variants",
                            code: "Build design system: primary/secondary/ghost button variants"
                        }
                    ]
                },
                {
                    title: "Code Organization",
                    items: [
                        {
                            id: "org-1",
                            task: "Establish folder structure",
                            detail: "Flat structure → organized hierarchy",
                            code: "src/{components, hooks, utils, styles, api, constants}"
                        },
                        {
                            id: "org-2",
                            task: "Extract business logic",
                            detail: "AI response generation mixed with UI - separate concerns",
                            code: "Move genResp() and response templates to services/ai.js"
                        },
                        {
                            id: "org-3",
                            task: "Implement error boundaries",
                            detail: "No error handling - app crashes silently",
                            code: "Add React error boundaries for graceful failures"
                        }
                    ]
                }
            ]
        },
        {
            id: "backend",
            title: "Phase 3: Backend Integration",
            icon: "💾",
            duration: "3-4 weeks",
            priority: "MEDIUM",
            color: "from-purple-500 to-pink-600",
            sections: [
                {
                    title: "API Layer",
                    items: [
                        {
                            id: "be-1",
                            task: "Replace mock responses with real API",
                            detail: "Hardcoded responses in genResp() → actual AI backend",
                            code: "POST /api/chat with streaming responses (Server-Sent Events)"
                        },
                        {
                            id: "be-2",
                            task: "Add authentication",
                            detail: "No user auth - anyone can access. Add JWT-based auth",
                            code: "Implement: login/signup, token refresh, protected routes"
                        },
                        {
                            id: "be-3",
                            task: "Build data persistence",
                            detail: "No chat history saved - lost on refresh",
                            code: "Store: conversations, user preferences, voice settings in DB"
                        },
                        {
                            id: "be-4",
                            task: "Real-time voice processing",
                            detail: "Client-side speech recognition → server-side STT/TTS",
                            code: "Integrate: OpenAI Whisper (STT), ElevenLabs/Azure (TTS)"
                        }
                    ]
                },
                {
                    title: "Infrastructure",
                    items: [
                        {
                            id: "infra-1",
                            task: "Set up API gateway",
                            detail: "Direct API calls → API gateway for rate limiting, auth, logging",
                            code: "Options: Kong, AWS API Gateway, or custom Express middleware"
                        },
                        {
                            id: "infra-2",
                            task: "Implement caching",
                            detail: "Repeated queries fetch same data - add Redis cache",
                            code: "Cache: AI responses (TTL 1hr), PDF search results (TTL 24hr)"
                        },
                        {
                            id: "infra-3",
                            task: "Add WebSocket support",
                            detail: "Long-polling for updates → WebSocket for real-time bidirectional",
                            code: "Use Socket.io or native WebSockets for chat streaming"
                        }
                    ]
                }
            ]
        },
        {
            id: "features",
            title: "Phase 4: Feature Enhancements",
            icon: "⚡",
            duration: "2-3 weeks",
            priority: "MEDIUM",
            color: "from-orange-500 to-red-600",
            sections: [
                {
                    title: "Advanced Capabilities",
                    items: [
                        {
                            id: "feat-1",
                            task: "Code execution environment",
                            detail: "Show code → let users run it in browser sandbox",
                            code: "Integrate: Monaco Editor + Web Containers for live execution"
                        },
                        {
                            id: "feat-2",
                            task: "Multi-language support",
                            detail: "English-only → i18n with language detection",
                            code: "Use i18next with auto-detect from browser locale"
                        },
                        {
                            id: "feat-3",
                            task: "Export conversations",
                            detail: "Can't save/share chats - add export as PDF, JSON, Markdown",
                            code: "Client-side generation with jsPDF or server endpoint"
                        },
                        {
                            id: "feat-4",
                            task: "Rich media handling",
                            detail: "Text-only responses → support images, code blocks, math equations",
                            code: "Add: syntax highlighting (Prism.js), LaTeX (KaTeX), image display"
                        },
                        {
                            id: "feat-5",
                            task: "Collaborative features",
                            detail: "Single-user → allow sharing sessions, collaborative problem-solving",
                            code: "Implement: shareable links, multi-user WebSocket rooms"
                        }
                    ]
                },
                {
                    title: "User Experience",
                    items: [
                        {
                            id: "ux-1",
                            task: "Smart suggestions",
                            detail: "Empty prompt → show contextual suggestions based on history",
                            code: "ML-based recommendation or rule-based prompt suggestions"
                        },
                        {
                            id: "ux-2",
                            task: "Keyboard shortcuts",
                            detail: "Mouse-only → add power-user shortcuts",
                            code: "Ctrl+K: command palette, Ctrl+/: focus input, Esc: close modal"
                        },
                        {
                            id: "ux-3",
                            task: "Theme customization",
                            detail: "Fixed dark theme → allow light/dark/custom themes",
                            code: "CSS variables + localStorage persistence + theme picker UI"
                        }
                    ]
                }
            ]
        },
        {
            id: "optimization",
            title: "Phase 5: Performance & Scale",
            icon: "🚀",
            duration: "2 weeks",
            priority: "LOW",
            color: "from-cyan-500 to-blue-600",
            sections: [
                {
                    title: "Performance",
                    items: [
                        {
                            id: "perf-1",
                            task: "Code splitting",
                            detail: "1400-line single file → lazy load routes and features",
                            code: "React.lazy() for modals, voice panel, settings"
                        },
                        {
                            id: "perf-2",
                            task: "Asset optimization",
                            detail: "Unoptimized assets → compress, minify, CDN delivery",
                            code: "Webpack config: minification, tree-shaking, Gzip/Brotli"
                        },
                        {
                            id: "perf-3",
                            task: "Virtualize long lists",
                            detail: "Chat with 1000+ messages → use virtual scrolling",
                            code: "Implement react-window for efficient DOM rendering"
                        },
                        {
                            id: "perf-4",
                            task: "Service worker caching",
                            detail: "No offline support → add PWA with service worker",
                            code: "Cache-first strategy for static assets, network-first for API"
                        }
                    ]
                },
                {
                    title: "Monitoring & Analytics",
                    items: [
                        {
                            id: "mon-1",
                            task: "Error tracking",
                            detail: "No visibility into production errors",
                            code: "Integrate: Sentry for error monitoring + source maps"
                        },
                        {
                            id: "mon-2",
                            task: "Performance monitoring",
                            detail: "No metrics on load time, API latency",
                            code: "Add: Web Vitals tracking (CLS, FID, LCP) + custom metrics"
                        },
                        {
                            id: "mon-3",
                            task: "User analytics",
                            detail: "Don't know how users interact with features",
                            code: "Privacy-focused analytics: Plausible or PostHog"
                        }
                    ]
                }
            ]
        }
    ]
};

// State
let completedTasks = new Set();
let activePhase = 0;
let expandedSections = new Set();

// Load saved state
function loadState() {
    const saved = localStorage.getItem('integrationProgress');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            completedTasks = new Set(state.completed || []);
            activePhase = state.activePhase || 0;
            expandedSections = new Set(state.expanded || []);
        } catch (e) {
            console.error('Failed to load state:', e);
        }
    }
}

// Save state
function saveState() {
    const state = {
        completed: Array.from(completedTasks),
        activePhase: activePhase,
        expanded: Array.from(expandedSections)
    };
    localStorage.setItem('integrationProgress', JSON.stringify(state));
}

// Toggle task completion
function toggleTask(taskId) {
    if (completedTasks.has(taskId)) {
        completedTasks.delete(taskId);
    } else {
        completedTasks.add(taskId);
    }
    saveState();
    updateUI();
}

// Toggle section expansion
function toggleSection(sectionId) {
    if (expandedSections.has(sectionId)) {
        expandedSections.delete(sectionId);
    } else {
        expandedSections.add(sectionId);
    }
    saveState();
    renderPhaseContent();
}

// Set active phase
function setActivePhase(phaseIdx) {
    activePhase = phaseIdx;
    saveState();
    updateUI();
}

// Calculate progress
function calculateProgress() {
    const allTasks = strategy.phases.flatMap(p => 
        p.sections.flatMap(s => s.items.map(i => i.id))
    );
    const completed = allTasks.filter(id => completedTasks.has(id)).length;
    return {
        total: allTasks.length,
        completed: completed,
        percentage: Math.round((completed / allTasks.length) * 100)
    };
}

function getPhaseProgress(phase) {
    const allItems = phase.sections.flatMap(s => s.items.map(i => i.id));
    const completed = allItems.filter(id => completedTasks.has(id)).length;
    return Math.round((completed / allItems.length) * 100);
}

// Update all UI elements
function updateUI() {
    const progress = calculateProgress();
    
    // Update header
    document.getElementById('overallProgress').textContent = progress.percentage + '%';
    document.getElementById('completedCount').textContent = progress.completed;
    document.getElementById('totalCount').textContent = progress.total;
    
    // Update stats
    document.getElementById('statsTotal').textContent = progress.total;
    document.getElementById('statsCompleted').textContent = progress.completed;
    document.getElementById('statsRemaining').textContent = progress.total - progress.completed;
    
    // Re-render navigation and content
    renderPhaseNav();
    renderPhaseContent();
}

// Render phase navigation
function renderPhaseNav() {
    const nav = document.getElementById('phaseNav');
    nav.innerHTML = strategy.phases.map((phase, idx) => {
        const progress = getPhaseProgress(phase);
        const isActive = idx === activePhase;
        const colorClass = isActive ? `bg-gradient-to-r ${phase.color} text-white shadow-lg scale-105` : 
                                      'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200';
        
        return `
            <button 
                onclick="setActivePhase(${idx})"
                class="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all flex-shrink-0 ${colorClass}"
            >
                <span class="text-lg">${phase.icon}</span>
                <div class="text-left">
                    <div class="text-xs font-semibold whitespace-nowrap">${phase.title}</div>
                    <div class="text-[10px] opacity-75">${progress}% complete</div>
                </div>
            </button>
        `;
    }).join('');
}

// Render phase content
function renderPhaseContent() {
    const phase = strategy.phases[activePhase];
    const progress = getPhaseProgress(phase);
    
    const priorityClass = phase.priority === 'HIGH' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                         phase.priority === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                         'bg-blue-500/20 text-blue-300 border border-blue-500/30';
    
    const content = document.getElementById('phaseContent');
    content.innerHTML = `
        <div class="space-y-6">
            <!-- Phase Header -->
            <div class="bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-100 mb-2">${phase.title}</h2>
                        <div class="flex items-center gap-4 text-sm">
                            <span class="text-slate-400">⏱️ ${phase.duration}</span>
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${priorityClass}">
                                ${phase.priority} PRIORITY
                            </span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-3xl font-bold text-emerald-400 mb-1">${progress}%</div>
                        <div class="text-xs text-slate-500">Phase Progress</div>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                    <div 
                        class="h-full bg-gradient-to-r ${phase.color} transition-all duration-500 rounded-full"
                        style="width: ${progress}%"
                    ></div>
                </div>
            </div>
            
            <!-- Sections -->
            <div class="space-y-4">
                ${phase.sections.map((section, sectionIdx) => {
                    const sectionId = `${activePhase}-${sectionIdx}`;
                    const isExpanded = expandedSections.has(sectionId);
                    const sectionCompleted = section.items.filter(item => completedTasks.has(item.id)).length;
                    const sectionTotal = section.items.length;
                    const sectionProgress = Math.round((sectionCompleted / sectionTotal) * 100);
                    
                    return `
                        <div class="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                            <!-- Section Header -->
                            <button
                                onclick="toggleSection('${sectionId}')"
                                class="w-full flex items-center justify-between p-5 hover:bg-slate-800/50 transition-colors text-left"
                            >
                                <div class="flex items-center gap-3">
                                    <svg class="w-4.5 h-4.5 text-slate-500 transition-transform ${isExpanded ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <h3 class="text-lg font-semibold text-slate-200">${section.title}</h3>
                                    <span class="text-xs text-slate-500 font-mono">
                                        ${sectionCompleted}/${sectionTotal}
                                    </span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-32 h-1.5 bg-slate-900/50 rounded-full overflow-hidden">
                                        <div 
                                            class="h-full bg-emerald-500 transition-all duration-300"
                                            style="width: ${sectionProgress}%"
                                        ></div>
                                    </div>
                                </div>
                            </button>
                            
                            ${isExpanded ? `
                                <div class="border-t border-slate-700/50 divide-y divide-slate-700/30">
                                    ${section.items.map(item => {
                                        const isCompleted = completedTasks.has(item.id);
                                        return `
                                            <div class="p-5 transition-all ${isCompleted ? 'bg-emerald-500/5' : 'hover:bg-slate-800/30'}">
                                                <div class="flex items-start gap-4">
                                                    <!-- Checkbox -->
                                                    <button
                                                        onclick="toggleTask('${item.id}')"
                                                        class="flex-shrink-0 w-5 h-5 rounded border-2 transition-all mt-0.5 ${
                                                            isCompleted 
                                                                ? 'bg-emerald-500 border-emerald-500' 
                                                                : 'border-slate-600 hover:border-emerald-500'
                                                        }"
                                                    >
                                                        ${isCompleted ? `
                                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        ` : ''}
                                                    </button>
                                                    
                                                    <!-- Content -->
                                                    <div class="flex-1">
                                                        <h4 class="font-semibold mb-1 ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-200'}">
                                                            ${item.task}
                                                        </h4>
                                                        <p class="text-sm text-slate-400 mb-3">${item.detail}</p>
                                                        
                                                        ${item.code ? `
                                                            <div class="bg-slate-950/50 border border-slate-700/50 rounded-lg p-3 font-mono text-xs text-emerald-400 overflow-x-auto">
                                                                ${item.code}
                                                            </div>
                                                        ` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Initialize
function init() {
    loadState();
    updateUI();
}

// Run on load
init();