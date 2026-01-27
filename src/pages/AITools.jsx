import { useState, useMemo, useEffect } from "react";

export default function AITools({ setCurrentPage }) {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("aiToolsFavorites");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load favorites:", e);
      return [];
    }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [copiedLink, setCopiedLink] = useState(null);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("aiToolsFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const aiToolsDomains = useMemo(() => ({
    "Coding Tools": {
      icon: "💻",
      description: "AI tools for code generation, debugging, and development",
      tools: [
        { name: "GitHub Copilot", description: "AI pair programmer for code suggestions", link: "https://copilot.github.com", pricing: "freemium", difficulty: "beginner", tags: ["code-completion", "git"], popular: true },
        { name: "ChatGPT", description: "Advanced AI for code help and explanations", link: "https://chatgpt.com", pricing: "freemium", difficulty: "beginner", tags: ["chat", "coding"], popular: true },
        { name: "Tabnine", description: "AI code completion for faster development", link: "https://www.tabnine.com", pricing: "freemium", difficulty: "beginner", tags: ["autocomplete", "ide"] },
        { name: "CodeWhisperer", description: "AWS-powered code generation tool", link: "https://aws.amazon.com/codewhisperer", pricing: "free", difficulty: "beginner", tags: ["aws", "generation"] },
        { name: "Codeium", description: "Free AI code completion and search", link: "https://codeium.com", pricing: "free", difficulty: "beginner", tags: ["free", "search"] },
        { name: "DeepSeek", description: "Advanced AI for code analysis and optimization", link: "https://www.deepseek.com", pricing: "freemium", difficulty: "intermediate", tags: ["analysis", "optimization"] },
        { name: "Claude", description: "Anthropic's AI assistant for coding", link: "https://claude.ai", pricing: "freemium", difficulty: "beginner", tags: ["chat", "reasoning"], popular: true },
        { name: "Replit Ghostwriter", description: "AI code generation in Replit IDE", link: "https://replit.com", pricing: "freemium", difficulty: "beginner", tags: ["ide", "generation"] },
        { name: "Cursor AI", description: "AI-first code editor", link: "https://cursor.sh", pricing: "freemium", difficulty: "intermediate", tags: ["editor", "copilot"] },
        { name: "Blackbox AI", description: "Real-time code generation from chat", link: "https://www.blackbox.ai", pricing: "free", difficulty: "beginner", tags: ["chat", "generation"] },
      ]
    },
    "Presentation Tools": {
      icon: "🎨",
      description: "AI-powered tools for creating stunning presentations",
      tools: [
        { name: "Beautiful.ai", description: "AI-designed presentation templates", link: "https://www.beautiful.ai", pricing: "freemium", difficulty: "beginner", tags: ["design", "templates"] },
        { name: "Gamma", description: "Create impressive presentations in minutes", link: "https://gamma.app", pricing: "freemium", difficulty: "beginner", tags: ["quick", "design"], popular: true },
        { name: "Canva AI", description: "Design presentations with AI assistance", link: "https://www.canva.com", pricing: "freemium", difficulty: "beginner", tags: ["design", "graphics"] },
        { name: "Tome", description: "AI-powered storytelling presentations", link: "https://tome.app", pricing: "freemium", difficulty: "beginner", tags: ["storytelling", "narrative"] },
        { name: "Slides AI", description: "Transform text to beautiful presentations", link: "https://www.slides.ai", pricing: "freemium", difficulty: "beginner", tags: ["text-to-slide", "automation"] },
        { name: "MagicSlides", description: "Create presentations from Google Docs", link: "https://www.magicslides.app", pricing: "freemium", difficulty: "beginner", tags: ["google-docs", "conversion"] },
        { name: "Presentations AI", description: "Auto-generate presentations from content", link: "https://presentations.ai", pricing: "free", difficulty: "beginner", tags: ["auto", "content"] },
        { name: "Decktopus", description: "AI presentation builder", link: "https://www.decktopus.com", pricing: "freemium", difficulty: "beginner", tags: ["builder", "templates"] },
      ]
    },
    "Image & Design": {
      icon: "🖼️",
      description: "AI tools for creating and editing images and designs",
      tools: [
        { name: "Midjourney", description: "Generate stunning AI artwork and images", link: "https://www.midjourney.com", pricing: "paid", difficulty: "intermediate", tags: ["image-generation", "art"], popular: true },
        { name: "DALL-E", description: "Create images from text descriptions", link: "https://openai.com/dall-e", pricing: "paid", difficulty: "beginner", tags: ["text-to-image", "openai"] },
        { name: "Stable Diffusion", description: "Open-source image generation", link: "https://stablediffusionweb.com", pricing: "free", difficulty: "intermediate", tags: ["opensource", "local"] },
        { name: "Adobe Firefly", description: "AI generative fill and design", link: "https://www.adobe.com/products/firefly.html", pricing: "freemium", difficulty: "beginner", tags: ["adobe", "editing"] },
        { name: "Photoshop AI", description: "Intelligent image editing tools", link: "https://www.adobe.com/products/photoshop.html", pricing: "paid", difficulty: "advanced", tags: ["professional", "editing"] },
        { name: "Remove.bg", description: "AI background removal tool", link: "https://www.remove.bg", pricing: "freemium", difficulty: "beginner", tags: ["background", "quick"] },
        { name: "Leonardo AI", description: "AI image generation for design", link: "https://leonardo.ai", pricing: "freemium", difficulty: "beginner", tags: ["generation", "design"] },
        { name: "Upscayl", description: "AI image upscaling tool", link: "https://upscayl.github.io", pricing: "free", difficulty: "beginner", tags: ["upscale", "opensource"] },
        { name: "Clipdrop", description: "AI-powered image editing", link: "https://clipdrop.co", pricing: "freemium", difficulty: "beginner", tags: ["editing", "removal"] },
        { name: "Ideogram", description: "AI art generation with typography", link: "https://ideogram.ai", pricing: "freemium", difficulty: "beginner", tags: ["text-art", "typography"] },
      ]
    },
    "Writing Tools": {
      icon: "✍️",
      description: "AI tools for content writing and copywriting",
      tools: [
        { name: "ChatGPT", description: "AI for writing blogs, articles, and content", link: "https://chatgpt.com", pricing: "freemium", difficulty: "beginner", tags: ["chat", "content"], popular: true },
        { name: "Jasper AI", description: "Professional AI copywriting assistant", link: "https://www.jasper.ai", pricing: "paid", difficulty: "beginner", tags: ["copywriting", "professional"] },
        { name: "Grammarly AI", description: "Smart writing assistant and proofreader", link: "https://www.grammarly.com", pricing: "freemium", difficulty: "beginner", tags: ["grammar", "editing"] },
        { name: "Copy.ai", description: "Generate marketing copy with AI", link: "https://www.copy.ai", pricing: "freemium", difficulty: "beginner", tags: ["marketing", "copy"] },
        { name: "Writersonic", description: "AI content and article generator", link: "https://writersonic.com", pricing: "freemium", difficulty: "beginner", tags: ["articles", "content"] },
        { name: "Sudowrite", description: "AI writing assistant for creatives", link: "https://www.sudowrite.com", pricing: "paid", difficulty: "intermediate", tags: ["creative", "writing"] },
        { name: "Rytr", description: "AI writing assistant for all use cases", link: "https://rytr.me", pricing: "freemium", difficulty: "beginner", tags: ["versatile", "affordable"] },
        { name: "QuillBot", description: "AI paraphrasing and grammar tool", link: "https://quillbot.com", pricing: "freemium", difficulty: "beginner", tags: ["paraphrase", "grammar"] },
        { name: "Wordtune", description: "AI text rewriting assistant", link: "https://www.wordtune.com", pricing: "freemium", difficulty: "beginner", tags: ["rewriting", "tone"] },
      ]
    },
    "Video Tools": {
      icon: "🎬",
      description: "AI tools for video creation, editing, and generation",
      tools: [
        { name: "Synthesia", description: "Create AI avatar videos easily", link: "https://www.synthesia.io", pricing: "paid", difficulty: "beginner", tags: ["avatar", "video"] },
        { name: "Runway ML", description: "AI video editing and generation", link: "https://runwayml.com", pricing: "freemium", difficulty: "intermediate", tags: ["editing", "effects"] },
        { name: "Descript", description: "AI-powered video and audio editing", link: "https://www.descript.com", pricing: "freemium", difficulty: "beginner", tags: ["transcript", "editing"], popular: true },
        { name: "HeyGen", description: "Create videos with AI avatars", link: "https://www.heygen.com", pricing: "freemium", difficulty: "beginner", tags: ["avatar", "video"] },
        { name: "Opus Clip", description: "Turn long videos into viral shorts", link: "https://www.opusclip.com", pricing: "freemium", difficulty: "beginner", tags: ["shorts", "clips"] },
        { name: "Pictory AI", description: "Convert scripts to videos automatically", link: "https://pictory.ai", pricing: "freemium", difficulty: "beginner", tags: ["automation", "scripts"] },
        { name: "Loom AI", description: "Screen recording with AI features", link: "https://www.loom.com", pricing: "freemium", difficulty: "beginner", tags: ["recording", "demo"] },
        { name: "Kapwing", description: "AI video editor for creators", link: "https://www.kapwing.com", pricing: "freemium", difficulty: "beginner", tags: ["editing", "memes"] },
        { name: "Invideo AI", description: "AI video maker from text", link: "https://invideo.io", pricing: "freemium", difficulty: "beginner", tags: ["text-to-video", "automation"] },
      ]
    },
    "Music & Audio": {
      icon: "🎵",
      description: "AI tools for music generation and audio processing",
      tools: [
        { name: "Suno AI", description: "Create original music with AI", link: "https://www.suno.ai", pricing: "freemium", difficulty: "beginner", tags: ["music", "generation"] },
        { name: "Soundraw", description: "AI music generation for creators", link: "https://www.soundraw.io", pricing: "freemium", difficulty: "beginner", tags: ["music", "royalty-free"] },
        { name: "AIVA", description: "AI music composer for games and films", link: "https://www.aiva.ai", pricing: "freemium", difficulty: "beginner", tags: ["composition", "games"] },
        { name: "Murf AI", description: "Text-to-speech with AI voices", link: "https://www.murf.ai", pricing: "freemium", difficulty: "beginner", tags: ["tts", "voices"] },
        { name: "Elevenlabs", description: "Natural-sounding AI voice synthesis", link: "https://www.elevenlabs.io", pricing: "freemium", difficulty: "beginner", tags: ["voice", "natural"], popular: true },
        { name: "Voicemod", description: "Real-time AI voice changer", link: "https://www.voicemod.net", pricing: "freemium", difficulty: "beginner", tags: ["voice", "realtime"] },
        { name: "Udio", description: "AI music composition platform", link: "https://www.udio.com", pricing: "freemium", difficulty: "beginner", tags: ["composition", "platform"] },
        { name: "MusicLM", description: "Google's music generation AI", link: "https://musiclm.google.com", pricing: "free", difficulty: "intermediate", tags: ["google", "generation"] },
      ]
    },
    "Data Analysis": {
      icon: "📊",
      description: "AI tools for data analysis and visualization",
      tools: [
        { name: "ChatGPT", description: "Analyze and interpret data with AI", link: "https://chatgpt.com", pricing: "freemium", difficulty: "intermediate", tags: ["analysis", "chat"] },
        { name: "Power BI AI", description: "Microsoft's AI analytics tool", link: "https://www.microsoft.com/power-bi", pricing: "paid", difficulty: "advanced", tags: ["microsoft", "enterprise"] },
        { name: "Tableau AI", description: "Smart data visualization", link: "https://www.tableau.com", pricing: "paid", difficulty: "advanced", tags: ["visualization", "professional"] },
        { name: "MonkeyLearn", description: "AI text analysis and classification", link: "https://monkeylearn.com", pricing: "freemium", difficulty: "intermediate", tags: ["nlp", "classification"] },
        { name: "IBM Watson", description: "Enterprise AI for data insights", link: "https://www.ibm.com/cloud/watson", pricing: "paid", difficulty: "advanced", tags: ["enterprise", "ml"] },
        { name: "Looker", description: "AI-powered business intelligence", link: "https://cloud.google.com/looker", pricing: "paid", difficulty: "advanced", tags: ["bi", "google"] },
        { name: "Alteryx", description: "AI-powered data analytics platform", link: "https://www.alteryx.com", pricing: "paid", difficulty: "advanced", tags: ["automation", "enterprise"] },
      ]
    },
    "SEO & Marketing": {
      icon: "📈",
      description: "AI tools for digital marketing and SEO optimization",
      tools: [
        { name: "Surfer SEO", description: "AI-powered SEO content optimization", link: "https://surferseo.com", pricing: "paid", difficulty: "intermediate", tags: ["seo", "content"] },
        { name: "Jasper", description: "AI content marketing platform", link: "https://www.jasper.ai", pricing: "paid", difficulty: "intermediate", tags: ["marketing", "content"] },
        { name: "Semrush AI", description: "AI SEO and marketing toolkit", link: "https://www.semrush.com", pricing: "paid", difficulty: "intermediate", tags: ["seo", "toolkit"], popular: true },
        { name: "Ahrefs", description: "AI-powered SEO analysis", link: "https://ahrefs.com", pricing: "paid", difficulty: "advanced", tags: ["seo", "backlinks"] },
        { name: "MarketingBlocks", description: "AI marketing suite", link: "https://marketingblocks.ai", pricing: "freemium", difficulty: "beginner", tags: ["marketing", "suite"] },
        { name: "Brandwatch", description: "AI social listening and analytics", link: "https://www.brandwatch.com", pricing: "paid", difficulty: "advanced", tags: ["social", "monitoring"] },
        { name: "Copy.ai", description: "AI marketing copy generator", link: "https://www.copy.ai", pricing: "freemium", difficulty: "beginner", tags: ["copy", "marketing"] },
      ]
    },
    "Learning & Education": {
      icon: "📚",
      description: "AI tools for education, tutoring, and course creation",
      tools: [
        { name: "ChatGPT", description: "AI tutor for learning any subject", link: "https://chatgpt.com", pricing: "freemium", difficulty: "beginner", tags: ["tutoring", "learning"] },
        { name: "Duolingo Max", description: "AI-powered language learning", link: "https://www.duolingo.com", pricing: "freemium", difficulty: "beginner", tags: ["languages", "interactive"] },
        { name: "Coursera AI", description: "AI personalized learning paths", link: "https://www.coursera.org", pricing: "freemium", difficulty: "beginner", tags: ["courses", "certification"] },
        { name: "Gradescope AI", description: "AI-powered homework grading", link: "https://www.gradescope.com", pricing: "paid", difficulty: "advanced", tags: ["grading", "education"] },
        { name: "Teachable", description: "AI course creation platform", link: "https://teachable.com", pricing: "freemium", difficulty: "intermediate", tags: ["course-builder", "platform"] },
        { name: "Create.xyz", description: "AI course builder", link: "https://create.xyz", pricing: "freemium", difficulty: "beginner", tags: ["courses", "builder"] },
        { name: "Consensus", description: "AI research paper summarizer", link: "https://consensus.app", pricing: "freemium", difficulty: "intermediate", tags: ["research", "academic"] },
      ]
    },
    "Business Tools": {
      icon: "💼",
      description: "AI tools for business automation and productivity",
      tools: [
        { name: "ChatGPT Plus", description: "Advanced AI for business tasks", link: "https://chatgpt.com", pricing: "paid", difficulty: "beginner", tags: ["business", "productivity"] },
        { name: "Make.com", description: "AI workflow automation platform", link: "https://www.make.com", pricing: "freemium", difficulty: "intermediate", tags: ["automation", "workflows"] },
        { name: "Zapier", description: "AI-powered automation engine", link: "https://zapier.com", pricing: "freemium", difficulty: "intermediate", tags: ["automation", "integration"] },
        { name: "HubSpot AI", description: "AI CRM and marketing platform", link: "https://www.hubspot.com", pricing: "freemium", difficulty: "intermediate", tags: ["crm", "marketing"] },
        { name: "Notion AI", description: "AI-powered workspace", link: "https://www.notion.so", pricing: "paid", difficulty: "beginner", tags: ["notes", "productivity"] },
        { name: "Slack AI", description: "AI-powered team communication", link: "https://slack.com", pricing: "paid", difficulty: "beginner", tags: ["communication", "team"] },
        { name: "Monday.com AI", description: "AI work management platform", link: "https://monday.com", pricing: "freemium", difficulty: "intermediate", tags: ["project-management", "teams"] },
      ]
    },
    "Research Tools": {
      icon: "🔬",
      description: "AI tools for research, paper analysis, and insights",
      tools: [
        { name: "Consensus", description: "AI-powered research paper finder", link: "https://consensus.app", pricing: "freemium", difficulty: "intermediate", tags: ["research", "papers"] },
        { name: "Perplexity AI", description: "AI research assistant", link: "https://www.perplexity.ai", pricing: "freemium", difficulty: "beginner", tags: ["search", "research"] },
        { name: "Semantic Scholar", description: "AI academic paper search", link: "https://www.semanticscholar.org", pricing: "free", difficulty: "beginner", tags: ["papers", "search"] },
        { name: "Connected Papers", description: "AI research paper visualization", link: "https://www.connectedpapers.com", pricing: "freemium", difficulty: "intermediate", tags: ["visualization", "mapping"] },
        { name: "Elicit", description: "AI research paper analyzer", link: "https://elicit.org", pricing: "freemium", difficulty: "intermediate", tags: ["analysis", "papers"] },
        { name: "ScholarMate", description: "AI academic research tool", link: "https://scholarmate.ai", pricing: "freemium", difficulty: "beginner", tags: ["academic", "research"] },
      ]
    },
  }), []);

  const toggleFavorite = (toolName) => {
    setFavorites(prev =>
      prev.includes(toolName) ? prev.filter(f => f !== toolName) : [...prev, toolName]
    );
  };

  const copyToClipboard = (link, toolName) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(toolName);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  // Search and filter functionality - memoize to avoid dependency issues
  const allTools = useMemo(
    () => Object.entries(aiToolsDomains).flatMap(([domain, data]) =>
      data.tools.map(tool => ({ ...tool, domain }))
    ),
    [aiToolsDomains]
  );

  const filteredTools = useMemo(() => {
    let result = allTools;

    if (searchTerm.trim()) {
      result = result.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (showFavoritesOnly) {
      result = result.filter(tool => favorites.includes(tool.name));
    }

    return result;
  }, [searchTerm, showFavoritesOnly, favorites, allTools]);

  const displayMode = searchTerm.trim() || showFavoritesOnly ? "search" : selectedDomain;
  const popularTools = allTools.filter(t => t.popular);

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case "free": return "#10b981";
      case "freemium": return "#f59e0b";
      case "paid": return "#ef4444";
      default: return "#06b6d4";
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>🚀 Crazy Resources</h1>
        <button
          onClick={() => setCurrentPage("home")}
          style={styles.backButton}
        >
          ← Back to Home
        </button>
      </nav>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.content}>
          <h2 style={styles.title}>🤖 AI Tools Directory</h2>
          <p style={styles.subtitle}>
            Discover 100+ powerful AI tools across 13 different domains to boost your productivity
          </p>

          {/* Control Bar */}
          <div style={styles.controlBar}>
            {/* Search Bar */}
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="🔍 Search tools, domains, tags..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={styles.clearBtn}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Favorites Toggle */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              style={{
                ...styles.favButton,
                ...(showFavoritesOnly ? styles.favButtonActive : {})
              }}
            >
              ⭐ Favorites ({favorites.length})
            </button>
          </div>

          {/* Popular Tools Carousel */}
          {!displayMode && popularTools.length > 0 && (
            <div style={styles.popularSection}>
              <h3 style={styles.sectionTitle}>🏆 Popular Tools</h3>
              <div style={styles.popularGrid}>
                {popularTools.slice(0, 6).map((tool, idx) => (
                  <a key={idx} href={tool.link} target="_blank" rel="noopener noreferrer" style={styles.popularCardLink}>
                    <div style={styles.popularCard}>
                      <div style={styles.popularBadge}>⭐ Popular</div>
                      <h4 style={styles.popularName}>{tool.name}</h4>
                      <p style={styles.popularDesc}>{tool.description}</p>
                      <div style={styles.toolMeta}>
                        <span style={{...styles.pricingBadge, backgroundColor: getPricingColor(tool.pricing)}}>{tool.pricing}</span>
                        <span style={styles.difficultyBadge}>{tool.difficulty}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Search/Filter Results */}
          {displayMode && (
            <div style={styles.resultsSection}>
              <div style={styles.resultsHeader}>
                <h3 style={styles.resultsTitle}>
                  {showFavoritesOnly
                    ? `⭐ Your Favorite Tools (${filteredTools.length})`
                    : `🔎 Found ${filteredTools.length} tool${filteredTools.length !== 1 ? 's' : ''}`}
                </h3>
              </div>

              {filteredTools.length > 0 ? (
                <div style={styles.toolsList}>
                  {filteredTools.map((tool, idx) => (
                    <div key={idx} style={styles.toolCard}>
                      <div style={styles.toolCardTop}>
                        <div>
                          <div style={styles.toolCardHeader}>
                            <h4 style={styles.toolName}>{tool.name}</h4>
                            {tool.popular && <span style={styles.popularBadgeSmall}>⭐</span>}
                          </div>
                          <p style={styles.toolDomain}>{tool.domain}</p>
                        </div>
                        <button
                          onClick={() => toggleFavorite(tool.name)}
                          style={{
                            ...styles.favoriteBtn,
                            ...(favorites.includes(tool.name) ? styles.favoriteBtnActive : {})
                          }}
                        >
                          {favorites.includes(tool.name) ? "❤️" : "🤍"}
                        </button>
                      </div>

                      <p style={styles.toolDescription}>{tool.description}</p>

                      <div style={styles.tagsContainer}>
                        {tool.tags.map((tag, i) => (
                          <span key={i} style={styles.tag}>{tag}</span>
                        ))}
                      </div>

                      <div style={styles.toolFooter}>
                        <div style={styles.badges}>
                          <span style={{...styles.pricingBadge, backgroundColor: getPricingColor(tool.pricing)}}>{tool.pricing}</span>
                          <span style={styles.difficultyBadge}>{tool.difficulty}</span>
                        </div>
                        <div style={styles.actions}>
                          <button
                            onClick={() => copyToClipboard(tool.link, tool.name)}
                            style={styles.copyBtn}
                            title="Copy link"
                          >
                            {copiedLink === tool.name ? "✓ Copied!" : "📋"}
                          </button>
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.visitBtn}
                          >
                            Visit →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={styles.noResults}>
                  <p style={styles.noResultsText}>
                    😔 {showFavoritesOnly ? "No favorites yet!" : "No tools found. Try a different search!"}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Domain Selection */}
          {!displayMode && (
            <>
              <div style={styles.statsContainer}>
                <div style={styles.statItem}>
                  <span style={styles.statNumber}>{Object.keys(aiToolsDomains).length}</span>
                  <span style={styles.statLabel}>Domains</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statNumber}>{allTools.length}+</span>
                  <span style={styles.statLabel}>Tools</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statNumber}>{favorites.length}</span>
                  <span style={styles.statLabel}>Bookmarked</span>
                </div>
              </div>

              <div style={styles.domainsGrid}>
                {Object.entries(aiToolsDomains).map(([domain, data]) => (
                  <div
                    key={domain}
                    style={{
                      ...styles.domainCard,
                      ...(selectedDomain === domain ? styles.domainCardActive : {}),
                    }}
                    onClick={() => setSelectedDomain(selectedDomain === domain ? null : domain)}
                  >
                    <div style={styles.domainIcon}>{data.icon}</div>
                    <h3 style={styles.domainName}>{domain}</h3>
                    <p style={styles.domainCount}>{data.tools.length} tools</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Domain Tools List */}
          {selectedDomain && !displayMode && (
            <div style={styles.toolsSection}>
              <div style={styles.toolsHeader}>
                <h3 style={styles.toolsSectionTitle}>
                  {aiToolsDomains[selectedDomain].icon} {selectedDomain}
                </h3>
                <p style={styles.toolsDescription}>
                  {aiToolsDomains[selectedDomain].description}
                </p>
              </div>

              <div style={styles.toolsList}>
                {aiToolsDomains[selectedDomain].tools.map((tool, idx) => (
                  <div key={idx} style={styles.toolCard}>
                    <div style={styles.toolCardTop}>
                      <div>
                        <div style={styles.toolCardHeader}>
                          <h4 style={styles.toolName}>{tool.name}</h4>
                          {tool.popular && <span style={styles.popularBadgeSmall}>⭐</span>}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(tool.name)}
                        style={{
                          ...styles.favoriteBtn,
                          ...(favorites.includes(tool.name) ? styles.favoriteBtnActive : {})
                        }}
                      >
                        {favorites.includes(tool.name) ? "❤️" : "🤍"}
                      </button>
                    </div>

                    <p style={styles.toolDescription}>{tool.description}</p>

                    <div style={styles.tagsContainer}>
                      {tool.tags.map((tag, i) => (
                        <span key={i} style={styles.tag}>{tag}</span>
                      ))}
                    </div>

                    <div style={styles.toolFooter}>
                      <div style={styles.badges}>
                        <span style={{...styles.pricingBadge, backgroundColor: getPricingColor(tool.pricing)}}>{tool.pricing}</span>
                        <span style={styles.difficultyBadge}>{tool.difficulty}</span>
                      </div>
                      <div style={styles.actions}>
                        <button
                          onClick={() => copyToClipboard(tool.link, tool.name)}
                          style={styles.copyBtn}
                          title="Copy link"
                        >
                          {copiedLink === tool.name ? "✓ Copied!" : "📋"}
                        </button>
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.visitBtn}
                        >
                          Visit →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!selectedDomain && !displayMode && (
            <div style={styles.emptyState}>
              <p style={styles.emptyStateText}>
                👆 Click on a domain above to explore AI tools
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Crazy Resources. Built with ❤️ by Students, for Students</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 62, 0.95))",
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    margin: 0,
    fontSize: "28px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#06b6d4",
    background: "transparent",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  mainSection: {
    padding: "60px 20px",
    minHeight: "calc(100vh - 160px)",
  },
  content: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    fontSize: "54px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "40px",
  },
  controlBar: {
    display: "flex",
    gap: "15px",
    marginBottom: "40px",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  searchContainer: {
    flex: "1",
    minWidth: "250px",
    maxWidth: "500px",
    position: "relative",
  },
  searchInput: {
    width: "100%",
    padding: "14px 48px 14px 18px",
    fontSize: "15px",
    border: "2px solid rgba(6, 182, 212, 0.4)",
    borderRadius: "12px",
    background: "rgba(6, 182, 212, 0.08)",
    color: "#f1f5f9",
    transition: "all 0.3s ease",
    outline: "none",
    boxShadow: "0 4px 20px rgba(6, 182, 212, 0.1)",
  },
  clearBtn: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "6px 12px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: "bold",
  },
  favButton: {
    padding: "12px 24px",
    background: "rgba(99, 102, 241, 0.2)",
    border: "2px solid rgba(99, 102, 241, 0.4)",
    color: "#a78bfa",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  },
  favButtonActive: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(236, 72, 153, 0.3))",
    border: "2px solid rgba(99, 102, 241, 0.6)",
    color: "#fbbf24",
  },
  popularSection: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "28px",
    color: "#06b6d4",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  popularGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "18px",
  },
  popularCard: {
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(236, 72, 153, 0.15))",
    border: "2px solid rgba(251, 191, 36, 0.4)",
    borderRadius: "14px",
    padding: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
  },
  popularCardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  popularBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#000",
    padding: "4px 10px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: "bold",
  },
  popularName: {
    fontSize: "18px",
    color: "#fbbf24",
    fontWeight: "bold",
    margin: "25px 0 8px 0",
  },
  popularDesc: {
    fontSize: "13px",
    color: "#cbd5e1",
    margin: "0 0 12px 0",
    lineHeight: "1.4",
  },
  toolMeta: {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
  },
  resultsSection: {
    marginBottom: "40px",
  },
  resultsHeader: {
    marginBottom: "30px",
  },
  resultsTitle: {
    fontSize: "28px",
    color: "#06b6d4",
    fontWeight: "bold",
    margin: "0",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
    maxWidth: "600px",
    margin: "0 auto 50px",
  },
  statItem: {
    textAlign: "center",
    padding: "20px",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(236, 72, 153, 0.15))",
    borderRadius: "12px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
  },
  statNumber: {
    display: "block",
    fontSize: "32px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "5px",
  },
  statLabel: {
    display: "block",
    fontSize: "14px",
    color: "#cbd5e1",
  },
  domainsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  domainCard: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "28px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  domainCardActive: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.35), rgba(236, 72, 153, 0.35))",
    border: "2px solid rgba(6, 182, 212, 0.7)",
    boxShadow: "0 16px 50px rgba(6, 182, 212, 0.35)",
    transform: "translateY(-8px) scale(1.08)",
  },
  domainIcon: {
    fontSize: "40px",
  },
  domainName: {
    fontSize: "16px",
    color: "#06b6d4",
    fontWeight: "bold",
    margin: "0",
  },
  domainCount: {
    fontSize: "12px",
    color: "#cbd5e1",
    margin: "0",
  },
  toolsSection: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(6, 182, 212, 0.12))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "18px",
    padding: "45px",
    marginTop: "40px",
  },
  toolsHeader: {
    marginBottom: "35px",
    textAlign: "center",
  },
  toolsSectionTitle: {
    fontSize: "36px",
    color: "#06b6d4",
    marginBottom: "12px",
    fontWeight: "bold",
  },
  toolsDescription: {
    fontSize: "16px",
    color: "#cbd5e1",
    margin: "0",
  },
  toolsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "24px",
  },
  toolCard: {
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 26, 62, 0.8))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "14px",
    padding: "24px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    position: "relative",
  },
  toolCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "15px",
    gap: "10px",
  },
  toolCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "4px",
  },
  toolName: {
    fontSize: "18px",
    color: "#06b6d4",
    fontWeight: "bold",
    margin: "0",
  },
  popularBadgeSmall: {
    fontSize: "16px",
  },
  favoriteBtn: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    padding: "4px",
  },
  favoriteBtnActive: {
    transform: "scale(1.2)",
  },
  toolDomain: {
    fontSize: "12px",
    color: "#a78bfa",
    fontWeight: "600",
    margin: "0",
  },
  toolDescription: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "12px",
    flex: "1",
    margin: "0 0 12px 0",
    lineHeight: "1.5",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "15px",
  },
  tag: {
    display: "inline-block",
    background: "rgba(99, 102, 241, 0.25)",
    color: "#a78bfa",
    padding: "4px 10px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: "600",
  },
  toolFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    paddingTop: "12px",
    borderTop: "1px solid rgba(6, 182, 212, 0.2)",
  },
  badges: {
    display: "flex",
    gap: "8px",
  },
  pricingBadge: {
    color: "white",
    padding: "4px 10px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  difficultyBadge: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "white",
    padding: "4px 10px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  actions: {
    display: "flex",
    gap: "8px",
  },
  copyBtn: {
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(34, 197, 94, 0.2))",
    border: "1px solid rgba(16, 185, 129, 0.4)",
    color: "#10b981",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
  visitBtn: {
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    color: "white",
    padding: "6px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
    display: "inline-block",
  },
  emptyState: {
    textAlign: "center",
    padding: "100px 20px",
  },
  emptyStateText: {
    fontSize: "24px",
    color: "#cbd5e1",
  },
  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "80px 20px",
  },
  noResultsText: {
    fontSize: "20px",
    color: "#cbd5e1",
  },
  footer: {
    background: "linear-gradient(135deg, #0a0a16, #0f0f23)",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "30px",
    fontSize: "14px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
};
