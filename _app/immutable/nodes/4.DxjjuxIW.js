import{I as e,J as t,P as n,R as r,X as i,Z as a,_ as o,et as s,g as c,j as l,k as u,l as d,q as f,y as p}from"../chunks/CGDh-eqo.js";import"../chunks/xihTtKlq.js";import{n as m}from"../chunks/Cnff18jI.js";import{t as h}from"../chunks/7vcmureJ.js";import{t as g}from"../chunks/C6ibUodc.js";import{t as _}from"../chunks/PY8KjkM1.js";import{n as v,r as y,t as b}from"../chunks/B2xE0bxY.js";var x=s({load:()=>S}),S=async({fetch:e})=>{let[t,n]=await Promise.all([e(`/data/harness-noise.json`).then(e=>e.json()),e(`/data/harness-toolmix.json`).then(e=>e.json())]);return{harness:t,toolmix:n}},C=p(`<b>Archived — outdated.</b> This is the original July writeup, kept at its old link because it is
		referenced elsewhere. It has since been folded into a broader study across six harnesses, with corrected
		numbers and a fuller picture (two more harnesses, and one that falls out of the band entirely). Read the
		current version: <a href="/articles/harness-showdown/"><b>Harness showdown →</b></a>`,1),w=p(`<b>Update, 27 July 2026</b> — after the <a href="https://www.reddit.com/r/LocalLLaMA/comments/1v7d8px/harness_showdown_claude_code_vs_opencode_vs_pi/">r/LocalLLaMA thread</a> I went and added a fourth
			harness, <b>Nanocoder</b>, the community local-first one. Same story: it sits right in the quality band
			with the others, and it spends about as much as Claude Code on tokens and time, so nothing really moved,
			the picture just gained a fourth harness saying the same thing.`,1),T=p(`<article class="mx-auto max-w-2xl"><a href="/" class="text-[13.5px] text-mut hover:text-fg">← all posts</a> <h1 class="mb-3 mt-4 text-[32px] font-bold leading-tight tracking-tight"> </h1> <p class="mb-4 text-[19px] leading-relaxed text-fgdim">Hold the model fixed, one local DeepSeek V4 Flash (High), and change everything around it. Three
		harnesses, Pi, OpenCode and Claude Code, wrapped the same model, each bringing its own tool set and
		system prompt, the levers people believe make a coding model better. Handed the same tasks and graded
		the same way, the work came out the same across every setup. What changed, by multiples, was the time
		and tokens each one spent getting there.</p> <p class="mb-6 text-[13px] text-mut"> </p> <!> <div class="space-y-4 text-[16px] leading-relaxed text-fgdim [&amp;_a]:text-acc [&amp;_h2]:mt-9 [&amp;_h2]:text-[21px] [&amp;_h2]:font-semibold [&amp;_h2]:tracking-tight [&amp;_h2]:text-fg [&amp;_b]:text-fg [&amp;_blockquote]:my-6 [&amp;_blockquote]:rounded-xl [&amp;_blockquote]:border [&amp;_blockquote]:border-border [&amp;_blockquote]:border-l-2 [&amp;_blockquote]:border-l-acc [&amp;_blockquote]:bg-panel [&amp;_blockquote]:p-5 [&amp;_blockquote]:text-[17px] [&amp;_blockquote]:leading-relaxed [&amp;_blockquote]:text-fg"><p>Four harnesses. Three off-the-shelf, lightest to heaviest: <b>Pi</b>, a bare 4-tool harness; <b>OpenCode</b>, a mid-weight framework; and <b>Claude Code</b>, a heavy one that does not speak the
			local server's API, so it reaches DeepSeek V4 Flash through a small proxy
			(<a href="https://github.com/router-for-me/CLIProxyAPI">CLIProxyAPI</a>). Plus a fourth, <b>Nanocoder</b>, a community, local-first harness added later. The same model sits underneath all of
			them, <a href="/data#models">served the same way throughout</a>, the same set of real bug fixes, the
			same grading, and only the wrapper moves.</p> <h2>The grades come out the same</h2> <p>Across the tasks no grade difference held up, and whether it was Pi, OpenCode or Claude Code the
			scored work landed in the same overlapping place, because the run-to-run noise is wide enough to
			swallow the gaps between them whole.</p> <blockquote>On the hardest tasks the same harness scores a basic attempt on one run and a solid fix on the next,
			a full grade apart, with nothing changed between them but the random seed.</blockquote> <p>The run-to-run swing is that wide, so with only 2 or 3 runs the noise decides which harness looks
			best, and a ranking that changes every time you rerun it is no ranking at all. The chart below puts
			the four harnesses on one axis, and they land in a single overlapping band.</p> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">Quality: grade per run</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Each dot is one run — 24 apiece for Pi, OpenCode and Claude Code (three per task), 64 for Nanocoder
				(eight per task) — with the mean and 95% confidence interval. Every interval overlaps every other:
				even at these sample sizes, nothing separates cleanly from the noise.</figcaption></figure> <h2>The difference is time and tokens</h2> <p>What separates the harnesses is efficiency, and the heavy end is Claude Code and Nanocoder, several
			times the tokens and the wall-clock of either lean harness to reach the same fix. The cost is all on the output side, in what the model generates and the tools it runs. They read
			very differently too, Claude Code and Nanocoder exploring far more, but on this model that barely registers, because
			DeepSeek V4 Flash reads input at nearly the same speed at 10K tokens or 200K, so heavy context is close
			to free here and would only bite as billed input on a metered API. What costs is generation, and since the same model decodes at the same rate
			for all three, more output and more tool-running is simply more time. The two lean harnesses come out
			close on output, and where OpenCode takes longer than Pi it is the tool-running, not the word count.</p> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">Efficiency: wall-clock per run</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Zoomed to 10 minutes by default; toggle to Full to see every run at its true spot. Each dot is one
				run, the marker its task-weighted average. Claude Code is the slowest, Nanocoder the next-heaviest,
				while Pi and OpenCode finish in a fraction of the time.</figcaption></figure> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">Efficiency: output tokens per run</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Zoomed to 100K by default; toggle to Full for the whole axis. Claude Code and Nanocoder generate
				several times more than either lean harness; Pi and OpenCode land close once OpenCode's subagents are counted in.</figcaption></figure> <h2>Pi reasons, OpenCode delegates</h2> <p>The two lean harnesses generate about the same amount, they just spend the clock differently. Pi does
			the whole task in one context, verifying by thinking, so almost all of its tokens are reasoning in one
			long stream. OpenCode hands chunks of the work to subagents instead, each a separate sub-run that
			generates on its own, and those tokens never surface in the main stream, which is what made a plain
			count read OpenCode as the leanest of the three at around 11,000. Count the subagents back in and it
			lands near 17,000, right alongside Pi's 15,000, not below it, so neither out-writes the other by much.
			What separates them is pace, the same model decodes at one rate for both, but Pi spends its clock
			generating in long bursts while OpenCode spends more of its shuttling work out to subagents and waiting
			on the hand-offs, so it takes longer to reach a similar word count. And none of it moves the grade,
			because the 8 bugs are subtle logic bugs, a guard testing the wrong condition, a state change firing a
			step too early, that a subagent catches no better than a careful line of reasoning, and a capable model
			lands either way.</p> <h2>Claude Code and Nanocoder explore most, and edit only when certain</h2> <p>These two are the heavy explorers, each burning several times the tokens of a lean harness to reach the
			same fix and each holding off on edits until late in the run. Claude Code runs the most tool calls of
			the four by a wide margin, around 70 to a task where Pi needs 40 and OpenCode just 22, and its first
			edit lands about 80% of the way through; Nanocoder makes fewer calls but re-reads the same files more
			than anything else, and commits nearer 70%. Nearly all of that front-loaded work is looking rather than
			touching, reading files and searching the tree, and the edit each finally makes is the same handful of
			lines the lean harnesses landed long before. The diligence has no ceiling and no reward: on the hardest
			bug Claude Code was still reading when the run hit its time limit, and everywhere they finished the grade
			came out level with the lean pair. They are the most thorough readers of the codebase, and on fixes this
			size thoroughness is just time.</p> <figure class="my-6"><div class="mb-2 text-[14px] font-semibold text-fg">How each harness works a task: tool calls in order</div> <!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">One representative run per harness, each tool call a cell in the order it happened. Strip length is
				the call count (Pi 38, OpenCode 17, Claude Code 59, Nanocoder 35), edits in red. OpenCode is short
				and decisive; Claude Code and Nanocoder are long stretches of reading and searching with their edits
				clustered near the end.</figcaption></figure> <h2>The four, and how each runs</h2> <p>All four drive the same local model; what differs is the machinery each wraps around it, and that
			is what the numbers reflect.</p> <p><b>Pi</b> (0.80.10), the bare harness, carries almost nothing, a short prompt and a handful of tools, so it
			stays the leanest on overhead by a wide margin.</p> <p><b>OpenCode</b> (1.17.10), the mid-weight framework, leans on compound shell commands, packing several
			operations into one call, but hands larger pieces of the work off to subagents, which do their own
			generating, bringing its true output up near Pi's, while the round-trips to and from those subagents
			are what cost it the extra clock.</p> <p><b>Claude Code</b> (2.1.186), the heavy harness, brings 27 tools, most of them orchestration plumbing a bug fix
			never touches, and it works through them in the most steps of the three, generating several times
			the output and running the most tools, which is where its tokens and its wall-clock go, with no
			grade to show for the extra.</p> <p><b>Nanocoder</b> (1.29.0), the community harness, is local-first and lean where it counts, its fixed
			prompt about 6K tokens, nearer OpenCode than Claude Code. But it explores the hardest of the four,
			read- and search-heavy, planning and delegating to subagents, and re-reading the same files more than
			any other harness. That exploration is all generation, so it spends like Claude Code, around 56K
			output tokens and five minutes a task, for the same graded result. Local-first does not mean lean.</p> <figure class="not-prose my-6"><!> <figcaption class="mt-3 text-[13px] leading-relaxed text-mut">Claude Code costs the most on every row above the grade, with Nanocoder close behind on tokens and
				time. On the grade itself the four cannot be told apart, the point estimates jitter but the intervals
				overlap completely, so no harness is measurably better. Tools and fixed overhead are set per harness;
				the four rows below them are task-weighted averages across the runs.</figcaption></figure> <h2>Which one to reach for</h2> <p>This is DeepSeek V4 Flash on eight focused bug fixes, so read it scoped. For a capable model the
			harness is an efficiency choice and not a quality one, at least in my agentic workloads in a large
			codebase. And the next time a post claims that some harness, some prompt, or some clever context file
			made a coding model measurably better, the first thing to ask is how many times they ran it, because
			under about 10 runs a condition there is a good chance they mostly measured the weather.</p> <!></div> <!></article>`);function E(s,p){t(p,!0);let x=m(`harness-efficiency-not-quality`),S={"pi-default":`#0D9488`,"deepseek-v4-flash":`#6366F1`,"deepseek-cc-local":`#D97757`,nanocoder:`#DB2777`},E=p.data.harness.harnesses,D=(e,t)=>({name:e.name,desc:e.desc,color:S[e.key],mean:e[t].mean,ci:e[t].ci,vals:e[t].vals}),O=E.map(e=>D(e,`quality`)),k=E.map(e=>D(e,`wall`)),A=E.map(e=>D(e,`tokens`)),j=[`Pi`,`OpenCode`,`Claude Code`,`Nanocoder`],M=[S[`pi-default`],S[`deepseek-v4-flash`],S[`deepseek-cc-local`],S.nanocoder],N=e=>Math.round(e).toLocaleString(),P=e=>E.map(t=>t[e].ci),F=e=>E.map(t=>t[e].mean),I=[{label:`Tools`,vals:[4,10,27,15],fmt:e=>``+e},{label:`Fixed overhead / turn`,vals:[1340,7197,23132,6121],fmt:N},{label:`Avg. steps`,vals:[28,16.6,37.9,37.4],ci:[[21.3,34.6],[11.5,21.7],[22.6,53.2],[29.6,45.2]],fmt:e=>e.toFixed(1)},{label:`Avg. output tokens`,vals:F(`tokens`),ci:P(`tokens`),fmt:N},{label:`Avg. wall time`,vals:F(`wall`),ci:P(`wall`),fmt:e=>e.toFixed(1)+`m`},{label:`Avg. graded quality (0 to 3)`,vals:F(`quality`),ci:P(`quality`),fmt:e=>e.toFixed(2)}];var L=T();d(`1w36ail`,e=>{u(()=>{n.title=`Nawk - ${x.title??``}`})});var R=r(e(L),2),z=e(R,!0);a(R);var B=r(R,4),V=e(B);a(B);var H=r(B,2);_(H,{tone:`danger`,children:(e,t)=>{var n=C();i(2),o(e,n)},$$slots:{default:!0}});var U=r(H,2),W=r(e(U),10);y(r(e(W),2),{get series(){return O},domain:[0,3],unit:`quality`,kind:`quality`}),i(2),a(W);var G=r(W,6);y(r(e(G),2),{get series(){return k},domain:[0,10],unit:`min`}),i(2),a(G);var K=r(G,2);y(r(e(K),2),{get series(){return A},domain:[0,1e5],unit:`tokens`}),i(2),a(K);var q=r(K,10);v(r(e(q),2),{get data(){return p.data.toolmix},order:[`Pi`,`OpenCode`,`Claude Code`,`Nanocoder`]}),i(2),a(q);var J=r(q,14);b(e(J),{get metrics(){return I},get names(){return j},get colors(){return M},tieIdx:5}),i(2),a(J),_(r(J,6),{tone:`info`,children:(e,t)=>{var n=w();i(5),o(e,n)},$$slots:{default:!0}}),a(U),g(r(U,2),{current:`harness-efficiency-not-quality`,get totals(){return p.data.bench.totals}}),a(L),l(e=>{c(z,x.title),c(V,`${e??``} · same model, four harnesses · updated 27 Jul`)},[()=>h(x.date)]),o(s,L),f()}export{E as component,x as universal};